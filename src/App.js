import React from 'react';
import './App.css';
import card from '../components/card';
import { Pagination } from '@mui/material';

function App() {
  return (
    <div>
    <card/>
    <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
    />
    </div>
  );
}

export default App;
