let api = 'https://www.omdbapi.com/?apikey=61e576a4&t='

let title = document.getElementById('title');
let year = document.getElementById('year');
let runtime = document.getElementById('runtime');
let plot = document.getElementById('plot');
let genre = document.getElementById('genre');
let language = document.getElementById('language');
let director = document.getElementById('director');
let writer = document.getElementById('writer');
let stars = document.getElementById('stars');
let poster = document.getElementById('pic');
let r = document.getElementById('r-rating');
let i = document.getElementById('i-rating');
let type = document.getElementById('type');

let container = document.getElementById('content');
container.classList.add('d-none');

function search(){
    let searchName = document.getElementById('searchName');

    let query = api+searchName.value;

    fetch(query).then( (data)=> {
        return data.json()
    }).then ((data)=>{
        container.classList.remove('d-none');
        title.innerText = data.Title;
        year.innerText = data.Year;
        type.innerHTML = data.Type;
        if(data.Type =='series')
        {
            runtime.innerText = data.Runtime+'~ / episode';
        }
        else{
            runtime.innerText = data.Runtime;
        }
        plot.innerText = data.Plot;
        genre.innerText = data.Genre;
        language.innerText = data.Language;
        director.innerText = data.Director;
        writer.innerText = data.Writer;
        stars.innerText = data.Actors;
        poster.src = data.Poster;
        i.innerText = data.imdbRating;
        
        console.log(data);        
    })
}