import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CardProduct from "../../CardProduct";

const OtherProducts = ({ productList, category, id }) => {
	const listFiltered = productList.filter((item) => item.product._id !== id);
	
  return (
    <>
      {listFiltered.length > 0 
				? <section className="show--other-products">
					<div className="box-title-otros-productos">
						<div className="icon-title-video">
							<FontAwesomeIcon
								icon={faStar}
								className="cl-yellow heartbeat"
							></FontAwesomeIcon>
						</div>
						<div className="title-fuxia">
							Otros productos que te pueden interesar
						</div>
						<div className="icon-title-video">
							<FontAwesomeIcon
								icon={faStar}
								className="cl-yellow heartbeat"
							></FontAwesomeIcon>
						</div>
					</div>
					<div className="other-products-content">
						{listFiltered
							.map((product, i) => (
								<CardProduct {...product} size={4} />
							))}
					</div>
				</section>
				: ''
			}
      <style jsx>
        {`
          .other-products-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .show--other-products {
            margin: 2rem 0;
          }
          .box-title-otros-productos {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box-title-otros-productos .title-fuxia {
            font-size: 2rem;
            color: #556ea1;
          }
          .box-title-otros-productos > .icon-title-video:first-child {
            transform: rotate(30.86deg);
            font-size: 22px;
          }
          .box-title-otros-productos > .icon-title-video:last-child {
            transform: rotate(36.46deg);
            font-size: 22px;
          }
        `}
      </style>
    </>
  );
};

export default OtherProducts;
