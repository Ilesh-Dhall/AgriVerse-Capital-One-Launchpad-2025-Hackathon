#!/bin/bash
set -e

DEST_DIR="./backend/VectorDatabases/embeddings"
mkdir -p "$DEST_DIR"

FOLDER_LINK="https://drive.google.com/drive/folders/1TJ0d9PW1v5W_ab9NcyU77ur1ONW8LpaH?usp=sharing"

echo "📥 Installing gdown..."
source venv/bin/activate
pip install --quiet gdown

echo "📂 Downloading 'embeddings' folder from Google Drive..."
gdown --folder "$FOLDER_LINK" -O "$DEST_DIR"

echo "✅ Download complete!"
echo "Files saved under: $DEST_DIR/embeddings"
