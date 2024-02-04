import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    aprVersion: '2024-17-01',
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);