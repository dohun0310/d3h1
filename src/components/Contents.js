import React from "react";

function Contents() {
  return (
    <>
      <div className="Contents">
        <button className="diskstation">
          <h1>DiskStation</h1>
          <p>어디서나 접근이 가능한 클라우드 스토리지</p>
        </button>
        <button className="homeassistant">
          <h1>Home Assistant</h1>
          <p>스마트홈을 관리, 제어</p>
        </button>
        <button className="jellyfin">
          <h1>Jellyfin</h1>
          <p>미디어 콘텐츠를 어디서나 스트리밍</p>
        </button>
        <button className="visualstudiochode">
          <img className="vscicon" alt="vsc" src="img/vsc.svg" />
          <h1>Visual Studio Code</h1>
          <p>프로그래머용 에디터</p>
        </button>
      </div>
    </>
  );
}

export default Contents;
