import {
  AddModalContainer,
  TitleH5,
  AddButton,
  CancelButton,
  TextArea,
  Input,
} from "../Elements";
import { useEffect, useState } from "react";
import { addPost } from "../../redux/actions";
import { useDispatch } from "react-redux";

const AddModal = ({ userID, id, setShow }) => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setData({
      userID,
      title,
      body,
    });
  }, [userID, title, body]);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(data);
    // dispatch(userID,id)
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setTitle("");
    setBody("");
    setData({});
    setShow(false);
  };
 
  return (
    <>
      <AddModalContainer>
        <TitleH5>Are you sure, you want to remove post?</TitleH5>
        <>
          <Input
            placeholder="title"
            value={title}
            onChange={handleChangeTitle}
          />
          <TextArea
            placeholder="Type what's on your mind..."
            value={body}
            onChange={handleChangeBody}
          />
        </>
        <>
          <AddButton onClick={handleAdd}>Add</AddButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </>
      </AddModalContainer>
    </>
  );
};

export default AddModal;
