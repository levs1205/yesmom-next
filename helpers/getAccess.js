
import { routes, typedRoutes } from "../data/routes"
import { startValidateToken } from "./validateToken";


export const getAccess = async ( url , token='' ) => {
    try{

        const access = routes.filter(route => route.path.includes(url) || url === route.path )[0];
        let objReturn = {
            props : {}
        }

        console.log(token);
        switch(access?.type){
            //No tiene que estar autenticado para que pueda verlas
            case typedRoutes.public : 
                if(token || token.length > 0){
                    const { valid  } = await startValidateToken(token);
                    if(valid){
                        //Autenticado
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
        }

        console.log(objReturn);
        return objReturn;
    }catch(err){
        console.log(err);
    }
}