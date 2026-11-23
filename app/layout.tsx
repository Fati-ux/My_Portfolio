import { ContactChannels } from '@/components/contact-actions';
import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';
import { siteUrl, socialImage } from '@/lib/site';
import { Header } from '@/components/interactive';
import { profile, experience } from '@/lib/content';
export const metadata: Metadata = {metadataBase: new URL(siteUrl),title:{default:'Biruk Wonduwosen — Full Stack Software Engineer',template:'%s | Biruk Wonduwosen'},description:'Enterprise applications, ERP systems, and practical web platforms. Explore the work of Biruk Wonduwosen, a full stack software engineer in Addis Ababa, Ethiopia.',openGraph:{type:'website',title:'Biruk Wonduwosen — Full Stack Software Engineer',description:'Software that makes complex operations simpler.',images:[socialImage]},twitter:{card:'summary_large_image',title:'Biruk Wonduwosen — Full Stack Software Engineer',images:[socialImage]},icons:{icon:'/icon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip" href="#main">Skip to content</a><div className="shell"><Header/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:profile.name,url:siteUrl,jobTitle:experience[0].role,worksFor:{"@type":"Organization",name:experience[0].company},sameAs:Object.values(profile.links),address:{"@type":"PostalAddress",addressLocality:"Addis Ababa",addressCountry:"ET"}}).replace(/</g,"\\u003c")}}/>{children}<footer><Link className="brand" href="/">BW<span className="teal">.</span></Link><p>© {new Date().getFullYear()} Biruk Wonduwosen</p><span>Built with care, in Addis Ababa.</span><div className="footer-messaging"><ContactChannels/></div></footer></div></body></html>}







