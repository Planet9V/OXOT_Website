# NexBank Menu Navigation Flow Diagram

## Visual Navigation Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         HOMEPAGE                                     │
│                                                                      │
│  ┌──────┐                                                           │
│  │ ☰    │  ← Hamburger Menu Toggle                                 │
│  └──────┘                                                           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                          [CLICK]
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    FULL-SCREEN OVERLAY MENU                          │
│  ╔═══════════════════════════════════════════════════════════╗      │
│  ║  [×] Close                                                ║      │
│  ║                                                           ║      │
│  ║  ┌─────────────────────────────────────────────────────┐ ║      │
│  ║  │  LEVEL 1: PRIMARY CATEGORIES                        │ ║      │
│  ║  ├─────────────────────────────────────────────────────┤ ║      │
│  ║  │  • Institutional Banking      → [Submenu Carousel]  │ ║      │
│  ║  │  • Commercial Banking         → [Submenu Carousel]  │ ║      │
│  ║  │  • Mortgage Banking           → [Submenu Carousel]  │ ║      │
│  ║  │  • About                      → [Direct Link]       │ ║      │
│  ║  │  • Contact                    → [Direct Link]       │ ║      │
│  ║  │  • Online Banking Login       → [CTA Button]        │ ║      │
│  ║  └─────────────────────────────────────────────────────┘ ║      │
│  ║                                                           ║      │
│  ║  Background: Dark (#1a1a1a) with diagonal stripes        ║      │
│  ╚═══════════════════════════════════════════════════════════╝      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                    [CLICK: Institutional Banking]
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│              LEVEL 2: CATEGORY CAROUSEL SUBMENU                      │
│  ╔═══════════════════════════════════════════════════════════╗      │
│  ║                         1/3                               ║      │
│  ║                          ↑                                ║      │
│  ║                    Pagination                             ║      │
│  ║                                                           ║      │
│  ║  ╔════════════════════════════════════════════════════╗   ║      │
│  ║  ║         SLIDE 1: CATEGORY OVERVIEW                 ║   ║      │
│  ║  ╠════════════════════════════════════════════════════╣   ║      │
│  ║  ║                                                    ║   ║      │
│  ║  ║    Financial Institutions                          ║   ║  ◯  │
│  ║  ║    ────────────────────────────────                ║   ║  │  │
│  ║  ║                                                    ║   ║  │  │
│  ║  ║    NexBank is a trusted partner to institutions    ║   ║  N  │
│  ║  ║    nationally, helping them to accelerate growth,  ║   ║  E  │
│  ║  ║    maximize earnings, improve efficiencies and     ║   ║  X  │
│  ║  ║    expand their market presence...                 ║   ║  T  │
│  ║  ║                                                    ║   ║  │  │
│  ║  ║                                                    ║   ║  │  │
│  ║  ║                                                    ║   ║  ◯  │
│  ║  ║  Background: Dark with diagonal stripes            ║   ║      │
│  ║  ║  Text: White                                       ║   ║      │
│  ║  ╚════════════════════════════════════════════════════╝   ║      │
│  ╚═══════════════════════════════════════════════════════════╝      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                        [CLICK: Next ◯]
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗      │
│  ║                         2/3                               ║      │
│  ║                                                           ║      │
│  ║  ╔════════════════════════════════════════════════════╗   ║      │
│  ║  ║      SLIDE 2: NUMBERED SERVICE ITEMS               ║   ║      │
│  ║  ╠════════════════════════════════════════════════════╣   ║      │
│  ║  ║                                                    ║   ║      │
│  ║  ║  01  Revolving Lines of Credit and Holding         ║   ║  ◯  │
│  ║  ║      Company Term Loans                            ║   ║  │  │
│  ║  ║      ─────────────────────────────                 ║   ║  │  │
│  ║  ║      With revolving lines of credit, institutions  ║   ║  N  │
│  ║  ║      can access additional capital quickly...      ║   ║  E  │
│  ║  ║                                                    ║   ║  X  │
│  ║  ║  02  Tailored Depository Services                  ║   ║  T  │
│  ║  ║      ────────────────────────────                  ║   ║  │  │
│  ║  ║      Through tailored depository services and      ║   ║  │  │
│  ║  ║      integrated cash management solutions...       ║   ║  ◯  │
│  ║  ║                                                    ║   ║      │
│  ║  ║                          ╱╲                        ║   ║      │
│  ║  ║                        ╱    ╲  White shape begins ║   ║      │
│  ║  ║  Background: Dark     ╱ White ╲ appearing at      ║   ║      │
│  ║  ║  Text: White        ╱  Shape   ╲ bottom-left      ║   ║      │
│  ║  ╚════════════════════════════════════════════════════╝   ║      │
│  ╚═══════════════════════════════════════════════════════════╝      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                        [CLICK: Next ◯]
                   [WHITE SHAPE ANIMATION: 1200ms]
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗      │
│  ║                         3/3                               ║      │
│  ║                                                           ║      │
│  ║  ╔════════════════════════════════════════════════════╗   ║      │
│  ║  ║   SLIDE 3: DETAILED SPECIFICATIONS (LIGHT BG)      ║   ║      │
│  ║  ╠════════════════════════════════════════════════════╣   ║      │
│  ║  ║                                                    ║   ║      │
│  ║  ║    Public Funds                                    ║   ║  ◯  │
│  ║  ║    (Bronze/olive accent color)                     ║   ║  │  │
│  ║  ║                                                    ║   ║  │  │
│  ║  ║  01  Account Type                                  ║   ║  N  │
│  ║  ║      High-Yield Money Market for Public Funds.     ║   ║  E  │
│  ║  ║                                                    ║   ║  X  │
│  ║  ║  02  Collateral                                    ║   ║  T  │
│  ║  ║      FHLB Dallas Letter of Credit.                 ║   ║  │  │
│  ║  ║                                                    ║   ║  │  │
│  ║  ║  03  Interest Payments                             ║   ║  ◯  │
│  ║  ║      Interest on deposits is calculated on a       ║   ║      │
│  ║  ║      365-day basis...                              ║   ║      │
│  ║  ║                                                    ║   ║      │
│  ║  ║  04  Additional Features                           ║   ║      │
│  ║  ║      6 withdrawals per monthly statement cycle...  ║   ║      │
│  ║  ║                                                    ║   ║      │
│  ║  ║  05  Ratings                                       ║   ║      │
│  ║  ║      Egan-Jones Ratings Company: Bank A-...        ║   ║      │
│  ║  ║                                                    ║   ║      │
│  ║  ║  Background: White/Off-white (#f8f8f8)             ║   ║      │
│  ║  ║  Text: Dark gray (#2a2a2a)                         ║   ║      │
│  ║  ╚════════════════════════════════════════════════════╝   ║      │
│  ╚═══════════════════════════════════════════════════════════╝      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Carousel State Machine

```
┌──────────────┐
│   SLIDE 1    │
│  (Overview)  │
└──────┬───────┘
       │
       │ [Next Button]
       ↓
┌──────────────┐
│   SLIDE 2    │
│ (Services    │
│  01, 02)     │
└──────┬───────┘
       │
       │ [Next Button]
       │ + White Shape Animation (1200ms)
       ↓
┌──────────────┐
│   SLIDE 3    │
│ (Details     │
│  01-05)      │
└──────┬───────┘
       │
       │ [Next Button] → Loops to SLIDE 1
       │ [Prev Button] → Back to SLIDE 2
       │
       └─────────────────────────────────┐
                                         │
                   ┌─────────────────────┘
                   │
                   ↓
           ┌──────────────┐
           │  CONTINUOUS  │
           │    LOOP      │
           └──────────────┘
```

---

## Animation Timeline

### Menu Open Sequence (800ms total)

```
0ms     │────────────────────────────────────────────────│
        │  Hamburger Click                               │
        │                                                │
0-300ms │  ░░░░░░░░░░                                    │
        │  Background Fade In (opacity 0→1)              │
        │                                                │
100ms   │      ▓▓▓▓▓▓▓▓▓▓▓▓                             │
        │      Diagonal Stripes Reveal                   │
        │                                                │
200ms   │          ▓▓ ▓▓ ▓▓ ▓▓ ▓▓                       │
        │          Menu Items Stagger In                 │
        │          (cascade from top, 50ms delay each)   │
        │                                                │
800ms   │                                        ✓       │
        │                                Full Interactive│
        └────────────────────────────────────────────────┘
```

### Carousel Slide Transition (800ms)

```
0ms     │────────────────────────────────────────────────│
        │  Next/Prev Button Click                        │
        │                                                │
0-400ms │  ▓▓▓▓▓▓▓▓▓▓                                    │
        │  Current Slide Fade Out (opacity 1→0)          │
        │                                                │
200ms   │      ░░░░░░░░░░░░░░                            │
        │      New Slide Fade In (opacity 0→1)           │
        │                                                │
400ms   │                  ◉                             │
        │                  Pagination Update (1/3→2/3)   │
        │                                                │
800ms   │                                        ✓       │
        │                            Transition Complete │
        └────────────────────────────────────────────────┘
```

### White Shape Animation (1200ms) - Slide 2→3 Only

```
0ms     │────────────────────────────────────────────────────────│
        │  Next Button Click (Slide 2 active)                    │
        │                                                        │
0-1200ms│  ╱╲                                                    │
        │ ╱  ╲ ═══════════════════════════════════════╗         │
        │╱ WS ╲                                        ║         │
        │ Shape ╲  White Shape Expands & Slides Up     ║         │
        │        ╲                                     ║         │
        │         ╲  transform: translateY(100%)→0%    ║         │
        │          ╲           scale(0.1)→1.5          ║         │
        │           ╲                                  ║         │
        │            ╲ Cubic bezier easing             ║         │
        │             ╲                                ║         │
        │              ╚═══════════════════════════════╝         │
        │                                                        │
0-800ms │  ▓▓▓▓▓▓▓▓▓▓                                            │
        │  Slide Content Crossfade (synchronized)                │
        │                                                        │
1200ms  │                                                    ✓   │
        │                                        Animation Done  │
        └────────────────────────────────────────────────────────┘
```

---

## Color Transition Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  SLIDE 1                SLIDE 2              SLIDE 3            │
│  ═══════════════════════════════════════════════════════════    │
│                                                                 │
│  ┌──────────────┐      ┌──────────────┐    ┌──────────────┐   │
│  │              │      │              │    │              │   │
│  │   #1a1a1a    │      │   #1a1a1a    │    │   #f8f8f8    │   │
│  │   (Dark)     │  →   │   (Dark)     │ →  │   (Light)    │   │
│  │              │      │        ╱╲    │    │              │   │
│  │   White      │      │      ╱    ╲  │    │   Dark       │   │
│  │   Text       │      │    ╱ White ╲ │    │   Text       │   │
│  │              │      │  ╱   Shape  ╲│    │              │   │
│  │   Diagonal   │      │╱_____________╲    │   Plain      │   │
│  │   Stripes    │      │ Diagonal      │    │   White      │   │
│  │              │      │ Stripes       │    │   BG         │   │
│  └──────────────┘      └──────────────┘    └──────────────┘   │
│                                                                 │
│  High Contrast       Transition State      Inverted Contrast   │
│  (15:1 ratio)        (Mixed state)         (12:1 ratio)        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Responsive Breakpoint Behavior

```
┌──────────────────────────────────────────────────────────────────┐
│  DESKTOP (1200px+)                                               │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ╔═══════════════════════════════════════════════════════╗       │
│  ║  [Category Title - 56px]                              ║       │
│  ║                                                       ║       │
│  ║  01  Service Title (28px bold)                        ║  ◯   │
│  ║      Description text (18px)                          ║  │   │
│  ║      Max-width: 600px                                 ║  N   │
│  ║                                                       ║  E   │
│  ║  02  Service Title (28px bold)                        ║  X   │
│  ║      Description text (18px)                          ║  T   │
│  ║                                                       ║  │   │
│  ║  Circular nav buttons (48x48px)                       ║  ◯   │
│  ╚═══════════════════════════════════════════════════════╝       │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│  TABLET (768px - 1199px)                                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ╔════════════════════════════════════════════╗                  │
│  ║  [Category Title - 48px]                   ║                  │
│  ║                                            ║                  │
│  ║  01  Service Title (24px bold)             ║  ◯              │
│  ║      Description (16px)                    ║  │              │
│  ║      Max-width: 500px                      ║  │              │
│  ║                                            ║  │              │
│  ║  02  Service Title (24px bold)             ║  ◯              │
│  ║      Description (16px)                    ║                  │
│  ║                                            ║                  │
│  ║  Nav buttons (44x44px - touch-friendly)    ║                  │
│  ╚════════════════════════════════════════════╝                  │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│  MOBILE (< 768px)                                                │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ╔═══════════════════════════════╗                               │
│  ║ [Title - 36px]                ║                               │
│  ║                               ║                               │
│  ║ 01 Service (20px)             ║                               │
│  ║    Desc (14px)                ║                               │
│  ║                               ║                               │
│  ║ 02 Service (20px)             ║                               │
│  ║    Desc (14px)                ║                               │
│  ║                               ║                               │
│  ║ Swipe gestures enabled        ║                               │
│  ║ Dot pagination (●○○)          ║                               │
│  ╚═══════════════════════════════╝                               │
└──────────────────────────────────────────────────────────────────┘
```

---

## Numbered Item Layout Patterns

### Expanded Format (Slides 1-2)

```
┌────────────────────────────────────────────────────────┐
│  01    Revolving Lines of Credit and                   │
│  ↑     Holding Company Term Loans                      │
│  │     ───────────────────────────────────             │
│  │                                                      │
│  4px   With revolving lines of credit, institutions    │
│ gap   can access additional capital quickly and        │
│        easily to take advantage of short-term          │
│        opportunities as they arise. Holding company    │
│        term loans offer the long-term capital and      │
│        flexibility institutions need to meet...        │
│                                                         │
│        [60px margin-bottom before next item]           │
└────────────────────────────────────────────────────────┘
```

### Compact Format (Slide 3)

```
┌────────────────────────────────────────────────────────┐
│  01    Account Type                                    │
│        High-Yield Money Market for Public Funds.       │
│        [32px margin-bottom]                            │
│                                                         │
│  02    Collateral                                      │
│        FHLB Dallas Letter of Credit.                   │
│        [32px margin-bottom]                            │
│                                                         │
│  03    Interest Payments                               │
│        Interest on deposits is calculated on a         │
│        365-day basis. Simple interest accrues...       │
│        [32px margin-bottom]                            │
│                                                         │
│  04    Additional Features                             │
│        6 withdrawals per monthly statement cycle...    │
└────────────────────────────────────────────────────────┘
```

---

## Interaction State Diagram

```
                    ┌──────────────────┐
                    │  HOMEPAGE        │
                    │  Menu Closed     │
                    └────────┬─────────┘
                             │
                    [Hamburger Click]
                             │
                             ↓
                    ┌──────────────────┐
                    │  MENU OPEN       │
                    │  Level 1 Visible │
                    └────────┬─────────┘
                             │
                ┌────────────┼────────────┐
                │            │            │
       [Category Click]  [About]    [Login]
                │            │            │
                ↓            ↓            ↓
      ┌──────────────┐  ┌────────┐  ┌────────┐
      │ SUBMENU      │  │ Direct │  │ Direct │
      │ CAROUSEL     │  │ Link   │  │ Link   │
      │ Slide 1      │  └────────┘  └────────┘
      └──────┬───────┘
             │
   ┌─────────┼─────────┐
   │         │         │
[Prev]   [Next]    [Close]
   │         │         │
   └────┬────┼────┬────┘
        │    │    │
        ↓    ↓    ↓
   ┌────────────────────┐
   │  Slide 2           │
   │  (Services 01-02)  │
   └────────┬───────────┘
            │
         [Next]
       + Animation
            │
            ↓
   ┌────────────────────┐
   │  Slide 3           │
   │  (Details 01-05)   │
   └────────────────────┘
```

---

**Document Version:** 1.0
**Created:** 2025-11-13
**Companion to:** nexbank-menu-system-analysis.md
