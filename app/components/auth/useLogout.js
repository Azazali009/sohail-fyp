import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLogOuting } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/", { replace: true });
    },
    onError: (err) => {
      alert("Something went wrong please try again later!");
      console.log(err);
    },
  });
  return { logout, isLogOuting };
}
