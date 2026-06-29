# MindBuddy — Local Development

Quick steps to run the app locally for development:

Prerequisites
- Python 3.8+ (3.10 recommended)
- Node.js (optional, for frontend dev with Vite)

Install Python dependencies:

```powershell
python -m pip install -r requirements.txt
```

Start the Python backend (also serves the frontend files):

```powershell
python server.py
```

Open the app in your browser:

http://127.0.0.1:5000/

Notes
- The Flask app serves `index.html`, `app.js`, `style.css` and other static files from the project root so you can run a single command during development.
- You can also run the frontend with Vite (`npm run dev`) if you prefer the Vite dev server features.
- A small test script is available: `test_bot.ps1` — run it in PowerShell to exercise the `/api/chat` endpoint.

If you want, I can add an `npm` script to run both backend and frontend concurrently.
