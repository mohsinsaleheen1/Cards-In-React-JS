import React from 'react';
import './App.css';

function Card(prop){
    return(
        <>
            <div>
                <div className='card'>
                    <div className='card-img'>
                        <img src={prop.imge}/>
                    </div>
                    <div className='description'>
                        <h1 className='title'>{prop.heading}</h1>
                        <p className='para'>Pakistan officially the Islamic Republic of Pakistan,is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023.</p>
                        <div className='btn'>
                        <button className='card-btn'>See more</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    );   
}
export default Card;