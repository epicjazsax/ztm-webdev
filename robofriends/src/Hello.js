import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
						{this.props.greeting}
					</h2>
					<p>
            greetings user.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            r e a c t
          </a>
        </header>
      </div>
    );
  }
}

export default Hello;