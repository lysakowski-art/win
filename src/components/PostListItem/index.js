import { PostItem,TitleH5 } from "../Elements";
import RemovePost from "../RemovePost";
import { Link } from "react-router-dom";
const PostListItem = ({ post, userID }) => {
  const { title, id } = post;
  return (
    <Link to={`/user/${userID}/${id}`}>
      <PostItem>
        <RemovePost userId={userID} id={id} />
        <TitleH5>{title}</TitleH5>
      </PostItem>
    </Link>
  );
};

export default PostListItem;
