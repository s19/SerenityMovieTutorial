using Serenity.Navigation;
using MyPages = MovieTutorial.MovieDB.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "",
    icon: "fa-tachometer")]

[assembly: NavigationMenu(2000, "Movie Database", icon: "fa-video-camera")]

[assembly: NavigationLink(2100, "Movie Database/Movies", 
    typeof(MyPages.MovieController), icon: "fa-film")]

[assembly: NavigationLink(2200, "Movie Database/Movie Genres",
    typeof(MyPages.MovieGenresController), icon: "fa-thumb-tack")]

[assembly: NavigationLink(2300, "Movie Database/Person",
    typeof(MyPages.PersonController), icon: "fa-users")]
//[assembly: NavigationLink(int.MaxValue, "MovieDB/Movie Genres", typeof(MyPages.MovieGenresController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "MovieDB/Person", typeof(MyPages.PersonController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "MovieDB/Movie Cast", typeof(MyPages.MovieCastController), icon: null)]