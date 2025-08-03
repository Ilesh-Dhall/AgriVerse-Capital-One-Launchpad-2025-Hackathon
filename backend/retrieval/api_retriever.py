def get_weather(region="Punjab"):
    """
    Placeholder weather API function
    In production, this would call a real weather API
    """
    # Return dummy weather data that matches the CSV structure
    weather_data = {
        "region": region,
        "rainfall": "15mm",
        "temperature": "28°C",
        "humidity": "65%",
        "forecast": "Partly cloudy with chances of light rain"
    }
    
    return f"Weather for {region}: Temperature {weather_data['temperature']}, Rainfall {weather_data['rainfall']}, Humidity {weather_data['humidity']}. {weather_data['forecast']}"

def get_market_prices(crop="Wheat"):
    """
    Placeholder market API function
    """
    return f"Current market price for {crop}: INR 2500/Quintal"
