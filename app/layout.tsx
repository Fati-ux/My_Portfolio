import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/interactive';
import { profile } from '@/lib/content';
export const metadata: Metadata = {title:{default:'Biruk Wondu — Full Stack Software Engineer',template:'%s | Biruk Wondu'},description:'Enterprise applications, ERP systems, and practical web platforms. Explore the work of Biruk Wondu, a full stack software engineer in Addis Ababa, Ethiopia.',openGraph:{type:'website',title:'Biruk Wondu — Full Stack Software Engineer',description:'Software that makes complex operations simpler.',images:[{url:'/social.png',width:1200,height:630}]},twitter:{card:'summary_large_image',title:'Biruk Wondu — Full Stack Software Engineer',images:['/social.png']},icons:{icon:'/icon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><div className="shell"><Header/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:profile.name,jobTitle:profile.role,sameAs:Object.values(profile.links),address:{"@type":"PostalAddress",addressLocality:"Addis Ababa",addressCountry:"ET"}}).replace(/</g,"\\u003c")}}/>{children}<footer><Link className="brand" href="/">BW<span className="teal">.</span></Link><p>© {new Date().getFullYear()} Biruk Wondu</p><span>Built with care, in Addis Ababa.</span></footer></div></body></html>}



