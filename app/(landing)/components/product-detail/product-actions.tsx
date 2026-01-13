"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const checkout = () => {};

  return (
    <div className="flex items-center gap-5">
      <div className="flex border border-gray-500 overflow-hidden">
        <div className="w-12 flex items-center justify-center text-base font-medium border-r border-gray-500">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="h-1/2 w-8 flex items-center justify-center cursor-pointer border-b border-gray-500"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp />
          </button>
          <button
            className="h-9 w-8 flex items-center justify-center cursor-pointer"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="flex items-center gap-3 px-6 py-3 bg-primary text-white">
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button
        variant="dark"
        className="flex items-center gap-2 px-6 py-3"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductActions;