from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from utils.config_loader import get_config
import os

def get_crop_info(query):
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    
    base_dir = os.path.join(os.path.dirname(__file__), "..")
    embeddings_dir = get_config("CHROMA_PERSIST_DIR")
    if embeddings_dir:
        embeddings_dir = os.path.join(base_dir, embeddings_dir.replace("backend/", ""))
    else:
        embeddings_dir = os.path.join(base_dir, "data", "embeddings")
    
    try:
        db = Chroma(persist_directory=embeddings_dir, embedding_function=embeddings)
        results = db.similarity_search(query, k=2)
        return "\n".join([r.page_content for r in results])
    except Exception as e:
        return f"No vector store found yet. Please run embedding creation first. Error: {str(e)}"
