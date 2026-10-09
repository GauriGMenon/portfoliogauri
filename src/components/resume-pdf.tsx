import { useEffect, useRef, useState } from 'react';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

export function ResumePdf({ url }: { url: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('Loading PDF…');

  useEffect(() => {
    let cancelled = false;
    let dispose: (() => void) | undefined;
    setStatus('Loading PDF…');
    const host = container.current;
    host?.replaceChildren();

    async function render() {
      try {
        const pdfjs = await import('pdfjs-dist');
        if (cancelled || !host) return;
        pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
        const task = pdfjs.getDocument(url);
        dispose = () => { void task.destroy(); };
        const pdf = await task.promise;
        for (let number = 1; number <= pdf.numPages; number++) {
          if (cancelled) return;
          const page = await pdf.getPage(number);
          const viewport = page.getViewport({ scale: 1.7 });
          const canvas = document.createElement('canvas');
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          canvas.className = 'block w-full h-auto';
          canvas.setAttribute('role', 'img');
          canvas.setAttribute('aria-label', `Resume PDF page ${number}`);
          await page.render({ canvas, viewport }).promise;
          if (cancelled) return;
          host.append(canvas);
        }
        if (!cancelled) setStatus('');
      } catch {
        if (!cancelled) setStatus('Unable to display this PDF. Open or download it instead.');
      }
    }
    void render();
    return () => { cancelled = true; dispose?.(); };
  }, [url]);

  return <div className="border border-border bg-card min-h-80">
    {status && <p role="status" className="p-6 text-sm text-muted-foreground">{status}</p>}
    <div ref={container} className="mx-auto max-w-[850px] space-y-4" />
  </div>;
}