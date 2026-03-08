# ASSEED LP 引き継ぎ資料（伊藤光さん向け）

## はじめに

ASSEED（未来調整サロン）のランディングページのソースコードです。
GitHubのprivateリポジトリで共有しています。Antigravityで編集 → GitHubにプッシュ、の流れで進められます。

---

## 1. GitHubの招待を承認する

コラボレーター招待を送っています。以下の手順で承認してください。

1. GitHubにログイン（アカウント: hikaru1220）
2. https://github.com/youga404/asseed-lp を開く
3. 「Accept invitation」をクリック

これでリポジトリへの読み書き権限が付きます。

---

## 2. Antigravityでプロジェクトを開く

### 方法A: ターミナルからclone（おすすめ）

Antigravityのターミナル（画面下部）を開いて、以下を実行：

```bash
git clone https://github.com/youga404/asseed-lp.git
```

※ GitHubの認証を求められたら、GitHubアカウントでログインしてください。

cloneが完了したら、Antigravityで「File → Open Folder」から `asseed-lp` フォルダを開きます。

### 方法B: Workspaceから直接開く

Antigravityの「Workspaces → New Workspace」で、GitHubからcloneを選び、リポジトリURL `https://github.com/youga404/asseed-lp.git` を入力。

---

## 3. ファイル構成

```
asseed-lp/
├── index.html       ← LP本体（全セクションがこの1ファイルに入っている）
├── style.css        ← スタイルシート
├── main.js          ← アニメーション・スクロール制御
├── img/             ← 画像素材すべて
│   ├── hero-*.png       ヒーロー画像
│   ├── therapist-*.png  セラピスト写真
│   ├── salon-*.jpg      サロン写真
│   ├── session-*.jpg    セッション写真
│   ├── voice-*.jpg      お客様の声
│   ├── flow-*.jpg       施術フロー図
│   └── logo-asseed.png  ロゴ
├── vite.config.js   ← 開発サーバー設定
├── package.json     ← npm設定
└── public/          ← 公開ファイル
```

### 編集で触るファイル

- **テキスト・構成の変更** → `index.html`
- **デザイン・レイアウトの変更** → `style.css`
- **アニメーション・動きの変更** → `main.js`
- **画像の差し替え** → `img/` フォルダ内のファイルを同名で上書き

### index.htmlの中身

セクションごとにHTMLコメントで区切ってあります：

```html
<!-- HEADER — ロゴ固定 -->
<!-- HERO — 感情で掴む → 権威で裏づけ → 行動へ -->
```

コメントを目印に探してください。

---

## 4. ローカルでプレビューする

Antigravityのターミナルで：

```bash
npm install        # 初回のみ
npm run dev        # 開発サーバー起動（localhost:3000）
```

ブラウザで `http://localhost:3000` を開くとLPが表示されます。
ファイルを保存すると自動で画面に反映されます（ホットリロード）。

---

## 5. 編集したらGitHubにプッシュする

### Antigravityのサイドバー（Source Control）から

1. 左サイドバーの「Source Control」アイコン（分岐マーク）をクリック
2. 変更ファイルが一覧表示される
3. 「+」ボタンでステージング
4. コミットメッセージを入力（例：「ヒーロー画像差し替え」）
5. 「Commit」→「Sync Changes」でGitHubに反映

### ターミナルから（コマンド派の場合）

```bash
git add .
git commit -m "変更内容をここに書く"
git push
```

### Antigravityのエージェントに任せる場合

チャットボックスに以下のように入力すればOK：

```
変更をすべてステージして、コミットメッセージを付けてGitHubにプッシュして
```

---

## 6. 技術スタック

| 項目 | 内容 |
|------|------|
| 構成 | 素のHTML/CSS/JS（フレームワークなし） |
| ビルドツール | Vite |
| フォント | Shippori Mincho + Noto Sans JP（Google Fonts） |
| CSS設計 | BEM風（`.header__logo`, `.hero__title` 等） |
| レスポンシブ | 対応済み |

---

## 7. Antigravityのエージェントに渡す用プロンプト（コピペOK）

以下をAntigravityのチャットボックスに貼れば、エージェントがプロジェクト構成を理解して編集を手伝ってくれます：

```
このプロジェクトはASSEED（未来調整サロン）のランディングページです。

構成:
- index.html: LP全体（シングルHTML。セクションはHTMLコメントで区切り済み）
- style.css: スタイルシート（BEM風命名）
- main.js: アニメーション・インタラクション
- img/: 全画像素材
- Vite使用（npm run dev でlocalhost:3000プレビュー）

素のHTML/CSS/JSで構成されており、フレームワークは使っていません。
Google Fonts（Shippori Mincho + Noto Sans JP）を使用しています。
レスポンシブ対応済みです。

編集後は git commit → git push でGitHubリポジトリに反映してください。
```

---

## 連絡先

何かあれば太田（ひかる）まで。
