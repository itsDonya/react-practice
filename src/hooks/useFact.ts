import Axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFact = () => {
  const { data, isPending } = useSuspenseQuery({
    queryKey: ["fact"],
    queryFn: () => {
      return Axios.get(
        "http://localhost:3001/blog/slug/why-choose-wash4u"
      ).then((res) => res.data.data);
    },
  });

  return { data, isPending };
};
