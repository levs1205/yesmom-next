
import React from 'react'

const LoginInput = ({ name }) => {
    return(
        <label>
            <input
                type={name}
                placeholder={name}
                name={name}
            />
        </label>
    )
}

export default LoginInput;