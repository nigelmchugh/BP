import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, Zap, Users, TrendingUp, Shield, Code } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance font-sans text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
              Framework-Defined Infrastructure
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              How BP leverages Next.js, Contentful, and Vercel to manage 40+ brands across 80+ countries with
              unparalleled agility and scale.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                Read Case Study
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground lg:text-5xl">40+</div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground lg:text-5xl">80+</div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground lg:text-5xl">4</div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">Agencies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground lg:text-5xl">Zero</div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">DevOps Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            The Power of Framework-Defined Infrastructure
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Infrastructure that adapts to your code, not the other way around.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Global Edge Network</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Deploy to 80+ countries with automatic edge optimization. Framework handles routing, caching, and
              geo-distribution without manual configuration.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Multi-Agency Collaboration</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Four agencies work independently without infrastructure silos. Shared framework patterns enable seamless
              collaboration at scale.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Crisis Response</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Scale individual brands instantly during unexpected events. Independent scaling without touching
              infrastructure configuration.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Rapid M&A Integration</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Onboard acquired brands in weeks, not months. Reuse existing patterns and infrastructure without starting
              from scratch.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Zero DevOps Overhead</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              No dedicated infrastructure team required. Framework handles scaling, security, and operations
              automatically.
            </p>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">Developer Velocity</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Developers focus on features, not infrastructure. Preview deployments, automatic HTTPS, and instant
              rollbacks built-in.
            </p>
          </Card>
        </div>
      </section>

      {/* Architecture Highlight */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                The Traditional Approach
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Legacy infrastructure requires dedicated teams to manage:
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  <span>Manual server provisioning and scaling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  <span>Complex CDN configuration per region</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  <span>Separate staging and production environments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  <span>Custom CI/CD pipelines for each brand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive">✕</span>
                  <span>Over-provisioning to handle traffic spikes</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                Framework-Defined Infrastructure
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Next.js + Vercel automatically handles:</p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Automatic scaling based on actual traffic</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Edge network optimization without configuration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Preview deployments for every Git push</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Zero-config deployment across all brands</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Pay only for actual usage, not capacity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Real-World Impact
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            How framework-defined infrastructure solved critical business challenges.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          <Card className="p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Crisis Response
                </div>
                <h3 className="mt-4 text-2xl font-bold text-card-foreground">Wild Bean Cafe During a Crisis</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  When an unexpected crisis drove 10x traffic to Wild Bean Cafe, the site automatically scaled without
                  intervention. Independent scaling meant other BP brands were unaffected, and teams could focus on
                  content updates instead of infrastructure firefighting.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-muted/50 p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground">10x</div>
                  <div className="mt-2 text-sm text-muted-foreground">Traffic Spike Handled</div>
                  <div className="mt-6 text-3xl font-bold text-foreground">0</div>
                  <div className="mt-2 text-sm text-muted-foreground">Infrastructure Changes</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center rounded-lg bg-muted/50 p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground">3</div>
                  <div className="mt-2 text-sm text-muted-foreground">Weeks to Launch</div>
                  <div className="mt-6 text-3xl font-bold text-foreground">100%</div>
                  <div className="mt-2 text-sm text-muted-foreground">Pattern Reuse</div>
                </div>
              </div>
              <div>
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  M&A Integration
                </div>
                <h3 className="mt-4 text-2xl font-bold text-card-foreground">Rapid Brand Acquisition</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  New brand acquisitions launch in weeks by reusing existing Next.js patterns and Contentful models. No
                  infrastructure setup, no custom deployment pipelines—just clone, customize, and deploy.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-5xl">The Stack</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Three platforms that work together seamlessly.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Card className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-foreground">
                <div className="text-2xl font-bold text-background">▲</div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">Next.js</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                React framework that defines infrastructure through code conventions
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-foreground">
                <div className="text-2xl font-bold text-background">C</div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">Contentful</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Headless CMS that scales content across all brands and regions
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-foreground">
                <div className="text-2xl font-bold text-background">▲</div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">Vercel</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Deployment platform that executes framework-defined infrastructure
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Ready to transform your infrastructure?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover how framework-defined infrastructure can eliminate DevOps complexity while improving agility and
            reducing costs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Download Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            Framework-Defined Infrastructure Case Study • 2025
          </div>
        </div>
      </footer>
    </div>
  )
}
