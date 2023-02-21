const userInfoForm = document.querySelectorAll('.settings__user-data');
const submitBtn = document.querySelector('.button__block.button_settings_all')
const checkStorage = () => {
    userInfoForm.forEach((form) => {
        [...form.elements].forEach((field) => { 
            field.value = localStorage.getItem(field.name)
        })
    })
}

function changeHandler() {
    console.log(this.name, this.value)
    localStorage.setItem(this.name, this.value)
}

userInfoForm.forEach((form) => {
    [...form.elements].forEach((field) => {
        field.addEventListener('change', changeHandler) 
    }) 
})

const clearStorage = () => {
    localStorage.clear(); 
    location.reload()
}
submitBtn.addEventListener('click', clearStorage); 
checkStorage();