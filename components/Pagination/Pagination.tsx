import { FC } from "react";

import { Container, PaginationButtons } from "./Pagination.styled";

export const Pagination: FC = () => {
  // states
  let pageCount = 0,
    pageIndex = 0,
    pageOptions = 0;

  let canPreviousPage = false,
    canNextPage = false;

  // pagination methods
  const goToPage = (page: number): void => {
    console.log("go to page: ", page);
  };
  const previousPage = (): void => {};
  const nextPage = (): void => {};

  return (
    <Container>
      <PaginationButtons>
        <button onClick={() => goToPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => goToPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </PaginationButtons>
    </Container>
  );
};

export default Pagination;
