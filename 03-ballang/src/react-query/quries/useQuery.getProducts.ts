import API from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetProducts(
  args: {
    orderBy?: "abc" | "popular";
  } = { orderBy: undefined }
) {
  return useQuery({
    queryKey: ["goods", args],
    queryFn: () => API.products.getProducts(args),
  });
}
