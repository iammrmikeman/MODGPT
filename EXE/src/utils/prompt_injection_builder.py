# Worker 1: Prompt Injection Builder
# Purpose: Build full injected prompt string for each worker tab

import urllib.parse
from config_integration import load_roles_config
from prompt_template_engine import render_prompt

def build_injected_urls():
    roles = load_roles_config()
    urls = []
    for idx, role_config in enumerate(roles):
        role = list(role_config.values())[0]['role']
        model = list(role_config.values())[0]['model']
        prompt = render_prompt(role, model)
        encoded_prompt = urllib.parse.quote(prompt)
        urls.append(f"https://chat.openai.com/?model={model}&worker_id={idx}&prompt={encoded_prompt}")
    return urls
