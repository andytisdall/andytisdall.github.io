import React from 'react';
import Project from './Project';
import Header from './Header';

import apprehenchmen_image from './images/apprehenchmen.png';
import exploring_image from './images/exploring.png';
import harpist_image from './images/harpist.png';
import fingersynth_image from './images/fingersynth.png';
import coderunner_image from './images/coderunner.png';

const Main = () => {
  return (
    <div className="container">
      <Header />
      <div className="project-container">
        <Project
          title="Coderunner"
          description="In-browser code editing and execution. A user's javascript code is transpiled and results are displayed in a preview window. Support for importing npm packages, bundled by esbuild. You can even create React components and import CSS libraries. Also provides a markdown editor."
          pic={coderunner_image}
          url="https://andytisdall.github.io/coderunner"
        />
        <Project
          title="Exploring the Space"
          description="Online cataloging and playback of audio files.  Full-stack web application built with React, Redux, Express, & MongoDB. Used by real bands to develop musical projects. Provides database for upload, organization and playback of audio files."
          pic={exploring_image}
          url="https://exploring-the-space.com"
        />
        <Project
          title="Apprehenchmen"
          description="Homepage for a working band. Full-stack site built with Django and Bootstrap.  Provides a database for band resources such as photos, mailing list, events and lyrics."
          pic={apprehenchmen_image}
          url="https://apprehenchmen.com"
        />
        <Project
          title="Finger Synth"
          description="Mobile synth with touch interaction. Built with React and using the ToneJS module.  Customizable Javascript-based instrument with modular effect processing, controlled by touch screen gestures."
          pic={fingersynth_image}
          url="https://andytisdall.github.io/finger-synth"
        />
        <Project
          title="Harpist"
          description="Customizable virtual harp instrument built with vanilla Javascript and using the ToneJS module."
          pic={harpist_image}
          url="https://apprehenchmen.com/harp"
        />
      </div>
    </div>
  );
};

export default Main;
