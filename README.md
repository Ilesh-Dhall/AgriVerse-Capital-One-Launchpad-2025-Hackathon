# AgriVerse - Capital One Launchpad 2025 Hackathon

## 🌾 Agricultural Intelligence Platform

AgriVerse is an AI-powered agricultural assistant that provides intelligent crop management advice using Retrieval-Augmented Generation (RAG) technology. The system leverages agricultural research documents to answer farmers' queries and provide actionable insights.

## 🚀 Features

- **Intelligent Query Processing**: Natural language understanding for agricultural questions
- **Knowledge Base**: Built on ICAR Annual Report 2023-24 and other agricultural documents
- **RAG Technology**: Combines document retrieval with generative AI for accurate responses
- **Vector Search**: Efficient semantic search using ChromaDB
- **Google Gemini Integration**: Powered by state-of-the-art language models

## 🛠️ Tech Stack

- **Backend**: Python, LangChain
- **Vector Database**: ChromaDB
- **LLM**: Google Gemini 1.5 Flash
- **Embeddings**: HuggingFace sentence-transformers
- **Document Processing**: PyPDF, RecursiveCharacterTextSplitter
- **Environment**: Jupyter Notebook

## 📋 Prerequisites

- Python 3.8+
- Google API Key (for Gemini)
- Virtual environment (recommended)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AgriVerse-Capital-One-Launchpad-2025-Hackathon
   ```

2. **Set up virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   # Add your Google API key to .env file
   ```

## 🏃‍♂️ Quick Start

1. **Start Jupyter Notebook**
   ```bash
   jupyter notebook
   ```

2. **Open main.ipynb** and run all cells

3. **Query the system**
   ```python
   query = "my rice crop isn't growing well due to bad climate what to do?"
   print("Answer:", rag_chain.run(query))
   ```

## 📁 Project Structure

```
AgriVerse-Capital-One-Launchpad-2025-Hackathon/
├── main.ipynb              # Main application notebook
├── data/                   # Agricultural documents
│   └── ICAR Annual Report 2023-24-english.pdf
├── chroma_db/             # Vector database storage
├── src/                   # Source code modules
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variables template
├── .env                  # Environment variables (not in git)
├── .gitignore           # Git ignore rules
└── README.md           # Project documentation
```

## 🔄 Usage Examples

### Basic Query
```python
query = "What are the best practices for wheat cultivation?"
response = rag_chain.run(query)
print(response)
```

### Climate-specific Query
```python
query = "How to protect crops from excessive rainfall?"
response = rag_chain.run(query)
print(response)
```

### Crop Disease Query
```python
query = "Symptoms and treatment of rice blast disease"
response = rag_chain.run(query)
print(response)
```

## 🛡️ Environment Variables

Create a `.env` file in the root directory:

```env
GOOGLE_API_KEY=your_google_api_key_here
CHROMA_DB_PATH=./chroma_db
DOCUMENTS_PATH=./data
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Performance Metrics

- **Response Time**: < 3 seconds
- **Document Coverage**: ICAR 2023-24 Report (500+ pages)
- **Embedding Model**: all-MiniLM-L6-v2
- **Chunk Size**: 500 characters with 100 character overlap

## 🔮 Future Enhancements

- [ ] Web interface using Streamlit/FastAPI
- [ ] Multi-language support
- [ ] Real-time weather integration
- [ ] Crop monitoring dashboard
- [ ] Mobile application
- [ ] Integration with IoT sensors

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Your Name] - [Your Role]
- [Team Member 2] - [Role]
- [Team Member 3] - [Role]

## 🎯 Hackathon Details

**Event**: Capital One Launchpad 2025 Hackathon  
**Theme**: Agricultural Technology  
**Duration**: [Hackathon Duration]  
**Goal**: Democratize agricultural knowledge using AI

## 📞 Support

For support, email [your-email] or create an issue in the repository.

---

**Built with ❤️ for farmers and agricultural communities**
