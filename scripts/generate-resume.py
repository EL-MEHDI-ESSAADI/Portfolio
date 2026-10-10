"""Update the résumé in the original pale-header, two-column design."""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
p = json.loads((ROOT / 'src/data/profile.json').read_text())
fonts = ROOT / 'static/fonts'
for name, file in [('Lato','lato-regular.ttf'),('LatoBold','lato-bold.ttf'),('LatoItalic','lato-italic.ttf'),('RalewayBold','raleway-bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(fonts/file)))
pdfmetrics.registerFontFamily('Lato',normal='Lato',bold='LatoBold',italic='LatoItalic',boldItalic='LatoBold')
output = ROOT/'static/documents/el-mehdi-essaadi-resume.pdf'
output.parent.mkdir(parents=True,exist_ok=True)
W,H=595.5,842.25
c=canvas.Canvas(str(output),pagesize=(W,H))
c.setTitle(p['name']+' | Frontend Engineer')
c.setAuthor(p['name'])
gray=HexColor('#494E51');muted=HexColor('#686D71');header=HexColor('#F4F4F4');rule=HexColor('#686D71')
left,right,divider=35,255,230
left_width,right_width=168,305
style=ParagraphStyle('body',fontName='Lato',fontSize=9.5,leading=12.6,textColor=gray)
sidebar_style=ParagraphStyle('sidebar',fontName='Lato',fontSize=10,leading=14,textColor=gray)
meta_style=ParagraphStyle('meta',fontName='LatoItalic',fontSize=9.5,leading=13,textColor=gray)

def para(text,x,top,width,which=style):
    q=Paragraph(text,which);_,height=q.wrap(width,H)
    q.drawOn(c,x,H-top-height)
    return top+height

def spaced(text,x,top,size=18,spacing=2.8,font='RalewayBold'):
    c.saveState()
    q=c.beginText(x,H-top-size);q.setFont(font,size);q.setCharSpace(spacing);q.setFillColor(gray);q.textOut(text);c.drawText(q)
    c.restoreState()
    return top+size

def line(top,x1=left,x2=W-35):
    c.setStrokeColor(rule);c.setLineWidth(.5);c.line(x1,H-top,x2,H-top)

def section(title,x,top):
    spaced(title,x,top)
    return top+30

def bullet(text,x,top,width,which=style):
    c.setFillColor(gray);c.setFont('Lato',which.fontSize);c.drawString(x,H-top-which.fontSize,'•')
    return para(escape(text),x+10,top,width-10,which)+3

def contact(text,url,top,kind):
    # Restrained vector icons, matching the original contact sidebar.
    c.setStrokeColor(muted);c.setFillColor(muted);c.setLineWidth(.7)
    iy=H-top-10
    if kind=='mail':
        c.rect(left,iy,11,7,fill=0);c.line(left,iy+7,left+5.5,iy+3);c.line(left+11,iy+7,left+5.5,iy+3)
    else:
        c.circle(left+5.5,iy+4,5.5,stroke=1,fill=0)
        c.setFont('LatoBold',6);c.drawCentredString(left+5.5,iy+2,kind)
    return para(f"<link href='{url}'><u>{escape(text)}</u></link>",left+25,top,left_width-20,sidebar_style)

# Preserve the broad neutral header and the original letter spaced name.
c.setFillColor(header);c.rect(0,H-140,W,117,fill=1,stroke=0)
spaced(p['name'].upper(),35,52,size=35,spacing=2.2)
spaced('FRONTEND ENGINEER',35,105,size=12,spacing=5.5,font='LatoBold')

start=172
contact(p['email'],'mailto:'+p['email'],start,'mail')
contact('+212-762-759055','tel:+212762759055',start+23,'T')
contact('mehdiessaadi.com',p['siteUrl'],start+46,'W')
contact('El Mehdi Essaadi',p['linkedin'],start+69,'in')
contact('EL-MEHDI-ESSAADI',p['github'],start+92,'G')
profile_top=section('PROFILE',right,start-3)
profile_bottom=para(escape(p['summary']),right,profile_top,right_width)
separator=max(start+112,profile_bottom+14)
line(separator)
c.setStrokeColor(rule);c.setLineWidth(.5);c.line(divider,H-start,divider,33)
c.setFillColor(HexColor('#FFFFFF'));c.circle(divider,H-separator,4.5,stroke=1,fill=1)

# Skills, education and languages stay in the original left sidebar.
y=section('SKILLS',left,separator+26)
skills=[
'React, Next.js, TypeScript','JavaScript, HTML, CSS, Sass','React Native, Tailwind CSS','Styled Components','REST APIs, GraphQL, Stripe','AWS, Amazon Cognito','Payload CMS, Bit.dev','Caching, accessibility, SEO','Localization, RTL','Claude Code, Codex, ChatGPT','Agent skills, browser QA','Git / GitHub, Git worktrees'
]
for skill in skills:y=bullet(skill,left,y,left_width,sidebar_style)
line(y+13,left,divider);c.saveState();c.setFillColor(HexColor('#FFFFFF'));c.circle(divider,H-y-13,4.5,stroke=1,fill=1);c.restoreState()
y=section('EDUCATION',left,y+33)
y=para('<b>HIGH SCHOOL DIPLOMA</b>',left,y,left_width,sidebar_style)
y=para('Ibn Khaldoun High School<br/>2016 to 2018',left,y+4,left_width,sidebar_style)
y=para('<b>CS50 COURSEWORK</b>',left,y+13,left_width,sidebar_style)
y=para('Harvard / edX · 2021',left,y+4,left_width,sidebar_style)
line(y+13,left,divider);c.saveState();c.setFillColor(HexColor('#FFFFFF'));c.circle(divider,H-y-13,4.5,stroke=1,fill=1);c.restoreState()
y=section('LANGUAGES',left,y+31)
y=para('ARABIC · NATIVE<br/>ENGLISH · PROFESSIONAL WORKING',left,y,left_width,sidebar_style)
left_bottom=y

# Current product work replaces the old FtFt-present entry in the same right column.
y=section('EXPERIENCE',right,separator+26)
for index,job in enumerate(p['experiences']):
    y=para('<b>'+escape(job['role'].upper())+'</b>',right,y,right_width,sidebar_style)
    y=para(escape(job['company'])+' | '+job['start']+' to '+job['end'],right,y+4,right_width,meta_style)+6
    bullets=p['resumeBullets'] if index==0 else job['bullets']
    for contribution in bullets:y=bullet(contribution,right,y,right_width)
    y+=8
right_bottom=y-8
assert max(left_bottom,right_bottom)<810, f'Content exceeds the original page: left={left_bottom:.1f}, right={right_bottom:.1f}'
c.save()
reader=PdfReader(output)
assert len(reader.pages)==1
text=reader.pages[0].extract_text()
for value in ['Overseas Network','FIFA','Claude Code','AWS','Oct 2024','FtFt']:
    assert value in text,value
for value in ['Casablanca','Morocco']:
    assert value not in text
(ROOT/'src/assets/documents/resume.pdf').write_bytes(output.read_bytes())
lines=['# '+p['name'],p['role'],'',p['email'],p['siteUrl']+' · '+p['linkedin']+' · '+p['github'],'','## Profile',p['summary'],'','## Experience']
for i,job in enumerate(p['experiences']):
    lines+=['','### '+job['role']+' | '+job['company'],job['start']+' to '+job['end'],'']+['* '+b for b in (p['resumeBullets'] if i==0 else job['bullets'])]
lines+=['','## Skills','']+['* '+s for s in skills]+['','## Education','']+[g['name']+' · '+g['detail']+' · '+g['dates'] for g in p['education']]+['','## Languages',p['languages']]
(ROOT/'docs/resume.md').write_text('\n'.join(lines)+'\n')
print(f'Original-style résumé: one page, {len(text.split())} words; left ends at {left_bottom:.1f}, right at {right_bottom:.1f}.')
