import React from "react";
import "../css/footer.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArchiveDrawerLine } from "react-icons/ri";
import {IoMdKeypad} from "react-icons/io"
const Footer = (props) => {
  const { state, setState } = props;
  return (
    <footer>
      <div className="footer-icon">
        <div className="footer-call-list" onClick={() => setState("CURRENT")}>
          {" "}
          <GiHamburgerMenu size={30} /> <p>Call List </p>{" "}
        </div>
        <div className="footer-call-list" >
          {" "}
          <IoMdKeypad size={30} /> <p>Keypad</p>{" "}
        </div>
        <div
          className="footer-archived-list"
          onClick={() => setState("ARCHIVE")}
        >
          <RiArchiveDrawerLine size={30} />
          <p>Archived Calls</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
