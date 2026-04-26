// Local images from public/images directory
const authorAvatar = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
const aboutSofiaHero = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
const editorialEleganceHero = "/images/amina-atar-tPM3nd4J8xs-unsplash.jpg";
const desertDreamsHero = "/images/igor-rand-dlR-BNDWz3g-unsplash.jpg";
const vintageHighwayHero = "/images/dwayne-joe-9wubaeSG13U-unsplash (1).jpg";
const lavenderFieldsHero = "/images/ozge-karzan-fdZjAjPUQbk-unsplash.jpg";
const coastalClassicHero = "/images/pexels-adrienne-andersen-1174503-2661255.jpg";
const storiesUnboundHero = "/images/pexels-ayomide-isaac-66354580-16273825.jpg";
const circularHorizonsHero = "/images/pexels-brianasarejr-12417686.jpg";
const retroRevivalHero = "/images/pexels-brianasarejr-17553641.jpg";
const goldenSpheresHero = "/images/pexels-jameshausley-3328337.jpg";

// Per-project case study imagery (research, user flow, wireframes, solution)
import zestResearch from "@/assets/zest-research.jpg";
import zestUserflow from "@/assets/zest-userflow.jpg";
import zestWireframes from "@/assets/zest-wireframes.jpg";
import zestSolution from "@/assets/zest-solution.jpg";
import laddaResearch from "@/assets/ladda-research.jpg";
import laddaUserflow from "@/assets/ladda-userflow.jpg";
import laddaWireframes from "@/assets/ladda-wireframes.jpg";
import laddaSolution from "@/assets/ladda-solution.jpg";
import prestmitResearch from "@/assets/prestmit-research.jpg";
import prestmitUserflow from "@/assets/prestmit-userflow.jpg";
import prestmitWireframes from "@/assets/prestmit-wireframes.jpg";
import prestmitSolution from "@/assets/prestmit-solution.jpg";
import letshegoResearch from "@/assets/letshego-research.jpg";
import letshegoUserflow from "@/assets/letshego-userflow.jpg";
import letshegoWireframes from "@/assets/letshego-wireframes.jpg";
import letshegoSolution from "@/assets/letshego-solution.jpg";
import dryvaResearch from "@/assets/dryva-research.jpg";
import dryvaUserflow from "@/assets/dryva-userflow.jpg";
import dryvaWireframes from "@/assets/dryva-wireframes.jpg";
import dryvaSolution from "@/assets/dryva-solution.jpg";

export interface CaseStudySection {
  paragraphs: string[];
  highlight?: string;
}

