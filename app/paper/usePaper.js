import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSinglePaper } from "../services/apiPapers";

export function usePaper() {
  const { paperId } = useParams();

  const {
    data: Paper,
    isLoading: isLoadingSinglePaper,
    isError,
  } = useQuery({
    queryFn: () => getSinglePaper(paperId),
    queryKey: ["Paper", paperId],
  });

  return { Paper, isLoadingSinglePaper, isError };
}
