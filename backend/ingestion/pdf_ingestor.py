import shutil
import glob
import os

def load_pdfs():
    # Get the base directory
    base_dir = os.path.join(os.path.dirname(__file__), "..")
    raw_dir = os.path.join(base_dir, "data", "raw")
    processed_dir = os.path.join(base_dir, "data", "processed")
    
    # Create directories if they don't exist
    os.makedirs(processed_dir, exist_ok=True)
    
    pdf_files = glob.glob(os.path.join(raw_dir, "*.pdf"))
    for pdf in pdf_files:
        shutil.copy(pdf, processed_dir)
    return f"Moved {len(pdf_files)} PDFs to processed/"
