# Purpose: Assign GPT model based on worker ID
# Swarm Tag: model_assignment

def assign_model(worker_id: int) -> str:
    if worker_id % 2 == 0:
        return "gpt-4.1"
    else:
        return "gpt-3.5"

if __name__ == "__main__":
    for i in range(10):
        print(f"worker_{i}: {assign_model(i)}")
