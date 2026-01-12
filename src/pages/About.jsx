import '../index.css';
import PageButton from '../components/pagebutton.jsx'
import TextBox from '../components/textbox.jsx'
import ReturnButton from '../components/returnbutton.jsx';
import { ABOUTME } from '../texts/aboutme.js';
function AboutPage() {

return(

    <>
    <div className="bg-black h-screen w-screen flex flex-col place-items-center">
        <div className="h-2/5 w-full place-items-center flex place-items-end justify-center my-4">
       <ReturnButton/>
    <PageButton>
        about
    </PageButton>
</div>
<div className="h-3/4 place-items-center">
    <TextBox>
          {ABOUTME.hero.title.map((part, i) => (
            (part.style == "linebreak") ? 
            <>
                <br  />
                <br />
            </>

             :
             
    <span
      key={i}
      className={part.colour? "text-" + part.colour + "-500" : ""} // fix this
    >
      {part.text}
    </span>
  ))}
    </TextBox>
    </div>
    </div>
    </>
)




}

export default AboutPage;