import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToButton } from "../Elements";
import { UserContainer } from "../Elements";
import { getUserByID } from "../../redux/actions";

const UserDetails = () => {
  const url = window.location.href.split("/");
  let urlID = url[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByID(urlID));
  }, [dispatch, urlID]);

  const user = useSelector((state) => state.usersReducer.user);
  const { name, username, email, address, phone, website, company } = user;
  return (
    <UserContainer>
      <BackToButton to="/">Back</BackToButton>
      {username} {email} {phone} {website}
      
    </UserContainer>
  );
};

export default UserDetails;
