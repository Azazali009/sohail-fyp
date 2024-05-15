import { useMutation } from "@tanstack/react-query";
import { createUser as createUserApi } from "../services/apiAuth";

export function useCreateUser() {
  const { mutate: createUser, isPending: isCreating } = useMutation({
    mutationFn: ({ name, email, password }) =>
      createUserApi({ name, email, password }),
    onSuccess: () => {
      alert("User created successfully");
    },
    onError: (err) => alert(err.message),
  });
  return { createUser, isCreating };
}
