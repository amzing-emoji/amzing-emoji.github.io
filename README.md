# 重庆奶蛙大学 · CQMFU

一个纯静态、无需构建工具的虚构校园网站。学校与院系均为创意设定，不提供真实教育、报名或录取服务。

## 页面与文件

| 文件 | 用途 |
| --- | --- |
| `index.html` | 首页与内容入口 |
| `about.html` | 学校概况与设定 |
| `academics.html` | 六个学院 |
| `admissions.html` | 本地模拟入学寄语 |
| `404.html` | 访客进入不存在页面时的提示 |
| `assets/site.css` | 全站视觉与响应式样式 |
| `assets/site.js` | 首页奶蛙加载动画、移动端菜单与模拟入学互动 |
| `assets/frog-mark.svg` | 自制矢量奶蛙校徽 |
| `CNAME.example` | 自定义域名配置模板；部署前确认后再改名为 `CNAME` |

所有页面和素材都使用相对路径，可以直接放在 GitHub Pages 用户站点仓库根目录。首页应保持为仓库根目录的 `index.html`。

## 本地查看

直接打开 `index.html` 可以查看主要内容。也可以在项目目录运行 `python -m http.server 8000`，然后访问 `http://localhost:8000`。无需安装依赖。

## 日常维护

1. 改文字：编辑对应 HTML 页面。导航和页脚目前分别写在每个页面中；增加页面时同步更新这两处。
2. 改颜色与排版：编辑 `assets/site.css` 顶部的变量和相关样式。
3. 改图形：编辑 `assets/frog-mark.svg`。它同时用于浏览器图标、品牌标志和首页插画。
4. 改互动文案：编辑 `assets/site.js` 中的 `messages` 列表。互动只修改页面文字，不提交网络请求。
5. 添加新图片：放在 `assets/` 下，并为图片写有意义的 `alt` 文本。

## GitHub Pages 部署清单

目标仓库：`amzing-emoji/amzing-emoji.github.io`。将本目录的文件放入该仓库 `main` 分支根目录，并在仓库 `Settings → Pages` 中选择 `Deploy from a branch`、`main`、`/(root)`。提交后检查 `https://amzing-emoji.github.io/`。本项目交付时尚未提交或发布。

## 自定义域名准备

中文域名：`重庆奶蛙大学.com`  
Punycode：`xn--psszg58cm5e0z3evzn.com`

域名绑定应在站点内容确认后进行。若使用分支部署，先在 GitHub Pages 的 `Custom domain` 中填写 Punycode 域名；GitHub 会在发布源根目录创建 `CNAME`。也可先确认 `CNAME.example` 中的内容，再将其改名为 `CNAME` 并提交。不要同时维护不一致的值。

阿里云 DNS 中为根域名 `@` 配置 GitHub Pages 官方 A 记录：

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

如果希望 `www.重庆奶蛙大学.com` 也可访问，添加 `www` 的 CNAME 指向 `amzing-emoji.github.io`，不要指向根域名。DNS 生效且证书签发后，在 Pages 设置中开启 `Enforce HTTPS`。在修改记录前先检查是否已有冲突的根域名 A/AAAA/ALIAS/ANAME 记录或 `www` CNAME；不要添加通配符 `*` 记录。DNS 生效可能需要一段时间。

建议在 GitHub 账户设置中验证自定义域名并保留对应 TXT 记录，减少域名被其他 Pages 站点占用的风险。

参考：[GitHub Pages 自定义域名官方说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)、[域名验证官方说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)。

## 本次本地修正（2026-10-26）

- 首页新增奶蛙跳跃加载动画；加载完成后淡出，正常显示约 0.7 秒，慢资源时约 3.2 秒内退出。
- 动画仅在 JavaScript 正常执行时显示；禁用 JavaScript 或开启减少动态效果时直接显示正文。
- 字体使用电脑和手机的本地字体回退，移除 Google Fonts 外部请求。
- 此目录是待发布版本；发布、域名绑定及 DNS 变更状态以实际部署验证为准。
