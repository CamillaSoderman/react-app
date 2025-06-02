import { useState, useRef, useEffect } from 'react';
import proPic from '../assets/img/profilepic.png';
import chaschingImg from '../assets/img/chasching.png';
import linkedIn from '../assets/img/linkedinicon.png';
import '../Style/index.css';
import { useNavigate } from 'react-router-dom';

export default function Card() {
    const navigate = useNavigate();
    const [openPopover, setOpenPopover] = useState(null);
    const popoverRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setOpenPopover(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="project-section">
            {/* Card 1 */}
            <article className="card-index">
                <div className="card-head-index">
                    <img src={proPic} alt="image of Camilla" className="card-img-fixed" />
                </div>
                <div className="card-body-index">
                    <h3>Camilla</h3>
                    <p>This is me, Hi!</p>
                </div>
                <button onClick={() => navigate('/about')}>More info</button>
                {/* <div
                    ref={popoverRef}
                    className={`popover-box ${openPopover === 1 ? 'show' : ''}`}
                >
                     <h2>More info</h2>
          <p>You can find more information about me under the tab "About"</p> 
                </div> */}
            </article>

            {/* Card 2 */}
            <article className="card-index">
                <div className="card-head-index">
                    <img src={chaschingImg} alt="image of project Chas-ching" className="card-img-fixed" />
                </div>
                <div className="card-body-index">
                    <h3>Latest Project</h3>
                    <p>Chas-Ching</p>
                </div>
                <button onClick={() => navigate('/projects')}>More info</button>
                {/* <div
                    ref={popoverRef}
                    className={`popover-box ${openPopover === 2 ? 'show' : ''}`}
                >
                     <h2>More info</h2>
          <p>You can find more information about me under the tab "Projects"</p>
                </div> */}
            </article>

            {/* Card 3 */}
            <article className="card-index">
                <div className="card-head-index">
                    <img src={linkedIn} alt="linked in icon" className="card-img-fixed" />
                </div>
                <div className="card-body-index">
                    <a href="https://www.linkedin.com/in/camilla-s%C3%B6derman-458098157/">
                        <h3>Let's Connect</h3>
                    </a>
                </div>
            </article>
        </div>
    );
}
