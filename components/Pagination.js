import React from "react";

function Pagination({ totalPages, currentpage, setCurrentPage, skip, setSkip, productsPerPage }) {

	const handleObtainPagination = (position) => {
		setCurrentPage(position)
		setSkip((position - 1) * productsPerPage)
	}		
	const handleObtainNextPosition = () => {
		if(currentpage < totalPages){
			setCurrentPage(currentpage + 1)
			setSkip(currentpage * productsPerPage)
		}
	}		

  return (
    <>
      <div className="container-pages">
        {[...Array(totalPages)].map((_, i) => (
          <div
            className={`page ${currentpage === i + 1 ? "page-selected" : ""}`}
            /* onClick={() => setCurrentPage(i + 1)} */
						onClick={() => handleObtainPagination(i + 1)}
          >
            {i + 1}
          </div>
        ))}
        <div className="next-page" onClick= { handleObtainNextPosition }>
          <svg
            width="15"
            height="15"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.98431 10.0157C9.98496 10.3489 9.86892 10.6718 9.65632 10.9284L2.52594 19.4848C2.28388 19.7761 1.93604 19.9592 1.55895 19.994C1.18186 20.0287 0.806401 19.9123 0.515172 19.6702C0.223944 19.4282 0.0408018 19.0803 0.00603441 18.7032C-0.0287329 18.3261 0.0877224 17.9507 0.329782 17.6595L6.7186 10.0157L0.557955 2.37192C0.439497 2.22605 0.351035 2.05821 0.297654 1.87804C0.244274 1.69787 0.227027 1.50893 0.246905 1.32207C0.266784 1.13521 0.323394 0.954128 0.413485 0.789221C0.503576 0.624315 0.62537 0.478838 0.771866 0.361155C0.918497 0.230555 1.09052 0.131643 1.27715 0.0706176C1.46379 0.00959199 1.66102 -0.01223 1.85648 0.00651161C2.05194 0.0252551 2.24143 0.0841617 2.41307 0.179541C2.5847 0.274921 2.73479 0.404722 2.85394 0.560806L9.74188 9.11726C9.92088 9.3812 10.0062 9.69753 9.98431 10.0157Z"
              fill="#556EA1"
            />
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .container-pages {
            display: flex;
            align-items: center;
          }
          .page,
          .next-page {
            cursor: pointer;
            font-family: "mont-regular";
            font-size: 1.8rem;
            color: #556ea1;
            padding: 0.8rem 1.8rem;
          }
          .page:hover {
            color: #ffffff;
            background: #dc6a8d;
            border-radius: 50%;
          }
          .page-selected {
            color: #ffffff;
            background: #dc6a8d;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
}

export default Pagination;
