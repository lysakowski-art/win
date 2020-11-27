import {RemoveButton} from "../Elements"
import {useState} from "react"
import RemoveModal from "../RemoveModal"
const RemovePost = ({id}) => {
    const [show, setShow] = useState(false)
    const handleClick =(e) =>{
        e.preventDefault(e)
        console.log(`wyjebany ${id}`)
        setShow(!show)
    }
    return (
        <> 
        <RemoveButton onClick={handleClick}>Remove</RemoveButton>
        {show? <RemoveModal setShow={setShow}/>:null}
        </>
     );
}
 
export default RemovePost;