## 2025-02-27 - Evading Button Accessibility
**Learning:** The "catch-me-if-you-can" button pattern (used for the "No" button) must handle keyboard focus (`onFocus`) in addition to mouse/touch hover. Without this, a user can easily bypass the intended evasion interaction by simply tabbing to the button and pressing Enter.
**Action:** Always bind evasion logic to both pointer events (`onMouseEnter`, `onTouchStart`) and keyboard navigation (`onFocus`) to ensure the interaction remains intact for keyboard users.
