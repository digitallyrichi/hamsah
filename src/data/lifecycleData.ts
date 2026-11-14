export interface LifecycleStage {
  id: string;
  stageNumber: string;
  stageIndex: number;
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  phaseCategory: 'Validation & Modeling' | 'Market Leap & Infancy' | 'Institutional Scale';
  iconName: string;
  typicalHorizon: string;
  criticalTrap: string;
  strategicIntervention: string;
  howWeHelp: string[];
  deliverables: string[];
  readinessChecklist: { id: string; label: string; importance: string }[];
  targetOutcome: string;
  recommendedPractices: string[];
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: 'stage-01',
    stageNumber: 'STAGE 01',
    stageIndex: 0,
    title: 'The Idea',
    subtitle: 'From possibility to structured direction',
    tagline: 'Every business begins with a possibility.',
    summary:
      'Turn an initial thought into a business concept with direction and purpose. Before committing substantial capital, test commercial assumptions, determine market appetite, and establish foundational positioning.',
    phaseCategory: 'Validation & Modeling',
    iconName: 'Lightbulb',
    typicalHorizon: '4 to 6 Weeks',
    criticalTrap:
      'Premature capital expenditure and building in an unvalidated vacuum without testing economic feasibility or defensibility.',
    strategicIntervention:
      'Rigorous market sizing, competitor mapping, business model design, and preliminary legal structuring to validate viable commercial demand.',
    howWeHelp: [
      'Market, industry, and competitor intelligence research',
      'Business model development and commercial opportunity assessment',
      'Initial commercial strategy formulation and monetization frameworks',
      'Legal considerations, structural advice, and coordination with qualified corporate specialists',
      'Early brand positioning, distinct value proposition, and messaging architecture',
    ],
    deliverables: [
      'Comprehensive Market Viability Dossier',
      'Unit Economics & Business Model Blueprint',
      'Foundational Corporate Structuring Advisory',
      'Brand Identity & Core Narrative Matrix',
    ],
    readinessChecklist: [
      { id: 's1-1', label: 'Primary target audience and underserved pain point defined', importance: 'Critical' },
      { id: 's1-2', label: 'Competitor pricing and monetization models analyzed', importance: 'High' },
      { id: 's1-3', label: 'Core unit economics and gross margin viability verified', importance: 'High' },
      { id: 's1-4', label: 'Intellectual property and corporate structure considerations reviewed', importance: 'Recommended' },
    ],
    targetOutcome: 'Move from an ambiguous thought to a validated, de-risked proposition worth pursuing.',
    recommendedPractices: ['Business Strategy', 'Legal Coordination', 'Digital Marketing'],
  },
  {
    id: 'stage-02',
    stageNumber: 'STAGE 02',
    stageIndex: 1,
    title: 'The Prototype',
    subtitle: 'Validate before capital allocation',
    tagline: 'Test the idea. Validate the opportunity.',
    summary:
      'Before investing heavily in production or full-scale rollout, determine whether the solution addresses a genuine commercial pain point and possesses a viable, scalable route to market.',
    phaseCategory: 'Validation & Modeling',
    iconName: 'FlaskConical',
    typicalHorizon: '6 to 10 Weeks',
    criticalTrap:
      'Over-engineering a complex product before validating actual willingness-to-pay from real target buyers.',
    strategicIntervention:
      'Customer discovery frameworks, early adopter pilot testing, and pricing sensitivity audits to build hard empirical evidence.',
    howWeHelp: [
      'Customer and market validation frameworks and structured feedback loops',
      'Prototype positioning and strategic user-feedback analysis',
      'Initial digital presence setup and digital marketing test-beds',
      'Commercial feasibility, unit economics, and pricing model testing',
      'Go-to-market planning and early commercial partnership cultivation',
    ],
    deliverables: [
      'Pilot Testing & Customer Discovery Report',
      'Pricing Sensitivity & Monetization Model',
      'Go-To-Market (GTM) Launch Architecture',
      'Early Adopter Landing Presence & Outreach System',
    ],
    readinessChecklist: [
      { id: 's2-1', label: 'Functional minimum viable prototype or pilot service operational', importance: 'Critical' },
      { id: 's2-2', label: 'Direct feedback gathered from at least 15–20 qualified potential buyers', importance: 'High' },
      { id: 's2-3', label: 'Preliminary pricing tiers and customer willingness-to-pay tested', importance: 'High' },
      { id: 's2-4', label: 'Pilot partner or early access pipeline established', importance: 'Recommended' },
    ],
    targetOutcome: 'Build verifiable commercial evidence, refine the proposition, and prepare for market launch.',
    recommendedPractices: ['Business Strategy', 'Digital Marketing'],
  },
  {
    id: 'stage-03',
    stageNumber: 'STAGE 03',
    stageIndex: 2,
    title: 'Crossing the Chasm',
    subtitle: 'Bridging early adopters to the broader market',
    tagline: 'Bridge the gap between early adopters and the wider market.',
    summary:
      'A promising idea needs more than an initial polite niche. It demands a repeatable system to reach pragmatic mainstream clients, establish undeniable authority, and gain commercial velocity.',
    phaseCategory: 'Validation & Modeling',
    iconName: 'Compass',
    typicalHorizon: '8 to 14 Weeks',
    criticalTrap:
      'Falling into the classic Chasm trap: assuming visionary early adopters behave like skeptical, risk-averse mainstream buyers.',
    strategicIntervention:
      'Refining value messaging to address risk mitigation, setting up dependable inbound demand generation, and structuring sales enablement collateral.',
    howWeHelp: [
      'Market segmentation and high-value target-client profiling',
      'Positioning and messaging refinement for skeptical mainstream buyers',
      'Digital marketing and multi-channel demand-generation strategy',
      'Sales enablement, pitch collateral, and commercial outreach frameworks',
      'Commercial distribution channels and route-to-market partnership blueprints',
    ],
    deliverables: [
      'Mainstream Customer Acquisition Playbook',
      'Refined B2B Messaging & Positioning Matrix',
      'Demand Generation & Inbound Pipeline Setup',
      'Commercial Partner & Channel Distribution Plan',
    ],
    readinessChecklist: [
      { id: 's3-1', label: 'Value proposition clearly differentiated from incumbents for pragmatic buyers', importance: 'Critical' },
      { id: 's3-2', label: 'Repeatable sales process documented beyond founder-led outreach', importance: 'High' },
      { id: 's3-3', label: 'Target beachhead segment identified and prioritized', importance: 'High' },
      { id: 's3-4', label: 'Case study references or pilot testimonials assembled', importance: 'Recommended' },
    ],
    targetOutcome: 'Turn early sporadic interest into a predictable, repeatable commercial acquisition engine.',
    recommendedPractices: ['Digital Marketing', 'Business Strategy', 'Bid & Tender Management'],
  },
  {
    id: 'stage-04',
    stageNumber: 'STAGE 04',
    stageIndex: 3,
    title: 'Taking the Leap',
    subtitle: 'From preparation to purposeful, high-stakes action',
    tagline: 'Move from preparation to purposeful action.',
    summary:
      'Launching, committing significant investment capital, entering a brand-new segment, or pursuing a decisive enterprise mandate requires unyielding preparation and informed decision-making.',
    phaseCategory: 'Market Leap & Infancy',
    iconName: 'Rocket',
    typicalHorizon: '4 to 8 Weeks',
    criticalTrap:
      'Committing heavy capital or entering enterprise procurement without statutory compliance, bid readiness, or risk mitigation in place.',
    strategicIntervention:
      'End-to-end launch orchestration, corporate documentation, RFP compliance audits, and high-impact market activation.',
    howWeHelp: [
      'Comprehensive launch planning and milestone execution oversight',
      'Business documentation and legal coordination for corporate compliance',
      'Proposal, bid, RFx, and public/private tender readiness audits',
      'Targeted marketing campaigns and high-impact brand activation',
      'Opportunity assessment and strategic risk mitigation for leadership',
    ],
    deliverables: [
      'Full Launch Orchestration Roadmap',
      'Corporate Governance & Compliance Binder',
      'RFx & Tender Readiness Certification',
      'Omnichannel Brand Activation Campaign',
    ],
    readinessChecklist: [
      { id: 's4-1', label: 'Capital allocation and runway modeled for launch milestones', importance: 'Critical' },
      { id: 's4-2', label: 'Statutory corporate documentation and entity compliance certified', importance: 'Critical' },
      { id: 's4-3', label: 'Tender/RFx proposal capability and response templates prepared', importance: 'High' },
      { id: 's4-4', label: 'Go-live marketing campaigns and press/outreach ready', importance: 'High' },
    ],
    targetOutcome: 'Take the defining next step with an airtight plan and a fortified commercial footing.',
    recommendedPractices: ['Bid & Tender Management', 'Legal Coordination', 'Digital Marketing'],
  },
  {
    id: 'stage-05',
    stageNumber: 'STAGE 05',
    stageIndex: 4,
    title: 'Business Infancy',
    subtitle: 'Foundations for sustainable, disciplined operations',
    tagline: 'Build the foundations for sustainable operations.',
    summary:
      'A new business must establish its operating rhythm, dependable cash flow, client portfolio, and market credibility while managing constrained operational bandwidth and resources.',
    phaseCategory: 'Market Leap & Infancy',
    iconName: 'Building',
    typicalHorizon: '3 to 6 Months',
    criticalTrap:
      'Operational chaos, cash flow leakage, and inconsistent client acquisition diluting focus during the critical survival phase.',
    strategicIntervention:
      'Structuring standard operating procedures, building digital credibility, and systematically identifying accessible public/private bidding opportunities.',
    howWeHelp: [
      'Business operating process design and corporate documentation support',
      'Brand identity establishment and high-authority digital presence',
      'Systematic client acquisition and outbound executive outreach strategy',
      'Early bid and tender opportunity identification and eligibility reviews',
      'Foundational business planning, cash-flow discipline, and growth sequencing',
    ],
    deliverables: [
      'Standard Operating Procedures (SOPs) & Documentation',
      'Client Acquisition & Follow-up Workflow',
      'Tender Tracking & Qualification Filter',
      'Enterprise Brand Asset Suite',
    ],
    readinessChecklist: [
      { id: 's5-1', label: 'Standardized operational procedures for core service delivery', importance: 'Critical' },
      { id: 's5-2', label: 'Professional web authority and verifiable corporate credentials in place', importance: 'High' },
      { id: 's5-3', label: 'Predictable monthly revenue cadence and expense controls', importance: 'High' },
      { id: 's5-4', label: 'Active monitoring of small-to-mid tender and vendor portals', importance: 'Recommended' },
    ],
    targetOutcome: 'Establish an unshakeable market presence and create the foundations for consistent progress.',
    recommendedPractices: ['Business Strategy', 'Digital Marketing', 'Bid & Tender Management'],
  },
  {
    id: 'stage-06',
    stageNumber: 'STAGE 06',
    stageIndex: 5,
    title: 'Establishing the Business',
    subtitle: 'Strengthen market authority and institutional consistency',
    tagline: 'Strengthen credibility. Build consistency.',
    summary:
      'As operations mature, focus pivots to entrenched market positioning, institutional-grade delivery mechanisms, a growing client portfolio, and capturing structured contract opportunities.',
    phaseCategory: 'Institutional Scale',
    iconName: 'Award',
    typicalHorizon: '6 to 12 Months',
    criticalTrap:
      'Hitting an operational ceiling, relying on ad-hoc referrals, and losing high-value RFPs due to weak tender management and compliance gaps.',
    strategicIntervention:
      'End-to-end bid and tender writing, competitive proposal scoring enhancement, digital authority leadership, and strategic B2B partnerships.',
    howWeHelp: [
      'End-to-end bid and tender writing, proposal management, and submission reviews',
      'RFP compliance audits and competitive scoring enhancement',
      'Digital marketing, brand authority building, and executive thought leadership',
      'B2B business development and strategic enterprise partnerships',
      'Operational and commercial improvement planning for margin resilience',
    ],
    deliverables: [
      'Full Bid & Tender Submission Packages',
      'Contract Compliance & Risk Review Dossiers',
      'Strategic Corporate Credibility Campaign',
      'Revenue Optimization & Key Client Retention Plan',
    ],
    readinessChecklist: [
      { id: 's6-1', label: 'Proven track record and verifiable past performance documentation', importance: 'Critical' },
      { id: 's6-2', label: 'Dedicated RFx/tender pipeline with win-rate tracking', importance: 'Critical' },
      { id: 's6-3', label: 'Audited financial statements and statutory vendor certifications', importance: 'High' },
      { id: 's6-4', label: 'Executive thought leadership and B2B positioning active', importance: 'High' },
    ],
    targetOutcome: 'Build a commanding market position and a more structured, resilient path to growth.',
    recommendedPractices: ['Bid & Tender Management', 'Legal Coordination', 'Digital Marketing'],
  },
  {
    id: 'stage-07',
    stageNumber: 'STAGE 07',
    stageIndex: 6,
    title: 'Strategic Growth',
    subtitle: 'From momentum to deliberate, compounding growth',
    tagline: 'Move beyond momentum to intentional growth.',
    summary:
      'Growth calls for sharper strategic priorities, disciplined capital allocation, and the commercial intelligence to pursue higher-margin, multi-year opportunities.',
    phaseCategory: 'Institutional Scale',
    iconName: 'TrendingUp',
    typicalHorizon: '12 to 24 Months',
    criticalTrap:
      'Chasing unvetted low-margin revenue, margin dilution, and lack of prioritization across competing growth channels.',
    strategicIntervention:
      'Designing targeted revenue strategies, capturing multi-year government/corporate contracts, and developing strategic joint venture frameworks.',
    howWeHelp: [
      'Bespoke business and revenue growth strategy for enterprise accounts',
      'Strategic account development and high-value pipeline prioritization',
      'Competitive bid strategy and multi-year tender pipeline capture',
      'Marketing ROI optimization and continuous competitor intelligence',
      'Commercial joint venture development and partnership structuring',
    ],
    deliverables: [
      'Enterprise Revenue Strategy & Forecasting Model',
      'High-Value RFP & Tender Pipeline Execution',
      'Competitive Intelligence Briefings',
      'Strategic Joint Venture Frameworks',
    ],
    readinessChecklist: [
      { id: 's7-1', label: 'Enterprise account expansion and multi-year contract renewals prioritized', importance: 'Critical' },
      { id: 's7-2', label: 'Consortium or subcontracting capability for mega-tenders', importance: 'High' },
      { id: 's7-3', label: 'Margin analysis by practice line and market segment', importance: 'High' },
      { id: 's7-4', label: 'Strategic alliance or distribution channel partner agreements active', importance: 'High' },
    ],
    targetOutcome: 'Pursue high-value enterprise growth with sharp commercial clarity and disciplined focus.',
    recommendedPractices: ['Business Strategy', 'Bid & Tender Management', 'Legal Coordination'],
  },
  {
    id: 'stage-08',
    stageNumber: 'STAGE 08',
    stageIndex: 7,
    title: 'Expansion & New Horizons',
    subtitle: 'Geographic, sectoral, and cross-border expansion',
    tagline: 'Take your business where it can go next.',
    summary:
      'Whether expanding geographically, entering adjacent industry sectors, pursuing sovereign public procurement, or diversifying offerings, the next chapter requires sovereign preparation.',
    phaseCategory: 'Institutional Scale',
    iconName: 'Globe',
    typicalHorizon: '18 to 36 Months',
    criticalTrap:
      'Underestimating local regulatory hurdles, cultural market disconnects, and over-extending managerial bandwidth across new jurisdictions.',
    strategicIntervention:
      'Cross-border market entry strategy, cross-regional procurement mastery, multi-jurisdiction legal coordination, and brand localization.',
    howWeHelp: [
      'Cross-border and domestic market-entry strategy roadmaps',
      'New-sector and customer opportunity scanning and feasibility research',
      'High-stakes public procurement and cross-regional tender mastery',
      'Brand adaptation and multi-regional digital market positioning',
      'Legal and regulatory coordination through appropriately qualified counsel',
      'Strategic planning for organizational resilience and enterprise scaling',
    ],
    deliverables: [
      'New Market / Territory Expansion Playbook',
      'Cross-Jurisdiction Regulatory & Legal Roadmap',
      'Large-Scale Government & Consortium Tender Strategy',
      'Brand Localization & Global Digital Architecture',
    ],
    readinessChecklist: [
      { id: 's8-1', label: 'Cross-border or inter-state regulatory requirements audited', importance: 'Critical' },
      { id: 's8-2', label: 'Regional market demand and local competitor landscape vetted', importance: 'Critical' },
      { id: 's8-3', label: 'Multi-jurisdiction corporate tax and compliance structure configured', importance: 'High' },
      { id: 's8-4', label: 'Localization of brand narrative and marketing infrastructure complete', importance: 'High' },
    ],
    targetOutcome: 'Penetrate new horizons and scale with structured risk mitigation and institutional clarity.',
    recommendedPractices: ['Business Strategy', 'Bid & Tender Management', 'Legal Coordination', 'Digital Marketing'],
  },
];

