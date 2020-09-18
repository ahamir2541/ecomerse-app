import React from 'react';
import CardTitle from './CardTitle'

const Card = ({largeSize, title, img}) => {
    const size = largeSize ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6'
    return (
        <div  className={`${size} mt-3`}>
            <div style={{
            backgroundImage : `url(${img})`
        }} className="card">
                <div className="cardTitleContainer">
                    <CardTitle title={title} />
                </div>
            </div>
        </div>
    );
};

export default Card;