import React, { useContext } from 'react';
import { AssetContext } from '../SimpleFrom/Grandapha/Grandpa';

const Spical = ({ asset }) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Spacal</h2>
            <p>Has:{asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Spical;