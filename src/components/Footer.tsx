import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";


const Footer = () => {
  const footer = useRef<HTMLDivElement>(null);

  const locomotiveScroll = new LocomotiveScroll();
  locomotiveScroll.destroy();
  

  return (
    <div data-scroll data-scroll-speed="0.6" className="footCont" ref={footer}>
      <div>
        <div className="footHead">
          <h2>Divy Pathak</h2>
        </div>
        <div className="footMain">
          <div className="footLeft">
            <span>Made with love at Vit Bhopal, India</span>
            <p>
              Connect with me at
              <span> </span>
              <a href="mailto:pathakdivy03@gmail.com">pathakdivy03@gmail.com</a>
            </p>
          </div>
          <div className="footRight">
            <motion.a
              href="https://codeforces.com/profile/excl"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>CodeForces</span>
              <HiArrowUpRight />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/pathakdivy03/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>LeetCode</span>
              <HiArrowUpRight />
            </motion.a>
            <motion.a
              href="mailto:pathakdivy03@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>Email</span>
              <HiArrowUpRight />
            </motion.a>
            <motion.a
              href="https://github.com/divy-03"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>GitHub</span>
              <HiArrowUpRight />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
