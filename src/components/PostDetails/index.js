import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToButton, PostContainer, LoadingSpinner } from "../Elements";
import { getPostByID } from "../../redux/actions";
import { findAllByTitle } from "@testing-library/react";


const PostDetails = () => {
    const url = window.location.href.split("/");
    let userID = url[4];
    let postID = url[5]
    console.log(userID,postID)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPostByID(userID,postID));
    }, [dispatch, userID, postID]);
    const post = useSelector(state=> state.postsReducer.post[0])
    return post ?(
        <PostContainer>
          <BackToButton to={`/user/${userID}`}>Back</BackToButton>
          <h4>{post.title}</h4>
        <p>{post.body}</p>
        </PostContainer>
        ) : (
          <LoadingSpinner/>
        )
}
 
export default PostDetails;