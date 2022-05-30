import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate'

function Pagination({ totalPages, currentpage, setCurrentPage, skip, setSkip, productsPerPage }) {

	const handleObtainNextPosition = (e) => {
			setCurrentPage(e.selected + 1)
			setSkip(e.selected * productsPerPage) ;
  }


	return (
    <>
      <div className="container-pages">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handleObtainNextPosition}
          containerClassName={'pagination'}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>

      <style jsx>
 {`
          .container-pages {
            display: flex;
            align-items: center;
            place-content: center;
            font-size: 17px;
          }
        `}
      </style>
    </>
  );
}

export default Pagination;
