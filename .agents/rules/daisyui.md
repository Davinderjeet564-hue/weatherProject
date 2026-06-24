---
trigger: always_on
---

Use DaisyUI + Tailwind for all UI styling across the project. Keep the design modern, clean, and “high-contrast minimal” (simple layout, strong spacing, tasteful rounded corners), avoiding generic boilerplate classes.

## Must
- Prefer a DaisyUI theme + component primitives (buttons, cards, inputs, badges, modals) as the base.
- Use Tailwind only for layout/spacing/typography/variants that DaisyUI doesn’t cover.
- Standardize tokens via Tailwind theme values (spacing, font sizes, colors) and reuse existing utility patterns from current components.
- Aim for consistent sizing and rhythm: use the same spacing scale (e.g., multiples of 4) and consistent border radius (match project theme).

## Do
- Use gradients and shadows sparingly for emphasis (e.g., subtle card lift, one accent gradient max per screen).
- Favor readable typography: clear hierarchy (one primary heading style, one body style), tight line-height, and limited font-weight variety.
- Use responsive utilities with a “mobile-first then enhance” approach (base first, then `sm/md` adjustments only where it changes layout).

## Don’t
- Don’t use arbitrary pixel values (no `w-[123px]`, `p-[17px]`) unless there’s a documented design requirement.
- Don’t introduce new ad-hoc color palettes; only use the theme’s colors or existing Tailwind/DaisyUI variables.
- Don’t create “generic” class soups (e.g., long chains of unrelated utilities). Keep class sets short and purposeful.

## Examples of acceptable patterns
- Cards: DaisyUI `card` with minimal Tailwind for spacing and subtle shadow.
- Buttons: DaisyUI `btn` with concise Tailwind overrides only for variants.
- Layout: Tailwind `container`-style wrapper + consistent `gap-*` and `px-*` utilities.

## Review checklist
- Does the component use DaisyUI primitives where possible?
- Are spacing, radius, and typography consistent with existing components?
- Is the styling modern/minimal with purposeful emphasis (not decorative everywhere)?