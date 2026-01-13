import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 space-y-5">
        <div className="flex flex-col space-y-1">
          <label htmlFor="full_name" className="text-sm font-semibold">Full Name</label>
          <input type="text" placeholder="Type your full name" id="full_name" className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"/>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="wa_number" className="text-sm font-semibold">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            id="wa_number"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="shipping_address" className="text-sm font-semibold">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="shipping_address"
            rows={7}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;