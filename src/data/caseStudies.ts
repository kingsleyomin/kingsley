// Local images from public/images directory
const authorAvatar = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
import aboutSofiaHero from "@/assets/first-case-study-hero.png";
import editorialEleganceHero from "@/assets/ladda-hero.png";
import desertDreamsHero from "@/assets/prestmit-hero.png";
import vintageHighwayHero from "@/assets/letshego-hero.png";
import lavenderFieldsHero from "@/assets/dryva-hero.png";
const coastalClassicHero = "/images/pexels-adrienne-andersen-1174503-2661255.jpg";

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
  goalsIntro?: string;
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
  "about-namnso": {
    slug: "about-namnso",
    title: "Enabling smooth and reliable payments across multiple channels. ",
    subtitle: "A Personal Introduction",
    publishDate: "ZEST PAYMENT GATEWAY",
    author: {
      name: "Namnso Ukpanah",
      title: "Product Designer",
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
        { role: "Lead Product Designer", name: "Namnso Ukpanah" },
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
      name: "Namnso Ukpanah",
      title: "Product Designer",
      avatar: authorAvatar,
    },
    heroImage: editorialEleganceHero,
    readTime: "8 min",
    viewCount: "2.4k",
    shareCount: 89,
    caseStudy: {
      client: "Ladda",
      role: "Product Designer",
      year: "2020",
      duration: "8 weeks",
      introduction: {
        paragraphs: [
          "Ladda is a digital investment platform developed by Money Africa that enables users to invest in mutual funds, trade local and international stocks, save towards financial goals, and purchase gift cards — all from a single platform.",
          "The vision was simple: make investing accessible, understandable, and achievable for everyday Africans, regardless of their financial background or investment experience.",
        ],
      },
      challenge: {
        paragraphs: [
          "For many Nigerians, investing has traditionally been associated with complexity, exclusivity, and high barriers to entry. Processes often required brokers, extensive paperwork, limited transparency, and significant capital commitments.",
          "While fintech products were beginning to reshape access to financial services, many investment platforms still felt intimidating to first-time investors — with complex onboarding, fragmented experiences across asset classes, and a persistent lack of trust and transparency.",
        ],
        highlight:
          "The opportunity was to create a unified investment experience that simplified wealth creation without oversimplifying financial decisions.",
      },
      goals: [
        "Simplify investment onboarding so first-time investors can confidently complete account setup and make their first investment.",
        "Make investing feel approachable by transforming complex financial concepts into intuitive user experiences.",
        "Create a unified wealth platform where users manage stocks, mutual funds, savings, and gift cards in one ecosystem.",
        "Design for scale with a flexible system capable of supporting future investment products and business growth.",
      ],
      goalsIntro: "As a new product, the strategy was built around four primary objectives — each tied to a clear user need and business outcome.",
      team: [
        { role: "Product Designer", name: "Namnso Ukpanah" },
        { role: "Product Manager", name: "Adaorah" },
        { role: "Engineering Lead", name: "Celestine. O" },
        { role: "Mobile Engineer", name: "Nsikak Thompson" },
      ],
      research: {
        paragraphs: [
          "To validate assumptions and understand user needs, I conducted remote research through user interviews and surveys — exploring existing investment behaviours, preferred platforms, frustrations, trust concerns, and motivations for investing.",
          "Four insights stood out: investing felt intimidating and reserved for experts; existing platforms were overwhelming and full of jargon; simplicity built confidence and reduced cognitive load; and trust required clear visibility into where money went and how it performed.",
          "These insights became the foundational principles that shaped every part of the product experience.",
        ],
      },
      userFlows: {
        paragraphs: [
          "I mapped user flows to visualize every major interaction — from onboarding to portfolio management and investment execution.",
          "The exercise surfaced friction points, critical decision moments, opportunities for simplification, and the platform architecture required to support a unified, multi-asset experience.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Low-fidelity wireframes were developed to rapidly explore solutions and validate concepts with potential users.",
          "Multiple iterations refined the navigation structure, investment flows, information hierarchy, and portfolio visibility. Feedback from testing sessions directly informed design decisions before moving into high-fidelity designs.",
        ],
      },
      solution: {
        paragraphs: [
          "The final solution introduced a mobile-first investment platform that consolidated multiple financial products into a seamless experience — a streamlined onboarding flow designed to reduce anxiety and accelerate activation, and a unified dashboard that gave users a single source of truth for every investment.",
          "Investment journeys were broken into simple, understandable steps that reduced decision fatigue, while a shared design language ensured continuity across web and mobile. A scalable design system of reusable components enabled faster development and future product expansion.",
        ],
      },
      outcome: {
        paragraphs: [
          "The product successfully launched and gained early market traction — generating over $130,000 in transaction value within the first six months of beta, alongside positive reviews and a 4.0 rating on the Google Play Store, all delivered within an 8-week end-to-end design and delivery timeline.",
          "Ladda reinforced the importance of designing financial products around trust, clarity, and simplicity. The biggest lesson: successful fintech experiences are not built by exposing more functionality — they are built by making complex financial decisions feel understandable and achievable.",
        ],
      },
      metrics: [
        { value: "$130K+", label: "Transaction value in first 6 months" },
        { value: "4.0", label: "Google Play Store rating" },
        { value: "8 weeks", label: "Design to launch timeline" },
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
    relatedCaseStudies: [],
  },
  "desert-dreams": {
    slug: "desert-dreams",
    title: "Redesigning a high-volume fintech experience for speed, trust, and scale.",
    subtitle: "Product Designer",
    publishDate: "PRESTMIT — MOBILE APP REDESIGN",
    author: {
      name: "Namnso Ukpanah",
      title: "Product Designer",
      avatar: authorAvatar,
    },
    heroImage: desertDreamsHero,
    readTime: "8 weeks",
    viewCount: "1.8k",
    shareCount: 64,
    caseStudy: {
      client: "Prestmit",
      role: "Product Designer",
      year: "2023",
      duration: "8 weeks",
      introduction: {
        paragraphs: [
          "Prestmit is one of West Africa's leading digital trading platforms, enabling users to trade gift cards, cryptocurrencies, and pay bills from a single application.",
          "As the platform expanded and new services were introduced, the mobile experience became increasingly difficult to navigate. Features had been added over time without a unified information architecture, creating friction for both new and existing users.",
          "The goal of this project was to redesign the mobile experience from the ground up — making transactions faster, navigation clearer, and the platform scalable for future growth.",
        ],
      },
      challenge: {
        paragraphs: [
          "Prestmit processes thousands of transactions daily, often for users making time-sensitive financial decisions. However, the existing experience was creating unnecessary friction at critical moments in the user journey.",
          "User feedback, app store reviews, and internal product metrics surfaced recurring issues: a cluttered home screen that made product discovery difficult, inconsistent navigation and iconography, and information overload that increased cognitive effort. Users could not view live cryptocurrency rates before initiating a transaction, the trade flow asked for too much information too early, and nearly half of new users abandoned their first transaction before completion.",
          "The challenge was not simply to improve the interface — it was to rebuild user confidence and create a product architecture that could support the company's rapid expansion.",
        ],
        highlight:
          "Trust isn't built through branding alone. It's earned in the moments between initiating a transaction and receiving confirmation.",
      },
      goalsIntro:
        "The redesign was guided by four strategic objectives — each tied to a clear user need and business outcome.",
      goals: [
        "Improve product discoverability by redesigning the home screen to clearly communicate Prestmit's core services.",
        "Increase transaction transparency by surfacing real-time exchange rates and key information earlier in the journey.",
        "Streamline onboarding and transactions to improve activation, completion, and retention.",
        "Design for future growth with a modular interface capable of absorbing new products without major redesign.",
      ],
      team: [
        { role: "Product Designer", name: "Namnso Ukpanah" },
        { role: "Product Manager", name: "Elizabeth Ajao" },
        { role: "Product Lead", name: "Oluwatosin Adimula" },
        { role: "Mobile Engineering Lead", name: "Tobi A." },
      ],
      research: {
        paragraphs: [
          "To understand the root causes behind user frustration, we ran a comprehensive review of the existing experience — combining a heuristic evaluation of the mobile app, analysis of app store reviews from the previous twelve months, remote interviews with active traders across Nigeria and Ghana, and a review of existing user journeys and transaction flows.",
          "Four insights stood out: navigation was a major pain point, with users struggling to locate services and understand where to begin; visual hierarchy was weak, presenting too much information at once; users wanted more transparency, particularly around live cryptocurrency rates; and product categories felt scattered, making the platform appear more complex than it actually was.",
          "These findings helped us prioritise usability improvements over feature additions, and shaped the direction of the redesign.",
        ],
      },
      userFlows: {
        paragraphs: [
          "We reimagined the information architecture around three primary user intents — Gift Cards, Cryptocurrency, and Bill Payments — instead of presenting multiple independent entry points. This structure aligned with users' mental models and reduced decision fatigue.",
          "Mapping the existing transaction flow against a proposed future-state experience revealed unnecessary screens and redundant inputs that existed due to historical design decisions rather than user needs. Removing these friction points created a more direct path from onboarding to successful transaction completion.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Low and high-fidelity prototypes were tested internally and refined through feedback sessions, focusing on home screen usability, product discoverability, transaction speed, exchange rate visibility, and overall user confidence.",
          "Each iteration was reviewed with product and engineering to validate feasibility and ensure the modular structure could scale as Prestmit introduced new services.",
        ],
      },
      solution: {
        paragraphs: [
          "The redesigned Prestmit experience introduced a cleaner, more intuitive structure built around speed and clarity. A new intent-led home screen uses a card-based layout that immediately surfaces the platform's three primary services, simplifying decision-making and reducing visual clutter.",
          "Cryptocurrencies were consolidated into a unified category — users selecting 'Sell Cryptocurrency' can now view all supported assets in one place, creating a more scalable and discoverable experience. Exchange rates were surfaced earlier in the journey to improve confidence, and the transaction flow was streamlined to minimise unnecessary inputs.",
          "Underpinning all of this is a modular design system — a flexible component architecture that allows new products and services to be introduced without redesigning the home screen or navigation structure.",
        ],
      },
      outcome: {
        paragraphs: [
          "The redesign significantly improved both usability and business performance. The platform crossed 50,000+ downloads following the rollout and reached a 4.4 Play Store rating — the highest user satisfaction score the product had achieved at that time.",
          "First-time transaction completion rates increased, average transaction time dropped, product discoverability improved across key services, and navigation-related complaints fell. The modular architecture has since enabled the seamless addition of new product lines without redesigning the core experience.",
          "This project reinforced an important lesson about fintech design: users rarely evaluate a platform based on features alone — they evaluate it based on how confident and in control they feel while handling their money. By simplifying navigation, improving transparency, and restructuring the experience around user intent, we transformed a growing collection of features into a cohesive financial platform.",
        ],
      },
      metrics: [
        { value: "50K+", label: "Downloads" },
        { value: "4.4", label: "Play Store rating" },
        { value: "8 weeks", label: "Project timeline" },
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
    title: "SMS API Routing & Messaging Intelligence Hub",
    subtitle: "From Streets to Status",
    publishDate: "LETSHEGO — SMS API HUB",
    author: {
      name: "Namnso Ukpanah",
      title: "Product Designer",
      avatar: authorAvatar,
    },
    heroImage: vintageHighwayHero,
    readTime: "7 min",
    viewCount: "3.1k",
    shareCount: 95,
    caseStudy: {
      client: "Letshego",
      role: "Product Designer",
      year: "2022",
      duration: "4 weeks",
      introduction: {
        paragraphs: [
          "Letshego SMS Hub is a high-performance messaging infrastructure designed to intelligently route SMS traffic across multiple providers based on cost, reliability, and geographic performance.",
          "Instead of relying on a single SMS gateway, the system dynamically selects the most effective provider per region and time window, ensuring faster delivery rates, lower costs, and improved message reliability at scale.",
          "The platform was built to support enterprise-level messaging demands across Letshego's ecosystem of financial products, where timely SMS delivery directly impacts user trust, transaction confirmation, and service accessibility.",
        ],
      },
      challenge: {
        paragraphs: [
          "As Letshego's digital products expanded, SMS became a critical communication layer for authentication, transaction alerts, and customer engagement. However, the existing setup had major limitations: reliance on single or manually selected SMS providers, inconsistent delivery performance across countries, lack of visibility into message status and delivery outcomes, no centralized system for managing multiple SMS APIs, and limited ability to optimize cost vs reliability in real time.",
          "These issues resulted in delayed messages, failed notifications, and operational inefficiencies that directly affected customer experience and support workload. The challenge was to design a system that could intelligently manage SMS delivery across multiple providers while maintaining speed, reliability, and full operational visibility.",
        ],
        highlight:
          "The challenge was to design a system that could intelligently manage SMS delivery across multiple providers while maintaining speed, reliability, and full operational visibility.",
      },
      goals: [
        "Improve SMS Delivery Intelligence: enable automated routing of SMS traffic based on provider performance, cost efficiency, and geographic reliability.",
        "Provide Real-Time Visibility: give teams live insights into message status, delivery success, provider performance, and failure rates.",
        "Simplify Provider Onboarding: design a clear system for integrating and configuring multiple SMS API providers without technical ambiguity.",
        "Support High-Volume Scalability: ensure the system can handle large-scale SMS requests without degradation in performance or usability.",
      ],
      goalsIntro: "The design strategy was guided by four core objectives:",
      team: [
        { role: "Product Designer", name: "Namnso Ukpanah" },
        { role: "Senior Product Manager", name: "Olaide" },
        { role: "Engineering Lead", name: "Tolu" },
      ],
      research: {
        paragraphs: [
          "Since much of the technical groundwork had already been explored by the Letshego team, the design process began by synthesizing existing research and identifying usability gaps in the system architecture.",
          "Key inputs included internal product and engineering documentation, operational requirements for SMS routing logic, provider performance datasets, and system constraints for high-volume messaging. Core system requirements identified included the ability to dynamically select the cheapest and most reliable SMS provider per country, centralized logging of all SMS events, real-time system monitoring and failure tracking, and an admin interface for adding and configuring new SMS providers.",
          "The key insight was that the system was not just a messaging tool — it was a decision engine interface, and the challenge was making invisible routing logic visible, understandable, and controllable.",
        ],
      },
      userFlows: {
        paragraphs: [
          "We mapped the full lifecycle of an SMS: message request initiation, routing decision with provider selection logic, provider execution, delivery response, and logging and analytics. This helped identify where visibility and control were most critical.",
          "One of the key design exercises was translating backend concepts into user-friendly structures: providers became manageable modules, routing logic became a configurable rules engine, delivery logs became a searchable event timeline, and system health became real-time dashboard metrics.",
        ],
      },
      wireframes: {
        paragraphs: [
          "A major focus was designing the provider onboarding experience. We simplified what was originally a technical configuration flow into a guided process: add provider credentials, define regional coverage, set priority rules for cost, speed, and reliability, test connectivity, and activate the provider in the routing pool.",
          "This ensured non-technical users could safely configure complex integrations, and every wireframe was validated against both operational and engineering requirements before moving into high-fidelity design.",
        ],
      },
      solution: {
        paragraphs: [
          "The final design introduced a structured, modular SMS intelligence platform built around three core experiences. The Smart Routing Engine Interface visually represents how SMS messages are routed across providers based on performance rules and geographic conditions.",
          "The Real-Time Monitoring Dashboard provides a live view of SMS delivery status, provider performance comparison, failure rates and retry logs, and geographic success distribution — giving teams immediate operational awareness.",
          "The Provider Management System is a structured configuration interface that allows admins to add multiple SMS providers, configure routing rules per country, monitor provider health, and adjust prioritization strategies.",
        ],
      },
      outcome: {
        paragraphs: [
          "The redesigned SMS Hub enabled Letshego to transition from a fragmented SMS system into a centralized, intelligent messaging infrastructure.",
          "Product impact included improved reliability of SMS delivery across regions, reduced manual intervention in SMS routing decisions, increased operational visibility into messaging performance, scalable onboarding of new SMS providers without system redesign, and improved speed of diagnosing and resolving delivery failures.",
          "This project reinforced that the most complex systems are not defined by their backend logic — but by how clearly that logic is communicated to the people who depend on it. By designing for clarity, control, and system transparency, we transformed a fragmented messaging setup into a scalable enterprise-grade routing platform.",
        ],
      },
      metrics: [
        { value: "Real-time", label: "SMS routing & monitoring" },
        { value: "Multiple", label: "Providers integrated" },
        { value: "4 weeks", label: "Design timeline" },
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
    title: "On-Demand Driver Marketplace for Car Owners",
    subtitle: "Driver Marketplace",
    publishDate: "DRYVA — DRIVER MARKETPLACE",
    author: {
      name: "Namnso Ukpanah",
      title: "Product Designer",
      avatar: authorAvatar,
    },
    heroImage: lavenderFieldsHero,
    readTime: "6 min",
    viewCount: "2.2k",
    shareCount: 71,
    caseStudy: {
      client: "Dryva",
      role: "Product Designer",
      year: "2020",
      duration: "4 weeks",
      introduction: {
        paragraphs: [
          "Dryva is a mobility marketplace that connects verified professional drivers with car owners who prefer to be driven in their own vehicles. Unlike traditional ride-hailing platforms that serve users without cars, Dryva targets a different but often overlooked segment — car owners who occasionally or temporarily need professional drivers due to lifestyle demands, long commutes, or urban stress.",
          "The platform enables flexible driver hiring for daily trips, short-term engagements, or long-term arrangements, offering users convenience without requiring them to give up vehicle ownership or commit to full-time driver employment.",
          "As the Product Designer, I was responsible for defining the end-to-end experience of both riders (car owners) and drivers — from product discovery and UX research through interaction design, wireframing, prototyping, and mobile UI design.",
        ],
      },
      challenge: {
        paragraphs: [
          "In large urban cities like Lagos, transportation challenges go beyond access to vehicles. Many car owners still experience stressful driving conditions caused by traffic congestion, long daily commutes that reduce productivity and personal time, and fatigue from daily self-driving responsibilities.",
          "Existing ride-hailing services focus primarily on users without cars, leaving a significant gap for car owners who only need driving assistance occasionally. Full-time driver employment carries financial and operational burdens that many owners are unwilling to take on.",
        ],
        highlight:
          "How might we design a platform that allows car owners to easily hire trusted drivers on-demand or short-term — without the financial and operational burden of full-time employment?",
      },
      goals: [
        "Improve quality of life through flexible mobility — enable users to delegate driving tasks when needed, reducing daily stress and improving productivity.",
        "Enable fast and flexible driver hiring — design a seamless flow for discovering, booking, and managing drivers within minutes.",
        "Create a transparent driver marketplace — build trust through verified profiles, ratings, and clear availability visibility.",
        "Design a minimal, action-oriented experience — reduce complexity and ensure users can complete core actions with minimal steps.",
      ],
      team: [
        { role: "Product Designer", name: "Namnso Ukpanah" },
        { role: "Mobile Engineering Lead", name: "Folake Adekunle" },
        { role: "Operations Lead", name: "Henry Obi" },
      ],
      research: {
        paragraphs: [
          "We conducted qualitative research with working professionals who own private vehicles and frequently commute in high-traffic urban environments. Through one-on-one interviews, we explored their daily routines, pain points, and attitudes toward hiring drivers.",
          "Key questions focused on understanding their typical workday commute, self-driving frequency, daily driving challenges, how they currently handle fatigue or long-distance travel, and their openness to occasionally or temporarily hiring a driver.",
          "Four critical insights emerged from the research. First, driving is mentally and physically exhausting — users reported significant fatigue from long commutes and stressful traffic conditions. Second, full-time drivers are not always practical — many users did not want the financial commitment of a permanent driver. Third, flexibility is more valuable than ownership — users preferred short-term or on-demand access over long-term contracts. Fourth, trust is the primary barrier — concerns around safety, reliability, and driver verification were major blockers to adoption.",
        ],
      },
      userFlows: {
        paragraphs: [
          "We designed two interconnected journeys to ensure both sides of the marketplace were balanced and intuitive. The Car Owner Journey covers request, match, hire, and complete trip — with clear visibility into driver profiles, availability, and booking confirmation. The Driver Journey covers onboarding, availability management, job acceptance, and earnings tracking.",
          "The hiring flow was reduced to a minimal set of actions: select trip type (daily, weekly, long-term), view available drivers, compare profiles including ratings and experience, send a request or book immediately, and confirm the assignment. The goal was to eliminate unnecessary steps while maintaining trust signals at every point.",
        ],
      },
      wireframes: {
        paragraphs: [
          "Early wireframes were used to test driver discovery patterns, booking flow clarity, profile structure and trust indicators, and overall navigation simplicity. We tested with car owners and drivers across multiple rounds to identify where hesitation and confusion occurred.",
          "Iterations focused heavily on reducing cognitive load and improving decision confidence. Small changes to the driver profile layout and booking confirmation screen noticeably affected how confident users felt about proceeding with a hire.",
        ],
      },
      solution: {
        paragraphs: [
          "The final solution introduced a lightweight but structured marketplace experience focused on clarity and trust. The Driver Discovery Dashboard gives users clear visibility into ratings and reviews, availability status, experience level, and trip suitability — making it easy to compare and choose with confidence.",
          "Flexible Hiring Options allow users to choose between hourly or daily hiring, short-term assignments, and long-term driver arrangements. This flexibility is central to the product value, addressing the core insight that users want access without commitment.",
          "A reduced-step Simplified Booking Flow ensures users can complete driver requests quickly without confusion or unnecessary inputs. On the supply side, a Driver Performance Dashboard gives drivers a dedicated interface to track earnings, ratings, availability status, and completed trips — improving engagement and retention. The overall interface prioritizes action over complexity, reducing friction in both discovery and booking flows.",
        ],
      },
      outcome: {
        paragraphs: [
          "The final product successfully validated the demand for flexible driver hiring in urban markets. The redesigned experience improved ease of discovering and hiring drivers, reduced friction in booking workflows, and created a clearer driver-customer matching experience. Stronger trust was established through structured profiles and ratings, while simplified navigation reduced the number of user actions required to complete a hire.",
          "This project reinforced an important principle in marketplace design: success depends on balancing both sides of the ecosystem equally. The real design challenge was not just enabling users to book a driver, but to create trust, flexibility, and clarity in a space where safety and reliability are critical. By focusing on simplicity, transparency, and user control, we created a foundation for a mobility service that better fits the realities of urban life in high-density cities.",
        ],
      },
      metrics: [
        { value: "4 Weeks", label: "Design timeline" },
        { value: "On-Demand", label: "Driver marketplace" },
        { value: "2-Sided", label: "Platform experience" },
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
        content: "Dryva is a mobility marketplace that connects verified professional drivers with car owners who prefer to be driven in their own vehicles.",
      },
      {
        type: "paragraph",
        content: "Unlike traditional ride-hailing platforms that serve users without cars, Dryva targets a different but often overlooked segment — car owners who occasionally or temporarily need professional drivers due to lifestyle demands, long commutes, or urban stress.",
      },
      {
        type: "paragraph",
        content: "The platform enables flexible driver hiring for daily trips, short-term engagements, or long-term arrangements, offering users convenience without requiring them to give up vehicle ownership or commit to full-time driver employment.",
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
      name: "Namnso Ukpanah",
      title: "Product Designer",
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
  "circular-horizons": {
    slug: "circular-horizons",
    title: "Fashion as Art",
    subtitle: "When Style Becomes Expression",
    publishDate: "February 28, 2024",
    author: {
      name: "Namnso Ukpanah",
      title: "Product Designer",
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
      name: "Namnso Ukpanah",
      title: "Product Designer",
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
      name: "Namnso Ukpanah",
      title: "Product Designer",
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

export const getAllCaseStudySlugs = (): string[] => {
  return Object.keys(caseStudiesData);
};
