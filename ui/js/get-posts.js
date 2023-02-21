const initPostBlock = () => {
    const wrapperBlock = document.querySelector(".wrapper.news-feed__wrapper");
    const postListBlock = document.createElement("div");
    postListBlock.classList.add("post__list");
    wrapperBlock.append(postListBlock);
};

const initPostList = async () => {
    initPostBlock();
    const listBlock = await document.querySelector(".post__list");
    const posts = JSON.parse(localStorage.getItem("posts"));
    const users = JSON.parse(localStorage.getItem("users"));

    posts.forEach((post) => {
        const user = users.find((user) => user.id === post.user_id);
        if(user) {
            const template = `
            <div class="post__block">
                <div class="post__head">
                    <img class="post__img" src=${user.avatar} alt=${user.name}>
                    <p class="post__author">${user.name + ' ' + user.surname}</p>
                    <img class="post__options" src='../assets/icons/options.svg' alt="post-options">
                </div>
                <div class="post__body">
                    <h3 class="post__title">${post.title}</h3>
                    <p class="post__description">${post.content}</p>
                </div>
                <div class="post__footer">
                    <div class="like__counter-block">
                        <a class="like__img"></a>
                        <span class="like__value">${post.like_amount}</span>
                    </div>
                </div>
            </div>`;
            return (listBlock.innerHTML = listBlock.innerHTML + template);
        };
    });
};
initPostList();

const clearPostList = () => {
    const listBlock = document.querySelector(".post__list");
    listBlock.innerHTML = "";
};

window.addEventListener("storage", () => {
    clearPostList();
    initPostList();
});