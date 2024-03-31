import React, { useEffect, useState } from 'react';

const CoffeeForm = ({coffeeid, isEdit, setModalIsActive}) => {
    const [formData, setFormData] = useState({
        Name: "",
        Region: "",
        Notes: ""
    })

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://localhost:5001/api/beanvariety/${coffeeid}`)
        const data = await response.json()
        const formCopy = {...formData}
        formCopy.Name = data.name;
        formCopy.Region = data.region;
        formCopy.Notes = data.notes;
        setFormData(formCopy)

    }
    if (isEdit === true) {
        fetchData()
    }
  }, [])

    const sendToApi = async () => {
       
        if (isEdit !== true) {

            const formResponse = await fetch('https://localhost:5001/api/beanvariety', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const jsonResponse = await formResponse.json()
            console.log(jsonResponse)
        }
        if (isEdit === true) {
            const formCopy = {...formData}
            formCopy.Id = coffeeid
            const formResponse = await fetch(`https://localhost:5001/api/beanvariety/${coffeeid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formCopy)
            })

            setModalIsActive(false)
        }
    }

    return (
        <form>
            <fieldset class="mb-6">
                <label htmlFor="coffeeName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coffee Name</label>
                <input type="text" id="coffeeName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required 
                onChange={(e) => {
                    const formCopy = {...formData}
                    formCopy.Name = e.target.value;
                    setFormData(formCopy)
                }}
                value={formData.Name}/>
            </fieldset>
            <fieldset className="mb-6">
                <label htmlFor="coffeeRegion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coffee Region</label>
                <input type="text" id="coffeeRegion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Region" required onChange={(e) => {
                    const formCopy = {...formData}
                    formCopy.Region = e.target.value;
                    setFormData(formCopy)
                }}
                value={formData.Region}/>
            </fieldset>
            <fieldset className="mb-6">
                <label htmlFor="coffeeRegion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coffee Notes</label>
                <textarea type="text" id="coffeeRegion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Notes"
                onChange={(e) => {
                    const formCopy = {...formData}
                    formCopy.Notes = e.target.value;
                    setFormData(formCopy)
                }} value={formData.Notes}></textarea>
            </fieldset>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                onClick={(e) => {e.preventDefault(); sendToApi() }}>Add
        </button>
        </form>

    )
}

export default CoffeeForm;