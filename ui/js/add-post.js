const initAddPost = () => {
    const createPostBtn = document.querySelector(".button__block.button_add");
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelector(".button__block.button_close");
    const submitBtn = document.querySelector('.button__block.button_submit');
    const posts = [...JSON.parse(localStorage.getItem('posts'))];
    let title;
    let description;  

    function modalHandler() {
        switch(this.name) {
            case 'title':
                title = this.value; 
            case 'description':
                description = this.value;
        }
    }

    const submitHandler = () => {
        posts.unshift({
            id: new Date(),
            user_id: 1,
            title: title,
            content: description,
            like_amount: 1,
        })
        localStorage.posts = JSON.stringify(posts);
    }

    const openPostWindow = () => {
        modal.classList.add("modal_opened");
        const modalBlock = document.querySelector(".modal.modal_opened");
        const modalFieldTitle = document.querySelector("#title");
        const modalFieldDescription = document.querySelector("#description");
        const modalFields = [modalFieldTitle, modalFieldDescription];
        
        modalFields.forEach((field) => {
            field.addEventListener('change', modalHandler)
        })
    };

    const closePostWindow = () => {
        modal.classList.remove("modal_opened");
    };

    createPostBtn.addEventListener("click", openPostWindow);
    closeModalBtn.addEventListener("click", closePostWindow);
    submitBtn.addEventListener('click', submitHandler)
};
initAddPost();