import '../index.css';
import PageButton from '../components/pagebutton.jsx'
import TextBox from '../components/textbox.jsx'
import ReturnButton from '../components/returnbutton.jsx';
import githubIcon from '../assets/github-mark.svg'
import IconMaker from '../components/iconmaker.jsx';
import linkedinIcon from '../assets/linkedinFinal.png';
import { ABOUTME } from '../texts/aboutme.js';
import { contactMe } from '../texts/contactme.js';
function Contact() {const colorMap = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
};
return(

    <>
    <div className="bg-black h-screen w-screen flex flex-col place-items-center">
        <div className="h-1/5 w-full place-items-center flex place-items-end justify-center my-4">
       <ReturnButton/>
    <PageButton>
        contact
    </PageButton>
</div>
<div className="h-3/4 place-items-center">
    <TextBox>
          {contactMe.contact.title.map((part, i) => (
            part.style == "linebreak" ? 
            <div key={i}>
            <span>
                <br  />
                <br />
                </span>
            </div>

             :
         <a href={part.href? part.href : null}
         target={part.href? "_blank": "null"}>  
    <span
      key={i}
      className={part.colour ? colorMap[part.colour] : ""} // fix this
      
    >
      {part.text}
    </span>
    </a>  
  ))}
    </TextBox>
    </div>
    </div>
    </>
)

}


export default Contact