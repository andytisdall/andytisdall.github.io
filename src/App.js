import './App.css';
import Project from './Project';
import Header from './Header';
import apprehenchmen_image from './images/apprehenchmen.png'
import exploring_image from './images/exploring.png'
import harpist_image from './images/harpist.png'
import fingersynth_image from './images/fingersynth.png'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="contact">
        <div className="contact-item">andrew.tisdall@gmail.com</div>
        <a href="#" className="contact-item">Linkedin</a>
      </div>
      <div className="project-container">
      <Project 
          title="Exploring the Space"
          description="Online cataloging and playback of audio files.  Full-stack web application built with React, Redux, Express, & MongoDB"
          pic={exploring_image}
          url="https://exploring-the-space.com"
        />
        <Project 
          title="Apprehenchmen"
          description="Website for my band. Full-stack site built with Django and Bootstrap."
          pic={apprehenchmen_image}
          url="https://apprehenchmen.com"
        />
        <Project 
          title="Finger Synth"
          description="Mobile synth with touch interaction. Built with React and using the ToneJS module."
          pic={fingersynth_image}
          url="https://andytisdall.github.io/finger-synth"
        />
        <Project 
          title="Harpist"
          description="Virtual harp built with vanilla Javascript and using the ToneJS module."
          pic={harpist_image}
          url="https://apprehenchmen.com/harp"
        />
      </div>
    </div>
  );
}

export default App;
