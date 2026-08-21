import { query } from './strapi'
const { VITE_STRAPI_HOST } = import.meta.env;


export function getCarouselInfo() {
    return query('hero-carousel?populate[0]=carousel.paint.image&populate[1]=carousel.design.image&populate[2]=carousel.code.image')
        .then(res => {
           return res.data
        })
}

