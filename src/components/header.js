import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header(props) {
  const [search,setSearch]=useState('')
  const searchHandler=(event)=>{
    event.preventDefault()
    props.onSearch(search)
  }
  const changeHandleInput=(event)=>{
    setSearch(event.target.value)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: '0px' }}>
        <div className="container-fluid" style={{ backgroundColor: "#d77f41", padding: "6px", fontSize: "25px", fontFamily: "ui-rounded" }}>
          <Link className="navbar-brand" style={{ color: 'lightyellow', fontSize: '30px', marginLeft: '24px' }} to="/">NewsToddler</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'lightyellow' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{ color: 'lightyellow' }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'lightyellow' }} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'lightyellow' }} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'lightyellow' }} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'lightyellow' }} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'lightyellow' }} to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: 'lightyellow' }} to="/technology">Technology</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" style={{ display: "flex" }}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ margin: "10px" }} value={search} onChange={changeHandleInput} />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ margin: "10px", padding: "16px", paddingTop: "10px", paddingBottom: "10px", color: "white", backgroundColor: "rgb(0,160,0)" }} onClick={searchHandler}><Link className="nav-link" to="/search">Search</Link></button>
            </form>
          </div>
        </div>

      </nav>
    </div>
  )
}
