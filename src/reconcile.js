// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Nov 9, 2026 — RACE COMPLETE. Indianapolis Monumental, 3:22:45.'

export const RACE_RESULT = {
  time: '3:22:45',
  pr: '17-minute PR',
  prev: 'Previous best 3:40 (2025)',
  conditions: '34°F at the gun, clear, light wind — 9 degrees colder than forecast',
  halves: ['1:35:44', '1:48:31'],
  split: '+12:47 positive split',
  hr: 'Avg 164 · Max 191',
  quote: '“Shout out to my support crew! Had so much fun.”',
  splits: [
    [1,'7:48',147],[2,'7:37',157],[3,'7:13',158],[4,'7:25',156],[5,'7:20',162],
    [6,'7:21',158],[7,'7:19',157],[8,'7:25',157],[9,'7:23',158],[10,'7:17',157],
    [11,'7:17',169],[12,'7:14',178],[13,'7:16',182],[14,'7:20',177],[15,'7:21',176],
    [16,'7:23',181],[17,'7:31',176],[18,'7:33',177],[19,'7:29',177],[20,'7:42',173],
    [21,'8:19',161],[22,'8:14',159],[23,'8:36',158],[24,'8:54',156],[25,'9:08',154],[26,'9:26',152],
  ],
  prs: [['10K','45:17'],['10 mile','1:12:59'],['Half','1:35:44'],['30K','2:17:36'],['Marathon','3:22:45']],
}

export const RACE_READ = {
  title: 'What happened — and why it is the most useful race you could have run',
  body: [
    'First, the thing that matters: you ran 3:22:45. That is a seventeen-minute personal best, on a day you describe as fun, with your crew there. Thirteen PRs in one morning — 10K, 10 mile, half, 30K and the marathon itself. Whatever follows, start there.',
    'Now the diagnosis, because the data is unusually clean and it is worth more to you than the medal. The plan was 7:38 for three miles, then 7:30 through fifteen. You ran mile 3 in 7:13 and then sat at 7:14–7:25 for ten straight miles. Halfway came in 1:35:44 — that is 3:11:28 pace, nearly three minutes ahead of a plan you had agreed was already the ambitious option.',
    'Your heart rate called it before your legs did. Miles 1–10 sat at 147–162, exactly where it should be. Then mile 11: 169. Mile 12: 178. Mile 13: 182 — and it stayed between 173 and 182 for the next seven miles. On Oct 17 you held 7:25 at 158. At the same pace on race day you were running 20 beats higher. That gap is the whole race.',
    'The wall arrived at mile 21, and the shape of it is diagnostic: your splits went 8:19, 8:14, 8:36, 8:54, 9:08, 9:26 while your heart rate FELL to 152–161. A fade with falling HR is not a cardiovascular limit — your heart had plenty left. It is glycogen and muscular failure. You spent the fuel in the first half and the last six miles were run on an empty tank.',
    'One genuine mitigating factor: it was 34°F at the gun, nine degrees colder than the forecast you planned around. Cold starts make early pace feel effortless — the body wants to warm up and the watch reads fast for free. Almost everyone goes out hot in those conditions. It explains the first three miles. It does not explain miles 10 through 16, by which point you were warm and the HR was already telling you.',
  ],
  counterfactual: [
    ['Run the plan: 7:30 to mile 20, 7:35 after', '3:17:10'],
    ['Run the plan with a mild fade to 7:50', '3:18:43'],
    ['Run the plan with a bad fade to 8:10', '3:20:47'],
    ['What actually happened', '3:22:45'],
  ],
  closing: 'Every version of running the plan beats what you ran — including the version where the back half goes badly. You did not lack fitness on Nov 7; the first twenty miles prove that beyond argument. You lacked three minutes of patience in the first half. That is the single most common mistake in marathoning and now you have your own heart-rate trace of it, which is worth more than reading about it a hundred times.',
}

