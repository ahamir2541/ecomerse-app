import React from 'react';
import Card from './Card'

const ShopItems = ({sectionTitle, items}) => {
    return (
        <div className="mt-4">
            <h4 className="text-capitalize">{sectionTitle}</h4>
            <div className="cardItems mt-2">
                <div className="row">
                    {items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <Card 
                        image={item.photoUrl}
                        name={item.name}
                        price={item.price}
                        key={item.id} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default ShopItems;