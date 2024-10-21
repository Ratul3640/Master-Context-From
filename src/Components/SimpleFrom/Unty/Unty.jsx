import React, { useContext } from 'react';
import Cousin from '../../Cousin/Cousin';
import { MoneyContext } from '../Grandapha/Grandpa';

const Unty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Unty</h2>
            <section className='flex'>

                <Cousin name={"Ratul"}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Unty;