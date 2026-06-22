import io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
from bot_engine import build_response, classify_intent

tests = [
    ('morning study schedule', 'zac'),
    ('evening study plan', 'luna'),
    ('give me a study plan', 'zac'),
    ('I am tired', 'luna'),
    ('pomodoro timer', 'zac'),
    ('exam tips', 'luna'),
    ('i cant concentrate', 'zac'),
    ('note taking tips', 'luna'),
    ('how to get better grades', 'zac'),
    ('bye', 'luna'),
]

print("=== Intent Classification Tests ===")
for msg, char in tests:
    intent = classify_intent(msg)
    print(f'[{char:4}] "{msg}" => {intent}')

print("\n=== Full Response Tests ===")
for msg, char in [('morning study schedule','zac'), ('evening study plan','luna'), ('give me a study plan','zac')]:
    r = build_response(msg, char, 'Erica')
    preview = r['text'][:120].replace('\n', ' ')
    print(f'[{char}] intent={r["intent"]} | {preview}...')
