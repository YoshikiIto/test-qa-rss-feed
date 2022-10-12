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

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  //あ
  //か
  ['記録用ブログ', 'https://mejiro8.hatenablog.com/feed'],
  //さ
  ['千里霧中', 'https://goyoki.hatenablog.com/feed'],
  ['Software Quality Topics.', 'https://swquality.jp/feed/'],
  //た
  ['テストする人。', 'https://underscore42rina.hatenablog.com/feed'],
  //な
  ['nemorineのブログ', 'https://nemorine.hateblo.jp/feed'],
]);
