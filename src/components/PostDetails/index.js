import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackToButton } from "../Elements";
import { PostContainer } from "../Elements";
// import { getPostByID } from "../../redux/actions";


const PostDetails = () => {
    const url = window.location.href.split("/");
    let urlID = url[4];
    const dispatch = useDispatch();
    useEffect(() => {
    //   dispatch(getPostByID(urlID));
    }, [dispatch, urlID]);
    return ( 
        <>
        </>
     );
}
 
export default PostDetails;