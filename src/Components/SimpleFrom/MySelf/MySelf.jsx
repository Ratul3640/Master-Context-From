import React from 'react';
import Spical from '../../Spical/Spical';

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className='flex'>
                <Spical asset={asset}></Spical>
            </section>
        </div>
    );
};

export default MySelf;