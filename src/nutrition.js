// ---- Nutrition data ----
// Targets scaled for ~175 lb / 80 kg, maintenance weight during training.
// All macros are good-faith estimates — brands and portions vary.

export const TARGETS = [
  { day: 'Rest day (Mon)', cal: '~2,600', carbs: '350 g', protein: '140 g', fat: '~70 g', note: 'Strength + yoga only. Carbs at the low end.' },
  { day: 'Training day (4–8 mi)', cal: '~2,950', carbs: '430 g', protein: '140 g', fat: '~75 g', note: 'Tue–Fri. Put carbs before & after the run.' },
  { day: 'Long-run day (13–20 mi)', cal: '~3,400', carbs: '550–580 g', protein: '145 g', fat: '~65 g', note: 'Saturday. Carbs are the priority — don’t under-eat these days.' },
  { day: 'Race-week carb load (Thu–Fri)', cal: '~3,300', carbs: '640–800 g', protein: '120 g', fat: '<60 g', note: 'White carbs, low fiber, low fat. It will feel like too much — it isn’t.' },
]

export const TARGET_NOTES = [
  'Protein: ~1.7 g/kg spread as 30–40 g per meal, 4 meals — this maximizes recovery from the two strength days and daily running.',
  'Fat strategy: pick 2–3 fat sources per day (salmon, peanut butter, avocado, eggs, olive oil) and keep everything else lean. Measure cooking oil — 1 tbsp = 14 g fat.',
  'Lunch isn’t listed below — aim for ~700–800 cal, 90–110 g carbs, 35–45 g protein, under 20 g fat. Leftover dinner or a turkey sandwich + fruit + pretzels both work.',
  'Weigh-in once a week, same day/time. Dropping weight in weeks 11–13? Add a snack. Gaining? Trim carbs on rest days only — never on long-run days.',
]

