import React, { useContext } from 'react';
import { MoneyContext } from '../SimpleFrom/Grandapha/Grandpa';

const Brother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa: {money}</p>
        </div>
    );
};

export default Brother;