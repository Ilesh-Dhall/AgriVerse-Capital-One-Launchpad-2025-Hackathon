import glob
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

import json
from langchain.schema import Document

with open("./data/icar/data.json", "r") as f:
    json_data = json.load(f)

all_documents = []
if isinstance(json_data, list):
    for item in json_data:
        content = json.dumps(item, indent=2)
        doc = Document(page_content=content)
        all_documents.append(doc)
else:
    content = json.dumps(json_data, indent=2)
    doc = Document(page_content=content)
    all_documents.append(doc)

splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
docs = splitter.split_documents(all_documents)

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

vectorstore = Chroma.from_documents(
    docs,
    embeddings,
    persist_directory="./embeddings/icar_db"
)


