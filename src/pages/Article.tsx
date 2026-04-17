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

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleData = slug ? getArticleBySlug(slug) : undefined;

  if (!articleData) {
    return <Navigate to="/404" replace />;
  }

  // Derive case study meta from existing article data
  const projectTag = articleData.publishDate; // e.g. "PRESTMIT — MOBILE APP REDESIGN"
  const role = articleData.subtitle || "Product Design";
  const year = "2024";
  const duration = articleData.readTime || "8 weeks";
  const client = projectTag.split("—")[0].trim();

  // Split content into narrative chunks
  const paragraphs = articleData.content.filter((b) => b.type === "paragraph");
  const overviewBlocks = paragraphs.slice(0, 2);
  const challengeBlocks = paragraphs.slice(2, 4);
  const processBlocks = paragraphs.slice(4, 7);
  const outcomeBlocks = paragraphs.slice(7);

  const nextProject = articleData.relatedArticles[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ArticleWrapper>
        {/* CASE STUDY HERO */}
        <section className="article-grid relative pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="article-hero">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-[0.8125rem] uppercase tracking-[0.15em] font-sans font-medium text-muted-foreground hover:text-foreground transition-colors group mb-12"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Case Studies
            </Link>

            {/* Project tag */}
            <p className="font-sans text-[0.75rem] md:text-[0.8125rem] uppercase tracking-[0.2em] text-primary font-semibold mb-6">
              {projectTag}
            </p>

            {/* Title */}
            <h1 className="font-display font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2.5rem,7vw,5.5rem)] mb-10 max-w-[18ch]">
              {articleData.title}
            </h1>

            {/* Project meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 mt-2 border-t border-border">
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-2">
                  Client
                </p>
                <p className="text-[0.9375rem] md:text-[1rem] font-sans font-semibold text-foreground">
                  {client}
                </p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-2">
                  Role
                </p>
                <p className="text-[0.9375rem] md:text-[1rem] font-sans font-semibold text-foreground">
                  {role}
                </p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-2">
                  Year
                </p>
                <p className="text-[0.9375rem] md:text-[1rem] font-sans font-semibold text-foreground">
                  {year}
                </p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground font-sans font-medium mb-2">
                  Duration
                </p>
                <p className="text-[0.9375rem] md:text-[1rem] font-sans font-semibold text-foreground">
                  {duration}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HERO IMAGE — full bleed within grid */}
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

        {/* OVERVIEW */}
        <ArticleContainer className="pb-16 md:pb-24">
          <ArticleContent>
            <SectionLabel index="01" label="Overview" />
            {overviewBlocks.map((b, i) => (
              <p key={i}>{b.content}</p>
            ))}
          </ArticleContent>
        </ArticleContainer>

        {/* CHALLENGE */}
        {challengeBlocks.length > 0 && (
          <ArticleContainer className="pb-16 md:pb-24">
            <ArticleContent>
              <SectionLabel index="02" label="The Challenge" />
              {challengeBlocks.map((b, i) => (
                <p key={i}>{b.content}</p>
              ))}
              <figure className="blockquote-big">
                <blockquote>
                  {challengeBlocks[0]?.content?.slice(0, 140) ||
                    "Designing for clarity, speed, and trust."}
                </blockquote>
              </figure>
            </ArticleContent>
          </ArticleContainer>
        )}

        {/* PROCESS */}
        {processBlocks.length > 0 && (
          <ArticleContainer className="pb-16 md:pb-24">
            <ArticleContent>
              <SectionLabel index="03" label="Process & Approach" />
              {processBlocks.map((b, i) => (
                <p key={i}>{b.content}</p>
              ))}
            </ArticleContent>
          </ArticleContainer>
        )}

        {/* VISUALS GALLERY */}
        <section className="article-grid pb-16 md:pb-24">
          <div className="article-full-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] bg-muted">
                <img
                  src={articleData.heroImage}
                  alt={`${articleData.title} — visual 1`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] bg-muted md:mt-16">
                <img
                  src={nextProject?.image || articleData.heroImage}
                  alt={`${articleData.title} — visual 2`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        {outcomeBlocks.length > 0 && (
          <ArticleContainer className="pb-16 md:pb-24">
            <ArticleContent>
              <SectionLabel index="04" label="Outcome & Impact" />
              {outcomeBlocks.map((b, i) => (
                <p key={i}>{b.content}</p>
              ))}

              {/* Metrics */}
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
        )}

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
