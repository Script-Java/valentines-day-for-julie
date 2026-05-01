## 2026-05-01 - Evasive UI Elements and Keyboard Accessibility
**Learning:** When implementing 'evasive' UI elements (like a button that moves away on hover) as a joke or interactive quirk, keyboard users will bypass the `onMouseEnter` trigger if navigating via Tab. This creates an inconsistent experience and potentially confusing state.
**Action:** Always bind the evasion logic to `onFocus` in addition to `onMouseEnter` (and `onTouchStart` for mobile) to maintain functional parity across all interaction modes.
