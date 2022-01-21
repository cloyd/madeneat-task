import { FC } from "react";

import { SortOrder } from "./Table/useSort";

type SortProps = {
  isSorted: boolean;
  sortOrder: SortOrder;
};

const Sort: FC<SortProps> = ({ isSorted, sortOrder }) => (
  <span>{isSorted ? (sortOrder === "desc" ? " ▼" : " ▲") : ""}</span>
);

export default Sort;
