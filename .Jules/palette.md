## 2024-05-03 - Coupon Card Keyboard Accessibility Fixes
**Learning:** In Next.js/React applications, generic `div` elements used as interactive components (like flippable cards) are completely inaccessible to keyboard-only and screen reader users by default. Relying solely on `onClick` creates a barrier.
**Action:** Always verify custom interactive `div` elements have `role="button"`, `tabIndex={0}`, appropriate ARIA attributes (like `aria-expanded`), an `onKeyDown` handler for 'Enter'/'Space', and distinct `focus-visible` styling (e.g., `focus-visible:ring-4`) for clear visual feedback.
