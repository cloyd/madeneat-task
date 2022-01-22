import { FC, useState } from "react";

import NavButton from "./NavButton";

import { ITEMS_PER_PAGE, LIMIT } from "./constants";

import { PageNumbers } from "./Pagination.styled";

type Props = {
  data: Record<string, unknown>[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination: FC<Props> = ({
  data,
  currentPage,
  setCurrentPage,
}) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(LIMIT);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / ITEMS_PER_PAGE); i++) {
    pages.push(i);
  }

  const handlePageChange = (event): void =>
    setCurrentPage(Number(event.target.id));

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + LIMIT);
      setMinPageNumberLimit(minPageNumberLimit + LIMIT);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % LIMIT == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - LIMIT);
      setMinPageNumberLimit(minPageNumberLimit - LIMIT);
    }
  };

  return (
    <div>
      <PageNumbers>
        <NavButton
          label="Prev"
          onClick={handlePrevPage}
          disabled={currentPage == pages[0]}
        />

        {/* visual cues to tell the users that there are more pages available */}
        {minPageNumberLimit >= 1 && <li onClick={handlePrevPage}> … </li>}

        {pages.map((page) => {
          if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
            return (
              <li
                key={`page-${page}`}
                id={page}
                onClick={handlePageChange}
                className={currentPage === page ? "active" : null}
              >
                {page}
              </li>
            );
          }
        })}

        {minPageNumberLimit >= 1 && <li onClick={handleNextPage}> … </li>}

        <NavButton
          label="Next"
          onClick={handleNextPage}
          disabled={currentPage == pages[pages.length - 1]}
        />
      </PageNumbers>
    </div>
  );
};

export default Pagination;
