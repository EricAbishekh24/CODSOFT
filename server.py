from flask import Flask, request, jsonify
from flask_cors import CORS
from bot_engine import build_response

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173",
                   "http://localhost:3000", "http://127.0.0.1:3000"])

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "message": "MindBuddy backend running!"})


@app.route("/api/chat", methods=["POST"])
def chat():
    data      = request.get_json(silent=True) or {}
    message   = (data.get("message") or "").strip()
    character = (data.get("character") or "zac").lower()
    user_name = (data.get("userName") or "friend").strip()
    subjects  = data.get("subjects") or []

    if not message:
        return jsonify({"error": "Message is required"}), 400
    
    if character not in ("zac", "luna"):
        character = "zac"

    result = build_response(message, character, user_name, subjects)
    return jsonify(result)

@app.route("/api/study-plan", methods=["GET"])
def study_plan():
    return jsonify({"plan": "Mock study plan"})



if __name__ == "__main__":
    print("MindBuddy backend starting on http://127.0.0.1:5000")
    app.run(host="127.0.0.1", port=5000, debug=True)
