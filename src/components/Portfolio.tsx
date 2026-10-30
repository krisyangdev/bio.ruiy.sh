import { LocaleText } from "./portfolio/LocaleText";
import { ProjectGrid } from "./portfolio/ProjectGrid";
import { SiteControls } from "./portfolio/SiteControls";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <main className="site-shell">
      <div className="site-panel">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Kris Yang home">
            KRIS YANG<span aria-hidden="true">.</span>
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">
              <LocaleText copy={{ en: "Work", zh: "项目" }} />
            </a>
            <a
              href="https://github.com/krisyangdev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
          <SiteControls />
        </header>

        <section className="hero" id="top" aria-labelledby="site-title">
          <p className="eyebrow">
            <LocaleText
              copy={{
                en: "Independent developer · Shanghai",
                zh: "独立开发者 · 上海",
              }}
            />
          </p>
          <h1 id="site-title">
            <LocaleText
              copy={{
                en: (
                  <>
                    Building useful tools
                    <br />
                    for intelligent work.
                  </>
                ),
                zh: (
                  <>
                    为智能工作
                    <br />
                    打造有用的工具。
                  </>
                ),
              }}
            />
          </h1>
          <div className="hero-lower">
            <p>
              <LocaleText
                copy={{
                  en: "Kris Yang builds local-first AI products and open-source systems that turn new capabilities into everyday tools.",
                  zh: "Kris Yang 构建本地优先的 AI 产品与开源系统，让新能力成为真正可用的日常工具。",
                }}
              />
            </p>
            <a className="text-link" href="#work">
              <LocaleText copy={{ en: "Selected work", zh: "查看项目" }} />{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          className="work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <LocaleText copy={{ en: "Selected work", zh: "精选作品" }} />
              </p>
              <h2 id="work-title">
                <LocaleText
                  copy={{ en: "Selected projects.", zh: "项目一览。" }}
                />
              </h2>
            </div>
            <p
              className="project-count"
              aria-label={`${projects.length} projects`}
            >
              0{projects.length}
            </p>
          </div>

          <ProjectGrid projects={projects} />
        </section>

        <footer className="site-footer">
          <p>
            <LocaleText
              copy={{ en: "© 2026 Kris Yang", zh: "© 2026 Kris Yang" }}
            />
          </p>
          <div>
            <a href="mailto:ruiyang0012@gmail.com">Email</a>
            <a
              href="https://github.com/krisyangdev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
