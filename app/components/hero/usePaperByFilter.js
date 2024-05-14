import { getPaperByFilter as getPaperByFilterApi } from "@/app/services/apiPapers";
import { useMutation } from "@tanstack/react-query";

export function usePaperByFilter() {
  const {
    data: Papers,
    mutate: getPaperByfilter,
    isPending,
  } = useMutation({
    mutationFn: ({ filterField, filterValue }) =>
      getPaperByFilterApi({ filterField, filterValue }),
    onError: (err) => alert(err.message),
  });

  return { getPaperByfilter, Papers, isPending };
}
