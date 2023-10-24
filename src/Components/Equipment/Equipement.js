import { useEffect, useState } from 'react';
import './Equipement.css'
import Loading from '../Loading/Loading'

function Equipement(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await fetch("https://botw-compendium.herokuapp.com/api/v2/category/equipment");
                const result = await response.json();
                setData(result.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return loading ? (
        <>
            <Loading />
        </>
    ) : (
        <div className="equipement">
            <div className='allekip'>
                {data.map((equipement, index) => (
                    <div key={index} className='cardekip'>
                        <div className='ekipimg'>
                            <img src={equipement.image} alt="" onClick={() => console.log(equipement.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Equipement;