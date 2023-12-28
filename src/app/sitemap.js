export default async function sitemap() {
    const routearray = ['', '/contact', '/refund', '/privacy', '/terms', '/pricing']

    const routes = routearray.map((prod) => ({
        url: `${process.env.NEXT_PUBLIC_HOST}/${prod}`,
        lastModified: new Date().toISOString(),
    }));


    return [...routes];
}