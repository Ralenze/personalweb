import '../index.css'

function PageButton(props) {

    return (

        <>
        <div className={"h-16 w-3/5 text-text text-center justify-content-center text-3xl rounded-2xl border-neutral-550 border bg-neutral-900 my-2 place-content-center font-mono"}>
        {props.children}
        </div>
        </>
    )
}

export default PageButton;