import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CommentsList,
  Comment,
  PostDataItem,
  PostDataList,
  BackToButton,
  ShowButton,
  PostContainer,
  PostBody,
  LoadingSpinner,
} from "../Elements";
import { getPostByID, getComments } from "../../redux/actions";
import { findAllByTitle } from "@testing-library/react";

const PostDetails = () => {
  const [show, setShow] = useState(false);
  const url = window.location.href.split("/");
  let userID = url[4];
  let postID = url[5];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostByID(userID, postID));
    dispatch(getComments(userID, postID));
  }, [dispatch, userID, postID]);
  const post = useSelector((state) => state.postsReducer.post[0]);
  const comments = useSelector((state) => state.commentsReducer.comments);
  const handleShow = () => {
    setShow(!show);
  };
  return post ? (
    <PostContainer>
      <BackToButton to={`/user/${userID}`}>Back</BackToButton>
      <PostDataList>
        <PostDataItem>
          <h5>{post.title}</h5>
        </PostDataItem>
        <PostDataItem>{post.body}</PostDataItem>
        <ShowButton onClick={handleShow}>
          {show ? "Hide Comments" : "Show Comments"}
        </ShowButton>
        {show ? (
          <CommentsList>
            <h5>Comments:</h5>
            {comments.map((comment, index) => (
              <Comment key={index}>
                <div>
                  <h6>{comment.name}</h6>
                  <p>{comment.email}</p>
                </div>
                {comment.body}
              </Comment>
            ))}
          </CommentsList>
        ) : null}
      </PostDataList>
    </PostContainer>
  ) : (
    <LoadingSpinner />
  );
};

export default PostDetails;
