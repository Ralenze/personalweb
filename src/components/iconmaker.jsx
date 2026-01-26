import '../index.css'


function IconMaker(props) {

    return (
<>
 <a
            href={props.link}
            target="_blank">
          <img
          src={props.source}
           
            className="  hover:cursor-pointer h-8 w-8"
          >
        
            </img>
            </a>
</>
    )


}

export default IconMaker