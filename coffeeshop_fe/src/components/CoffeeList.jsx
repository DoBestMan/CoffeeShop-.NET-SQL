import React, { useState } from 'react';
import { useEffect } from 'react';
import CoffeeCard from './CoffeeCard';

const CoffeeList = () => {
    const [coffeeData, setCoffeeData] = useState([]);
    const fetchData = async () => {
        const data = await fetch('https://localhost:5001/api/beanvariety')
        const jsonData = await data.json();
        setCoffeeData(jsonData)
    }

    useEffect(() => {
     
        fetchData();
    }, [])


    return (
      <>
        {coffeeData.map(bean => <CoffeeCard key={bean.id} coffeeid={bean.id} name={bean.name} region={bean.region} notes={bean.notes } refetchData={fetchData}/>)}
      </>

  );
}

export default CoffeeList;