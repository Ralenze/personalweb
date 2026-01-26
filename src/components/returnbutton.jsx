import '../index.css'
import leftarrow from '../assets/l-arrow.svg'
import { useNavigate } from 'react-router-dom';
function ReturnButton(props){
    let navigate = useNavigate();
    return(<>
    <div className={"h-16 p-4 w-1/2 lg: w-1/8 fixed top-0 z-400 left-0 m-4 font-mono sm:text-hidden lg:text-white lg:hover:text-blue-500 duration-150 hover:cursor-pointer hover:bg-neutral-900 flex flex-row justify-content-center text-2xl"}
    onClick={() => {
        navigate('/')
    }}>
        <img src={leftarrow}></img>

        return
        </div></>)
}


export default ReturnButton;