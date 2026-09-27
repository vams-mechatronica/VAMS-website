/**
 * ProMonitor page content.
 *
 * Every statement here is traceable to the ProMonitor repository docs
 * (industry_40/promonitor/docs: ARCHITECTURE, MONITORING, PRODUCTION) or the
 * running application. Do not add customer names, performance numbers or
 * vendor/protocol claims that are not confirmed by the product.
 */

export interface Shot {
  /** File name under src/assets/promonitor/ */
  file: string;
  title: string;
  caption: string;
  alt: string;
}

export interface Point {
  icon: string;
  title: string;
  text: string;
}

export interface AppPageContent {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  lead: string;
  question: string;
  capabilitiesTitle: string;
  capabilities: Point[];
  outcomes: Point[];
  shots: Shot[];
  seo: { title: string; description: string };
}

export const APP_PAGES: Record<string, AppPageContent> = {
  'real-time-monitoring': {
    slug: 'real-time-monitoring',
    name: 'Real-Time Monitoring',
    icon: 'fa-chart-line',
    headline: 'Know what is happening across your factory — in real time.',
    lead:
      'Real-Time Monitoring shows what every machine is doing right now and what just happened. ' +
      'It is built on the connected assets, live telemetry, events and alarms in the ProMonitor core platform.',
    question: 'What is every machine doing right now, and what just happened?',
    capabilitiesTitle: 'What you can see and do',
    capabilities: [
      { icon: 'fa-industry', title: 'Plant, line and machine overview', text: 'State distribution, availability and live machine cards for each plant and production line.' },
      { icon: 'fa-wave-square', title: 'Live telemetry workbench', text: 'Live and historical values for a machine’s tags, with selectable time windows and export.' },
      { icon: 'fa-bell', title: 'Alarms, events and timeline', text: 'An alarm console with acknowledge and resolve, an event console, and a per-machine state timeline.' },
      { icon: 'fa-code-compare', title: 'Trends and machine comparison', text: 'Multi-tag history and side-by-side comparison between machines.' },
      { icon: 'fa-table-columns', title: 'Configurable dashboards', text: 'Build dashboards from a set of widgets and share them privately, by role or across the organization.' },
      { icon: 'fa-map', title: 'Plant floor layouts', text: 'Place machines on a floor image; markers change colour with machine state.' },
      { icon: 'fa-tv', title: 'Control-room display', text: 'A full-screen, dark display mode for shop-floor screens, with dashboard rotation.' },
      { icon: 'fa-plug-circle-xmark', title: 'Disconnected is not stopped', text: 'A machine with no data is shown as disconnected, separately from a machine that has stopped.' },
    ],
    outcomes: [
      { icon: 'fa-eye', title: 'One live picture', text: 'Operators, supervisors and management look at the same machine data.' },
      { icon: 'fa-bolt', title: 'Faster response', text: 'Alarms and state changes surface as they happen instead of at the end of a shift.' },
      { icon: 'fa-database', title: 'Machine data in one place', text: 'Telemetry, states and events from different machines are stored and viewed together.' },
    ],
    shots: [
      { file: 'monitoring-overview.webp', title: 'Plant overview', caption: 'Machine states per line, line status, critical alarms and recent events on one screen.', alt: 'ProMonitor real-time monitoring overview with machine states, line status and critical alarms' },
      { file: 'monitoring-machine.webp', title: 'Machine live telemetry', caption: 'State, key readings and a live multi-tag chart for one machine.', alt: 'ProMonitor machine page with live telemetry chart' },
      { file: 'monitoring-alarms.webp', title: 'Alarm console', caption: 'Open alarms across the plant, with acknowledge and resolve actions.', alt: 'ProMonitor alarm console' },
    ],
    seo: {
      title: 'Real-Time Machine Monitoring | ProMonitor | VAMS Mechatronica',
      description:
        'ProMonitor Real-Time Monitoring shows live machine state, telemetry, alarms and events across plants and production lines, with configurable dashboards and control-room displays.',
    },
  },

  'production-monitoring': {
    slug: 'production-monitoring',
    name: 'Production Monitoring',
    icon: 'fa-list-check',
    headline: 'Turn machine data into production visibility.',
    lead:
      'Production Monitoring follows production orders against plan on the machines that run them. ' +
      'Produced quantities come from machine counters through the ProMonitor telemetry pipeline, not from manual entry.',
    question: 'What are we supposed to produce, what are we producing, what remains, what is late?',
    capabilitiesTitle: 'What it covers',
    capabilities: [
      { icon: 'fa-boxes-stacked', title: 'Products and routing', text: 'Products with routing operations, cycle and setup times, and the work centers that run them.' },
      { icon: 'fa-clipboard-list', title: 'Plans, orders and work orders', text: 'Production plans and orders, split into work orders per operation, each run on one machine.' },
      { icon: 'fa-play', title: 'Controlled order lifecycle', text: 'Release, start, pause, hold, complete, cancel and reopen — guarded by permissions and recorded in the audit log.' },
      { icon: 'fa-gauge-high', title: 'Counts from the machine', text: 'Good and total quantities arrive from machine counters through telemetry.' },
      { icon: 'fa-clock', title: 'Shift-aware targets', text: 'Hourly, shift and daily targets, with breaks, overnight shifts and holidays taken into account.' },
      { icon: 'fa-triangle-exclamation', title: 'Delayed and at-risk orders', text: 'Late and at-risk orders are worked out from the recent production rate and the planned end.' },
      { icon: 'fa-pause', title: 'Downtime and changeovers', text: 'Downtime with reason codes, planned or unplanned, and changeover tracking.' },
      { icon: 'fa-tv', title: 'Production board', text: 'A full-screen production board for the shop floor.' },
    ],
    outcomes: [
      { icon: 'fa-bullseye', title: 'Plan versus actual', text: 'See progress against targets while the shift is still running.' },
      { icon: 'fa-hourglass-half', title: 'Earlier warning on late orders', text: 'Delays are flagged from the actual run rate rather than discovered at delivery.' },
      { icon: 'fa-magnifying-glass-chart', title: 'Downtime with reasons', text: 'Lost time is recorded against reason categories so it can be analysed.' },
    ],
    shots: [
      { file: 'production-dashboard.webp', title: 'Production dashboard', caption: 'Orders in progress, output and status at a glance.', alt: 'ProMonitor production dashboard' },
      { file: 'production-orders.webp', title: 'Production orders', caption: 'Orders and work orders with progress, machine and status.', alt: 'ProMonitor production orders list' },
      { file: 'production-board.webp', title: 'Production board', caption: 'Full-screen board designed for shop-floor displays.', alt: 'ProMonitor production board' },
    ],
    seo: {
      title: 'Production Monitoring | ProMonitor | VAMS Mechatronica',
      description:
        'ProMonitor Production Monitoring tracks production orders against plan using machine counters, with shift-aware targets, downtime reasons and delay detection.',
    },
  },

  'predictive-maintenance': {
    slug: 'predictive-maintenance',
    name: 'Predictive Maintenance',
    icon: 'fa-microchip',
    headline: 'Move from reactive maintenance to predictive intelligence.',
    lead:
      'Predictive Maintenance turns machine data into a health score, anomaly detection, failure predictions and ' +
      'maintenance recommendations, and feeds the outcome of each maintenance action back into the next prediction.',
    question: 'What is happening with my machine, what will happen next, and what should I do?',
    capabilitiesTitle: 'How it works',
    capabilities: [
      { icon: 'fa-heart-pulse', title: 'Asset health', text: 'A health score and condition (healthy, warning, at risk, critical) per asset, with plant and line roll-ups.' },
      { icon: 'fa-chart-area', title: 'Anomaly detection', text: 'Abnormal behaviour is detected and recorded with the evidence behind it.' },
      { icon: 'fa-triangle-exclamation', title: 'Failure predictions', text: 'Predicted failure mode, probability and time window for each at-risk asset.' },
      { icon: 'fa-hourglass-half', title: 'Remaining useful life', text: 'Remaining-life estimates, with a confidence interval.' },
      { icon: 'fa-table-cells', title: 'Risk matrix', text: 'A fleet-wide view of assets by probability of failure and asset criticality.' },
      { icon: 'fa-lightbulb', title: 'Recommendations to work orders', text: 'Recommendations become maintenance work orders that people can carry out and track.' },
      { icon: 'fa-rotate', title: 'Closed loop', text: 'Health before and after an action, and the outcome of each prediction, are kept to improve later predictions.' },
      { icon: 'fa-layer-group', title: 'Matures with your data', text: 'A machine with no history still gets rule-based predictions; as history builds up, statistical and machine-learning models take over.' },
    ],
    outcomes: [
      { icon: 'fa-screwdriver-wrench', title: 'Plan maintenance earlier', text: 'Assets at risk are visible before they fail, so work can be scheduled instead of forced.' },
      { icon: 'fa-clipboard-check', title: 'Actions you can follow up', text: 'Recommendations, work orders and their results are connected in one place.' },
      { icon: 'fa-comments', title: 'Explained, not opaque', text: 'Predictions carry explanations so maintenance teams can judge them.' },
    ],
    shots: [
      { file: 'pdm-overview.webp', title: 'Predictive Maintenance overview', caption: 'Fleet condition, predicted failures, alerts and highest-risk assets.', alt: 'ProMonitor Predictive Maintenance overview dashboard' },
      { file: 'pdm-asset-health.webp', title: 'Asset health', caption: 'Health score and condition for each asset.', alt: 'ProMonitor asset health view' },
      { file: 'pdm-risk-matrix.webp', title: 'Risk matrix', caption: 'Assets positioned by probability of failure and criticality.', alt: 'ProMonitor risk matrix' },
    ],
    seo: {
      title: 'Predictive Maintenance | ProMonitor | VAMS Mechatronica',
      description:
        'ProMonitor Predictive Maintenance provides asset health scores, anomaly detection, failure predictions, remaining useful life and maintenance recommendations that become work orders.',
    },
  },
};

