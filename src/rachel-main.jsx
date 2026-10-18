import React from 'react'
import ReactDOM from 'react-dom/client'
import PlanApp from './PlanApp.jsx'
import Gate from './Gate.jsx'
import * as rachel from './plans/rachel.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Gate
      storageKey={rachel.STORAGE.unlocked}
      title={rachel.GATE_TITLE}
      passHash={rachel.PASS_HASH}
      normalize={rachel.normalizePassword}
    >
      <PlanApp plan={rachel} />
    </Gate>
  </React.StrictMode>,
)
