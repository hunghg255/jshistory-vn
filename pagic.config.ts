// 需安装 Deno 与 Pagic
// curl -fsSL https://deno.land/x/install/install.sh | sh
// deno install --unstable --allow-read --allow-write --allow-net --name=pagic https://deno.land/x/pagic/mod.ts
// pagic build --serve --watch

export default {
  srcDir: './',
  theme: 'docs',
  plugins: ['sidebar', 'prev_next'],
  title: 'Hai mươi năm JavaScript',
  description: 'Từ khi ngôn ngữ này ra đời vào năm 1995 cho đến khi xây dựng đặc tả ES6 vào năm 2015, tổng cộng là 20 năm phát triển ngôn ngữ JavaScript. ',
  github: 'https://github.com/hunghg255/jshistory-vn',
  md: {
    anchorLevel: [1, 2, 3, 4, 5, 6],
    tocLevel: [1, 2, 3, 4]
  },
  nav: [
    // { text: '阅读', link: '/' },
  ],
  sidebar: {
    '/': [
      'README.md',
      'part-1-vn.md',
      'part-2-vn.md',
      'part-3-vn.md',
      'part-4-vn.md',
      'appendices.md',
      'notes.md',
      'references.md',
    ],
  },
  tools: {
    editOnGithub: true,
    backToTop: true,
  },
  port: 8011
}
