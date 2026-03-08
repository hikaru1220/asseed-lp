# ASSEED LP（未来調整サロン ASSEED ランディングページ）

## 構成

```
index.html    … LP本体（単一HTML）
style.css     … スタイルシート
main.js       … アニメーション・インタラクション
img/          … 画像素材（ヒーロー・セラピスト写真・サロン写真等）
public/       … Viteの公開ディレクトリ
vite.config.js … Vite設定（開発サーバー: ポート3000）
```

## ローカル開発

```bash
npm install
npm run dev     # localhost:3000 で起動
npm run build   # dist/ に本番ビルド
```

## 技術スタック

- **HTML/CSS/JS**（フレームワークなし、素のHTML）
- **Vite** … 開発サーバー・ビルドツール
- **Google Fonts** … Shippori Mincho + Noto Sans JP

## 画像について

- `img/` フォルダに全画像格納
- セラピスト写真: `therapist-*.png`
- サロン写真: `salon-*.jpg`
- ヒーロー画像: `hero-*.png`
- お客様の声: `voice-*.jpg`

## 編集のポイント

- LP構成は `index.html` に全セクションが含まれるシングルページ構成
- セクション区切りはHTMLコメントで明示してあります（`<!-- HEADER -->`, `<!-- HERO -->` 等）
- CSSはBEM風の命名（`.header__logo`, `.hero__title` 等）
- レスポンシブ対応済み

## PDF出力

```bash
./generate-pdf.sh   # puppeteerでPDF生成（要 npm install 済み）
```
