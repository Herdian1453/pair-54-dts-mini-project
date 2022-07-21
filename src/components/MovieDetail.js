import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { CardContent, Card } from "@mui/material";
import { tmdbDetail } from "./api/tmdb";

const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/original";

export const MovieDetail = ({ id }) => {
  const [result, setResult] = useState();

  useEffect(() => {
    if (result) console.log(BASE_IMAGE_URL + result.data.backdrop_path);
  }, [result]);
  useEffect(() => {
    tmdbDetail(id).then((data) => {
      setResult(data);
    });
  }, [id]);

  if (result)
    return (
      <div>
        <Card sx={{ minWidth: 275 }}>
          <img
            src={BASE_IMAGE_URL + result.data.backdrop_path}
            className="w-full"
            alt="movie photos"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 34 }}
              color="text.secondary"
              gutterBottom
            >
              {result.data.original_title}
            </Typography>
            <Typography
              sx={{ fontSize: 24 }}
              color="text.secondary"
              gutterBottom
            >
              {result.data.overview}
              <br></br>
              Release date {result.data.release_date}
              <br></br>
              Genres {result.data.genres[0].name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );

  return null;
};