export interface CaseStudyTeamMember {
  role: string;
  name: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyMeta {
  client: string;
  role: string;
  year: string;
  duration: string;
  introduction: CaseStudySection;
  challenge: CaseStudySection;
  goals: string[];
  team: CaseStudyTeamMember[];
  research: CaseStudySection;
  userFlows: CaseStudySection;
  wireframes: CaseStudySection;
  solution: CaseStudySection;
  outcome: CaseStudySection;
  metrics: CaseStudyMetric[];
  images?: {
    research?: string;
    userFlow?: string;
    wireframes?: string;
    solution?: string;
  };
}

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  heroImage: string;
  readTime: string;
  viewCount: string;
  shareCount: number;
  caseStudy?: CaseStudyMeta;
  content: {
    type: "paragraph" | "heading" | "image" | "blockquote-big";
    content?: string;
    src?: string;
    alt?: string;
    caption?: string;
    author?: string;
    level?: number;
  }[];
  relatedCaseStudies: {
    title: string;
    description: string;
    image: string;
    tag: string;
    slug: string;
  }[];
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  "about-james": {
    slug: "about-james",
    title: "Enabling smooth and reliable payments across multiple channels. ",
    subtitle: "A Personal Introduction",
    publishDate: "ZEST PAYMENT GATEWAY",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: aboutSofiaHero,
    readTime: "8 min",
    viewCount: "4.8k",
    shareCount: 142,
    caseStudy: {
      client: "Zest",
      role: "Lead Product Designer",
      year: "2024",
      duration: "12 weeks",
      introduction: {
        paragraphs: [
          "Zest is a payment gateway helping African merchants accept payments across cards, bank transfers, USSD, and mobile wallets from a single integration. As the product expanded into new markets, the merchant dashboard had grown organically — features were added wherever there was room, and the experience had drifted away from the needs of the people running businesses on it.",
          "I led the redesign of the merchant-facing platform, with the goal of making it the calmest, most reliable place a business owner could check on their money. The work spanned the dashboard, transactions, settlements, and the developer onboarding flow.",
        ],
      },
      challenge: {
        paragraphs: [
          "Merchants were dropping out of onboarding before completing their first transaction. Those who made it through struggled to reconcile settlements, find specific transactions, or understand why a payment had failed. Support tickets repeated the same handful of questions every week.",
          "Underneath that, three things were going wrong: information hierarchy on the dashboard didn't match how merchants actually worked, transaction states were ambiguous, and the developer integration docs lived separately from the product — so engineers and operators were stuck switching contexts to debug anything.",
        ],
        highlight:
          "Money moves fast. The interface around it has to feel slower, calmer, and absolutely certain.",
      },
      goals: [
        "Cut time-to-first-transaction for new merchants by simplifying onboarding into clear, sequential steps.",
        "Make transaction status, fees, and settlement timing unambiguous at a glance.",
        "Unify the merchant dashboard and developer experience so context-switching disappears.",
        "Establish a scalable design system to support future channels and markets.",
      ],
      team: [
        { role: "Lead Product Designer", name: "Kingsley Omin" },
        { role: "Product Manager", name: "Ifeoma Eze" },
        { role: "Engineering Lead", name: "Tunde Akinola" },
        { role: "User Researcher", name: "Sade Adebayo" },
      ],
      research: {
        paragraphs: [
          "We started by spending two weeks with merchants — small e-commerce stores, ticketing platforms, and SaaS founders. Twelve in-depth interviews, five on-site visits, and a review of six months of support tickets gave us a clear picture of where the experience broke down.",
          "On the analytics side, funnel review showed onboarding drop-off concentrated at KYC document upload, and transaction-page heatmaps revealed merchants were scrolling past the very filters they needed. We triangulated qualitative pain with quantitative signal before drawing a single screen.",
        ],
      },
      userFlows: {
        paragraphs: [
          "We rebuilt the three highest-impact flows — merchant onboarding, transaction reconciliation, and settlement payout — around the fastest path to a successful outcome. Each flow was reduced to its essential decisions, and side paths (export, dispute, refund) were demoted to secondary actions instead of competing for attention.",
          "Mapping the journeys end-to-end exposed places where the system was asking merchants for information it already had, and steps that existed only because of legacy backend constraints. Several of those steps were removed entirely with the engineering team.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Low-fidelity wireframes let us pressure-test the new information hierarchy with real merchants in under a week. Three rounds of clickable Figma prototypes were tested with eight merchants each round, with iteration between sessions.",
          "By the third round, the new dashboard structure tested 38% faster on the core 'find a specific transaction' task. Engineering reviewed every wireframe before we moved into high-fidelity to keep the design grounded in what was actually shippable.",
        ],
      },
      solution: {
        paragraphs: [
          "The final design centres the dashboard on a single, scannable summary of money in, money out, and money settling — with everything else one click away. Transaction states use a clear visual language (succeeded, processing, failed, refunded) that's consistent across the dashboard, receipts, and webhook payloads.",
          "Developer documentation now lives inside the product, contextual to whatever the merchant is looking at. A unified design system — Zest DS — was built alongside the redesign, giving engineering a shared component library for every future surface.",
        ],
      },
      outcome: {
        paragraphs: [
          "Within the first quarter after launch, merchant onboarding completion rose sharply, support volume on the most common questions dropped by more than half, and merchant NPS improved meaningfully. The redesign also unblocked two new payment channels that had been stuck in the backlog because the old UI couldn't accommodate them.",
        ],
      },
      metrics: [
        { value: "+47%", label: "Onboarding completion" },
        { value: "−58%", label: "Support tickets on top issues" },
      ],
      images: {
        research: zestResearch,
        userFlow: zestUserflow,
        wireframes: zestWireframes,
        solution: zestSolution,
      },
    },
    content: [
      {
        type: "paragraph",
        content: "I grew up in Brooklyn, not far from where I work now.",
      },
      {
        type: "paragraph",
        content: "Fashion photography wasn't the plan. I studied photojournalism at NYU, spent a year shooting street life and community stories across the five boroughs. But I kept noticing how people dressed—not just what they wore, but how clothing became a language, a statement, a way of claiming space in the world.",
      },
      {
        type: "paragraph",
        content: "So I pivoted.",
      },
      {
        type: "paragraph",
        content: "Started assisting fashion photographers around the city. Learned lighting, composition, how to work with models and art directors. Spent long days in studios and on location shoots, carrying equipment and absorbing everything I could about how fashion images get made. It was unglamorous work, but it taught me the craft.",
      },
      {
        type: "paragraph",
        content: "Five years ago, I started shooting my own editorials. Built a portfolio that mixed street culture with high fashion—the aesthetic I'd grown up around in Brooklyn. Reached out to magazines and brands. The work came slowly, then all at once. These days I shoot for streetwear labels, beauty campaigns, and publications that care about storytelling as much as style.",
      },
      {
        type: "paragraph",
        content: "My studio in Williamsburg is small but filled with good light. I shoot on a Canon EOS R5 mostly, though I love my Hasselblad for special projects. Film has a quality digital can't quite replicate—something about the grain, the patience it requires, the way it forces you to slow down and get the shot right.",
      },
      {
        type: "paragraph",
        content: "This blog, Voyager, started as a portfolio site in 2021. It became something more—a place to document the process, share what I've learned, connect with other photographers and creatives who care about craft. I write about technique, inspiration, the business side of photography, and occasionally just share work I'm proud of.",
      },
      {
        type: "paragraph",
        content: "New York taught me that fashion is more than clothes. It's identity, culture, aspiration. Every shoot is a chance to capture not just how something looks, but what it means. That's the work that interests me—images that tell stories about who we are and who we want to be.",
      },
      {
        type: "paragraph",
        content: "If you want to collaborate, reach out. Tell me about your project. I'm usually booked a few months out, but I make room for work that excites me.",
      },
      {
        type: "paragraph",
        content: "Until then, I'll be here in Brooklyn—shooting, learning, and trying to capture something true.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "editorial-elegance": {
    slug: "editorial-elegance",
    title: "A unified investment platform for seamless access to diverse assets.",
    subtitle: "The Power of Accessories",
    publishDate: "LADDA — ALL YOUR INVESTMENTS IN ONE PLACE.",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: editorialEleganceHero,
    readTime: "8 min",
    viewCount: "2.4k",
    shareCount: 89,
    caseStudy: {
      client: "Ladda",
      role: "Senior Product Designer",
      year: "2024",
      duration: "10 weeks",
      introduction: {
        paragraphs: [
          "Ladda is a unified investment platform that lets retail investors hold stocks, fixed income, mutual funds, and savings products in a single account. The team had product-market fit but were losing engaged users at the second-investment moment — people opened an account, made one purchase, and never returned.",
          "I joined to redesign the discovery and portfolio surfaces, with a brief to make the second investment feel as obvious and confident as the first.",
        ],
      },
      challenge: {
        paragraphs: [
          "Investing across asset classes is genuinely complicated, and the existing app reflected that complexity instead of softening it. Each asset type lived on its own screen, with its own language, its own performance chart, and its own way of showing returns. Users had no single mental model for what they owned.",
          "On top of that, the discover tab surfaced everything equally — a trending stock sat next to a long-duration bond fund with no context about which made sense for whom. New investors froze. Experienced ones bypassed the app entirely and went to spreadsheets.",
        ],
        highlight:
          "A great investment app makes a complicated decision feel like a simple one — without hiding what's actually happening.",
      },
      goals: [
        "Give every user one consistent view of their portfolio, regardless of asset mix.",
        "Make discovery feel personal — surface what's relevant to this user, this week.",
        "Lower the cognitive load of placing a second, third, and fourth investment.",
        "Maintain the trust signals serious investors expect: clear fees, real performance, no gamification.",
      ],
      team: [
        { role: "Senior Product Designer", name: "Kingsley Omin" },
        { role: "Head of Product", name: "Olamide Bello" },
        { role: "Engineering Manager", name: "Chinedu Okafor" },
        { role: "Data Scientist", name: "Aisha Yusuf" },
      ],
      research: {
        paragraphs: [
          "We ran a mixed-methods study: fifteen user interviews split across first-time and seasoned investors, a diary study with eight users over two weeks, and behavioural analysis of cohorts that had churned after their first transaction.",
          "The clearest insight came from the diary study: users were checking the app for a feeling — calm, curiosity, or urgency — far more often than to take an action. The product was treating every visit as transactional. It needed to support reflection too.",
        ],
      },
      userFlows: {
        paragraphs: [
          "The new portfolio flow consolidates all asset classes into a single, scannable overview, with drill-downs that reveal complexity only when wanted. The discover flow was rebuilt around three contextual entry points: 'Continue building', 'New for you', and 'Worth a look this week'.",
          "Placing an investment was reduced from seven steps to three on the most common path, with the safety checks moved into a single confirmation moment instead of being spread throughout the journey.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Wireframes focused on hierarchy first, visuals second. We tested three structurally different portfolio layouts before settling on the unified one — the alternatives kept reintroducing the per-asset-class fragmentation we were trying to remove.",
          "Each wireframe round was reviewed with the compliance team to make sure clarity didn't drift into overpromising. Fees, risk labels, and historical performance language were locked in before any high-fidelity work began.",
        ],
      },
      solution: {
        paragraphs: [
          "The redesigned Ladda opens to a single portfolio view that totals everything you own and shows how it's moved today, this month, and all-time. Asset-specific detail lives one tap away but never competes for the headline.",
          "Discover now feels personal — recommendations are framed around the user's existing portfolio and goals, with clear reasoning shown instead of hidden behind an algorithm. The investment flow is calmer, faster, and ends with a confirmation screen designed to reduce regret rather than celebrate the spend.",
        ],
      },
      outcome: {
        paragraphs: [
          "After launch, repeat investment rate within the first 30 days more than doubled, and weekly active sessions per user grew significantly without any change in marketing spend. Crucially, support contacts about 'how do I see my total portfolio' essentially disappeared.",
        ],
      },
      metrics: [
        { value: "2.3x", label: "30-day repeat investment rate" },
        { value: "+71%", label: "Weekly active sessions" },
      ],
      images: {
        research: laddaResearch,
        userFlow: laddaUserflow,
        wireframes: laddaWireframes,
        solution: laddaSolution,
      },
    },
    content: [
      {
        type: "paragraph",
        content: "Jewelry is where fashion gets personal.",
      },
      {
        type: "paragraph",
        content: "You can wear the same jeans and white tee every day, but swap the earrings and suddenly the whole look shifts. Statement jewelry does that—it's the punctuation mark that changes the sentence. A pair of bold earrings can make casual feel intentional, simple feel sophisticated, understated feel powerful.",
      },
      {
        type: "paragraph",
        content: "This shoot was for a Brooklyn-based jewelry designer who works with recycled gold and vintage findings. Safety pins reimagined as earrings. Paperclips transformed into necklaces. Everyday objects elevated into wearable art. The kind of pieces that make people ask: \"Where did you get those?\"",
      },
      {
        type: "paragraph",
        content: "Photographing jewelry is its own skill.",
      },
      {
        type: "paragraph",
        content: "You're working at a tiny scale—millimeters matter. The angle of light determines whether gold looks warm or cold, whether crystals sparkle or disappear. I shot these pieces macro-style, tight compositions that let you see every detail. The texture of the metal, the facets of the stones, the precise engineering of the clasps.",
      },
      {
        type: "paragraph",
        content: "We styled them on colored backgrounds—coral pink, dusty blue, soft sage. The colors had to complement the gold without competing. Each setup took twenty minutes to perfect. Move the earring two millimeters left. Adjust the light angle. Check the reflection. Shoot. Repeat.",
      },
      {
        type: "paragraph",
        content: "The best images are the simplest ones. A pair of earrings on a pink surface. Clean, direct, no tricks. When the product is beautiful, your job is to not mess it up. Get the lighting right, nail the focus, step back.",
      },
      {
        type: "paragraph",
        content: "Fashion is often about the big statement—the dress, the coat, the shoes. But accessories are where personal style lives. They're the details people remember, the pieces you keep for years, the items that survive trend cycles because they were never trendy to begin with.",
      },
      {
        type: "paragraph",
        content: "The designer told me she makes each piece by hand in her studio in Greenpoint. Small batches, careful work, nothing mass-produced. That care shows in the final product. And hopefully, in the photographs too.",
      },
      {
        type: "paragraph",
        content: "Good jewelry doesn't need much. Just light, attention, and respect for the craft that made it.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Stories Unbound",
        description: "Narrative fashion photography that tells compelling visual stories.",
        image: storiesUnboundHero,
        tag: "Editorial",
        slug: "stories-unbound",
      },
    ],
  },
  "desert-dreams": {
    slug: "desert-dreams",
    title: "Reimagining the  mobile app experience to improve usability.",
    subtitle: "The Power of Color",
    publishDate: "PRESTMIT — MOBILE APP REDESIGN",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: desertDreamsHero,
    readTime: "6 min",
    viewCount: "1.8k",
    shareCount: 64,
    caseStudy: {
      client: "Prestmit",
      role: "Product Designer",
      year: "2023",
      duration: "8 weeks",
      introduction: {
        paragraphs: [
          "Prestmit is one of West Africa's most-used platforms for trading gift cards, cryptocurrency, and bill payments. The mobile app handled millions of transactions a year, but its UX had grown by accretion — every new product line had been bolted onto the home screen, and the experience felt heavier with each release.",
          "I led a ground-up redesign of the mobile app, prioritising clarity, trust, and speed for users who are often transacting in moments of real financial pressure.",
        ],
      },
      challenge: {
        paragraphs: [
          "User reviews were honest about the problems: a confusing home screen, unclear rates before submission, and a trade flow that asked for too much information too early. New users abandoned their first trade nearly half the time.",
          "Internally, the team also needed a flexible architecture — Prestmit launches new card types and crypto pairs constantly, and the old design couldn't accommodate a new product without an emergency redesign each time.",
        ],
        highlight:
          "Trust isn't a colour or a copy line. It's earned in the seconds between submitting a trade and seeing it confirmed.",
      },
      goals: [
        "Redesign the home and trade flows around the user's primary intent: 'I want to trade this for that, now.'",
        "Show real, current rates upfront — not after the user has invested effort.",
        "Cut steps in the gift card and crypto trade flows by at least 40%.",
        "Build a modular interface that can absorb new products without redesign.",
      ],
      team: [
        { role: "Product Designer", name: "Kingsley Omin" },
        { role: "Product Lead", name: "Emeka Nwosu" },
        { role: "Mobile Engineering Lead", name: "Adaeze Iwu" },
        { role: "Customer Success Lead", name: "Bisi Adeyemi" },
      ],
      research: {
        paragraphs: [
          "We started with a heuristic audit of the existing app, then ran ten remote user sessions with active traders across Nigeria, Ghana, and Kenya. App store reviews from the previous twelve months were coded into a thematic map of complaints.",
          "Three themes dominated: rate visibility, trade speed, and the anxiety of uploading a card image and not knowing what happens next. The redesign was scoped around solving those three problems before anything else.",
        ],
      },
      userFlows: {
        paragraphs: [
          "We mapped the existing trade flow next to the proposed one and found we could remove four screens entirely without losing any required information — most of them existed only because of historical UI choices, not real user needs.",
          "The new flow puts the rate, the amount, and the payout method on a single screen so users can see the entire deal before committing. Status updates after submission were redesigned as a clear, narrated timeline instead of a silent loading state.",
        ],
      },
      wireframes: {
        paragraphs: [
          "We wireframed the new home screen as a configurable grid of intents — 'Sell gift card', 'Sell crypto', 'Pay a bill', 'Buy data' — that the team can reorder as new products launch. Engineering signed off on the modular structure before high-fidelity began.",
          "Two rounds of unmoderated testing on UserTesting validated the new trade flow with first-time users completing a trade in under 90 seconds.",
        ],
      },
      solution: {
        paragraphs: [
          "The new Prestmit app opens to a calm, intent-led home screen, with live rates surfaced at the top for the user's most-used products. The trade flow is three screens: choose what you're trading, confirm the rate, see it complete.",
          "Trust signals are quiet but ever-present — verified rates, transaction status timeline, support reachable from any screen. The visual language was rebuilt around legibility on the lower-end Android devices most of Prestmit's users carry.",
        ],
      },
      outcome: {
        paragraphs: [
          "Six weeks after rollout, first-trade completion rose dramatically, average trade time fell, and the app's store rating climbed to its highest point ever. The modular home screen has since absorbed three new product lines without a single design change.",
        ],
      },
      metrics: [
        { value: "+62%", label: "First-trade completion" },
        { value: "−44%", label: "Average trade time" },
      ],
      images: {
        research: prestmitResearch,
        userFlow: prestmitUserflow,
        wireframes: prestmitWireframes,
        solution: prestmitSolution,
      },
    },
    content: [
      {
        type: "paragraph",
        content: "A bold lip changes everything.",
      },
      {
        type: "paragraph",
        content: "I shot this campaign for an indie beauty brand launching their spring collection—twelve new lip colors ranging from subtle nudes to statement brights. The creative director wanted something different from the usual beauty photography. No lips on models, no before-and-after comparisons, no aspirational lifestyle shots.",
      },
      {
        type: "paragraph",
        content: "Just the product as art.",
      },
      {
        type: "paragraph",
        content: "We shot each lipstick as a pure color study. Apply the product to white paper, photograph the swatches macro-style, let the pigment speak for itself. Orange-red became the hero shade—vibrant, confident, impossible to ignore. The kind of color that demands attention.",
      },
      {
        type: "paragraph",
        content: "Photographing makeup is technical work. The lighting has to be perfect or the color shifts. Too warm and orange looks red. Too cool and it looks brown. I used daylight-balanced strobes and shot tethered, checking each frame on a calibrated monitor to ensure color accuracy.",
      },
      {
        type: "paragraph",
        content: "The texture matters too.",
      },
      {
        type: "paragraph",
        content: "Some lipsticks are creamy, some matte, some have shimmer. You can see all of that in macro photography—the way pigment sits on paper, how light interacts with different finishes, whether the coverage is opaque or buildable. These details matter to people who care about makeup. They wanted to see exactly what they're buying.",
      },
      {
        type: "paragraph",
        content: "We shot all twelve shades in one day. Each color got the same treatment—clean white background, direct overhead lighting, tight composition. The repetition created a visual system, a language. When the brand posted the images on Instagram, people started guessing shades based on the swatches alone.",
      },
      {
        type: "paragraph",
        content: "That orange-red became their bestseller. Not because of clever marketing or influencer partnerships, but because the photograph showed exactly what it was—bold, beautiful, unapologetic color in a tube. Sometimes the best campaign is just honest product photography.",
      },
      {
        type: "paragraph",
        content: "Beauty doesn't need to be complicated. Sometimes it's just showing people exactly what they're getting.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "vintage-highway": {
    slug: "vintage-highway",
    title: "Helping businesses send and manage SMS easily at scale.\n\n\n",
    subtitle: "From Streets to Status",
    publishDate: "LETSHEGO — SMS API HUB",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: vintageHighwayHero,
    readTime: "7 min",
    viewCount: "3.1k",
    shareCount: 95,
    caseStudy: {
      client: "Letshego",
      role: "Product Designer",
      year: "2024",
      duration: "9 weeks",
      introduction: {
        paragraphs: [
          "Letshego's SMS API Hub is a B2B platform that lets businesses send transactional and marketing SMS at scale across multiple African markets. The product worked well technically, but the dashboard had been built primarily for engineers — operations and marketing users couldn't get to the information they needed without help from a developer.",
          "The brief was to redesign the hub for the people who actually run SMS campaigns day to day: ops managers, marketers, and customer success teams.",
        ],
      },
      challenge: {
        paragraphs: [
          "The existing dashboard exposed every API field as a UI control. Sending a campaign required understanding sender IDs, throttling rates, and DLR codes — concepts that meant nothing to the marketing managers who were the actual senders. Most teams worked around the dashboard by emailing requests to their developers.",
          "Reporting was even harder. Delivery, failure, and engagement data lived in three separate exports. Composing a single weekly report meant joining CSVs by hand. The team needed a dashboard that respected non-engineers without removing the depth that engineers depended on.",
        ],
        highlight:
          "The best B2B tools quietly handle complexity, exposing it only to the people who need it.",
      },
      goals: [
        "Let a non-technical user send a compliant campaign in under five minutes.",
        "Consolidate delivery, failure, and engagement reporting into one explorable view.",
        "Preserve full API-level control for technical users — without making it the default.",
        "Build role-aware navigation so ops, marketing, and dev teams each see the right entry points.",
      ],
      team: [
        { role: "Product Designer", name: "Kingsley Omin" },
        { role: "Senior PM", name: "Lerato Nkosi" },
        { role: "Engineering Lead", name: "Kabelo Moeng" },
        { role: "Customer Success Manager", name: "Thandi Dube" },
      ],
      research: {
        paragraphs: [
          "We interviewed twelve customer accounts across banking, retail, and logistics, speaking to both the marketing/ops users and the developers who supported them. Shadowing sessions revealed how often developers were pulled into routine campaign sends — sometimes daily.",
          "We also ran a competitive teardown of five SMS platforms, focusing on how they balanced approachability with developer depth. The strongest patterns went into the design principles for the redesign.",
        ],
      },
      userFlows: {
        paragraphs: [
          "We designed two parallel flows for sending a campaign: a guided builder for non-technical users and an advanced editor for engineers. Both produce the same underlying API call, so a marketer's draft can be reviewed or refined by a developer without rebuilding.",
          "Reporting was rebuilt around a single explore view with saved filters, replacing the three-export workflow. Scheduled report subscriptions removed another recurring manual task entirely.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Wireframes for the campaign builder were tested with six marketing users across three customer accounts. Early versions still leaked technical jargon; the third iteration replaced that language with plain task-led copy and tested noticeably better.",
          "The advanced editor wireframes were validated with developers, who confirmed they retained access to every parameter they used in the previous UI.",
        ],
      },
      solution: {
        paragraphs: [
          "The new SMS API Hub opens to a role-aware dashboard. Marketing users see a campaign builder, recent sends, and a clean reporting summary. Developers see API keys, logs, and webhook configuration as their primary surface.",
          "Reporting is one explorable view: filter by campaign, country, sender, or time, save the view, and optionally schedule it as an email. The dashboard preserves every advanced control behind progressive disclosure, so power users lose nothing.",
        ],
      },
      outcome: {
        paragraphs: [
          "Customer accounts reported a sharp drop in developer-assisted campaign requests within the first month. Time-to-first-campaign for new customer ops users fell from over an hour to under ten minutes, and weekly reporting time was cut by more than half across pilot accounts.",
        ],
      },
      metrics: [
        { value: "−68%", label: "Dev-assisted send requests" },
        { value: "−85%", label: "Time-to-first-campaign" },
      ],
      images: {
        research: letshegoResearch,
        userFlow: letshegoUserflow,
        wireframes: letshegoWireframes,
        solution: letshegoSolution,
      },
    },
    content: [
      {
        type: "paragraph",
        content: "Streetwear became luxury, and nobody noticed the shift happening.",
      },
      {
        type: "paragraph",
        content: "One day Supreme was a small skate shop on Lafayette Street. The next, it was selling teddy fleece jackets for $500 and people were lining up around the block every Thursday morning. Not because the quality suddenly changed, but because the story did. Streetwear stopped being about utility and started being about status.",
      },
      {
        type: "paragraph",
        content: "I shot this editorial exploring that transformation.",
      },
      {
        type: "paragraph",
        content: "The brief from the magazine was simple: document luxury streetwear as if it were haute couture. Photograph Supreme and Palace and Stüssy the way you'd shoot Dior or Prada. Treat hoodies and box logos with the same reverence traditionally reserved for evening gowns.",
      },
      {
        type: "paragraph",
        content: "We worked with natural light against solid color backgrounds—warm golds, deep blacks, vibrant primaries. No elaborate sets, no urban backdrops, no obvious street style signifiers. Just the pieces themselves, isolated and elevated. A black fleece jacket becomes sculptural when you light it right.",
      },
      {
        type: "paragraph",
        content: "The model wore Supreme, Carhartt WIP, vintage Nike. Classic pieces from the streetwear canon. But we shot them with fashion photography techniques—dramatic lighting, carefully considered composition, attention to fabric texture and garment construction. The baseball cap got the same photographic treatment as a Philip Treacy fascinator.",
      },
      {
        type: "paragraph",
        content: "Some people thought we were mocking streetwear. We weren't.",
      },
      {
        type: "paragraph",
        content: "The point was showing that these clothes deserve serious photographic attention. Streetwear has its own design language, its own cultural significance, its own relationship to identity and community. It's not fashion's scrappy younger sibling anymore. It's fashion, period.",
      },
      {
        type: "paragraph",
        content: "When the editorial ran, the responses split exactly as expected. Traditional fashion people appreciated the aesthetic approach. Streetwear heads felt we'd sanitized something that should stay raw. Both reactions made sense. The tension between those worlds is the whole story.",
      },
      {
        type: "paragraph",
        content: "Luxury streetwear exists in that uncomfortable space between two cultures. Maybe that's what makes it interesting to photograph.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
    ],
  },
  "lavender-fields": {
    slug: "lavender-fields",
    title: "Connecting car owners with reliable drivers . \n",
    subtitle: "Elevated Menswear Accessories",
    publishDate: "DRYVA — DRIVER MARKETPLACE",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: lavenderFieldsHero,
    readTime: "5 min",
    viewCount: "2.2k",
    shareCount: 71,
    caseStudy: {
      client: "Dryva",
      role: "Product Designer",
      year: "2024",
      duration: "11 weeks",
      introduction: {
        paragraphs: [
          "Dryva is a marketplace that connects car owners with vetted, professional drivers — for daily commutes, long trips, or full-time hires. The product launched on demand from a clear early-adopter base, but the matching experience hadn't been designed end-to-end. Bookings were happening, but trust was leaking at every step.",
          "I led the redesign of both sides of the marketplace: the owner app for booking drivers and the driver app for managing trips and earnings.",
        ],
      },
      challenge: {
        paragraphs: [
          "Car owners didn't have enough information to confidently choose a driver. Profiles were sparse, ratings were inconsistently displayed, and pricing felt opaque. Many bookings were being made and then cancelled within minutes once the owner saw the final fare.",
          "On the driver side, the app was a simple job list with no clear earnings view, no trip history, and no way to manage availability. Top-rated drivers were leaving the platform, and the matching algorithm was favouring availability over quality, accelerating the spiral.",
        ],
        highlight:
          "A two-sided marketplace stands or falls on whether both sides feel respected by the design.",
      },
      goals: [
        "Give car owners enough information to choose a driver in under two minutes, with confidence.",
        "Make pricing transparent before the booking commitment, not after.",
        "Build a driver experience that surfaces earnings, ratings, and availability as a coherent dashboard.",
        "Improve the quality of matches by giving both sides better signals to act on.",
      ],
      team: [
        { role: "Product Designer", name: "Kingsley Omin" },
        { role: "Co-founder & CEO", name: "Damilola Ade" },
        { role: "Mobile Engineering Lead", name: "Folake Adekunle" },
        { role: "Operations Lead", name: "Henry Obi" },
      ],
      research: {
        paragraphs: [
          "We ran parallel research streams on both sides of the marketplace: nine interviews with car owners (a mix of first-time and repeat bookers) and seven interviews with active drivers across full-time and part-time tiers.",
          "The strongest insight: both sides wanted the same thing — predictability. Owners wanted predictable pricing and reliable drivers. Drivers wanted predictable income and respectful clients. Designing for predictability became the project's organising principle.",
        ],
      },
      userFlows: {
        paragraphs: [
          "The owner booking flow was rebuilt to surface vetted profiles, full pricing breakdown, and trip details on a single screen, with the booking action only enabled once everything is visible. Cancellation, rebooking, and rating flows were redesigned to feel humane on both sides.",
          "The driver flow now centres on a daily dashboard: today's trips, this week's earnings, current rating, and availability toggles, all in a single scannable view.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Wireframes were tested with five owners and five drivers per round, across three rounds. Iteration on the driver dashboard was particularly fast — small changes to the earnings card noticeably affected how confident drivers felt about the platform.",
          "The matching logic was redesigned in parallel with the UI, so the screens and the algorithm shipped as one coherent change rather than a UX retrofit on a legacy system.",
        ],
      },
      solution: {
        paragraphs: [
          "The redesigned Dryva owner app makes choosing a driver feel like choosing from a curated set rather than scrolling a directory. Profiles, pricing, and trip details are all visible before commitment, and post-trip ratings are framed around specific qualities rather than star averages alone.",
          "The driver app is now a calm daily companion — earnings, schedule, and reputation are visible in one place, and availability can be adjusted without digging through settings. Both apps share a single design system that keeps the brand coherent across the marketplace.",
        ],
      },
      outcome: {
        paragraphs: [
          "Booking-to-confirmation conversion rose substantially after launch, and post-booking cancellations fell by more than half. Driver retention measurably improved over the first quarter, with the highest-rated drivers staying on the platform longer than at any previous point.",
        ],
      },
      metrics: [
        { value: "+38%", label: "Booking conversion" },
        { value: "−56%", label: "Post-booking cancellations" },
      ],
      images: {
        research: dryvaResearch,
        userFlow: dryvaUserflow,
        wireframes: dryvaWireframes,
        solution: dryvaSolution,
      },
    },
    content: [
      {
        type: "paragraph",
        content: "Most men don't wear hats anymore.",
      },
      {
        type: "paragraph",
        content: "Somewhere between the 1960s and now, hats went from essential menswear to occasional accessory. You see them at the beach, on the golf course, maybe during winter. But that everyday hat—the one men used to wear to work, to dinner, to everywhere—disappeared from American life.",
      },
      {
        type: "paragraph",
        content: "This shoot was about bringing it back.",
      },
      {
        type: "paragraph",
        content: "We photographed a collection from a NYC hatmaker who crafts wide-brim felt hats by hand. Classic silhouettes, modern proportions. The kind of pieces that work with contemporary clothes but carry echoes of when everyone wore hats. Our model paired them with turtlenecks, blazers, casual knitwear—showing how a good hat elevates whatever you're already wearing.",
      },
      {
        type: "paragraph",
        content: "I shot against warm, simple backgrounds—golden yellows, burnt orange, amber tones that complemented the brown felt without competing. We kept everything clean. Profile shots that showed the hat's shape. Upward angles that created drama. Close-ups that revealed the texture of the felt and the precision of the stitching.",
      },
      {
        type: "paragraph",
        content: "The lighting was critical. Too harsh and the hat's brim creates ugly shadows across the face. Too soft and you lose the material's texture. We used golden hour light filtered through diffusion, creating warmth without harshness. The model's profile caught the light perfectly—strong jawline, contemplative upward gaze, hat brim creating clean geometry.",
      },
      {
        type: "paragraph",
        content: "That upward-looking shot became the campaign's hero image.",
      },
      {
        type: "paragraph",
        content: "There's something aspirational about a well-made hat. It suggests intention, care about presentation, respect for the ritual of getting dressed. In an era of athleisure and casual everything, a hat is a statement that says you're making an effort. Not for others necessarily, but for yourself.",
      },
      {
        type: "paragraph",
        content: "The hatmaker told me each piece takes two days to complete. Steaming, shaping, finishing. All done by hand in a small workshop in the Garment District. When you photograph something made with that much care, you owe it similar attention.",
      },
      {
        type: "paragraph",
        content: "Maybe men will wear hats again. Maybe they won't. Either way, documenting well-made things feels like worthwhile work.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Coastal Classic",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
    ],
  },
  "coastal-classic": {
    slug: "coastal-classic",
    title: "Natural Glow",
    subtitle: "Beauty Without Filters",
    publishDate: "March 5, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: coastalClassicHero,
    readTime: "6 min",
    viewCount: "1.9k",
    shareCount: 58,
    content: [
      {
        type: "paragraph",
        content: "Beauty photography lies more than any other kind.",
      },
      {
        type: "paragraph",
        content: "The retouching, the filters, the lighting tricks that erase texture and pores and anything that makes a face look human. I've done it all. Smoothed skin until it looks like plastic, brightened eyes until they glow unnaturally, perfected features until the person disappears. It pays well. It also feels increasingly wrong.",
      },
      {
        type: "paragraph",
        content: "This campaign was different.",
      },
      {
        type: "paragraph",
        content: "A skincare brand approached me wanting something honest—beauty photography that showed real skin, natural light, minimal retouching. Just clean beauty photography that celebrated how people actually look, not some impossible airbrushed fantasy. It sounded simple. It wasn't.",
      },
      {
        type: "paragraph",
        content: "When you strip away all the usual tricks, you're left with pure technique. The lighting has to be perfect—soft enough to be flattering but true enough to show texture. I used large diffused natural light from a north-facing window. No fill, no reflectors, just beautiful soft directional light that wrapped around the model's face.",
      },
      {
        type: "paragraph",
        content: "We shot tight close-ups. Direct eye contact with camera. Minimal makeup—just skincare and a touch of neutral tone. The model's skin looked like skin. Pores visible, natural texture preserved, real human beauty instead of digital perfection.",
      },
      {
        type: "paragraph",
        content: "In post-production, I did almost nothing. Color correction, minor blemish cleanup, that's it. No liquifying, no frequency separation, no skin smoothing. The brief was clear: show what good skincare looks like on real skin. That means keeping the reality.",
      },
      {
        type: "paragraph",
        content: "When the campaign launched, the response surprised everyone. People were starved for honest beauty imagery. They'd been fed so much artifice for so long that seeing actual human skin felt revolutionary. The brand's Instagram comments were full of people saying: \"Finally, beauty that looks achievable.\"",
      },
      {
        type: "paragraph",
        content: "That's the power of showing truth. In a world of filters and Face Tune, natural beauty becomes radical.",
      },
      {
        type: "paragraph",
        content: "I've shot beauty campaigns both ways now. The heavily retouched fantasy and the honest reality. Only one feels like it might age well.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Lavender Fields",
        description: "Romance and elegance captured in the purple hues of Provence.",
        image: lavenderFieldsHero,
        tag: "Editorial",
        slug: "lavender-fields",
      },
    ],
  },
  "stories-unbound": {
    slug: "stories-unbound",
    title: "Effortless Style",
    subtitle: "The Art of Looking Casual",
    publishDate: "March 1, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: storiesUnboundHero,
    readTime: "9 min",
    viewCount: "3.5k",
    shareCount: 102,
    content: [
      {
        type: "paragraph",
        content: "The best style looks like no effort at all.",
      },
      {
        type: "paragraph",
        content: "An oversized tee, good sneakers, well-fitted pants. Nothing complicated, nothing trying too hard, just clean simple pieces worn with confidence. That's the foundation of street style—fashion that doesn't announce itself but still says something about who you are.",
      },
      {
        type: "paragraph",
        content: "I shot this series around Bushwick on a Saturday afternoon.",
      },
      {
        type: "paragraph",
        content: "No studio, no elaborate lighting setups, just natural daylight and interesting walls. The model wore basics—oversized sage green tee, black pants, white sneakers. The kind of outfit you'd see on any Brooklyn street corner. But paired with good proportions and shot well, basics become something more.",
      },
      {
        type: "paragraph",
        content: "We walked maybe ten blocks, shooting against weathered walls, aged paint, urban texture. The locations weren't Instagram-perfect. They were real—peeling paint, faded colors, the authentic decay of a city constantly remaking itself. That realness matters. Street style photography shouldn't look too polished.",
      },
      {
        type: "paragraph",
        content: "The key to photographing casual clothes is respecting the casualness.",
      },
      {
        type: "paragraph",
        content: "Don't over-style, don't over-light, don't force drama where none exists. The model walked, I followed, we stopped when something felt right. Sometimes the best street style shots come from just paying attention to how people naturally move through space.",
      },
      {
        type: "paragraph",
        content: "White sneakers are having their tenth comeback in as many years. They never really leave—they just cycle between mainstream and cool and back again. Right now they're everywhere, which somehow makes them more invisible, which somehow makes them more essential. The uniform of people who know style isn't about standing out.",
      },
      {
        type: "paragraph",
        content: "We wrapped after two hours and maybe 150 frames. No costume changes, no hair and makeup team, no assistants hauling equipment. Just a camera, good light, and someone who knew how to wear simple clothes well.",
      },
      {
        type: "paragraph",
        content: "That's the whole game. Make the everyday look intentional. Make the simple look considered. Make the effortless reveal the effort it actually took.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "circular-horizons": {
    slug: "circular-horizons",
    title: "Fashion as Art",
    subtitle: "When Style Becomes Expression",
    publishDate: "February 28, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: circularHorizonsHero,
    readTime: "7 min",
    viewCount: "2.7k",
    shareCount: 83,
    content: [
      {
        type: "paragraph",
        content: "Fashion stops being fashion when it becomes art.",
      },
      {
        type: "paragraph",
        content: "Or maybe it becomes more fashion. The line between the two has always been blurry—designers calling their work wearable sculpture, photographers shooting clothes like they're documenting performance art, models moving like dancers instead of mannequins. Fashion wants to be art. Art wants to be seen.",
      },
      {
        type: "paragraph",
        content: "This editorial explored that intersection.",
      },
      {
        type: "paragraph",
        content: "The brief was deliberately vague: create images where you can't tell if you're looking at fashion photography or fine art. We shot in black and white to strip away commercial associations. No color, no obvious styling, just form, shadow, movement. The model wore minimal pieces—enough to suggest fashion without making it the subject.",
      },
      {
        type: "paragraph",
        content: "We worked in a dance studio in SoHo. White walls, hardwood floors, huge windows flooding the space with natural light. The model had a dance background, which meant she understood how to use her body expressively. Arms raised, back arched, movements that felt improvised but looked intentional.",
      },
      {
        type: "paragraph",
        content: "I shot without direction, just followed the movement.",
      },
      {
        type: "paragraph",
        content: "Sometimes she'd hold a pose for three seconds and I'd fire a burst. Sometimes I'd catch her mid-motion, arms reaching upward, body creating shapes I couldn't have choreographed if I tried. The best images came from those unplanned moments—the spaces between poses where intention met instinct.",
      },
      {
        type: "paragraph",
        content: "Black and white changes how people see fashion. Without color to distract, you notice composition, form, the quality of light on skin. The images felt sculptural, almost like documentation of a performance piece. Which was exactly the point.",
      },
      {
        type: "paragraph",
        content: "When we showed the images to the magazine, the photo editor asked: \"Is this fashion or fine art?\" I didn't have an answer. Maybe that's okay. Maybe the best work exists in that uncertain space where categories break down and all that remains is an image that makes you stop and look.",
      },
      {
        type: "paragraph",
        content: "Fashion as art. Art as fashion. At a certain point, the distinction stops mattering.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "retro-revival": {
    slug: "retro-revival",
    title: "The Leather Jacket",
    subtitle: "Timeless Rebellion",
    publishDate: "February 24, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: retroRevivalHero,
    readTime: "8 min",
    viewCount: "4.1k",
    shareCount: 118,
    content: [
      {
        type: "paragraph",
        content: "Every wardrobe needs one perfect leather jacket.",
      },
      {
        type: "paragraph",
        content: "Not the trendy one, not the cheap one from a fast fashion chain, but the real thing—quality leather that gets better with age, classic moto styling that works with everything, the kind of jacket you'll still be wearing in twenty years. It's an investment piece, sure, but also a statement about how you want to move through the world. A little bit tough, a little bit refined, entirely timeless.",
      },
      {
        type: "paragraph",
        content: "I shot this editorial for a heritage leather goods brand out of New Jersey. They've been making motorcycle jackets since the 1950s—the same factory, the same patterns, the same commitment to doing one thing exceptionally well. The pieces look identical to what they made seventy years ago because they haven't needed to change the design.",
      },
      {
        type: "paragraph",
        content: "We photographed two people in matching black leather jackets.",
      },
      {
        type: "paragraph",
        content: "The concept was simple: show how the same piece looks on different people. One model with loc'd hair pulled up, hoop earrings catching the light. The other with a voluminous natural afro, wrists stacked with bracelets and a vintage watch. Both in identical jackets, both making them entirely their own.",
      },
      {
        type: "paragraph",
        content: "We shot against a weathered wall in Williamsburg—terracotta red paint fading to cream. No elaborate styling, no busy locations, just two people and two jackets. The intimacy between the subjects created the story. They stood close, facing each other, the jackets almost touching. Fashion photography, but also a portrait of connection.",
      },
      {
        type: "paragraph",
        content: "Leather photographs beautifully in natural light. The material has texture, weight, character. It catches light differently than fabric—harder edges, sharper shadows, a kind of sculptural quality. I shot close, focusing on details. The stitching along shoulders. The hardware. The way leather wrinkles and creases from being worn.",
      },
      {
        type: "paragraph",
        content: "The brand wanted to show that their jackets work for everyone. Not in a vague inclusive marketing way, but literally—the same design, worn by different people, creating different stories. Same jacket, different style, both completely valid. That's what good design does. It adapts to whoever's wearing it.",
      },
      {
        type: "paragraph",
        content: "When people ask me about essential wardrobe pieces, leather jacket is always in my top three. Not because it's trendy—it cycles in and out of fashion constantly—but because a good one transcends trends entirely. It's the rare piece that makes everything else you own look better.",
      },
      {
        type: "paragraph",
        content: "Timeless, versatile, cool without trying. That's the leather jacket promise. And after shooting maybe a hundred of them over the years, I still believe it.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Vintage Highway",
        description: "A nostalgic journey through classic American style and the open road.",
        image: vintageHighwayHero,
        tag: "Travel",
        slug: "vintage-highway",
      },
    ],
  },
  "golden-spheres": {
    slug: "golden-spheres",
    title: "Neon Dreams",
    subtitle: "Fashion in Digital Spaces",
    publishDate: "February 20, 2024",
    author: {
      name: "James Carter",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: goldenSpheresHero,
    readTime: "6 min",
    viewCount: "2.9k",
    shareCount: 91,
    content: [
      {
        type: "paragraph",
        content: "Fashion is increasingly digital, and physical space is becoming optional.",
      },
      {
        type: "paragraph",
        content: "Virtual runways, AI-generated models, NFT clothing that exists only on screens. The industry is experimenting with what fashion means when it's untethered from fabric and bodies. I'm interested in the opposite question: what happens when you bring digital aesthetics into physical space? When neon and pixels and screen-glow become tangible environments you can shoot in?",
      },
      {
        type: "paragraph",
        content: "We found an immersive art installation in Chelsea—vertical bars of neon light in pink, coral, red gradients. The kind of installation people visit to take selfies. I wanted to shoot fashion there before it closed, to capture that intersection of digital aesthetic and human presence.",
      },
      {
        type: "paragraph",
        content: "The lighting was already perfect.",
      },
      {
        type: "paragraph",
        content: "Vibrant pink neon backlighting the model, creating pure silhouette. No additional lights needed, no strobes, no reflectors. Just the installation itself providing all the atmosphere. The model stood centered in the neon field, sometimes still, sometimes moving slowly. Each frame felt futuristic, almost sci-fi.",
      },
      {
        type: "paragraph",
        content: "Silhouette photography is deceptive. You're hiding details, reducing the subject to pure shape. But that reduction can be powerful. Without facial features or clothing details to distract, you see posture, gesture, the outline of a human form against pure color. It becomes about presence rather than specifics.",
      },
      {
        type: "paragraph",
        content: "We shot for maybe an hour, working quickly before the installation closed for the evening. The model wore simple black clothes—not because they mattered visually (they'd photograph as silhouette anyway) but because black absorbs light best. Against all that neon pink, the silhouette stayed crisp and defined.",
      },
      {
        type: "paragraph",
        content: "When I showed the images to the magazine, they weren't sure how to categorize them. Fashion? Art photography? Documentation of an installation? Maybe all three. Maybe none. The digital generation doesn't care much about those old boundaries anyway.",
      },
      {
        type: "paragraph",
        content: "Fashion photography is evolving. The tools change, the aesthetics shift, the venues expand beyond studios and streets. But the core remains—documenting how people present themselves, how they use clothing and environment and light to create meaning. Whether that happens in physical space or digital doesn't change the fundamental work.",
      },
      {
        type: "paragraph",
        content: "Neon, pixels, screens, glow. This is what fashion spaces look like now. I'm just trying to document it honestly.",
      },
    ],
    relatedCaseStudies: [
      {
        title: "Circular Horizons",
        description: "Geometric patterns and modern design.",
        image: circularHorizonsHero,
        tag: "Editorial",
        slug: "circular-horizons",
      },
    ],
  },
};

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudiesData[slug];
};

export const getAllArticleSlugs = (): string[] => {
  return Object.keys(caseStudiesData);
};
