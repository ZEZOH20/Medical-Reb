import { Fragment, React,useState} from 'react'
import {Link} from 'react-router-dom'
import "../styles/Nav.css"

export default function Navbar(props) {
    const [window_W, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize',()=>{
        setWidth(window.innerWidth)
    } );

    return (
        <Fragment>
            {props.WindowSize}
            <nav className="Nav">
                <div className="container">
                    <div className="row ro">
                        <div className="col-sm-2 ">
                            <img src={`${props.logo}`} width="80rem"/>
                        </div>
                        <div className="col-sm-8">
                            <ul className="row ul"> 
                              <Link id='L' to="/" className={`${window_W >1200 ?"col-sm-2 li":"col-sm li"}`}>Home</Link>
                              <Link id='L' to="/Cat" className={`${window_W >1200 ?"col-sm-2 li":"col-sm li"}`}>Categories</Link>
                              <Link id='L' to="/Abo" className={`${window_W >1200?"col-sm-2 li":"col-sm li"}`}>About</Link>
                              <Link id='L' to="/Con" className={`${window_W >1200 ?"col-sm-2 li":"col-sm li"}`}>Contact</Link>  
                            </ul>
                        </div>    
                        <div className="col-sm-2">
                            search
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
