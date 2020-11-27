import {AddButton} from "../Elements"
import {useState} from "react"
import AddModal from "../AddModal"
const AddPost = ({userID}) => {
    const [show, setShow] = useState(false)
    const handleClick =(e) =>{
        e.preventDefault(e)
        setShow(!show)
    }
    return (
        <> 
        <AddButton onClick={handleClick}>Add</AddButton>
        {show? <AddModal userID={userID} setShow={setShow}/>:null}
        </>
     );
}
 
export default AddPost;