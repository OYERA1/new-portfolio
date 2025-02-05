import type { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    return [
        {
            url: `${BASE_URL}/`
        },
        {
            url: `${BASE_URL}/about`
        },
        {
            url: `${BASE_URL}/work`
        },
        {
            url: `${BASE_URL}/contact`
        }
    ]
}
