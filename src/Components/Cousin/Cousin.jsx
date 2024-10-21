import Friends from "../Friends/Friends";
import Spical from "../Spical/Spical";


const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Spical asset={asset}></Spical>}
                {name==='Rubaiya'&&<Friends></Friends>}
            </section>
        </div>
    );
};

export default Cousin;