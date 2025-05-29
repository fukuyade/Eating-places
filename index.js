//多言語データを定義
const translations = {
  ja: {
    "nav.home": "ホーム",
    "nav.lunch": "ランチ",
    "nav.dinner": "ディナー",
    "search.placeholder": "キーワード",
    "search.button": "検索",
    "search.noResults": "該当する結果は見つかりませんでした。",
    "hero.title": "オフィスの近くで食事ができる場所を探してみよう!",
    "hero.description":
      "当社のウェブサイトへようこそ。ここでは、あなたの会社の近くにあるお食事処を見ることができます。<br>ランチをどこで買おうか迷った時や、仕事帰りにどこかへ食べに行きたい時にご利用ください。<br>お気に入りのレストランが見つかることを祈っています。",
    "section.find": "お店を探してみよう！",
    "section.lunch": "ランチ",
    "section.dinner": "ディナー",
  },
};

let currentLang = "en"; //初期は英語

function changeLanguage(lang) {
  currentLang = lang; // グローバル変数を更新
  const t = translations[currentLang] || {};

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    // 元のHTMLを保存（英語として使用）
    if (!el.hasAttribute("data-default")) {
      el.setAttribute("data-default", el.innerHTML);
    }

    if (lang === "ja" && t[key]) {
      el.innerHTML = t[key]; // 日本語だけ上書き
    } else {
      el.innerHTML = el.getAttribute("data-default"); // 英語に戻す
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");

    if (!el.hasAttribute("data-default")) {
      el.setAttribute("data-default", el.getAttribute("placeholder"));
    }

    if (lang === "ja" && t[key]) {
      el.setAttribute("placeholder", t[key]);
    } else {
      el.setAttribute("placeholder", el.getAttribute("data-default"));
    }
  });

  // 言語表示のラベル切り替え
  document.getElementById("languageToggle").textContent =
    lang === "ja" ? "日本語" : "English";

  createShopCards(); // 言語切り替え後に再描画
}
//
//
//
//お店紹介カードテンプレート
const shopData = [
  {
    type: "lunch",
    imgSrc: "./image/香港居酒屋_龍記.jpg",
    title: {
      en: "Hong Kong Izakaya Ryuki",
      ja: "香港居酒屋 龍記",
    },
    description: {
      en: "Authentic Chinese restaurant.<br>Everything on the restaurant's menu is available for takeout.",
      ja: "本格中華レストラン。<br>メニューはすべてテイクアウト可能です。",
    },
    words: [
      "中華料理",
      "中華",
      "ちゅうか",
      "ボリューム満点",
      "ボリューム",
      "わいわい",
      "にぎやか",
      "居酒屋",
      "いざかや",
      "麻婆豆腐",
      "青椒肉絲",
      "チャーハン",
      "テイクアウト",
      "Chinese cuisine",
      "Chinese",
      "hearty portions",
      "hearty",
      "lively",
      "bustling",
      "izakaya",
      "mapo tofu",
      "green pepper steak",
      "fried rice",
      "Takeout",
    ],
    viewUrl: "https://tabelog.com/tokyo/A1314/A131402/13291723/",
    mapUrl: "https://maps.app.goo.gl/myq81nNRryCjneNW9",
    time: "1 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/カリーアンダーソン.jpg",
    title: {
      en: "Curry Underson",
      ja: "カリーアンダーソン",
    },
    description: {
      en: "A creative curry restaurant with a homey atmosphere.<br>Takeout and delivery are available.",
      ja: "アットホームな雰囲気の創作カレー店。<br>テイクアウトやデリバリーも可能。",
    },
    words: [
      "カレー",
      "スパイス",
      "本格",
      "エスニック",
      "かれー",
      "カリー",
      "テイクアウト",
      "Curry",
      "Spices",
      "Authentic",
      "Ethnic",
      "Takeout",
    ],
    viewUrl: "https://curry-underson.com/",
    mapUrl: "https://maps.app.goo.gl/1WUAPK2eGykF2tKg7",
    time: "4 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/蕎麦切_砥喜和.jpg",
    title: {
      en: "Soba Kiri Tokiwa",
      ja: "蕎麦切 砥喜和",
    },
    description: {
      en: "You can enjoy soba noodles and tempura of seasonal ingredients in a relaxed atmosphere.",
      ja: "落ち着いた雰囲気の中で、旬の食材を使った蕎麦や天ぷらを楽しめる。",
    },
    words: [
      "蕎麦",
      "そば",
      "和食",
      "日本食",
      "天ぷら",
      "天麩羅",
      "落ち着いた",
      "ゆっくり",
      "Soba",
      "Japanese food",
      "Calm",
      "Relaxed",
      "Tempura",
    ],
    viewUrl: "https://tabelog.com/tokyo/A1314/A131401/13145880/",
    mapUrl: "https://maps.app.goo.gl/XBXa4rnFEz6tvkD86",
    time: "13 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/ゼロワンカレーA.o.D.jpg",
    title: {
      en: "Zero One Curry A.o.D",
      ja: "ゼロワンカレーA.o.D",
    },
    description: {
      en: "This Indian curry restaurant has been selected as one of the 100 best curry restaurants in Curry TOKYO.",
      ja: "カレーTOKYOでカレー100選に選ばれたインドカレー店。",
    },
    words: [
      "カレー",
      "南インド料理",
      "スパイス",
      "人気",
      "カリー",
      "かれー",
      "Curry",
      "South Indian cuisine",
      "Spices",
      "Popular",
    ],
    viewUrl: "https://zeroonecurry.com/",
    mapUrl: "https://maps.app.goo.gl/1zFLfepG65Ut9tA66",
    time: "5 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/ほっかほっか亭_三田3丁目.jpg",
    title: {
      en: "Hokkahokka-tei Mita 3-chome",
      ja: "ほっかほっか亭 三田3丁目",
    },
    description: {
      en: "This is a reasonably priced bento shop.<br>You can eat various kinds of bento such as fried food, stir-fried food, grilled fish, etc.",
      ja: "お手頃な値段のお弁当屋です。揚げ物，炒め物，焼き魚などの様々な種類のお弁当を食べることができます。",
    },
    words: [
      "手軽",
      "お弁当",
      "揚げ物",
      "お手頃",
      "焼き魚",
      "唐揚",
      "からあげ",
      "テイクアウト",
      "Casual",
      "Bento",
      "Fried food",
      "Affordable",
      "Grilled fish",
      "Fried chicken",
      "Takeout",
    ],
    viewUrl: "https://www.hokkahokka-tei.jp/",
    mapUrl: "https://maps.app.goo.gl/PCGkKm7oHjTTy4378",
    time: "6 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/旬八弁当店.jpg",
    title: {
      en: "Shunpachi Bento Shop",
      ja: "旬八弁当店",
    },
    description: {
      en: "This is a lunch box shop of a grocery store.<br>You can eat bento boxes filled with colorful seasonal vegetables.",
      ja: "八百屋のお弁当屋さん。色とりどりの旬の野菜が入ったお弁当が食べられます",
    },
    words: [
      "お弁当",
      "健康的",
      "野菜",
      "手軽",
      "テイクアウト",
      "からあげ",
      "焼き魚",
      "Bento",
      "Healthy",
      "Vegetables",
      "Casual",
      "Takeout",
      "Fried chicken",
      "Grilled fish",
    ],
    viewUrl: "https://www.shunpachi-bento.com/",
    mapUrl: "https://maps.app.goo.gl/wuNYzF1FaKwaeZCB7",
    time: "5 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/やっとこ_三田店.jpg",
    title: {
      en: "Yattoko Mita Branch",
      ja: "やっとこ 三田店",
    },
    description: {
      en: "This is a ramen and tsukemen restaurant with a wide variety of ramen and tsukemen.<br>Recommended for a casual, quick meal.",
      ja: "バラエティに富んだラーメンとつけ麺の店。気軽にサクッと食べたい時にオススメ。",
    },
    words: [
      "ラーメン",
      "手軽",
      "つけ麺",
      "居酒屋",
      "ボリューム",
      "Ramen",
      "Casual",
      "Tsukemen",
      "Izakaya",
      "Hearty",
    ],
    viewUrl: "https://tabelog.com/tokyo/A1314/A131402/13158832/",
    mapUrl: "https://maps.app.goo.gl/bf8Znqs4abGQMsA977",
    time: "6 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/PIZZA_SALAVATORE_CUOMO_白金.jpg",
    title: {
      en: "PIZZA SALAVATORE CUOMO Shirokane",
      ja: "PIZZA SALAVATORE CUOMO 白金",
    },
    description: {
      en: "This is a pizza restaurant that bakes pizza in a special oven.<br />A wide variety of pastas, appetizers, and desserts are also available.",
      ja: "特製の窯で焼きあげてくれるピザのお店です パスタや前菜、デザートも豊富です",
    },
    words: [
      "ピザ",
      "本格",
      "ゆったり",
      "団体",
      "イタリアン",
      "デリバリー",
      "Pizza",
      "Authentic",
      "Relaxed",
      "Group",
      "Italian",
      "Delivery",
    ],
    viewUrl: "https://www.salvatore.jp/restaurant/shirokane/",
    mapUrl: "https://maps.app.goo.gl/tC6w76q3vvPQ4Qta7",
    time: "17 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/和食ダイニング_糸_ito.webp",
    title: {
      en: "Japanese Dining Ito",
      ja: "和食ダイニング 糸 ito",
    },
    description: {
      en: "Japanese cuisine with sake and fish.<br />You can enjoy fresh fish dishes and a wide variety of sake. Please visit us for business entertainment with individual portions of dishes.",
      ja: "日本酒と魚の和食のお店です。新鮮な魚料理と豊富なお酒を楽しめます。個別盛りの料理で接待などにもぜひ。",
    },
    words: [
      "魚",
      "居酒屋",
      "和食",
      "接待",
      "個室",
      "ゆっくり",
      "すっぽん",
      "Fish",
      "Izakaya",
      "Japanese cuisine",
      "Business entertainment",
      "Private room",
      "Relaxed",
      "Soft-shelled turtle",
    ],
    viewUrl: "https://itohen-official.com/",
    mapUrl: "https://maps.app.goo.gl/HbzmCQu7EcAyXWJ77",
    time: "9 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/焼き鳥屋_衣袋屋.jpg",
    title: {
      en: "Yakitori Shop Kinutsuboya",
      ja: "焼き鳥屋 衣袋屋",
    },
    description: {
      en: "This yakitori restaurant also offers a wide selection of rare parts.<br /> Enjoy yakitori and drinks in a relaxed bar-like atmosphere.",
      ja: "希少部位も取りそろえた焼き鳥屋です。バーのような落ち着いた雰囲気で焼き鳥とお酒を楽しむことができます",
    },
    words: [
      "焼き鳥",
      "焼鳥",
      "やきとり",
      "居酒屋",
      "ゆっくり",
      "すき焼き",
      "Yakitori",
      "Izakaya",
      "Relaxed",
      "Sukiyaki",
    ],
    viewUrl: "https://tabelog.com/tokyo/A1314/A131402/13302050/",
    mapUrl: "https://maps.app.goo.gl/hfwYnC8E4jxEiu9b9",
    time: "8 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/芝の鳥一代.jpg",
    title: {
      en: "Shiba no Tori Ichidai",
      ja: "芝の鳥一代",
    },
    description: {
      en: "This is a restaurant where you can enjoy mizutaki, a dish cooked in a steady simmer for 10 hours.<br />Large banquets of up to 65 people can also be held.",
      ja: "10時間コツコツ煮込んだ水炊きが食べられるお店です。65人までの大人数での宴会もできます",
    },
    words: [
      "焼鳥",
      "やきとり",
      "水炊き",
      "団体",
      "接待",
      "魚",
      "鍋料理",
      "Yakitori",
      "Mizutaki",
      "Group",
      "Business entertainment",
      "Fish",
      "Hot pot cuisine",
    ],
    viewUrl: "https://ga0r308.gorp.jp/",
    mapUrl: "https://maps.app.goo.gl/PD3h7ppuxQhQ74RN6",
    time: "20 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/恵比寿餃子.jpg",
    title: {
      en: "Ebisu Gyoza Taihoki Shiba Daimon",
      ja: "恵比寿餃子 大豊記 芝大門",
    },
    description: {
      en: "A Chinese restaurant with a focus on dumplings.<br />A wide variety of dishes at reasonable prices can be enjoyed with alcohol.",
      ja: "餃子を中心にした中華料理のお店です。お手軽な値段の豊富な種類の料理がお酒と楽しめます",
    },
    words: [
      "餃子",
      "ぎょうざ",
      "居酒屋",
      "中華",
      "中華料理",
      "団体",
      "にぎやか",
      "Gyoza",
      "Izakaya",
      "Chinese",
      "Chinese cuisine",
      "Group",
      "Lively",
    ],
    viewUrl: "https://tabelog.com/tokyo/A1314/A131401/13233416/",
    mapUrl: "https://maps.app.goo.gl/9nvVB5Xs1gC1p3EP7",
    time: "20 mins",
  },
];

