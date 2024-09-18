import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  /*const {value,setValue} = new useState("")
  const handleSearch = (Event) = {
    console.log("search Initiated");
    setValue(Eventtarget.value);
  }
  const searchValue = () = {

  }*/
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.modeForm} navbar-${props.modeForm}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/Textutils-React">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Textutils-React">Home</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to='/About' aria-disabled="true">{props.aboutSection}</Link>
          </li>
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" /*onChange={handleSearch}*/ /*aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" /*onClick={searchValue}*/}{/*}>Search</button>
        </form>}*/}
      </div>
      <div className={`form-check form-switch mx-3 text-${props.modeForm==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.modeForm==='light'?'Dark':'Light'} mode</label>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutSection : PropTypes.string
}

Navbar.defaultProps = {
    title : 'set title here',
    aboutSection : 'About'
}