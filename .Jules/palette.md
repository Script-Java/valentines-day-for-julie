## 2025-05-07 - Added keyboard accessibility to custom elements
**Learning:** Custom interactive elements (like generic divs used as buttons) must include `role="button"`, `tabIndex={0}`, `aria-*` attributes (e.g., `aria-expanded`), `onKeyDown` handlers for "Enter"/"Space", and visual focus states (e.g., `focus-visible:ring-4`) to ensure they are accessible.
**Action:** Always add keyboard accessibility features when building interactive elements with divs or when creating custom components acting like buttons.
