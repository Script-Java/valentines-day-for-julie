## 2026-05-21 - Interactive Divs as Buttons in Next.js
**Learning:** Custom interactive elements (like generic divs used as `CouponCard` buttons) often lack native keyboard navigation and semantic meaning, severely harming accessibility. React's `onClick` handlers do not automatically wire up `Enter` or `Spacebar` for `div` elements.
**Action:** When using `div`s for interactivity, explicitly add `role="button"`, `tabIndex={0}`, `onKeyDown` handling for 'Enter'/'Space', `aria-expanded` (or relevant ARIA states), and `focus-visible:ring-*` for visual focus states.
