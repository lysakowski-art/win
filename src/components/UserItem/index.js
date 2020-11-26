import { UserItem } from "../Elements";
import {Link} from "react-router-dom"
const UserListItem = ({ user }) => {
  const {id, name, username, email, address, phone, website, company } = user;
  return (
    <Link to={`/user/${id}`}>
      <UserItem>{name}</UserItem>
    </Link>
  );
};

export default UserListItem;
