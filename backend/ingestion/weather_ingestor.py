import pandas as pd
import os

def load_weather_data():
    # Dummy weather dataset
    data = {"region": ["Punjab"], "rainfall": [20], "temperature": [30]}
    df = pd.DataFrame(data)
    
    # Create directory if it doesn't exist
    output_dir = os.path.join(os.path.dirname(__file__), "..", "data", "processed")
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, "weather.csv")
    df.to_csv(output_path, index=False)
    return df
