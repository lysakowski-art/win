import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BackToButton,
  PostList,
  UserWrapper,
  LoadingSpinner,
} from "../Elements";
import { UserContainer } from "../Elements";
import { getUserByID, getPosts } from "../../redux/actions";
import PostListItem from "../PostListItem";
import AddPost from "../AddPost";
import UserData from "../UserData";
const UserDetails = () => {
  const url = window.location.href.split("/");
  let userID = url[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByID(userID));
    dispatch(getPosts(userID));
  }, [dispatch, userID]);
  const user = useSelector((state) => state.usersReducer.user);
  const posts = useSelector((state) => state.postsReducer.posts);
  return posts && user.address && user.company ? (
    <UserContainer>
      <UserWrapper>
        <BackToButton to={`/`}>Back</BackToButton>
        <AddPost userID={userID} />
      </UserWrapper>
      <UserData user={user} />
      <PostList>
        {posts.map((post, index) => (
          <PostListItem userID={userID} key={index} post={post} />
        ))}
      </PostList>
    </UserContainer>
  ) : (
    <LoadingSpinner />
  );
};

export default UserDetails;
