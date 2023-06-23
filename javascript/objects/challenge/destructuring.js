// 1
const movie = {
    title: "Dead Poets Society",
    yearReleased: 1989,
    director: "Peter Weir",
    genre: ["Drama", "Teen", "Comedy"],
};

 const{title, yearReleased ,director, genre} = movie;
 console.log(movie);

 const getTitleAndGenre = (movie) => {
   return `The genres of the movie ${title} are ${movie.genre}`;
 };
console.log(getTitleAndGenre(movie));

// const getTitleAndGenre = (obj) => {

//     const { title, genre } = obj;
//     let genreList = genre.join(', ');

//     return `The genres of ${title} are ${genreList}`;
// };




// 2
const recipe = {
    name: "Spaghetti Bolognese",
    country: "Italy",
    isVegetarian: false,
    mealIngredients: [
        "Minced beef",
        "tomato sugo",
        "basil",
        "onion",
        "garlic",
        "parmesan",
    ],
};
const {mealIngredients:ingredients, ...remainingProperties} = recipe;

  console.log(recipe);
  const renameKey = (obj) => {
    obj = {
        ingredients, ...remainingProperties
    }
    return obj;
  };
  
  console.log(renameKey(recipe));


//   const renameKey = (obj, keyToRename, newKey) => {
//     const { [keyToRename]: value, ...rest } = obj; //use computed property name to pass value instead of defining new key "keyToRename"
//     const newObj = { [newKey]: value, ...rest };
//     return newObj;
//   };
  
//   console.log(renameKey(recipe, "mealIngredients", "ingredients"));




// 3

const codingSchool = {
    name: "_nology",
    languages: ["JavaScript", "Java"],
    offices: [
        {
            country: "Australia",
            city: "Sydney",
        },
        {
            country: "UK",
            city: "Bristol",
        },
    ],
};

// const returnFirstCity = ({ offices }) => {
//     const { city } = offices[0];
//     return city;
//   };
//   console.log(returnFirstCity(codingSchool));

  const returnFirstCity = (obj) => {
    const { offices } = obj;
    return offices[0].city 
};
console.log(returnFirstCity(codingSchool));



// const returnFirstCity = (obj) => {
//     const { offices, ...rest } = obj;
//     const [first] = offices;
//     const { city, ...rest2 } = first;
//     return city;
//    };
//    console.log(returnFirstCity(codingSchool));



// 4

const postsArray = [
    {
        id: 123,
        createdBy: "user16",
        commentNo: 5,
    },
    {
        id: 456,
        createdBy: "user20",
        commentNo: 5,
    },
    {
        id: 789,
        createdBy: "user32",
        commentNo: 5,
    },
];

const renamePostKeys = (posts) => {
    return posts.map(({ id: postId, createdBy: creator, commentNo: postComment }) => {
      return { postId, creator, postComment };
    });
  };
  
  const renamedPosts = renamePostKeys(postsArray);
  console.log(renamedPosts);

//   return arr.map((obj) => {
//     const { id, createdBy, commentNo } = obj;
//     return { postId: id, creator: createdBy, postComment: commentNo };
//   });





//5
const forecast = {
    yesterday: { low: 14, high: 32 },
    today: { low: 18, high: 34 },
    tomorrow: { low: 20, high: 28 },
};

const getTodayLow = ({ obj }) => {
    const { low } = obj.today;
    return low;
  };
  
console.log(getTodayLow(forecast));


// const getTodayLow = (obj) => {
//     const {today, ...rest} = obj 
//     const {low, ...todayRest} = today
//     return `${low} the value of the low temperature for today`
// };
