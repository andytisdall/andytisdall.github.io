import apprehenchmen_image from '../images/apprehenchmen.png';
import exploring_image from '../images/exploring.png';
import harpist_image from '../images/harpist.png';
import fingersynth_image from '../images/fingersynth.png';
import coderunner_image from '../images/coderunner.png';
import exploring_mobile_image from '../images/exploring-mobile.png';

const data = [
  {
    title: 'Coderunner',
    description:
      "In-browser code editing and execution. A user's javascript code is transpiled and results are displayed in a preview window. Support for importing npm packages, bundled by esbuild. You can even create React components and import CSS libraries. Also provides a markdown editor.",
    pic: coderunner_image,
    url: 'https://andytisdall.github.io/coderunner',
  },
  {
    title: 'Exploring the Space',
    description:
      'Online cataloging and playback of audio files.  Full-stack web application built with React, Redux, Express, & MongoDB. Used by real bands to develop musical projects. Provides database for upload, organization and playback of audio files.',
    pic: exploring_image,
    url: 'https://exploring-the-space.com',
  },
  {
    title: 'Exploring the Space Mobile',
    description:
      "Mobile client for Exploring the Space, made with React Native. Works on iOS and Android devices. Uses React Native Track Player for streaming audio playback. Features remote audio control from your mobile device's lock screen.",
    pic: exploring_mobile_image,
    url: 'https://exploring-the-space.com/mobile',
  },
  {
    title: 'Apprehenchmen',
    description:
      'Homepage for a working band. Full-stack site built with Django and Bootstrap.  Provides a database for band resources such as photos, mailing list, events and lyrics.',
    pic: apprehenchmen_image,
    url: 'https://apprehenchmen.com',
  },
  {
    title: 'Finger Synth',
    description:
      'Mobile synth with touch interaction. Built with React and using the ToneJS module.  Customizable Javascript-based instrument with modular effect processing, controlled by touch screen gestures.',
    pic: fingersynth_image,
    url: 'https://andytisdall.github.io/finger-synth',
  },
  {
    title: 'Harpist',
    description:
      'Customizable virtual harp instrument built with vanilla Javascript and using the ToneJS module.',
    pic: harpist_image,
    url: 'https://apprehenchmen.com/harp',
  },
];

export default data;
