let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
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
    let review =prompt("На сколько оцените его*");
    personalMovieDB.movies[film] = review;
}