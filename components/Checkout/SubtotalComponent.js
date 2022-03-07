import React, { useContext, useMemo } from "react";
import YesmomContext from "../../context/Context";
import { getTotalPrice } from "../../helpers/getTotalPrice"
import moment from 'moment'

const SubtotalComponent = () => {


    const {ui: { cart = [] }, sale } = useContext(YesmomContext);

   
    const appliedDelivery = useMemo(() => {
        return sale && sale.delivery
    },[sale])


    const getTotalPriceDelivery = useMemo(() => {
        if(cart && sale && sale.delivery){
            let sum=0;
            sale.delivery.forEach((val , i) => {
                sum = sum+val.total;
            })

            return sum;
        }else{
            return 0;
        }
    },[sale,cart])


    const haveDiscountProduct = ( product ) => {
        if(product.precioPromocional > 0) return true;
        if( !product || !product.fechaInicioPromocion || !product.fechaFinPromocion) return false;
    
        const init_promo = moment(product.fechaInicioPromocion);
        const end_promo = moment(product.fechaFinPromocion);
        const now = moment(new Date());
    
        if(end_promo.isAfter(init_promo) && end_promo.isAfter(now)){
          return true;
        }else{
          return false;
        }
      }

    const makeTotalPrice = useMemo(( ) => {
        let acum = 0;
        if(cart.length >0 ){
          cart.map((product)=> {
            if(haveDiscountProduct(product)) {
              acum = acum + product.precioPromocional * product.quantity;
            } else {
              acum = acum + product.precio * product.quantity;
            }
          })
          acum = acum+ getTotalPriceDelivery;
        }else{
            return 0;
        }
    
        return acum;
      },[cart])

      const subtotalProducts = makeTotalPrice;
      const subTotal = (makeTotalPrice / 1.18).toFixed(2);
      const igv = (subtotalProducts - subTotal).toFixed(2);

    return (
        <>
            <section className="price-table">
            <table className=" price-table__table">
                <tbody className="price-table__tbody">
                <tr className="price-table__tbody--fount-padding ">
                    <td className="price-table__tbody--text-align-left">Productos</td>
                    <td className="price-table__tbody--text-align-right">{subTotal}</td>
                </tr>
                <tr className="price-table__tbody--fount-padding">
                    <td className="price-table__tbody--text-align-left">IGV</td>
                    <td className="price-table__tbody--text-align-right">S/ {igv}</td>
                </tr>
                {
                    appliedDelivery &&
                        <tr className="price-table__tbody--fount-padding">
                            <td className="price-table__tbody--text-align-left">Envío</td>
                            <td className="price-table__tbody--text-align-right">S/ {getTotalPriceDelivery}</td>
                        </tr>
                }
                <tr className="price-table__tbody--fount-bold-padding price-table__tbody--border-top">
                    <td className="price-table__tbody--text-align-left">
                    <strong className="ft-15">{appliedDelivery ? 'Total' : 'Subtotal'}</strong>
                    </td>
                    <td className="price-table__tbody--text-align-right">
                    <strong className="ft-15">S/ { appliedDelivery ? makeTotalPrice + getTotalPriceDelivery : makeTotalPrice }</strong>
                    </td>
                </tr>
                </tbody>
            </table>
            </section>

            <style jsx>
                {`
                .price-table {
                    padding: 2rem 0rem;
                }
                .price-table__tbody--fount-padding {
                    font-family: "mont-regular";
                    height: 4rem;
                    font-size: 1.3rem;
                }
                .price-table__tbody--text-align-left {
                    font-size: 1.4rem;
                    text-align: left;
                }
                .price-table__tbody--text-align-right {
                    font-size: 1.3rem;
                    text-align: right;
                }
                .price-table__tbody--fount-bold-padding {
                    font-family: "mont-semibold";
                    height: 4rem;
                }
                .price-table__tbody--border-top {
                    border-top: 1px solid #dadada;
                }
                .price-table__table {
                    width: 100%;
                }
                
                `}
            </style>
        </>
    );
};

export default SubtotalComponent;
