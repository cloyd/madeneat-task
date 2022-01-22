import { useMemo, ReactElement } from "react";

import Sort from "./Sort";

import useTable from "./useTable";

import { StyledTable, HeaderContainer } from "./Table.styled";

type Props<DataItem extends Record<string, unknown>> = {
  data: DataItem[];
  columns: string[]; // TODO: create columns type/interface
  isLoading?: boolean;
};

export const Table = <DataItem extends Record<string, unknown>>({
  data: dataProps = [],
  isLoading = false,
  columns: columnProps,
}: Props<DataItem>): ReactElement | null => {
  const columns = useMemo(() => [...columnProps], [columnProps]);
  const data = useMemo(() => [...dataProps], [dataProps]);

  const { headers, rows } = useTable({
    columns,
    data,
    sort: {
      enabled: true,
    },
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((column) => (
            // @ts-expect-error
            <th {...column.getProps()}>
              <HeaderContainer>
                {/* @ts-expect-error */}
                {column.label}
                {/* @ts-expect-error */}
                <Sort isSorted={column.sorted} sortOrder={column.sortOrder} />
              </HeaderContainer>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row.key}>
              {row.cells.map((cell) => (
                <td key={cell.key}>{cell.value}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
