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
    <div className="relative bg-background rounded-xl sm:rounded-2xl overflow-hidden w-full h-[90px] sm:h-[100px] md:h-[110px] lg:h-[120px] xl:h-[130px] shadow-lg transition-transform duration-300 hover:text-primary-500 cursor-pointer group hover:scale-[1.02]">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#111]/40 transition-colors duration-300 group-hover:bg-primary-500/40" />
      {/* Content */}
      <div className="flex flex-col justify-end items-start h-full w-full text-left absolute z-10 p-3 sm:p-4 md:p-5">
        <div className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-0.5 sm:mb-1 leading-tight text-[#fff] drop-shadow-lg line-clamp-1">
          {title}
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-[#fff] drop-shadow-lg line-clamp-1">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default MunicipalityCard;
