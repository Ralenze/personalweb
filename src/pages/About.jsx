import '../index.css';
import PageButton from '../components/pagebutton.jsx'
import TextBox from '../components/textbox.jsx'
import ReturnButton from '../components/returnbutton.jsx';
import { ABOUTME } from '../texts/aboutme.js';
function AboutPage() {
const colorMap = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
};
return(

    <>
    <div className="bg-black min-h-screen min-h-[100dvh]  w-screen flex flex-col items-center">
        <div className="h-2/5 w-full flex items-center justify-center my-4">
       <ReturnButton/>
    <PageButton>
        about
    </PageButton>
</div>
<div className="h-3/4 flex justify-center items-center">
    <TextBox>
          {ABOUTME.hero.title.map((part, i) => (
            part.style == "linebreak" ? 
            <div key={i}>
            <span>
                <br  />
                <br />
                </span>
            </div>

             :
             
    <span
      key={i}
      className={part.colour ? colorMap[part.colour] : ""} // fix this
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