IRRIGATION_PROMPT = """
Based on the following weather data and crop information, provide irrigation advice:

Weather Data:
{weather_data}

Crop Information:
{crop_info}

Please analyze the conditions and provide specific irrigation recommendations including:
1. Whether irrigation is needed
2. How much water to apply
3. Best timing for irrigation
4. Any precautions to take

Answer:
"""

GENERAL_ADVICE_PROMPT = """
You are an agricultural expert. Based on the following context, provide helpful farming advice:

Context:
{context}

Question: {question}

Provide practical, actionable advice for farmers.
"""
