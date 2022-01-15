import styled from "@emotion/styled";

export const StyledTable = styled.table`
  width: 100%;
  margin: 0;
  border: 0;

  border-collapse: collapse;

  th {
    top: 0;
    box-shadow: 0 1px 0 #6f6f6f;
    text-transform: uppercase;
    text-align: left;
    color: #707274;
    padding: 20px;
    min-width: 44px;
  }

  tbody {
    tr {
      border-bottom: 1px solid #d9dee5;

      &: hover {
        background-color: #f5f8fa;
      }
    }

    td {
      padding: 20px;
      text-align: left;
      vertical-align: middle;
      align-self: center;
    }
  }

  thead tr {
    border-bottom: 1px solid #707274;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0em 0.5em;
  }
`;
