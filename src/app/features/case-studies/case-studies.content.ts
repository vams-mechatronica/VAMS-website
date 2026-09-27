export interface CaseShot { file: string; title: string; caption: string; alt: string; }
export interface CaseCard { icon: string; title: string; text: string; }
export interface CaseOutcome { value: string; label: string; }

export interface CaseDetail {
  slug: string;
  title: string;
  industry: string;
  /** One-line summary shown under the title. */
  summary: string;
  client: { heading: string; text: string };
  challenges: string[];
  solution: { text: string; cards: CaseCard[] };
  /** Real ProMonitor screens (demonstration environment). Omitted where none exist. */
  shots?: CaseShot[];
  shotsNote?: string;
  views: string[];
  outcomes: CaseOutcome[];
  benefits?: string[];
  conclusion: string;
  seoDescription: string;
}

const DEMO_NOTE =
  'Screens are from the ProMonitor demonstration environment, which uses simulated machine data. They show the platform used for this project, not the customer’s own data.';

export const CASE_DETAILS: Record<string, CaseDetail> = {
  'mcf-predictive-maintenance': {
    slug: 'mcf-predictive-maintenance',
    title: 'Predictive Maintenance for CNC Machines',
    industry: 'Railways',
    summary:
      'Implemented at Modern Coach Factory (MCF), Raebareli to improve machine reliability and OEE and reduce unplanned downtime.',
    client: {
      heading: 'Client Profile',
      text: 'Modern Coach Factory (MCF), Raebareli, a production unit of Indian Railways, manufactures railway coaches with strict quality and precision standards. The facility operates multiple CNC machining centers that are critical to coach fabrication.',
    },
    challenges: [
      'Frequent unplanned CNC machine breakdowns',
      'Limited visibility into machine health conditions',
      'A reactive maintenance approach',
      'Inconsistent OEE across machines and shifts',
      'Production delays caused by sudden failures',
    ],
    solution: {
      text: 'A real-time predictive maintenance platform was deployed to monitor CNC machine health, detect anomalies early and give maintenance teams actionable insight.',
      cards: [
        { icon: 'fa-display', title: 'Real-time monitoring', text: 'Continuous monitoring of spindle vibration, temperature, load, power consumption and cycle times.' },
        { icon: 'fa-brain', title: 'AI-based analytics', text: 'Machine learning models identify abnormal patterns and predict potential failures before a breakdown occurs.' },
        { icon: 'fa-bell', title: 'Smart alerts', text: 'Threshold and trend-based alerts reach maintenance teams for early intervention.' },
      ],
    },
    shots: [
      { file: 'monitoring-machine.webp', title: 'Live machine telemetry', caption: 'Spindle speed, load, temperature, vibration and power for one CNC machine, with a live multi-tag chart.', alt: 'ProMonitor live telemetry for a CNC machining center' },
      { file: 'pdm-overview.webp', title: 'Predictive maintenance overview', caption: 'Fleet health distribution, highest-risk assets, predicted failures and maintenance due.', alt: 'ProMonitor predictive maintenance overview' },
      { file: 'pdm-asset-health.webp', title: 'Asset health', caption: 'Health score, risk, failure probability and remaining useful life for every machine.', alt: 'ProMonitor asset health table' },
      { file: 'pdm-risk-matrix.webp', title: 'Risk matrix', caption: 'Assets placed by probability of failure and asset criticality, so the riskiest machines are visible first.', alt: 'ProMonitor asset risk matrix' },
    ],
    shotsNote: DEMO_NOTE,
    views: [
      'Live machine status (running, idle, alarm)',
      'Machine health score and failure probability',
      'Remaining useful life and risk by asset criticality',
      'Alarms and maintenance work in one place',
    ],
    outcomes: [
      { value: '38%', label: 'Reduction in unplanned downtime' },
      { value: '22%', label: 'Improvement in OEE' },
      { value: '5.5 months', label: 'Return on investment' },
    ],
    benefits: [
      'A shift from reactive to proactive, data-driven maintenance',
      'Earlier warning of machines at risk of failure',
      'One shared view of machine condition for operators and maintenance teams',
    ],
    conclusion:
      'The predictive maintenance initiative at MCF Raebareli moved maintenance from a reactive routine to a proactive, data-driven strategy, improving machine availability and overall production efficiency.',
    seoDescription:
      'How VAMS Mechatronica implemented predictive maintenance on CNC machines at Modern Coach Factory, Raebareli, using ProMonitor.',
  },

  'smart-energy-monitoring-fmcg': {
    slug: 'smart-energy-monitoring-fmcg',
    title: 'Smart Energy Monitoring for Process Plant',
    industry: 'FMCG',
    summary: 'Real-time energy visibility for an FMCG process plant, to optimize consumption and avoid outages.',
    client: {
      heading: 'Client Overview',
      text: 'The plant runs multiple production lines continuously. Energy is a significant part of operating cost, so efficiency and reliability are critical.',
    },
    challenges: [
      'No real-time visibility of energy use across production lines',
      'Undetected load imbalances and peak demand spikes',
      'High energy cost from inefficient consumption',
      'Risk of unplanned outages affecting production',
      'No centralized energy monitoring or analytics',
    ],
    solution: {
      text: 'A smart energy monitoring solution was deployed across multiple production lines to measure, analyze and optimize energy consumption in real time.',
      cards: [
        { icon: 'fa-gauge-high', title: 'Energy metering network', text: 'Energy meters at feeder, line and machine level capture granular data.' },
        { icon: 'fa-chart-line', title: 'Real-time analytics', text: 'Voltage, current, power factor, demand and load patterns across all lines.' },
        { icon: 'fa-bell', title: 'Alerts and protection', text: 'Alerts for overloads, phase imbalance and abnormal consumption trends.' },
      ],
    },
    views: [
      'Line-wise and machine-wise energy consumption',
      'Peak demand and load profile',
      'Energy cost by shift and process',
      'Power quality: voltage, power factor, harmonics',
    ],
    outcomes: [
      { value: '17%', label: 'Reduction in energy consumption' },
      { value: '0', label: 'Unplanned power outages' },
      { value: '150+', label: 'Sensors and energy meters deployed' },
    ],
    benefits: [
      'Lower energy bills through better load distribution',
      'Improved power reliability across production lines',
      'Early detection of inefficiencies and abnormal consumption',
    ],
    conclusion:
      'The solution gave the plant full visibility of its energy consumption and supports continuous improvement in energy management.',
    seoDescription: 'Smart energy monitoring for an FMCG process plant: line-level metering, analytics and alerts.',
  },

  'iot-based-loom-monitoring': {
    slug: 'iot-based-loom-monitoring',
    title: 'IoT-Based Loom Monitoring',
    industry: 'Textile',
    summary: 'Real-time loom intelligence for a textile facility, to improve productivity and reduce breakdowns.',
    client: {
      heading: 'Client Overview',
      text: 'The client operates a large textile unit with multiple weaving looms running across shifts. Consistent machine performance and fabric quality are critical to delivery commitments.',
    },
    challenges: [
      'Frequent loom stoppages due to yarn breakage',
      'No real-time visibility of spindle speed and runtime',
      'Manual production tracking with delayed reporting',
      'Fabric defects from undetected process variations',
      'Reactive maintenance leading to production losses',
    ],
    solution: {
      text: 'An IoT-based loom monitoring system collects real-time operational data, detects anomalies and gives production and maintenance teams actionable insight.',
      cards: [
        { icon: 'fa-display', title: 'Real-time loom monitoring', text: 'Continuous tracking of spindle speed, runtime, stoppages and status across machines.' },
        { icon: 'fa-bell', title: 'Yarn breakage alerts', text: 'Instant alerts on yarn breaks so operators can intervene quickly.' },
        { icon: 'fa-chart-column', title: 'Production analytics', text: 'Production counts, efficiency and shift-wise performance.' },
      ],
    },
    views: [
      'Loom-wise and line-wise runtime status',
      'Spindle speed trends and stoppage analysis',
      'Yarn breakage frequency and patterns',
      'Shift-wise productivity and efficiency',
    ],
    outcomes: [
      { value: '31%', label: 'Reduction in machine breakdowns' },
      { value: '18%', label: 'Increase in production output' },
      { value: '22%', label: 'Reduction in quality defects' },
    ],
    benefits: [
      'Improved loom uptime and stability',
      'Less fabric waste and rework',
      'Faster response to yarn breakage',
      'Better coordination between production and maintenance',
    ],
    conclusion:
      'The system gave the textile manufacturer real-time visibility of loom operations and supports expansion to more looms and plants.',
    seoDescription: 'IoT-based loom monitoring for a textile manufacturer: runtime, yarn breakage alerts and production analytics.',
  },

  'machine-vision-packaging-pharma': {
    slug: 'machine-vision-packaging-pharma',
    title: 'Machine Vision for Packaging Line',
    industry: 'Pharma',
    summary: 'High-speed vision inspection for a pharmaceutical packaging line, for compliance and accuracy at scale.',
    client: {
      heading: 'Client Overview',
      text: 'The client is a pharmaceutical facility with high-speed packaging lines where label accuracy, batch traceability and regulatory compliance are critical. Manual inspection could not keep up with rising line speeds.',
    },
    challenges: [
      'Manual inspection errors at high line speeds',
      'Incorrect or missing labels and batch information',
      'Difficulty validating expiry dates and OCR data in real time',
      'High false-rejection rates affecting throughput',
      'Strict regulatory compliance requirements',
    ],
    solution: {
      text: 'A high-speed machine vision system performs real-time inspection, OCR validation and defect detection at line speeds above 300 packs per minute.',
      cards: [
        { icon: 'fa-tag', title: 'Label verification', text: 'Automated checks of label placement, orientation and artwork.' },
        { icon: 'fa-barcode', title: 'OCR and expiry validation', text: 'Real-time inspection of batch number, expiry date and regulatory text.' },
        { icon: 'fa-magnifying-glass', title: 'Defect detection', text: 'Detection of print defects, smudges, missing text and packaging damage.' },
      ],
    },
    views: [
      'Real-time pass / fail statistics',
      'Defect categories and trends',
      'Image archive for audit and traceability',
      'Line speed and inspection performance',
    ],
    outcomes: [
      { value: '99.6%', label: 'Detection accuracy' },
      { value: '300+', label: 'Packs per minute' },
      { value: '45%', label: 'Reduction in false rejects' },
    ],
    benefits: [
      'Improved compliance and audit readiness',
      'Reduced manual inspection effort',
      'Higher throughput without losing inspection accuracy',
    ],
    conclusion:
      'The machine vision system brought consistent, high-speed inspection to the packaging line and supports future production demands.',
    seoDescription: 'Machine vision for a pharmaceutical packaging line: label verification, OCR and defect detection.',
  },
};
