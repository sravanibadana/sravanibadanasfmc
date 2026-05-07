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
  image?: string;
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
      "A 14-day onboarding journey designed in Salesforce Marketing Cloud to nurture new subscribers, personalise engagement, and increase first-time customer conversion through behaviour-based automation.",
    tools: ["Journey Builder", "Email Studio", "AMPscript", "Automation Studio", "Data Extensions", "Contact Builder"],
    overview:
      "Designed and built a multi-step onboarding journey for a retail brand scenario focused on converting newly subscribed users into first-time customers within the first 14 days after signup. The journey used behavioural decisioning, personalised messaging, and automated exit logic to create a more relevant onboarding experience while reducing unnecessary communication.",
    problem:
      "New subscribers were receiving the same promotional campaigns as long-term customers immediately after signup. This resulted in declining engagement, low first-purchase conversion, and a poor onboarding experience for new contacts. The business needed a structured onboarding process that could educate subscribers, build trust, and encourage first purchase through targeted and personalised communication.",
    objective:
      "Increase first-time purchase conversion within the first 14 days, improve engagement among newly subscribed users, reduce overcommunication by removing converted customers from promotional messaging, and create a scalable onboarding framework using Salesforce Marketing Cloud automation.",
    architecture: [
      "Master Subscribers DE — Sendable Data Extension keyed on SubscriberKey, used as the Journey Builder entry source for new website signups.",
      "Preferences DE — Stores favourite product category and other preferences to power dynamic AMPscript personalisation in emails.",
      "Suppression DE — Maintains unsubscribed contacts, duplicate SubscriberKeys, and existing customers; applied before journey entry to protect audience quality.",
      "Engagement Tracking — Journey Builder + SFMC tracking data monitors opens, clicks, and progression through the journey.",
    ],
    approach: [
      "Mapped the onboarding flow before development — Welcome, Product Education, Engagement Evaluation, Reminder Path, Conversion Messaging, and Exit Logic.",
      "Built a behaviour-driven experience using Decision Splits so the journey adapts dynamically to subscriber engagement instead of sending the same sequence to everyone.",
      "Focused on early-stage personalisation with AMPscript: first name, preferred category, and recommended product messaging.",
      "Prevented overcommunication by configuring automated exit criteria — customers exit the journey immediately after a purchase.",
    ],
    journey: [
      "Entry Source — Data Extension entry capturing new website subscribers.",
      "Suppression Check — excludes unsubscribed users, duplicates, and existing purchasers.",
      "Day 0 — Personalised Welcome Email introducing the brand with AMPscript-driven recommendations.",
      "Wait Activity — 2 days.",
      "Day 2 — Product Education Email covering collections, reviews, benefits, and brand trust.",
      "Decision Split — did the subscriber open the previous email?",
      "Engaged Path (opened) — promotional messaging, stronger CTAs, purchase-focused offer email.",
      "Reminder Path (not opened) — revised subject line, simpler messaging, re-engagement focused communication.",
      "Exit Logic — subscribers who complete a purchase automatically exit the journey.",
    ],
    personalisation: [
      "AMPscript using Lookup(), AttributeValue(), and v() to dynamically render the subscriber first name, preferred category, and recommended products.",
      "Example: Lookup(\"Preferences_DE\", \"PreferredCategory\", \"SubscriberKey\", SubscriberKey) drives category-specific hero copy in the welcome email.",
      "Subject line optimisation on the reminder path — modified subject lines and simplified messaging improved re-engagement among non-openers.",
    ],
    automation: [
      "Send throttling configured to manage send performance, avoid delivery spikes, and protect deliverability.",
      "Engagement monitoring via Journey Builder reporting and SFMC tracking — open rate, CTR, engagement trends, and journey progression.",
      "Automated exit criteria tied to purchase behaviour to remove converted customers from promotional messaging in real time.",
    ],
    results: [
      { label: "Onboarding engagement", value: "Improved", sub: "via personalised, behaviour-based comms" },
      { label: "Message relevance", value: "Higher", sub: "decision-split paths vs static sequence" },
      { label: "Post-purchase emails", value: "Reduced", sub: "automated exit on conversion" },
      { label: "Lifecycle automation", value: "Scalable", sub: "reusable SFMC framework" },
    ],
    learnings: [
      "Behaviour-based decisioning creates more effective onboarding experiences than static email sequences.",
      "Early-stage personalisation improves engagement and message relevance.",
      "Exit criteria are critical for reducing message fatigue and protecting customer experience.",
      "Salesforce Marketing Cloud automation should align with customer lifecycle strategy, not just email delivery.",
    ],
    improvements: [
      "Add browse abandonment and ecommerce behavioural triggers for deeper targeting.",
      "Introduce A/B testing for subject lines, send times, and CTA placement.",
      "Implement Einstein Send Time Optimisation once subscriber volume supports predictive modelling.",
      "Expand onboarding into a broader post-purchase lifecycle journey with retention and loyalty campaigns.",
    ],
  },
  {
    slug: "winback-reengagement",
    title: "Win-Back & Sunset Journey for Dormant Subscribers",
    category: "journeys",
    accent: "coral",
    shortDescription:
      "A behaviour-driven win-back and sunset journey in Salesforce Marketing Cloud designed to re-engage 90-day inactive subscribers, improve deliverability, and protect long-term list health through progressive engagement and automated sunset logic.",
    tools: ["Journey Builder", "Automation Studio", "SQL Query Activities", "AMPscript", "Email Studio", "Data Extensions", "Contact Builder"],
    overview:
      "Designed and implemented a behaviour-driven win-back and sunset journey in Salesforce Marketing Cloud to re-engage dormant subscribers, improve deliverability performance, and maintain long-term email list health. The journey identified inactive subscribers with no engagement for 90+ days and guided them through a progressive four-touch reactivation sequence combining emotional reconnect messaging, preference updates, personalised promotional offers, behavioural decisioning, and automated sunset logic.",
    problem:
      "A large portion of the subscriber database had become inactive over time, with many subscribers showing no email engagement for more than 90 days. This caused declining open and click rates, reduced inbox placement at Gmail and Yahoo, increased deliverability risk, lower campaign efficiency, and poor overall list hygiene. The business needed a scalable lifecycle automation strategy to re-engage valuable dormant contacts, remove persistently inactive ones from promotional sends, and improve sender reputation.",
    objective:
      "Reactivate inactive subscribers through targeted engagement, improve overall email engagement quality, reduce inactive sendable audience volume, implement automated sunset and suppression logic, and create a scalable re-engagement framework within Salesforce Marketing Cloud.",
    architecture: [
      "Dormant Subscribers DE — sendable Data Extension refreshed weekly via SQL against _Sent and _Open data views to capture subscribers with no opens in the previous 90 days.",
      "SQL logic: SELECT s.SubscriberKey, s.EmailAddress FROM _Sent s LEFT JOIN _Open o ON s.SubscriberKey = o.SubscriberKey WHERE o.SubscriberKey IS NULL AND s.EventDate < DATEADD(day, -90, GETDATE()).",
      "Reactivation Tracking DE — captures journey progression, opens, clicks, reactivation status, and sunset outcomes for reporting and engagement analysis.",
      "Suppression DE — persistently inactive subscribers who complete the sunset path without engagement are automatically added through Automation Studio, preventing future promotional sends.",
    ],
    approach: [
      "Delayed discounts intentionally to avoid training subscribers to engage only when incentives are offered.",
      "Prioritised preference collection before promotional escalation to improve future targeting quality.",
      "Used behavioural engagement, not static sequencing, to determine journey progression.",
      "Treated sunset logic as a deliverability optimisation strategy rather than a loss of audience.",
      "Removed inactive contacts to improve overall engagement quality and inbox placement.",
    ],
    journey: [
      "Entry Source — Data Extension refreshed weekly via Automation Studio; subscribers with no email engagement in the previous 90 days enter.",
      "Touch 1 — 'We Miss You' emotional reconnect email focused on rebuilding brand connection with a single CTA to update preferences.",
      "Wait Activity — 7 days.",
      "Touch 2 — Preference Update Email asking subscribers to refresh product interests, preferred categories, and communication preferences.",
      "Wait Activity — 14 days.",
      "Touch 3 — Promotional Offer Email with 15% discount, free shipping, and AMPscript-driven personalised category recommendations.",
      "Decision Split — evaluates email opens and click activity after Touch 3.",
      "YES Path (interacted) — subscriber exits the win-back journey and returns to the standard lifecycle stream.",
      "NO Path (no interaction) — subscriber continues into the sunset path.",
      "Touch 4 — Final Sunset Email asking the subscriber whether they still want to remain subscribed; non-engaged contacts are added to the Suppression List.",
    ],
    personalisation: [
      "AMPscript Lookup() against Purchase_History_DE to render LastPurchasedCategory, with a fallback to 'Trending Products' when empty.",
      "Dynamic hero copy: \"We've added new arrivals in %%=v(@Category)=%% just for you.\"",
      "Preference centre captures category and channel preferences to feed downstream lifecycle targeting.",
    ],
    automation: [
      "Weekly Automation Studio job refreshes the Dormant Subscribers DE via SQL Query Activity.",
      "Suppression list updated automatically as subscribers exit the sunset path without engagement.",
      "Engagement tracking DE updated continuously to monitor opens, clicks, reactivation, and sunset completion rates.",
      "Deliverability focus: reduced inactive send volume, protected sender reputation, improved inbox placement, and prevented spam-filtering risks.",
    ],
    results: [
      { label: "Reactivation rate", value: "11.3%", sub: "of dormant base" },
      { label: "Inactive sendable audience", value: "−27%", sub: "reduction via sunset logic" },
      { label: "Inbox placement (Gmail)", value: "+6.2pts" },
      { label: "Revenue per email (offer touch)", value: "$0.41" },
    ],
    learnings: [
      "Deliverability and list hygiene are critical components of lifecycle marketing.",
      "Removing inactive subscribers can improve overall campaign performance.",
      "Progressive engagement strategies outperform immediate discount-heavy messaging.",
      "Behaviour-based routing creates more adaptive customer experiences.",
      "Salesforce Marketing Cloud automation should support both customer experience and deliverability goals.",
    ],
    improvements: [
      "Integrate MobileConnect SMS reminders before the sunset stage.",
      "Use Einstein Engagement Scoring for predictive reactivation targeting.",
      "Add ecommerce browse behaviour for richer behavioural segmentation.",
      "Introduce dynamic incentive levels based on engagement likelihood.",
      "Build dashboard reporting for lifecycle and deliverability analytics.",
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