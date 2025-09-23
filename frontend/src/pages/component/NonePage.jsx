import { useNavigate } from "react-router-dom";

const NonePage = () => {
  const navigate = useNavigate();
  return (
    <main class="main-content">
      <div class="alert-box" onClick={()=>navigate("/")}>
        <div class="alert-icon">😿</div>
        <span class="highlight">404 NOT POUND</span>
        잘못된 경로로 접속 하셨습니다<br />
        알맞은 경로로 접속해주세요
      </div>
    </main>
  )
}

export default NonePage