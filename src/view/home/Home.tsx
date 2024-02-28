import "./Home.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../../config/Color.css";
import { Progress, Progresscontent, Project,Work } from "../../component/Layout";
// Libre Baskerville
export function Dashboard() {
  return (
    <div className="home mx-auto">
      <Header />
      <div>
        <div className="main-img" id="home">
          <div
            data-aos="zoom-in"
            className="text  mt-5 pt-5 col-12 col-md-9 mx-auto"
          >
            <h2 data-aos="slide-right" data-aos-duration="1000">
              HI
            </h2>
            <h1 data-aos="slide-right" data-aos-duration="2000">
              I AM ROSHAN LESLIE
            </h1>
            <p data-aos="slide-right" data-aos-duration="3000" className="mb-3">
              INSTRUCTIONAL DESIGNER & E-LEARNING DEVELOPER
            </p>

            <a href="#work">
              <button data-aos="slide-right" data-aos-duration="4000">
                Visit my works
              </button>
            </a>
          </div>
        </div>

        <div className="scroll-img">
          <div className="wave">
          <div className="logos">
            <img src="https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png"/>
            <img src="https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png"/>
          </div>
          </div>
        </div>

        <div className="about py-5" id="about">
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <img
              data-aos="zoom-in-up"
              className="img-fluid py-4"
              src={require("../../asset/profile.png")}
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h1 data-aos="slide-up">ABOUT ME:</h1>
            <p data-aos="slide-up">
              <span>➥</span> <strong>Passionate Instructional Designer:</strong> With 2 years of dedicated experience, I specialize in designing and developing engaging E-Learning content. My expertise lies in creating and maintaining impactful curricula, resulting in a 25% boost in employee engagement with online training.
            </p>
            <p data-aos="slide-up">
              <span>➥</span> <strong>Collaborative Approach:</strong> I foster strong relationships with internal teams, working closely with CEOs, managers, and HR professionals to ensure effective training program execution. I believe in aligning instructional materials with industry standards for optimal impact.
            </p>
            <p data-aos="slide-up">
              <span>➥</span> <strong>Innovative Curriculum Development:</strong> I excel in crafting clear learning objectives that support business goals, collaborating with department leads to design materials for both technical and non-technical audiences. I spearheaded the successful integration of a Learning Management System (LMS) for comprehensive training evaluation.
            </p>
            <p data-aos="slide-up" className="pb-4">
              <span>➥</span> <strong>Results-Driven Initiatives:</strong> With a results-driven mindset, I've facilitated powerful E-Learning programs, applied instructional design principles to various training formats, and introduced tools like LMS to monitor employee advancement. My focus is on creating training initiatives that make a lasting impact on organizational growth. connect with me
              <a
                href="mailto:convey2arunk@gmail.com"
                className="fs-7 mx-2 text-dark fw-bold"
              >
               roshanleslie19@gmail.com
              </a>
              and bring your project to life!
            </p>
            <a
              data-aos="zoom-in"
              className="mt-3 cv d-none d-sm-block"
              href={require("../../asset/Arun Kumar React JS Resume.pdf")}
              download
            >
              <button>Download CV</button>
            </a>
            <a
              data-aos="zoom-in"
              className="mt-3 cv d-block d-sm-none"
              href={require("../../asset/Arun Kumar React JS Resume.png")}
              download
            >
              <button>Download CV</button>
            </a>
          </div>
        </div>


        <div className="structure col-12 my-5">
        <h4 className="text-center">THE STRUCTURE ABOUT</h4>
        <h4 className="text-center">MY WORK PROCESS</h4>
          <Work
          class="d-flex flex-wrap justify-content-center align-items-center col-12 col-lg-8 mx-auto "  
          img='https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png'
          h4={`Analysis`}
          p={`Before embarking on eLearning course development, my approach aligns with the ADDIE model, emphasizing an initial analysis phase. By comprehensively assessing the current situation, uncover learning goals, audience knowledge, and pinpoint gaps, ensuring a strategic and effective training plan.`}
          />
          <Work
          class="d-flex flex-row-reverse flex-wrap justify-content-center align-items-center col-12 col-lg-8 mx-auto"  
          img='https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png'
          h4={`Design`}
          p={`In the Design phase, I leverage insights from the Analysis stage to make informed decisions for crafting a comprehensive learning program. This time-intensive phase demands meticulous attention to detail, where I focus on defining learning objectives, content structure, participant mental processes, and selecting the most effective tools and multimedia elements for optimal engagement`}
          />
          <Work
          class="d-flex flex-wrap justify-content-center align-items-center col-12 col-lg-8 mx-auto"  
          img='https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png'
          h4={`Development`}
          p={`In the Development phase, I transform the approved content ideas from the Design stage into a vibrant eLearning course. This involves visually laying out content, crafting graphics, recording videos, and utilizing eLearning authoring tools meticulously. My focus is on bringing the envisioned end-product to life for an enriched learning experience`}
          />
          <Work
          class="d-flex flex-row-reverse flex-wrap justify-content-center align-items-center col-12 col-lg-8 mx-auto"  
          img='https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png'
          h4={`Implementation`}
          p={`After successfully creating, testing, and gaining approval for the elearning course, I transition to the deployment phase. This involves exporting and uploading the course to the designated Learning Management System (LMS), ensuring alignment with client preferences for tracking. I remain vigilant during distribution, promptly addressing any issues that may arise as users engage with the course.`}
          />
          <Work
          class="d-flex flex-wrap justify-content-center align-items-center col-12 col-lg-8 mx-auto"  
          img='https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png'
          h4={`Evaluation`}
          p={`As the ADDIE Model concludes, my focus turns to the Evaluation phase, ensuring the effectiveness of the eLearning course I've designed, developed, and implemented. By analyzing back-end LMS data and seeking user feedback through surveys post-course completion, I gather vital information to identify areas for potential revision and improvement, ensuring a continuous enhancement of the learning. experience`}
          />
        </div>
{/*
        <div className="main-project-phase " id="project-phase">
          <div className="project-back"></div>
          <div className="mainss text-center">
            <h1 data-aos="slide-right" className="project-phase-h1 pt-4 ">
              Project Phase
            </h1>
            <h5 data-aos="zoom-in" className="col-sm-10 col-12 mx-auto">
              From ideation to creation, each phase is a step towards achieving
              your digital dreams.
            </h5>

            <div className="project-phase mx-auto my-lg-5 my-3 py-lg-5 py-3">
              <div data-aos="slide-right" className="project-phase-child ">
                <img
                  data-aos="zoom-in-down"
                  src={require("../../asset/design.png")}
                  className="project-phase-img"
                ></img>
                <h4>Design</h4>
              </div>

              <img
                className="arrow mx-xl-5 mx-md-2"
                src={require("../../asset/arrow.png")}
                alt=""
              />

              <div data-aos="slide-right" className="project-phase-child">
                <img
                  data-aos="zoom-in-down"
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/online-video-content-7978020-6400202.png?f=webp"
                  className="project-phase-img"
                ></img>
                <h4>Develope</h4>
              </div>

              <img
                className="arrow mx-xl-5 mx-md-2"
                src={require("../../asset/arrow.png")}
                alt=""
              />

              <div data-aos="slide-right" className="project-phase-child">
                <img
                  data-aos="zoom-in-down"
                  src={require("../../asset/evaluate.png")}
                  className="project-phase-img"
                ></img>
                <h4>Evaluate</h4>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="parent-skill-set" id="skill">
          <h1 className="text-center" data-aos="slide-right">
            My Skills
          </h1>
          <div className="py-sm-5 py-2 skill-set d-flex flex-wrap justify-content-center">
            <div className="skill-set-content col-12 col-sm-9 col-md-6 col-lg-5 text-white d-flex flex-column">
              <Progresscontent
                img='https://static.vecteezy.com/system/resources/previews/018/250/036/original/design-and-development-3d-icon-png.png'
                h5={`Design + Development`}
                p={`As an instructional designer, I passionately craft and develop compelling learning materials, seamlessly merging my creative flair with educational know-how to deliver impactful and effective training solutions.`}
              />
              <Progresscontent
                img='https://cdn3d.iconscout.com/3d/premium/thumb/metaverse-technology-5360077-4492263.png'
                h5={`Technology`}
                p={`Combined all the latest technologies to a progressive website.`}
              />
              <Progresscontent
                img='https://cdn3d.iconscout.com/3d/premium/thumb/multi-screen-marketing-6377898-5283170.png?f=webp'
                h5={`Response`}
                p={`content for E-Learning courses resulting in a 25% increase in employee engagement with online training.`}
              />
            </div>

            <div className="col-12 col-md-5  parent-progress ">
              <Progress skill={"html"} p1={`Articulate 360 ( Storyline )`} p2={`90%`} />
              <Progress skill={"css"} p1={`Knowledge of Captivate`} p2={`80%`} />
              <Progress skill={"bootstrap"} p1={`Flimora`} p2={`85%`} />
              <Progress skill={"media"} p1={`Adult Learning Theory`} p2={`80%`} />
              <Progress skill={"sass"} p1={`ADDIE Model, SAM`} p2={`85%`} />
              <Progress skill={"seo"} p1={`Content Development`} p2={`70%`} />
              <Progress skill={"js"} p1={`LMS`} p2={`80%`} />
              <Progress skill={"ms"} p1={`Microsoft 365`} p2={`90%`} />
              <Progress skill={"pw"} p1={`POWER`} p2={`75%`} />
            </div>
          </div>
        </div>

        <div className="main-works " id="work">
          <div className="works-back"></div>

          <div className="col-lg-6 col-12 mx-auto works p-0 py-sm-5 ">
            <h1 data-aos="slide-right" className="text-center mt-sm-4">
              My Works
            </h1>

            <h2 data-aos="slide-up" className="text-center">
              Client projects
            </h2>
            <div className="project-works text-center">
              <Project
                to={"https://www.paype.co.in/"}
                img={require("../../asset/works/paype.png")}
                h4={`Fintech`}
              />
              <Project
                to={"https://www.planneraddict.in/"}
                img={require("../../asset/works/planner.png")}
                h4={`Event management`}
              />
            </div>
          </div>

          <div className="col-lg-12 col-xl-10 works p-0 pt-0 pb-sm-5 col-12 mx-auto">
            <h2 data-aos="slide-up" className="text-center mt-3">
              White Label's
            </h2>
            <div className="project-works text-center">
              <Project
                to={"https://main.d3k8exd9ibd63g.amplifyapp.com/"}
                h4={`Project 01`}
                img={require("../../asset/works/white1.png")}
              />
              <Project
                to={"https://main.da72npu9ha1ra.amplifyapp.com/"}
                h4={`Project 02`}
                img={require("../../asset/works/white2.png")}
              />
              <Project
                to={"https://main.dfmgn1kkcffgf.amplifyapp.com/"}
                h4={`Project 03`}
                img={require("../../asset/works/white3.png")}
              />
              <Project
                to={"https://main.d2tnzdvsjxxibx.amplifyapp.com/"}
                h4={`Project 04`}
                img={require("../../asset/works/white4.png")}
              />
              <Project
                to={"https://main.denp5gqp71m4q.amplifyapp.com/"}
                h4={`Project 05`}
                img={require("../../asset/works/white5.png")}
              />
              <Project
                to={"https://main.da72npu9ha1ra.amplifyapp.com/"}
                h4={`Project 02`}
                img={require("../../asset/works/white2.png")}
              />
              <Project
                to={"https://main.dfmgn1kkcffgf.amplifyapp.com/"}
                h4={`Project 03`}
                img={require("../../asset/works/white3.png")}
              />
              <Project
                to={"https://main.d2tnzdvsjxxibx.amplifyapp.com/"}
                h4={`Project 04`}
                img={require("../../asset/works/white4.png")}
              />
              <Project
                to={"https://main.denp5gqp71m4q.amplifyapp.com/"}
                h4={`Project 05`}
                img={require("../../asset/works/white5.png")}
              />
            </div>
          </div>
        </div>

        <div className="-5 col-12 p-0 parent-form flex flex-wrap justify-content-center" id="contact">
        <div className="col-12 text-center">
            <h2 data-aos="slide-right">Contact Me</h2>
            </div>
          <div className="col-lg-5 col-xl-5 p-0">
            <form
              className="mt-3"
              action="mailto:convey2arunk@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="main-input p-0 col-md-11 mx-auto ">
                <div className="col-sm-12" data-aos="slide-up">
                <label>Name</label>
                  <input
                    className="col-12"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-sm-12" data-aos="slide-up">
                <label>Email</label>
                  <input
                    className="col-12"
                    type="mail"
                    name="mail"
                    id=""
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="col-sm-12" data-aos="slide-up">
                <label>Subject</label>
                  <input
                    className="col-12"
                    type="text"
                    name="subject"
                    id=""
                    placeholder="Enter Subject"
                    required
                  />
                </div>
                <div className="col-12" data-aos="slide-up">
                <label>Message</label>
                  <textarea
                    className="col-12"
                    name="text"
                    id=""
                    placeholder="Write Something"
                    required
                  />
                </div>
              </div>
              <div className="col-12 p-4 mailsend" data-aos="slide-up">
                <a href="mailto:roshanleslie19@gmail">
                <button
                  className="mailbtn ml-2"
                  type="submit"
                  value="Send Message"
                >Send Message</button></a>
              </div>
            </form>
          </div>
          <div className="col-lg-8 col-xl-4 input-content">
          <h4 className="text-center p-0 mb-3">I am <strong>stoked</strong> to hear from you</h4>
          <p className="mt-1">Let's work together to create innovative multimedia and learning solutions that engage, educate, and inspire your audience.</p>
          <p className="mt-1">Whether you need to develop an online course, an interactive game, or a video tutorial, we have the expertise and experience to deliver high-quality results that meet your needs and exceed your expectations.</p>
          <p className="mt-1">To learn more about our services, please contact Alex and the rest of the team at Mitts Tech today.</p>
          <p className="mt-1">We look forward to hearing from you soon.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
