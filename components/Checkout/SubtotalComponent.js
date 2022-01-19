import React, { useContext, useEffect } from "react";
import { useMemo } from "react";
import YesmomContext from "../../context/Context";
import { getTotalPrice } from "../../helpers/getTotalPrice";

const SubtotalComponent = () => {


    const {ui: { cart = [] }, sale } = useContext(YesmomContext);

    const subtotalProducts = getTotalPrice(cart);
    const subTotal = (subtotalProducts / 1.18).toFixed(2);
    const igv = (subtotalProducts - subTotal).toFixed(2);

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
                    <strong className="ft-15">S/ { appliedDelivery ? subtotalProducts + getTotalPriceDelivery : subtotalProducts }</strong>
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
