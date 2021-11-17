import CardProduct from "../../CardProduct";

const OtherProducts = ({ productList }) => {

	return (
		<>
			<div className="other-products-content">
				{productList.map((product, i) => (
					<CardProduct {...product} size={4} />
				))}
			</div>
			<style jsx>
				{`
					.other-products-content {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
					}
				`}
			</style>
		</>
	);
};

export default OtherProducts;
