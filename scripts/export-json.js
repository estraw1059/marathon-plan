// Regenerate public/plan.json from src/data.js — run: npm run export:json
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { WEEKS, PACES, ROUTINES, PLAN_START, RACE_DATE, DAY_NAMES, dayDate } from '../src/data.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const iso = (d) => d.toISOString().slice(0, 10)

const weeks = WEEKS.map((w, wIdx) => {
  const days = w.days.map((d, dIdx) => {
    const date = dayDate(wIdx, dIdx)
    const out = {
      date: iso(date),
      dayOfWeek: DAY_NAMES[dIdx],
      workout: d.run,
      type: d.type,
    }
    if (d.sub) out.note = d.sub
    if (typeof d.miles === 'number') out.miles = d.miles
    out.detail = d.detail
    out.strength = d.strength ?? null
    out.core = !!d.core
    out.yoga = d.yoga ? { minutes: d.yoga.min, kind: d.yoga.kind } : null
    return out
  })
  return {
    week: w.n,
    startDate: iso(dayDate(wIdx, 0)),
    endDate: iso(dayDate(wIdx, 6)),
    plannedMiles: w.total,
    label: w.label ?? null,
    scotland: !!w.scot,
    days,
  }
})

const plan = {
  name: 'Sub-3:15 Marathon Plan',
  athlete: 'Eric Straw',
  goalTime: '3:15:00',
  goalPacePerMile: '7:25',
  planStart: iso(PLAN_START),
  raceDate: iso(RACE_DATE),
  totalWeeks: WEEKS.length,
  generatedAt: new Date().toISOString(),
  revision: '2026-09-04 — long-run progression reworked (18/18 pre-Scotland, 18/20/20 in wks 11-13)',
  paces: PACES.map(p => ({ name: p.name, pace: p.pace, note: p.note })),
  strengthRoutines: Object.fromEntries(
    Object.entries(ROUTINES).map(([k, r]) => [k, {
      title: r.title, note: r.note,
      exercises: r.exercises.map(e => ({ name: e.name, dose: e.dose, how: e.how, cue: e.cue || null })),
    }])
  ),
  weeks,
}

mkdirSync(resolve(root, 'public'), { recursive: true })
const json = JSON.stringify(plan, null, 2)
writeFileSync(resolve(root, 'public/plan.json'), json)
console.log(`wrote public/plan.json — ${weeks.length} weeks, ${weeks.reduce((s, w) => s + w.days.length, 0)} days, ${(json.length / 1024).toFixed(1)} KB`)
