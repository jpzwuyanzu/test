/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Toast } from "antd-mobile";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.scss";

const RequireCom = () => {
  const [copyEmailValue, setCopyEmailValue] = useState(
    "qiezitvbusiness@gmail.com"
  );
  const [copyLinkValue, setCopyLinkValue] = useState("https:www.140511.com");
  const [copied, setCopied] = useState(false);

  const copyTips = () => {
    Toast.show("复制成功");
  };

  return (
    <>
      <div className="require-wrapper">
        <div className="top-part">
          <span className="info-label">本站最新可用地址：</span>
          <CopyToClipboard
            text={copyLinkValue}
            onCopy={() => {
              setCopied(true);
              // Toast.show({
              //     icon: 'success',
              //     content: '复制成功'
              // })
            }}
          >
            <span className="info-link" onClick={copyTips}>
              {copyLinkValue}
            </span>
          </CopyToClipboard>
        </div>
      </div>
      <div className="cooper-tips-wrapper">
        <div className="title">注意事项：</div>
        <div className="info-list">
          1. 申请站点需保证有免费资源通道，不收录纯收费站点。
        </div>
        <div className="info-list">
          2. 请先将本站放置在导航站前 5 位置，其他位置本站将不收录。
        </div>
        <div className="info-list">
          3. 链结好后请发送邮件至{" "}
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
            <span onClick={copyTips}>{copyEmailValue}</span>
          </CopyToClipboard>{" "}
          。
        </div>
        <div className="info-list last-list">
          4.
          本站将定期抽查所有网站，如发现链结失效、更换本站位置、下掉本站链结的情况将立即删除。
        </div>
      </div>
    </>
  );
};

export default RequireCom;
