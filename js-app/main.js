const url = "https://localhost:5001/api/beanvariety/";



const beanListContainer = document.getElementById("beanList")

const beanFormContainer = document.getElementById("beanForm")

const formValues = {
    beanName: "",
    beanRegion: "",
    beanNotes: ""
}





const form = `    
<form>
    <fieldset>
        <label for="beanName">Bean Name</label>
        <input type="text" placeholder="Enter bean name" name="beanName" onChange=`(e) => updateBeanName(e)` value=${formValues.beanName}/>
    </fieldset>
    <fieldset>
        <label for="beanRegion">Bean Region</label>
        <input type="text" placeholder="Enter bean region" name="beanRegion" value=${formValues.beanRegion}/>
    </fieldset>
    <fieldset>
        <label for="beanNotes">Bean Notes</label>
        <textarea type="textarea" placeholder="Enter any notes" name="beanNotes" value=${formValues.beanNotes}></textarea>
    </fieldset>
    <button type="submit">Submit Form</button>
</form>`


const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties)
            htmlString = ""
        beanVarieties.map(variety => htmlString +=  `<h1>${variety.name}</h1>`);
        beanListContainer.innerHTML = htmlString;
        })
});



function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}
