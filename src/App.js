import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Route, Routes } from 'react-router-dom';


import SearchForm from './component/common/Search';
import BookList from './component/common/Booklist';
import AddBookForm from './component/common/AddBookForm';
import SortForm from './component/common/SortForm';


function App() {
  return (
  <>
  <Container>
    <SearchForm/>
    <BookList/>
    <SortForm/>
    <AddBookForm/>      
  </Container>

  </>
  );
}

export default App;
