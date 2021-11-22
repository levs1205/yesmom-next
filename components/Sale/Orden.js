
import DetailProductOrden from "./DetailProductOrden"


const img = 'https://i.ibb.co/9HFgQfz/image.png';
const Orden = ( { products }) => {

    // const products = [
    //     { 
    //         id : 2,
    //         img : "https://i.ibb.co/9HFgQfz/image.png"
    //     },
    //     { 
    //         id : 3,
    //         img : "https://i.ibb.co/9HFgQfz/image.png"
    //     }
    // ]

    return (
        <>
            <div className="orden__list">
                {
                    products.map((product)=>(
                        <div key={product.id}>
                            <DetailProductOrden img={img} />
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
                 .orden__list{
                     display : flex;
                     flex-direction : column;
                 }
            `}</style>
        </>
    )
}

export default Orden
