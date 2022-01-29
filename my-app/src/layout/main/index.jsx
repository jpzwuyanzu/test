import React from "react";
import Header from "./../../components/header";
import Adver from "./../../components/adver";
import RouterView from "../../router/RouterView";
import "./index.scss";
import { withRouter } from "react-router-dom";

const Main = withRouter((props) => {
  // const [showtabbar, setShowtabbar] = useState(true);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   barPath.indexOf(pathname) === -1
  //     ? setShowtabbar(false)
  //     : setShowtabbar(true);
  // }, [pathname]);
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const pathname = props.location.pathname;

  return (
    <div className="mainPage">
      <Header></Header>
      <Adver />
      <div className="mainContent">
        {pathname === "/home" ? (
          <div className="goBackTop" onClick={goToTop}></div>
        ) : null}
        <RouterView />
      </div>
      <div className="footer-info">
        <div className="chinese-info">
          警告 : 本站收集的网址来源于互联网,网址内容和本站没有任何关系.网站在
          美国进行维护,受美国法律保护.如来访者国家法律不允许,请自行离开！
        </div>
        <div className="english-info">
          Warning : The website collected by this website comes from the
          Internet. The website content has nothing to do with this site.The
          website is maintained in the United States and is protected by US law.
          If the visitor's laws do not allow it, please leave by yourself!
        </div>
      </div>
    </div>
  );
});

export default Main;
