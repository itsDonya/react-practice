import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useCafFact = (refetchMessage = "Done!") => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["fact"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  const refetchFact = () => {
    refetch().then(() => {
      alert(refetchMessage);
    });
  };

  return { data, isPending, isError, error, refetch: refetchFact };
};
