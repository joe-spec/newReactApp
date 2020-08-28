import React from 'react';

const Card = (props)=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card'>
            <div>
                <img src={`http://robohash.org/set_set5/${props.name}?200x200`} alt="robot"/>
            </div>
            <div>
                <p>{props.name}</p>
                <p>{props.username}</p>
            </div>
        </div>
    )
}

export default Card