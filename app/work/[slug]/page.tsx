import { pageMetadata } from '@/lib/site';
import Image from 'next/image';
import { PayrollWorkflow } from '@/components/payroll-workflow';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, profile } from '@/lib/content';
import { ProjectPreview } from '@/components/project-preview';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const project = projects.find(p => p.slug === slug);
 if (!project) notFound();
 return pageMetadata(`${project.title} | ${profile.name}`, project.summary, `/work/${project.slug}/`);
}
export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const project = projects.find(p => p.slug === slug);
 if (!project) notFound();
 return <main id="main" className="detail">
  <Link className="case-link" href="/#work">Back to selected work</Link>
  <span className="eyebrow">{project.category}</span>
  {project.organization && <p className="project-organization">{project.organization}</p>}
  <h1>{project.title}</h1><p className="lead">{project.summary}</p>
  {project.website && <a className="button project-website" href={project.website}>Visit website</a>}
  {project.pdf && <a className="button project-website" href={project.pdf}>View project PDF</a>}
  <ProjectPreview project={project}/>
  {project.gallery && <section className="project-gallery" aria-label="Project screenshots">{project.gallery.map(image => <figure className="screenshot-preview" key={image.src}><Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 640px) 90vw, 80vw"/><figcaption>{image.caption}</figcaption></figure>)}</section>}
  {project.screenshot && project.workflow && <PayrollWorkflow workflow={project.workflow}/>}
  <div className="detail-copy">
   <div><span className="eyebrow">The problem</span><h2>{project.contextTitle ?? 'Business context'}</h2><p>{project.context}</p></div>
   <div><span className="eyebrow">{project.sections ? 'Implementation' : 'My involvement'}</span><h2>{project.sections ? 'Project approach' : 'Contribution'}</h2><p>{project.contribution}</p><h3>Documented scope</h3><ul>{project.areas.map(x => <li key={x}>{x}</li>)}</ul></div>
  </div>
  {project.technologies && <section className="project-stack" aria-labelledby="stack-heading"><h2 id="stack-heading">Technology stack</h2><ul>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></section>}
  {project.sections && <div className="case-sections">{project.sections.map(section => <section key={section.title}><h2>{section.title}</h2><ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul></section>)}</div>}
  {project.evidenceNote && <p className="evidence-note">{project.evidenceNote}</p>}
  <p className="visual-note">{project.workflow ? 'Supplied project screenshots are cropped for privacy. The separately labelled representative payroll workflow is illustrative.' : project.screenshot ? 'The homepage screenshot was supplied with the project brief. Browser chrome has been cropped out; the original website branding is preserved.' : project.slug === 'biruk-wondu-portfolio' ? 'The diagram above illustrates the portfolio architecture. It is not a screenshot or a live demo.' : 'The interface above is an illustrative concept with fictional sample data. It is not a screenshot of the delivered system.'}</p>
  {project.relatedSlugs && <section className="related-work"><h2>Related work</h2>{projects.filter(p => project.relatedSlugs?.includes(p.slug)).map(p => <Link className="case-link" href={`/work/${p.slug}/`} key={p.slug}>{p.title}</Link>)}</section>}
  <div className="detail-cta"><h2>Working on a similar challenge?</h2><a className="button" href={`mailto:${profile.email}`}>Let’s talk</a></div>
  <div className="next-projects">{projects.filter(x => x.slug !== slug).map(x => <Link href={`/work/${x.slug}/`} key={x.slug}>{x.title}</Link>)}</div>
 </main>;
}



