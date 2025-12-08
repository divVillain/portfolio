import { query } from './strapi'
const { VITE_STRAPI_HOST } = import.meta.env;


export function getClientsInfo() {
    return query('clients?populate[0]=logo')
        .then(res => {
           return res.data
        })
}

