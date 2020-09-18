import React from 'react';
import Card from './Card';
// images
import image1 from '../../img/image1.jpeg';
import image2 from '../../img/image2.jpeg';
import image3 from '../../img/image3.jpeg';
import image4 from '../../img/image4.jpeg';
import image5 from '../../img/image5.jpeg';

const CardPosts = () => {
    const cardPosts = [
        {
            id : 1,
            photo : image1,
            title : 'hats'
        },
        {
            id : 2,
            photo : image2,
            title : 'jackets'
        },
        {
            id : 3,
            photo : image3,
            title : 'world'
        },
        {
            id : 4,
            photo : image4,
            title : 'women',
            largeSize : true
        },
        {
            id : 5,
            photo : image5,
            title : 'mens',
            largeSize : true
        },
    ]

    return (
        <div className="container">
            <div className="row">
                {cardPosts.map(cardPost => (
                    <Card 
                    key={cardPost.id} 
                    largeSize={cardPost.largeSize}
                    title={cardPost.title}
                    img={cardPost.photo} />
                ))}
            </div>
        </div>
    );
};

export default CardPosts;