import json
from bot_engine import build_response

print(json.dumps(build_response('What is photosynthesis?', 'kai', 'Tester'), ensure_ascii=False, indent=2))
