var movies = [
	{
		movie:  "Avengers Infinity War",
		rating:  "5 stars",
		hasWatched:  true
	},
	{
		movie:  "Beethoven",
		rating:  "4 stars",
		hasWatched:  true
	},
	{
		movie:  "Kick Ass",
		rating:  "3.8 stars",
		hasWatched:  false
	},
	{
		movie:  "Brave",
		rating:  "3.5 stars",
		hasWatched:  true
	},
];

for(i = 0; i < movies.length; i++) {
	if(movies[i].hasWatched === false) {
		console.log("You have not seen \"" + movies[i].movie + "\" - " + movies[i].rating);
	} else {
		console.log("You have watched \"" +  movies[i].movie + "\" - " + movies[i].rating);
	}
}
