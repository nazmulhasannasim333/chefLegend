import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ChefLegend`;
  }, [title]);
};
export default useTitle;
