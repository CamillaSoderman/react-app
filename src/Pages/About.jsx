import '../Style/index.css'
import proPic from '../assets/img/profilepic.png'

export default function About() {
    return (
        <><h1>About Me</h1>
<div className="about_me_content">
  <img id="aboutMePic" src={proPic} alt="image of Camilla" />
  <div id="about_me_p">
                    <p>Hi! I’m Camilla, a passionate tech enthusiast with a background in ABAP programming,
                        now diving into the world of full-stack .NET development.
                        When I’m not coding, you’ll probably find me baking something delicious,
                        leveling up in my favorite video games, catching up with friends, or hitting the gym.
                        I love the balance between creativity, logic, and staying active—whether it’s in the kitchen, at my desk, or on the weight rack.
                        Let’s connect and create something awesome together!
                    </p>
                </div>
            </div>
        </>
    )
}