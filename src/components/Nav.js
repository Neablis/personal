import React, { Component } from 'react';

class WebNav extends Component {
  render() {
    return (
      <div id="navigator">
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/Neablis12321" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/neablis" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="mailto:mitchell@demarcosoftware.com" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default WebNav;
