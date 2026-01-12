import '../index.css'


function TextBox(props) {

return (
    <>
    <div className="h-full w-4/5 lg:w-3/5 text-white font-mono text-center" >
        {props.children}

    </div>
    </>
)

}

export default TextBox;