//
//
//
//実際にHTML内にカードを追加する関数
function createShopCards() {
  const lunchContainer = document.getElementById("lunchContainer");
  const dinnerContainer = document.getElementById("dinnerContainer");

  lunchContainer.innerHTML = "";
  dinnerContainer.innerHTML = "";

  //全てのお店のデータを1つずつ取り出して処理する
  shopData.forEach((shop) => {
    //幅制限をかける部分を配列にする
    const limitedTitles = [
      "ゼロワンカレーA.o.D",
      "ほっかほっか亭 三田3丁目",
      "旬八弁当店",
    ];
    //時間によって表記切り替えのための変数
    const isFar = parseInt(shop.time) >= 10;
    const farIcon = isFar ? "directions_run" : "directions_walk";

    //カードのHTMLをテンプレートリテラルで作成
    const cardHTML = `
  <div class="col d-flex">
    <div class="card shadow-sm flex-fill d-flex flex-column">
      <img src="${shop.imgSrc}" class="bd-placeholder-img card-img-top ${
      limitedTitles.includes(shop.title) ? "limited-width" : ""
    }" alt="${shop.title[currentLang]}" width="100%" height="225" />
      <p style="margin: 1em 0 1em 1em; color: orange">${
        shop.title[currentLang]
      }</p>
      <div class="card-body d-flex flex-column">
        <p class="card-text">${shop.description[currentLang]}</p>

        <!-- フッター部を下に固定 -->
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="${
              shop.viewUrl
            }" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
            <a href="${
              shop.mapUrl
            }" target="_blank" class="btn btn-sm btn-outline-secondary">Map</a>
          </div>
          <div class="d-flex align-items-center text-body-secondary gap-1">
          <span class="material-symbols-outlined">${farIcon}</span>
          <small class="text-body-secondary">${shop.time}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

    //typeの値に応じて分けて追加
    if (shop.type === "lunch") {
      lunchContainer.insertAdjacentHTML("beforeend", cardHTML);
    } else if (shop.type === "dinner") {
      dinnerContainer.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

// ページ読み込み後にイベントリスナーを設定
document.addEventListener("DOMContentLoaded", function () {
  createShopCards(); // ← これを追加！
  //検索入力欄(<input id ="serchInput">)を取得して、serchInputという変数にいれる
  const searchInput = document.getElementById("searchInput");

  // Enterキー押下で検索実行
  //入力欄でキーボードのキーが押されたときのイベントを監視
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
});

//全角英数字を半角に変換する関数
function toHalfWidth(str) {
  return str
    .replace(/[！-～]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
    })
    .replace(/　/g, " "); // 全角スペースも半角スペースに
}

//
//
//
//検索機能用
function performSearch() {
  // noResultsを最初に取得
  const noResults = document.getElementById("noResults");

  //検索キーワードを取得して小文字に変換
  let keyword = document
    .getElementById("searchInput")
    .value //入力欄から文字列を取得し、小文字に変換toLowerCase
    .toLowerCase()
    //前後の余白を削除
    .trim();
  keyword = toHalfWidth(keyword); // 半角に統一

  const lunchContainer = document.getElementById("lunchContainer");
  const dinnerContainer = document.getElementById("dinnerContainer");

  lunchContainer.innerHTML = "";
  dinnerContainer.innerHTML = "";

  //.cardというクラスを持つ要素を全て取得(検索対象)
  //ヒットしたカードがあるかどうかのフラグ
  let hasResults = false;

  //各capeごとに繰り返す
  shopData.forEach((shop) => {
    // shop.wordsが未定義なら空配列を扱う
    const words = shop.words || [];
    const normalizedWords = words.map((w) => toHalfWidth(w.toLowerCase()));

    // words配列に検索キーワードが含まれているかを判定（部分一致ではなく完全一致）
    if (normalizedWords.some((w) => w.includes(keyword))) {
      hasResults = true;

      const limitedTitles = [
        "ゼロワンカレーA.o.D",
        "ほっかほっか亭 三田3丁目",
        "旬八弁当店",
      ];

      const cardHTML = `
        <div class="col d-flex">
          <div class="card shadow-sm flex-fill d-flex flex-column">
            <img src="${shop.imgSrc}" class="bd-placeholder-img card-img-top ${
        limitedTitles.includes(shop.title) ? "limited-width" : ""
      }" alt="${shop.title[currentLang]}" width="100%" height="225" />
            <p style="margin: 1em 0 1em 1em; color: orange">${
              shop.title[currentLang]
            }</p>
            <div class="card-body d-flex flex-column">
              <p class="card-text">${shop.description[currentLang]}</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="${
                    shop.viewUrl
                  }" target="_blank" class="btn btn-sm btn-outline-secondary">View</a>
                  <a href="${
                    shop.mapUrl
                  }" target="_blank" class="btn btn-sm btn-outline-secondary">Map</a>
                </div>
                <small class="text-body-secondary">${shop.time}</small>
              </div>
            </div>
          </div>
        </div>
      `;

      if (shop.type === "lunch") {
        lunchContainer.insertAdjacentHTML("beforeend", cardHTML);
      } else if (shop.type === "dinner") {
        dinnerContainer.insertAdjacentHTML("beforeend", cardHTML);
      }
    }
  });

  //noResuluts メッセージ要素を取得
  noResults.style.display = hasResults ? "none" : "block";

  //検索結果がゼロのとき「該当なしメッセージ」が画面内に見えるようにスムーズスクロールで移動
  if (!hasResults) {
    noResults.scrollIntoView({ behavior: "smooth" });
  }
}

//最上部に戻すボタン用
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");

  // スクロール位置が200pxを超えたらボタンを表示
  if (
    document.body.scrollTop > 200 || // Safari用
    document.documentElement.scrollTop > 200 // Chrome, Firefox, Edgeなど
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none"; // 超えてなければ非表示
  }
};
// トップにスムーズに戻る関数
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // スムーズなアニメーション
  });
}