/** Ordered list for cards and navigation. */
export const APP_ORDER = ['real-time-monitoring', 'production-monitoring', 'predictive-maintenance'];

/** Platform capabilities of the ProMonitor Core, as described in the platform architecture. */
export const CORE_CAPABILITIES: Point[] = [
  { icon: 'fa-building', title: 'Organizations', text: 'Each organization’s data and users are kept separate.' },
  { icon: 'fa-user-shield', title: 'Users and roles', text: 'Sign-in with tokens, role-based permissions, and per-application access.' },
  { icon: 'fa-sitemap', title: 'Plants and assets', text: 'Plants, shifts, areas, lines, machines, components and sensors in one hierarchy.' },
  { icon: 'fa-wave-square', title: 'Telemetry', text: 'Tags with scaling, state mapping and quality; time-series storage and a latest-value cache.' },
  { icon: 'fa-clock-rotate-left', title: 'Events', text: 'A common log of what happened to each asset, and when.' },
  { icon: 'fa-plug', title: 'Connectivity', text: 'Devices with encrypted credentials and drivers for OPC UA, Modbus TCP, MQTT, MTConnect, FOCAS and Siemens.' },
  { icon: 'fa-bell', title: 'Alerts and rules', text: 'Rules that raise alerts, with notifications and acknowledgement.' },
  { icon: 'fa-clipboard-user', title: 'Audit and reports', text: 'An audit log with CSV export, and a shared reporting service.' },
];

