export type Category = "journeys" | "automation" | "analytics" | "datacloud";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  shortDescription: string;
  tools: string[];
  overview: string;
  problem: string;
  objective: string;
  architecture: string[];
  approach: string[];
  journey: string[];
  personalisation: string[];
  automation: string[];
  results: { label: string; value: string; sub?: string }[];
  learnings: string[];
  improvements: string[];
  accent: "lime" | "coral" | "cobalt";
}

export const categories: Record<Category, { label: string; tagline: string; accent: string }> = {
  journeys: {
    label: "Customer Journey & Campaign Execution",
    tagline: "Multi-step journeys, decision splits, and personalised sends that actually convert.",
    accent: "lime",
  },
  automation: {
    label: "Marketing Automation & Data Workflows",
    tagline: "SQL-driven Automation Studio pipelines that take the manual work off the team.",
    accent: "coral",
  },
  analytics: {
    label: "Campaign Optimisation & Analytics",
    tagline: "A/B testing, deliverability, and reporting loops that compound performance.",
    accent: "cobalt",
  },
  datacloud: {
    label: "Data Cloud — Modelling & Activation",
    tagline: "Unified profiles, identity resolution, and real-time segment activation.",
    accent: "lime",
  },
};

export const projects: Project[] = [
  {
    slug: "welcome-onboarding-journey",
    title: "Welcome & Onboarding Journey for a Retail Subscriber Base",
    category: "journeys",
    accent: "lime",
    shortDescription:
      "A 14-day onboarding journey that warms new subscribers with progressive content, decision splits, and re-engagement fallbacks.",
    tools: ["Journey Builder", "Email Studio", "AMPscript", "Data Extensions", "Contact Builder"],
    overview:
      "Designed and built a multi-step onboarding journey for a retail brand's newly captured subscribers, focused on educating, building product affinity, and converting first purchase within 14 days.",
    problem:
      "New subscribers were dropped into the same weekly newsletter as 5-year customers. Open rates from new contacts were strong in week 1 then collapsed by week 3, and first-purchase conversion sat at 4.1%.",
    objective:
      "Lift first-purchase conversion to 7%+ within 14 days of subscription, maintain engagement above 35% open rate through the welcome window, and keep unsubscribes under 0.4%.",
    architecture: [
      "Master Subscribers Data Extension (Sendable, keyed on SubscriberKey)",
      "Onboarding_Behaviour DE for click + open tracking joined back via SubscriberKey",
      "Preferences DE linked through Contact Builder to power AMPscript-driven personalisation",
      "Suppression DE refreshed nightly via Automation Studio SQL",
    ],
    approach: [
      "Mapped the 14-day journey on paper before touching the canvas — entry, value, social proof, offer, recovery.",
      "Built modular content blocks in Content Builder so the brand team could swap hero imagery without engineering.",
      "Used Journey Builder Engagement Splits at Day 4 and Day 9 to fork engaged vs dormant paths.",
      "Wired re-entry rules so subscribers who completed a purchase exited cleanly into the lifecycle journey.",
    ],
    journey: [
      "Entry: API event when a subscriber confirms double opt-in.",
      "Day 0 — Welcome email with brand story + preference centre link.",
      "Day 2 — Category showcase, dynamic content based on captured preference.",
      "Day 4 — Engagement Split: opened any prior email → social proof path; else → re-introduction email.",
      "Day 7 — First-purchase incentive (10% off, AMPscript-personalised promo code).",
      "Day 9 — Decision Split on purchase event from Sales Cloud sync.",
      "Day 12 — Win-back email for non-openers; thank-you email for converters.",
      "Day 14 — Exit to lifecycle journey with tagged segment attributes.",
    ],
    personalisation: [
      "AMPscript Lookup() against Preferences DE to inject category-specific hero copy.",
      "Dynamic content blocks driven by FirstName, LastPurchaseCategory, and LoyaltyTier.",
      "Personalised promo codes generated via SSJS, written back to a tracking DE for redemption analytics.",
    ],
    automation: [
      "Nightly Automation Studio: SQL query refreshes Onboarding_Behaviour DE from _Open and _Click data views.",
      "Hourly file drop automation imports new subscribers from the e-commerce platform.",
      "Scheduled SQL identifies stalled journeys and writes them to a Win-back DE.",
    ],
    results: [
      { label: "First-purchase conversion", value: "+72%", sub: "4.1% → 7.05%" },
      { label: "Avg. open rate (welcome window)", value: "41.8%" },
      { label: "Click-through rate", value: "8.4%" },
      { label: "Unsubscribe rate", value: "0.27%" },
    ],
    learnings: [
      "Engagement splits beat time-based logic — behaviour signals were the strongest predictor of conversion.",
      "Treating Content Builder like a design system saved 6+ hours per campaign for the brand team.",
    ],
    improvements: [
      "Move the Day 7 incentive into a Decision Split based on browse abandonment from a CDP signal.",
      "Add Einstein Send Time Optimisation once volume crosses the model threshold.",
    ],
  },
  {
    slug: "winback-reengagement",
    title: "Win-Back Journey for Lapsed Subscribers",
    category: "journeys",
    accent: "coral",
    shortDescription:
      "A 4-touch win-back sequence with progressive incentives, sunset logic, and clean list hygiene at the end.",
    tools: ["Journey Builder", "AMPscript", "SQL", "Automation Studio"],
    overview:
      "Re-engaged 90-day inactive subscribers with a four-touch journey that escalates value, then sunsets unresponsive contacts to protect sender reputation.",
    problem:
      "List health was degrading — 38% of the active sendable file had not opened in 90+ days. Deliverability flags were beginning to appear in Gmail and Yahoo.",
    objective:
      "Reactivate at least 8% of dormant subscribers and remove the rest from the active sendable list to lift inbox placement.",
    architecture: [
      "Dormant_Subscribers DE refreshed weekly via SQL against _Open and _Sent data views (LastOpenDate < DATEADD(day, -90, GETDATE())).",
      "Reactivation_Tracking DE captures journey events and outcome flags.",
      "Suppression DE auto-populated from sunset path exits.",
    ],
    approach: [
      "Defined dormancy rules with the marketing team using engagement data, not gut feel.",
      "Built a 4-touch journey with progressive value: nostalgia → preference reset → offer → sunset notice.",
      "Suppressed sunset contacts globally via a publication list update at journey exit.",
    ],
    journey: [
      "Touch 1: 'We miss you' — emotional, no offer, single CTA to update preferences.",
      "Touch 2: Preference centre push with 3 quick-pick interest tiles.",
      "Touch 3: Offer email — 15% off + free shipping (AMPscript dynamic code).",
      "Touch 4: Sunset notice — 'Last chance to stay subscribed' single-click confirmation.",
      "Decision Split after Touch 3 routes openers back to lifecycle, non-openers to sunset.",
    ],
    personalisation: [
      "AMPscript inserts the subscriber's last purchased category if available, otherwise top brand category.",
      "Dynamic countdown using time-based AMPscript for the offer window.",
    ],
    automation: [
      "Weekly SQL automation rebuilds the Dormant_Subscribers DE.",
      "Post-journey automation moves sunset contacts to the master suppression list.",
    ],
    results: [
      { label: "Reactivation rate", value: "11.3%", sub: "of dormant base" },
      { label: "Sunset & list health", value: "−27%", sub: "reduction in inactive sendables" },
      { label: "Inbox placement (Gmail)", value: "+6.2pts" },
      { label: "Revenue per email (offer touch)", value: "$0.41" },
    ],
    learnings: [
      "Sunset email outperformed the offer email — urgency + identity > discount.",
      "Cleaning the list is a growth lever, not a loss.",
    ],
    improvements: [
      "Layer in an SMS touch via MobileConnect on the sunset step.",
      "Use Einstein Engagement Scoring to personalise the offer depth.",
    ],
  },
  {
    slug: "sql-segmentation-pipeline",
    title: "Automated Segmentation Pipeline in Automation Studio",
    category: "automation",
    accent: "coral",
    shortDescription:
      "Replaced a manual weekly segmentation process with an end-to-end SQL automation refreshing 12 audience DEs nightly.",
    tools: ["Automation Studio", "SQL", "Contact Builder", "FTP", "Data Extensions"],
    overview:
      "Built a nightly SQL-powered automation that ingests behavioural and transactional data, rebuilds 12 audience Data Extensions, and stages files for downstream campaigns.",
    problem:
      "The marketing ops team spent ~6 hours every Monday building audience segments by hand in Excel and importing them into Marketing Cloud. Errors were frequent and segments were stale by mid-week.",
    objective:
      "Eliminate manual segmentation, refresh audiences nightly, and give campaign managers self-serve access to current segments.",
    architecture: [
      "Source DEs: Transactions, WebEvents, Subscriber_Master, Loyalty.",
      "Staging DEs: cleaned and deduped versions, keyed on SubscriberKey.",
      "Output DEs: 12 audience segments (high-value, lapsed, browse-abandon, loyalty tiers, etc.).",
      "FTP drop folder for nightly extract pickup by the BI team.",
    ],
    approach: [
      "Documented all 12 segment definitions with the marketing team — one source of truth.",
      "Built modular SQL: each query reads from staging, writes to a single output DE.",
      "Chained activities in Automation Studio with verification queries between steps.",
      "Set up error-handling notifications via Automation Studio email alerts.",
    ],
    journey: [
      "Not journey-based — this is the data layer that powers every journey downstream.",
    ],
    personalisation: [
      "Segments expose attributes (Tier, LastPurchase, LTV bucket) consumed by AMPscript in send-time personalisation.",
    ],
    automation: [
      "Step 1: File transfer activity pulls overnight transaction extract.",
      "Step 2: SQL imports + dedupes into staging DEs.",
      "Step 3: 12 segmentation SQLs run in parallel.",
      "Step 4: Verification query writes row counts to a monitoring DE.",
      "Step 5: File extract for BI team.",
    ],
    results: [
      { label: "Manual hours saved", value: "24/mo", sub: "across the ops team" },
      { label: "Segment freshness", value: "Daily", sub: "down from weekly" },
      { label: "Campaign launch lead time", value: "−48%" },
      { label: "Data errors", value: "≈0", sub: "vs ~3/wk previously" },
    ],
    learnings: [
      "Verification queries between steps caught issues before they reached campaigns.",
      "Treating SQL like product code — versioned, peer-reviewed — paid off.",
    ],
    improvements: [
      "Migrate the heaviest segments to Data Cloud calculated insights for real-time refresh.",
    ],
  },
  {
    slug: "api-triggered-transactional",
    title: "API-Triggered Transactional Email Framework",
    category: "automation",
    accent: "lime",
    shortDescription:
      "Stood up a reusable REST-triggered send framework for order confirmations, password resets, and shipping updates.",
    tools: ["REST API", "Triggered Sends", "AMPscript", "JSON Payloads"],
    overview:
      "Built a reusable transactional sending framework using Marketing Cloud's REST API, supporting four transactional email types from a single integration pattern.",
    problem:
      "Each transactional email type was being built one-off with separate auth flows, inconsistent payloads, and no logging.",
    objective:
      "Create one documented integration pattern, one auth flow, and one logging surface for all transactional sends.",
    architecture: [
      "Single Server-to-Server installed package handling auth.",
      "Triggered Send Definitions per email type, all consuming a standardised JSON payload schema.",
      "Transactional_Log DE captures every send, status, and payload hash.",
    ],
    approach: [
      "Designed a JSON payload schema with engineering — recipient, type, and a flexible attributes object.",
      "Built triggered send definitions that map JSON attributes via AMPscript.",
      "Wrote integration docs and a Postman collection for the engineering team.",
    ],
    journey: [
      "Trigger fires from external system → REST endpoint → Triggered Send → Email.",
    ],
    personalisation: [
      "AMPscript parses the attributes object so engineering can add new fields without Marketing Cloud changes.",
    ],
    automation: [
      "Hourly automation reconciles the transactional log against expected send counts.",
    ],
    results: [
      { label: "Time to ship a new transactional", value: "−80%", sub: "5 days → 1 day" },
      { label: "Send success rate", value: "99.97%" },
      { label: "Engineering tickets", value: "−65%" },
    ],
    learnings: [
      "A clean schema is a force multiplier — engineering self-served after week 1.",
    ],
    improvements: [
      "Add a fallback queue for failed sends with automated retry.",
    ],
  },
  {
    slug: "subject-line-ab-testing",
    title: "Subject Line A/B Testing Framework",
    category: "analytics",
    accent: "cobalt",
    shortDescription:
      "Established a structured A/B testing program that lifted average open rates 5.6 percentage points across the lifecycle program.",
    tools: ["Email Studio A/B Testing", "Analytics Builder", "SQL", "Excel"],
    overview:
      "Designed and ran a six-week A/B testing program across lifecycle campaigns, isolating one variable per test and codifying winners into a brand subject line playbook.",
    problem:
      "Subject lines were written by feel. There was no learning loop — winners weren't documented and patterns weren't reused.",
    objective:
      "Build a repeatable A/B testing framework, lift average open rate by at least 3 points, and create a playbook the team could use without analyst support.",
    architecture: [
      "Test_Log DE captures every test, variants, winner, and metrics.",
      "Reporting view in Analytics Builder for stakeholder visibility.",
    ],
    approach: [
      "Defined a hypothesis template — one variable, one metric, sample size calculator.",
      "Ran 18 tests over 6 weeks across 4 campaign types.",
      "Documented winning patterns: emoji placement, length, personalisation tokens.",
    ],
    journey: [
      "A/B test split at send time → 50/50 random → winner sent to remainder after 4-hour holdout.",
    ],
    personalisation: [
      "Tested AMPscript-personalised vs static subject lines — personalisation won 14 of 18 times.",
    ],
    automation: [
      "SQL writes each test outcome into Test_Log nightly for trend analysis.",
    ],
    results: [
      { label: "Avg. open rate lift", value: "+5.6pts", sub: "23.1% → 28.7%" },
      { label: "Tests shipped", value: "18", sub: "in 6 weeks" },
      { label: "Statistically significant wins", value: "11/18" },
    ],
    learnings: [
      "Personalisation tokens beat clever copy almost every time.",
      "Discipline beats volume — fewer, cleaner tests produced clearer learnings.",
    ],
    improvements: [
      "Move to multi-variate testing for high-volume sends.",
    ],
  },
  {
    slug: "deliverability-recovery",
    title: "Deliverability Recovery & Sender Reputation Project",
    category: "analytics",
    accent: "coral",
    shortDescription:
      "Diagnosed and resolved a Gmail throttling incident, rebuilding sender reputation through engagement-tiered sending.",
    tools: ["Sender Authentication", "SQL", "Automation Studio", "Postmaster Tools"],
    overview:
      "Investigated a sudden Gmail throttling event, rebuilt the sending strategy around engagement tiers, and restored inbox placement within three weeks.",
    problem:
      "Inbox placement at Gmail dropped from 96% to 71% over two weeks. Spam complaints spiked after a broad promotional send to the full file.",
    objective:
      "Restore Gmail inbox placement above 95% and put guardrails in place to prevent recurrence.",
    architecture: [
      "Engagement tiers (Hot, Warm, Cool, Cold) computed nightly via SQL on _Open and _Click data views.",
      "Sending rules: Hot daily, Warm 3x/week, Cool 1x/week, Cold suppressed pending re-engagement.",
    ],
    approach: [
      "Audited the previous 30 days of sends to find the trigger event.",
      "Suppressed the Cold tier for 14 days while re-warming sender reputation.",
      "Implemented engagement-tier sending rules across all promotional journeys.",
    ],
    journey: [
      "Promotional journeys gained an entry filter on engagement tier.",
    ],
    personalisation: [
      "Cool-tier subscribers received a re-engagement variant before any promotional content.",
    ],
    automation: [
      "Nightly tier recalculation SQL.",
      "Weekly deliverability dashboard auto-emailed to stakeholders.",
    ],
    results: [
      { label: "Gmail inbox placement", value: "97.4%", sub: "from 71%" },
      { label: "Spam complaint rate", value: "0.04%", sub: "from 0.31%" },
      { label: "Time to recovery", value: "21 days" },
    ],
    learnings: [
      "Volume is not a strategy. Engagement-tier sending is.",
      "Postmaster Tools should be checked weekly, not when something breaks.",
    ],
    improvements: [
      "Add automated alerting on weekly complaint rate thresholds.",
    ],
  },
  {
    slug: "data-cloud-unified-profile",
    title: "Unified Customer Profile in Data Cloud",
    category: "datacloud",
    accent: "lime",
    shortDescription:
      "Modelled and resolved customer identity across web, mobile, and CRM into a single profile activated to Marketing Cloud.",
    tools: ["Data Cloud", "Identity Resolution", "DMOs", "Calculated Insights", "Marketing Cloud Activation"],
    overview:
      "Designed a unified customer profile in Salesforce Data Cloud by ingesting three source systems, configuring identity resolution, and activating segments back into Marketing Cloud.",
    problem:
      "The same customer existed three times — once in CRM, once in the e-commerce platform, once in the web analytics tool. Marketing was sending overlapping messages and missing the full picture.",
    objective:
      "Build one unified profile per customer, expose calculated insights (LTV, recency, channel preference), and activate audiences into Marketing Cloud.",
    architecture: [
      "Data Streams: CRM contacts, ecom orders, web events.",
      "Data Lake Objects mapped to standard Individual / Contact Point Email DMOs.",
      "Identity Resolution Ruleset: exact email match → fuzzy name + phone fallback.",
      "Calculated Insights: LTV90, LastEngagementDate, PreferredChannel.",
    ],
    approach: [
      "Mapped each source field to standard DMOs, documenting every transform.",
      "Configured Identity Resolution with prioritised rules and reconciliation order.",
      "Built calculated insights in SQL-like syntax for downstream segmentation.",
      "Created an Activation Target into Marketing Cloud Data Extensions.",
    ],
    journey: [
      "Activated 'High LTV + lapsed 30d' segment streams into a Marketing Cloud win-back journey.",
    ],
    personalisation: [
      "Calculated Insights surfaced as attributes inside Marketing Cloud for AMPscript personalisation.",
    ],
    automation: [
      "Streaming ingestion for web events.",
      "Hourly batch ingestion for CRM and ecom.",
      "Real-time activation refresh on segment changes.",
    ],
    results: [
      { label: "Profile dedupe", value: "−42%", sub: "duplicate contacts" },
      { label: "Segment build time", value: "minutes", sub: "from days" },
      { label: "Cross-channel campaign lift", value: "+23%", sub: "engagement" },
    ],
    learnings: [
      "Identity resolution is 80% data hygiene, 20% configuration.",
      "Calculated insights unlock the team — they don't need an engineer for every segment.",
    ],
    improvements: [
      "Add a third-party enrichment stream for firmographic data.",
    ],
  },
];

export const featuredSlugs = [
  "welcome-onboarding-journey",
  "sql-segmentation-pipeline",
  "data-cloud-unified-profile",
];