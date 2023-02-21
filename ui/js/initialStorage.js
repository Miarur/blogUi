const posts = [
    {
        id: 1,
        user_id: 1,
        title: "Covid update",
        content: "Union Health Minister Shari Manasseh Mandalay reviews COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George",
        like_amount: 10,
    },

    {
        id: 2,
        user_id: 2,
        title: "KikStarter Update",
        content: "Comic creator Kat Calamia wrote about her experience as a member of our Community Advisory Council—a diverse group of creators providing Kickstarter with insight, guidance, and expertise",
        like_amount: 20,
    },

    {
        id: 3,
        user_id: 3,
        title: "Break news",
        content: "Apple, which is grappling with supply delays in China, has lost top negotiator Tony Blevins, who says he was quoting a movie when he made a joke on video at a car show.",
        like_amount: 1120,
    },

    {
        id: 4,
        user_id: 4,
        title: "My Personal Experiences",
        content: "My Personal Experiences Sparked My Drive to Reimagine Care for Vulnerable Populations Discrimination changed my life",
        like_amount: 1,
    },

    {
        id: 5,
        user_id: 5,
        title: "My update",
        content: "When its Get Tough , Tough Gets Going !!. I am happy to share I got AIR 49 and global rank of 66 ( my personal best 😊 ) in CodeChef Starters 68 B .",
        like_amount: 2120,
    },

    {
        id: 6,
        user_id: 1,
        title: "Joke",
        content:
            "My code fails \
            I do not know why.\
            My code works. \
            I do not know why.😊😊😊",
        like_amount: 10,
    },
];


const users = [
    {
        id: 1,
        name: "Kumar",
        surname: "Saurabh",
        avatar: "../assets/img/avatar.png",
        email: "kumarsaur@gmail.com",
        password: "hashqweqw3424cWEWQE",
        about: "tra la la lal al la l",
        created_at:  new Date(2022, 12, 4).toISOString(),
        updated_at:  new Date().toISOString(),
    },

    {
        id: 2,
        name: "KikStarter",
        surname: " ",
        avatar:  "https://play-lh.googleusercontent.com/r4wBopBrIEeH8ICromEm1mDuzawUquXzZzYmeG22nqy_M0_KyRJKNn2v4gjfcsiOZZ0",
        email: "kikStarter@gmail.com",
        password: "hashqweqw3424cWEWQE",
        about: "tra la la lal al la l",
        created_at:  new Date(2022, 12, 5).toISOString(),
        updated_at:  new Date().toISOString(),
    },

    {
        id: 3,
        name: "The Wall Street Journal",
        surname: " ",
        avatar: "https://media.licdn.com/dms/image/C4D0BAQErTDc9V8YLdg/company-logo_200_200/0/1554387367489?e=1678924800&v=beta&t=32GQLKem9V86o51TCWR3MkPUDk4fHXWaeyd9BFATReI",
        email: "theWallStreetJournal@gmail.com",
        password: "hashqweqw3424cWEWQE",
        about: "tra la la lal al la l",
        created_at:  new Date(2022, 12, 6).toISOString(),
        updated_at:  new Date().toISOString(),
    },

    {
        id: 4,
        name: "Sarita",
        surname: "Mohanty",
        avatar: "https://media.licdn.com/dms/image/C5603AQGK37tCxleA0Q/profile-displayphoto-shrink_400_400/0/1620510865218?e=1676505600&v=beta&t=CJztJDIj7S8X-EE43Rk1HWLPlFggVU0FomLF94BzTlE",
        email: "sarita@gmail.com",
        password: "hashqweqw3424cWEWQE",
        about: "tra la la lal al la l",
        created_at:  new Date(2022, 12, 8).toISOString(),
        updated_at:  new Date().toISOString(),
    },

    {
        id: 5,
        name: "Pawan Kumar",
        surname: "Giri",
        avatar: "https://media.licdn.com/dms/image/D4D35AQE8GORM2amgXg/profile-framedphoto-shrink_400_400/0/1664904056073?e=1671555600&v=beta&t=0qhFuZ29gMqspU07FnMWIj-s6-niygxtHlNMr2ml5RA",
        email: "giri@gmail.com",
        password: "hashqweqw3424cWEWQE",
        about: "tra la la lal al la l",
        created_at:  new Date(2022, 12, 10).toISOString(),
        updated_at:  new Date().toISOString(),
    }

];

const savePostsInLocalStorage = () => {
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('users', JSON.stringify(users));
}
savePostsInLocalStorage();