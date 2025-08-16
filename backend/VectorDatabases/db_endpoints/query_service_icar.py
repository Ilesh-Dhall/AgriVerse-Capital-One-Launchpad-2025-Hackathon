from fastapi import FastAPI
from pydantic import BaseModel
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

# Initialize FastAPI app
app = FastAPI()

# Define request schema
class QueryRequest(BaseModel):
    query: str
    top_k: int = 3

# Load embeddings & vectorstore once
embedding_function = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="../embeddings/icar_db", embedding_function=embedding_function)

@app.post("/query")
def query(data: QueryRequest):
    # Retrieve top_k documents
    results = vectorstore.similarity_search(data.query, k=data.top_k)

    # Combine results into one string
    if results:
        combined_text = "\n\n".join([doc.page_content for doc in results])
        return {"context": combined_text}

    return {"context": "No relevant information found."}

# cd backend/VectorDatabases/db_endpoints
# python3 -m uvicorn query_service_icar:app --reload --port 8000
