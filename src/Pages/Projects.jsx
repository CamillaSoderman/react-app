import { useState, useEffect, use } from "react"
import Spinner from 'react-bootstrap/Spinner';

import gitPic from '../assets/img/githubicon.png'
import '../Style/index.css'

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/CamillaSoderman/repos")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProjects(data);
                  setLoading(false);
                  }, 300);
            })
            .catch((error) => { console.error('Error fetching projects:', error)
            })
    }, [])

   if(loading){
    return (
        <>
            <Spinner loading={loading} size={50} />
            <h2>Loading projects..</h2>
            </>
    )
   }

    return (
        <>
            <main>
                <section>
                    <h1>Projects</h1>
                    <div className="project-section">
                        {projects.map((p) => {
                            return (
                                <article className="card" key={p.name}>
                                    <div className="card-head">
                                        <img src={gitPic} alt="image of githubs icon" className="card-img-fixed" ></img>
                                    </div>
                                    <div className="card-body">
                                        <h3>{p.name}</h3>
                                        <p>Language: {p.language || "Unknown"}</p>
                                        <a href={p.url}>To the repository</a>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </main>


        </>
    )
}