export const SCOREBOARD = [
  { n: 1, dates: 'Jul 20–26', plan: 36, actual: '36.1', delta: '+0.1',
    long: '10 → 10.1 mi @ 8:44', quality: '6 + strides ✓ · tempo 2 mi @ 7:15 (plan 3)',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 2, dates: 'Jul 27–Aug 2', plan: 38, actual: '39.0', delta: '+1.0',
    long: '11 → 11.0 mi @ 8:30', quality: '8×400 ✓ splits ±1s · tempo 2 mi @ 7:15',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 3, dates: 'Aug 3–9', plan: 40, actual: '40.0', delta: '+0.0',
    long: '12 → 12.0 mi @ 9:00', quality: '6×800 ✓ · tempo 4 mi @ 8:15 (way off)',
    str: '1/1', core: '1/1', yoga: '5/7', status: 'warn' },
  { n: 4, dates: 'Aug 10–16', plan: 33, actual: '33.3', delta: '+0.3',
    long: '10 → 10.0 mi @ 8:37', quality: 'strides ✓ · tempo 2 mi @ 7:05 ON TARGET',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 5, dates: 'Aug 17–23', plan: 42, actual: '44.0', delta: '+2.0',
    long: '13 → 14.2 mi @ 8:38', quality: '5×1000 @ 6:40 ✓ · tempo 3 mi (plan 4)',
    str: '1/1', core: '0/1', yoga: '6/7', status: 'warn' },
  { n: 6, dates: 'Aug 24–30', plan: 44, actual: '46.1', delta: '+2.1',
    long: '14 → 16.2 mi @ 9:12', quality: '6×800 @ 6:40 ✓ · tempo ~5 mi',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 7, dates: 'Aug 31–Sep 6', plan: 49, actual: '44.3', delta: '−4.7',
    long: '18 → 12.1 mi @ 9:31 ✗', quality: '4×1200 @ 6:35 ✓ · MP 4 mi @ 7:19 (plan 5)',
    str: '1/1', core: '0/1', yoga: '6/7', status: 'bad' },
  { n: 8, dates: 'Sep 7–13', plan: 45, actual: '39.0', delta: '−6.0',
    long: '18 → 18.0 mi @ 9:36 ✓', quality: 'TEMPO 5 mi @ 7:12 ✓✓ · intervals missed ✗',
    str: '1/1', core: '1/1', yoga: '3/7', status: 'warn' },
  { n: 9, dates: 'Sep 14–20', plan: '~34', actual: '28.8', delta: '−5.2',
    long: "LONG 90′ → 88′ / 8.3 mi ✓", quality: '4×1200 @ 6:30 ✓ (made up W8) · 5 mi w/ pace @ 7:54 on hills',
    str: '1/1', core: '0/1', yoga: '0/7', status: 'live' },
  { n: 10, dates: 'Sep 21–27', plan: '~38', actual: '29.6', delta: '−8.4',
    long: 'LONG 2 hr → 18.8 mi / 2:57 ✓✓', quality: '4×800 @ 6:45 ✓ · 2 big hikes (Storr, Arthur’s Seat)',
    str: '0/1', core: '0/1', yoga: '0/7', status: 'live' },
  { n: 11, dates: 'Sep 28–Oct 4', plan: 51, actual: '44.2', delta: '−6.9',
    long: '18 → 17.1 mi @ 9:00 ✓', quality: '6×800 @ 6:25 ✓✓ · MP 5 mi @ 7:25 ✓✓ · PM double 3.3 @ 9:58 ✓',
    str: '1/1', core: '0/1', yoga: '0/7', status: 'good' },
  { n: 12, dates: 'Oct 5–11', plan: '~10', actual: '6.5', delta: 'REST',
    long: 'cancelled → 3 mi test Sun ✓', quality: 'Knee/quad reset week. Six days off, then 3 mi on Oct 11 — "I’m back"',
    str: '0/1', core: '0/1', yoga: '3/7', status: 'live' },
  { n: 13, dates: 'Oct 12–18', plan: '~33', actual: '42.1', delta: '+9.1',
    long: '13 easy → 21.1 mi @ 8:07, last 6 @ 7:25 ✓✓✓', quality: '3×1200 ✓ · Tue double 4.5 mi · the long run WAS the dress rehearsal',
    str: '0/1', core: '0/1', yoga: '2/7', status: 'good' },
  { n: 14, dates: 'Oct 19–25', plan: 38, actual: '19.0', delta: '−19.0',
    long: '12 easy → missed (ill)', quality: 'Tue 6 + strides ✓ · Thu 2×2 mi @ 6:50 ✓✓ then SICK Wed–Sun',
    str: '1/1', core: '0/1', yoga: '0/7', status: 'bad' },
  { n: 15, dates: 'Oct 26–Nov 1', plan: 27, actual: '33.3', delta: '+6.3',
    long: '9 → 10.0 mi @ 8:44 ✓', quality: 'Thu MP session SKIPPED (social run instead) · recovered well from illness',
    str: '1/1', core: '0/1', yoga: '1/7', status: 'warn' },
  { n: 16, dates: 'Nov 2–8', plan: '13 + RACE', actual: '8.1 + 26.2', delta: 'RACE',
    long: 'INDY MONUMENTAL — 3:22:45 🏁', quality: 'Taper clean · 17-min PR · 13 PRs on the day',
    str: '0/1', core: '0/1', yoga: '2/7', status: 'good' },
]

