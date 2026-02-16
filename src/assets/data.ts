interface Review {
  id: number;
  text: string;
  name: string;
  platform: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    text: "Velio cut our checkout time in half and boosted approvals. Integration took a day, not weeks.",
    name: "D2C brand",
    platform: "Head of Product",
  },
  {
    id: 2,
    text: "Reconciliation used to be painful. With Velio’s unified ledger, month‑end is a one‑hour task.",
    name: "LYNN WOOD",
    platform: "SaaS Platform",
  },
  {
    id: 3,
    text: "Subscriptions and dunning are finally on autopilot. Revenue is up, churn is down.",
    name: "ADELINE CHEN",
    platform: "Media app",
  },
];
