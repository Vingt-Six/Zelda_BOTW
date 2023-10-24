import { useEffect, useState } from 'react';
import './Material.css'
import Loading from '../Loading/Loading';

function Material() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await fetch("https://botw-compendium.herokuapp.com/api/v2/category/materials");
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
        <div className="material" style={{ display: 'flex', overflowX: 'scroll', gap: '20px' }}>
            {data.map((material, index) => (
                <div key={index}>
                    <img src={material.image} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Material;