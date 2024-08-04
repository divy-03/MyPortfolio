import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "./styles/app.scss";
import { HiArrowDown } from "react-icons/hi";
import Skills from "./components/Skills";

const App = () => {
  const [proObsvrd, setProObsvr] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (entry.target.classList.contains("projects")) {
            setProObsvr(true);
          }
        } else {
          entry.target.classList.remove("show");
          if (entry.target.classList.contains("projects")) {
            setProObsvr(false);
          }
        }
      });
    });

    const fadeRight = document.querySelectorAll(".fade-right");
    const fadeLeft = document.querySelectorAll(".fade-left");
    const fadeUp = document.querySelectorAll(".fade-up");
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeRightFast = document.querySelectorAll(".fade-right-fast");
    const projectsSection = document.querySelector(".projects");

    fadeRight.forEach((element) => observer.observe(element));
    fadeRightFast.forEach((element) => observer.observe(element));
    fadeLeft.forEach((element) => observer.observe(element));
    fadeUp.forEach((element) => observer.observe(element));
    fadeDown.forEach((element) => observer.observe(element));

    if (projectsSection) {
      observer.observe(projectsSection);
    }

    // Cleanup observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {proObsvrd ? (
        <Footer />
      ) : (
        <section className="heroSection">
          <div className="marquee1">
            <div className="marquee-content1">Divy Pathak</div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/637853f6f3d6aacb22fa97db/638dfb0b3c3748ee09eaa3b9_tranche%207.avif"
            alt="heroImg"
          />
        </section>
      )}

      <div className="navCont">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>

      <div className="scrollD">
        <div className="marquee2">
          <div className="marquee-content2">
            <HiArrowDown />
          </div>
        </div>
        <span>SCROLL DOWN</span>
      </div>

      <div className="copy">
        <p>&copy; 2024</p>
      </div>

      <section className="about" id="about">
        <div>
          <h2 className="fade-right-fast">About</h2>
        </div>
        <div>
          <p className="fade-up">
            Divy Pathak is a Web Developer, actively developing full-stack web
            applications. He leverages modern frameworks and technologies like
            MERN Stack and TypeScript to deliver robust solutions. A proponent
            of continuous learning, he hones his skills by tackling real-world
            projects.
          </p>
        </div>
      </section>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="projects" id="projects">
        <section className="projects" id="projects">
  <div>
    <h2 className="fade-left">Projects</h2>
  </div>
  <div className="project-list">
    <div className="project fade-up">
      <h3>VitXchange: A buy and sell website for university students</h3>
      <p>
        Developed a MERN stack web platform to facilitate buying and selling unwanted items among students, promoting a sustainable campus community.
      </p>
      <p><strong>Technologies:</strong> MongoDB, ExpressJS, React, NodeJS, TypeScript, CSS</p>
    </div>
    <div className="project fade-up">
      <h3>Personal Portfolio: Portfolio website to showcase frontend skills</h3>
      <p>
        Created a visually engaging portfolio using HTML, CSS (Sass), and React, featuring interactive animations and comprehensive project showcases.
      </p>
      <p><strong>Technologies:</strong> HTML, CSS, Sass, React, JavaScript</p>
    </div>
    <div className="project fade-up">
      <h3>Stock Prediction System: Predicts stock price trends</h3>
      <p>
        Built a machine learning model to analyze historical stock data and predict future trends, aiding informed investment decisions.
      </p>
      <p><strong>Technologies:</strong> Python, Machine Learning, Pandas, NumPy, Scikit-learn</p>
    </div>
    <div className="project fade-up">
      <h3>Todo App: Simple Web App developed using React with TypeScript</h3>
      <p>
        Developed a user-friendly to-do list application for task management and productivity enhancement.
      </p>
      <p><strong>Technologies:</strong> React, TypeScript, HTML, CSS</p>
    </div>
    <div className="project fade-up">
      <h3>Tic Tac Toe: Interactive game using React.js</h3>
      <p>
        Designed an interactive Tic Tac Toe game with a clean interface and robust game logic using React.js.
      </p>
      <p><strong>Technologies:</strong> React, JavaScript, HTML, CSS</p>
    </div>
  </div>
</section>

      </section>
      <section className="footer"></section>
    </>
  );
};

export default App;
