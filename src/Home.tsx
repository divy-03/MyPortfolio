// import Footer from "./components/Footer";
import "./styles/app.scss";
import { HiArrowDown } from "react-icons/hi";
import Skills from "./components/Skills";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import ProgressLoader from "./components/ProgressLoader";
gsap.registerPlugin(useGSAP, ScrollTrigger);
// import ProgressLoader from "./components/ProgressLoader";1

interface props {
  progress: number;
}

const Home = ({ progress }: props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // Delay the transition to allow the loader to fade out smoothly
      const timeout = setTimeout(() => setIsLoaded(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const tl = useRef<gsap.core.Timeline | null>(null);
  // const heroSection = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (heroSection.current) {
  //     const scroll = new LocomotiveScroll({
  //       // el: heroSection.current,
  //       smooth: true,
  //     });

  //     return () => {
  //       scroll.destroy();
  //     };
  //   }
  // }, []);

  useGSAP(() => {
    if (isLoaded) {
      tl.current = gsap
        .timeline()
        .from(".heroSection", {
          duration: 1,
          yPercent: 100,
          ease: "expo.inOut",
        })
        .from(".heroImg", { duration: 1, y: 200, opacity: 0 }, "-=0.4")
        .from(".heroSection > h1", { opacity: 0, ease: "expo.out" })
        .from(".headCont", { y: -100, opacity: 0 })
        .from(".scrollD", { x: -200, duration: 0.6 }, "-=.6")
        .from(".copy", { x: 100, duration: 0.6 }, "-=.3")
        .from(".marquee", { y: 500, opacity: 0, duration: 1 });
    }
    // tl.current.pause();

    gsap.from(".navCont", {
      y: 120,
      duration: 0.8,
      delay: 1.5,
      ease: "bounce.out",
    });

    gsap.from(".navCont > ul > li > a", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      delay: 2,
    });

    gsap.from(".aboutHead", {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutHead",
        start: "top 85%",
        end: "bottom 85%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".aboutDet", {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutHead",
        start: "top 85%",
        end: "bottom 85%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".skiHead", {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".skiHead",
        start: "top 85%",
        end: "bottom 85%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".projHead", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projHead",
        start: "top 85%",
        end: "bottom 85%",
        scroller: "body",
        scrub: 1,
        // markers: true
      },
    });

    const projects = gsap.utils.toArray<HTMLElement>(".project");

    gsap.from(projects[0], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: projects[0],
        start: "-100% 80%",
        end: "top 80%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(projects[1], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: projects[1],
        start: "-100% 80%",
        end: "top 80%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(projects[2], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: projects[2],
        start: "-100% 80%",
        end: "top 80%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(projects[3], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: projects[3],
        start: "-100% 80%",
        end: "top 80%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(projects[4], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: projects[4],
        start: "-100% 80%",
        end: "top 80%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(projects[5], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: projects[5],
        start: "-100% 80%",
        end: "top 80%",
        scroller: "body",
        scrub: 1,
        // markers: true,
      },
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1000px)", () => {
      const skills = gsap.utils.toArray(".skiList");
      gsap.from(skills, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".skiHead",
          start: "150% 85%",
          end: "300% 85%",
          scroller: "body",
          scrub: 1,
          // markers: true,
        },
      });
    });

    mm.add("(max-width: 999px)", () => {
      const skills = gsap.utils.toArray<HTMLElement>(".skiList");
      gsap.from(skills[0], {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: skills[0],
          start: "-100% 85%",
          end: "-80% 85%",
          scroller: "body",
          scrub: 1,
          // markers: true,
        },
      });
      gsap.from(skills[1], {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: skills[1],
          start: "-100% 85%",
          end: "-80% 85%",
          scroller: "body",
          scrub: 1,
          // markers: true,
        },
      });
      gsap.from(skills[2], {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: skills[2],
          start: "-100% 85%",
          end: "-80% 85%",
          scroller: "body",
          scrub: 1,
          // markers: true,
        },
      });
      gsap.from(skills[3], {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: skills[3],
          start: "-100% 85%",
          end: "-80% 85%",
          scroller: "body",
          scrub: 1,
          // markers: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, [isLoaded]);

  // if (loading) return <section className="heroSection"><h1>Divy Pathak</h1></section>
  // if (progress !== 100) return <ProgressLoader progress={progress} />;

  return (
    <>
      <section className="heroSection">
        <div className="marquee">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: 2,
            }}
          >
            Web Developer
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: 2,
            }}
          >
            Web Developer
          </motion.h1>
        </div>
        <img
          className="heroImg"
          src={
            "https://res.cloudinary.com/djgwv8dck/image/upload/v1722799465/samples/people/sw3-removebg_s2vfra.png "
          }
          alt="Dp"
        />

        <div className="headCont">
          <a href="#">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0d5f274-3b4b-4928-a7e2-824dbe366732/de88nc7-90a7840a-8e2a-470a-bcf1-cebc20de1a01.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwZDVmMjc0LTNiNGItNDkyOC1hN2UyLTgyNGRiZTM2NjczMlwvZGU4OG5jNy05MGE3ODQwYS04ZTJhLTQ3MGEtYmNmMS1jZWJjMjBkZTFhMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.K89210jfgkBJbG-kEXvyU6l3ula5SWvzlO6lkTb0MeA"
              alt=""
            />
            Hey, I'm a full stack developer.
          </a>
          <motion.a
            href="https://drive.google.com/file/d/1HdnsAMJ1zE563s_Sz2INMd6Irggs42EX/view"
            className="downloadBtn"
            target="_blank"
            whileHover={{ scale: 1.1, x: -10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View Resume
          </motion.a>
        </div>
        <div className="scrollD">
          <div className="marquee2">
            <div className="marquee-content2">
              <HiArrowDown />
            </div>
          </div>
          <span>SCROLL DOWN</span>
        </div>
      </section>
      <div className="copy">
        <p>&copy; {progress}</p>
      </div>

      <div className="navCont">
        <ul>
          <li>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0d5f274-3b4b-4928-a7e2-824dbe366732/de88nc7-90a7840a-8e2a-470a-bcf1-cebc20de1a01.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwZDVmMjc0LTNiNGItNDkyOC1hN2UyLTgyNGRiZTM2NjczMlwvZGU4OG5jNy05MGE3ODQwYS04ZTJhLTQ3MGEtYmNmMS1jZWJjMjBkZTFhMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.K89210jfgkBJbG-kEXvyU6l3ula5SWvzlO6lkTb0MeA"
                alt=""
              />
            </motion.a>
            {/* <a href="#"><img src="https://res.cloudinary.com/djgwv8dck/image/upload/v1722930336/samples/people/DP-Logo_sfcjuc.png" alt="" /></a> */}
          </li>
          <li>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Skills
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Projects
            </motion.a>
          </li>
        </ul>
      </div>

      <section className="about" id="about">
        <div>
          <h2 className="aboutHead">About</h2>
        </div>
        <div>
          <p className="aboutDet">
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
            <h2 className="projHead">Projects</h2>
          </div>
          <div className="project-list">
            <div className="project">
              <h3>
                VitXchange: A buy and sell website for university students
                <motion.a
                  href="https://github.com/divy-03/vitXchange-ts"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowUpRight />
                </motion.a>
              </h3>
              <p>
                Developed a MERN stack web platform to facilitate buying and
                selling unwanted items among students, promoting a sustainable
                campus community.
              </p>
              <p>
                <strong>Technologies:</strong> MongoDB, ExpressJS, React,
                NodeJS, TypeScript, CSS
              </p>
            </div>
            <div className="project">
              <h3>
                Dream League: A web platform to facilitate sports tournament.
                <motion.a
                  href="https://github.com/divy-03/vitXchange-ts"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowUpRight />
                </motion.a>
              </h3>
              <p>
                Dream League will enable students to register as players, be
                rated based on their skills, and participate in an auction where
                captains bid to form their teams. The platform provides
                real-time updates, team statistics, and tournament schedules,
                enhancing the experience for both players and spectators. It
                also offers an admin dashboard for managing events and ratings.
              </p>
              <p>
                <strong>Technologies:</strong> MongoDB, ExpressJS, React,
                NodeJS, TypeScript, CSS
              </p>
            </div>
            <div className="project">
              <h3>
                Personal Portfolio: Portfolio website to showcase frontend
                skills
                <motion.a
                  href="https://github.com/divy-03/myportfolio"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowUpRight />
                </motion.a>
              </h3>
              <p>
                Created a visually engaging portfolio using HTML, CSS (Sass),
                and React, featuring interactive animations and comprehensive
                project showcases.
              </p>
              <p>
                <strong>Technologies:</strong> HTML, CSS, Sass, React,
                JavaScript
              </p>
            </div>
            <div className="project">
              <h3>
                Stock Prediction System: Predicts stock price trends
                <motion.a
                  href="https://github.com/divy-03/stockpredictor"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowUpRight />
                </motion.a>
              </h3>
              <p>
                Built a machine learning model to analyze historical stock data
                and predict future trends, aiding informed investment decisions.
              </p>
              <p>
                <strong>Technologies:</strong> Python, Machine Learning, Pandas,
                NumPy, Scikit-learn
              </p>
            </div>
            <div className="project">
              <h3>
                Todo App: Simple Web App developed using React with TypeScript
                <motion.a
                  href="https://github.com/divy-03/ToDo---Web-App"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowUpRight />
                </motion.a>
              </h3>
              <p>
                Developed a user-friendly to-do list application for task
                management and productivity enhancement.
              </p>
              <p>
                <strong>Technologies:</strong> React, TypeScript, HTML, CSS
              </p>
            </div>
            <div className="project">
              <h3>
                Tic Tac Toe: Interactive game using React.js
                <motion.a
                  href="https://github.com/divy-03/Tic-Tac-Toe"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowUpRight />
                </motion.a>
              </h3>
              <p>
                Designed an interactive Tic Tac Toe game with a clean interface
                and robust game logic using React.js.
              </p>
              <p>
                <strong>Technologies:</strong> React, JavaScript, HTML, CSS
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Home;
