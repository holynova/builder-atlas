# Builder Atlas 1.1

## 1. Visual theme and atmosphere
An editorial learning desk. Paper, ink, and orange annotations connect diagrams to source material. The main surface teaches before it catalogs.

## 2. Color palette and roles
Canvas #f8f9f6; sidebar #ecefe8; ink #17201d; secondary text #52615a; accent #ed4d26; dividers #dce1da; diagram selected surface #17201d with text #f8f9f6.

## 3. Typography rules
System Latin and PingFang SC for Chinese interface and reading text. Georgia for Latin profile names, chosen for an editorial archive rather than a dashboard. Display 44–64px, section 24px, body 16px with 1.8 line height, labels 12px. No negative tracking on Chinese.

## 4. Component stylings
Plain CSS only. Radius scale: 3px controls, 8px teaching panels, pill counters. Buttons have 40px minimum hit area, visible orange focus and pointer press scale 0.98. Active controls use ink; source links remain underlined. Reading details use native disclosures.

## 5. Layout principles
Spacing ladder 8, 16, 24, 32, 48, 64px. Desktop has a 288px index and a flexible learning canvas. Teaching diagrams have an explicit root, selectable related ideas, and a source-linked explanation.

## 6. Depth and elevation
Use solid background steps. Diagram panels are light; selected nodes are dark. No decorative shadows, gradients, or glass.

## 7. Do's and don'ts
Keep 30 profiles and 66 source entries. Mark editorial exercises separately from author claims. Preserve source access limits. Diagrams indicate reading structure, not invented causal relationships. Do not claim ASD-STE100 compliance or actual video generation. No automatic animation on load.

## 8. Responsive behavior
At 700px the index opens through a menu. Teaching nodes stack; route rows wrap; controls retain 40px targets at 320px. Reduced motion disables scroll and press transitions. Keyboard navigation changes content immediately.

## 9. Agent prompt guide
Colors: canvas #f8f9f6, sidebar #ecefe8, ink #17201d, accent #ed4d26.
- Add a source disclosure on #f8f9f6 with 16px weight 400 text, line-height 1.8, 0 letter-spacing, 24px padding and 1px #dce1da top border.
- Add a diagram node with 8px radius, 16px weight 600 text, line-height 1.6, 0 letter-spacing, 16px padding and selected background #17201d, text #f8f9f6.
- Add an action button with 3px radius, 14px weight 500 text, 0 letter-spacing, 40px minimum height, #17201d background and #f8f9f6 text, with 2px #ed4d26 focus outline.
