## 2025-03-01 - Interactive Div Accessibility
**Learning:** Custom interactive elements (like generic divs used as buttons for flip-card effects in this repo) often lack keyboard support and screen reader context out of the box, leading to poor accessibility for non-mouse users.
**Action:** When using a div as a button, always add `role="button"`, `tabIndex={0}`, appropriate `aria-*` attributes (e.g., `aria-expanded`), an `onKeyDown` handler to support 'Enter' and 'Space' keys, and a visual focus state (e.g., `focus-visible:ring`).
