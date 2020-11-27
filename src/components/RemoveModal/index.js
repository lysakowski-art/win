import {RemoveModalContainer,TitleH5,RemoveButton, CancelButton} from "../Elements"

import {deletePost} from "../../redux/actions"
import {useDispatch} from "react-redux"

const RemoveModal = ({userID, id, setShow}) => {
    const dispatch = useDispatch()
    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(userID,id)
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setShow(false)
    }
    return ( 
        <>
        <RemoveModalContainer>
        <TitleH5>Are you sure, you want to remove post?</TitleH5>
        <>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </>
        </RemoveModalContainer>
        </>
     );
}
 
export default RemoveModal;