import { useState, useEffect } from 'react'
import './App.css'
import './Style.css'

const Info = ({setIsLogin, setIsSignUp, setIsEmail, setIsUser}) => {
  const [isEdit, setIsEdit] = useState(true)
  const [user, setUser] = useState({ email: '', name: '' })
  const closeEvent = () => {
    setIsLogin(false)
    setIsSignUp(false)
    setIsEmail(false)
    setIsUser(false)
  }
  const btn1Event = () => {
    setIsEdit(false)
  }
  const btn2Event = () => {
    alert("탈퇴 요청")
  }
  const changeEvent = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }
  useEffect(() => {
    const temp = {
      email: "hong@example.com",
      name: "홍길동"
    }
    setUser(temp)
  }, [])
  return (
    <>
      <div className="overlay" onClick={closeEvent}></div>
      <section className="card modal">

        <div className="brand">
          <img src="vite.svg"
              alt="유저 아이콘"
              style={{width:'60px', height: '60px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 10px rgba(0,0,0,.4)'}} />
          <div>
            <h1 className="brand__name">유저 정보</h1>
            <p className="subtitle">계정 관리</p>
          </div>
        </div>

        <form action="login.html" >
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" className="input" placeholder="id@example.com" value={user?.email} onChange={changeEvent} readOnly={isEdit} />
          </div>

          <div className="field">
            <label htmlFor="name">사용자 이름</label>
            <input type="text" id="name" name="name" className="input" placeholder="홍길동" minLength="2" value={user?.name} onChange={changeEvent} required readOnly={isEdit} />
          </div>
        </form>

        <div className="row">
          <button type='button' className="btn" onClick={btn1Event}>회원정보 수정</button>
          <button type='button' className="btn" onClick={btn2Event}
            style={{background: 'var(--danger)', borderColor: 'var(--danger)', boxShadow: '0 10px 22px rgba(255,90,122,.28)'}}>
            회원탈퇴
          </button>
        </div>
        
      </section>
    </>
  )
}

const Login = ({setIsLogin, setIsSignUp, setIsEmail, setIsUser}) => {
  const modalEvent = () => {
    setIsLogin(false)
    setIsSignUp(true)
    setIsEmail(false)
    setIsUser(false)
  }
  const closeEvent = () => {
    setIsLogin(false)
    setIsSignUp(false)
    setIsEmail(false)
    setIsUser(false)
  }
  const submitEvent = (e) => {
    e.preventDefault();
    setIsLogin(false)
    setIsSignUp(false)
    setIsEmail(true)
    setIsUser(false)
  }
  return (
    <>
      <div className="overlay" onClick={closeEvent}></div>
      <section className="card modal">
        <div className="brand" style={{marginBottom: '6px'}}>
          <div className="brand__logo">HI</div>
          <div>
            <h2 id="loginTitle" className="brand__name">로그인</h2>
            <p id="loginDesc" className="subtitle">계정으로 PIXEL에 접속하세요.</p>
          </div>
        </div>

        <form onSubmit={submitEvent}>
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" className="input" placeholder="id@example.com" required />
          </div>
          <button className="btn" type="submit">이메일 인증</button>
          <p className="footer">계정이 없으신가요? <span style={{color: 'red', cursor: 'pointer'}} onClick={modalEvent}>회원가입</span></p>
        </form>
      </section>
    </>
  )
}

const SignUp = ({setIsLogin, setIsSignUp, setIsEmail, setIsUser}) => {
  const [email, setEmail] = useState(false);
  const [isButton, setIsButton] = useState(true);
  const modalEvent = () => {
    setIsLogin(true)
    setIsSignUp(false)
    setIsEmail(false)
    setIsUser(false)
  }
  const closeEvent = () => {
    setIsLogin(false)
    setIsSignUp(false)
    setIsEmail(false)
    setIsUser(false)
  }
  const checkEmail = () => {
    setIsButton(false)
    setEmail(true)
  }
  const submitEvent = (e) => {
    e.preventDefault();
    setIsLogin(false)
    setIsSignUp(false)
    setIsEmail(true)
    setIsUser(false)
  }
  return (
    <>
      <div className="overlay" onClick={closeEvent}></div>
      <section className="card modal">
        <div className="brand">
          <div className="brand__logo" >HI</div>
          <div>
            <h1 id="title" className="brand__name">PIXEL 가입</h1>
            <p id="subtitle" className="subtitle">프롬프트로 이미지를 만들고 공유하세요.</p>
          </div>
        </div>

        <form onClick={submitEvent} >
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" className="input" placeholder="id@example.com" required readOnly={email} />
            {isButton && <button className="btn" type="button" onClick={checkEmail}>중복확인</button>}
          </div>

          {email &&
          <div className="field">
            <label htmlFor="name">사용자 이름</label>
            <input type="text" id="name" name="name" className="input" placeholder="홍길동" minlength="2" required />
            <button className="btn" type="submit">회원가입</button>
          </div>
          }

          <p className="footer">이미 계정이 있으신가요? <span style={{color: 'red', cursor: 'pointer'}} onClick={modalEvent}>로그인</span></p>
        </form>
      </section>
    </>
  )
}

