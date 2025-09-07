import { useState } from 'react'
import '../styles/Home.css'
import Navbar from './Navbar';


export const Home = () => {
  const [reactHover, setReactHover] = useState(false);
  const [nodeHover, setNodeHover] = useState(false);
  const [expressHover, setexpressHover] = useState(false);
  const [sqlHover, setSqlHover] = useState(false);
  const [git, setGitHover] = useState(false);
  const [css, setCssHover] = useState(false);
  const [html, setHtmlHover] = useState(false);
  return (
    <section>
          <section id='Home'>
          <div className="parent">
              <div className='child-left'>
                <h1>Hello,</h1>
                <h1> I'm <span className='span-name'>Yukesh Reddy</span></h1>
                <h2>Full Stack Developer</h2>
                <div className="buttons">
                  <button className='btn-contact'><a href="#Contact">Contact Me</a></button>
                  <a href='/Yukesh_R_Resume.pdf' download={true}><button className='btn-download'>Download CV</button></a>
                 </div>
              </div>
              <div className='child-right'>
                <img alt='progile-picture' src='public\Images\yukesh.png' className='profile-img'></img>
                <pre>I am a Full-Stack Developer.<br></br>
                  Skilled in building scalable,<br></br>
                 user-focused applications <br></br> from front-end to back-end.</pre>
              </div>
              <div className='scroll'>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=20909&format=png&color=000000'></img>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000'></img>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000'></img>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=54087&format=png&color=000000'></img>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000'></img>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000'></img>
                <img className ='scroll-image' src='https://img.icons8.com/?size=100&id=ARy6tFUfwclb&format=png&color=000000'></img>
              </div>
          </div>
          </section>
          <section id='About'>
                <div className='main-about'>
                    <div className='bio-head'>
                      <h1>About Me</h1>
                    </div>
                    <div className='bio-main'>
                      <div className='bio-child'>
                          <div className='bio-top'>
                            <img 
                              alt='Image2' 
                              className='bio-img' 
                              src='public\Images\yukesh3.jpeg' 
                            />
                            <div className='bio-content'>
                              {/* <h2>About Me</h2> */}
                              <h1>Yukesh Reddy R</h1>
                              <div className='main-container'>
                                  <div className='container'>
                                    <h1><span>Experience :</span> 2+ years </h1>

                                  </div>
                                  <div className='container'>
                                      <h1><span>Role :</span> Full Stack Developer</h1>
                                  </div>
                              </div>
                              <div className='main-container'>
                                  <div className='container'>
                                    <h1><span>Location :</span> Kalikiri, Andhra Pradesh - 517237 </h1>

                                  </div>
                                  <div className='container'>
                                      <h1><span>Availability :</span> Immediate Joiner</h1>
                                  </div>
                              </div>
                              <a href='/Yukesh_R_Resume.pdf' download={true}><button className='btn'>Download CV</button></a>
                            </div>
                          </div>

                          <div className='bio-summary'>
                            <h1>Professional Summary</h1>
                            <pre>Full Stack Developer with 2+ years of experience in React.js, Node.js, Express.js, and MS SQL.
                              Skilled in REST APIs, dynamic UIs and microservices. Strong in debugging, Git, Agile/Scrum, and API integrations. Seeking React.js/Node.js roles.</pre>
                          </div>
                        </div>
                      
                    </div>
                </div>
          </section>
          <hr style={{color:'grey', width:'0%'}}></hr>
          <section id='Skills'>
                
                <div className='skills-main'>
                  <h1>My Skills</h1>
                    <div className='grp-skill'>
                      {/* react */}
                        <div className='skill-parent'>
                        <div className='react'  onMouseEnter={() => setReactHover(true)} onMouseLeave={() => setReactHover(false)}>
                            <img alt="React" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' className='img-react'></img>
                            <h1>React.js</h1>
                        </div>
                        <div className='skill-bar'>
                            <div className='react-percentage' style={{ width: reactHover ? "70%" : "0%" }}>
                            <h1>{reactHover?"70%":"0%"}</h1>
                            </div>
                        </div>
                        </div>
                        {/* node */}
                        <div className='skill-parent'>
                            <div className='node'  onMouseEnter={() => setNodeHover(true)} onMouseLeave={() => setNodeHover(false)}>
                                <img alt="Node.js" src='https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-png-download-1174925.png?f=webp' className='img-react'></img>
                                <h1>Node.js</h1>
                            </div>
                            <div className='skill-bar'>
                                <div className='react-percentage' style={{ width: nodeHover ? "90%" : "0%" }}>
                                <h1>{nodeHover?"90%":"0%"}</h1>
                                </div>
                            </div>
                        </div>
                        {/* express */}
                        <div className='skill-parent'>
                            <div className='express'  onMouseEnter={() => setexpressHover(true)} onMouseLeave={() => setexpressHover(false)}>
                                <img alt="express" src='https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000' className='img-react'></img>
                                <h1>Express</h1>
                            </div>
                            <div className='skill-bar'>
                                <div className='react-percentage' style={{ width: expressHover ? "90%" : "0%" }}>
                                <h1>{expressHover?"90%":"0%"}</h1>
                                </div>
                            </div>
                        </div>
                        {/* SQL */}
                        <div className='skill-parent'>
                            <div className='sql'  onMouseEnter={() => setSqlHover(true)} onMouseLeave={() => setSqlHover(false)}>
                                <img alt="React" src='https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000' className='img-react'></img>
                                <h1>MS SQL</h1>
                            </div>
                            <div className='skill-bar'>
                                <div className='react-percentage' style={{ width: sqlHover ? "90%" : "0%" }}>
                                <h1>{sqlHover?"90%":"0%"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='grp-skill'>
                        {/* Git */}
                        <div className='skill-parent'>
                            <div className='git'  onMouseEnter={() => setGitHover(true)} onMouseLeave={() => setGitHover(false)}>
                                <img alt="React" src='https://img.icons8.com/?size=100&id=20906&format=png&color=000000' className='img-react'></img>
                                <h1>Github<span>     </span></h1>
                            </div>
                            <div className='skill-bar'>
                                <div className='react-percentage' style={{ width: git ? "85%" : "0%" }}>
                                <h1>{git?"85%":"0%"}</h1>
                                </div>
                            </div>
                        </div>
                        {/* Html */}
                        <div className='skill-parent'>
                            <div className='html'  onMouseEnter={() => setHtmlHover(true)} onMouseLeave={() => setHtmlHover(false)}>
                                <img alt="React" src='https://img.icons8.com/?size=100&id=20909&format=png&color=000000' className='img-react'></img>
                                <h1>HTML5</h1>
                            </div>
                            <div className='skill-bar'>
                                <div className='react-percentage' style={{ width: html ? "50%" : "0%" }}>
                                <h1>{html?"50%":"0%"}</h1>
                                </div>
                            </div>
                        </div>
                        {/* css */}
                        <div className='skill-parent'>
                            <div className='react'  onMouseEnter={() => setCssHover(true)} onMouseLeave={() => setCssHover(false)}>
                                <img alt="React" src='https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000' className='img-react'></img>
                                <h1>CSS3</h1>
                            </div>
                            <div className='skill-bar'>
                                <div className='react-percentage' style={{ width: css ? "50%" : "0%" }}>
                                <h1>{css?"50%":"0%"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
          </section>
          <hr style={{color:'white'}}></hr>
          <section id='Experience'>
            <div className='exp-main'>
                <h1>Experience</h1>
                <div className='eng'>
                    <div class="project-card">
                        <h2>Google to M365 Integration Platform</h2>
                        <h3><span>Role:</span> Backend Developer</h3>
                        <p>
                          <span>Details: </span>
                          Implemented data transfer application from Google MyDrive to M365 OneDrive 
                          by integrating Google API and Microsoft Graph API.
                        </p>
                        <p><span>Tech Stack:</span> Node.js, Express.js, Microsoft SQL Server, REST APIs, ORM's</p>
                    </div>
                    <div class="project-card">
                        <h2>M365 to M365 Integration Platform</h2>
                        <h3><span>Role: </span>Full Stack Developer</h3>
                        <p>
                          <span>Details: </span>
                          Developed data transfer application from M365 One Drive to M365 OneDrive 
                          by integrating Microsoft Graph API.
                        </p>
                        <p><strong><span>Tech Stack:</span></strong> React.js, Node.js, Express.js, MS SQL Server, REST APIs, ORM's</p>
                    </div>
                    <div class="project-card">
                        <h2>Client Support & Issue Resolution</h2>
                        <h3><span>Role: </span>Support Engineer / Developer</h3>
                        <p>
                          <span>Details: </span>
                          Provided client support for integration applications, focusing on debugging and issue resolution. Ensured seamless functionality by collaborating closely with clients.
                        </p>
                        <p><strong><span>Tech Stack:</span></strong> Node.js, Express.js, Microsoft SQL Server, REST APIs</p>
                    </div>
                    <div class="project-card">
                        <h2>Training & Application Support</h2>
                        <h3><span>Role: </span>Trainee Engineer</h3>
                        <p>
                          <span>Details: </span>
                          Completed full-stack development training by building responsive applications and applying the 4D process with ER/class diagrams and pseudocode. Also supported a Windows application in C#.
                        </p>
                        <p><strong><span>Tech Stack:</span></strong> HTML, CSS, JavaScript, React.js, Node.js, MSSQL and C#.</p>
                    </div>
                    
                </div>
            </div>
          </section>
          <hr style={{color:'grey', width:'0%'}}></hr>
          <section id='Projects'>
                <div className='project-main'>
                      <h2 className='progress'>In Progress...</h2>
                      <div className='git-icons'>
                        <a href='https://github.com/Yukesh56/Student-Project.git' target='_blank'><img src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' className='img-git'></img></a>
                        <a href='https://github.com/Yukesh56/Application_Tracker_FrontEnd.git' target='_blank'><img src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' className='img-git'></img></a>
                      </div>
                </div>
          </section>
          <hr style={{color:'grey', width:'0%'}}></hr>
          <section id='Contact'>
              <div className='contact-main'>
                  <h1>Contact Me</h1>
                  <p>If you'd like to contact me or just 
                    say hello feel free to reach out</p>
                  <div className='contact-child'>
                      <img alt='Email' src='public\Images\Email.png' className='email-img'></img>
                      <h2> <span>Email: </span> </h2>
                      <h2>yukeshreddy.56@gmail.com</h2>
                  </div>
                  <div className='contact-child'>
                      <img alt='Phone' src='public\Images\Call.png' className='email-img'></img>
                      <h2> <span>Phone: </span> </h2>
                      <h2>+91 6304729155</h2>
                  </div>
                  <div className='contact-child'>
                      <img alt='Linkedin' src='public\Images\linkedin.png' className='email-img'></img>
                      <h2> <span>Linkedin:</span> </h2>
                      <h2><a href='https://www.linkedin.com/in/yukesh-reddy-2bab281ab/' target='_blank'>YukeshReddy</a></h2>                      
                  </div>
                  <input type='text' placeholder='Your Name' className='input'></input>
                  <input type='text' placeholder='Your Mail' className='input'></input>
                  <textarea name="message" rows="4" cols="50" placeholder='Your Message' className='input' style={{resize: "none"}}></textarea>       
                  <button className='btn-contact'><a href="#">Send Message</a></button>           
              </div>
          </section>
    </section>
    
  )
}
export default Home
