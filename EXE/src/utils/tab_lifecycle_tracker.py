# Worker 1: Lifecycle Tracker
# Purpose: Monitor simulated tab health

import time
import random

def get_tab_status(tab_id):
    return "alive" if random.random() > 0.1 else "dead"

def check_all_tabs(count=10):
    return {f"worker_{i}": get_tab_status(i) for i in range(count)}