export const MEALS = {
  breakfasts: [
    { name: 'Big Oatmeal Bowl', cal: 830, c: 120, p: 49, f: 17, tag: 'Quality-day fuel',
      ingredients: '1 cup (100g) rolled oats · 1 cup skim milk + ½ cup water · 1 scoop whey · 1 banana · 1 tbsp peanut butter · 1 tbsp honey',
      method: 'Simmer oats in milk + water ~4 min. Off heat, stir in whey (add a splash of water to loosen). Top with sliced banana, PB, honey.' },
    { name: 'Bagel & Eggs Plate', cal: 620, c: 95, p: 30, f: 11, tag: 'Fast + classic',
      ingredients: '1 plain bagel · 2 eggs + 2 egg whites · 1 tbsp jam · 8 oz orange juice',
      method: 'Scramble eggs and whites in a nonstick pan (no butter needed). Toast bagel, jam on top. OJ on the side for extra carbs.' },
    { name: 'Greek Yogurt Crunch Bowl', cal: 560, c: 75, p: 36, f: 9, tag: 'No cooking',
      ingredients: '300g (1¼ cup) nonfat Greek yogurt · 60g granola · 1 cup berries · 1 tbsp honey',
      method: 'Layer it. Done in 90 seconds. Great on rest days when calories are lower.' },
    { name: 'Banana Protein Pancakes', cal: 700, c: 100, p: 40, f: 14, tag: 'Long-run morning',
      ingredients: '80g oats · 1 banana · 2 eggs · 1 scoop whey · 1 tsp baking powder · 2 tbsp maple syrup',
      method: 'Blend everything except syrup until smooth. Cook as 4–5 pancakes in a nonstick pan, 2 min per side on medium. Syrup on top — add an extra tbsp on 18–20 mile days.' },
    { name: 'PB Overnight Oats', cal: 650, c: 90, p: 35, f: 17, tag: 'Grab & go',
      ingredients: '80g oats · 1 cup skim milk · 1 scoop whey · 1 tbsp chia · 1 tbsp peanut butter · 1 tbsp jam',
      method: 'Stir everything in a jar the night before, fridge overnight. Make 3 jars on Sunday for the week.' },
  ],
  dinners: [
    { name: 'Chicken Burrito Bowl', cal: 850, c: 110, p: 55, f: 16, tag: 'Meal-prep hero',
      ingredients: '8 oz grilled chicken breast · 1½ cups cooked rice · ½ cup black beans · salsa · ¼ avocado · lime · cilantro',
      method: 'Season chicken with cumin/paprika/salt, grill or pan-sear 5–6 min per side, rest, slice. Bowl it over rice with beans, salsa, avocado. Prep note: cook 4 portions of chicken + rice at once — that’s 4 dinners or lunches.' },
    { name: 'Salmon, Smashed Potatoes & Asparagus', cal: 780, c: 75, p: 45, f: 28, tag: '2×/week for omega-3s',
      ingredients: '6 oz salmon fillet · 400g baby potatoes · 1 bunch asparagus · 1 tsp olive oil · lemon · dill',
      method: 'Boil potatoes 15 min, smash flat on a sheet pan, roast at 425°F until crispy (~20 min). Add asparagus + salmon (skin down) to the pan for the last 12 min. Lemon over everything. Note: highest-fat dinner here — pair with low-fat snacks that day.' },
    { name: 'Turkey Bolognese', cal: 820, c: 115, p: 50, f: 14, tag: 'Batch & freeze',
      ingredients: '6 oz (raw) 93/7 ground turkey · 1 cup marinara · 140g dry spaghetti · 1 tbsp parmesan · garlic, onion',
      method: 'Brown turkey with garlic and onion, add marinara, simmer 10 min. Toss with pasta, parmesan on top. Batch note: triple the sauce and freeze in 2-portion bags — future you on a Thursday will be grateful.' },
    { name: 'Teriyaki Stir-Fry', cal: 800, c: 120, p: 48, f: 12, tag: '15 minutes',
      ingredients: '7 oz chicken breast or lean beef strips · 1½ cups cooked rice · frozen stir-fry vegetables · 3 tbsp teriyaki sauce · 1 tsp oil',
      method: 'Screaming-hot pan, 1 tsp oil, protein 3–4 min, veg 3 min, sauce 1 min. Over rice. Frozen veg is the cheat code — zero chopping.' },
    { name: 'Sheet-Pan Chicken & Potatoes', cal: 760, c: 95, p: 52, f: 15, tag: 'One pan',
      ingredients: '8 oz chicken breast, cubed · 450g potatoes, cubed · 1 bell pepper · 1 tbsp olive oil · paprika, garlic powder',
      method: 'Toss everything with oil and spices on one sheet pan. 425°F for 25 min, flip once. Zero dishes worth caring about.' },
    { name: 'Long-Run Burger Night', cal: 900, c: 100, p: 50, f: 25, tag: 'Saturday reward',
      ingredients: '6 oz 90/10 beef patty · brioche bun · 450g oven fries · lettuce, tomato, pickles · side salad',
      method: 'Fries in the oven per bag directions. Sear patty 3–4 min per side. Build it big. You ran 20 miles — this fits your macros today, that’s the magic of long-run days.' },
  ],
  snacks: [
    { name: 'PB&J on white', cal: 380, c: 55, p: 12, f: 12, tag: 'The classic' },
    { name: 'Banana + whey shake (water)', cal: 230, c: 30, p: 26, f: 2, tag: 'Post-strength' },
    { name: 'Pretzels + hummus', cal: 300, c: 50, p: 9, f: 7, tag: 'Desk drawer' },
    { name: '3 rice cakes + honey + deli turkey', cal: 280, c: 50, p: 14, f: 2, tag: 'High carb, no fat' },
    { name: 'Cereal + skim milk', cal: 350, c: 65, p: 12, f: 3, tag: 'Night carbs before long run' },
    { name: '16 oz chocolate milk', cal: 300, c: 50, p: 16, f: 5, tag: 'Within 45 min post-run' },
    { name: 'Cottage cheese + pineapple', cal: 250, c: 25, p: 28, f: 2, tag: 'Protein filler' },
    { name: 'Dried mango + beef jerky', cal: 330, c: 55, p: 20, f: 2, tag: 'Gym bag / travel' },
    { name: '3 fig bars', cal: 300, c: 60, p: 3, f: 3, tag: 'Pre-run safe' },
  ],
}

export const FUELING = [
  { when: 'Before runs (60–90 min out)', what: 'Toast + honey, a banana, or half a bagel — 50–80 g quick carbs, minimal fat/fiber. Quality days and long runs only; easy runs under an hour can go on coffee alone if you prefer.' },
  { when: 'During runs 90+ min', what: 'Gel or chews every 30–35 min starting at mile 5, with water. Practice on EVERY long run — race-day gut training is half the battle of the marathon.' },
  { when: 'After every run (within 45 min)', what: '3:1 carbs-to-protein. Chocolate milk is perfect; banana + whey shake works too. Then a real meal within 2 hours.' },
  { when: 'Race-week carb load (Thu–Fri)', what: '8–10 g/kg = 640–800 g carbs/day: white rice, pasta, bagels, juice, low-fiber. Drop fiber and fat so your gut is calm Saturday. Expect to gain 2–3 lb of water — that’s stored glycogen, it’s the point.' },
]

export const PREP = {
  title: 'Sunday prep hour (~75 min, mostly hands-off)',
  steps: [
    'Rice: cook 3 cups dry (≈9 cups cooked) — fridge in a big container, 4–5 days of dinners.',
    'Chicken: season and grill/bake 3 lb of breasts. Slice half, cube half.',
    'Potatoes: roast a full sheet pan of cubed potatoes to reheat with dinners.',
    'Overnight oats: build 3 jars for grab-and-go mornings.',
    'Snack prep: portion pretzels/dried fruit into bags, hard-boil 6 eggs.',
    'Freezer check: 2+ bags of bolognese sauce in reserve at all times.',
  ],
}
