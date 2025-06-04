import React from "react";

interface MunicipalityCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const MunicipalityCard: React.FC<MunicipalityCardProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <div
      className="relative bg-background rounded-2xl overflow-hidden w-full sm:w-[280px] xl:w-[320px] 2xl:w-[360px] h-[100px] shadow-lg transition-transform duration-300 hover:text-primary-500 cursor-pointer group"
      style={{ minWidth: 200, maxWidth: 360 }}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#111]/40 transition-colors duration-300 group-hover:bg-primary-500/40" />
      {/* Content */}
      <div className="flex flex-col justify-end items-start h-full w-full text-left absolute z-10 p-4">
        <div className="font-extrabold text-xl lg:text-base sm:text-xl mb-1 leading-tight text-[#fff] drop-shadow-lg">
          {title}
        </div>
        <div className="text-base text-xl lg:text-base sm:text-lg font-light text-[#fff] drop-shadow-lg">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default MunicipalityCard;
