# Editable resume source

`Biruk_Wonduwosen_Resume.html` is the editable, self-contained XHTML source. Open it in a browser to read/print it, or edit the text in any text/HTML editor. Keep its two `<section class="page">` containers to preserve the intended two-page grouping.

`build_resume.py` reads that HTML and creates the text-selectable `public/documents/Biruk_Wonduwosen_Resume.pdf`. It checks the page count, required content, and six contact/profile hyperlinks. It does not overwrite the HTML source. Run it using Python with ReportLab and pypdf installed on the build machine:

```
python resume/build_resume.py
```

Contact details on the website live in `lib/content.ts`. To refresh the source from those details, first export them, then explicitly recreate the HTML (this replaces manual HTML edits):

```
node --experimental-strip-types --input-type=module -e "import {profile,skills,education} from './lib/content.ts'; import fs from 'node:fs'; fs.writeFileSync('resume/portfolio-data.json', JSON.stringify({profile,skills,education}, null, 2));"
python resume/create_source.py
python resume/build_resume.py
```

Review a rendered PDF after editing, then rebuild the static site and recreate the production ZIP. Only the PDF is published; editable sources and generators remain outside the upload package. References and reference contact details are excluded. The original CV was not available; this resume uses the documented portfolio content and the owner's confirmed contact and employment details. Project-specific technology tags are included only for the HR/payroll and marketplace projects where supplied, with marketplace payments described as sandbox-only.
