import pandas as pd
import os

def load_policy_data():
    data = {"policy": ["Minimum Support Price"], "details": ["Government MSP for Wheat: INR 2275"]}
    df = pd.DataFrame(data)
    
    # Create directory if it doesn't exist
    output_dir = os.path.join(os.path.dirname(__file__), "..", "data", "processed")
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, "policy.csv")
    df.to_csv(output_path, index=False)
    return df
