import React from 'react';

const Card = ({name, price, image}) => {
    return (
        <div className="col-lg-3 col-md-6 mt-2">
            <div className="shopCard" style={{
                backgroundImage : `url(${image})`
            }} >
                <div className="addTOCard ">
                    <div>add to card</div>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-2 text-capitalize">
                <h4>{name} </h4>
                <h4>${price} </h4>
            </div>
        </div>
    );
};

export default Card;