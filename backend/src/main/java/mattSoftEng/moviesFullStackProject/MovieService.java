package mattSoftEng.moviesFullStackProject;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    @Autowired // this allows the service to access the methods of the repository class and...
    // ...retrive the data needed to fulfill the requests
    private MovieRepository movieRepository;

    // retrieving all the data
    public List<Movie> allMovies() {
        // retriving all the data from the data source
        return movieRepository.findAll();
    }

    // retrieving a single movie
    public Optional<Movie> singleMovie(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
