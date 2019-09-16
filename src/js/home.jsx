import React from 'react';
import treehacks_text from '../svg/treehacks-text.svg'
import arm2l from '../svg/arm2l.svg'
import { home, live_cutoff, ended_cutoff } from './content.json';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import EmailSignupWidget from "./email-signup-widget.jsx";

const STATUSES = {
  beforeRegistration: 1,
  registration: 2
}

const STATUS = STATUSES.beforeRegistration;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 0
    };
  }

  componentDidMount() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (width > 750) {
      this.interval = setInterval(
        () =>
          this.setState({
            phrase: (this.state.phrase + 1) % (home.length - 1)
          }),
        7000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const hasEnded = Date.now() > new Date(ended_cutoff),
      hasBegun = Date.now() > new Date(live_cutoff);

    return (
      <div id="home">
        <img className="logo scale-in-center" src={treehacks_text} alt="treehacks large text" />
        <img className="slide-in-left" id="arm" src={arm2l} alt="" />
        <div id="date-text">February 14-16 at Stanford University</div>
        {STATUS === STATUSES.registration &&
          <a href="https://live.treehacks.com" className="apply-button">apply here</a>
        }
        {STATUS === STATUSES.beforeRegistration &&
          <EmailSignupWidget />
        }
      </div>
    );
  }
}

export default Home;
