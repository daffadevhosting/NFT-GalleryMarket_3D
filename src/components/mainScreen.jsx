import React, { Component, useState, useEffect } from 'react';
import TextScramble from 'react-textscramble';
import '../assets/MainScreen.css';
import PreloadScreen from './Preload';

export default class MainScreen extends Component {
  constructor() {
    super();

    this.state = {
      scrambleProgess: 0,
      isLoaded: false
    };
  }

  componentDidMount() {
    // Perform any async tasks necessary for the preload
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 5000);
  }

  render() {
    let phrases = [
      'Hi',
      'How are you doing?',
      'I am still working on this site!',
      'So something might not be working',
      'And site will change a little bit in the end',
      'But please enjoy your visit! ☺',
    ];
    let freezeDuration = 1600;

    return this.state.isLoaded ? (
      <div className="MainScreen">
        <div className="top-right-text">
          <span className="TextScramble-progressbar">
            <span
              className="underline"
              style={{
                width: `${Math.floor(this.state.scrambleProgess * 100)}%`,
              }}
            ></span>
            progress bar :)
          </span>
        </div>
        <div className="scramble-container">
          <TextScramble
            phrases={phrases}
            freezeDuration={freezeDuration}
            reportProgress={(progress) => {
              this.setState({ scrambleProgess: progress });
            }}
          />
        </div>
      </div>
    ) : (
      <PreloadScreen />
    );
  }
}

