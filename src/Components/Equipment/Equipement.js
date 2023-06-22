import { useEffect, useState } from 'react';
import './Equipement.css'

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
        <div className="one">
            <div className="circle">
            </div>
        </div>
    ) : (
        <div className="equipement" style={{ display: 'flex', overflowX: 'scroll', gap: '20px' }}>
            {data.map((equipement, index) => (
                <div key={index}>
                    <img src={equipement.image} alt="" onClick={() => console.log(equipement.id)} />
                    <a href={`/equipement/${equipement.id}`}>Go</a>
                </div>
            ))}
        </div>
    );
};

export default Equipement;