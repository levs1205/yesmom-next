import { data } from "../../../data/products";
  
export default (req, res) => {
  const {
    query: { id },
  } = req
  
  console.log(req.query.id);
  const product = data.find(x => x.id === id);
  res.status(200).json(product);
}