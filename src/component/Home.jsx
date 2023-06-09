import React from "react";
import "../style/home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [Tmovies, setTmovies] = useState([]);
  const [rated, setRated] = useState([]);
  const [Trated, setTrated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // api poluar movie
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=2782c32843fa2374f6ba6deaf81a8e4c&language=en-US&page=1",
    }).then(function (response) {
      console.log(response);
      setMovies(response.data.results.slice(0, 4));
    });

    // api rated movies

    const options2 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data.results);
        setRated(response.data.results.slice(0, 4));
      })
      .catch(function (error) {
        console.error(error);
      });

    // api upcoming movies

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setUpcoming(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const TrailerMovie = (TrailerId) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${TrailerId}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setTmovies(response.data.results[0].key);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const TrailerRated = (TrailerId) => {
    // alert(TrailerId);

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${TrailerId}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgyYzMyODQzZmEyMzc0ZjZiYTZkZWFmODFhOGU0YyIsInN1YiI6IjY0MjkwMDJmOTYwY2RlMDA3NzEzMTA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwyRYPMPSQTNMA4FRJwOZ514p8i3reNUHEqIvWUIf24",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results[0].key);
        setTrated(response.data.results[0].key);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <div className="body">
        {/* alert */}
        <div
          className=" alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <img src="img/waving-hand.png" />
          <span>Welcome to WatchWatch</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        {/* jumbotron */}
        <div className="jumbotron d-flex justify-content-center align-items-center flex-column">
          <div className="jumbotron-box">
            <h2>
              Stream anywhere Millions of movies, <br /> TV shows and series{" "}
            </h2>
            <p>Get Best Experience streaming with WatchWatch</p>
          </div>
          <div className="jumbotron-box-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies or Series"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="container">
          {/* get-apps */}
          <div className="get-apps text-center">
            <h4> Get WatchWatch</h4>
            <img src="img/apple tv 2.png" />
            <img src="img/App_Store_(iOS).svg.png" />
            <img src="img/playstore.jpeg" />
            <img src="img/windows.jpg" />
          </div>

          {/* upcoming  */}

          <div className="upcoming">
            <h4 className="text-light"> Upcoming Movies</h4>

            <Swiper
              onSwiper={(swiper) => console.log(swiper)}
              className="swiper"
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                  // spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  // spaceBetween: 10,
                },
                968: {
                  slidesPerView: 4,
                  // spaceBetween: 10,
                },
              }}
            >
              {upcoming.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="card card-popular-movies">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      />
                    </div>
                    <div className="card-body mt-2 text-light">
                      {item.title}
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="tombol-r   text-center text-sm-end">
                <SliderButtons />
              </div>
            </Swiper>
          </div>

          {/* popular  movies*/}

          <div className="popular">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-lg-3 col-md-12">
                <div className="box">
                  <h4> Popular movies</h4>
                  <p>
                    browse the best popular movies right now only at WatchWatch{" "}
                  </p>

                  <Link
                    to="/popular-movies"
                    className="btn btn-outline-warning btn-sm"
                  >
                    Popular Movies
                  </Link>
                </div>
              </div>

              {movies.map((item, i) => {
                return (
                  <div key={i} className="col-12 col-lg-2 col-md-3 col-sm-6">
                    <div className="card film">
                      <div className="box mb-0">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <button
                            className="btn btn-sm btn-success "
                            data-bs-toggle="modal"
                            data-bs-target={`#movies${item.id}`}
                          >
                            {" "}
                            Details
                          </button>
                          <button
                            className="btn btn-sm btn-warning mt-2"
                            data-bs-toggle="modal"
                            data-bs-target={`#TMovies${item.id}`}
                            onClick={() => TrailerMovie(item.id)}
                          >
                            {" "}
                            Watch Trailer
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="fw-bold text-light  text-center mt-0 mt-3 mb-5">
                      {" "}
                      {item.original_title}
                    </p>

                    {/* Modal  Detail Movie*/}
                    <div
                      className="modal fade "
                      id={`movies${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog w-100">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="row">
                              <div className="col-sm-4 text-center mb-4">
                                <img
                                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                  className="card-img-top"
                                  alt="..."
                                />
                              </div>

                              <div className="col-sm-8">
                                <h4 className="text-light justify-align-content-between">
                                  {" "}
                                  {item.title}
                                </h4>
                                <div className="d-flex w-100  justify-content-between">
                                  <p className=""> {item.release_date}</p>
                                  <p className="text-warning">
                                    {" "}
                                    <i className="fa-solid fa-star"></i>{" "}
                                    {item.vote_average}{" "}
                                  </p>
                                </div>
                                <p> {item.overview} </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Modal  Trailer Movie*/}
                    <div
                      className="modal fade "
                      id={`TMovies${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog cok ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <iframe
                              width="100%"
                              // height="100%"
                              src={`https://www.youtube.com/embed/${Tmovies}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* carousel  */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            {/* indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            {/* inner  carousel*/}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/ipman.jpg" className="d-block w-100 " alt="..." />
                <div className="carousel-caption d-flex">
                  <div className="carousel-caption-box d-flex  flex-column align-items-start justify-content-center ms-5 text-start">
                    <h5>IP Man 4</h5>
                    <p>
                      Ip Man and his son encounter racial discrimination after
                      travelling to the United States to seek a better life.
                    </p>
                    <button className="btn btn-outline-warning btn-sm">
                      Watch{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <img src="img/ff3.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-flex">
                  <div className="carousel-caption-box d-flex  flex-column align-items-start justify-content-center ms-5 text-start">
                    <h5>Fast Furious 6</h5>
                    <p>
                      Hobbs is tasked with catching a team of mercenary drivers
                      who manage to evade him every time. However, he enlists
                      the help of Dominic and his team in exchange for full
                      pardons for their past crimes.
                    </p>
                    <button className="btn btn-outline-warning btn-sm">
                      Watch{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/sangchi2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-flex">
                  <div className="carousel-caption-box d-flex  flex-column align-items-start justify-content-center ms-5 text-start">
                    <h5>Shang-Chi</h5>
                    <p>
                      Shang-Chi, a martial artist, lives a quiet life after he
                      leaves his father and the shadowy Ten Rings organisation
                      behind. Years later, he is forced to confront his past
                      when the Ten Rings attack him.
                    </p>
                    <button className="btn btn-outline-warning btn-sm">
                      Watch{" "}
                    </button>
                  </div>
                </div>
              </div>
              {/* button  carousel*/}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Rated movies  */}
          <div className="popular popular-series">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-lg-3 col-md-12">
                <div className="box">
                  <h4>Rated Movies</h4>
                  <p>
                    browse the best rated movies right now only at WatchWatch{" "}
                  </p>

                  <Link
                    className="btn btn-outline-warning btn-sm"
                    to="/rated-movies"
                  >
                    {" "}
                    Rated Movies{" "}
                  </Link>
                </div>
              </div>

              {rated.map((item, i) => {
                return (
                  <div key={i} className="col-12 col-lg-2 col-md-3 col-sm-6 ">
                    <div className="card">
                      <div className="box mb-0">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <button
                            className="btn btn-sm btn-success"
                            data-bs-toggle="modal"
                            data-bs-target={`#series${item.id}`}
                          >
                            {" "}
                            Details
                          </button>

                          <button
                            className="btn btn-sm btn-warning mt-2"
                            data-bs-toggle="modal"
                            data-bs-target={`#Tseries${item.id}`}
                            onClick={() => TrailerRated(item.id)}
                          >
                            {" "}
                            Watch Trailer
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="fw-bold text-light  text-center mt-0 mt-3 mb-5">
                      {" "}
                      {item.original_title}
                    </p>

                    {/* Modal rated movies*/}
                    <div
                      className="modal fade "
                      id={`series${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog w-100">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="row">
                              <div className="col-sm-4 text-center mb-4">
                                <img
                                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                  className="card-img-top"
                                  alt="..."
                                />
                              </div>

                              <div className="col-sm-8">
                                <h4 className="text-light justify-align-content-between">
                                  {" "}
                                  {item.title}
                                </h4>
                                <div className="d-flex w-100  justify-content-between">
                                  <p className="">{item.release_date}</p>
                                  <p className="text-warning">
                                    {" "}
                                    <i className="fa-solid fa-star"></i>{" "}
                                    {item.vote_average}{" "}
                                  </p>
                                </div>
                                <p> {item.overview} </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Modal Trailer rated*/}
                    <div
                      className="modal fade "
                      id={`Tseries${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <iframe
                              width="100%"
                              // height="100%"
                              src={`https://www.youtube.com/embed/${Trated}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="fw-bold mt-3 text-light text-center mb-5">
                      {" "}
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* More */}
          <div className="more">
            <div className="box">
              <h4> More to Watch</h4>
              <p>
                {" "}
                WatchWatch help you select the perfect next show or movie to
                watch
              </p>
              <Link
                to="/explore"
                className="btn btn-outline-light btn-sm"
                role="button"
              >
                Explore{" "}
              </Link>
              <button className="btn btn-outline-light btn-sm">
                {" "}
                Subcsriptions{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button
        onClick={() => swiper.slidePrev()}
        className="btn   btn-sm btn-prv"
      >
        <i className="fa-solid fa-arrow-left  "></i>
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="btn  btn-sm btn-nxt"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
