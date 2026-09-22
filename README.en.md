# Art Supabase Site

The independent official website for the Art Supabase Pro ecosystem. It introduces the shared platform, business modules, real product screenshots, and architecture.

## Development

Requires Node.js 22+ and pnpm 11.9+.

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3022/art-supabase-site/`.

```sh
pnpm typecheck
pnpm format:check
pnpm build
```

The static output is in `dist/`. Set `SITE_BASE=/` to build for a root domain instead of the default `/art-supabase-site/` path.

Product information lives in `src/modules.ts`; page content and styles are in `src/App.vue` and `src/style.css`.

## License

[MulanPSL-2.0](https://gitee.com/wangyanghub/art-supabase-pro/blob/master/LICENSE)
