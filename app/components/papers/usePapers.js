import { getAllPapers } from "@/app/services/apiPapers";
import { useQuery } from "@tanstack/react-query";

export function usePapers() {
  const {
    data: Papers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Papers"],
    queryFn: getAllPapers,
  });

  return { Papers, isLoading, isError };
}
