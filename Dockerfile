# nginx（軽量Webサーバー）をベースにする
FROM nginx:alpine

# ビルド済みの静的ファイルをnginxの公開ディレクトリにコピー
COPY dist/ /usr/share/nginx/html/

# ポート80で待ち受け
EXPOSE 80
