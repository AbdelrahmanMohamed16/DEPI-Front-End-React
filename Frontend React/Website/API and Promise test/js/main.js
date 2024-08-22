var row = document.querySelector(".row");
var data = [];
let res;
function getPosts() {
    return new Promise(function(callback){
        var myHttp = new XMLHttpRequest();
        myHttp.open("GET","https://jsonplaceholder.typicode.com/posts");
        myHttp.send();

        myHttp.addEventListener("readystatechange",function() {
            if (myHttp.readyState == 4 && myHttp.status == 200) {
                data = JSON.parse(myHttp.response);
                callback();
            }
        });
    });
}

async function getPosts2() {
    res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    console.log(data);
}

function getMovies() {
    return new Promise(function(callback){
        var myHttp = new XMLHttpRequest();
        myHttp.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=d573091d322cd7c9ffc56a9c542c5aad");
        myHttp.send();
        
        myHttp.addEventListener("readystatechange",function() {
            if(myHttp.readyState == 4 && myHttp.status == 200) {
                var res = JSON.parse(myHttp.response);
                data = res.results;
                callback();
            }
        });
    });
}

async function getMovies2() {
    res = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d573091d322cd7c9ffc56a9c542c5aad");
    data = await res.json();
    console.log(data);
}

function printData() {
    console.log(data);
}

function displayDataPosts() {
    var containter = ``;
    for (let i = 0; i < data.length; i++) {
        containter += `<div class="col-md-4">
                            <div class="card text-center p-2">
                                <h3>${data[i].title}</h3>
                                <p>${data[i].body}</p>
                            </div>
                        </div>
                `;
    }
    row.innerHTML += containter;
}

function displayDataMovies() {
    var containter = ``;
    for (let i = 0; i < data.length; i++) {
        containter += `<div class="col-md-4">
                            <div class="card text-center p-2">
                                <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt=""s>
                                <h3>${data[i].title}</h3>
                                <p>${data[i].overview}</p>
                            </div>
                        </div>
                `;
    }
    row.innerHTML += containter;
}

// getPosts().then(function(){return displayDataPosts()}).then(function(){return getMovies()}).then(displayDataMovies);

getPosts2();