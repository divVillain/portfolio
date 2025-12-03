import { query } from './strapi'

export function getProjectsInfo() {
    return query('projects?populate[0]=cover&populate[1]=project_categories')
    .then (res => {
        return res.data
    })
}