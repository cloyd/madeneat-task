import { useState, useCallback } from "react";

export type SortOrder = "asc" | "desc";

const sortData = ({ tableData, sortKey, reverse, isEnabled }) => {
  if (!sortKey || !isEnabled) return tableData;

  const sortedData = tableData.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
};

const useSort = (tableData, isEnabled = false) => {
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedData = useCallback(
    () =>
      sortData({
        tableData,
        sortKey,
        reverse: sortOrder === "desc",
        isEnabled,
      }),
    [tableData, sortKey, sortOrder]
  );

  const changeSort = (key) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");

    setSortKey(key);
  };

  return {
    changeSort,
    sortedData,
    sortOrder,
    sortKey,
  };
};

export default useSort;
