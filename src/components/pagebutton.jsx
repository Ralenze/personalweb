import '../index.css'
import { useNavigate } from "react-router-dom";

function PageButton(props) {
    let navigate = useNavigate();

    return (

        <>
        <div className={"h-16 w-3/5 text-text text-center  hover:cursor-pointer justify-content-center text-3xl lg:rounded-2xl border-b-text border-b lg:border-none duration-150 my-2 place-content-center hover:text-blue-500 hover:bg-neutral-900 font-mono " + props.className} 
        onClick={()=>{
            navigate(props.route)
        }}>
        {props.children}
        </div>
        </>
    )
}

export default PageButton;