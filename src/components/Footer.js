import React from "react";
import "../css/footer.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArchiveDrawerLine } from "react-icons/ri";

const Footer = (props) => {
  const {state, setState} = props
  return (
    <footer>
      <div className="footer-icon">
        <div className="footer-call-list"> <GiHamburgerMenu size={30} onClick={()=>setState("CURRENT")} /> <p>Call List </p> </div>
        <div className="footer-archived-list"> 
        <RiArchiveDrawerLine size={30}  onClick={()=>setState("ARCHIVE")}/>
        <p>Archived Calls</p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
