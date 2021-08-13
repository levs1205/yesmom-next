import React, { useContext } from 'react'
import { AccordionContext, useAccordionToggle } from 'react-bootstrap';

function Expand({eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  

    return (
        <>
            <span onClick={decoratedOnClick} >
                <svg className={`${isCurrentEventKey ? "active" :"no-active"}`} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7457 1.58554C17.0944 1.21273 17.0831 0.619905 16.7204 0.261432C16.3577 -0.0970417 15.781 -0.0854177 15.4323 0.287395L8.5 7.69852L1.56769 0.287395C1.21896 -0.0854177 0.642255 -0.0970417 0.27958 0.261432C-0.083095 0.619905 -0.0944029 1.21273 0.254323 1.58554C0.254323 1.58554 7.83637 9.69839 7.86588 9.72756C8.04328 9.90291 8.2719 9.9897 8.5 9.98898C8.7281 9.9897 8.95672 9.90291 9.13412 9.72756C9.16363 9.69839 16.7457 1.58554 16.7457 1.58554Z" fill="#575650"/>
                </svg>
            </span>

            <style jsx>
                {`
                    span{
                        cursor:pointer;
                        height:1rem;
                        width:1rem;
                    }
                    .active{
                        transition: all 0.3s ease-in-out;
                        transform:rotate(180deg);
                    }
                    .no-active{
                        transition: all 0.3s ease-in-out;
                        transform:rotate(0deg);
                    }
                `}
            </style>
        </>
    );
}

export default Expand
