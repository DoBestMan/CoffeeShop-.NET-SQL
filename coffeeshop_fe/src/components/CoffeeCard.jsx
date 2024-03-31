import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';

const CoffeeCard = ({coffeeid, name, region, notes, refetchData}) => {
    const [modalActive, setModalActive] = useState(false);
    
    const handleDelete = async () => {
        const formResponse = await fetch(`https://localhost:5001/api/beanvariety/${coffeeid}`, {
                method: "DELETE"
    }
    )
    refetchData()
    }

    useEffect(() => {
        refetchData()
    }, [modalActive])

  return (

<>
      <div className="flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
              <img className="rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg" alt="coffee bean" />
          </div>
          <div className="p-5">
              <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{region}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{notes}</p>
          
          
          </div>
          <div className='pl-4 pb-2 space-x-2'>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-28 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                onClick={(e) => {e.preventDefault();  setModalActive(true) }}>Edit
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-28 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                onClick={(e) => {e.preventDefault(); handleDelete()}}>Delete
        </button>

          </div>
      </div>

<EditModal isActive={modalActive} setModalIsActive={setModalActive} coffeeid={coffeeid}/>
</>
  );
}

export default CoffeeCard;