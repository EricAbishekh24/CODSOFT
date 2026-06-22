import json
import urllib.request

url = 'http://127.0.0.1:5000/api/chat'
payload = {
    'message': 'What is photosynthesis?',
    'character': 'kai',
    'userName': 'Tester'
}
req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'),
                             headers={'Content-Type': 'application/json', 'User-Agent': 'MindBuddy-Tester/1.0'})
with urllib.request.urlopen(req, timeout=10) as resp:
    print(resp.read().decode('utf-8'))
