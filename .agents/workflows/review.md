---
description: # Workflow: Expert Project Review (Bugs, Mistakes, Improvements)
---

**Role:** Senior Software Engineer + Code Reviewer  
**Goal:** Identify bugs, incorrect behavior, security/perf issues, maintainability problems, and high-impact improvements.  
**Output format:** a prioritized checklist + concrete fixes.

## Steps (agent)
1. **Map the project**
   - Identify language/framework, key folders, entry points, build/test commands, and runtime flow.
   - Note architectural patterns and boundaries (services/modules/layers).

2. **Establish baselines**
   - Read existing linting/formatting rules, test setup, CI config, type checks, and environment config.
   - Identify the “happy path” and critical user flows.

3. **Bug hunt (correctness)**
   - Scan for likely runtime errors: null/undefined handling, async/await misuse, missing returns, incorrect conditions, off-by-one issues.
   - Look for broken imports/paths, incorrect routes/handlers, mismatched interfaces, and stale mocks.
   - Review error handling: swallowed errors, inconsistent status codes/messages, missing retries.

4. **Static issues (quality + maintainability)**
   - Find code smells: duplicated logic, large functions, dead code, unused variables/imports, overly complex conditionals.
   - Check naming consistency, module boundaries, and whether abstractions match usage.

5. **Testing gaps**
   - Assess coverage around critical paths.
   - Identify missing tests: edge cases, failure modes, integration boundaries.
   - Suggest test types (unit/integration/e2e) and what to add first.

6. **Performance & resource use**
   - Look for N+1 patterns, inefficient loops, unnecessary re-renders (if UI), heavy synchronous work, memory growth risks.
   - Check caching, pagination, and batching opportunities.

7. **Security & privacy (practical)**
   - Search for injection risks (SQL/command/template), unsafe serialization, path traversal, SSRF, XSS/CSRF (if web), and credential handling.
   - Verify secrets usage, logging of sensitive data, and safe defaults.

8. **API/contract consistency**
   - Validate request/response shapes, schema validation, versioning assumptions, and error contract consistency.
   - Check compatibility between frontend/backend (or consumers/producers).

9. **Observability**
   - Review logging quality, error reporting, metrics/tracing hooks, and usefulness of messages.
   - Identify missing correlation IDs / structured logs where appropriate.

10. **Prioritized recommendations**
   - Produce a ranked list:
     - **P0 (must-fix):** bugs/security issues blocking correctness or causing crashes/data exposure
     - **P1 (should-fix):** correctness edge cases, high-risk refactors, reliability issues
     - **P2 (nice-to-have):** maintainability improvements, performance tuning, ergonomics
   - For each item include:
     - **Issue**
     - **Evidence (file/function/line ranges if available)**
     - **Impact**
     - **Suggested fix (concrete)**
     - **If unclear:** what to investigate next

11. **Apply fixes option**
   - If the user allows: propose a small patch plan in the safest order.
   - Prefer minimal diffs first; ensure tests/lint/typecheck pass.

## Output checklist (agent must include)
- [ ] P0 fixes (with concrete proposals)
- [ ] P1 improvements
- [ ] P2 enhancements
- [ ] Testing recommendations (what to add + where)
- [ ] Performance review findings
- [ ] Security review findings
- [ ] Suggested next steps (run commands / verify items)
