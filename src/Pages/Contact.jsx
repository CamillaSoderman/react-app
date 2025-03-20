import githubimg from '../assets/img/githubicon.png'
import linkedinimg from '../assets/img/linkedinicon.png'

export default function Contact() {
    return(
        <main className="Contact">
            <h1>Contact</h1>
            <h2>Lets Connect</h2>
            <div className="project-section">
            <article className="card">
                    <div className="card-head-contact">
                       <a href="https://www.linkedin.com/in/camilla-s%C3%B6derman-458098157/"><img src={linkedinimg} alt="linked in icon"/></a> 
                        
                    </div>
                    <div className="card-body">
                        
                        <a href="https://www.linkedin.com/in/camilla-s%C3%B6derman-458098157/" target="_blank"><h3>Linked In</h3></a>
                    </div>
                </article>
                <article className="card">
                    <div className="card-head-contact">
                        <a a href="https://github.com/CamillaSoderman"><img src={githubimg} alt="github icon"/></a>
                    </div>
                    <div className="card-body">
                        
                        <a href="https://github.com/CamillaSoderman" target="_blank"><h3>Github</h3></a>
                    </div>
                </article>
                </div>
        </main>
    )
}