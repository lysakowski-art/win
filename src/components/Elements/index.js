import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  min-height: calc(100vh - 30px);
  width: 100%;
  overflow: hidden;
`;

export const Footer = styled.section`
  height: 30px;
`;

export const Push = styled.div``;
export const BackToButton = styled(Link)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.2rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: transparent;
  text-align: center;
  color: black;
  border: 2px solid black;
  text-decoration: none;
  transition: all 0.5s 0s ease;
  &:hover {
    background: black;
    color: white;
  }
`;

export const ListTemplate = styled.ul`
text-decoration: none;
width: 50%;
padding: 2rem;
margin: 0 auto;
a{
  text-decoration:none;
  text-align: center;
}
`;
export const ListItemTemplate = styled.li`
padding: 0.5rem 0;
margin: 0 auto;
width: 5rem;
color: black;
border-bottom: 1px solid black;
width: 12rem;
display: block;
`;
export const UserItem = styled(ListItemTemplate)``;
export const UsersList = styled(ListTemplate)``;

export const UserWrapper = styled.div`
display: flex;
justify-content: space-between;
`
export const UserContainer = styled.div`
`;
// post buttons
export const AddPost = styled.button``;

export const TemplateButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.2rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  color: white;
  transition: all 0.5s 0s ease;
`;

export const CancelButton = styled(TemplateButton)`
  background: black;
  border: 2px solid black;
  &:hover {
    background: transparent;
    color: black;
  }
`;

export const RemoveButton = styled(TemplateButton)`
  background: orangered;
  border: 2px solid orangered;
  &:hover {
    background: transparent;
    color: orangered;
  }
`;
export const AddButton = styled(TemplateButton)`
  background: dodgerblue;
  border: 2px solid dodgerblue;
  &:hover {
    background: transparent;
    color: dodgerblue;
  }
`;
export const ShowButton = styled(TemplateButton)`
width: 10rem;  
background: green;
  border: 2px solid green;
  &:hover {
    background: transparent;
    color: green;
  }
`;

export const Container = styled.div`
  display: block;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: transparent;
`;

export const PostList = styled(ListTemplate)`
width: 60%;
`;

export const PostItem = styled(ListItemTemplate)`
width: 100%;
text-align: start;
`;

export const PostRemovalModal = styled.div``;

export const PostContainer = styled.div``;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoadingSpinner = styled.div`
border: 16px solid #f3f3f3; /* Light grey */
border-top: 16px solid #000000; /* Blue */
border-radius: 50%;
width: 120px;
height: 120px;
animation: ${rotate} 2s linear infinite;
`;
export const TextLine = styled.span``;
export const TitleH5 = styled.h5`
  display: inline-block;
  font-size: 18px;
  line-height: 25px;
`;

export const ModalContainer = styled(Container)`
  background: white;
  position: absolute;
  width: 20rem;
  border: 2px solid black;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const RemoveModalContainer = styled(ModalContainer)`
  border: 2px solid red;
`;
export const AddModalContainer = styled(ModalContainer)`
  border: 2px solid blue;
`;
export const TextArea = styled.textarea`
  width: 80%;
  height: 5rem;
  border: none;
  border-bottom: 1px solid black;
  display: inline-block;
  margin: 0 auto;
`;
export const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  display: inline-block;
  margin: 0 auto;
`;
export const PostBody = styled.div``;

export const PostDataList =styled(ListTemplate)`
width: 80%;
`

export const PostDataItem =styled(ListItemTemplate)`
width: 100%;
border: 1px solid black;
padding: 0.5rem;
h5{
  color: black;
  text-align: center;
  font-size: 20px;
}
`
export const CommentsList = styled(ListTemplate)`
width: 100%;
h5{
  font-size: 20px;
}
`
export const Comment = styled(ListItemTemplate)`
width: 100%;
div{
  display: flex;
  justify-content: space-between;
  h6,p{
    font-size: 14px;
    display: inline-block;
    align-self: center;
  }
}
`

export const UserDataList =styled(ListTemplate)`
width: 50%
`
export const UserDataSubList =styled(ListTemplate)`
width: 100%
// margin:0;
// padding: 0;
`

export const UserDataItem =styled(ListItemTemplate)`
width: 100%;
border: 1px solid black;
padding: 0.5rem;
h5{
  // width: 100%;
  color: black;
  text-align: center;
  font-size:20px;
}
`