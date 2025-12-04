import { query } from './strapi'
const { VITE_STRAPI_HOST } = import.meta.env;


export function getProjectsInfo() {
    return query('projects?populate[0]=cover&populate[1]=project_categories&populate[2]=sections')
        .then(res => {
           return res.data
        })
}