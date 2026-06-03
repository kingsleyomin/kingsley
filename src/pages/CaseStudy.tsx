import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import researchImage from "@/assets/case-study-research.jpg";
import userflowImage from "@/assets/case-study-userflow.jpg";
import wireframesImage from "@/assets/case-study-wireframes.jpg";
import solutionImage from "@/assets/case-study-solution.jpg";

// Editorial palette tokens — Paper & Ink, scoped to this page only
const PAPER = "#f5f3ee";
const PAPER_ALT = "#e8e5de";
const INK = "#0d0d0d";
const MUTED = "#a8a49a";

const serif = { fontFamily: "'Instrument Serif', serif" } as const;
const sans = { fontFamily: "'Work Sans', sans-serif" } as const;

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudyData = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudyData) {
    return <Navigate to="/404" replace />;
  }

  const cs = caseStudyData.caseStudy;

  const projectTag = caseStudyData.publishDate;
  const client = cs?.client ?? projectTag.split("—")[0].trim();
  const role = cs?.role ?? caseStudyData.subtitle ?? "Product Design";
  const year = cs?.year ?? "2024";
  const duration = cs?.duration ?? caseStudyData.readTime ?? "8 weeks";

  const paragraphs = caseStudyData.content.filter((b) => b.type === "paragraph");
  const fallback = (start: number, end?: number): string[] =>
    paragraphs.slice(start, end).map((b) => b.content ?? "").filter(Boolean);

  const introParagraphs = cs?.introduction.paragraphs ?? fallback(0, 2);
  const challengeParagraphs = cs?.challenge.paragraphs ?? fallback(2, 4);
  const challengeHighlight =
    cs?.challenge.highlight ??
    (challengeParagraphs[0]?.slice(0, 140) ||
      "Designing for clarity, speed, and trust at every step.");
  const researchParagraphs = cs?.research.paragraphs ?? fallback(5, 7);
  const userFlowParagraphs = cs?.userFlows.paragraphs ?? [
    "Mapping the end-to-end journey surfaced redundant steps and decision points where users hesitated. We rebuilt the flows around the fastest path to a successful outcome.",
  ];
  const wireframeParagraphs = cs?.wireframes.paragraphs ?? [
    "Low-fidelity wireframes let us pressure-test layout and hierarchy quickly. Each iteration was reviewed with engineering to keep the solution feasible and the team aligned.",
  ];
  const solutionParagraphs = cs?.solution.paragraphs ?? fallback(7, 9);
  const outcomeParagraphs = cs?.outcome.paragraphs ?? fallback(9);

  const goals = cs?.goals ?? [
    "Simplify the end-to-end experience across web and mobile.",
    "Reduce drop-off in the core funnel by removing friction.",
    "Build trust through clearer states and confirmations.",
    "Establish a scalable design foundation for future surfaces.",
  ];

  const team = cs?.team ?? [
    { role: "Product Designer", name: caseStudyData.author.name },
    { role: "Design Lead", name: "Amelia Chen" },
    { role: "Product Manager", name: "Marcus Reid" },
    { role: "Engineering Lead", name: "Priya Natarajan" },
  ];

  const metrics = cs?.metrics ?? [
    { value: "+42%", label: "Conversion lift" },
    { value: "3.2x", label: "Engagement growth" },
    { value: "98%", label: "Stakeholder approval" },
  ];

  const researchSrc = cs?.images?.research ?? researchImage;
  const userFlowSrc = cs?.images?.userFlow ?? userflowImage;
  const wireframesSrc = cs?.images?.wireframes ?? wireframesImage;
  const solutionSrc = cs?.images?.solution ?? solutionImage;

  const nextProject = caseStudyData.relatedCaseStudies[0];

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: PAPER, color: INK, ...sans }}
    >
      {/* Header */}
      <nav
        className="flex items-center justify-between px-6 md:px-12 py-8 border-b"
        style={{ borderColor: `${INK}1a` }}
      >
        <Link
          to="/"
          className="text-3xl italic tracking-tight leading-none"
          style={serif}
        >
          Kingsley
        </Link>
        <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <Link to="/blog" className="hover:opacity-50 transition-opacity">
            Work
          </Link>
          <Link to="/contact" className="hover:opacity-50 transition-opacity">
            Contact
          </Link>
        </div>
      </nav>

      <article className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* HERO */}
        <header className="mb-28 md:mb-40">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 mb-14 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
              All Case Studies
            </span>
          </Link>

          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-[11px] uppercase tracking-[0.25em] font-semibold"
              style={{ color: `${INK}99` }}
            >
              {projectTag}
            </span>
          </div>

          <h1
            className="leading-[0.92] tracking-[-0.02em] mb-16 max-w-6xl italic font-normal"
            style={{
              ...serif,
              fontSize: "clamp(3rem, 9vw, 8.5rem)",
            }}
          >
            {caseStudyData.title}
          </h1>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t"
            style={{ borderColor: `${INK}1a` }}
          >
            {[
              { label: "Client", value: client },
              { label: "Role", value: role },
              { label: "Year", value: year },
              { label: "Duration", value: duration },
            ].map((m) => (
              <div key={m.label} className="space-y-2">
                <p
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: `${INK}80` }}
                >
                  {m.label}
                </p>
                <p className="text-base md:text-lg font-medium">{m.value}</p>
              </div>
            ))}
          </div>
        </header>

        {/* HERO IMAGE */}
        <section className="mb-28 md:mb-40">
          <div
            className="w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden"
            style={{ backgroundColor: PAPER_ALT }}
          >
            <img
              src={caseStudyData.heroImage}
              alt={caseStudyData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 01 — INTRODUCTION */}
        <SectionRow index="01" label="Overview" title="The Overview">
          <div className="space-y-6">
            {introParagraphs.length > 0 ? (
              introParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-xl md:text-2xl leading-relaxed font-light"
                  style={{ color: `${INK}cc` }}
                >
                  {p}
                </p>
              ))
            ) : (
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                A snapshot of the project, the product context, and why this
                work mattered.
              </p>
            )}
          </div>
        </SectionRow>

        {/* 02 — CHALLENGE */}
        <SectionRow index="02" label="Challenge" title="The Challenge">
          <div className="space-y-6">
            {challengeParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed"
                style={{ color: `${INK}b3` }}
              >
                {p}
              </p>
            ))}
            <figure
              className="mt-12 border-l-2 pl-8 py-2"
              style={{ borderColor: INK }}
            >
              <blockquote
                className="text-2xl md:text-3xl italic leading-snug"
                style={serif}
              >
                “{challengeHighlight}”
              </blockquote>
            </figure>
          </div>
        </SectionRow>

        {/* 03 — PROJECT GOAL */}
        <SectionRow index="03" label="Project Goal" title="Project Goals">
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: `${INK}b3` }}
          >
            {cs?.goalsIntro ??
              "The work was shaped around a focused set of goals — each one tied to a real user and business outcome."}
          </p>
          <ul
            className="space-y-8 border-l pl-8"
            style={{ borderColor: `${INK}1f` }}
          >
            {goals.map((g, i) => (
              <li key={i} className="group">
                <span
                  className="block text-xs font-semibold mb-2 tracking-[0.18em]"
                  style={{ color: `${INK}66` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg md:text-xl leading-relaxed">{g}</p>
              </li>
            ))}
          </ul>
        </SectionRow>

        {/* 04 — TEAM */}
        <SectionRow index="04" label="Team" title="Project Team">
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: `${INK}b3` }}
          >
            A small, cross-functional team partnered closely from discovery
            through launch.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-8">
            {team.map((t) => (
              <div
                key={t.role + t.name}
                className="border-t pt-5"
                style={{ borderColor: `${INK}1a` }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-2"
                  style={{ color: `${INK}80` }}
                >
                  {t.role}
                </p>
                <p className="text-base md:text-lg font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </SectionRow>

        {/* 05 — RESEARCH */}
        <SectionRow index="05" label="Research" title="Research Strategy">
          <div className="space-y-6">
            {researchParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed"
                style={{ color: `${INK}b3` }}
              >
                {p}
              </p>
            ))}
          </div>
        </SectionRow>
        <FigureWide
          src={researchSrc}
          alt="Research"
          caption="Fig 1.1 — Qualitative research synthesis."
        />

        {/* 06 — USER FLOWS */}
        <SectionRow index="06" label="Flows" title="User Flows">
          <div className="space-y-6">
            {userFlowParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed"
                style={{ color: `${INK}b3` }}
              >
                {p}
              </p>
            ))}
          </div>
        </SectionRow>
        <FigureWide
          src={userFlowSrc}
          alt="User flows"
          caption="Fig 2.1 — End-to-end user flow mapping."
          contain
        />

        {/* 07 — WIREFRAMES */}
        <SectionRow index="07" label="Wireframes" title="Wireframes">
          <div className="space-y-6">
            {wireframeParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed"
                style={{ color: `${INK}b3` }}
              >
                {p}
              </p>
            ))}
          </div>
        </SectionRow>
        <section className="mb-28 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div
              className="aspect-[4/5] overflow-hidden"
              style={{ backgroundColor: PAPER_ALT }}
            >
              <img
                src={wireframesSrc}
                alt="Wireframes"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="aspect-[4/5] overflow-hidden md:mt-16"
              style={{ backgroundColor: PAPER_ALT }}
            >
              <img
                src={wireframesSrc}
                alt="Wireframes — iteration"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p
            className="mt-6 text-xs italic"
            style={{ color: MUTED }}
          >
            Fig 3.1 — Low-fidelity wireframe iterations.
          </p>
        </section>

        {/* 08 — SOLUTION — featured editorial pull */}
        <section className="mb-28 md:mb-40">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p
              className="text-[10px] uppercase tracking-[0.4em] font-semibold"
              style={{ color: `${INK}80` }}
            >
              08 — The Design Solution
            </p>
            <h2
              className="italic font-normal leading-[1.05] tracking-[-0.01em]"
              style={{
                ...serif,
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              }}
            >
              {solutionParagraphs[0]?.split(".")[0] ??
                "A design language rooted in clarity and precision."}
              .
            </h2>
            <div
              className="w-px h-20 mx-auto"
              style={{ backgroundColor: `${INK}33` }}
            />
            {solutionParagraphs.slice(1).map((p, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed text-left md:text-center"
                style={{ color: `${INK}b3` }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>
        <FigureWide
          src={solutionSrc}
          alt="Final design solution"
          caption="Fig 4.1 — Final design surfaces."
        />

        {/* 09 — OUTCOME */}
        <section
          className="border-t pt-20 md:pt-28 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20"
          style={{ borderColor: `${INK}1a` }}
        >
          <div className="md:col-span-4">
            <p
              className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4"
              style={{ color: `${INK}80` }}
            >
              09 — Outcome
            </p>
            <h2
              className="text-4xl md:text-5xl italic font-normal leading-tight"
              style={serif}
            >
              The Outcome
            </h2>
          </div>
          <div className="md:col-start-6 md:col-span-7 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p
                    className="text-5xl md:text-6xl italic mb-3 leading-none"
                    style={serif}
                  >
                    {m.value}
                  </p>
                  <p
                    className="text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: `${INK}80` }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {outcomeParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed"
                  style={{ color: `${INK}b3` }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* NEXT PROJECT */}
      {nextProject && (
        <section
          className="border-t"
          style={{ borderColor: `${INK}1a` }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <p
              className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-8"
              style={{ color: `${INK}80` }}
            >
              Next Case Study
            </p>
            <Link
              to={`/case-study/${nextProject.slug}`}
              className="group block"
            >
              <div className="flex items-end justify-between gap-8 mb-10">
                <h3
                  className="italic font-normal leading-[1.05] tracking-[-0.01em] max-w-[20ch] group-hover:opacity-70 transition-opacity"
                  style={{
                    ...serif,
                    fontSize: "clamp(2rem, 5vw, 4.5rem)",
                  }}
                >
                  {nextProject.title}
                </h3>
                <span
                  className="hidden md:inline-flex shrink-0 items-center justify-center w-16 h-16 rounded-full border transition-all group-hover:translate-x-1"
                  style={{ borderColor: `${INK}33` }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
              <div
                className="w-full aspect-[16/9] overflow-hidden"
                style={{ backgroundColor: PAPER_ALT }}
              >
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer
        className="border-t"
        style={{ borderColor: `${INK}1a` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[10px] uppercase tracking-[0.25em]"
            style={{ color: `${INK}80` }}
          >
            © 2026 Kingsley Omin
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold group"
          >
            Start a project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

const SectionRow = ({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-28 md:mb-40">
    <div className="md:col-span-4">
      <div className="md:sticky md:top-12 space-y-4">
        <p
          className="text-[10px] uppercase tracking-[0.25em] font-semibold"
          style={{ color: `${INK}80` }}
        >
          {index} — {label}
        </p>
        <h2
          className="text-3xl md:text-4xl italic font-normal leading-tight tracking-[-0.01em]"
          style={serif}
        >
          {title}
        </h2>
      </div>
    </div>
    <div className="md:col-start-6 md:col-span-7">{children}</div>
  </section>
);

const FigureWide = ({
  src,
  alt,
  caption,
  contain = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  contain?: boolean;
}) => (
  <section className="mb-28 md:mb-40">
    <div
      className="w-full aspect-[16/9] overflow-hidden"
      style={{ backgroundColor: PAPER_ALT }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full ${contain ? "object-contain p-6" : "object-cover"}`}
      />
    </div>
    {caption && (
      <p
        className="mt-6 text-xs italic"
        style={{ color: MUTED }}
      >
        {caption}
      </p>
    )}
  </section>
);

export default CaseStudy;