export const SCOREBOARD_NOTE =
  'BLOCK COMPLETE. 566 miles across 16 weeks, 14 of 15 long runs, finishing with a 17-minute marathon PR. ' +
  'Week 15 ran over target as the illness cleared; the Thursday marathon-pace touch was the one taper session missed. ' +
  'Race-week taper was clean.'

export const COMPLETION = [
  { label: 'Weekly mileage targets hit', value: '7 of 14', pct: 50 },
  { label: 'Long runs completed', value: '13 of 14 — only the taper 12 missed', pct: 93 },
  { label: 'Peak long run', value: '21.1 mi w/ 6 @ MP, 3 weeks out', pct: 100 },
  { label: 'Intervals', value: '8 of 9', pct: 89 },
  { label: 'Tempo / MP volume', value: '~82% of prescribed miles', pct: 82 },
  { label: 'Strength A (Mon)', value: '10 of 13 — none since Sep 28', pct: 77 },
  { label: 'Core', value: '6 of 13 — none since Sep 10', pct: 46 },
  { label: 'Yoga', value: '49 of 91 days', pct: 54 },
]

export const SINCE_LAST = {
  title: 'Since the last check (Oct 19–26) — illness took the week',
  wins: [
    ['Thu Oct 22 — 2 × 2 mi at 6:50, in 82°F', 'The fastest threshold work of the entire block — 22 sec/mi quicker than the 7:12 five-miler in September — and you ran it in 82-degree heat on the day you were coming down with something. Heat-adjusted that is roughly 6:34.'],
    ['Tue Oct 20 — 6 easy + strides, exactly as written', 'In 53°F. Clean execution of the session we swapped in for reps.'],
    ['Mon Oct 19 — strength is back', 'First Monday session since Sep 28, after a three-week gap.'],
    ['You rested when ill instead of pushing', 'Walks on Wed and Thu, a gentle walk-run Sunday. A year ago that might have been four forced bad runs. This is the right instinct.'],
  ],
  misses: [
    ['Sick Wed–Sun', '19 of 38 miles. The 12-mile taper long run gone entirely.'],
    ['The Oct 22 tempo was run while getting sick', 'Great session, questionable timing — you had already woken up ill the day before. Something to notice, not to beat yourself up over.'],
    ['Yoga: 0 of 7 again', 'Fourth week out of five near zero.'],
  ],
}

export const FATIGUE = {
  title: 'You are not less fit than you were. You are less rested than you will be.',
  body: [
    'You said you feel lost about your fitness, so here is the arithmetic rather than reassurance. Measurable detraining takes roughly two weeks of doing nothing. You lost five days, and they landed in a TAPER week — the cheapest week in the entire sixteen, the one whose only job is to make you fresh. Losing it costs you almost nothing physically. What it cost you is the feeling of being ready, which is a different thing and not one the race cares about.',
    'What has actually happened in the last three weeks: Oct 17, 21.1 miles with the final six at exactly 7:25 and heart rate FALLING from 168 to 158 across them. Oct 22, two by two miles at 6:50 in 82-degree heat, your quickest threshold work of the cycle. Those are not the numbers of a man whose fitness has gone anywhere.',
    'The honest risk now is not that you are undertrained. It is that you arrive anxious and either run the first six miles too fast to prove something to yourself, or run them too slow because you have talked yourself out of it. Both cost more than the illness did.',
    'So the plan for the next twelve days is: get fully well, run the easy miles easy, touch marathon pace once on Thursday if you are clear of it, and go to the line with a pacing plan that does not require you to guess how fit you are. That last part is what the Race Day tab is for.',
  ],
}

