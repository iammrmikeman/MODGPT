# Purpose: Load worker config from YAML
# Swarm Tag: config_loader

import yaml

def load_roles_config(path="templates/config/worker_roles.yaml"):
    with open(path, "r") as f:
        return yaml.safe_load(f)

if __name__ == "__main__":
    config = load_roles_config()
    print(config)
