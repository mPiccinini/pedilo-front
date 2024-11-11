import { CircularAddIcon } from "@/icons/CircularAddIcon";

interface AgregarACompraProps {
  imageSrc: string;
  title: string;
  description: string;
}

function AgregarACompra({ imageSrc, title, description }: AgregarACompraProps) {
  return (
    <div className="relative flex flex-col items-center p-2 shadow-lg bg-primary-50 rounded-lg w-[86px] h-[109px]">
      <div className="absolute top-[-8px] right-[-8px] z-10 w-[20px] h-[20px]">
        <CircularAddIcon iconColor="#000000" size="20px" />
      </div>
      <img 
        src={imageSrc} 
        alt="Product image" 
        className="w-[77px] h-[56px] rounded-[4px] object-cover"
      />

      <div className="absolute top-[65px] left-[8px] w-[70px] text-left">
        <p className="text-title3 text-gray-800 leading-none truncate">{title}</p>
        <p className="text-label2 text-gray-600 leading-none truncate mt-[2px]">{description}</p> 
      </div>
    </div>
  );
}

export default AgregarACompra;
