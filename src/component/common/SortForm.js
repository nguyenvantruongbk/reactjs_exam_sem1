import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


const SortForm = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (e) => {

  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Sort By</Form.Label>
        <Form.Control as="select" onChange={handleSortChange}>
          <option value="">Select...</option>
          <option value="authorAsc">Author Ascending</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default SortForm;
