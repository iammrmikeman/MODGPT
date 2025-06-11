# Worker 4: Config Integration
# Purpose: Load and parse worker_roles.yaml

import yaml

def load_roles_config(path="MODGPT/EXE/templates/config/worker_roles.yaml"):
    with open(path, "r") as f:
        return yaml.safe_load(f)
