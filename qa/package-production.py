"""Package only the verified static export, with index.html at the ZIP root."""
import json, hashlib, zipfile
from pathlib import Path
workspace = Path(__file__).resolve().parent.parent
source = (workspace / 'out').resolve()
assert source.parent == workspace and (source / 'index.html').is_file()
files = sorted(p for p in source.rglob('*') if p.is_file())
archive = workspace / 'portfolio-production.zip'
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
    for file in files:
        name = file.relative_to(source).as_posix()
        assert not any(part in {'node_modules', '.git', '.next'} or part.startswith('.env') for part in Path(name).parts)
        assert file.suffix.lower() not in {'.ts', '.tsx', '.mjs', '.map', '.py'}
        output.write(file, name)
with zipfile.ZipFile(archive) as output:
    names = output.namelist()
    assert 'index.html' in names and '404.html' in names
    assert 'documents/Biruk_Wonduwosen_Resume.pdf' in names
    assert not any(name.startswith('out/') or name.startswith('/') or '..' in Path(name).parts for name in names)
    assert len(names) == len(files) and output.testzip() is None
    for file in files:
        assert output.read(file.relative_to(source).as_posix()) == file.read_bytes()
report = {'zip': str(archive), 'bytes': archive.stat().st_size, 'files': len(files), 'sha256': hashlib.sha256(archive.read_bytes()).hexdigest(), 'indexAtRoot': True, 'matchesExportByteForByte': True, 'resumeIncluded': True, 'editableResumeSource': str(workspace / 'resume' / 'Biruk_Wonduwosen_Resume.html'), 'sourceMapsEnvironmentFilesAndRepositorySource': 'excluded'}
(workspace / 'qa' / 'production-package.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
print(json.dumps(report, indent=2))
