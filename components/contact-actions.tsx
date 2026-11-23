import { profile } from '@/lib/content';
function MessagingIcon({ kind }: { kind: 'whatsapp' | 'telegram' }) {
 return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{kind === 'whatsapp' ? <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.5-4.8A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8 7.5c.2 3.8 2.8 6.4 6.5 7l1.4-1.7-2.4-1.3-1 1c-1.5-.6-2.4-1.5-3-3l1-1L9.3 6Z"/></> : <><path d="m3 10 18-7-5 18-5-7-8-4Z"/><path d="m11 14 10-11"/></>}</svg>;
}
export function ContactChannels() {
 return <div className="contact-channels"><a className="channel-link" href={profile.whatsapp}><MessagingIcon kind="whatsapp"/><span><strong>Chat on WhatsApp</strong><small>{profile.phone}</small></span></a><a className="channel-link" href={profile.telegram.url}><MessagingIcon kind="telegram"/><span><strong>Message on Telegram</strong><small>{profile.telegram.username}</small></span></a></div>;
}
export function HiringOptions() {
 return <div className="hiring-options" aria-label="Hiring profiles"><a className="button" href={profile.links.Upwork}>Hire me on Upwork</a><a className="button" href={profile.links.LinkedIn}>Hire me on LinkedIn</a></div>;
}
export function ResumeDownload() {
 return <a className="button secondary resume-download" href={profile.resume.url} download={profile.resume.filename}>Download Resume</a>;
}
