import { FC } from "react";
import { User } from "@interfaces/index";

type Props = {
  item: User;
};

const Detail: FC<Props> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
    <p>Gender: {user.gender}</p>
    <p>Amount: {user.amount}</p>
    <p>Registered: {user.registered}</p>
  </div>
);

export default Detail;
