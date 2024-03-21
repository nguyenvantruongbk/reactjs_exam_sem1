import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    // Xử lý sự kiện tìm kiếm
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
