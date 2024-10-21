import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../../Brother/Brother';
import Sisterj from '../../Sister/Sisterj';

const Dad = ({ asset }) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sisterj></Sisterj>
            </section>
        </div>
    );
};

export default Dad;