import type { Project } from './project-types';
export type { Project } from './project-types';
export const profile = {
 name: 'Biruk Wonduwosen', role: 'Full Stack Software Engineer', location: 'Addis Ababa, Ethiopia', email: 'bwondu1@gmail.com',
 phone: '+251 93 848 7879', whatsapp: 'https://wa.me/251938487879',
 telegram: { username: '@birukwn', url: 'https://t.me/birukwn' },
 resume: { url: '/documents/Biruk_Wonduwosen_Resume.pdf', filename: 'Biruk_Wonduwosen_Resume.pdf' },
 links: { GitHub: 'https://github.com/fati-ux', LinkedIn: 'https://www.linkedin.com/in/biruk-wondu-2a15381b0/', Upwork: 'https://www.upwork.com/freelancers/~0113bd3b53207aa945?viewMode=1' },
 currentRoleSummary: 'I work as Chief Software Developer at Federal Housing Corporation, contributing to enterprise software, ERP development, the One-Stop Service Center, and property management systems.',
 intro: 'I’m Biruk Wonduwosen, a full stack software engineer focused on enterprise applications, ERP systems, and web platforms. I turn business requirements into practical software that teams can use every day.'
};
export const experience: { role: string; company: string; start: string; end: string | null; description: string }[] = [
 { role: 'Chief Software Developer', company: 'Federal Housing Corporation', start: 'May 2022', end: 'Present', description: 'Develop enterprise software and contribute to the Federal Housing Corporation ERP platform, including the One-Stop Service Center and property management systems. Translate business requirements into practical software for operational workflows.' },
 { role: 'Full Stack Developer', company: 'Xoka IT Solution PLC', start: 'May 2021', end: 'May 2022', description: 'Developed business applications and contributed to enterprise software for operational workflows.' }
];
export const projects: Project[] = [
 {
  slug: 'my-clean-cook', title: 'My Clean & Cook', category: 'Service Booking Marketplace',
  summary: 'A cleaning and cooking marketplace connecting customers with service workers through online bookings, worker onboarding, availability management, and an admin assignment workflow.',
  context: 'Bring customer bookings, worker applications, scheduling, and service assignment into one platform.',
  contribution: 'The project connects a React frontend to an ASP.NET Core API, with separate customer, worker, and administrator workflows. Relational data modelling supports the booking and assignment process.',
  accent: 'clean-cook', preview: 'My Clean & Cook homepage',
  areas: ['Customer booking workflows', 'Worker onboarding and availability', 'Administrative review and rules-based matching'],
  website: 'https://mycleancook.co.uk/',
  screenshot: { src: '/projects/my-clean-cook-homepage.png', width: 1243, height: 1266, alt: 'My Clean & Cook homepage with Kenitix Clean & Cook navigation, the “Care at Your Doorstep” headline, Doorstep Home Care branding, and pricing and booking actions.' },
  technologies: ['React 18', 'React Router v6', 'Axios', 'C#', 'ASP.NET Core 5 Web API', 'Entity Framework Core 5', 'Microsoft SQL Server', 'JWT authentication for administrators', 'PayPal REST API (sandbox)', 'Windows Server', 'IIS', 'Plesk'],
  evidenceNote: 'Functionality is described from the supplied project brief. Not every feature has been independently tested on the public website. Payment functionality is a PayPal sandbox checkout integration; live payment capture is not verified.',
  sections: [
   { title: 'Customer booking', items: ['Browse cleaning, cooking, and combined service packages.', 'Request a service with contact details, address, postcode, date, and time.', 'Follow a PayPal sandbox checkout workflow, with payment success and failure pages.'] },
   { title: 'Worker onboarding and availability', items: ['Apply with a profile photo and supporting documents.', 'Set available days and time ranges, and toggle online or offline availability.', 'View submitted documents through the worker dashboard.'] },
   { title: 'Administration and assignment', items: ['A JWT-protected admin portal for reviewing bookings and payment records.', 'Review, approve, reject, or suspend worker applications.', 'Manage booking statuses and worker assignments.', 'Rules-based matching filters eligible workers by approval status, online availability, postcode area, and service type.'] },
   { title: 'Engineering approach', items: ['React frontend connected to an ASP.NET Core API.', 'Relational data modelling with Entity Framework Core and SQL Server.', 'Backend-managed PayPal sandbox checkout integration.', 'Separate customer, worker, and admin workflows.', 'Deployment combines the compiled frontend and API on Windows Server with IIS and Plesk.'] }
  ]
 },
 {
  slug: 'fhc-hr-payroll', title: 'FHC HR and Payroll Implementation', category: 'Enterprise HR and Payroll',
  organization: 'Federal Housing Corporation, Ethiopia',
  summary: 'HR and payroll implementation using Frappe HR and ERPNext, covering employee management, attendance, leave, payroll configuration, permissions, and approval workflows.',
  contextTitle: 'Overview',
  context: 'One of my projects at Federal Housing Corporation, Ethiopia, where I work as Chief Software Developer (May 2022–Present). The scope is configuring and tailoring HR and payroll processes within the Frappe ecosystem.',
  contribution: 'Implementation and customization using Frappe HR and ERPNext: HR setup, payroll configuration, access rules, approval workflows, troubleshooting, and operational handover. This work builds on the existing platforms rather than developing Frappe or ERPNext itself.',
  accent: 'payroll', preview: 'FHC payroll workspace',
  screenshot: { src: '/projects/fhc-payroll-workspace.webp', width: 1026, height: 1001, alt: 'FHC payroll workspace with quick links, payroll settings, and reports.', caption: 'Project screenshot · payroll workspace · cropped for privacy' },
  gallery: [{ src: '/projects/fhc-payroll-processing.webp', width: 820, height: 445, alt: 'FHC payroll processing interface showing setup validation, payroll entry, employee retrieval, salary slip creation, and submission steps, beside quick actions and empty preview panels.', caption: 'Project screenshot · payroll processing workflow · cropped for privacy' }],
  areas: ['HR and employee lifecycle configuration', 'Payroll processing and exception review', 'Permissions, workflows, and technical delivery'],
  technologies: ['Frappe Framework', 'ERPNext', 'Frappe HR / HRMS', 'Python', 'JavaScript', 'MariaDB', 'Linux', 'Bench CLI', 'Git'],
  pdf: '/documents/fhc-hr-payroll-implementation.pdf',
  relatedSlugs: ['federal-housing-erp'],
  workflow: { label: 'Representative payroll workflow', steps: ['Employee profile', 'Salary structure assignment', 'Payroll entry', 'Salary slips', 'Validation and review'] },
  evidenceNote: 'This case study combines a capability summary with supplied project screenshots. Screenshots are cropped to omit internal URLs, identifiers, payroll figures, dates, and account configuration. The representative diagram and PDF illustrations are not deployed-system screenshots. This HR and payroll implementation is distinct from the broader FHC ERP project.',
  sections: [
   { title: 'Employee management', items: ['Employee profiles and organizational structures, including departments and designations.', 'Employee-to-user relationships and attendance synchronization.', 'Leave requests and approval routing.', 'Employee self-service, internal loan requests, and performance evaluation workflows.'] },
   { title: 'Payroll', items: ['Salary components, salary structures, employee payroll profiles, and structure assignments.', 'Payroll entries and salary slip generation.', 'Troubleshooting payroll processing errors and reviewing exceptions.', 'Employee-to-payroll mappings and permission-controlled corrections.'] },
   { title: 'Permissions and workflows', items: ['Role profiles and module access.', 'Employee and manager permissions.', 'Approval states, actions, and authorization rules.', 'Custom scripts, reports, and notifications.'] },
   { title: 'Technical delivery', items: ['Installation and configuration using Bench.', 'Customization, troubleshooting, and migration support.', 'HR scenario testing and exception handling.', 'Administration documentation and operational handover.'] }
  ]
 },
 {slug:'federal-housing-erp',title:'Federal Housing Corporation ERP',category:'Enterprise resource planning',summary:'Bringing business operations and property management into an enterprise platform.',context:'An enterprise resource planning platform for Federal Housing Corporation, supporting business operations and property management.',contribution:'Contributed to ERP development, including a One-Stop Service Center and property management functionality.',accent:'housing',preview:'Property overview',areas:['ERP development','One-Stop Service Center','Property management'],relatedSlugs:['fhc-hr-payroll']},
 {slug:'oromia-mineral-management',title:'Oromia Mineral Management System',category:'Public-sector software',summary:'Software supporting the processes behind mineral management.',context:'A software platform supporting mineral management processes in Oromia.',contribution:'Led development and collaborated with cross-functional teams to deliver the system.',accent:'mineral',preview:'Mineral management',areas:['Development leadership','Cross-functional collaboration']},
 {slug:'land-development-management',title:'Land Development and Management System',category:'Enterprise applications',summary:'Practical software for land development and management workflows.',context:'Enterprise software supporting land development and management workflows.',contribution:'Contributed to the development of the Land Development and Management System.',accent:'land',preview:'Land management',areas:['Enterprise development','Business workflows']},
 {
  slug: 'biruk-wondu-portfolio', title: 'Biruk Wonduwosen Portfolio', category: 'Developer Portfolio',
  summary: 'A lightweight portfolio built with Next.js, TypeScript, and Tailwind CSS, with reusable components, centrally managed content, and static project pages.',
  context: 'Present software engineering experience and projects through a fast, accessible website that is easy to update and deploy.',
  contribution: 'The implementation brings typed content, reusable components, and generated project pages together in a static Next.js site. It requires no runtime API keys or external backend services.',
  accent: 'portfolio', preview: 'Portfolio architecture',
  areas: ['Centralized typed content', 'Reusable components and static project pages', 'Responsive styling and shared design tokens'],
  technologies: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Static export'],
  sections: [
   { title: 'Implementation', items: ['Profile and project content is centralized in lib/content.ts.', 'Reusable components and project detail pages generated from slugs.', 'Responsive styling with shared design tokens.', 'Static export to out/ without runtime API keys or external backend services.', 'Page metadata and a social sharing image.'] },
   { title: 'Accessibility', items: ['Semantic landmarks and a skip link.', 'Keyboard-operable mobile navigation; Escape closes the menu and restores focus.', 'Visible focus states and reduced-motion support.', 'Copy-email feedback with a manual fallback.'] },
   { title: 'Engineering workflow', items: ['ESLint validation and TypeScript checks.', 'Production build and static export.', 'Responsive layout and navigation checks.'] }
  ]
 }
];
// TODO: Add project-specific technologies, screenshots and public demo URLs only after verification.
export const skills = [ {title:'Frontend',items:['JavaScript','TypeScript','React','Next.js','Angular','HTML','CSS']}, {title:'Backend',items:['Python','Frappe Framework','Java','C#','Entity Framework Core','PHP','Laravel','.NET','ASP.NET']}, {title:'Data',items:['SQL','Microsoft SQL Server','MariaDB']}, {title:'ERP & HR',items:['ERPNext','Frappe HR / HRMS']}, {title:'Delivery',items:['Linux','Bench CLI']}, {title:'Practices',items:['Git','Agile','Scrum','Requirements analysis','Collaboration']} ];
export const education = [ {degree:'Master’s in Computer Science, Software Engineering',school:'Addis Ababa University',date:'August 2024'}, {degree:'BSc in Information Systems',school:'Hope Enterprise University College',date:'August 2021',note:'Dean’s List recognition during undergraduate study.'} ];
export const services = [ {title:'Custom web applications',body:'Practical web software shaped around your business requirements and the people who use it.'}, {title:'ERP & business workflows',body:'Enterprise applications that help teams manage complex operations in one place.'}, {title:'Maintain, integrate, improve',body:'Thoughtful maintenance, integrations, and improvements to existing software.'} ];








