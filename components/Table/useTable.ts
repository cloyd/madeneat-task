import useSort from "./useSort";

type Cell = {
  key: string;
  value: string;
};

type Row = {
  key: string;
  cells: Cell[];
  original: any;
};

type Header = {
  key: string;
  cells: [];
  original: any;
};

interface UseTableReturn {
  headers: Header[];
  rows: Row[];
}

type SortConfig = {
  enabled: boolean;
};

type Props = {
  columns: string[];
  data: any[];
  sort: SortConfig;
};

type UseTable = (props: Props) => UseTableReturn;

// @ts-expect-error
export const useTable: UseTable = ({
  columns = [],
  data = [],
  sort = {
    enabled: false,
  },
}) => {
  const headers = columns.map((column) => {
    return {
      label: column,
      id: column,
    };
  });

  const sortOptions = useSort(data, sort.enabled);

  if (sort.enabled) {
    const sortedData = sortOptions.sortedData();

    return {
      headers: headers.map((header) => {
        return {
          ...header,
          onClick: () => sortOptions.changeSort(header.id),
          sortOrder: sortOptions.sortOrder,
          sorted: sortOptions.sortKey === header.id,
          getProps: () => ({
            onClick: () => sortOptions.changeSort(header.id),
            className: "sort-button",
          }),
        };
      }),
      rows: sortedData.map((item, idx) => {
        return {
          key: `row-${idx}-${item.id || ""}`,
          original: item,
          cells: headers.map(({ id }) => ({
            key: `cell-${id}`,
            value: item[id],
          })),
        };
      }),
    };
  }

  const rows = data.map((item, idx) => {
    return {
      key: `row-${idx}-${item.id || ""}`,
      original: item,
      cells: headers.map((key) => ({
        key: `cell-${key}`,
        // @ts-expect-error
        value: item[key],
      })),
    };
  });

  return {
    headers,
    rows,
  };
};

export default useTable;
