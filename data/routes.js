export const typedRoutes = {
    private : 'PRIVATE',
    public : 'PUBLIC'
}

export const routes = [
    {
        path : '/login',
        type : typedRoutes.public
    },
    {
        path : '/registro',
        type : typedRoutes.public
    },
    {
        path : '/recuperar-password',
        type : typedRoutes.public
    },
    {
        path : '/restablecer-password',
        type : typedRoutes.public
    },
    //Perfil
    {
        path : '/perfil/miperfil',
        type : typedRoutes.private
    },
    {
        path : '/perfil/desactivar-cuenta',
        type : typedRoutes.private
    },
    {
        path : '/perfil/miscompras',
        type : typedRoutes.private
    },
    {
        path : '/perfil/password',
        type : typedRoutes.private
    },


]