#!/bin/bash
# ASSEED LP → PDF 生成スクリプト
# 使い方: ./generate-pdf.sh [出力ファイル名]
# Vite dev server (npm run dev) が起動中に実行すること

OUTPUT="${1:-ASSEED_LP_$(date +%Y%m%d).pdf}"
URL="http://localhost:3000"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -f "$CHROME" ]; then
  echo "Google Chromeが見つかりません"
  exit 1
fi

echo "PDF生成中... → $OUTPUT"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --print-to-pdf="$OUTPUT" \
  --print-to-pdf-no-header \
  --window-size=1440,900 \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=5000 \
  "$URL" 2>/dev/null

if [ -f "$OUTPUT" ]; then
  echo "完了: $(pwd)/$OUTPUT"
  open "$OUTPUT"
else
  echo "PDF生成に失敗しました"
  exit 1
fi
