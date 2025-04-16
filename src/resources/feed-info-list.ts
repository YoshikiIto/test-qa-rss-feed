type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
    });
  }

  return feedInfoList;
};

// prettier-ignore
// フィード情報一覧。ふんいき日本語順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  //あ
  // ['AGEST Engineers Blog', 'https://engineers-blog.agest.co.jp/feed'],
  ['飴ブロ(仮', 'https://pineapplecandy.hatenadiary.jp/feed'],
  ['ANDPAD Tech Blog', 'https://tech.andpad.co.jp/feed/category/%E8%87%AA%E5%8B%95%E3%83%86%E3%82%B9%E3%83%88'],
  ['156', 'https://note.com/156musik_test/rss'],
  ['AIテスト自動化プラットフォーム「MagicPod」公式note', 'https://note.com/magicpod/rss'],
  ['エムスリーテックブログ - カテゴリ：QA', 'https://www.m3tech.blog/feed/category/QA'],
  //か
  ['かいり', 'https://note.com/kairiver/rss'],
  ['カカクコムTechBlog', 'https://kakaku-techblog.com/feed/category/QA'],
  ['記録用ブログ', 'https://mejiro8.hatenablog.com/feed'],
  ['GIHOZ\'s blog', 'https://gihoz.hatenablog.com/feed'],
  ['CAT GETTING OUT OF A BAG', 'https://miwa719.hatenablog.com/feed'],
  ['杞憂', 'https://note.com/kiyou77/rss'],
  ['Ques', 'https://quesqa.com/feed/'],
  ['クオリティアーツ', 'https://quality-arts.com/?feed=rss2'],
  ['Google Testing Blog', 'http://feeds.feedburner.com/blogspot/RLXA'],
  ['Gunosy Tech Blog - カテゴリ：ソフトウェアテスト', 'https://tech.gunosy.io/feed/category/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88'],
  ['くぼぴー / note inc.', 'https://note.com/kubopi/rss'],
  ['ぐんちゃ', 'https://note.com/gun_chari/rss'],
  ['Kouichi Akiyama', 'https://note.com/akiyama924/rss'],
  ['Go!Go!Gomazn', 'https://zenn.dev/55_ymzn/feed'],
  // ['ごまずん', 'https://note.com/usk_ymst_p/rss'],
  ['コヤマン', 'https://note.com/koyaman2/rss'],
  //さ
  ['sae\'s blog', 'https://ito128.hatenablog.com/feed'],
  // ['Cちゃん', 'https://note.com/shinobear01/rss'],
  ['次世代ゲームテスト研究所', 'https://blog.aiqveone.co.jp/feed'],
  // ['柴田 芳樹 (Yoshiki Shibata)', 'https://yshibata.blog.ss-blog.jp/index.xml'],
  ['SHIFT EVOLVE', 'https://shiftevolve.connpass.com/ja.atom'],
  ['a_shirami', 'https://note.com/a_shirami/rss'],
  ['shiro庵 - カテゴリ：ソフトウェアテスト', 'https://yuki-shiro.hatenablog.com/feed/category/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88'],
  ['gu3', 'https://note.com/gu3323/rss'],
  ['Shogo Nameki', 'https://note.com/nametake_alp/rss'],
  ['suhahide', 'https://note.com/suhahide/rss'],
  ['SmartHR 開発者ブログ', 'https://tech.smarthr.jp/feed/category/QA'],
  ['SEGA TECH Blog', 'https://techblog.sega.jp/feed/category/QA%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2'],
  ['ぜにのQAブログ', 'https://qaminarai.hatenablog.com/feed'],
  ['Zennの「Test」のフィード', 'https://zenn.dev/topics/test/feed'],
  ['Zennの「QA」のフィード', 'https://zenn.dev/topics/qa/feed'],
  ['Zennの「品質」のフィード', 'https://zenn.dev/topics/%E5%93%81%E8%B3%AA/feed'],
  ['千里霧中', 'https://goyoki.hatenablog.com/feed'],
  // ['Software Quality Topics.', 'https://swquality.jp/feed/'],
  ['ソフトウェアの品質を学びまくる2.0', 'https://www.kzsuzuki.com/feed'],
  ['ソフトウェアテストタグが付けられた新着記事 - Qiita', 'https://qiita.com/tags/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88/feed'],
  //た
  ['tateishi', 'https://note.com/mt3_set/rss'],
  ['Tabelog Tech Blog', 'https://tech-blog.tabelog.com/feed/category/QA'],
  ['tarappo', 'https://note.com/tarappo/rss'],
  ['チームスピリットデベロッパーブログ', 'https://teamspirit.hatenablog.com/feed/category/%E3%83%86%E3%82%B9%E3%83%88'],
  ['知識ゼロからソフトウェアテストをはじめた人', 'https://moyashinomegane.hatenablog.com/feed'],
  ['2106yoshikawa', 'https://note.com/2106yoshikawa/rss'],
  ['つーつー', 'https://note.com/ms_tsu_tsu/rss'],
  ['Tsuyoshi Yumoto', 'https://note.com/yumotsuyo/rss'],
  ['特定非営利活動法人ソフトウェアテスト技術振興協会【プレスリリース】 by PR TIMES', 'https://prtimes.jp/companyrdf.php?company_id=54604'],
  ['DeNA Testing Blog', 'https://swet.dena.com/feed'],
  ['テスターちゃん【4コマ漫画】', 'https://testerchan.hatenadiary.com/feed'],
  ['Testan4818', 'https://note.com/testan4771/rss'],
  ['テスト自動化研究会 シリーズの新着イベント', 'https://testautomationresearch.connpass.com/ja.atom'],
  ['テストするアシカ', 'https://tyngw.hatenablog.com/feed'],
  ['テストする人。', 'https://underscore42rina.hatenablog.com/feed'],
  ['TestonoBlog', 'https://tonono.hatenablog.com/feed'],
  ['テストラジオ', 'https://testradio.fm/feed'],
  ['天の月', 'https://aki-m.hatenadiary.com/feed'],
  ['toshimana\'s diary', 'https://toshimana.hatenablog.com/feed'],
  ['Dreamland-夢と想いと小さな工夫', 'https://shiozi.hatenablog.com/feed'],
  //な
  ['nemorineのブログ', 'https://nemorine.hateblo.jp/feed'],
  //は
  ['Hashi_Kazu@bb', 'https://note.com/hashi_kazu/rss'],
  ['hgsgtk', 'https://note.com/hgsgtk/rss'],
  ['pikazakipika', 'https://note.com/pika123/rss'],
  ['freee Developers Hub - カテゴリ：QA', 'https://developers.freee.co.jp/feed/category/QA'],
  ['ブロッコリーのブログ', 'https://nihonbuson.hatenadiary.jp/feed'],
  ['Better Software Testing', 'https://better-software-testing.hatenablog.com/feed'],
  ['ぺぱち｜QAエンジニア', 'https://note.com/pepachi/rss'],
  ['ベリサーブ/VeriServe シリーズの新着イベント', 'https://veriserve-event.connpass.com/ja.atom'],
  ['honamin', 'https://note.com/honamin09/rss'],
  ['Hello, Quality World!', 'https://www.happyou.info/fs/gen.php?u=-18888665&p=860923639'],
  //ま
  ['まこっちゃん', 'https://note.com/mark_hillfield/rss'],
  //['マネーフォワード エンジニアブログ - テスト', 'https://moneyforward.com/engineers_blog/feed/?s=%E3%83%86%E3%82%B9%E3%83%88&submit=%E6%A4%9C%E7%B4%A2'],
  //や
  ['ゆふてっく。', 'https://yufutech.hatenablog.com/feed'],
  ['yoshitake_1201\'s diary', 'https://yoshitake-1201.hatenablog.com/feed'],
  ['yoya', 'https://note.com/yoya_k/rss'],
  //ら
  ['RAKUS Developers Blog | ラクス エンジニアブログ - テスト', 'https://tech-blog.rakus.co.jp/feed/category/%E3%83%86%E3%82%B9%E3%83%88'],
  ['Ranorex Blog - UIテスト自動化ツール Ranorex', 'https://ranorex.techmatrix.jp/blog/feed/'],
  //わ
  ['WACATE', 'https://wacate.jp/blog/feed/'],
  //['', ''],
]);
