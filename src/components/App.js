import React from 'react';
import './App.scss';
import Title from './Title';
import Box from './Box';
import calculator from '../images/icon-calculator.svg';
import karma from '../images/icon-karma.svg';
import supervisor from '../images/icon-supervisor.svg';
import teamBuilder from '../images/icon-team-builder.svg';

const boxContent = [
    {
        title: "Supervisor",
        sub: "Monitors activity to identify project roadblocks",
        icon: supervisor,
        border: "--cyan"
    },
    {
        title: "Team Builder",
        sub: "Scans our talent network to create the optimal team for your project",
        icon: teamBuilder,
        border: "--red"
    },
    {
        title: "Karma",
        sub: "Regularly evaluates our talent to ensure quality",
        icon: karma,
        border: "--orange"
    },
    {
        title: "Calculator",
        sub: "Uses data from past projects to provide better delivery estimates",
        icon: calculator,
        border: "--blue"
    }
];

function App(){
    return(
        <div className='App'>
            <Title />
            <div className='App-boxContainer'>
                <Box title={boxContent[0].title} sub={boxContent[0].sub} icon={boxContent[0].icon} border={boxContent[0].border} box={1} />
                <Box title={boxContent[1].title} sub={boxContent[1].sub} icon={boxContent[1].icon} border={boxContent[1].border} box={2} />
                <Box title={boxContent[2].title} sub={boxContent[2].sub} icon={boxContent[2].icon} border={boxContent[2].border} box={3} />
                <Box title={boxContent[3].title} sub={boxContent[3].sub} icon={boxContent[3].icon} border={boxContent[3].border} box={4} />
            </div>
        </div>
    );
}

export default App;