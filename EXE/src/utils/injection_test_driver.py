# Worker 5: Injection Test Driver
# Purpose: Simulate a dry-run of tab launching with prompt injection

from prompt_injection_builder import build_injected_urls

def run_test():
    urls = build_injected_urls()
    for url in urls:
        print(f"Launching simulated tab: {url}")

if __name__ == "__main__":
    run_test()
