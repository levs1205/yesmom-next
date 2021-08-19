import React from 'react'
import { Accordion } from 'react-bootstrap';
import AccordionItem from './AccordionItem';


function AccordionCompras() {

    const compras = [
        { ek:0 , name:"Manta polar semi..." , date: "17/10/2020", body:"Hello! I'm the body" , shipStep : 2},
        { ek:1 , name:"Cuna para bebé mar..." , date: "28/10/2020", body:"Hello! I'm the body" , shipStep : 4},
        { ek:2 , name:"Manta polar semi..." , date: "17/10/2020", body:"Hello! I'm the body" , shipStep : 3},
        { ek:3 , name:"Manta polar semi..." , date: "17/10/2020", body:"Hello! I'm the body" , shipStep : 1},
    ]
    return (
        
            <Accordion defaultActiveKey="0">
                {compras.map((item ,i)=>(
                    <AccordionItem key={i} {...item} /> 
                ))}
            </Accordion>
    )
}

export default AccordionCompras
