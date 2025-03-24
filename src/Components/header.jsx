import '../Style/nav.css'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar(){

    const [isNavOpen, setIsNavOpen] = useState(false);
    const url = useLocation();

    useEffetct(() => {
        setIsNavOpen(false);
    }, [url]);
   

    return(
        <>
        
        <header >
            
            <Link to="/" className="Logo">
                <h2> Camilla Söderman</h2>
            </Link>
            <nav>
            <ul className={isNavOpen ? "open" : ""}>
                    <li><NavLink to="/" id="navHome" >Home</NavLink></li>
                    <li><NavLink to="/about" id="navAbout" >About</NavLink></li>
                    <li><NavLink to="/projects" id="navProject" >Projects</NavLink></li>
                    <li><NavLink to="/contact" id="navContact" >Contact</NavLink></li>
                    <li><NavLink to="/experiance" id="navExp" >Experiance</NavLink></li>
            </ul>
        </nav>
        <p className="toggle-input" onClick={() => setIsNavOpen(!isNavOpen)} >☰</p>

        </header>
        </>
    )
}