// ---- Race Day: Indy Marathon, Sat Nov 7 2026 ----
// Pacing built Oct 26 2026, after a 5-day illness in week 14.

export const RACE = {
  name: 'Indy Marathon',
  date: 'Saturday, November 7, 2026',
  plan: 'Start 7:30 · one decision at mile 16',
}

export const CONFIDENCE = {
  title: 'Read this when you doubt your fitness',
  lead: 'You said you feel lost about where your fitness is. Here is what the data actually says — all of it from the last five weeks.',
  points: [
    ['Oct 17 — 21.1 mi, last 6 at exactly 7:25', 'Goal marathon pace, held for six miles, starting at mile 16 of a 21-mile run. Heart rate FELL through that block: 168 → 165 → 157 → 158 → 159 → 158. Falling HR at a held pace means you were inside your fitness, not clinging to it.'],
    ['Oct 22 — 2 × 2 mi at 6:50, in 82°F', 'Your fastest threshold work of the entire cycle, 22 sec/mi quicker than the 7:12 five-miler in September — and you ran it in 82-degree heat on the day you were coming down with something.'],
    ['Oct 1 — 5 continuous miles at 7:25', 'Marathon pace, nailed to the second, three weeks before that.'],
    ['The block: 498 miles, 13 long runs, all completed', 'Including 21.1, 18.8, 18.0 and 17.1. Nothing about that is thin.'],
  ],
  closing: 'Five days of illness two weeks out does not undo any of this. Measurable detraining takes about two weeks of doing nothing — you lost one taper week, which is the cheapest week in the entire sixteen. You are not less fit than you were on Oct 17. You are less rested than you will be on Nov 7.',
}

export const TARGETS = [
  { time: '3:15:00', pace: '7:26', half: '1:37:30', tenK: '46:13', twenty: '2:28:45', note: 'The reach. Needs 7:20 for the last 10 after a 7:30 start.' },
  { time: '3:17:00', pace: '7:31', half: '1:38:30', tenK: '46:41', twenty: '2:30:16', note: 'The realistic good day.' },
  { time: '3:18:00', pace: '7:33', half: '1:39:00', tenK: '46:55', twenty: '2:31:02', note: 'Start 7:30, fade slightly. Still excellent.' },
  { time: '3:20:00', pace: '7:38', half: '1:40:00', tenK: '47:24', twenty: '2:32:34', note: 'The floor if the day goes sideways. A 20-minute PR.' },
  { time: '3:22:00', pace: '7:42', half: '1:41:00', tenK: '47:52', twenty: '2:34:05', note: 'Bad day, still a big PR.' },
]

export const THE_PLAN = {
  title: 'The plan: start 7:30, one decision at mile 16',
  why: 'You floated 3:20 with 3:15 as a reach. The problem with committing to either number now is that you would be guessing twelve days out, four days after being ill. So do not guess — build the decision into the race.',
  segments: [
    ['Miles 1–2', '7:35–7:40', 'Deliberately slow. Let the crowd thin and your heart rate settle. Every marathon you have ever heard about going wrong went wrong here. You will feel fantastic and want to chase people. Do not.'],
    ['Miles 3–16', '7:30', 'Lock in and stop thinking. This is 3:16:30 pace. It should feel almost boringly comfortable through halfway — if it does not, you went out too hard despite being told.'],
    ['MILE 16', 'DECIDE', 'One question, asked once: is your breathing easy and are your legs willing? Not "do I feel fresh" — you will not at mile 16 of a marathon. Breathing easy, legs willing.'],
    ['Miles 17–26.2 · YES', '7:20–7:25', 'Finish in 3:15–3:16. You have run exactly this before: six miles at 7:25 starting from mile 16 of a long run, nine days ago.'],
    ['Miles 17–26.2 · NO', '7:30–7:38', 'Hold and finish 3:17–3:20. This is not a failure outcome. This is a twenty-minute personal best.'],
  ],
  math: [
    ['Start 7:30 → last 10 at 7:20', '3:14:56'],
    ['Start 7:30 → last 10 at 7:25', '3:15:47'],
    ['Start 7:30 → hold 7:30', '3:16:30'],
    ['Start 7:30 → fade to 7:38', '3:18:00'],
  ],
  whyNot320: 'Starting at 7:38 (3:20 pace) caps your best realistic outcome around 3:17, even with a strong finish — you would need 7:10 for the last ten miles to reach 3:15, and that is not happening off a conservative first half. Starting at 7:30 costs you four seconds a mile of extra risk and keeps 3:15 genuinely live. That is a good trade.',
  whyNot315: 'Going out at 7:26 from the gun is the greedy version. It gains you about a minute if everything is perfect, and costs you ten if it is not — a blow-up at mile 20 turns 3:15 into 3:30. Four days ago you were ill. Take the insurance.',
}

export const FUELING = [
  ['Thu–Fri', 'Carb load: 8–10 g/kg per day. White rice, pasta, bagels, juice. Low fibre, low fat. You will feel stuffed and 2–3 lb heavier — that is stored glycogen and water, and it is the point.'],
  ['Race morning, 3 hr out', 'Your usual: bagel + jam + banana, ~100 g carbs. Nothing new, nothing high-fibre.'],
  ['Race morning, 15 min out', 'One gel with water.'],
  ['Miles 5, 10, 14, 18, 22', 'Gel every 30–35 min, always with water, never with sports drink alone.'],
  ['Every aid station from mile 2', 'Drink. Small amounts, early and often. By the time you feel thirsty at mile 18 it is already too late to fix it.'],
]

export const CHECKLIST = {
  week: [
    'Nothing new. Not shoes, not gels, not breakfast, not socks.',
    'Lay out race kit Thursday night — bib, shoes, socks, shorts, shirt, watch charged, gels counted.',
    'Sleep matters most on THURSDAY and FRIDAY. The night before a race is usually poor for everyone; two good nights before that is what carries you.',
    'Finish getting well. If you are still coughing on Nov 2, message me and we will talk about it honestly.',
    'Check the forecast Thursday. If it is over 70°F at the start, add 10–15 sec/mi to every number on this page and do not argue with it.',
  ],
  morning: [
    'Up 3.5 hours before the gun. Eat immediately.',
    'Warm up: 5–10 min easy jog, then 4 × 20 sec strides. Finish 15 min before the start.',
    'Start in a corral that matches 3:20, not 3:15. It is easier to pass people than to be dragged out too fast.',
    'First mile will feel too easy. That is correct. Trust it.',
  ],
}

export const MANTRAS = [
  ['Miles 1–2', 'Everyone here is going out too fast. Let them.'],
  ['Miles 3–13', 'Boring is the plan. Boring is winning.'],
  ['Miles 14–16', 'Still easy breathing? Good. One more mile, then I decide.'],
  ['Miles 17–22', 'I have run this pace at mile 21 before, nine days ago, and my heart rate went DOWN.'],
  ['Miles 23–26.2', 'This is the part the 21-miler was for. Twenty minutes of discomfort for a year of work.'],
]
