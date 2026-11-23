"""Build the text-selectable resume PDF from the editable XHTML source.
Requires ReportLab and pypdf on the build machine; no web-host dependencies.
"""
from pathlib import Path
import xml.etree.ElementTree as ET
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from pypdf import PdfReader
root = Path(__file__).resolve().parent
source = root / 'Biruk_Wonduwosen_Resume.html'
output = root.parent / 'public' / 'documents' / 'Biruk_Wonduwosen_Resume.pdf'
styles = {
 'h1': ParagraphStyle('Name',fontName='Helvetica-Bold',fontSize=22,leading=26,spaceAfter=5),
 'h2': ParagraphStyle('Section',fontName='Helvetica-Bold',fontSize=11,leading=14,spaceBefore=14,spaceAfter=7,keepWithNext=True),
 'h3': ParagraphStyle('Heading',fontName='Helvetica-Bold',fontSize=10.6,leading=14,spaceBefore=8,spaceAfter=3,keepWithNext=True),
 'p': ParagraphStyle('Body',fontName='Helvetica',fontSize=10.2,leading=13.7,spaceAfter=5),
 'contact': ParagraphStyle('Contact',fontName='Helvetica',fontSize=9,leading=12,spaceAfter=3),
 'subtitle': ParagraphStyle('Subtitle',fontName='Helvetica',fontSize=12,leading=16,spaceAfter=7),
 'job-meta': ParagraphStyle('JobMeta',fontName='Helvetica',fontSize=9.6,leading=13,spaceAfter=5,keepWithNext=True),
 'li': ParagraphStyle('Bullet',fontName='Helvetica',fontSize=10.2,leading=13.7,leftIndent=11,firstLineIndent=-9,spaceAfter=5),
}
def inline(element):
    text = element.text or ''
    for child in element:
        text += ET.tostring(child,encoding='unicode')
    return text.replace('<strong>','<b>').replace('</strong>','</b>')
story=[]
body=ET.fromstring(source.read_text(encoding='utf-8').replace('<!DOCTYPE html>','')).find('body')
for number,page in enumerate(body.findall('section')):
    if number: story.append(PageBreak())
    for element in page:
        if element.tag == 'ul':
            for item in element.findall('li'): story.append(Paragraph('- '+inline(item),styles['li']))
        elif element.tag in styles:
            style=styles.get(element.attrib.get('class',''),styles[element.tag])
            story.append(Paragraph(inline(element),style))
def footer(canvas,doc):
    canvas.setFont('Helvetica',8)
    canvas.setFillColor(colors.HexColor('#57615a'))
    canvas.drawRightString(A4[0]-42,23,f'{doc.page}')
doc=SimpleDocTemplate(str(output),pagesize=A4,leftMargin=42,rightMargin=42,topMargin=35,bottomMargin=37,title='Biruk Wonduwosen - Resume',author='Biruk Wonduwosen',subject='Software engineering experience, projects, skills and education')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
reader=PdfReader(output)
assert len(reader.pages)<=2, f'Resume exceeds two pages: {len(reader.pages)}'
text='\n'.join(page.extract_text() for page in reader.pages)
for expected in ['Biruk Wonduwosen','Chief Software Developer','Xoka IT Solution PLC','PayPal sandbox','EDUCATION']:
    assert expected in text, expected
links=[]
for page in reader.pages:
    for reference in page.get('/Annots',[]):
        annotation=reference.get_object()
        action=annotation.get('/A',{})
        if '/URI' in action: links.append(str(action['/URI']))
expected=['mailto:bwondu1@gmail.com','https://wa.me/251938487879','https://t.me/birukwn','https://biruk.ethioerp.com','https://github.com/fati-ux','https://www.linkedin.com/in/biruk-wondu-2a15381b0/']
assert set(expected).issubset(links), links
(root.parent/'qa'/'resume-extracted.txt').write_text(text,encoding='utf-8')
print(f'PDF: {output}\nPages: {len(reader.pages)}\nVerified clickable links: {len(links)}\nSelectable characters: {len(text)}')
