from reasoning.decision_engine import irrigation_decision
from retrieval.query_router import route_query
from retrieval.api_retriever import get_weather, get_market_prices
from retrieval.vector_retriever import get_crop_info
from reasoning.prompt_templates import GENERAL_ADVICE_PROMPT
from langchain_google_genai import ChatGoogleGenerativeAI
from utils.config_loader import get_config

def process_query(query, region="Punjab"):
    """
    Main agent chain that processes different types of agricultural queries
    """
    query_type = route_query(query)
    
    if query_type == 'irrigation':
        return irrigation_decision(query, region)
    elif query_type == 'weather':
        return get_weather(region)
    elif query_type == 'market':
        # Extract crop from query or default to wheat
        return get_market_prices("Wheat")
    else:
        # General agricultural advice using RAG
        crop_info = get_crop_info(query)
        llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=get_config("GEMINI_API_KEY"))
        prompt = GENERAL_ADVICE_PROMPT.format(context=crop_info, question=query)
        return llm.predict(prompt)
