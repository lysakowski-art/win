import styled from "styled-components";
import { Link } from "react-router-dom";
import RemoveModal from "../RemoveModal";

export const Wrapper = styled.section`
  min-height: calc(100vh - 30px);
  overflow: hidden;
`;

export const Footer = styled.section`
  height: 30px;
`;

export const Push = styled.div``;
export const BackToButton = styled(Link)`
  display: inline-block;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: transparent;
  text-align: center;
  color: black;
  border: 2px solid black;
  text-decoration: none;
`;
export const UserItem = styled.li``;

export const UsersList = styled.ul``;
export const UserContainer = styled.div``;
// post buttons
export const AddPost = styled.button``;

export const TemplateButton = styled.button`
  display: inline-block;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: red;
  color: white;
  border: 2px solid red;
`;

export const CancelButton = styled(TemplateButton)`
  background: black;
  border: 2px solid black;
`;

export const RemoveButton = styled(TemplateButton)`
background: red;
border: 2px solid red;
`;
export const AddButton = styled(TemplateButton)`
background: blue;
border: 2px solid blue;
`

export const Container =styled.div`
display: block;
border-radius: 30px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 5rem;
background: transparent;
`;

export const PostList = styled.ul``;

export const PostItem = styled.li``;

export const PostRemovalModal = styled.div``;

export const PostContainer = styled.div``;

export const LoadingSpinner = styled.div``;
export const TextLine = styled.span`
`;
export const TitleH5 = styled.h5`
display:inline-block
`

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
`
export const AddModalContainer = styled(ModalContainer)`
border: 2px solid blue;

`
export const TextArea = styled.textarea`
width:80%;
height: 5rem;
border: none;
border-bottom: 1px solid black;
display: inline-block;
margin: 0 auto;
`
export const Input =styled.input`
width:80%;
border: none;
border-bottom: 1px solid black;
display: inline-block;
margin: 0 auto;
`