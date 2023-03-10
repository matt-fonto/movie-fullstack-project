import React from "react";
import api from "../api/axiosConfig";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

const ReviewsPage = ({ getMovieData, movie, reviews, setReviews }) => {
  const reviewText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const review = reviewText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: review.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: review.value }];

      review.value = "";

      setReviews(updatedReviews);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(reviews);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Reviews</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <img src={movie?.poster} alt="movie-poster" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    reviewText={reviewText}
                    labelText="What did you think about the movie?"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews &&
            reviews?.map((review) => {
              return (
                <>
                  <Row>
                    <Col>{review.body}</Col>
                  </Row>
                  <Col>
                    <hr />
                  </Col>
                </>
              );
            })}
        </Col>
      </Row>
      <Col>
        <hr />
      </Col>
    </Container>
  );
};

export default ReviewsPage;
