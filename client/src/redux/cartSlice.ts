import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const token = localStorage.getItem("authToken");
  const res = await fetch("http://localhost:5000/api/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.items.map((item: any) => ({
    id: item.productId._id || item.productId,
    name: item.productId.title || "",
    image: item.productId.imageSrc || "",
    price: item.productId.price || 0,
    quantity: item.quantity,
  }));
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (product: CartItem) => {
    const token = localStorage.getItem("authToken");
    await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId: product.id, quantity: 1 }),
    });
    return product;
  }
);

export const updateQuantityAsync = createAsyncThunk(
  "cart/updateQuantityAsync",
  async ({ id, quantity }: { id: string; quantity: number }) => {
    const token = localStorage.getItem("authToken");
    await fetch("http://localhost:5000/api/cart/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId: id, quantity }),
    });
    return { id, quantity };
  }
);

export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCartAsync",
  async (id: string) => {
    const token = localStorage.getItem("authToken");
    await fetch(`http://localhost:5000/api/cart/remove/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

export const clearCartAsync = createAsyncThunk(
  "cart/clearCartAsync",
  async () => {
    const token = localStorage.getItem("authToken");
    await fetch("http://localhost:5000/api/cart/clear", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCart.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.items = action.payload;
        }
      )
      .addCase(
        addToCartAsync.fulfilled,
        (state, action: PayloadAction<CartItem>) => {
          const existing = state.items.find((i) => i.id === action.payload.id);
          if (existing) {
            existing.quantity += 1;
          } else {
            state.items.push(action.payload);
          }
        }
      )
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        const item = state.items.find((i) => i.id === action.payload.id);
        if (item) item.quantity = action.payload.quantity;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      })
      .addCase(clearCartAsync.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
