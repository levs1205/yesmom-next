
import { routes, typedRoutes } from "../data/routes"
import { startValidateToken } from "./validateToken";


export const getAccess = async ( url , token='' ) => {
    try{

        const access = routes.filter(route => url.includes(route.path) || url === route.path )[0];
        let objReturn = {
            props : {}
        }

        console.log(access);
        switch(access?.type){
            //No tiene que estar autenticado para que pueda verlas
            case typedRoutes.public : 
                if(token || token.length > 0){
                    //Evaluar si es valido
                    const { valid  } = await startValidateToken(token);
                    if(valid){
                        //Autenticado
                        console.log('Autenticado');
                        objReturn = {
                            redirect: {
                                permanent: false,
                                destination: "/perfil/miperfil",
                            },
                            ...objReturn,
                        }
                    }
                }
                return objReturn;

            case typedRoutes.private :
                if(!token){
                    objReturn = {
                        redirect: {
                            permanent: false,
                            destination: "/login",
                        },
                        ...objReturn,
                    }
                }else{
                    const { valid  } = await startValidateToken(token);
                    if(!valid){
                        objReturn = {
                            redirect: {
                                permanent: false,
                                destination: "/login",
                            },
                            ...objReturn,
                        }
                    }
                }

                return objReturn;
        }
        return objReturn;
    }catch(err){
        console.log(err);
    }
}