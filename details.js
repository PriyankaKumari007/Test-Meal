
const mealTitle = document.getElementById('meal-name');
const category = document.getElementById('cat');
const area = document.getElementById('area');
const vid = document.getElementById('ifream');
const ins = document.getElementById('ins');
const image = document.getElementById('thumb');
const ingredients = document.getElementById('ingredients');



//retrieve id from queryString
let id = window.location.search.split('?')[1];

//search for it in localStorage render the details
let meal = JSON.parse(localStorage.getItem(id));

document.title = meal.strMeal;

//function to render the details using jsonata from fetch 
function renderDetailsPage(meal) {
    const {strMeal, strCategory, strArea, strYoutube, strInstructions, strMealThumb} = meal;
   
    
    mealTitle.innerText = strMeal;
    category.innerHTML = strCategory;
    area.innerHTML = strArea;
    vid.setAttribute('src', strYoutube.replace("watch?v=", "embed/"));
    ins.innerHTML = strInstructions;

    image.src = strMealThumb;

    //loop to map ingredients with their measure(max ingredients in meals is 20)
    for(let i = 1; i<21; i++){
        let index = i.toString();
        let ingredient =  'strIngredient' + index;
        let measure  = 'strMeasure' + index;
        if(meal[ingredient] === "" || meal[ingredient] === null){
            break;
        }
       const li =  document.createElement('li');

        li.innerHTML = `<input type='checkbox'> ${meal[measure]} ${meal[ingredient]}`
        ingredients.appendChild(li)
    }
    
}
window.onload = () =>{
    renderDetailsPage(meal);
}

