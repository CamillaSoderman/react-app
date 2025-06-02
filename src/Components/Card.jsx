import chaschingImg from '../assets/img/chasching.png'
import proPic from '../assets/img/profilepic.png'
import linkedIn from '../assets/img/linkedinicon.png'
import '../Style/index.css'



export default function Card() {

    return (
        <>
            <div className="project-section">
                <article className="card-index">
                    <div className="card-head-index">
                        <img src={proPic} alt="image of Camilla" className="card-img-fixed" />

                    </div>
                    <div className="card-body-index">
                        <h3>Camilla</h3>
                        <p>This is me, Hi!</p>
                    </div>

                    <button popoverTarget="moreinfo1">More info</button>
                    <div id="moreinfo1" popover="auto">
                        <h2>More info</h2>
                        <p>You can find more information about me under the tab "About"</p>
                    </div>
                </article>
                <article className="card-index">
                    <div className="card-head-index">
                        <img src={chaschingImg} alt="image of project Chas-ching" className="card-img-fixed" />

                    </div>
                    <div className="card-body-index">
                        <h3>Latest Project</h3>
                        <p>Chas-Ching</p>
                    </div>
                    <button popoverTarget="moreinfo2">More info</button>
                    <div id="moreinfo2" popover="auto">
                        <h2>More info</h2>
                        <p>You can find more information about me under the tab "Projects"</p>
                    </div>
                </article>
                <article className="card-index">
                    <div className="card-head-index">
                        <img src={linkedIn} alt="linked in icon" className="card-img-fixed" />

                    </div>
                    <div className="card-body-index">
                        <h3></h3>
                        <a href="https://www.linkedin.com/in/camilla-s%C3%B6derman-458098157/"><h3>Lets Connect</h3></a>
                    </div>
                </article>
            </div>
        </>   


    );
}


