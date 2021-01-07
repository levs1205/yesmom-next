import React from 'react'
import { useRouter } from "next/router";

const CardBlogEspecific = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log("🚀 ~ file: [idBlog].js ~ line 7 ~ CardBlogEspecific ~ idBlog", id)
    console.log("🚀 ~ file: [idBlog].js ~ line 6 ~ CardBlogEspecific ~ router", router)

    return (
        <div>
            <p>Holaaa Perú</p>
        </div>
    )
}

export default  CardBlogEspecific
