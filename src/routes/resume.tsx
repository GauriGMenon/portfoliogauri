import { createFileRoute } from '@tanstack/react-router';
import { FileText, Download, ArrowUpRight } from 'lucide-react';
import { PageIntro, SocialLinks } from '@/components/portfolio-shell';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/portfolio';
export const Route = createFileRoute('/resume')({head: () => pageHead('Resume', 'A concise overview of Gauri Menon’s experience, education and technical skills.'),component: ResumePage});
function ResumePage() { return <main className="page-wrap page-enter"><PageIntro label="The concise version" title="Resume" description="A concise overview of my experience, education and technical skills."/><section className="empty-page border-t border-border"><div className="empty-symbol"><FileText size={40} strokeWidth={1.2}/></div><h2>Gauri Menon</h2><p>AI Engineer · IIT Kanpur graduate</p><div className="flex flex-wrap justify-center gap-3"><Button disabled className="editorial-button">View Resume <ArrowUpRight /></Button><Button disabled variant="outline" className="editorial-button">Download PDF <Download /></Button></div><p className="text-xs!">Resume PDF will be available here once added.</p></section><section className="section-band flex flex-wrap justify-between gap-5 items-center"><h2 className="font-mono text-xl">LET'S CONNECT.</h2><SocialLinks resume={false}/></section></main>; }
