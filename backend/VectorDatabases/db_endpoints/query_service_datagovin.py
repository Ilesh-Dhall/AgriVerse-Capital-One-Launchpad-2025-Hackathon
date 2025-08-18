from fastapi import FastAPI
from pydantic import BaseModel
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

app = FastAPI()

class QueryRequest(BaseModel):
    query: str
    top_k: int = 3

embedding_function = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="../embeddings/datagovin_db", embedding_function=embedding_function)

@app.post("/query")
def query(data: QueryRequest):
    results = vectorstore.similarity_search(data.query, k=data.top_k)

    if results:
        combined_text = "\n\n".join([doc.page_content for doc in results])
        return {"context": combined_text}

    return {"context": "No relevant information found."}

