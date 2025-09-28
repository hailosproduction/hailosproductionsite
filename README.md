# Hāịlō — Production Website

This project is a prebuilt React + Vite + Tailwind site with Netlify CMS support.

### Deploy on Netlify (recommended)
1. Create a GitHub repo and upload these files (or push with git).
2. In Netlify: New site from Git -> choose this repo.
3. Netlify will use `netlify.toml` to build (command `npm run build`, publish `dist`).

### Enable CMS editing
- In Netlify dashboard -> Identity -> Enable Identity.
- Under Identity settings -> Services -> Enable Git Gateway.
- Invite a user or sign up to log in to `/admin`.
