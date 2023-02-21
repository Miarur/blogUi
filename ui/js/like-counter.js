const initLikeCounter = () => {
    const likes = document.querySelectorAll(".like__img");
    let likesValueCollection = document.querySelectorAll(".like__value");

    let likeValues = [...likesValueCollection];

    likes.forEach((like, index) => {
        like.addEventListener("click", (event) => {
            if (event.target && !like.classList.contains("like__img_active")) {
                like.classList.add("like__img_active");
                likeValues[index].innerHTML = ++likeValues[index].innerText;
            } else {
                like.classList.remove("like__img_active");
                likeValues[index].innerHTML = --likeValues[index].innerText;
            }
        });
    });
};

initLikeCounter(); 