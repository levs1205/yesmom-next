import React from 'react';
import { useRouter } from 'next/router';

const PaymentResult = () => {

    const { query } = useRouter();
    
    console.log(query);
    return (
        <div>
            PaymentResult
        </div>
    )
}

export default PaymentResult
