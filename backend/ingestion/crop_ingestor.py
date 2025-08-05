import pandas as pd
import os

def load_crop_data():
    # Dummy crop info dataset
    data = {"crop": ["Wheat"], "moisture_need": ["Moderate"], "region": ["Punjab"]}
    df = pd.DataFrame(data)
    
    # Create directory if it doesn't exist
    output_dir = os.path.join(os.path.dirname(__file__), "..", "data", "processed")
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, "crop_info.csv")
    df.to_csv(output_path, index=False)
    return df
