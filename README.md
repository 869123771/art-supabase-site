# 亿企工场官网 · Art Supabase Site

Art Supabase Pro 项目群的独立官方网站。站点展示统一平台、业务模块、真实产品截图与技术架构，不依赖主平台的登录态或 Supabase 环境变量。

## 项目位置

- 官网子仓：`modules/art-supabase-site`
- Gitee：https://gitee.com/wangyanghub/art-supabase-site
- 主平台：https://gitee.com/wangyanghub/art-supabase-pro
- 在线演示：https://869123771.github.io/art-supabase-pro/
- 产品文档：https://869123771.github.io/art-supabase-doc/

## 本地开发

需要 Node.js 22+ 与 pnpm 11.9+。

```powershell
pnpm install
pnpm dev
```

本地地址：`http://localhost:3022/art-supabase-site/`。

```powershell
pnpm typecheck
pnpm format:check
pnpm build
pnpm preview
```

生产文件输出到 `dist/`。默认站点路径是 `/art-supabase-site/`；部署到独立域名根目录时，设置 `SITE_BASE=/` 后重新构建。

## 内容维护

- 模块名称、简介和仓库链接：`src/modules.ts`。新增或修改子仓后同步更新此文件。
- 页面结构与正文：`src/App.vue`；视觉样式：`src/style.css`。
- 产品截图：`public/`。这些图片来自主项目的真实运行截图；更新时同步检查替代文本和内容描述。
- 官网只介绍现有能力及建设方向。MES、WMS 等仍在建设的业务，不用“已上线”等措辞代替真实状态。

## 发布

仓库包含 GitHub Pages 工作流。将 Gitee 仓库镜像到同名 GitHub 仓库，并在 GitHub 仓库的 **Settings → Pages → Source** 选择 **GitHub Actions** 后，推送 `master` 会构建和发布网站。尚未配置镜像与 Pages 时，仓库仍可独立构建并部署 `dist/` 到任意静态站点服务。

## 许可证

与主项目保持一致，采用 [MulanPSL-2.0](https://gitee.com/wangyanghub/art-supabase-pro/blob/master/LICENSE) 许可证。
