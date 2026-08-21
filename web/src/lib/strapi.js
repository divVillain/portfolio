const { VITE_STRAPI_HOST, VITE_STRAPI_TOKEN } = import.meta.env;

export function query(url) {
    return fetch(`${VITE_STRAPI_HOST}/api/${url}`, {
        headers: {
            'Authorization': `Bearer ${VITE_STRAPI_TOKEN}`,
        }
    }) .then(res => res.json())
}