//#region PACKAGE IMPORTS
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
//#endregion

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
  const navigate = useNavigate();
  if (keyword) {
    keyword = keyword.split('?keyword=')[1].split('&')[0];
  }

  const handlePageChange = (keyword, pageNum) => {
    navigate({
      pathname: '/',
      search: `/?keyword=${keyword}&page=${pageNum + 1}`,
    });
  };

  return (
    pages > 1 && (
      // FIXME: Need to fix the "to=" that causes "Cannot include a '?' character in a manually specified `to.pathname`..."
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={`/?keyword=${keyword}&page=${x + 1}`}
            onClick={handlePageChange(keyword, x)}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
