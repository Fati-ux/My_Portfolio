import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
export const metadata = { ...pageMetadata('Page not found | Biruk Wonduwosen', 'The requested page could not be found.', '/404.html'), robots: { index: false, follow: false } };
export default function NotFound(){return <main id="main" className="detail"><span className="eyebrow">Page not found</span><h1>Let’s get you back.</h1><p className="lead">The page you’re looking for isn’t here.</p><Link className="button" href="/">Back to home</Link></main>}

