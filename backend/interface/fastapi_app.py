from fastapi import FastAPI
from pydantic import BaseModel
from reasoning.agent_chain import process_query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AgriVerse API", description="Agricultural Advisory API")

# Add CORS middleware for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryRequest(BaseModel):
    query: str
    region: str = "Punjab"

class QueryResponse(BaseModel):
    answer: str
    query_type: str

@app.get("/")
async def root():
    return {"message": "AgriVerse API is running!"}

@app.post("/ask", response_model=QueryResponse)
async def ask_question(request: QueryRequest):
    """
    Main endpoint for agricultural queries
    """
    try:
        answer = process_query(request.query, request.region)
        from retrieval.query_router import route_query
        query_type = route_query(request.query)
        
        return QueryResponse(answer=answer, query_type=query_type)
    except Exception as e:
        return QueryResponse(answer=f"Sorry, I encountered an error: {str(e)}", query_type="error")

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
