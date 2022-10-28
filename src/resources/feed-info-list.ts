export type FeedInfo = {
  label: string;
  url: string;
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({ label, url });
  }

  return feedInfoList;
};

// フィード情報一覧。ふんいき日本語順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  //あ
  ['AGEST Engineers Blog', 'https://engineers-blog.agest.co.jp/feed'],
  ['飴ブロ(仮', 'https://pineapplecandy.hatenadiary.jp/feed'],
  ['ANDPAD Tech Blog', 'https://tech.andpad.co.jp/feed/category/%E8%87%AA%E5%8B%95%E3%83%86%E3%82%B9%E3%83%88'],
  ['156', 'https://note.com/156musik_test/rss'],
  ['エムスリーテックブログ - カテゴリ：QA', 'https://www.m3tech.blog/feed/category/QA'],
  //か
  ['かいり', 'https://note.com/kairiver/rss'],
  ['記録用ブログ', 'https://mejiro8.hatenablog.com/feed'],
  ['GIHOZ’s blog', 'https://gihoz.hatenablog.com/feed'],
  ['CAT GETTING OUT OF A BAG', 'https://miwa719.hatenablog.com/feed'],
  ['Ques', 'https://quesqa.com/feed/'],
  ['クオリティアーツ', 'https://quality-arts.com/?feed=rss2'],
  ['QualityForward Blog', 'https://qf-support.hatenablog.com/feed'],
  ['Google Testing Blog', 'http://feeds.feedburner.com/blogspot/RLXA'],
  ['Gunosy Tech Blog - カテゴリ：ソフトウェアテスト', 'https://tech.gunosy.io/feed/category/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88'],
  ['くぼぴー / note inc.', 'https://note.com/kubopi/rss'],
  ['Kouichi Akiyama', 'https://note.com/akiyama924/rss'],
  ['コヤマン', 'https://note.com/koyaman2/rss'],
  //さ
  ['sae\'s blog', 'https://ito128.hatenablog.com/feed'],
  ['次世代ゲームテスト研究所', 'https://blog.aiqveone.co.jp/feed'],
  ['柴田 芳樹 (Yoshiki Shibata)', 'https://yshibata.blog.ss-blog.jp/index.xml'],
  ['SHIFT EVOLVE', 'https://shiftevolve.connpass.com/ja.atom'],
  ['SHIFT Group 技術ブログ', 'https://note.com/shift_tech/rss'],
  ['shiro庵 - カテゴリ：ソフトウェアテスト', 'https://yuki-shiro.hatenablog.com/feed/category/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88'],
  ['Shogo Nameki', 'https://note.com/nametake_alp/rss'],
  ['suhahide', 'https://note.com/suhahide/rss'],
  ['SmartHR 開発者ブログ', 'https://tech.smarthr.jp/feed/category/QA'],
  ['SEGA TECH Blog', 'https://techblog.sega.jp/feed/category/QA%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2'],
  ['千里霧中', 'https://goyoki.hatenablog.com/feed'],
  ['Software Quality Topics.', 'https://swquality.jp/feed/'],
  ['ソフトウェアの品質を学びまくる2.0', 'https://www.kzsuzuki.com/feed'],
  ['ソフトウェアテストタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88/feed'],
  //た
  ['tateishi', 'https://note.com/mt3_set/rss'],
  ['tarappo', 'https://note.com/tarappo/rss'],
  ['チームスピリットデベロッパーブログ', 'https://teamspirit.hatenablog.com/feed/category/%E3%83%86%E3%82%B9%E3%83%88'],
  ['知識ゼロからソフトウェアテストをはじめた人', 'https://moyashinomegane.hatenablog.com/feed'],
  ['Tsuyoshi Yumoto', 'https://note.com/yumotsuyo/rss'],
  //['テスト自動化タグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%e3%83%86%e3%82%b9%e3%83%88%e8%87%aa%e5%8b%95%e5%8c%96/feed'],
  ['DeNA Testing Blog', 'https://swet.dena.com/feed'],
  ['テスターちゃん【4コマ漫画】', 'https://testerchan.hatenadiary.com/feed'],
  ['テスト自動化研究会 シリーズの新着イベント', 'https://testautomationresearch.connpass.com/ja.atom'],
  ['テストする人。', 'https://underscore42rina.hatenablog.com/feed'],
  ['TestonoBlog', 'https://tonono.hatenablog.com/feed'],
  ['テストラジオ', 'https://testradio.fm/feed'],
  ['天の月', 'https://aki-m.hatenadiary.com/feed'],
  ['toshimana\'s diary', 'https://toshimana.hatenablog.com/feed'],
  ['Dreamland-夢と想いと小さな工夫', 'https://shiozi.hatenablog.com/feed'],
  //な
  ['nemorineのブログ', 'https://nemorine.hateblo.jp/feed'],
  //は
  ['hgsgtk', 'https://note.com/hgsgtk/rss'],
  ['freee Developers Hub - カテゴリ：QA', 'https://developers.freee.co.jp/feed/category/QA'],
  ['ブロッコリーのブログ', 'https://nihonbuson.hatenadiary.jp/feed'],
  ['Better Software Testing', 'https://better-software-testing.hatenablog.com/feed'],
  ['ベリサーブ/VeriServe シリーズの新着イベント', 'https://veriserve-event.connpass.com/ja.atom'],
  ['honamin @マネーフォワード', 'https://note.com/honamin09/rss'],
  //ま
  ['マネーフォワード エンジニアブログ - テスト', 'https://moneyforward.com/engineers_blog/feed/?s=%E3%83%86%E3%82%B9%E3%83%88&submit=%E6%A4%9C%E7%B4%A2'],
  //や
  ['ゆふてっく。', 'https://yufutech.hatenablog.com/feed'],
  ['yoshitake_1201’s diary', 'https://yoshitake-1201.hatenablog.com/feed'],
  ['yoya', 'https://note.com/yoya_k/rss'],
  //ら
  ['RAKUS Developers Blog | ラクス エンジニアブログ - テスト', 'https://tech-blog.rakus.co.jp/feed/category/%E3%83%86%E3%82%B9%E3%83%88'],
  ['Ranorex Blog - UIテスト自動化ツール Ranorex', 'https://ranorex.techmatrix.jp/blog/feed/']
  //['', ''],
]);
