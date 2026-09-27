import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

interface Point { icon: string; title: string; text: string; }
interface Shot { file: string; title: string; caption: string; alt: string; }

@Component({
  selector: 'app-scheduling',
  standalone: false,
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.scss',
})
export class SchedulingComponent implements OnInit {
  readonly disruptions: Point[] = [
    { icon: 'fa-screwdriver-wrench', title: 'A machine breaks down', text: 'Every job planned on it is now late or blocked, and nobody knows by how much.' },
    { icon: 'fa-bolt', title: 'An urgent order arrives', text: 'Fitting it in by hand means pushing other orders back without seeing the effect.' },
    { icon: 'fa-truck-ramp-box', title: 'Material arrives late', text: 'Jobs waiting for it sit idle while other machines could have been used.' },
    { icon: 'fa-stopwatch', title: 'Cycle times drift', text: 'Actual run times differ from the plan, and the gap grows through the shift.' },
  ];

  readonly loop = ['Plan', 'Schedule', 'Execute', 'Real-time state', 'Detect', 'Predict', 'Optimize', 'Reschedule', 'Learn'];

  readonly steps: Point[] = [
    { icon: 'fa-eye', title: 'Detect the change', text: 'Machine, job and material events arrive in real time and are checked against the approved schedule.' },
    { icon: 'fa-magnifying-glass-chart', title: 'Measure the impact', text: 'The scheduler lists the affected orders and operations, the estimated delay if nothing is done, and the alternative machines.' },
    { icon: 'fa-wand-magic-sparkles', title: 'Re-optimize', text: 'An optimization engine builds a recommended new schedule that keeps as many orders on time as possible.' },
    { icon: 'fa-user-check', title: 'Planner approves', text: 'Old and new schedules are compared side by side. Nothing changes on the shop floor until a planner approves it.' },
  ];

  readonly capabilities: Point[] = [
    { icon: 'fa-diagram-project', title: 'Flexible job-shop optimization', text: 'Google OR-Tools CP-SAT schedules operations across eligible machines, respecting routings, shift calendars and planned maintenance.' },
    { icon: 'fa-sliders', title: 'Configurable objectives', text: 'Weigh late orders, tardiness, makespan, setup and idle time to match what your plant values, and change the weights at runtime.' },
    { icon: 'fa-circle-exclamation', title: 'Impact analysis', text: 'Affected orders, planned versus no-action completion time and customer impact are shown the moment something goes wrong.' },
    { icon: 'fa-code-compare', title: 'Old versus new schedule', text: 'KPIs, per-order completion changes and every operation move are compared before you approve.' },
    { icon: 'fa-flask', title: 'What-if simulation', text: 'Test “machine down for 2 hours”, an urgent order or late material against the live plan without touching it.' },
    { icon: 'fa-hand-pointer', title: 'Drag to re-plan', text: 'Drag a job to another machine or time on the Gantt board; the optimizer pins it and re-plans the rest as a recommendation.' },
    { icon: 'fa-clock-rotate-left', title: 'Versions and audit trail', text: 'Every schedule version, the decision behind it and the events that led to it are kept.' },
    { icon: 'fa-chart-line', title: 'Prediction models', text: 'Lightweight models estimate cycle time, breakdown risk, repair time and order completion time.' },
  ];

  readonly gallery: Shot[] = [
    { file: 'scheduler-dashboard.webp', title: 'Executive dashboard', caption: 'Machine states, delivery and OEE KPIs, schedule health and the live schedule with a “now” line.', alt: 'Adaptive scheduler executive dashboard' },
    { file: 'scheduler-board.webp', title: 'Scheduling board', caption: 'Gantt by machine with shift calendar, maintenance, progress and late-order markers.', alt: 'Adaptive scheduler Gantt scheduling board' },
    { file: 'scheduler-optimization.webp', title: 'Schedule optimization', caption: 'Impact analysis and the current versus recommended schedule, ready for approval.', alt: 'Adaptive scheduler optimization and approval screen' },
    { file: 'scheduler-what-if.webp', title: 'What-if simulation', caption: 'Preset and custom scenarios run against the live plan without changing it.', alt: 'Adaptive scheduler what-if simulation' },
    { file: 'scheduler-live-factory.webp', title: 'Live factory', caption: 'Machine and job state as the shop floor changes.', alt: 'Adaptive scheduler live factory view' },
    { file: 'scheduler-history.webp', title: 'Schedule history', caption: 'Every schedule version with the decision behind it.', alt: 'Adaptive scheduler schedule history' },
  ];

  /** Improvements to measure in a pilot. Deliberately not numeric: the proof of concept runs on simulated data. */
  readonly outcomes: Point[] = [
    { icon: 'fa-calendar-check', title: 'More orders delivered on time', text: 'Fewer late orders and lower total tardiness, tracked as on-time delivery.' },
    { icon: 'fa-bolt', title: 'Faster response to disruption', text: 'From a machine breakdown or urgent order to a reviewed new schedule in minutes instead of a manual re-plan.' },
    { icon: 'fa-gauge-high', title: 'Better machine utilization', text: 'Less idle and setup time, and work moved to available machines while others are down.' },
    { icon: 'fa-hourglass-half', title: 'Shorter overall completion time', text: 'A shorter makespan for the same set of orders.' },
    { icon: 'fa-user-clock', title: 'Less planner effort', text: 'Planners review a recommendation and approve it instead of rebuilding the plan by hand.' },
    { icon: 'fa-scale-balanced', title: 'Decisions you can explain', text: 'Each change has an impact analysis, a comparison and an audit record behind it.' },
  ];

  readonly tech = ['Python · FastAPI', 'Google OR-Tools CP-SAT', 'PostgreSQL · Redis', 'WebSocket live updates', 'Angular'];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.set({
      title: 'AI Adaptive Job Shop Scheduling | VAMS Mechatronica',
      description:
        'VAMS Adaptive Scheduler re-plans production when machines break down, orders change or material is late: it measures the impact, recommends a new schedule and a planner approves it.',
      path: '/job-shop-scheduling',
    });
  }
}
