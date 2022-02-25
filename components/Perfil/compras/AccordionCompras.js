import React from 'react'
import { Accordion } from 'react-bootstrap';
import AccordionItem from './AccordionItem';


function AccordionCompras({ compras }) {

	console.log('compras', compras);

    return (
			<Accordion defaultActiveKey="0">
				{compras.length > 0 ? (
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
