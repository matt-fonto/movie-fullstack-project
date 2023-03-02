package mattSoftEng.moviesFullStackProject;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    // it may return null
    Optional<Movie> findMovieByImdbId(String imdbId);
}
