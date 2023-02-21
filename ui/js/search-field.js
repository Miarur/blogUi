const searchField = document.querySelector('.search__field'); 

const initSearchContentFromStorage = () => {
    searchField.value = localStorage.getItem(searchField.name)
}
function changeHandler() {
    localStorage.setItem(this.name, this.value);
}
searchField.addEventListener('change', changeHandler); 

initSearchContentFromStorage(); 