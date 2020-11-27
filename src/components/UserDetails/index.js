import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToButton,PostList,LoadingSpinner} from "../Elements";
import { UserContainer } from "../Elements";
import { getUserByID, getPosts } from "../../redux/actions";
import PostListItem from "../PostListItem"
import AddPost from "../AddPost"
const UserDetails = () => {
  const url = window.location.href.split("/");
  let userID = url[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByID(userID));
    dispatch(getPosts(userID))
  }, [dispatch, userID]);
  const user = useSelector((state) => state.usersReducer.user);
  const posts = useSelector(state => state.postsReducer.posts);
  const { name, username, email, address, phone, website, company } = user;
  return posts && user ? (
    <UserContainer>
      <BackToButton to={`/`}>Back</BackToButton>
      {name}{username} {email} {phone} {website}
      <PostList>
        {posts.map(post=><PostListItem userID={userID} key={post.id} post={post}/>)}
      </PostList>
      <AddPost userID={userID}/>
    </UserContainer>
  ) : (
    <LoadingSpinner/>
  );
};

export default UserDetails;
