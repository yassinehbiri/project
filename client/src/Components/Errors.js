import { useSelector } from "react-redux"
import {Alert} from 'react-bootstrap'
const Errors=()=>{
    const errors = useSelector(state=> state.ErrorReducer)
    return(
        <div>
          
        {
            errors.map(el=> <Alert variant='danger'>
                {el.msg}
              </Alert>)
        }
        </div>
    )
}

export default Errors