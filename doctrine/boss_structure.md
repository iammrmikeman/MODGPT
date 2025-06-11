# MODGPT Boss and Worker Structure (as of 2025-06-10)

## Boss Roles:
- Boss 1: GPT-4.0 (non-EXE tasks)
  - Commands: memory updates, core mod development, doctrine, snapshot generation
  - Workers: 4x GPT-4.1

- Boss 2: GPT-4.0 (EXE tasks)
  - Commands: EXE launcher builds, Swarm automation
  - Workers: 4x GPT-4.1

## Policy:
- Each boss commands their own mini-swarm
- Worker interference across domains is forbidden
- Structure is embedded in doctrine and enforced by Boss AI logic
