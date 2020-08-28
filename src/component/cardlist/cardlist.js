import React from 'react';
import Card from '../card/card';

const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map((item) => {
                    return(
                        <Card 
                            key={item.id} 
                            name={item.name} 
                            username={item.username} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;