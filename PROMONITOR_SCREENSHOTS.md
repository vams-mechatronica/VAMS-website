# ProMonitor screenshots — drop-in folder

Save real screenshots in `src/assets/promonitor/` using **exactly** these file names. No code change is needed:
each slot on the website shows a labelled placeholder until its file exists, then the real
screenshot replaces it automatically (and can be clicked to enlarge).

| File | Where it appears | What to capture |
|---|---|---|
| `dashboard-overview.webp` | Home hero, /promonitor hero | Platform dashboard |
| `monitoring-overview.webp` | Real-Time Monitoring, /promonitor | Monitoring → Overview |
| `monitoring-machine.webp` | Real-Time Monitoring, /promonitor | A machine's Live telemetry tab |
| `monitoring-alarms.webp` | Real-Time Monitoring | Monitoring → Alarms |
| `production-dashboard.webp` | Production Monitoring, /promonitor | Production dashboard |
| `production-orders.webp` | Production Monitoring, /promonitor | Production → Orders |
| `production-board.webp` | Production Monitoring | Production board |
| `pdm-overview.webp` | Predictive Maintenance, /promonitor | Predictive Maintenance overview |
| `pdm-asset-health.webp` | Predictive Maintenance | Asset Health |
| `pdm-risk-matrix.webp` | Predictive Maintenance, /promonitor | Risk Matrix |

## Format
- **Aspect ratio 16:10** (e.g. 1600×1000, or 3200×2000 captured at 2×). Other ratios are cropped from the bottom.
- **WebP**, quality ~80–85, ideally under 300 KB each.
- Capture from the demo environment (it labels its data "Simulated data"); the site captions say so.
- Make sure the header badge reads **LIVE** (not Offline/Reconnecting) before capturing.
- Do not include real customer names or data.

To change which screens appear, or their captions, edit
`src/app/features/promonitor/promonitor.content.ts`.

## Status
Captured: dashboard-overview, monitoring-overview, monitoring-machine, monitoring-alarms, pdm-overview, pdm-asset-health, pdm-risk-matrix.
Still placeholders: production-dashboard, production-orders, production-board (need demo production data; capture once orders exist).

## Job Shop Scheduling page (/job-shop-scheduling)
Same folder and format (`src/assets/promonitor/`), captured from the Adaptive Scheduler demo (http://localhost:8080):
`scheduler-dashboard`, `scheduler-board` (also the page hero), `scheduler-optimization`, `scheduler-what-if`,
`scheduler-live-factory`, `scheduler-history` — all `.webp`.
All six are captured (demo reset, then a simulated CNC-02 failure so the impact analysis and recommended V2 schedule show).
