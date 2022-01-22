import { useState } from "react";

import { ITEMS_PER_PAGE } from "./constants";

export const usePagination = (data = []) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const filteredData = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    setCurrentPage,
    filteredData,
  };
};

export default usePagination;
