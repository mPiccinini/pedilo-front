interface OrderSummaryProps {
  items: { name: string; price: number }[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const formatPrice = (price: number) => {
    const formattedPrice = Math.abs(price).toLocaleString();
    return price < 0 ? `- $${formattedPrice}` : `$${formattedPrice}`;
  };

  const total = calculateTotal();

  return (
    <div className="w-[360px] min-h-[220px] p-4 border border-black rounded-[16px] flex flex-col justify-between">
      <div>
        <p className="text-title3 font-roboto mb-4">Resumen de compra:</p>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-label1 font-roboto">{item.name}</span>
              <span className="text-label1 font-roboto">{formatPrice(item.price)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow"></div>
      <hr className="border-t border-black mb-2" />
      <div className="flex justify-between">
        <span className="text-title2 font-roboto">Total</span>
        <span className="text-title2 font-roboto">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
