import { TARGETS, TARGET_NOTES, MEALS, FUELING, PREP } from './nutrition.js'

function Macros({ m }) {
  return (
    <span className="macros">
      <em className="m-cal">{m.cal} cal</em>
      <em className="m-c">C {m.c}g</em>
      <em className="m-p">P {m.p}g</em>
      <em className="m-f">F {m.f}g</em>
    </span>
  )
}

function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <div className="meal-head">
        <strong>{meal.name}</strong>
        {meal.tag && <span className="meal-tag">{meal.tag}</span>}
      </div>
      <Macros m={meal} />
      {meal.ingredients && <p className="meal-ing">{meal.ingredients}</p>}
      {meal.method && <p className="meal-method">{meal.method}</p>}
    </div>
  )
}

export default function Nutrition() {
  return (
    <div className="nutrition">
      <section>
        <h2 className="nut-h2">Daily targets — ~175 lb, maintenance</h2>
        <div className="target-table">
          <div className="target-row target-header">
            <span>Day type</span><span>Calories</span><span>Carbs</span><span>Protein</span><span>Fat</span>
          </div>
          {TARGETS.map(t => (
            <div className="target-row" key={t.day}>
              <span><strong>{t.day}</strong><br /><small>{t.note}</small></span>
              <span>{t.cal}</span><span>{t.carbs}</span><span>{t.protein}</span><span>{t.fat}</span>
            </div>
          ))}
        </div>
        <ul className="nut-notes">
          {TARGET_NOTES.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="nut-h2">Breakfasts</h2>
        <div className="meal-grid">
          {MEALS.breakfasts.map(m => <MealCard meal={m} key={m.name} />)}
        </div>
      </section>

      <section>
        <h2 className="nut-h2">Dinners</h2>
        <div className="meal-grid">
          {MEALS.dinners.map(m => <MealCard meal={m} key={m.name} />)}
        </div>
      </section>

      <section>
        <h2 className="nut-h2">Daytime snacks — high carb, low fat</h2>
        <div className="meal-grid snacks">
          {MEALS.snacks.map(m => <MealCard meal={m} key={m.name} />)}
        </div>
      </section>

      <section>
        <h2 className="nut-h2">Fueling around runs</h2>
        <ul className="fueling">
          {FUELING.map(f => (
            <li key={f.when}><strong>{f.when}:</strong> {f.what}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="nut-h2">{PREP.title}</h2>
        <ol className="prep">
          {PREP.steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </section>

      <p className="nut-disclaimer">
        Macros are estimates — brands and portions vary. Adjust with the weekly weigh-in rule above.
      </p>
    </div>
  )
}
