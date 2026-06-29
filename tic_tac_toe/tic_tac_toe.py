import math

class TicTacToe:
    def __init__(self):
        self.board = [' ' for _ in range(9)]
        self.human_player = 'X'
        self.ai_player = 'O'
    
    def print_board(self):
        print("\n")
        print(f" {self.board[0]} | {self.board[1]} | {self.board[2]} ")
        print("---+---+---")
        print(f" {self.board[3]} | {self.board[4]} | {self.board[5]} ")
        print("---+---+---")
        print(f" {self.board[6]} | {self.board[7]} | {self.board[8]} ")
        print("\n")

    def available_moves(self, board):
        return [i for i, spot in enumerate(board) if spot == ' ']

    def empty_squares(self):
        return ' ' in self.board

    def num_empty_squares(self):
        return self.board.count(' ')

    def make_move(self, square, letter):
        if self.board[square] == ' ':
            self.board[square] = letter
            return True
        return False

    def check_winner(self, board, player):
        win_states = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], # rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], # cols
            [0, 4, 8], [2, 4, 6]             # diagonals
        ]
        for condition in win_states:
            if board[condition[0]] == board[condition[1]] == board[condition[2]] == player:
                return True
        return False

    def minimax(self, board, player):
        other_player = self.human_player if player == self.ai_player else self.ai_player

        if self.check_winner(board, other_player):
            return {'position': None, 'score': 10 if other_player == self.ai_player else -10}
        elif not ' ' in board:
            return {'position': None, 'score': 0}

        if player == self.ai_player:
            best = {'position': None, 'score': -math.inf}
        else:
            best = {'position': None, 'score': math.inf}

        for possible_move in self.available_moves(board):
            board[possible_move] = player
            sim_score = self.minimax(board, other_player)
            board[possible_move] = ' '
            sim_score['position'] = possible_move

            if player == self.ai_player:
                if sim_score['score'] > best['score']:
                    best = sim_score
            else:
                if sim_score['score'] < best['score']:
                    best = sim_score

        return best

    def play(self):
        print("Welcome to Tic-Tac-Toe vs Unbeatable AI!")
        print("Squares are numbered 0-8 from top-left to bottom-right.")
        
        while self.empty_squares():
            self.print_board()

            # Human Turn
            valid_move = False
            while not valid_move:
                try:
                    square = input("Your turn (X). Choose a square (0-8): ")
                    square = int(square)
                    if square not in self.available_moves(self.board):
                        print("Invalid move. Try again.")
                    else:
                        valid_move = True
                except ValueError:
                    print("Invalid input. Please enter a number from 0-8.")
            
            self.make_move(square, self.human_player)
            
            if self.check_winner(self.board, self.human_player):
                self.print_board()
                print("You win! (Wait, that's impossible...)")
                return

            if not self.empty_squares():
                break

            # AI Turn
            print("AI is thinking...")
            ai_move = self.minimax(self.board, self.ai_player)['position']
            self.make_move(ai_move, self.ai_player)
            
            if self.check_winner(self.board, self.ai_player):
                self.print_board()
                print("AI wins! You can't beat the Minimax algorithm.")
                return
        
        self.print_board()
        print("It's a tie!")

if __name__ == '__main__':
    game = TicTacToe()
    game.play()