export const PACE_CHECK = [
  { type: 'Intervals (400–1200m)', prescribed: '6:30–6:40', actual: '6:35–6:40', adjusted: '—',
    verdict: 'On target. Every rep session hit the band. Aug 5 splits landed within one second of each other.',
    status: 'good' },
  { type: 'Tempo', prescribed: '6:55–7:05', actual: '7:12 (Sep 9, full 5 mi)', adjusted: '≈6:55',
    verdict: 'FIXED. Sep 9 was five continuous miles at 7:12 — first full-volume tempo of the block, 8 PRs. Heat-adjusted that is the fast end of the band.',
    status: 'good' },
  { type: 'Marathon pace', prescribed: '7:25', actual: '7:25 for 6 mi at mile 21', adjusted: '—',
    verdict: 'CONFIRMED Oct 17. Six miles averaging exactly 7:25 at the END of a 21-miler, heart rate falling 168 → 158 across the block. This is the number the whole plan was built around and you hit it under race-like fatigue.',
    status: 'good' },
  { type: 'Long run', prescribed: '8:45–9:20', actual: '8:30 easy portion', adjusted: '—',
    verdict: 'Oct 17 ran the first 13 at 8:30 average with HR in the 138–145 range, then had six MP miles left in the tank. Comfortably inside the band and comfortably aerobic.',
    status: 'good' },
  { type: 'Easy / recovery', prescribed: '9:00–9:45 (widened)', actual: '9:00–10:14', adjusted: '—',
    verdict: 'Band moved to match reality. These were never too slow — 9:00–9:45 is exactly right for a 3:15 marathoner. Do not speed them up.',
    status: 'good' },
]

export const HEAT = {
  title: 'The heat factor — the hypothesis, now confirmed',
  body: [
    'You trained through a North Texas July and August. Every run happened in 80°F+ air with high dew points. The standard correction for those conditions is a 4–6% pace penalty at aerobic effort. Applying a conservative 4%:',
  ],
  rows: [
    ['Your 7:19 MP miles', '≈7:01 in cool air'],
    ['Your 9:12 long run', '≈8:49 in cool air'],
    ['Your 9:47 easy days', '≈9:23 in cool air'],
  ],
  after: [
    'CONFIRMED Sep 26. Edinburgh delivered 18.8 hilly miles at 9:27 with HR 138 versus 18.0 flat-ish Texas miles at 9:36 with HR 145. Cool air was worth roughly what this correction predicted.',
    'Supporting evidence, not just a formula: on Sep 3 you held 7:18 / 7:21 / 7:19 while heart rate climbed 157 → 165 → 168 at constant pace. Upward drift at a fixed speed is the classic heat signature — cardiac drift, not lost fitness. The mile-4 fade to 8:06 is what happens when that drift finally caps you.',
  ],
}

export const ACTIONS = [
  { n: 1, title: 'Recover properly — 2 to 3 weeks, non-negotiable', 
    body: 'You just ran the last six miles of a marathon on an empty tank, which does more muscular damage than a well-paced race. Week one: no running at all. Walking, gentle yoga, eat well. Week two: three or four easy runs, 20–25 miles total, all conversational. Week three: ~30 miles, reintroduce strides. Jumping back early is the single most common way marathoners get injured, and you have a knee with history.' },
  { n: 2, title: 'The lesson is banked — now make it structural',
    body: 'Houston on Jan 17 is already designated as a NOT-a-race: ~90% effort off a 3–4 day mini-taper. That is now doubly right. It is the perfect low-stakes place to practise going out correctly, because there is no time goal to tempt you. Run the first ten miles at a pace that feels almost insultingly easy and see what the back half gives you.' },
  { n: 3, title: 'Race by heart rate for the first half, not pace',
    body: 'Your own trace is the prescription. On Oct 17 you held 7:25 at HR 158. On race day the same pace cost you 175–182. Next marathon: cap your heart rate at 160 for the first ten miles and let the pace be whatever that produces. If it says 7:40, run 7:40. The watch lied to you on Nov 7 because the cold made the effort feel cheap; your heart rate did not.' },
  { n: 4, title: 'Put strength, core and yoga back permanently',
    body: 'Across the whole block: strength 11 of 16 weeks, core 6 of 16, yoga 51 of 112 days. Those were the three things that kept slipping, and the knee issue showed up during the longest gap. At the 70+ mpw the Boston project requires, they stop being optional.' },
  { n: 5, title: 'Nothing about Boston changed on Nov 7',
    body: 'The projection was ~3:00–3:05 at a fall-2027 marathon, 2:55 in 2028, 2:50 in 2029, built on volume rather than workouts. A 3:22:45 run on 3:17 fitness does not move that — if anything the first twenty miles confirm the engine. The limiter remains the same: get to 70 mpw and stay healthy there.' },
]

