# Art Supabase Site

The independent official website for the Art Supabase Pro ecosystem. It introduces the shared platform, business modules, real product screenshots, and architecture.

## Development

Requires Node.js 22+ and pnpm 11.9+.

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3022/`.

```sh
pnpm typecheck
pnpm format:check
pnpm build
```

The versioned static output is in `docs/`, as in the other subrepositories. Commit the updated `docs/` after building. Set `SITE_BASE=/` to build for a root domain instead of the default `/art-supabase-site/` path. The host's `pnpm modules:build -- site` uses a separate temporary output directory.

This repository does not use a GitHub Actions deployment workflow. Publish `master/docs` through a static hosting service, or run `pnpm repo:publish -- "commit message"` from the host repository to build and publish all changed repositories together.

Product information lives in `src/modules.ts`; page content and styles are in `src/App.vue` and `src/style.css`.

## License

[MulanPSL-2.0](LICENSE)
