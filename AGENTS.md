<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep each portfolio section in its own TanStack leaf route with page-specific metadata; this makes all five sections directly shareable.
- Use a shared portfolio shell and global semantic design tokens for consistent navigation and visual identity.
- Do not invent personal contact links, portraits, or resume documents; leave those unavailable until supplied.
- Render resumes with browser-only PDF.js canvas rendering and open/download fallbacks for consistent embedded display; a clearly labeled sample is allowed until the final PDF is supplied, and file selection is a temporary browser preview only.
