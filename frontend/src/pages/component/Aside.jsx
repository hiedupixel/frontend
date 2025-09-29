import { useState, useEffect } from 'react'
import { useRoot } from '@hooks/RootProvider.jsx'
import { useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
  const [open, setOpen] = useState(false)
  const { access, modalEvent, removeStorage } = useRoot()
  const [page, setPage] = useState(null)
  const location = useLocation();
  const navigate = useNavigate();
  // const navigate = (url) => document.location.href = url;
  const style = {cursor: 'pointer'};
  useEffect(() => { setPage(location.pathname); setOpen(false) }, [page, location])
  return (
    <>
      <button className="sidebar-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
        <span className="hamburger" aria-hidden="true"></span>
      </button>
      <div className={`sidebar-backdrop ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />

    <aside className={`sidebar ${open ? 'is-open' : ''}`}>
      <div className="sidebar-header">
            <button className="sidebar-close" aria-label="Close menu" onClick={()=>setOpen(false)}>×</button>
        {/* <i style={{backgroundImage: 'url(/Pixel_Symbol.png)', width: '20px', height: '20px'}}></i> */}
        <img src="/Pixel_Symbol.png" style={{width: '48px'}} />
        <h1 onClick={()=>navigate('/')} style={style}>Gen AI</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={page === "/" ? "active" : ""}>
            <a href="/"><i className="fas fa-compass"></i> Explore</a>
          </li>
          <li className={page === "/community" ? "active" : ""}>
            <a href="/community"><i className="fas fa-comments"></i>Community</a>
          </li>
          {access &&
          <li className={page === "/mypage/media" || page === "/mypage/like" ? "active" : ""}>
            <a href="/mypage/media"><i className="fas fa-user"></i> My Page</a>
          </li>}
        </ul>
      </nav>
      <div className="sidebar-footer">
        {access && <>
          <button type='button' className="theme-toggle" onClick={()=> modalEvent("User")}>Info</button>
          <button type='button' className="theme-toggle" onClick={()=> removeStorage("access")}>Logout</button>
        </>}
        {!access && <>
          <button type='button' className="theme-toggle" onClick={()=> modalEvent("Login")}>Login</button>
          <button type='button' className="theme-toggle" onClick={()=> modalEvent("SignUp")}>Sign Up</button>
        </>}
      </div>
    </aside>
    </>
  )
}

export default Aside