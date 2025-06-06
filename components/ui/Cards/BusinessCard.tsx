"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Business } from "@/types";
import { cn } from "@/lib/utils";

interface BusinessCardProps extends Business {
  onFavoriteToggle: (id: string) => void;
  onError: (error: Error) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  id,
  name,
  imageUrl,
  rating,
  municipality,
  category,
  priceRange,
  isFavorite,
  onFavoriteToggle,
  onError,
}) => {
  return (
    <div className="group relative rounded-lg bg-card text-card-foreground  transition-all hover:shadow-md">
      {/* Image Container with Favorite Button */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          onError={() => onError(new Error(`Failed to load image for ${name}`))}
        />
        <button
          onClick={() => onFavoriteToggle(id)}
          className="absolute right-2 top-2 rounded-full bg-white/80 p-1.5 shadow-sm transition-colors hover:bg-white"
        >
          <Star
            className={cn(
              "h-5 w-5",
              isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
            )}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold line-clamp-1 text-text">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-text">{rating}</span>
          </div>
        </div>

        <div className="mt-2 text-sm text-muted-foreground text-text">
          <p>
            {municipality} • {category}
          </p>
          <p className="mt-1 font-medium text-primary">{priceRange}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
