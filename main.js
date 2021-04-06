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
  const el = document.createElement("div");
  el.classList.add("card");
  el.innerHTML = `<div>${card.suit} ${card.number}</div>`;
  const table = document.getElementById("table");
  table.appendChild(el);
});
