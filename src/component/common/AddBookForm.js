import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddBookForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý sự kiện thêm sách mới
  };

  return (
  
    <Form onSubmit={handleSubmit}>
        <h3>Add a new book</h3>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" />
      </Form.Group>
      <Form.Group controlId="formFavorite">
        <Form.Check type="checkbox" label="Favorite" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddBookForm;
