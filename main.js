/* カードを作る */
const suits = ["♠", "♣", "♥", "◆"];
const trump = [];

for (let i = 0; i < 13; i++) {
  suits.forEach((suit) => {
    trump.push({ suit, number: i + 1 });
  });
}

/* シャッフルする関数 */
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0〜51の整数（初回）
    [array[i], array[j]] = [array[j], array[i]]; // i番目とj番目を入れ替える
  }
  return array;
};


/* カードを並べる */
shuffle(trump).forEach((card) => {
  const cardId = card.suit + card.number;
  const el = document.createElement("div");
  el.innerHTML = `<div>${card.suit} ${card.number}</div>`;
  el.classList.add("card");
  el.setAttribute('id', cardId); // カードにユニークなidをつける
  el.addEventListener('click', () => open(cardId)); // クリックイベントを追加
  const table = document.getElementById("table");
  table.appendChild(el);
});

/* クリックしたときの処理 */
const open = (id) => {
  switch (openCards.length) {
    case 0:
      document.getElementById(id).classList.add('open');
      openCards.push(id);
      break;
    case 1:
      if (openCards[0] !== id) { // すでにオープンしているカードをクリックした場合はなにも起こらないように
        document.getElementById(id).classList.add('open');
        openCards.push(id);
      }
      break;
    case 2:
      document.getElementById(openCards[0]).classList.remove('open');
      document.getElementById(openCards[1]).classList.remove('open');
      openCards.length = 0;
      document.getElementById(id).classList.add('open');
      openCards.push(id);
      break;
  }
};

/* オープンしているカードを保存する変数 */
const openCards = [];
