import React from 'react';
import { useRouter } from 'next/router';

const index = () => {

    const { query } = useRouter();
    
    console.log(query);
    return (
        <div>
            Redirection
        </div>
    )
}

export default index
