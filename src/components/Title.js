import React from 'react';
import './Title.scss';

function Title(){
    return(
        <div className='Title'>
            <h2 className='Title-text'>
                <span className='Title-text__thin'>Reliable, efficient delivery</span>
                Powered by Technology
            </h2>
            <p className='Title-sub'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
    );
}

export default Title;