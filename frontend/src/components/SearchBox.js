//#region PACKAGE IMPORTS
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
//#endregion
//#region COMPONENT & REDUX IMPORTS

//#endregion

function SearchBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      console.log(location.pathname);
      navigate(navigate(location.pathname));
    }
  };

  return (
    <Form onSubmit={submitHandler} className="form-inherit">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="me-sm-2 me-md-3"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
