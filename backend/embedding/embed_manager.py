from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from utils.text_splitter import split_text
from utils.config_loader import get_config
import os

def create_embeddings():
    # Load all PDFs from processed folder
    base_dir = os.path.join(os.path.dirname(__file__), "..")
    processed_dir = os.path.join(base_dir, "data", "processed")
    pdf_files = [os.path.join(processed_dir, "ICAR Annual Report 2023-24-english.pdf")]
    
    docs = []
    for pdf in pdf_files:
        if os.path.exists(pdf):
            loader = PyPDFLoader(pdf)
            docs.extend(loader.load())
        else:
            print(f"Warning: PDF file not found: {pdf}")

    if not docs:
        print("No documents loaded, creating dummy document for testing")
        from langchain.schema import Document
        docs = [Document(page_content="This is dummy agricultural content about wheat farming and irrigation practices.")]

    # Split into chunks
    chunks = split_text(docs)
    
    # Use HuggingFace embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # Create embeddings directory
    embeddings_dir = get_config("CHROMA_PERSIST_DIR")
    if embeddings_dir:
        embeddings_dir = os.path.join(base_dir, embeddings_dir.replace("backend/", ""))
    else:
        embeddings_dir = os.path.join(base_dir, "data", "embeddings")
    
    os.makedirs(embeddings_dir, exist_ok=True)

    # Persist vector store (auto-persisted in newer Chroma versions)
    db = Chroma.from_documents(chunks, embeddings, persist_directory=embeddings_dir)
    return db
