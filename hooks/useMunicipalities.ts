import { useState, useEffect } from "react";
import { Municipality, PaginationParams, SearchParams } from "@/types";
import { getMunicipalities } from "@/services/municipality.service";

interface UseMunicipalitiesReturn {
  municipalities: Municipality[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useMunicipalities(
  params: PaginationParams
): UseMunicipalitiesReturn {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMunicipalities = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getMunicipalities(params);

      if (response.error) {
        setError(response.error);
        return;
      }

      setMunicipalities(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMunicipalities();
  }, [params.page, params.limit]);

  return {
    municipalities,
    isLoading,
    error,
    refetch: fetchMunicipalities,
  };
}
