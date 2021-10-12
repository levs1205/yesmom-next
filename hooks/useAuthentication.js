import { useEffect, useState } from 'react';


function useAuthentication() {
    const [userAuthenticated,setUserAuthenticated]=useState( null );

    useEffect(()=>{
        if(localStorage.getItem('YesmomToken')){
            setUserAuthenticated(localStorage.getItem('YesmomToken'))
        }
    },[])

    return userAuthenticated;
}

export default useAuthentication;
