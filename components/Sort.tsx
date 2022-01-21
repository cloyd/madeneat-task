import { FC } from "react";

import { SortOrder } from "./Table/useSort";

type SortProps = {
  isSorted: boolean;
  sortOrder: SortOrder;
};

const Sort: FC<SortProps> = ({ isSorted, sortOrder }) => (
  <span>
    {isSorted ? (sortOrder === "desc" ? "  &#9660;" : " &#9650") : ""}
  </span>
);

export default Sort;
