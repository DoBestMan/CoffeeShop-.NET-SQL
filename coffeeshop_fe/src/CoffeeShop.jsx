import React, { useState } from 'react';
import CoffeeForm from './components/CoffeeForm';
import CoffeeList from './components/CoffeeList';

function CoffeeShop() {
    const [showBeans, setShowBeans] = useState(false);
    const [showForm, setShowForm] = useState(false)


    return (
      <>
      <div className="mb-4">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                onClick={(e) => {setShowBeans(true); setShowForm(false)}}>Show Beans!
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                onClick={(e) => {setShowBeans(false); setShowForm(true)}}>Add Beans!
        </button>

      </div>
            <div className="flex justify-start gap-y-5 flex-wrap p-2 gap-x-6 mx-auto max-w-xl md:max-w-screen-xl" >
                {showBeans ? <CoffeeList />
                : showForm ? <CoffeeForm /> 
                : ""}
      </div>
      </>

  );
}

export default CoffeeShop;