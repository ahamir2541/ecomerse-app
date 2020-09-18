import React from 'react';

const CardTitle = ({title}) => {
    return (
        <div>
            <h4 className="title"> {title} </h4>
            <span className="subTitle">shop now</span>
        </div>
    );
};

export default CardTitle;