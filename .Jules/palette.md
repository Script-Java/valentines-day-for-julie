## 2026-06-26 - Custom Interactive Components Need Accessibility Attributes
**Learning:** When using `div` elements as custom buttons (like the `CouponCard` component), they inherently lack keyboard focus and event handling. This makes them completely inaccessible to keyboard and screen reader users.
**Action:** Always add `role="button"`, `tabIndex={0}`, appropriate ARIA attributes (like `aria-expanded`), and an `onKeyDown` handler for Enter and Space keys. Ensure visual focus states are implemented using classes like `focus-visible:ring`.
