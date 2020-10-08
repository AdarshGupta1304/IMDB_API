// Movie Search

// omdb api = 'http://www.omdbapi.com/?i=tt3896198&apikey=d8760ac4';


const KEY = 'd8760ac4';

let form = document.querySelector('#form');
let input = document.querySelector('#search');
let btn = document.querySelector('#btn_search');

// Movie Search

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(input.value);
// })



const SearchMovies = async (searchKey) => {
    const BASE_URL = `http://www.omdbapi.com/?s=${searchKey}&apikey=${KEY}`;  //multiple movies

    try{
        let res = await window.fetch(BASE_URL);
        let movies = await res.json();
        let output = [];

        console.log(movies);

        for(let movie of movies.Search)
        {
            output += `
                        <div class="card-cont card col-md-3 col-xs-12 col-sm-12 border border-danger m-1">
                            <img src="${movie.Poster}" class="img-card-top col-md-12 col-sm-12 col-xs-12 m-0 p-0" alt="${movie.Title}" />
                            <div class="card-body col-md-12 col-sm-12 col-xs-12 text-capitalize text-center">
                                <h4>${movie.Title}</h4>
                                <p>Released in - ${movie.Year}</p>
                            </div>
                        </div>    
                    `;
        };
        document.getElementById("template").innerHTML =  output ;
        // console.log(movies);
    }catch(error){
        console.log(error);
    }
}

//Click or enter events to search...
input.addEventListener('keyup', (e) => {
    // console.log(typeof e.keyCode)
    if(e.keyCode === 13){
        e.preventDefault();
        var searchKey = e.target.value;
        SearchMovies(searchKey);
        console.log(searchKey);
    }
        
})

btn.addEventListener('click', (e) => {

        e.preventDefault();
        var searchKey = e.target.value;
        SearchMovies(searchKey);
        console.log(searchKey);
        
})