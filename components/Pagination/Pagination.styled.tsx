import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2em 1em;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const PageNumbers = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;

  li {
    padding: 0.625em;
    border: 1px solid black;
    cursor: pointer;

    &.active {
      background-color: #1f2937;
      color: white;
    }

    button {
      background-color: transparent;
      border: none;
      color: black;
      font-size: 1.5em;
      cursor: pointer;

      &:hover {
        background-color: black;
        color: white;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;
