import {RemoveButton} from "../Elements"
import {useState} from "react"
import RemoveModal from "../RemoveModal"
const RemovePost = ({id}) => {
    const [show, setShow] = useState(false)
    const handleClick =(e) =>{
        e.preventDefault(e)
        setShow(!show)
        console.log(show);
    }
    return (
        <> 
        <RemoveButton onClick={handleClick}>Remove</RemoveButton>
        {show? <RemoveModal id={id} setShow={setShow}/>:null}
        </>
     );
}
 
export default RemovePost;