//#region PACKAGE IMPORTS
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
//#endregion

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SearchBox() {
  const navigate = useNavigate();
  const location = useLocation();

  let q = useQuery().get('keyword');
  q = q ? q : '';

  const [keyword, setKeyword] = useState(q);

  useEffect(() => {
    setKeyword(q);
  }, [q]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(navigate(location.pathname));
    }
  };

  return (
    <Form onSubmit={submitHandler} className="form-inherit">
      <Form.Control
        type="text"
        name="q"
        value={keyword}
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
