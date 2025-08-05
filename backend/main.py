from ingestion.pdf_ingestor import load_pdfs
from ingestion.weather_ingestor import load_weather_data
from ingestion.market_ingestor import load_market_data
from ingestion.policy_ingestor import load_policy_data
from ingestion.crop_ingestor import load_crop_data
from embedding.embed_manager import create_embeddings
import uvicorn

def main():
    print("Ingesting data...")
    print(load_pdfs())
    print(load_weather_data())
    print(load_market_data())
    print(load_policy_data())
    print(load_crop_data())

    print("Creating embeddings...")
    print(create_embeddings())

    print("Starting FastAPI...")
    # Import the app directly instead of using string module path
    from interface.fastapi_app import app
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False)

if __name__ == "__main__":
    main()
