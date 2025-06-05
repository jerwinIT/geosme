export interface Municipality {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface Theme {
  mode: "light" | "dark";
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SearchParams {
  query: string;
  filters?: Record<string, string>;
}

export interface Business {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  municipality: string;
  category: string;
  priceRange: string;
  isFavorite: boolean;
}