export interface PracticeArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'bid-tender',
    title: 'Bid & Tender Management',
    tagline: 'Precision RFx, RFP & High-Value Procurement Support',
    description:
      'We orchestrate end-to-end bid management for commercial and government tenders—from opportunity identification and compliance scoring to persuasive proposal writing and submission oversight.',
    iconName: 'FileCheck2',
    features: [
      'Comprehensive RFx, RFP, RFI, and EOI response development',
      'Tender compliance audits and scoring optimization',
      'Bid pipeline management and opportunity tracking',
      'Executive summaries, value proposition, and pitch decks',
    ],
  },
  {
    id: 'business-strategy',
    title: 'Business & Revenue Strategy',
    tagline: 'Actionable Commercial Planning & Scalable Models',
    description:
      'Turning ambition into defensible commercial results. We craft robust business models, route-to-market strategies, revenue optimization blueprints, and enterprise growth roadmaps.',
    iconName: 'TrendingUp',
    features: [
      'Market opportunity scanning and competitor intelligence',
      'Business model development and unit economics refinement',
      'Go-to-market (GTM) execution and distribution channels',
      'Strategic client acquisition and commercial scaling plans',
    ],
  },
  {
    id: 'legal-coordination',
    title: 'Legal Coordination & Setup',
    tagline: 'Corporate Governance & Risk Advisory Coordination',
    description:
      'Navigating enterprise establishment and contractual compliance with confidence. We coordinate business setup, regulatory considerations, and commercial agreements with certified external counsel.',
    iconName: 'Scale',
    features: [
      'Business setup coordination and corporate documentation',
      'Commercial contract review and negotiation support',
      'Risk mitigation and regulatory compliance roadmaps',
      'Coordination with qualified external jurisdiction counsel',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Branding',
    tagline: 'High-Authority Market Positioning & Demand Generation',
    description:
      'Establishing a credible market presence that drives measurable inbound demand. We build corporate identity architectures, digital campaigns, and B2B positioning that commands industry respect.',
    iconName: 'Compass',
    features: [
      'Corporate brand identity and executive narrative positioning',
      'Targeted B2B demand generation and client outreach campaigns',
      'Digital presence, conversion infrastructure, and web authority',
      'Market positioning and content-driven credibility strategies',
    ],
  },
];
