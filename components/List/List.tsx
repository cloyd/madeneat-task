import { FC } from "react";

import { User } from "@interfaces/index";

import Item from "./Item";

type Props = {
  items: User[];
};

const List: FC<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <Item data={item} />
      </li>
    ))}
  </ul>
);

export default List;
