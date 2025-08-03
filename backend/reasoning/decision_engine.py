from reasoning.prompt_templates import IRRIGATION_PROMPT
from retrieval.vector_retriever import get_crop_info
from retrieval.api_retriever import get_weather
from langchain_google_genai import ChatGoogleGenerativeAI
from utils.config_loader import get_config

llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=get_config("GEMINI_API_KEY"))

def irrigation_decision(query, region):
    crop_info = get_crop_info(query)
    weather = get_weather(region)
    prompt = IRRIGATION_PROMPT.format(weather_data=weather, crop_info=crop_info)
    return llm.predict(prompt)
