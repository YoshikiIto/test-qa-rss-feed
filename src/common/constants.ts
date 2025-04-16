const siteUrlStem = 'https://yoshikiito.github.io/test-qa-rss-feed';
const siteUrl = `${siteUrlStem}/`;

export default {
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

  // リンク
  author: 'yoshikiito',
  gitHubUserUrl: 'https://github.com/yoshikiito/',
  gitHubRepositoryUrl: 'https://github.com/yoshikiito/test-qa-rss-feed/',
  xUserUrl: 'https://x.com/yoshikiito',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: 'G-',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; yoshikiito/test-qa-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    'https://github.com/yoshikiito/test-qa-rss-feed#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%BF%BD%E5%8A%A0%E6%96%B9%E6%B3%95',

  // 処理の設定
  feedFetchConcurrency: 50, // フィードを取得する並列数
  feedOgFetchConcurrency: 20, // OG情報を取得する並列数
  aggregateFeedDurationInHours: 8 * 24, // まとめフィードの対象となる時間の範囲
  maxFeedDescriptionLength: 200, // フィードのdescriptionの最大文字数
  maxFeedContentLength: 500, // フィードのcontentの最大文字数
  processImageConcurrency: 50, // 画像の処理の並列数。画像取得と変換
  eleventyFetchConcurrency: 50, // Eleventyの画像取得の並列数
  fetchedFeedCacheDurationInHours: 1, // フィードのキャッシュの有効時間
  fetchedOgCacheDurationInHours: 24, // OG情報のキャッシュの有効時間
};
