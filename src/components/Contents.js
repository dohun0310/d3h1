import React from "react";
import dsm from '../img/dsm.png'
import ha from '../img/ha.png'
import jly from '../img/jellyfin.png'
import vsc from '../img/vsc.png'

function Contents() {
  return (
    <>
      <div className="Contents">
        <button className="diskstation">
          <img className="dsmicon" alt="dsm" src={dsm} />
          <h1>DiskStation</h1>
          <p>어디서나 접근이 가능한 클라우드 스토리지</p>
        </button>
        <button className="homeassistant">
          <img className="haicon" alt="ha" src={ha} />
          <h1>Home Assistant</h1>
          <p>스마트홈을 관리, 제어</p>
        </button>
        <button className="jellyfin">
          <img className="jlyicon" alt="jly" src={jly} />
          <h1>Jellyfin</h1>
          <p>미디어 콘텐츠를 어디서나 스트리밍</p>
        </button>
        <button className="visualstudiochode">
          <img className="vscicon" alt="vsc" src={vsc} />
          <h1>Visual Studio Code</h1>
          <p>프로그래머용 에디터</p>
        </button>
      </div>
    </>
  );
}

export default Contents;
