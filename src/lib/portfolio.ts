export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} — Gauri Menon` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Gauri Menon` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
export const skills = {
  AI: ['Agentic AI', 'LLMs', 'RAG', 'Multimodal AI', 'Fine-tuning', 'Generative AI'],
  Engineering: ['LangGraph', 'LangChain', 'AI Evaluation', 'Observability', 'Vector Search'],
  Architecture: ['System Design', 'Microservices', 'Distributed Systems', 'REST APIs', 'Python', 'FastAPI'],
  Infrastructure: ['Kubernetes', 'Docker', 'GCP', 'CI/CD', 'Ray', 'Kubeflow', 'KServe', 'GPU Computing'],
  Data: ['Redis', 'MongoDB', 'SQL', 'Data Pipelines'],
};
