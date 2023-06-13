import './App.css'
import './App-media.css'
import './Form.css'
import { ReturnImage } from './components/Image'
import { ReturnExperienceData } from './components/Experience'
import { useState, useRef } from 'react'
import { backend, frontend, others } from './Objects'
// import { CSSTransition } from 'react-transition-group';


function App() {
  const [image, setImage] = useState('backend')
  const nodeRef = useRef(null);

  const handleClick = (state) => {
    const newState = state
    setImage(newState)
  }

  return (
    <>
      <main className='container'>
        <div className="title">
          <h1 style={{ display: "flex", alignContent: "center" }}>Steven Martínez Aguirre <img src="costa-rica.png" alt="Costa Rica Flag" width='20px' style={{ marginLeft: "5px" }} /> </h1>
          <h2>Full-Stack Developer</h2>
          <span></span>
          <span>steven10martinez@gmail.com</span>
        </div>
        <div className='row'>
          <div className="column" >
            <section id='information'>
              <div id='professionalProfile'>
                <p>
                  I am a full stack developer with knowledge in programming, data analysis, and project management. I am passionate about creating applications that solve real-world problems. I have experience in developing personal and collaborative projects, using agile methodologies and version control tools. I consider myself a self-taught and proactive learner, always willing to acquire new skills and take on new challenges.
                </p>
              </div>
            </section>
            <section id='tools'>
              <h2>TOOLS</h2>
              <div className="nav" >
                <ul>
                  <li><button onClick={() => handleClick('backend')} className={`button ${image === 'backend' ? 'active' : ''}`}>Backend</button></li>
                  <li><button onClick={() => handleClick('frontend')} className={`button ${image === 'frontend' ? 'active' : ''}`}>FrontEnd</button></li>
                  <li><button onClick={() => handleClick('others')} className={`button ${image === 'others' ? 'active' : ''}`}>Others</button></li>
                </ul>
              </div>
              <div className='grid' ref={nodeRef}>
                {
                  image === 'backend' ? (
                    backend.map((tool, index) => (
                      <div className="toolContainer" key={index}>
                        <ReturnImage img={`${tool.imageName}.png`} alt={tool.name} className="tool" width="75px" />
                      </div>
                    ))
                  ) : image === 'frontend' ? frontend.map((tool, index) => (
                    <div className="toolContainer" key={index} >
                      <ReturnImage img={`${tool.imageName}.png`} alt={tool.name} className="tool" width="75px" />
                    </div>
                  )) : others.map((tool, index) => (
                    <div className="toolContainer" key={index} >
                      <ReturnImage img={`${tool.imageName}.png`} alt={tool.name} className="tool" width="75px" />
                    </div>
                  ))
                }

              </div>


            </section>
          </div>
          <div className="column">
            <ReturnImage img="retrato.png" alt='retrato' className="retrato" width="300px" />
            <section id='experience'>
              <h2>EXPERIENCE</h2>
              <div id='experienceDescription'>
                <ul>
                  <li>
                    <ReturnExperienceData
                      year='2022 / 2023'
                      description='Development of scripts to automate the data entry process on a SAP system web page.'
                      place='Robert Bosch'
                      role="RPA Developer (Intership)" />
                  </li>
                  <li>
                    <ReturnExperienceData
                      year='2023'
                      description='Design and 
                      development of an application that scans the 
                      barcode on the student ID card, providing the 
                      capability to display and enable modifications to 
                      their information.
                      '
                      place='C.T.P. Liverpool'
                      role="Full-Stack Developer (Freelance)" />
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>


        <section id='projects'>
          <h2>PROJECTS</h2>
          <div className='projectsContainer' style={{ gap: '15px' }}>
            <a href="https://kimch0.github.io/Project-Vue/#/">
              <ReturnImage img="CocktailsPage.png" alt='Cocktails Page' className="project" />
            </a>
            <a href='https://kimch0.github.io/React-Fake-Store/'>
              <ReturnImage img="FakeStore.png" alt='Fake Store Page' className="project" />
            </a>
            <a href="https://kimch0.github.io/tic-tac-toe/">
              <ReturnImage img="ticTac.PNG" alt='Tic Tac Toe Page' className="project" />
            </a>
          </div>
        </section>


        <section id='contact'>
          <div style={{ width: '50%' }}>
            {/* <h2>CONTACT</h2> */}


            {/* <form >
                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
              </form> */}

          </div>
          <div></div>

        </section>


      </main>
    </>
  )
}

export default App
