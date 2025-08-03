def route_query(query):
    """
    Simple query router to determine the type of agricultural query
    """
    query_lower = query.lower()
    
    if any(word in query_lower for word in ['irrigate', 'water', 'irrigation', 'watering']):
        return 'irrigation'
    elif any(word in query_lower for word in ['price', 'market', 'sell', 'cost']):
        return 'market'
    elif any(word in query_lower for word in ['weather', 'rain', 'temperature', 'climate']):
        return 'weather'
    elif any(word in query_lower for word in ['disease', 'pest', 'problem', 'issue']):
        return 'problem'
    else:
        return 'general'
