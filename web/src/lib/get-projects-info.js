import { query } from './strapi'
const { VITE_STRAPI_HOST } = import.meta.env;


export function getProjectsInfo() {
    return query('projects?populate[0]=cover&populate[1]=project_categories&populate[3]=sections.images&populate[4]=sections.videos')
        .then(res => {
           return res.data
        })
}

export function getSingleProjectInfo(slug) {
    return query(`projects?filters[slug][$eq]=${slug}&populate[0]=cover&populate[1]=project_categories&populate[3]=sections.images&populate[4]=sections.videos`)
        .then(res => {
           return res.data
        })
}