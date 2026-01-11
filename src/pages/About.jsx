import '../index.css';
import PageButton from '../components/pagebutton.jsx'
import TextBox from '../components/textbox.jsx'
import { ABOUTME } from '../texts/aboutme.js';
function AboutPage() {

return(

    <>
    <div className="bg-black h-screen w-screen flex flex-col place-items-center">
        <div className="h-2/5 w-full place-items-center flex place-items-end justify-center my-4">
        <PageButton className="hidden absolute top-0 left-0 border-none">
            return
        </PageButton>
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
      className={part.style} // fix this
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