import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UsersList } from "../Elements";
import { getUsers } from "../../redux/actions";
import SingleUser from "../UserDetails"
import UserItem from "../UserItem"

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const usersArr = useSelector((state) => state.usersReducer.users);
  // const history = useHistory();
  // const getToUser = (id) => history.push(`/user/${id}`);
  // console.log(usersArr);
  return (
    <UsersList>
      {usersArr.slice(0,8).map(user=><UserItem key={user.id} user={user}/>)}
    </UsersList>
  );
};

export default Users;
