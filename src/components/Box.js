import React from 'react';
import './Box.scss';

function Box({title, sub, icon, border, box}){
    return(
        <div 
            className={`Box ${box === 1 ? 'move-up' : '' || box === 4 ? 'move-up' : ''}`} 
            style={
                {
                    borderTop: `5px solid var(${border})`,
                    gridColumn: box === 3 ? '2' : '',
                    gridRow: box === 3 ? '2' : '',   
                }
            }
        >
            <h3 className='Box-title'>{title}</h3>
            <p className='Box-sub'>{sub}</p>
            <div className='Box-imgContainer'>
                <img src={icon} alt="icon" style={{display: "block"}} />
            </div>
        </div>
    );
}

export default Box;