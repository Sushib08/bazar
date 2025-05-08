export const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // retire accents
    .replace(/&/g, "et")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, ""); // retire tout caractère spécial
