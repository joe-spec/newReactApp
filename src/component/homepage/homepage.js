import React from 'react';
import './homepage.css';
// import { tsPropertySignature } from '@babel/types';

const HomePage = (props) => {
    return(
        <div className='homepage bg-lightest-blue'>
            {/* <h1>want to see more</h1> */}
            <button
                onClick={ props.isSignedIn }
                className='pa3 ba b--green bg-white pointer dim'>
                    Take a peep
            </button>
        </div>
    )
}

export default HomePage;