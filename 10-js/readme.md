# How Node.js Executes Code

Understanding the internal process of how Node.js (and the V8 engine) handles JavaScript code.

<details>
<summary>Click to view Execution Flow Diagram</summary>

```mermaid
graph TD
    A[Source Code] -->|Inject| B(Node.js / V8 Engine)
    B --> C{Parsing Phase}
    C -->|Success| D[Abstract Syntax Tree (AST)]
    C -->|Syntax Error| E[Throw Error]
    D --> F[JIT Compiler]
    F --> G[Bytecode]
    G --> H[Execution Phase]
    H -->|On Interaction| I[Machine Code]
```

</details>

## 1. Parsing and Validation

- When a code file is executed, **Node.js** and the **V8 engine** take charge.
- The code is parsed into a **Syntax Tree** (AST).
- This step validates the code structure:
  - If there are syntax errors (e.g., typos like `console a`), the engine detects them immediately and notifies the user.

## 2. JIT Compilation

- Once the syntax tree is generated, it is passed to the **Just-In-Time (JIT) Compiler**.
- The JIT compiler is a built-in component of the runtime that optimizes execution.

## 3. Bytecode Conversion

- Node.js converts the parsed syntax tree into **Bytecode**.
- Bytecode is a low-level, optimized representation of the code, making it ready for rapid execution.

## 4. Execution (Machine Code)

- Since the code is pre-processed into Bytecode, execution is highly efficient.
- The V8 engine quickly converts Bytecode into **Machine Code** whenever specific actions occur (e.g., clicking a button, logging in, or submitting a form).
- This ensures fast performance for all code execution tasks.
