# styles/

Non-global stylesheets. The Tailwind entry point and CSS custom properties
(design tokens, dark mode) live in `app/globals.css`, not here — this
folder is for standalone stylesheets that don't belong in the global
cascade (e.g. a vendored stylesheet for a third-party widget, print
styles). Empty until one is needed.
