import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';




export default function card() {
  
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((response) => {
      setData(response.data);
    });

    setTotalPages(Math.ceil(response.data.length / itemsPerPage));
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

}
  
  return (
    <div>
         {subset.map((item) => (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardHeader title={item.title}
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h6>{item.body}</h6>
        </Typography>
        <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      </CardContent>
    </Card>
  ))};


    </div>
  );
