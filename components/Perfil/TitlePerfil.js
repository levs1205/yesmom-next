import React from 'react'

function TitlePerfil({ name, email, main}) {
    return (
        <>
            <div className={`container-title ${main ? "center" : ""}`}>
                <div className="image-title">
                    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.5105 40.8604V42.2647C29.5105 42.7035 29.8616 43.1424 30.3882 43.1424C30.827 43.1424 31.2659 42.7913 31.2659 42.2647V40.8604C31.2659 40.4215 30.9148 39.9827 30.3882 39.9827C29.8616 39.9827 29.5105 40.3337 29.5105 40.8604Z" fill="#DC6A8D"/>
                        <path d="M44.6074 40.8604V42.2647C44.6074 42.7035 44.9585 43.1424 45.4851 43.1424C45.924 43.1424 46.3628 42.7913 46.3628 42.2647V40.8604C46.3628 40.4215 46.0117 39.9827 45.4851 39.9827C44.9585 39.9827 44.6074 40.3337 44.6074 40.8604Z" fill="#DC6A8D"/>
                        <path d="M21.7868 45.2488C23.9811 52.1826 30.4761 57.01 37.8487 57.01C45.2214 57.01 51.7164 52.1826 53.8228 45.2488C55.0516 45.161 56.2804 44.5467 57.1581 43.5812C58.1236 42.5279 58.5624 41.0359 58.3869 39.6315C58.1236 37.2618 56.2804 35.4186 53.9106 35.1553H53.8228C53.1207 32.961 51.9797 30.8546 50.3998 29.0992C50.1365 28.7481 49.6099 28.7481 49.2588 29.0114C48.9077 29.2747 48.9077 29.8013 49.171 30.1524C50.4876 31.6445 51.4531 33.3999 52.1552 35.243C51.3653 35.4186 50.6631 35.8574 50.0487 36.3841C49.6977 36.7351 49.6977 37.2618 49.961 37.5251C50.1365 37.7006 50.3121 37.7884 50.5754 37.7884C50.7509 37.7884 51.0142 37.7006 51.102 37.6128C51.7164 37.0862 52.4185 36.7351 53.2085 36.7351C53.384 36.7351 53.5595 36.7351 53.7351 36.7351C55.3149 36.9107 56.5437 38.1395 56.7193 39.7193C56.807 40.6848 56.5437 41.6502 55.8416 42.3524C55.2272 43.0546 54.2617 43.4934 53.2962 43.4934C52.8574 43.4056 52.5063 43.669 52.3308 44.1078C50.5754 50.6905 44.5192 55.2546 37.761 55.2546C31.0027 55.2546 24.9466 50.6905 23.1912 44.1078C23.1034 43.669 22.6645 43.4934 22.3135 43.4934H22.2257C21.2602 43.4934 20.2948 43.0546 19.6804 42.3524C19.066 41.6502 18.7149 40.6848 18.8027 39.7193C18.9782 38.1395 20.207 36.9107 21.7868 36.7351C21.9624 36.7351 22.1379 36.7351 22.3135 36.7351C23.1034 36.7351 23.8933 37.0862 24.4199 37.6128C24.6833 37.7884 24.8588 37.8761 25.1221 37.8761C25.3854 37.8761 25.5609 37.7884 25.7365 37.6128C26.0876 37.2618 25.9998 36.7351 25.6487 36.4718C25.0343 35.9452 24.3322 35.5064 23.5422 35.3308C24.5077 32.5222 26.3509 29.9769 28.7207 28.2215L28.8084 28.3092C29.8617 29.1869 31.0905 29.7135 32.4948 29.7135C34.1624 29.7135 35.7423 28.9236 36.7955 27.6948C37.1466 27.7826 37.4977 27.8704 37.8487 27.8704C38.1998 27.8704 38.5509 27.7826 38.902 27.6948C39.4286 28.3092 40.043 28.8358 40.8329 29.1869C41.4473 30.0646 41.7984 31.2056 41.7984 32.7855C41.7984 34.892 40.043 36.6474 37.9365 36.6474C36.5322 36.6474 35.0401 35.7697 35.0401 34.0143C35.0401 32.7855 36.0056 31.82 37.2343 31.82C38.112 31.82 38.5509 32.2589 38.5509 33.1366C38.5509 33.5754 38.902 34.0143 39.4286 34.0143C39.8674 34.0143 40.3063 33.6632 40.3063 33.1366C40.3063 31.3812 39.0775 30.1524 37.3221 30.1524C35.2156 30.1524 33.4602 31.9078 33.4602 34.0143C33.4602 36.4718 35.3912 38.315 38.0243 38.315C41.0962 38.315 43.5538 35.8574 43.5538 32.7855C43.5538 31.5567 43.3782 30.5912 43.1149 29.7135C43.2027 29.7135 43.2905 29.7135 43.3782 29.7135C46.4502 29.7135 48.9077 27.256 48.9077 24.184C48.9077 21.1121 46.4502 18.6545 43.3782 18.6545C41.7106 18.6545 40.1308 19.4445 39.0775 20.6733C38.3754 20.4977 37.5854 20.4977 36.8833 20.6733C35.83 19.3567 34.2502 18.6545 32.5825 18.6545C29.5106 18.6545 27.053 21.1121 27.053 24.184C27.053 25.1495 27.3163 26.0272 27.7552 26.9049C24.9466 29.0114 22.9279 31.9078 21.8746 35.243H21.7868C19.4171 35.5064 17.5739 37.3495 17.3106 39.7193C17.135 41.1236 17.5739 42.6157 18.5394 43.669C19.3293 44.5467 20.5581 45.161 21.7868 45.2488ZM43.2027 20.3222C45.3092 20.3222 47.0646 22.0776 47.0646 24.184C47.0646 26.2905 45.3092 28.0459 43.2027 28.0459C42.6761 28.0459 42.1495 27.9581 41.7106 27.7826C41.184 27.6071 40.7451 27.256 40.3941 26.8171C41.0962 26.115 41.5351 25.2373 41.5351 24.184C41.5351 23.2186 41.0962 22.2531 40.3941 21.5509C41.0962 20.761 42.0617 20.3222 43.2027 20.3222ZM38.8142 22.4286C39.4286 22.7797 39.8674 23.4819 39.8674 24.184C39.8674 24.8862 39.5164 25.5884 38.8142 25.9394H38.7264C38.112 26.2028 37.4099 26.2028 36.8833 25.8517C36.2689 25.5006 35.83 24.7984 35.83 24.0963C35.83 23.3941 36.1811 22.692 36.8833 22.3409C37.4099 22.0776 38.1998 22.0776 38.8142 22.4286ZM32.407 20.3222C33.4602 20.3222 34.5135 20.761 35.2156 21.5509C34.5135 22.2531 34.0746 23.1308 34.0746 24.184C34.0746 25.1495 34.5135 26.115 35.2156 26.8171C34.5135 27.6071 33.4602 28.0459 32.407 28.0459C31.4415 28.0459 30.5638 27.6948 29.8617 27.0804C29.6861 26.9927 29.5984 26.8171 29.4228 26.6416C28.8962 25.9394 28.5451 25.1495 28.5451 24.2718C28.6329 21.9898 30.3005 20.3222 32.407 20.3222Z" fill="#DC6A8D"/>
                        <path d="M41.2717 46.5654C40.4818 47.7064 39.253 48.4086 37.8487 48.4086C36.4444 48.4086 35.2156 47.7064 34.4257 46.5654C34.1624 46.2144 33.6358 46.1266 33.2847 46.3021C32.9336 46.5654 32.8458 47.0921 33.0214 47.4431C34.0746 49.023 35.9178 49.9885 37.8487 49.9885C39.7796 49.9885 41.535 49.023 42.676 47.4431C42.9394 47.0921 42.8516 46.5654 42.4127 46.3021C41.9739 46.1266 41.535 46.2144 41.2717 46.5654Z" fill="#DC6A8D"/>
                        <circle cx="38" cy="38" r="37" stroke="#DC6A8D" strokeWidth="2" strokeDasharray="10 10"/>
                    </svg>    
                </div>
                <div className="contenedor-data">
                    <p className="p-primary ft-m-600">{`¡Hola ${name ? name : ''}!`}</p>
                    <p className="p-secondary ft-m-regular">{`${email ? email : ''}`}</p>
                </div>
            </div>

            <style jsx>
                {`  
                    /**GLOBALS */
                    p{
                        margin:0;
                    }
                    hr{
                        margin-left:-2rem;
                        margin-right:-2rem;
                    }
                    .ft-m-heavy{
                        font-family:"mont-heavy"!important;
                        font-weight:800;
                    }
                    .ft-m-600{
                        font-family:"mont-semibold"!important;
                        font-weight:600;
                    }
                    .ft-m-regular{
                        font-family:"mont-regular"!important;
                    }
                    .ft-m-light{
                        font-family:"mont-light"!important;
                    }
                    
                    .container-title{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                    }
                    .image-title{
                        margin-bottom:1rem;
                    }
                    .p-primary{
                        font-size:2rem;
                        color: #DC6A8D;
                    }
                    .p-secondary{
                        font-size:1.5rem;
                        color: #DC6A8D;
                    }
                    .contenedor-data{
                        text-align:center;
                    }

                    @media (min-width:768px){
                        .center{
                            justify-content:center;
                        }
                        .container-title{
                            margin-top:0.5rem;
                            display:flex;
                            flex-direction:row;
                        
                        }
                        .contenedor-data{
                            margin-left:1rem;
                        }
                        .p-primary{
                            font-family:"mont-heavy"!important;
                        }
                        .p-secondary{
                            font-size:1.3rem;
                        }
                    }
                    @media (min-width:1024px){
                        .container-title{
                            margin-top:3rem;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default TitlePerfil
