# Worker 2: Prompt Template Engine
# Purpose: Render prompt string using template and role/model data

def render_prompt(role, model):
    template = open("MODGPT/EXE/templates/prompts/swarm_prompt_template.txt").read()
    return template.replace("{{role}}", role).replace("{{model}}", model)
