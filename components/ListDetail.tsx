import { User } from "@interfaces/index";

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
    <p>Gender: {user.gender}</p>
    <p>Amount: {user.amount}</p>
    <p>Registered: {user.registered}</p>
  </div>
);

export default ListDetail;
