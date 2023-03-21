import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import More from './components/More/More';
import { CV } from "./CV/Cv";

const { hero, education, experience, languages, habilities, tools, aboutMe} = CV;

function App() {

  const [btnInfo, setBtnInfo] = useState("1");

  return (
<div className='App'>
  <div className='btnOn'>
  <button onClick={()=> setBtnInfo("1")}>About</button>
  <button onClick={()=> setBtnInfo("2")}>My experience</button>
  <button onClick={()=> setBtnInfo("3")}>My Tools</button>
  <button onClick={()=> setBtnInfo("4")}>My skills</button>
  </div>
  
  <Hero hero={hero} /> {/* que sea "1" */}
  <About aboutMe={aboutMe}/>  {/* que sea "1" */}
  <Education education={education}  
             tools={tools}/> {/* que sea "3" */}
  <Experience experience={experience}/> {/* que sea "2" */}
	<More languages={languages} 
	      habilities={habilities}/> {/* que sea "4" */}
</div>
  );
}

export default App;
