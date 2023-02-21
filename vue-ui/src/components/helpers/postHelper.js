export function getAllPosts(posts, users) {
    const data = [];
    posts.forEach((post) => {
        const user = users.find((userItem) => userItem.id === post.userId);
        if (user) {
            data.push({
                id: post.id,
                userId: user.id,
                name: user.name,
                surname: user.surname,
                authorAvatar: user.avatar,
                title: post.title,
                content: post.content,
                likeAmount: post.likeAmount,
                likeState: post.isLicked,
                createdAt: post.createdAt,
            });
        }
    });
    return data;
}

export function getUserPosts(posts, user) {
    const userPosts = posts.filter((postItem) => postItem.userId === user.id);
    const data = [];
    if (userPosts.length) {
        userPosts.forEach((post) => {
            data.push({
                id: post.id,
                userId: user.id,
                name: user.name,
                surname: user.surname,
                authorAvatar: user.avatar,
                title: post.title,
                content: post.content,
                likeAmount: post.likeAmount,
                likeState: post.isLicked,
                createdAt: post.createdAt,
            });
        });
    }
    return data;
}
export default { getAllPosts, getUserPosts };
