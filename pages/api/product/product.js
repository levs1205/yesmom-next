import { data } from "../../../data/products";


export default (req,res) =>{
  setTimeout(()=>{
    res.status(200).json(data);
  },500)
}
