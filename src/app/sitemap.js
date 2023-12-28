export default async function sitemap() {
    const routes = [`${process.env.NEXT_PUBLIC_HOST}`, `${process.env.NEXT_PUBLIC_HOST}/contact`, `${process.env.NEXT_PUBLIC_HOST}/refund`, `${process.env.NEXT_PUBLIC_HOST}/privacy`, `${process.env.NEXT_PUBLIC_HOST}/terms`, `${process.env.NEXT_PUBLIC_HOST}/pricing`]


    return routes;
}