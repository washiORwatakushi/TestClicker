// クッキーのカウントを0で初期化
let cookieCount = 0;

// クッキークリッカーボタンと表示エレメントを取得
const cookieClicker = document.getElementById('cookie-clicker');
const cookieCountElement = document.getElementById('cookie-count');

// クッキークリッカーボタンがクリックされたらカウントアップ
cookieClicker.addEventListener('click', function() {
  cookieCount += 1;
  // 更新したカウントを表示
  cookieCountElement.innerText = cookieCount;
});
