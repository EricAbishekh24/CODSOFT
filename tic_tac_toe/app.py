from flask import Flask, request, jsonify
from flask_cors import CORS
from tic_tac_toe import TicTacToe

app = Flask(__name__)
CORS(app) # Allow React frontend to access the API

game = TicTacToe()

@app.route('/api/move', methods=['POST'])
def get_ai_move():
    data = request.json
    board = data.get('board')
    ai_player = data.get('aiPlayer', 'O')
    human_player = data.get('humanPlayer', 'X')
    
    if not board or len(board) != 9:
        return jsonify({"error": "Invalid board state"}), 400

    # Ensure the game logic uses the correct characters
    game.human_player = human_player
    game.ai_player = ai_player
    
    best_move = game.minimax(board, ai_player)
    
    return jsonify({
        "position": best_move['position'],
        "score": best_move['score']
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)
