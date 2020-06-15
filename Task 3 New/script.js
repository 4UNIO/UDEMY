let numberOfFilms;

function start()
{
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();
personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
for(let i = 0;i < 2;i++)
{
    let film =prompt("Один из последних просмотренных фильмов?");
    if(film == "" || film == null || film.length > 50)
    {
        film =prompt("Один из последних просмотренных фильмов?");
    }else
    {
        let review =prompt("На сколько оцените его*");
        personalMovieDB.movies[film] = review;
    }
}

if(personalMovieDB.count < 10)
{
    alert("Просмотрено мало фильмов!");
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30 )
{
    alert("Вы обычный зритель!");
}else if(personalMovieDB.count > 30 )
{
    alert("Вы киноман!");
}else
{
    alert("Error 404");
}
function writeYourGenres()
{

}