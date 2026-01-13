"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

// tipe props
type OrderSubmittedProps = {
  setIsConfirmed: (value: boolean) => void;
};

const OrderSubmitted = ({ setIsConfirmed }: OrderSubmittedProps) => {
  return (
    <div className="bg-white max-w-xl w-full p-16 rounded-2xl shadow mx-auto flex flex-col justify-center items-center text-center mb-32">
      <Image
        src="/images/icon-order-submitted.svg"
        width={117}
        height={117}
        alt="order submitted"
        className="mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">Order Submitted!!</h2>
      <p className="text-center mb-8">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      <Button variant="dark" className="w-full" onClick={() => setIsConfirmed(true)}>
        <FiRefreshCw />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;