export const BOTTOM_LINE =
  'Indianapolis Monumental, 3:22:45 — a seventeen-minute personal best, thirteen PRs in one morning, and by your own account a lot of ' +
  'fun. That is the headline and it deserves to stay the headline. The second thing that is true: you were fitter than the clock says. ' +
  'You went through halfway in 1:35:44, nearly three minutes ahead of a plan you had already agreed was the ambitious one, and your ' +
  'heart rate hit 182 by mile 13 running a pace you had held at 158 three weeks earlier. The wall at mile 21 was the bill. Every ' +
  'version of running the plan — including the one where the back half goes badly — finishes ahead of where you did. You did not ' +
  'lack fitness. You lacked three minutes of patience in the first half, in 34-degree air that made it feel free. Now you have your ' +
  'own heart-rate trace of that mistake, which is worth more than any workout in the block. Sixteen weeks, 566 miles, fourteen long ' +
  'runs, one knee scare, one illness, and a big PR at the end of it. Recover properly, then Houston is where you practise the fix.'

export const PLAN_CHANGES = {
  title: 'Plan changes log — the whole block',
  rows: [
    ['Week 7 · Sat Sep 5', 'Long run 15 → 18 mi', '46 → 49'],
    ['Week 8 · Sep 7–13', 'Cutback → trimmed build; 5 mi tempo restored, long run 12 → 18', '38 → 45'],
    ['Weeks 9–10 · Scotland', 'Unchanged — served as the two-week recovery block', '~34 / ~38'],
    ['Strength · Sep 12', 'Friday Strength B retired after 0 of 9. Split squat + side plank folded into Monday', 'Mon 30 → 35 min'],
    ['Paces · Sep 28', 'Long run 8:15–9:00 → 8:45–9:20; easy 8:30–9:15 → 9:00–9:45', 'matched to real data'],
    ['Tuesdays · wks 11–13', '3 mi easy PM shakeout added', '+3 mi/wk'],
    ['Week 12 · Oct 8', 'REWRITTEN: reset week for left knee/quad. 20-miler cancelled', '55 → ~10'],
    ['Week 13 · Oct 8', 'Conditional return: intervals dropped, long run 20 → 13 easy', '55 → ~33'],
    ['Week 14 · Oct 18', 'Dress rehearsal dropped (run early Oct 17). Long run → 12 easy', '~41 → 38'],
    ['Week 15 · Oct 26', 'Taper rewritten around illness; Thursday MP session made conditional', '32 → 27'],
    ['Race plan · Oct 26', 'Start 7:30, one decision point. 3:15 reach / 3:17 realistic / 3:20 floor', 'goal 3:16:30'],
    ['Race plan · Oct 26', 'Decision point moved mile 16 → 18–19 after course rollers found at 15–18', 'course-adjusted'],
    ['RACE · Nov 7', 'Ran 1:35:44 first half vs 1:38:30 planned. Finished 3:22:45', '+12:47 positive split'],
  ],
  note: 'Sixteen weeks, 566 miles, 14 of 15 long runs, one knee scare, one illness, and a 17-minute PR. The plan was adjusted eleven times and the only instruction that did not get followed was the one that mattered most on the day: go out slow.',
}
