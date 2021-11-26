import React from "react";
import "../css/Finish.css";
import { Button } from './Button';
import {
  Link,
} from 'react-router-dom';

// 검사 예시 페이지

export function Finish() {
  console.log("Finish 컴포넌트가 실행됐습니다.");
  
  return (
    <div className="container" style={{marginTop:"20%"}}>
        <h2>검사가 완료되었습니다.</h2>
      <div className="explanation">
        <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,</p>
        <p>중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
      </div>
      <div className="buttonContainer">
        <Link to="/result">
          <Button text="결과 보기" />
        </Link>
      </div>
    </div>
  );
}