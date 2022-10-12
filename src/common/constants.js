const siteUrlStem = 'https://yoshikiito.github.io/test-qa-rss-feed';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'テスト・QA関連ブログRSS',
  siteDescription:
    'テスト・QAの話題にふれることがあるブログやサイト、も入れているのでわりと話題は広めかと思います',

  // フィード設定
  feedTitle: 'テスト・QA関連ブログRSS',
  feedDescription: '企テスト・QA関連ブログの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'yoshikiito/test-qa-rss-feed',
  feedGenerator: 'yoshikiito/test-qa-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'yoshikiito',
  gitHubUserUrl: 'https://github.com/yoshikiito/',
  gitHubRepositoryUrl: 'https://github.com/yoshikiito/test-qa-rss-feed/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: 'G-',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; yoshikiito/test-qa-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    '',
};
