package mattSoftEng.moviesFullStackProject;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//makes it a RESTful webservice endpoint for handling HTTP requests 
@RestController
@RequestMapping("/api/v1/movies") // defining our endpoint

public class MovieController {
    @Autowired // used to manage dependencies between different components
    private MovieService movieService;

    // getting all the movies
    @GetMapping // handles HTTP GET Requests and map them to specific methods in teh controller
    public ResponseEntity<List<Movie>> getAllMovies() {
        // getting a list of all the movies
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    // getting a single movie by id
    @GetMapping("/{imdbId}") // searching a movie by its id
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId), HttpStatus.OK);
    }
}
