import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="footCont">
      <div>
        <div className="footHead">
          <h2>Divy Pathak</h2>
        </div>
        <div className="footMain">
          <div className="footLeft">
            <span>Made with love at Vit Bhopal, India</span>
            <p>
              Connect with me at
              <a href="mailto:pathakdivy03@gmail.com">pathakdivy03@gmail.com</a>
            </p>
          </div>
          <div className="footRight">
            <a href="https://codeforces.com/profile/excl" target="_blank">
              <span>CodeForces</span>
              <HiArrowUpRight />
            </a>
            <a href="https://leetcode.com/u/pathakdivy03/" target="_blank">
              <span>LeetCode</span>
              <HiArrowUpRight />
            </a>
            <a href="mailto:pathakdivy03@gmail.com">
              <span>Email</span>
              <HiArrowUpRight />
            </a>
            <a href="https://github.com/divy-03" target="_blank">
              <span>GitHub</span>
              <HiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
