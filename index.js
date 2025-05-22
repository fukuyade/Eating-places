//お店紹介カードテンプレート
const shopData = [
  {
    type: "lunch",
    imgSrc: "./image/香港居酒屋_龍記.jpg",
    title: "香港居酒屋_龍記",
    //本格中華レストラン。メニューはすべてテイクアウト可能
    description:
      "Authentic Chinese restaurant.<br>Everything on the restaurant's menu is available fortakeout.",
    viewUrl: "https://tabelog.com/tokyo/A1314/A131402/13291723/",
    mapUrl: "https://maps.app.goo.gl/myq81nNRryCjneNW9",
    time: "1 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/カリーアンダーソン.jpg",
    title: "カリーアンダーソン",
    //アットホームな雰囲気の創作カレー店。テイクアウトやデリバリーも可能。
    description:
      "A creative curry restaurant with a homey atmosphere.<br>Takeout and delivery are available.",
    viewUrl: "https://curry-underson.com/",
    mapUrl: "https://maps.app.goo.gl/1WUAPK2eGykF2tKg7",
    time: "4 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/蕎麦切_砥喜和.jpg",
    title: "蕎麦切 砥喜和",
    //落ち着いた雰囲気の中で、旬の食材を使った蕎麦や天ぷらを楽しめる。
    description:
      "You can enjoy soba noodles and tempura of seasonal ingredients in a relaxed atmosphere.",
    viewUrl: "https://tabelog.com/tokyo/A1314/A131401/13145880/",
    mapUrl: "https://maps.app.goo.gl/XBXa4rnFEz6tvkD86",
    time: "13 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/ゼロワンカレーA.o.D.jpg",
    title: "ゼロワンカレーA.o.D",
    //カレーTOKYOでカレー100選に選ばれたインドカレー店。
    description:
      "This Indian curry restaurant has been selected as one of the 100 best curry restaurants in Curry TOKYO.",
    viewUrl: "https://zeroonecurry.com/",
    mapUrl: "https://maps.app.goo.gl/1zFLfepG65Ut9tA66",
    time: "5 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/ほっかほっか亭_三田3丁目.jpg",
    title: "ほっかほっか亭 三田3丁目",
    //お手頃な値段のお弁当屋です。揚げ物，炒め物，焼き魚などの様々な種類のお弁当を食べることができます。
    description:
      "This is a reasonably priced bento shop.<br>You can eat various kinds of bento such as fried food, stir-fried food, grilled fish, etc.",
    viewUrl: "https://www.hokkahokka-tei.jp/",
    mapUrl: "https://maps.app.goo.gl/PCGkKm7oHjTTy4378",
    time: "6 mins",
  },
  {
    type: "lunch",
    imgSrc: "./image/旬八弁当店.jpg",
    title: "旬八弁当店",
    //八百屋のお弁当屋さん。色とりどりの旬の野菜が入ったお弁当が食べられます
    description:
      "This is a lunch box shop of a grocery store.<br>You can eat bento boxes filled with colorful seasonal vegetables.",
    viewUrl: "https://www.shunpachi-bento.com/",
    mapUrl: "https://maps.app.goo.gl/wuNYzF1FaKwaeZCB7",
    time: "5 mins",
  },

  {
    type: "dinner",
    imgSrc: "./image/やっとこ_三田店.jpg",
    title: "やっとこ 三田店",
    //バラエティに富んだラーメンとつけ麺の店。気軽にサクッと食べたい時にオススメ。
    description:
      "This is a ramen and tsukemen restaurant with a wide variety of ramen and tsukemen.<br>Recommended for a casual, quick meal.",
    viewUrl: "https://tabelog.com/tokyo/A1314/A131402/13158832/",
    mapUrl: "https://maps.app.goo.gl/bf8Znqs4abGQMsA977",
    time: "6 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/PIZZA_SALAVATORE_CUOMO_白金.jpg",
    title: "PIZZA SALAVATORE CUOMO 白金",
    //特製の窯で焼きあげてくれるピザのお店です パスタや前菜、デザートも豊富です
    description:
      "This is a pizza restaurant that bakes pizza in a special oven.<br />A wide variety of pastas, appetizers, and desserts are alsoavailable.",
    viewUrl: "https://www.salvatore.jp/restaurant/shirokane/",
    mapUrl: "https://maps.app.goo.gl/tC6w76q3vvPQ4Qta7",
    time: "17 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/和食ダイニング_糸_ito.webp",
    title: "和食ダイニング 糸 ito",
    //日本酒と魚の和食のお店です。新鮮な魚料理と豊富なお酒を楽しめます。個別盛りの料理で接待などにもぜひ。
    description:
      "Japanese cuisine with sake and fish.<br />You can enjoy fresh fish dishes and a wide variety of sake. Please visit us for business entertainment with individual portions of dishes.",
    viewUrl: "https://itohen-official.com/",
    mapUrl: "https://maps.app.goo.gl/HbzmCQu7EcAyXWJ77",
    time: "9 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/焼き鳥屋_衣袋屋.jpg",
    title: "焼き鳥屋 衣袋屋",
    //希少部位も取りそろえた焼き鳥屋です。バーのような落ち着いた雰囲気で焼き鳥とお酒を楽しむことができます
    description:
      "This yakitori restaurant also offers a wide selection of rare parts.<br /> Enjoy yakitori and drinks in a relaxed bar-like atmosphere.",
    viewUrl: "https://tabelog.com/tokyo/A1314/A131402/13302050/",
    mapUrl: "https://maps.app.goo.gl/hfwYnC8E4jxEiu9b9",
    time: "8 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/芝の鳥一代.jpg",
    title: "芝の鳥一代",
    //10時間コツコツ煮込んだ水炊きが食べられるお店です。65人までの大人数での宴会もできます
    description:
      "This is a restaurant where you can enjoy mizutaki, a dish cooked in a steady simmer for 10 hours.<br />Large banquets of up to 65 people can also be held.",
    viewUrl: "https://ga0r308.gorp.jp/",
    mapUrl: "https://maps.app.goo.gl/PD3h7ppuxQhQ74RN6",
    time: "20 mins",
  },
  {
    type: "dinner",
    imgSrc: "./image/恵比寿餃子.jpg",
    title: "恵比寿餃子 大豊記 芝大門",
    //餃子を中心にした中華料理のお店です。お手軽な値段の豊富な種類の料理がお酒と楽しめます
    description:
      "A Chinese restaurant with a focus on dumplings.<br />A wide variety of dishes at reasonable prices can be enjoyed with alcohol.",
    viewUrl: "https://tabelog.com/tokyo/A1314/A131401/13233416/",
    mapUrl: "https://maps.app.goo.gl/9nvVB5Xs1gC1p3EP7",
    time: "20 mins",
  },
];

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

    //カードのHTMLをテンプレートリテラルで作成
    const cardHTML = `
  <div class="col d-flex">
    <div class="card shadow-sm flex-fill d-flex flex-column">
      <img src="${shop.imgSrc}" class="bd-placeholder-img card-img-top ${
      limitedTitles.includes(shop.title) ? "limited-width" : ""
    }" alt="${shop.title}" width="100%" height="225" />
      <p style="margin: 1em 0 1em 1em; color: orange">${shop.title}</p>
      <div class="card-body d-flex flex-column">
        <p class="card-text">${shop.description}</p>

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
          <small class="text-body-secondary">${shop.time}</small>
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

//ページの読み込み時に実行
window.onload = () => {
  createShopCards();
};

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

//検索機能用
function performSearch() {
  // 検索キーワードを取得して小文字に変換
  const keyword = document.getElementById("searchInput").value.toLowerCase();

  // .card というクラスを持つ要素をすべて取得（検索対象）
  const cards = document.querySelectorAll(".card");

  // ヒットしたカードがあるかどうかのフラグ
  let hasResults = false;

  // 各カードに対して処理を行う
  cards.forEach((card) => {
    const text = card.textContent.toLowerCase(); // カードの文字列を小文字に変換
    const match = text.includes(keyword); // キーワードを含むか判定

    // 一致する場合は表示、しない場合は非表示
    card.style.display = match ? "block" : "none";

    // 少なくとも1つ一致があれば hasResults を true に
    if (match) hasResults = true;
  });

  // 一致がない場合、「該当なし」メッセージを表示
  document.getElementById("noResults").style.display = hasResults
    ? "none"
    : "block";
}
