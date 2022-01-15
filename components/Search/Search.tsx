import { FC, memo } from "react";

import { Container, Input } from "./Search.styled";

interface Props {
  onChange: (value: string) => void;
}

export const Search: FC<Props> = ({ onChange }) => (
  <Container>
    <Input
      placeholder="Search"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  </Container>
);

export default memo(Search);
