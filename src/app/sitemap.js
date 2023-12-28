export default async function sitemap() {
    const routes = [`${process.env.KINDE_SITE_URL}`, `${process.env.KINDE_SITE_URL}/contact`, `${process.env.KINDE_SITE_URL}/refund`, `${process.env.KINDE_SITE_URL}/privacy`, `${process.env.KINDE_SITE_URL}/terms`, `${process.env.KINDE_SITE_URL}/pricing`]


    return routes;
}