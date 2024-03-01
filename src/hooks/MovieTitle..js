import { useEffect } from "react";

export const MovieTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Movie App`;
  }, []);
  return null;
}