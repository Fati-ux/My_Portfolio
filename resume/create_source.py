"""Create the editable XHTML resume source from the central portfolio contact data.
Run only when intentionally refreshing the source; build_resume.py preserves edits.
"""
import json
from html import escape
from pathlib import Path
root = Path(__file__).resolve().parent
info = json.loads((root / 'portfolio-data.json').read_text(encoding='utf-8'))
p = info['profile']
def link(url, label):
    return f'<a href="{escape(url, quote=True)}">{escape(label)}</a>'
skills = ''.join(f'<p><strong>{escape(group["title"])}:</strong> {escape(", ".join(group["items"]))}</p>' for group in info['skills'])
html = f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"/><title>{p['name']} - Resume</title>
<style>body{{font:11pt Arial,sans-serif;color:#202824;margin:0}}.page{{max-width:720px;margin:35px auto;page-break-after:always}}h1{{font-size:25pt;margin:0}}h2{{font-size:12pt;margin:18px 0 8px}}h3{{font-size:11pt;margin:12px 0 3px}}p,li{{line-height:1.4;margin:5px 0}}a{{color:#175447}}.contact{{font-size:10pt}}@media print{{.page{{margin:0}}}}</style></head><body>
<section class="page">
<h1>{escape(p['name'])}</h1>
<p class="subtitle">Full Stack Software Engineer</p>
<p class="contact">{escape(p['location'])} | Email: {link('mailto:'+p['email'],p['email'])}</p>
<p class="contact">Phone / WhatsApp: {link(p['whatsapp'],p['phone'])} | Telegram: {link(p['telegram']['url'],p['telegram']['username'])}</p>
<p class="contact">Portfolio: {link('https://biruk.ethioerp.com','https://biruk.ethioerp.com')} | GitHub: {link(p['links']['GitHub'],p['links']['GitHub'])}</p>
<p class="contact">LinkedIn: {link(p['links']['LinkedIn'],p['links']['LinkedIn'])}</p>
<h2>PROFESSIONAL SUMMARY</h2>
<p>Full stack software engineer experienced in enterprise applications, ERP systems, HR and payroll implementation, and service booking platforms.</p>
<h2>EXPERIENCE</h2>
<h3>Chief Software Developer</h3>
<p class="job-meta">Federal Housing Corporation | May 2022-Present</p>
<ul>
<li>Contribute to enterprise ERP development, including the One-Stop Service Center and property management functionality.</li>
<li>Configure and tailor Frappe HR and ERPNext employee profiles, organizational structures, attendance synchronization, leave requests, and approval routing.</li>
<li>Configure salary components, salary structures, employee payroll profiles, payroll entries, and salary slips; troubleshoot processing errors and permission-controlled corrections.</li>
<li>Tailor roles, permissions, approval workflows, scripts, reports, and notifications. Support migration, HR scenario testing, administration documentation, and operational handover.</li>
</ul>
<h3>Full Stack Developer</h3>
<p class="job-meta">Xoka IT Solution PLC | May 2021-May 2022</p>
<ul><li>Developed business applications and contributed to enterprise software for operational workflows.</li></ul>
<h2>TECHNICAL SKILLS</h2>
{skills}
</section>
<section class="page">
<h2>SELECTED PROJECTS</h2>
<h3>Federal Housing Corporation ERP</h3>
<p>Contributed to an enterprise resource planning platform, including a One-Stop Service Center and property management functionality.</p>
<h3>FHC HR and Payroll Implementation</h3>
<p>Configured and tailored employee management, attendance, leave, payroll, permissions, and approval workflows using Frappe HR and ERPNext.</p>
<p><strong>Technologies:</strong> Frappe Framework, ERPNext, Frappe HR / HRMS, Python, JavaScript, MariaDB, Linux, Bench CLI, Git.</p>
<h3>My Clean &amp; Cook Booking Marketplace</h3>
<p>Service booking marketplace with customer bookings, worker onboarding and availability, rules-based matching, and administrator assignments. Includes a PayPal sandbox checkout integration; live processing is not confirmed.</p>
<p><strong>Technologies:</strong> React 18, React Router v6, Axios, C#, ASP.NET Core 5 Web API, Entity Framework Core 5, Microsoft SQL Server, JWT authentication for administrators, PayPal REST API (sandbox), Windows Server, IIS, Plesk.</p>
<h3>Oromia Mineral Management System</h3>
<p>Led development and collaborated with cross-functional teams on software supporting mineral management processes.</p>
<h3>Land Development and Management System</h3>
<p>Contributed to enterprise software supporting land development and management workflows.</p>
<h2>EDUCATION</h2>
<h3>Master's in Computer Science, Software Engineering</h3>
<p>Addis Ababa University | August 2024</p>
<h3>BSc in Information Systems</h3>
<p>Hope Enterprise University College | August 2021</p>
</section>
</body></html>'''
(root / 'Biruk_Wonduwosen_Resume.html').write_text(html, encoding='utf-8')
print('Editable source:', root / 'Biruk_Wonduwosen_Resume.html')
