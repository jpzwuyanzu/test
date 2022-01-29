import React, { useState, useEffect } from "react";
import "./adver.scss";
// import adImg from './../assets/imgs/ad.png'
import { getBestRecommend } from "./../api/home";

const AdverCom = () => {
  const [adData, setAdData] = useState({});

  useEffect(() => {
    getBestRecommend({}).then((res) => {
      if (res.data.code === 0) {
        setAdData(res.data.data);
      }
    });
  }, []);

  const openNewPage = (link) => {
    console.log(link);
    let winRef = window.open("", "_blank");
    winRef.location = "https://www.baidu.com";
  };

  return (
    <>
      <div className="adVer-part">
        {adData.top1 &&
          adData.top1.map((item, index) => {
            return (
              <img
                src={item.img}
                key={index}
                alt={item.desc}
                onClick={() => {
                  openNewPage(item.url);
                }}
              />
            );
          })}
      </div>
    </>
  );
};

export default AdverCom;
