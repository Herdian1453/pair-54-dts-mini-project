import React, { useEffect } from "react";
import { MovieDetail } from "../../components/MovieDetail";
import { tmdbDetail } from "../../components/api/tmdb";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

// const HomeView = () => {
//   const [moviesdetail, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const fetchedMovies = await tmdbDetail.get("trending/movie/week");
//         setMovies(fetchedMovies.data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchMovies();
//   }, []);
const DetaillistView = () => {
  const location = useLocation();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        {/* {movies.map((movie) => (
          <MovieDetail MovieDetail={movie}></MovieDetail>
        ))} */}
        <MovieDetail id={location.state}></MovieDetail>
      </Box>
    </div>
  );
};

export default DetaillistView;
