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
  //['エクセルソフト株式会社【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=68065'],
  //['オーティファイ株式会社【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=49466'],
  //か
  ['記録用ブログ', 'https://mejiro8.hatenablog.com/feed'],
  ['GIHOZ’s blog', 'https://gihoz.hatenablog.com/feed'],
  ['Ques', 'https://quesqa.com/feed/'],
  ['くぼぴー / note inc.', 'https://note.com/kubopi/rss'],
  ['Kouichi Akiyama', 'https://note.com/akiyama924/rss'],
  //さ
  ['次世代ゲームテスト研究所', 'https://blog.aiqveone.co.jp/feed'],
  ['柴田 芳樹 (Yoshiki Shibata)', 'https://yshibata.blog.ss-blog.jp/index.xml'],
  ['SHIFT Group 技術ブログ', 'https://note.com/shift_tech/rss'],
  //['株式会社SHIFT【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=18724'],
  ['suhahide', 'https://note.com/suhahide/rss'],
  ['千里霧中', 'https://goyoki.hatenablog.com/feed'],
  ['Software Quality Topics.', 'https://swquality.jp/feed/'],
  //['特定非営利活動法人ソフトウェアテスト技術振興協会【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=54604'],
  ['ソフトウェアテストタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88/feed'],
  //た
  ['Tsuyoshi Yumoto', 'https://note.com/yumotsuyo/rss'],
  //['株式会社デジタルハーツホールディングス【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=76535'],
  //['テスト自動化タグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%e3%83%86%e3%82%b9%e3%83%88%e8%87%aa%e5%8b%95%e5%8c%96/feed'],
  ['テストする人。', 'https://underscore42rina.hatenablog.com/feed'],
  ['天の月', 'https://aki-m.hatenadiary.com/feed'],
  //な
  //['一般財団法人日本科学技術連盟【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=27520'],
  ['nemorineのブログ', 'https://nemorine.hateblo.jp/feed'],
  //は
  //['バルテス株式会社【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=30691'],
  ['hgsgtk', 'https://note.com/hgsgtk/rss'],
  ['ブロッコリーのブログ', 'https://nihonbuson.hatenadiary.jp/feed'],
  ['ベリサーブ/VeriServe シリーズの新着イベント', 'https://veriserve-event.connpass.com/ja.atom'],
  //['株式会社ベリサーブ【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=48768'],
  //ま
  //['株式会社MagicPod【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=27392'],
  ['マネーフォワード エンジニアブログ', 'https://moneyforward.com/engineers_blog/feed/'],
  //ら
  ['RAKUS Developers Blog | ラクス エンジニアブログ - テスト', 'https://tech-blog.rakus.co.jp/feed/category/%E3%83%86%E3%82%B9%E3%83%88'],
  //['', ''],
]);
