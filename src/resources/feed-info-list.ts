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
  ['10ANTZ', 'https://developers.10antz.co.jp/feed'],
  ['207', 'https://tech.207-inc.com/feed'],
  ['ABEJA', 'https://tech-blog.abeja.asia/feed'],
  ['AI inside', 'https://note.com/aiinside_tech/rss'],
  ['AIREV', 'https://zenn.dev/airev/feed'],
  ['ANDPAD', 'https://tech.andpad.co.jp/feed'],
  ['Acroquest Technology', 'https://acro-engineer.hatenablog.com/feed'],
  ['Adways', 'https://blog.engineer.adways.net/feed'],
  ['Aiming', 'https://developer.aiming-inc.com/feed'],
  ['AppBrew', 'https://tech.appbrew.io/feed'],
  ['AsiaQuest', 'https://techblog.asia-quest.jp/rss.xml'],
  ['BASE', 'https://devblog.thebase.in/feed'],
  ['BFT名古屋', 'https://bftnagoya.hateblo.jp/feed'],
  ['BIGLOBE', 'https://style.biglobe.co.jp/feed/category/TechBlog'],
  ['BRANU', 'https://tech.branu.jp/feed'],
  ['Babel', 'https://dev.babel.jp/feed'],
  ['Basicinc', 'https://tech.basicinc.jp/feed'],
  ['Beatrust', 'https://tech.beatrust.com/feed'],
  ['BrainPad', 'https://blog.brainpad.co.jp/feed'],
  ['CADDi', 'https://caddi.tech/feed'],
  ['CARTA', 'https://techblog.cartaholdings.co.jp/feed'],
  ['CCCマーケティング', 'https://techblog.cccmk.co.jp/feed'],
  ['CData Software', 'https://www.cdatablog.jp/feed'],
  ['COOSY', 'https://coosy.co.jp/blog/category/system-develop/feed/'],
  ['CROOZ SHOPLIST', 'https://crooz.shoplist.com/blog-category/technology/feed'],
  ['CROOZ', 'https://croozblog.hatenablog.com/feed'],
  ['CauchyE', 'https://zenn.dev/cauchye/feed'],
  ['Cerevo', 'https://tech-blog.cerevo.com/feed'],
  ['Chatwork', 'https://creators-note.chatwork.com/feed'],
  ['Classi', 'https://tech.classi.jp/feed'],
  ['Colorful Palette', 'https://media.colorfulpalette.co.jp/m/m753f507dae79/rss'],
  ['Croooober', 'https://tech.croooober.co.jp/feed'],
  ['DMM', 'https://inside.dmm.com/feed'],
  ['DeNA SWET', 'https://swet.dena.com/feed'],
  ['DeNA', 'https://engineering.dena.com/blog/index.xml'],
  ['Dentsu Digital', 'https://note.com/dd_techblog/rss'],
  ['Diverse', 'https://developer.diverse-inc.com/feed'],
  ['ENECHANGE', 'https://tech.enechange.co.jp/feed'],
  ['Emotion Tech', 'https://tech.emotion-tech.co.jp/feed'],
  ['Eureka', 'https://medium.com/feed/eureka-engineering'],
  ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
  ['FiNC', 'https://medium.com/feed/finc-engineering'],
  ['Filot', 'https://filot-nextd2.hatenablog.com/feed'],
  ['Findy', 'https://findy-code.io/engineer-lab/feed/atom'],
  ['Flatt Security', 'https://blog.flatt.tech/feed'],
  ['Fusic', 'https://tech.fusic.co.jp/feed'],
  ['G-gen', 'https://blog.g-gen.co.jp/feed'],
  ['GA TECHNOLOGIES', 'https://tech.ga-tech.co.jp/feed'],
  ['GMOアドパートナーズ', 'https://techblog.gmo-ap.jp/feed/'],
  ['GMOインターネット', 'https://developers.gmo.jp/feed/'],
  ['GMOグローバルサイン・ホールディングス', 'https://tech.gmogshd.com/feed'],
  ['GMOペパボ', 'https://tech.pepabo.com/feed.xml'],
  ['GMOメディア', 'https://blog.gmo.media/feed/atom/'],
  ['GMOリサーチ', 'https://gmor-sys.com/feed'],
  ['GREE', 'https://labs.gree.jp/blog/feed/'],
  ['GameWith', 'https://tech.gamewith.co.jp/feed'],
  ['Goodpatch', 'https://goodpatch-tech.hatenablog.com/feed'],
  ['Google', 'https://developers-jp.googleblog.com/atom.xml'],
  ['GreenSnap', 'https://greensnap-tech.hatenablog.com/feed'],
  ['Grooves', 'https://tech.grooves.com/feed'],
  ['Gunosy', 'https://tech.gunosy.io/feed'],
  ['Gunosyデータ分析', 'https://data.gunosy.io/feed'],
  ['HERP', 'https://tech-hub.herp.co.jp/feed.xml'],
  ['HRBrain', 'https://times.hrbrain.co.jp/feed'],
  ['HiCustomer', 'https://tech.hicustomer.jp/index.xml'],
  ['HiTTO', 'https://product-blog.hitto.co.jp/feed'],
  ['HireRoo', 'https://tech.hireroo.io/feed'],
  ['IDCフロンティア', 'https://blog.idcf.jp/feed'],
  ['IIJ', 'https://eng-blog.iij.ad.jp/feed'],
  ['JBCC', 'https://jbcc-tech.hatenablog.com/feed'],
  ['JMDC', 'https://techblog.jmdc.co.jp/feed'],
  ['JTP', 'https://tech-blog.jtp.co.jp/feed'],
  ['JX通信社', 'https://tech.jxpress.net/feed'],
  ['KAIZEN PLATFORM', 'https://developer.kaizenplatform.com/feed'],
  ['KARAKURI', 'https://medium.com/feed/karakuri'],
  ['KDL', 'https://kdl-di.hatenablog.com/feed'],
  ['KLab DSAS', 'http://dsas.blog.klab.org/index.rdf'],
  ['KLab', 'https://www.klab.com/jp/assets/rss/rss_tech.xml'],
  ['Kyash', 'https://blog.kyash.co/feed'],
  ['LAPRAS', 'https://ai-lab.lapras.com/feed/'],
  ['LCL', 'https://techblog.lclco.com/feed'],
  ['LIFULL', 'https://www.lifull.blog/feed'],
  ['LIG', 'https://liginc.co.jp/technology/feed'],
  ['LINE', 'https://engineering.linecorp.com/ja/feed/'],
  ['LIVESENSE', 'https://made.livesense.co.jp/feed'],
  ['LayerX', 'https://tech.layerx.co.jp/feed'],
  ['Leaner', 'https://zenn.dev/leaner_tech/feed'],
  ['LegalForce', 'https://tech.legalforce.co.jp/feed'],
  ['Liquid', 'https://tech.liquid.bio/feed'],
  ['Lisa Technologies', 'https://zenn.dev/lisatech/feed'],
  ['M&Aクラウド', 'https://tech.macloud.jp/feed'],
  ['MNTSQ', 'https://tech.mntsq.co.jp/feed'],
  ['MUGENUP', 'https://mugenup-tech.hatenadiary.com/feed'],
  ['Magic Moment', 'https://zenn.dev/magicmoment/feed'],
  ['MicroAd', 'https://developers.microad.co.jp/feed'],
  ['Mirrativ', 'https://tech.mirrativ.stream/feed'],
  ['Money Forward Kessai', 'https://tech.mfkessai.co.jp/index.xml'],
  ['N.F.Laboratories', 'https://blog.nflabs.jp/feed'],
  ['NEMTUS', 'https://zenn.dev/nemtus/feed'],
  ['NHNテコラス', 'https://techblog.nhn-techorus.com/feed'],
  ['NRIネットコム', 'https://tech.nri-net.com/feed/category/Technology'],
  ['NTTコミュニケーションズ', 'https://engineers.ntt.com/feed'],
  ['NTTソフトウェアイノベーションセンタ ', 'https://medium.com/feed/nttlabs'],
  ['Nature', 'https://engineering.nature.global/feed'],
  ['NearMe', 'https://tech.nearme.jp/feed'],
  ['Nota', 'https://blog.notainc.com/feed'],
  ['OPEN8', 'https://open8tech.hatenablog.com/feed'],
  ['OPTiM', 'https://tech-blog.optim.co.jp/feed'],
  ['Open Reach Tech', 'https://zenn.dev/openreachtech/feed'],
  ['OpenWork', 'https://techblog.openwork.co.jp/feed'],
  ['PHONE APPLI', 'https://phoneappli.net/recruit/blog/atom.xml'],
  ['PLAID', 'https://tech.plaid.co.jp/rss/'],
  ['PR TIMES', 'https://developers.prtimes.jp/feed/'],
  ['Pentagon', 'https://blog.pentagon.tokyo/feed/'],
  ['Playground', 'https://tech.playground.style/feed/'],
  ['Polestar-ID', 'https://www.psid.co.jp/news/feed/'],
  ['Progate', 'https://tech.prog-8.com/feed'],
  ['QualiArts', 'https://technote.qualiarts.jp/rss.xml'],
  ['R&D', 'https://zenn.dev/randd/feed'],
  ['READYFOR', 'https://tech.readyfor.jp/feed'],
  ['RIT', 'https://rit-inc.hatenablog.com/feed'],
  ['ROBOT PAYMENT', 'https://tech.robotpayment.co.jp/feed'],
  ['ROXX', 'https://techblog.roxx.co.jp/feed'],
  ['Red Hat', 'https://rheb.hatenablog.com/feed'],
  ['Repro', 'https://tech.repro.io/feed'],
  ['Retail AI', 'https://note.com/retail_ai/rss'],
  ['Retty', 'https://engineer.retty.me/feed'],
  ['SCSK', 'https://blog.usize-tech.com/feed/'],
  ['SEGA', 'https://techblog.sega.jp/feed'],
  ['SO Technologies', 'https://developer.so-tech.co.jp/feed'],
  ['SOELU', 'https://engineering.soelu.com/feed'],
  ['Safie', 'https://engineers.safie.link/feed'],
  ['Salesforce', 'https://developer.salesforce.com/jpblogs/feed/'],
  ['Sansan', 'https://buildersbox.corp-sansan.com/feed'],
  ['Seeed', 'https://lab.seeed.co.jp/feed'],
  ['SmartBank', 'https://blog.smartbank.co.jp/feed'],
  ['SmartHR', 'https://tech.smarthr.jp/feed'],
  ['SmartNews', 'https://developer.smartnews.com/blog/feed'],
  ['SmartNewsメディア担当チーム', 'https://www.mediatechnology.jp/feed'],
  ['Speee', 'https://tech.speee.jp/feed'],
  ['Studyplus', 'https://tech.studyplus.co.jp/feed'],
  ['Supership', 'https://www.wantedly.com/stories/s/Supership/rss.xml'],
  ['Synamon', 'https://synamon.hatenablog.com/feed'],
  ['Sysdig', 'https://www.scsk.jp/sp/sysdig/rss.xml'],
  ['TANP', encodeURI('https://www.tanp-blog.com/feed/category/エンジニアブログ')],
  ['THECOO', 'https://note.com/thecoo_engineer/rss'],
  ['TVISION INSIGHTS', 'https://tech.tvisioninsights.co.jp/feed'],
  ['TeamSpirit', 'https://teamspirit.hatenablog.com/feed'],
  ['TechRacho', 'https://techracho.bpsinc.jp/feed'],
  ['TechTrain', 'https://zenn.dev/techtrain/feed'],
  ['Tier IV', 'https://tech.tier4.jp/feed'],
  ['Tokyo Otaku Mode', 'https://blog.otakumode.com/atom.xml'],
  ['UUUM', 'https://system.blog.uuum.jp/feed'],
  ['Ubie', 'https://zenn.dev/ubie/feed'],
  ['UnReact', 'https://zenn.dev/unreact/feed'],
  ['Unipos', 'https://fringeneer.hatenablog.com/feed'],
  ['Uzabase', 'https://tech.uzabase.com/feed'],
  ['VA Linux', 'https://valinux.hatenablog.com/feed'],
  ['Visional', 'https://engineering.visional.inc/blog/index.xml'],
  ['Voicy', 'https://medium.com/feed/voicy-engineering'],
  ['WASD', 'https://tech.wasd-inc.com/feed'],
  ['WESEEK', 'https://weseek.co.jp/tech/feed/'],
  ['Wantedly', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
  ['Wiz', 'https://tech.012grp.co.jp/feed'],
  ['YAZ', 'https://www.yaz.co.jp/feed'],
  ['Yahoo! JAPAN', 'https://techblog.yahoo.co.jp/atom.xml'],
  ['Yappli', 'https://tech.yappli.io/feed'],
  ['ZOZO', 'https://techblog.zozo.com/feed'],
  ['Zaim', 'https://blog.zaim.co.jp/rss'],
  ['Zeals', 'https://tech.zeals.co.jp/feed'],
  ['aumo', 'https://techblog.aumo.co.jp/feed'],
  ['auコマース＆ライフ', 'https://kcf-developers.hatenablog.jp/feed'],
  ['cloud.config', 'https://tech-blog.cloud-config.jp/feed/'],
  ['dely', 'https://tech.dely.jp/feed'],
  ['dip', 'https://developer.dip-net.co.jp/feed'],
  ['estie', 'https://inside.estie.co.jp/feed'],
  ['for Startups', 'https://tech.forstartups.com/feed'],
  ['freee', 'https://developers.freee.co.jp/feed'],
  ['gaudiy', 'https://techblog.gaudiy.com/feed'],
  ['i-Vinci', 'https://www.i-vinci.co.jp/techblog/feed'],
  ['justInCaseTechnologies', 'https://jict.hatenablog.com/feed'],
  ['mikan', 'https://mikan-tech.hatenablog.jp/feed'],
  ['nana music', 'https://tech.nana-music.com/feed'],
  ['no plan', 'https://zenn.dev/no_plan/feed'],
  ['paiza', 'https://paiza.hatenablog.com/feed'],
  ['stand.fm', 'https://note.com/standfm_company/rss'],
  ['var', 'https://zenn.dev/var/feed'],
  ['vivit', 'https://vivit.hatenablog.com/feed'],
  ['あした', 'https://engineer.ashita-team.com/feed'],
  ['あすけん', 'https://tech.asken.inc/feed'],
  ['くらしのマーケット', 'https://tech.curama.jp/feed'],
  ['ぐるなび', 'https://developers.gnavi.co.jp/feed'],
  ['さくら', 'https://knowledge.sakura.ad.jp/rss/'],
  ['はてな', 'https://developer.hatenastaff.com/feed'],
  ['みてね', 'https://team-blog.mitene.us/feed'],
  ['アイキューブドシステムズ', 'https://tech.i3-systems.com/feed'],
  ['アイスタイル', 'https://techblog.istyle.co.jp/feed'],
  ['アカツキ', 'https://hackerslab.aktsk.jp/feed'],
  ['アクトインディ', 'https://tech.actindi.net/feed'],
  ['アスクル', 'https://tech.askul.co.jp/feed'],
  ['アスタミューゼ', 'https://lab.astamuse.co.jp/feed'],
  ['アソビュー', 'https://medium.com/feed/asoview-engineering'],
  ['アットホーム', 'https://dblog.athome.co.jp/feed'],
  ['アトラエ', 'https://atraetech.hatenablog.com/feed'],
  ['アプトポッド', 'https://tech.aptpod.co.jp/feed'],
  ['アプリボット', 'https://blog.applibot.co.jp/feed'],
  ['アメリエフ', 'https://staffblog.amelieff.jp/feed'],
  ['アルダグラム', 'https://zenn.dev/aldagram/feed'],
  ['イノベーター・ジャパン', 'https://tech.innovator.jp.net/feed'],
  ['ウィルゲート', 'https://tech.willgate.co.jp/feed'],
  ['ウェイブ', 'https://tech.wwwave.jp/feed'],
  ['ウエディングパーク', 'https://engineers.weddingpark.co.jp/feed'],
  ['エキサイト', 'https://tech.excite.co.jp/feed'],
  ['エクサウィザーズ', 'https://techblog.exawizards.com/feed'],
  ['エス・エム・エス', 'https://tech.bm-sms.co.jp/feed'],
  ['エニグモ', 'https://tech.enigmo.co.jp/feed'],
  ['エブリー', 'https://tech.every.tv/feed'],
  ['エムオーテックス', 'https://tech.motex.co.jp/feed'],
  ['エムスリー', 'https://www.m3tech.blog/feed'],
  ['エムティーアイ', 'https://tech.mti.co.jp/feed'],
  ['エーピーコミュニケーションズ', 'https://techblog.ap-com.co.jp/feed'],
  ['オルターブース', 'https://aadojo.alterbooth.com/feed'],
  ['オールアバウト', 'https://allabout-tech.hatenablog.com/feed'],
  ['カケハシ', 'https://kakehashi-dev.hatenablog.com/feed'],
  ['カミナシ', 'https://kaminashi-developer.hatenablog.jp/feed'],
  ['カヤック', 'https://techblog.kayac.com/feed'],
  ['カンムテック', 'https://tech.kanmu.co.jp/feed'],
  ['キカガク', 'https://blog.kikagaku.co.jp/feed'],
  ['キッチハイク', 'https://tech.kitchhike.com/feed'],
  ['クイック', 'https://aimstogeek.hatenablog.com/feed'],
  ['クックパッド', 'https://techlife.cookpad.com/feed'],
  ['クラウドエース', 'https://cloud-ace.jp/tech_blog/feed'],
  ['クラウドワークス', 'https://engineer.crowdworks.jp/feed'],
  ['クラシコム', 'https://note.com/kurashicom_tech/rss'],
  ['コインチェック', 'https://tech.coincheck.blog/feed'],
  ['ココナラ', 'https://yomoyamablog.coconala.co.jp/feed'],
  ['ココネ', 'https://engineering.cocone.io/feed/'],
  ['コネヒト', 'https://tech.connehito.com/feed'],
  ['コミューン', 'https://tech.commmune.jp/feed'],
  ['コロプラ', 'https://blog.colopl.dev/feed'],
  ['サイオステクノロジー', 'https://tech-lab.sios.jp/feed'],
  ['サイバーエージェント', 'https://developers.cyberagent.co.jp/blog/feed/'],
  ['サイボウズ', 'https://blog.cybozu.io/feed'],
  ['シタテル', 'https://tech-blog.sitateru.com/feeds/posts/default'],
  ['シナジーマーケティング', 'https://techscore.hatenablog.com/feed'],
  ['シナプス', 'https://tech.synapse.jp/feed'],
  ['シビラ', 'https://zenn.dev/sivira/feed'],
  ['シー・エス・エス', 'https://blog.css-net.co.jp/feed'],
  ['ジモティー', 'https://jmty-tech.hatenablog.com/feed'],
  ['ジークレスト', 'https://blog.gcrest.com/feed'],
  ['スタディサプリ', 'https://blog.studysapuri.jp/feed'],
  ['スタディスト', 'https://studist.tech/feed'],
  ['スタートアップテクノロジー', 'https://startup-technology.com/feed'],
  ['スターフェスティバル', 'https://zenn.dev/stafes/feed'],
  ['スペースマーケット', 'https://blog.spacemarket.com/category/code/feed/'],
  ['スマートキャンプ', 'https://tech.smartcamp.co.jp/feed'],
  ['スマートスタイル', 'https://blog.s-style.co.jp/feed/'],
  ['セキュアスカイ･テクノロジー', 'https://techblog.securesky-tech.com/feed'],
  ['ゼネット', 'https://media.zenet-web.co.jp/feed'],
  ['タイマーズ', 'https://techblog.timers-inc.com/feed'],
  ['タイミー', 'https://tech.timee.co.jp/feed'],
  ['テコテック', 'https://tec.tecotec.co.jp/feed'],
  ['テックタッチ', 'https://tech.techtouch.jp/feed'],
  ['テックファーム', 'https://www.techfirm.co.jp/blog/?feed=rss2'],
  ['デザインワン・ジャパン', 'https://tech.designone.jp/feed'],
  ['デザミス', 'https://zenn.dev/u_motion/feed'],
  ['トップゲート', 'https://www.topgate.co.jp/category/engineer/feed'],
  ['トドケール', 'https://zenn.dev/todoker/feed'],
  ['トライステージ', 'https://blog.ddm.tri-stage.jp/feed/'],
  ['トラストバンク', 'https://tech.trustbank.co.jp/feed'],
  ['トラベルブック', 'https://tech.travelbook.co.jp/index.xml'],
  ['トラーナ', 'https://tech.torana.co.jp/feed'],
  ['トレタ', 'https://tech.toreta.in/feed'],
  ['ドクターズプライム', encodeURI('https://blog.drsprime.com/feed/category/エンジニアリング')],
  ['ドコカデ', 'https://zenn.dev/dokokade/feed'],
  ['ドリコム', 'https://tech.drecom.co.jp/feed/'],
  ['ドワンゴ', 'https://dwango.github.io/index.xml'],
  ['ドワンゴ教育サービス', 'https://blog.nnn.dev/feed'],
  ['ニフクラ', 'https://blog.pfs.nifcloud.com/feed'],
  ['ヌーラボ', 'https://nulab.com/ja/blog/categories/techblog/feed/'],
  ['ネフロック', 'https://blog.nefrock.com/feed'],
  ['ハウテレビジョン', 'https://blog.howtelevision.co.jp/feed'],
  ['ハンズラボ', 'https://www.hands-lab.com/feed'],
  ['ハートビーツ', 'https://heartbeats.jp/hbblog/atom.xml'],
  ['バイセル', 'https://tech.buysell-technologies.com/feed'],
  ['バレットグループ', 'https://blog.bltinc.co.jp/feed'],
  ['ヒストリア', 'https://historia.co.jp/feed'],
  ['ビザスク', 'https://tech.visasq.com/feed'],
  ['ビットバンク', 'https://tech.bitbank.cc/rss/'],
  ['ピクシブ', 'https://inside.pixiv.blog/feed'],
  ['ピクスタ', 'https://texta.pixta.jp/feed'],
  ['ピリカ', 'https://devblog.pirika.org/feed'],
  ['ファブリカ', 'https://www.fabrica-com.co.jp/techblog/feed/'],
  ['フィードフォース', 'https://developer.feedforce.jp/feed'],
  ['フェンリル', 'https://engineers.fenrir-inc.com/feed'],
  ['フォトシンス', 'https://akerun.hateblo.jp/feed'],
  ['フォージビジョン', 'https://techblog.forgevision.com/feed'],
  ['フクロウラボ', 'https://developers.fukurou-labo.co.jp/feed/'],
  ['フューチャー', 'https://future-architect.github.io/atom.xml'],
  ['フリュー', 'https://tech.furyu.jp/index.xml'],
  ['ブックウォーカー', 'https://developers.bookwalker.jp/feed'],
  ['プラミナス', 'https://zenn.dev/plminus/feed'],
  ['プレックス', 'https://product.plex.co.jp/feed'],
  ['ヘイ', 'https://tech.hey.jp/feed'],
  ['ペライチ', 'https://zenn.dev/peraichi/feed'],
  ['ホワイトプラス', 'https://blog.wh-plus.co.jp/feed'],
  ['マクロミル', 'https://techblog.macromill.com/feed'],
  ['マナリンク', 'https://zenn.dev/manalink/feed'],
  ['マネックス', 'https://blog.tech-monex.com/feed'],
  ['マネーフォワード ', 'https://moneyforward.com/engineers_blog/feed/'],
  ['マンハッタンコード', 'https://zenn.dev/manhattan_code/feed'],
  ['ミクシィ', 'https://mixi-developers.mixi.co.jp/feed'],
  ['メディアエンジン', 'https://zenn.dev/media_engine/feed'],
  ['メディアドゥ', 'https://techdo.mediado.jp/feed'],
  ['メドピア', 'https://tech.medpeer.co.jp/feed'],
  ['メドレー', 'https://developer.medley.jp/feed'],
  ['メルカリ', 'https://engineering.mercari.com/blog/feed.xml/'],
  ['メンテモ', 'https://engineering.mentemo.com/feed'],
  ['モノグサ', 'https://tech.monoxer.com/feed'],
  ['モノタロウ', 'https://tech-blog.monotaro.com/feed'],
  ['モバイルファクトリー', 'https://tech.mobilefactory.jp/feed'],
  ['モルフォ', 'https://techblog.morphoinc.com/feed'],
  ['ユカシカド', 'https://note.com/tech_yukashikado/rss'],
  ['ユニファ', 'https://tech.unifa-e.com/feed'],
  ['ライトハウス', 'https://developers.lighthouse-frontier.tech/feed'],
  ['ラクス', 'https://tech-blog.rakus.co.jp/feed'],
  ['ラクスル', 'https://tech.raksul.com/feed'],
  ['ラクーン', 'https://techblog.raccoon.ne.jp/feed'],
  ['ラック', 'https://devblog.lac.co.jp/feed'],
  ['ランサーズ', 'https://engineer.blog.lancers.jp/feed/'],
  ['リクルートコミュニケーションズ', 'https://blog.recruit.co.jp/rco/feed.xml'],
  ['リクルートテクノロジーズ', 'https://blog.recruit.co.jp/rtc/feed/'],
  ['リクルートマーケティングパートナーズ', 'https://tech.recruit-mp.co.jp/feed/'],
  ['リクルートライフスタイル', 'https://engineer.recruit-lifestyle.co.jp/techblog/feed.xml'],
  ['リサーチ・アンド・イノベーション', 'https://rni-dev.hatenablog.com/feed'],
  ['リゾーム', 'https://tech.rhizome-e.com/feed'],
  ['リンカーズ', 'https://linkers.hatenablog.com/feed'],
  ['レアジョブ', 'https://rarejob-tech-dept.hatenablog.com/feed'],
  ['レアゾン', 'https://techblog.reazon.jp/feed'],
  ['レイ・フロンティア', 'https://tech-blog.rei-frontier.jp/feed'],
  ['レコチョク', 'https://techblog.recochoku.jp/feed/atom'],
  ['レバレジーズ', 'https://tech.leverages.jp/feed'],
  ['レンジャーシステムズ', 'https://ranger-systems.co.jp/blog-engineer/feed'],
  ['レンティオ', 'https://zenn.dev/rentio/feed'],
  ['ロコガイド', 'https://techblog.locoguide.co.jp/feed'],
  ['ロジカル・アーツ', 'https://blog.logical.co.jp/feed'],
  ['ロジクラ', 'https://blog.logikura.dev/feed'],
  ['ワンダープラネット', 'https://developers.wonderpla.net/feed'],
  ['富士通クラウドテクノロジーズ', 'https://tech.fjct.fujitsu.com/feed'],
  ['富士通研究所', 'https://blog.fltech.dev/feed'],
  ['弁護士ドットコム', 'https://creators.bengo4.com/feed'],
  ['弥生', 'https://tech-blog.yayoi-kk.co.jp/feed'],
  ['日本仮想化技術', 'https://tech.virtualtech.jp/feed'],
  ['日販テクシード', 'https://www.techceed-inc.com/engineer_blog/feed/'],
  ['朝日ネット', 'https://techblog.asahi-net.co.jp/feed'],
  ['朝日新聞社', 'https://note.com/asahi_ictrad/rss'],
  ['楽天コマース', encodeURI('https://commerce-engineer.rakuten.careers/feed/category/テック')],
  ['永和システムマネジメント', 'https://blog.agile.esm.co.jp/feed'],
  ['現場サポート', 'https://support.genbasupport.com/techblog/feed/'],
  ['虎の穴', 'https://toranoana-lab.hatenablog.com/feed'],
  ['遊舎工房', 'https://blog.yushakobo.jp/feed'],
  ['電通国際情報サービス', 'https://tech.isid.co.jp/feed'],
  ['食べチョク', 'https://tech.tabechoku.com/feed'],
  ['食べログ', 'https://note.com/tabelog_frontend/rss'],
]);

/**
 * その他候補
 *
 * パースエラー修正
 * ['Qiita', 'https://zine.qiita.com/'],
 *
 * 日本語以外が交じるのを解消できたら入れたい
 * ['クラスメソッド', 'https://dev.classmethod.jp/feed'],
 *
 * 403 Forbidden
 * ['Cygames', 'https://tech.cygames.co.jp/feed/'],
 *
 * 404
 * ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.json'],
 *
 * pubDate なし
 * ['リクルート', 'https://engineers.recruit-jinji.jp/techblog/feed/']
 *
 * フィードなし。スクレイピング？
 * https://lab.mo-t.com/blog
 * https://tech-blog.sweeep.ai/
 * https://minedia-engineer-hub-minedia.vercel.app/
 */
