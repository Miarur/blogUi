const form = document.querySelector('.form-content'); 
const formFields = [...form.elements]; 
const submitBtn = document.querySelector('.button__block.button_form');

const initFormFieldsContentFromStorage = () => {
    formFields.forEach((field) => {
        field.value = localStorage.getItem(field.name)
    })
}

formFields.forEach((field) => {
    field.addEventListener('change', changeHandler); 
})
function changeHandler() {
    localStorage.setItem(this.name, this.value)
}

const clearStorage = () => {
    localStorage.clear(); 
    location.reload()
}
submitBtn.addEventListener('click', clearStorage); 

initFormFieldsContentFromStorage();