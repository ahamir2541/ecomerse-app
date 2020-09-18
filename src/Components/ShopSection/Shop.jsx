import React from 'react';
import ShopItems from './ShopItems'
import { ShopData } from './ShopData'

// const collections = ShopData
// console.log(collections)

const Shop = () => {
    return (
        <div className="container my-4">
            <h3>Collections</h3>
            { ShopData.map(section => (
                <ShopItems 
                key={section.id}
                sectionTitle={section.sectionTitle}
                items={section.items}
                />
            )) }
        </div>
    );
};

export default Shop;