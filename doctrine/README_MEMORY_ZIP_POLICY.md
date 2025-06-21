
# MODGPT Trusted Logic Enforcement — Memory Policy [2025-06-21]

## 🔐 Global Trusted Logic Doctrine

**Effective Scope:** All MODGPT files tied to:
- UI logic (JS, JSX, HTML render views)
- Functionality (mod logic, handlers)
- AI-generated user-input content (e.g. inbox views, scripts, configuration files)

---

## 🔒 Enforcement Directives

1. **No Logic Rewrites**
   - Preserve all DeepSeek, user-built, or validated logic structure.
   - Avoid flattening or rewriting DOM/createElement trees.

2. **Patch-Only Updates**
   - Changes must be additive (icon size, class, visual tweak).
   - No removal or replacement of trusted logic without explicit override.

3. **Trusted Markers Required**
   Files must carry:
   ```js
   // trustedview: true
   // sourcedby: DeepSeek or UserUpload
   ```

4. **Override Rule**
   - If override is unavoidable, patch must include:
     ```js
     override: true
     ```
   - Must explain why the override is required.

5. **Swarm Behavior**
   - Workers must run `trusted?()` check before modifying logic files.
   - Intern patches must respect prior layout, event logic, and render structure.

---

## 🧠 Active Policy: [MEMORY_POLICY: TRUSTED_LOGIC_GLOBAL]
Connected to: https://github.com/iammrmikeman/MODGPT

This policy is binding for all future patches and worker behavior within MODGPT memory workflows.
