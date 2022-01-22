import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const PageNumbers = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    padding: 1em;
    cursor: pointer;

    &.active {
      background-color: #1f2937;
      color: white;

      &:hover {
        background-color: #1f2937;
      }
    }

    &:first-child,
    &:last-child {
      padding: 0;
      margin: 0;
    }

    &:hover {
      background-color: #f5f8fa;
    }

    button {
      background-color: transparent;
      border: none;
      color: black;
      font-size: 1.5em;
      cursor: pointer;
      padding: 0.375em 1em;

      &:focus {
        outline: none;
      }
    }
  }
`;
