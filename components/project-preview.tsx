import { PayrollWorkflow } from './payroll-workflow';
import Image from 'next/image';
import type { Project } from '@/lib/content';
export function ProjectPreview({ project }: { project: Project }) {

 if (project.screenshot) return <figure className="screenshot-preview"><Image src={project.screenshot.src} width={project.screenshot.width} height={project.screenshot.height} alt={project.screenshot.alt} sizes="(max-width: 640px) 90vw, 80vw"/><figcaption>{project.screenshot.caption ?? 'Project screenshot · supplied homepage capture'}</figcaption></figure>;
 if (project.workflow) return <PayrollWorkflow workflow={project.workflow}/>;
 if (project.slug === 'biruk-wondu-portfolio') return <div className="architecture-preview" role="img" aria-label="Illustrative portfolio architecture: typed content and reusable components feed static project pages and a static export"><span className="eyebrow">Biruk Wonduwosen / Portfolio</span><strong>Content to code.<br/>Code to a static site.</strong><div className="architecture-flow"><span>Typed content</span><span>Reusable components</span><span>Static pages</span></div><small>Illustrative architecture · not a screenshot</small></div>;
 return <div className={`preview ${project.accent}`} role="img" aria-label={`Illustrative ${project.preview} interface with fictional sample data, not an actual project screenshot`}><div className="mock-app"><aside className="mock-sidebar"><b>BW / workspace</b><span className="mock-active">Overview</span><span>Records</span><span>Activity</span><span>Reports</span><span className="mock-bottom">Sample workspace</span></aside><div className="mock-main"><div className="mock-top">Workspace <span>Demo account ◯</span></div><h3>{project.preview}</h3><p className="mock-sub">An overview of your workspace</p><div className="mock-stats"><div><span>Sample records</span><strong>128</strong></div><div><span>In review</span><strong>24</strong></div><div><span>Completed</span><strong>104</strong></div></div><div className="mock-table"><b>Recent records <span>View all</span></b><div className="mock-row muted"><span>Record</span><span>Category</span><span>Status</span></div>{['Example A','Example B','Example C'].map((x,i)=><div className="mock-row" key={x}><span>{x}</span><span>Sample {i+1}</span><span className="pill">{i===1?'In review':'Complete'}</span></div>)}</div></div></div><span className="preview-label">Illustrative interface · fictional sample data</span></div>;
}




