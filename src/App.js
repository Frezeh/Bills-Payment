import React from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {

    let location = useLocation();
  
    return (
      <div style={{
        position: "absolute",
        height: "90%",
        width: "80%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "auto",
        borderRadius: "20px",
        boxShadow: "0px 2px 5px #ccc",
        maxWidth: "800px"
      }}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={300}>
            <LandingPage />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

export default App;
