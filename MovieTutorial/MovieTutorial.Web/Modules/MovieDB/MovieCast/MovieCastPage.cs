using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MovieTutorial.MovieDB.Pages
{

    [PageAuthorize(typeof(MovieCastRow))]
    public class MovieCastController : Controller
    {
        [Route("MovieDB/MovieCast")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/MovieCast/MovieCastIndex.cshtml");
        }
    }
}