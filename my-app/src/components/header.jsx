import React, { useState } from "react";
import "./header.scss";
import friendIcon from "./../assets/imgs/cooper-icon.png";
import emailIcon from "./../assets/imgs/email.png";
import sideArrow from "./../assets/imgs/side-arrow.png";
import { withRouter } from "react-router-dom";
let bodyEl = document.body;
// let top = 0

// function stopBodyScroll (isFixed) {
//   if (isFixed) {
//     top = window.scrollY

//     bodyEl.style.position = 'fixed'
//     bodyEl.style.top = -top + 'px'
//   } else {
//     bodyEl.style.position = ''
//     bodyEl.style.top = ''

//     window.scrollTo(0, top) // 回到原先的top
//   }
// }

const HeaderCom = withRouter((props) => {
  const [showLeftTab, setShowLeftTab] = useState(false);
  const showLeftSideTab = () => {
    window.scrollTo(0, 0);
    setShowLeftTab(true);
    bodyEl.style.overflow = "hidden";
    bodyEl.style.height = "100%";
    // stopBodyScroll(true)
  };
  const hideLeftSideTab = () => {
    setShowLeftTab(false);
    bodyEl.style.overflow = "auto";
    bodyEl.style.height = "auto";
    // stopBodyScroll(false)
  };

  const goToSomePage = (url) => {
    setShowLeftTab(false);
    bodyEl.style.overflow = "auto";
    bodyEl.style.height = "auto";
    props.history.push(url);
  };

  return (
    <>
      <div className="header-Part">
        <div
          className="left-logo"
          onClick={() => {
            goToSomePage("/home");
          }}
        ></div>
        <div className="center-title">福利导航</div>
        {!showLeftTab ? (
          <div className="right-nav-bar" onClick={showLeftSideTab}></div>
        ) : null}
      </div>
      {showLeftTab ? (
        <>
          <div className="left-side-bar">
            <div className="side-top-part">
              <div
                className="left-logo"
                onClick={() => {
                  goToSomePage("/home");
                }}
              ></div>
              <div className="center-title">福利导航</div>
            </div>
            <div className="left-tab-wrapper">
              <div
                className="side-tab-Item"
                onClick={() => {
                  goToSomePage("/recruitment");
                }}
              >
                <img className="side-icon" src={friendIcon} alt="" />
                <span>友情招募</span>
                <img className="arrow-icon" src={sideArrow} alt="" />
              </div>
              <div
                className="side-tab-Item last-tab-item"
                onClick={() => {
                  goToSomePage("/concat");
                }}
              >
                <img className="side-icon" src={emailIcon} alt="" />
                <span>联系我们</span>
                <img className="arrow-icon" src={sideArrow} alt="" />
              </div>
            </div>
          </div>
          <div className="header-mask" onClick={hideLeftSideTab}></div>
        </>
      ) : null}
    </>
  );
});

export default HeaderCom;
