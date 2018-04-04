import React from "react";
import "./FooterSection.css";
import FooterAppBar from "../../common/FooterAppBar/FooterAppBar";

const FooterSection = props => {
  return (
    <div className="center">
      <div style={{ textAlign: "center" }}>
        <a href="/terms/">Terms / Privacy Policy</a>
      </div>
      <FooterAppBar />
    </div>
  );
};

export default FooterSection;
