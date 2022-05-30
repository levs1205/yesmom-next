import React from 'react'
import { Accordion } from 'react-bootstrap';
import AccordionItem from './AccordionItem';


function AccordionCompras({ compras }) {

    return (
			<Accordion defaultActiveKey="0">
				{compras && compras.length > 0 ? (
					compras.map((item, i) => <AccordionItem ek={i} key={i} {...item} />)
				) : (
					<p style={{ display: "flex", justifyContent: "center" }}>
						Se encontraron 0 compras
					</p>
				)}
			</Accordion>
    );
}

export default AccordionCompras
