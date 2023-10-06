import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo.svg'

export const Header = () =>{
    const isAuth = false

    return(
        <header>
            <Link to="/" className="logo">
                <img src={Logo} alt="WriteNode"  />
                <span>WriteNode</span>
            </Link>
            <nav className="nav">

                <NavLink to="/" className="link">Home</NavLink>

            { isAuth ? (
          <>
            <NavLink to="/create" className="link">Create</NavLink>
            <button  className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button> 
          </>                   
        ) : (
          <button  className="auth"><i className="bi bi-google"></i> Login</button>
        ) }    
            </nav>
        </header>
    )
}