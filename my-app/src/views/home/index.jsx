/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Toast } from "antd-mobile";
import "./index.scss";
import cardImg from "./../../assets/imgs/01.jpg";
import bestRecomend from "./../../assets/imgs/bestRecomend.png";
import recomStar from "./../../assets/imgs/best-star.png";
import part1 from "./../../assets/imgs/001.png";
import part2 from "./../../assets/imgs/002.png";
import part3 from "./../../assets/imgs/003.png";
import part4 from "./../../assets/imgs/004.png";
import part5 from "./../../assets/imgs/005.png";
import part6 from "./../../assets/imgs/006.png";
import holdPlace from "./../../assets/imgs/online.png";
import emailIcon from "./../../assets/imgs/email-icon.png";
import tgIcon from "./../../assets/imgs/tg-icon.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getBestRecommend } from "./../../api/home";

const IndexCom = () => {
  const [copyEmailValue, setCopyEmailValue] = useState(
    "qiezitvbusiness@gmail.com"
  );
  const [copyTgValue, setCopyTgValue] = useState("@qztv888");
  const [copied, setCopied] = useState(false);
  const [indexData, setIndexData] = useState({});

  useEffect(() => {
    getBestRecommend({}).then((res) => {
      if (res.data.code === 0) {
        setIndexData(res.data.data);
      }
    });
  }, []);

  const openNewPage = (link) => {
    console.log(link);
    let winRef = window.open("", "_blank");
    winRef.location = "https://www.baidu.com";
  };

  const copyTips = () => {
    Toast.show("复制成功");
    
  };

  // const item = [1,2,3,4,4,5,7,7, 9,10,11, 12, 13, 14, 15]

  // Toast.show({
  //     icon: 'success',
  //     content: '复制成功'
  // })
  return (
    <>
      <div className="site-card-wrapper">
        {indexData.top2 &&
          indexData.top2.map((item, index) => {
            return (
              <div
                className="card-item"
                key={index}
                onClick={() => {
                  openNewPage(item.url);
                }}
              >
                <img src={item.img} alt={item.desc} />
                <div className="card-info">
                  <div className="title">{item.title}</div>
                  <div className="info">{item.desc}</div>
                </div>
              </div>
            );
          })}
      </div>
      {/* 精品推荐 */}
      <div className="bestRecomend">
        {indexData.top3 ? (
          <div className="title-line">
            <img src={bestRecomend} alt="" />
            <div className="best-title">精品推荐</div>
          </div>
        ) : null}

        <div className="recomend-wrapper">
          {indexData.top3 &&
            indexData.top3.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="link-name">{item.title}</div>
                </div>
              );
            })}
        </div>
      </div>
      {/* 在线视频 */}
      <div className="bestRecomend">
        {indexData.top4 ? (
          <div className="title-line">
            <img src={part1} alt="" />
            <div className="best-title">在线视频</div>
          </div>
        ) : null}

        <div className="recomend-wrapper">
          {indexData.top4 &&
            indexData.top4.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div
                    className="link-name"
                    style={{ color: item.color ? item.color : "#00a49a" }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* 福利导航 */}
      <div className="bestRecomend">
        {indexData.top5 ? (
          <div className="title-line">
            <img src={part2} alt="" />
            <div className="best-title">福利导航</div>
          </div>
        ) : null}
        <div className="recomend-wrapper">
          {indexData.top5 &&
            indexData.top5.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div
                    className="link-name"
                    style={{ color: item.color ? item.color : "#00a49a" }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* 楼凤交友 */}
      <div className="bestRecomend">
        {indexData.top6 ? (
          <div className="title-line">
            <img src={part3} alt="" />
            <div className="best-title">楼凤交友</div>
          </div>
        ) : null}
        <div className="recomend-wrapper">
          {indexData.top6 &&
            indexData.top6.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div
                    className="link-name"
                    style={{ color: item.color ? item.color : "#00a49a" }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* 情色小说 */}
      <div className="bestRecomend">
        {indexData.top7 ? (
          <div className="title-line">
            <img src={part4} alt="" />
            <div className="best-title">情色小说</div>
          </div>
        ) : null}
        <div className="recomend-wrapper">
          {indexData.top7 &&
            indexData.top7.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div
                    className="link-name"
                    style={{ color: item.color ? item.color : "#00a49a" }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* 美女直播 */}
      <div className="bestRecomend">
        {indexData.top8 ? (
          <div className="title-line">
            <img src={part5} alt="" />
            <div className="best-title">美女直播</div>
          </div>
        ) : null}
        <div className="recomend-wrapper">
          {indexData.top8 &&
            indexData.top8.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div
                    className="link-name"
                    style={{ color: item.color ? item.color : "#00a49a" }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* 好站推荐 */}
      <div className="bestRecomend">
        {indexData.top9 ? (
          <div className="title-line">
            <img src={part6} alt="" />
            <div className="best-title">好站推荐</div>
          </div>
        ) : null}
        <div className="recomend-wrapper">
          {indexData.top9 &&
            indexData.top9.map((item, index) => {
              return (
                <div
                  className="recomend-item"
                  key={index}
                  onClick={() => {
                    openNewPage(item.url);
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div
                    className="link-name"
                    style={{ color: item.color ? item.color : "#00a49a" }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="chatWithUs">
        <div className="concat-title">合作洽谈</div>
        <div className="concat-line">
          <img src={emailIcon} alt="" />
          <div className="concat-info">qieztvbusiness@gmail.com</div>
          <CopyToClipboard
            text={copyEmailValue}
            onCopy={() => {
              setCopied(true);
              // Toast.show({
              //     icon: 'success',
              //     content: '复制成功'
              // })
            }}
          >
            <div className="copyBtn" onClick={copyTips}>
              复制
            </div>
          </CopyToClipboard>
        </div>
        <div className="concat-line tg-line">
          <img src={tgIcon} alt="" />
          <div className="concat-info">@qztv888</div>
          <CopyToClipboard
            text={copyTgValue}
            onCopy={() => {
              setCopied(true);
              // Toast.show({
              //     icon: 'success',
              //     content: '复制成功'
              // })
              // Modal.alert({
              //     content: '人在天边月上明',
              //     onConfirm: () => {
              //       console.log('Confirmed')
              //     },
              //   })
            }}
          >
            <div className="copyBtn" onClick={copyTips}>
              复制
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default IndexCom;
