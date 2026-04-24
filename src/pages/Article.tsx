import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import {
  Article as ArticleWrapper,
  ArticleContainer,
  ArticleContent,
  TopShares,
} from "@/components/ArticleComponents";
import { getArticleBySlug } from "@/data/articles";
import researchImage from "@/assets/case-study-research.jpg";
import userflowImage from "@/assets/case-study-userflow.jpg";
import wireframesImage from "@/assets/case-study-wireframes.jpg";
import solutionImage from "@/assets/case-study-solution.jpg";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleData = slug ? getArticleBySlug(slug) : undefined;

  if (!articleData) {
    return <Navigate to="/404" replace />;
  }

  const cs = articleData.caseStudy;

  // Derive case study meta — prefer typed caseStudy data, fall back to article fields
  const projectTag = articleData.publishDate;
  const client = cs?.client ?? projectTag.split("—")[0].trim();
  const role = cs?.role ?? articleData.subtitle ?? "Product Design";
  const year = cs?.year ?? "2024";
  const duration = cs?.duration ?? articleData.readTime ?? "8 weeks";

  // Section content — use structured caseStudy when available, otherwise slice paragraphs
  const paragraphs = articleData.content.filter((b) => b.type === "paragraph");
  const fallback = (start: number, end?: number): string[] =>
    paragraphs.slice(start, end).map((b) => b.content ?? "").filter(Boolean);

  const introParagraphs = cs?.introduction.paragraphs ?? fallback(0, 2);
  const challengeParagraphs = cs?.challenge.paragraphs ?? fallback(2, 4);
  const challengeHighlight =
    cs?.challenge.highlight ??
    (challengeParagraphs[0]?.slice(0, 140) ||
      "Designing for clarity, speed, and trust at every step.");
  const researchParagraphs = cs?.research.paragraphs ?? fallback(5, 7);
  const userFlowParagraphs =
    cs?.userFlows.paragraphs ?? [
      "Mapping the end-to-end journey surfaced redundant steps and decision points where users hesitated. We rebuilt the flows around the fastest path to a successful outcome.",
    ];
  const wireframeParagraphs =
    cs?.wireframes.paragraphs ?? [
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
    { role: "Product Designer", name: articleData.author.name },
    { role: "Design Lead", name: "Amelia Chen" },
    { role: "Product Manager", name: "Marcus Reid" },
    { role: "Engineering Lead", name: "Priya Natarajan" },
  ];

  const metrics = cs?.metrics ?? [
    { value: "+42%", label: "Conversion lift" },
    { value: "3.2x", label: "Engagement growth" },
    { value: "98%", label: "Stakeholder approval" },
  ];

  const nextProject = articleData.relatedArticles[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ArticleWrapper>
        {/* CASE STUDY HERO */}
        <section className="article-grid relative pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="article-hero">
            <Link
              to="/blog"
              className="inline-flex items-center text-[0.8125rem] uppercase tracking-[0.15em] font-sans font-medium text-muted-foreground hover:text-foreground transition-colors group mb-12"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Case Studies
            </Link>

            <p className="font-sans text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.2em] text-primary font-semibold mb-6">
              {projectTag}
            </p>

            <h1 className="font-display font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2.5rem,7vw,5.5rem)] mb-10 max-w-[18ch]">
              {articleData.title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 mt-2 border-t border-border">
              {[
                { label: "Client", value: client },
                { label: "Role", value: role },
                { label: "Year", value: year },
                { label: "Duration", value: duration },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-2">
                    {m.label}
                  </p>
                  <p className="text-[0.9375rem] md:text-[1rem] font-sans font-semibold text-foreground">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="article-grid pb-20 md:pb-32">
          <div className="article-full-width">
            <div className="w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-muted">
              <img
                src={articleData.heroImage}
                alt={articleData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 01 — INTRODUCTION / OVERVIEW */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="01" label="Introduction & Overview" />
            {introBlocks.length > 0 ? (
              introBlocks.map((b, i) => <p key={i}>{b.content}</p>)
            ) : (
              <p>
                A snapshot of the project, the product context, and why this work
                mattered for the business and the people who use it every day.
              </p>
            )}
          </ArticleContent>
        </ArticleContainer>

        {/* 02 — THE CHALLENGE */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="02" label="The Challenge" />
            {challengeBlocks.length > 0 ? (
              challengeBlocks.map((b, i) => <p key={i}>{b.content}</p>)
            ) : (
              <p>
                Customers were dropping off at key points in the journey. The
                existing experience was fragmented, slow to load, and lacked the
                clarity needed to build trust at the moment of payment.
              </p>
            )}
            <figure className="blockquote-big">
              <blockquote>
                {challengeBlocks[0]?.content?.slice(0, 140) ||
                  "Designing for clarity, speed, and trust at every step."}
              </blockquote>
            </figure>
          </ArticleContent>
        </ArticleContainer>

        {/* 03 — PROJECT GOAL */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="03" label="Project Goal" />
            {goalBlocks.length > 0 ? (
              goalBlocks.map((b, i) => <p key={i}>{b.content}</p>)
            ) : (
              <p>
                We set out to redesign the experience around four north-star
                goals — each tied directly to a measurable business outcome.
              </p>
            )}
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10">
              {goals.map((g, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-[var(--radius)] border border-border bg-card p-6"
                >
                  <span className="font-display font-semibold text-[0.875rem] tracking-[0.15em] text-primary shrink-0">
                    0{i + 1}
                  </span>
                  <p className="font-sans text-[0.9375rem] md:text-[1rem] leading-[1.55] text-foreground m-0">
                    {g}
                  </p>
                </div>
              ))}
            </div>
          </ArticleContent>
        </ArticleContainer>

        {/* 04 — PROJECT TEAM */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="04" label="Project Team" />
            <p>
              A small, cross-functional team partnered closely from discovery
              through launch — keeping design, product, and engineering aligned
              on outcomes.
            </p>
            <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10">
              {team.map((t) => (
                <div key={t.role} className="border-t border-border pt-5">
                  <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-2">
                    {t.role}
                  </p>
                  <p className="text-[0.9375rem] md:text-[1rem] font-sans font-semibold text-foreground">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </ArticleContent>
        </ArticleContainer>

        {/* 05 — RESEARCH STRATEGY */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="05" label="Research Strategy" />
            {researchBlocks.length > 0 ? (
              researchBlocks.map((b, i) => <p key={i}>{b.content}</p>)
            ) : (
              <p>
                We combined qualitative interviews, usability testing, and
                analytics review to triangulate what was happening — and why.
              </p>
            )}
          </ArticleContent>
        </ArticleContainer>
        <section className="article-grid pb-16 md:pb-24">
          <div className="article-full-width">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-muted">
              <img
                src={researchImage}
                alt="Research session with user interview and sticky notes"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 06 — USER FLOWS */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="06" label="User Flows" />
            <p>
              Mapping the end-to-end journey surfaced redundant steps and
              decision points where users hesitated. We rebuilt the flows around
              the fastest path to a successful transaction.
            </p>
          </ArticleContent>
        </ArticleContainer>
        <section className="article-grid pb-16 md:pb-24">
          <div className="article-full-width">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-muted">
              <img
                src={userflowImage}
                alt="User flow diagram"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-contain bg-card"
              />
            </div>
          </div>
        </section>

        {/* 07 — WIREFRAMES */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="07" label="Wireframes" />
            <p>
              Low-fidelity wireframes let us pressure-test layout and hierarchy
              quickly. Each iteration was reviewed with engineering to keep the
              solution feasible and the team aligned.
            </p>
          </ArticleContent>
        </ArticleContainer>
        <section className="article-grid pb-16 md:pb-24">
          <div className="article-full-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] bg-muted">
                <img
                  src={wireframesImage}
                  alt="Mobile wireframes"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] bg-muted md:mt-16">
                <img
                  src={wireframesImage}
                  alt="Mobile wireframes — second iteration"
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 08 — THE DESIGN SOLUTION */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="08" label="The Design Solution" />
            {solutionBlocks.length > 0 ? (
              solutionBlocks.map((b, i) => <p key={i}>{b.content}</p>)
            ) : (
              <p>
                The final design brings clarity, speed, and confidence to every
                step. A unified visual system, clearer states, and a focused
                checkout flow make the experience feel effortless.
              </p>
            )}
          </ArticleContent>
        </ArticleContainer>
        <section className="article-grid pb-16 md:pb-24">
          <div className="article-full-width">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-muted">
              <img
                src={solutionImage}
                alt="Final design solution screens"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 09 — OUTCOME & IMPACT */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="09" label="Outcome & Impact" />
            {outcomeBlocks.length > 0 ? (
              outcomeBlocks.map((b, i) => <p key={i}>{b.content}</p>)
            ) : (
              <p>
                Within the first quarter after launch, the redesigned experience
                delivered measurable gains across conversion, engagement, and
                stakeholder confidence.
              </p>
            )}

            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 mb-16">
              {[
                { value: "+42%", label: "Conversion lift" },
                { value: "3.2x", label: "Engagement growth" },
                { value: "98%", label: "Stakeholder approval" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-[var(--radius)] border border-border bg-card p-6 md:p-8"
                >
                  <p className="font-display font-semibold text-[2.25rem] md:text-[2.75rem] leading-none tracking-[-0.02em] text-foreground mb-3">
                    {m.value}
                  </p>
                  <p className="text-[0.8125rem] uppercase tracking-[0.15em] font-sans text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </ArticleContent>
        </ArticleContainer>

        {/* SHARE */}
        <ArticleContainer className="pb-20 md:pb-28">
          <div className="article-hero text-center">
            <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-6">
              Share this case study
            </p>
            <div className="flex justify-center">
              <TopShares
                facebookUrl={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/article/${articleData.slug}`}
                twitterUrl={`https://twitter.com/intent/tweet?url=https://example.com/article/${articleData.slug}`}
                linkedinUrl={`https://www.linkedin.com/shareArticle?url=https://example.com/article/${articleData.slug}`}
              />
            </div>
          </div>
        </ArticleContainer>
      </ArticleWrapper>

      {/* NEXT PROJECT CTA */}
      {nextProject && (
        <section className="article-grid pb-20 md:pb-32 border-t border-border pt-20 md:pt-28">
          <div className="article-full-width">
            <p className="text-center text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium mb-6">
              Next Case Study
            </p>
            <Link
              to={`/article/${nextProject.slug}`}
              className="group block max-w-[1100px] mx-auto"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-muted mb-8">
                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-end justify-between gap-6 px-2">
                <h3 className="font-display font-semibold tracking-[-0.02em] leading-[1.1] text-[clamp(1.75rem,4vw,3.25rem)] max-w-[20ch] group-hover:text-primary transition-colors">
                  {nextProject.title}
                </h3>
                <span className="hidden md:inline-flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="article-grid py-12">
          <div className="article-hero text-center text-sm text-muted-foreground">
            <p>© 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionLabel = ({ index, label }: { index: string; label: string }) => (
  <div className="not-prose flex items-center gap-4 mb-8">
    <span className="font-display font-semibold text-[0.875rem] tracking-[0.15em] text-primary">
      {index}
    </span>
    <span className="h-px flex-1 max-w-[3rem] bg-border" />
    <span className="font-sans text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.2em] font-semibold text-foreground">
      {label}
    </span>
  </div>
);

export default Article;
