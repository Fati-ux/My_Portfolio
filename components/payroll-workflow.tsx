import type { Project } from '@/lib/content';
export function PayrollWorkflow({ workflow }: { workflow: NonNullable<Project['workflow']> }) {
 return <figure className="payroll-workflow"><figcaption>{workflow.label}</figcaption><ol>{workflow.steps.map((step, index) => <li key={step}><span>{step}</span>{index < workflow.steps.length - 1 && <span className="workflow-arrow" aria-hidden="true">→</span>}</li>)}</ol><p>Illustrative process · not a deployed-system screenshot</p></figure>;
}
