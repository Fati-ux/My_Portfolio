'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { profile } from '@/lib/content';
export function Header() {
 const [open,setOpen] = useState(false); const toggle = useRef<HTMLButtonElement>(null);
 return <header className="header"><Link className="brand" href="/" aria-label="Biruk Wonduwosen home"><span className="monogram">BW<span>.</span></span><span className="brand-name">Biruk Wonduwosen</span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close menu':'Menu'}</button><nav id="navigation" className={open?'navigation open':'navigation'} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}}}>{['Work','About','Experience','Contact'].map(x=><Link key={x} href={`/#${x.toLowerCase()}`} onClick={()=>setOpen(false)}>{x}</Link>)}<a className="button small" href={profile.links.Upwork}>Hire me on Upwork</a></nav></header>;
}
export function CopyEmail() {
 const [message,setMessage]=useState('');
 async function copy(){try{await navigator.clipboard.writeText(profile.email);setMessage('Email copied.')}catch{setMessage(`Copy this address: ${profile.email}`)}}
 return <div className="copy"><button onClick={copy}>Copy email</button><span role="status">{message}</span></div>;
}


