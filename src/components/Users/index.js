import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UsersList } from "../Elements";
import { getUsers } from "../../redux/actions";
import UserItem from "../UserListItem"

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const usersArr = useSelector((state) => state.usersReducer.users);
  
  return (
    <UsersList>
      {usersArr.slice(0,8).map((user,index)=><UserItem key={index} user={user}/>)}
    </UsersList>
  );
};

export default Users;
