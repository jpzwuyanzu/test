/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Toast } from "antd-mobile";
import "./index.scss";
import emailIcon from "./../../assets/imgs/email-icon.png";
import tgIcon from "./../../assets/imgs/tg-icon.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ConcatCom = () => {
  const [copyEmailValue, setCopyEmailValue] = useState(
    "qiezitvbusiness@gmail.com"
  );
  const [copyTgValue, setCopyTgValue] = useState("@qztv888");
  const [copied, setCopied] = useState(false);

  const copyTips = () => {
    Toast.show("复制成功");
  };

  return (
    <>
      <div className="chatWithUs-concat">
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
          <div className="concat-info">qztv8888</div>
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
        <div className="tips">仅以上 2 种联系方式，暂无其他联系方式</div>
      </div>
      <div className="adCooper-tips">
        <div className="title">广告合作注意事项：</div>
        <div className="line-list">
          1. 本站会接受少量广告来维持运营成本，并且保留选择客户的权利。
        </div>
        <div className="line-list last-list">
          2. 警示：弹窗广告、诱导充值、病毒、诈骗等网站请自行离开。
        </div>
      </div>
    </>
  );
};

export default ConcatCom;
