import { createFileRoute } from '@tanstack/react-router';
import { PenLine, Asterisk } from 'lucide-react';
import { PageIntro } from '@/components/portfolio-shell';
import { pageHead } from '@/lib/portfolio';
export const Route = createFileRoute('/insights')({head: () => pageHead('Insights', 'Writing about AI, healthcare, technology, economics and the systems behind them — by Gauri Menon.'),component: InsightsPage});
function InsightsPage() { return <main className="page-wrap page-enter"><PageIntro label="Notes & perspectives" title="Insights" description="Writing about AI, healthcare, technology, economics and the systems behind them."/><section className="empty-page border-t border-border"><div className="empty-symbol"><PenLine size={38} strokeWidth={1.2}/></div><h2>A little space for big ideas.</h2><p>No posts yet. Thoughts are taking shape.</p><Asterisk className="text-primary mt-5" size={30} strokeWidth={1.3}/></section></main>; }
