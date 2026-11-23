import type { Metadata } from 'next';
export const siteUrl = 'https://biruk.ethioerp.com';
export const socialImage = { url: `${siteUrl}/social.png`, width: 1200, height: 630, alt: 'Biruk Wonduwosen — Full Stack Software Engineer' };
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
 const url = new URL(pathname, siteUrl).href;
 return {
  title: { absolute: title }, description, alternates: { canonical: url },
  openGraph: { type: 'website', siteName: 'Biruk Wonduwosen Portfolio', title, description, url, images: [socialImage] },
  twitter: { card: 'summary_large_image', title, description, images: [socialImage] },
 };
}
