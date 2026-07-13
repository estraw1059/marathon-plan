# Sub-3:15 Marathon Plan

Interactive 16-week training calendar (Jul 20 – Nov 7, 2026). Click any day for the full workout, paces, strength routines, core work, and yoga.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Features

- Full 16-week calendar, color-coded (quality / long / easy / rest / Scotland / race)
- Click a day → detailed instructions, relevant paces, and full strength/core routines
- "Mark completed" tracking with a progress bar (saved in your browser via localStorage)
- Today is highlighted and auto-scrolled into view
- Training paces and complete strength guide available from the toolbar
- Scotland weeks (Sep 14–27) are time-based with a no-equipment bodyweight circuit

## Editing the plan

All plan data lives in `src/data.js` — workouts, paces, and strength routines. Adjust paces there when you re-test fitness around Week 11.
