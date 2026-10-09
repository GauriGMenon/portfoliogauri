import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { Download, ArrowUpRight, FileUp } from 'lucide-react';
import { PageIntro, SocialLinks } from '@/components/portfolio-shell';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/portfolio';
export const Route = createFileRoute('/resume')({head: () => pageHead('Resume', 'A concise overview of Gauri Menon’s experience, education and technical skills.'),component: ResumePage});
function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('/sample-resume.pdf');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return <main className="page-wrap page-enter">
    <PageIntro label="The concise version" title="Resume" description="A concise overview of my experience, education and technical skills."/>
    <section className="border-t border-border py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <p className="font-mono text-xs text-muted-foreground break-all">{file ? `${file.name} · Temporary preview` : 'Sample resume · Final PDF pending'}</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="editorial-button" onClick={() => inputRef.current?.click()}><FileUp />Preview PDF</Button>
          <Button asChild variant="outline" className="editorial-button"><a href={previewUrl} target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight /></a></Button>
          <Button asChild className="editorial-button"><a href={previewUrl} download={file?.name ?? 'gauri-menon-sample-resume.pdf'}>Download PDF <Download /></a></Button>
        </div>
      </div>
      <input ref={inputRef} type="file" accept="application/pdf,.pdf" className="hidden" aria-label="Choose resume PDF" onChange={event => {
        const selected = event.target.files?.[0];
        if (!selected) return;
        if (selected.type !== 'application/pdf' && !selected.name.toLowerCase().endsWith('.pdf')) {
          setError('Please choose a PDF file.');
          return;
        }
        setError('');
        setFile(selected);
      }}/>
      {error && <p role="alert" className="text-destructive text-sm mb-4">{error}</p>}
      <iframe src={previewUrl} title="Gauri Menon resume PDF" className="w-full h-[850px] max-md:h-[650px] border border-border bg-card" />
    </section>
    <section className="section-band flex flex-wrap justify-between gap-5 items-center"><h2 className="font-mono text-xl">LET'S CONNECT.</h2><SocialLinks resume={false}/></section>
  </main>;
}
