"use client";

import React, { useState, useEffect } from "react";
import BusinessCard from "@/components/BusinessCard";
import BusinessCardSkeleton from "@/components/BusinessCardSkeleton";
import { Business } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy data
const dummyBusinesses: Business[] = [
  {
    id: "1",
    name: "Café Delight",
    imageUrl:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
    rating: 4.5,
    municipality: "Lipa City",
    category: "Café",
    priceRange: "₱₱",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Tech Solutions Hub",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    municipality: "Batangas City",
    category: "Technology",
    priceRange: "₱₱₱",
    isFavorite: true,
  },
  {
    id: "3",
    name: "Green Thumb Garden",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=60",
    rating: 4.2,
    municipality: "Lemery",
    category: "Gardening",
    priceRange: "₱",
    isFavorite: false,
  },
  {
    id: "4",
    name: "Green Thumb Garden",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=60",
    rating: 4.2,
    municipality: "Manila",
    category: "Gardening",
    priceRange: "₱",
    isFavorite: false,
  },
  {
    id: "5",
    name: "Green Thumb Garden",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=60",
    rating: 4.2,
    municipality: "Manila",
    category: "Gardening",
    priceRange: "₱",
    isFavorite: false,
  },
];

const ITEMS_PER_PAGE = 8;

const BusinessFeed: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    // Simulate API call
    const fetchBusinesses = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setBusinesses(dummyBusinesses);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  const handleFavoriteToggle = (id: string) => {
    // TODO: Implement favorite toggle logic
    console.log("Toggle favorite for business:", id);
  };

  const handleError = (error: Error) => {
    console.error("Error loading business image:", error);
  };

  // Calculate pagination
  const totalPages = Math.ceil(businesses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBusinesses = businesses.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? // Show skeleton loading based on total number of businesses
            Array.from({
              length: businesses.length || dummyBusinesses.length,
            }).map((_, index) => <BusinessCardSkeleton key={index} />)
          : // Show actual business cards
            currentBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                {...business}
                onFavoriteToggle={handleFavoriteToggle}
                onError={handleError}
              />
            ))}
      </div>

      {/* Pagination Controls */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default BusinessFeed;
