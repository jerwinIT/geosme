import React from "react";

interface MunicipalityCardProps {
  title: string; //string
  subtitle: string; //string
  imageUrl: string; //string
  overlayColor?: string; //string
  overlayOpacity?: string; //string
}

const MunicipalityCard: React.FC<MunicipalityCardProps> = ({
  title,
  subtitle,
  imageUrl,
  overlayColor = "bg-black",
  overlayOpacity = "bg-opacity-70",
}) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden w-full sm:w-[280px] xl:w-[320px] 2xl:w-[360px] h-[100px] shadow-lg transition-transform duration-300 hover:shadow-2xl hover:brightness-110 cursor-pointer group"
      style={{ minWidth: 200, maxWidth: 360 }}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${overlayColor} bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300`}
      ></div>
      {/* Content */}
      <div className="flex flex-col justify-end items-start h-full w-full text-left absolute z-10 p-4">
        <div className="font-extrabold text-lg sm:text-xl mb-1 leading-tight drop-shadow-md">
          {title}
        </div>
        <div className="text-base sm:text-lg font-light drop-shadow-md">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default MunicipalityCard;
