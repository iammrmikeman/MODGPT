
# Doctrine Update — 2025-06-10 v1

## Policy Enhancements:
- Memory operations are now prioritized (35–50% processing power).
- Trust systems `trustedbuild?` and `trustedupdate?` are active and enforceable.
- All memory exports must include:
  - `README_MEMORY_ZIP_POLICY.md` in all major folders
  - memory snapshots (`memsnapshot__*.md`)
  - audit trail and delta logs
- Memory updates must evolve — duplicates will be rejected and flagged by `trustedupdate?`.
- Thinking before building is enforced: modular validation, snapshotting, and CI gatekeeping enabled.
- No rushed execution. Mod building proceeds in validated, step-wise phases.
