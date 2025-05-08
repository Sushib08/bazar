import React from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={onClick}
        className="px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition"
      >
        Voir plus
      </button>
    </div>
  );
};

export default LoadMoreButton;
