const postsArray = JSON.parse(localStorage.getItem("posts"));
const usersArray = JSON.parse(localStorage.getItem("users")); 
const firstUser = usersArray[0]; 

const initPostBlock = () => {
    const userFeedBlock = document.querySelector(".user-feed");
    const postListBlock = document.createElement("div");
    postListBlock.classList.add("post__list");
    userFeedBlock.append(postListBlock);
};

const initPostList = async () => {
    initPostBlock();
    const list = await document.querySelector(".post__list");
    const userPosts = postsArray.filter(post => post.user_id === firstUser.id); 
    
    if (userPosts.length === 0) {
        list.innerHTML = `<h1>Sorry this user haven't posts</h1>`;
    }
    
    userPosts.forEach((post) => {
        const template = `
            <div class="post__block">
                    <div class="post__head">
                        <img class="post__img" src=${firstUser.avatar} alt=${firstUser.name + firstUser.surname}>
                        <p class="post__author">${firstUser.name + ' ' + firstUser.surname}</p>
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
        return (list.innerHTML = list.innerHTML + template);
    });
};
initPostList();