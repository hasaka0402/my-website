// ページを開いたら挨拶を表示
alert("ようこそ！ハーサカのホームページへ 🌸");

// ボタンをクリックするとメッセージが変わるようにしてみよう
function changeMessage() {
  const intro = document.getElementById("intro-text");
  intro.textContent = "プログラミング、楽しくなってきた！🔥";
}
