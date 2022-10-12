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
  ['156', 'https://note.com/156musik_test/rss'],
  //か
  ['記録用ブログ', 'https://mejiro8.hatenablog.com/feed'],
  ['GIHOZ’s blog', 'https://gihoz.hatenablog.com/feed'],
  ['CAT GETTING OUT OF A BAG', 'https://miwa719.hatenablog.com/feed'],
  ['Ques', 'https://quesqa.com/feed/'],
  ['くぼぴー / note inc.', 'https://note.com/kubopi/rss'],
  ['Kouichi Akiyama', 'https://note.com/akiyama924/rss'],
  ['コヤマン', 'https://note.com/koyaman2/rss'],
  //さ
  ['次世代ゲームテスト研究所', 'https://blog.aiqveone.co.jp/feed'],
  ['柴田 芳樹 (Yoshiki Shibata)', 'https://yshibata.blog.ss-blog.jp/index.xml'],
  ['SHIFT Group 技術ブログ', 'https://note.com/shift_tech/rss'],
  ['suhahide', 'https://note.com/suhahide/rss'],
  ['千里霧中', 'https://goyoki.hatenablog.com/feed'],
  ['Software Quality Topics.', 'https://swquality.jp/feed/'],
  ['ソフトウェアの品質を学びまくる2.0', 'https://www.kzsuzuki.com/feed'],
  ['ソフトウェアテストタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88/feed'],
  //た
  ['Tsuyoshi Yumoto', 'https://note.com/yumotsuyo/rss'],
  //['テスト自動化タグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%e3%83%86%e3%82%b9%e3%83%88%e8%87%aa%e5%8b%95%e5%8c%96/feed'],
  ['テスターちゃん【4コマ漫画】', 'https://testerchan.hatenadiary.com/feed'],
  ['テスト自動化研究会 シリーズの新着イベント', 'https://testautomationresearch.connpass.com/ja.atom'],
  ['テストする人。', 'https://underscore42rina.hatenablog.com/feed'],
  ['天の月', 'https://aki-m.hatenadiary.com/feed'],
  ['toshimana\'s diary', 'https://toshimana.hatenablog.com/feed'],
  ['Dreamland-夢と想いと小さな工夫', 'https://shiozi.hatenablog.com/feed'],
  //な
  ['nemorineのブログ', 'https://nemorine.hateblo.jp/feed'],
  //は
  ['hgsgtk', 'https://note.com/hgsgtk/rss'],
  ['ブロッコリーのブログ', 'https://nihonbuson.hatenadiary.jp/feed'],
  ['ベリサーブ/VeriServe シリーズの新着イベント', 'https://veriserve-event.connpass.com/ja.atom'],
  ['honamin @マネーフォワード', 'https://note.com/honamin09/rss'],
  //ま
  ['マネーフォワード エンジニアブログ', 'https://moneyforward.com/engineers_blog/feed/'],
  //や
  ['yoya', 'https://note.com/yoya_k/rss'],
  //ら
  ['RAKUS Developers Blog | ラクス エンジニアブログ - テスト', 'https://tech-blog.rakus.co.jp/feed/category/%E3%83%86%E3%82%B9%E3%83%88'],
  //['', ''],
]);