export interface Protocol { name: string; text: string; }

/** Supported protocols (confirmed available by the business; FOCAS and Siemens added). */
export const PROTOCOLS_AVAILABLE: Protocol[] = [
  { name: 'OPC UA', text: 'The vendor-neutral industrial standard, offered by many CNC controls and PLCs.' },
  { name: 'Modbus TCP', text: 'Widely used by PLCs, meters and drives over Ethernet.' },
  { name: 'MQTT', text: 'Lightweight messaging for gateways and sensors.' },
  { name: 'MTConnect', text: 'The open standard for machine-tool data.' },
  { name: 'FOCAS (Fanuc)', text: 'Direct connection to Fanuc CNC controls.' },
  { name: 'Siemens', text: 'Direct connection to Siemens controls.' },
];

export const PROTOCOLS = PROTOCOLS_AVAILABLE.map((p) => p.name);

export const TECH_GROUPS: { title: string; items: string[]; why: string }[] = [
  { title: 'Industrial connectivity', items: ['OPC UA', 'MTConnect', 'MQTT', 'Modbus TCP', 'FOCAS', 'Siemens'], why: 'Open protocols for reaching machines and controllers.' },
  { title: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'Channels', 'Celery'], why: 'A modular service with real-time streaming and background processing.' },
  { title: 'Data', items: ['PostgreSQL / TimescaleDB', 'InfluxDB (optional store)', 'Redis', 'Kafka bridge'], why: 'Relational data, time-series telemetry and a live latest-value cache.' },
  { title: 'Frontend', items: ['Angular', 'TypeScript', 'ECharts'], why: 'A single-page application with live charts.' },
  { title: 'Delivery', items: ['Docker', 'SaaS or on-premise', 'REST API', 'WebSockets'], why: 'Containerised services, deployable in the cloud or on your own site, with an API and a live stream.' },
];
