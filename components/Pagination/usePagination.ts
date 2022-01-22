import { useState } from "react";

import { ITEMS_PER_PAGE } from "./constants";

export const usePagination = (data = []) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    setCurrentPage,
    currentItems,
  };
};

export default usePagination;