const Email = ({setIsLogin, setIsSignUp, setIsEmail, setIsUser}) => {
  const closeEvent = () => {
    setIsLogin(false)
    setIsSignUp(false)
    setIsEmail(false)
    setIsUser(false)
  }
  const codeEvent = () => {
    // 백엔드 처리 부분
  }
  const submitEvent = (e) => {
    e.preventDefault();
    // 백엔드 처리 부분
    location.reload()
  }
  return (
    <>
      <div className="overlay" onClick={closeEvent}></div>
    
      <section className="card modal">

        <div className="brand">
          <div className="brand__logo">AI</div>
          <div>
            <h1 id="title" className="brand__name">이메일 인증</h1>
            <p id="subtitle" className="subtitle">이메일 주소로 전송된 인증 코드를 입력해주세요.</p>
          </div>
        </div>

        <form onSubmit={submitEvent}>
          <div className="field">
            <label for="code">인증 코드</label>
            <input type="text" id="code" name="code" className="input" placeholder="6자리 숫자" maxlength="6" required />
            <p className="hint">인증 코드는 3분간 유효합니다.</p>
          </div>

          <button className="btn" type="submit">인증하기</button>

          <p className="footer">메일을 받지 못하셨나요? <span style={{color: 'red', cursor: 'pointer'}} onClick={codeEvent}>코드 재전송</span></p>
        </form>
      </section>
    </>
  )
}

const App = () => {
  const [images, setImages] = useState([])
  const [isUser, setIsUser] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [isEmail, setIsEmail] = useState(false)

  useEffect(() => {
    // 더미 데이터 생성 
    const temp = {"url" : "https://picsum.photos/seed/1/400/400", "prompt" : "a majestic lion with a crown of stars, photorealistic"};
    const arr = [];
    for(var i = 0; i < 10; i++) {
      arr[i] = temp
    }
    // 데이터베이스 이용하여 데이터 가져오기 필요
    setImages(arr)
  }, []);

  return (
    <>
      <div className="container">
        <aside className="sidebar">
            <div className="sidebar-header">
                <i className="fas fa-rocket logo-icon"></i>
                <h1>AI Gen</h1>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="active"><a href="#"><i className="fas fa-compass"></i> Explore</a></li>
                    <li><a href="#"><i className="fas fa-user"></i> 나의 창작물</a></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <button type='button' className="theme-toggle" onClick={()=> setIsUser(true)}>Info</button>
                <button type='button' className="theme-toggle" onClick={()=> setIsLogin(true)}>Login</button>
                <button type='button' className="theme-toggle" onClick={()=> setIsSignUp(true)}>Sign Up</button>
                {/* <a href="login.html" className="btn btn-secondary">Login</a>
                <a href="login.html" className="btn btn-primary">Sign Up</a> */}
                {/* <button id="themeToggle" className="theme-toggle">🌙 다크/라이트</button> */}
            </div>
        </aside>

        <main className="main-content">
            <header className="prompt-section">
                <div className="prompt-input-wrapper">
                    <input type="text" placeholder="Imagine something... a futuristic city in the style of Van Gogh" />
                    <button className="btn-generate">Generate</button>
                </div>
            </header>

            <section className="gallery">
                { /* 이미지 반복 */ }
                {
                  images?.map((row, index) => {
                    return (
                      <div className="gallery-item" key={index}>
                        <img src={row.url} alt="AI generated image" />
                        <div className="overlay">
                          <p className="prompt-text">{row.prompt}</p>
                        </div>
                    </div>
                    )
                  })
                }
            </section>
        </main>
      </div>
      {isUser && <Info setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} setIsEmail={setIsEmail} setIsUser={setIsUser} />}
      {isLogin && <Login setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} setIsEmail={setIsEmail} setIsUser={setIsUser} />}
      {isSignUp && <SignUp setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} setIsEmail={setIsEmail} setIsUser={setIsUser} />}
      {isEmail && <Email setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} setIsEmail={setIsEmail} setIsUser={setIsUser} />}
    </>
  )
}

export default App
