export default async function sitemap() {
    const routearray = ['https://docwhisperer.me', 'https://docwhisperer.me/contact', 'https://docwhisperer.me/refund', 'https://docwhisperer.me/privacy', 'https://docwhisperer.me/terms', 'https://docwhisperer.me/pricing']

    const routes = routearray.map((prod) => ({
        url: `${prod}`,
        lastModified: new Date().toISOString(),
    }));


    return [...routes];
}