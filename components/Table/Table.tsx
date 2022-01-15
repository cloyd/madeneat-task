import { FC } from "react";

import { StyledTable } from "./Table.styled";

export const Table: FC = () => {
  const headers = ["name", "gender", "amount", "registered"];
  const rows = [];

  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((column) => (
            <th>{column}</th>
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
