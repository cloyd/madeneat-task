import { FC } from "react";

type SortProps = {
  isSorted: boolean;
  isSortedDesc: boolean;
};

const Sort: FC<SortProps> = ({ isSorted, isSortedDesc }) => (
  <span>{isSorted ? (isSortedDesc ? "  &#9660;" : " &#9650") : ""}</span>
);

export default Sort;
