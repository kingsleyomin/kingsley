import { useEffect, useRef, useMemo } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import BlogHero from "@/components/BlogHero";
import WavyBackground from "@/components/WavyBackground";
import {
  GridContent,
  GridWrapper,
} from "@/components/GridContainer";
import { caseStudiesData } from "@/data/caseStudies";

const Index = () => {
  const caseStudiesRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    caseStudiesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Transform caseStudiesData into the format needed for the grid
  const allCaseStudies = useMemo(() => {
    return Object.values(caseStudiesData).map((cs) => ({
      title: cs.title,
      image: cs.heroImage,
      publishDate: cs.publishDate,
      slug: cs.slug,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <WavyBackground />
      <Header />

      <Section>
        <GridWrapper>
          <GridContent className="!mt-0 !mb-0">
            <BlogHero
              title="Kingsley"
              description="A creative Product Designer with a focus on helping startups and large organizations design modern and user-centric solutions."
            />
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Case Studies Section - Accordion Grid */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="case-study-full-width">
              <ul className="grid gap-12 md:grid-cols-2 md:gap-[70px] lgPlus:gap-24 3xl:gap-32">
                {allCaseStudies.slice(0, 5).map((cs, index) => (
                  <li
                    key={index}
                    ref={(el) => (caseStudiesRef.current[index] = el)}
                    className={`blog-feed__item ${index === 0 ? 'md:col-span-2' : ''}`}
                    style={{
                      animationDelay: `${(index % 2) * 150}ms`,
                    }}
                  >
                    <CaseStudyPreview
                      title={cs.title}
                      slug={cs.slug}
                      image={cs.image}
                      imageAlt={cs.title}
                      publishDate={cs.publishDate}
                      className={index === 0 ? 'first-card' : ''}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="case-study-grid py-12">
          <div className="case-study-hero text-center text-sm text-muted-foreground">
            <p>© 2026 KO. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
