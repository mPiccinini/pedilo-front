interface UltimasComprasProps {
  imageSrc: string;
  title: string;
  description: string;
}

function UltimasCompras({ imageSrc, title, description }: UltimasComprasProps) {
  return (
    <div className="relative flex flex-col items-center p-2 shadow-lg bg-primary-50 rounded-lg w-[80px] h-[113px]">
      <img
        src={imageSrc}
        alt="Product image"
        className="w-[77px] h-[56px] rounded-full object-cover"
      />
      <div className="absolute top-[65px] left-[8px] w-[70px] text-left">
        <p className="text-title3 text-gray-800 leading-none truncate">{title}</p>
        <p className="text-label2 text-gray-600 leading-none truncate">{description}</p>
      </div>
    </div>
  );
}

export default UltimasCompras;
