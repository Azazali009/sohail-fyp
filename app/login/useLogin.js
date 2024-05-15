import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.log(err);
      if (
        err.message
          .toString()
          .startsWith("Cannot read properties of undefined ")
      ) {
        return alert("Something went wrong. Please try again later!");
      } else {
        alert(err.message);
        console.log("error", err);
      }
    },
  });

  return { login, isPending };
}
