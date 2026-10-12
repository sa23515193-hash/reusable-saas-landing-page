import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const features = [
{
icon: '✦',
title: 'One calm workspace',
text: 'Bring projects, notes, and conversations into one focused home.'
},
{
icon: '↗',
title: 'Momentum that lasts',
text: 'Clear priorities help your team spend less time coordinating.'
},
{
icon: '◈',
title: 'Insights, not noise',
text: 'Understand what is moving forward with simple, useful reports.'
},
];

const plans = [
{
name: 'Starter',
price: '$0',
detail: 'For trying a better workflow',
items: ['Up to 3 projects', 'Core task boards', 'Community support']
},
{
name: 'Pro',
price: '$18',
detail: 'For teams ready to grow',
items: ['Unlimited projects', 'Automation and reports', 'Priority support'],
featured: true
},
{
name: 'Studio',
price: '$39',
detail: 'For multi-team operations',
items: ['Advanced permissions', 'Team workspaces', 'Dedicated onboarding']
},
];

function Logo() {
return ( <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight text-white"> <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-ink">
o. </span>
orbitly </a>
);
}

function Navbar() {
return ( <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"> <Logo />

  <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
    <a href="#features" className="hover:text-white">Features</a>
    <a href="#workflow" className="hover:text-white">How it works</a>
    <a href="#pricing" className="hover:text-white">Pricing</a>
  </nav>

  <a href="#pricing" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-mint">
    Get started ↗
  </a>
</header>


);
}

function Badge({ children }) {
return ( <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-mint">
{children} </span>
);
}

function FeatureCard({ icon, title, text }) {
return ( <article className="rounded-3xl border border-white/10 bg-white/[.04] p-7 transition hover:-translate-y-1 hover:border-mint/40"> <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-lilac/15 text-2xl text-lilac">
{icon} </div>


  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
  <p className="leading-7 text-slate-400">{text}</p>
</article>

);
}

function PricingCard({ plan }) {
return (
<article
className={`rounded-3xl border p-7 ${
        plan.featured
          ? 'border-mint bg-mint text-ink shadow-2xl shadow-mint/10'
          : 'border-white/10 bg-white/[.04] text-white'
      }`}
> <div className="flex items-center justify-between"> <h3 className="text-lg font-bold">{plan.name}</h3>

    {plan.featured && (
      <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-mint">
        MOST POPULAR
      </span>
    )}
  </div>

  <p className={`mt-2 text-sm ${plan.featured ? 'text-ink/70' : 'text-slate-400'}`}>
    {plan.detail}
  </p>

  <p className="my-7 text-4xl font-extrabold">
    {plan.price}
    <span className="text-sm font-medium"> / user / mo</span>
  </p>

  <ul className="mb-8 space-y-3 text-sm">
    {plan.items.map(item => (
      <li key={item}>✓ &nbsp;{item}</li>
    ))}
  </ul>

  <a
    href="mailto:hello@orbitly.example"
    className={`block rounded-full px-4 py-3 text-center text-sm font-bold ${
      plan.featured
        ? 'bg-ink text-white hover:bg-slate-800'
        : 'bg-white text-ink hover:bg-mint'
    }`}
  >
    Choose {plan.name}
  </a>
</article>


);
}

function App() {
return ( <div className="min-h-screen overflow-hidden bg-ink"> <div className="hero-glow">


    <Navbar />

    <main>

      {/* HERO SECTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:pb-32 lg:pt-24">

        <div>
          <Badge>✦ YOUR TEAM'S NEW HOME</Badge>

          <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Make room for <span className="text-mint">great work.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            The all-in-one workspace that helps ambitious teams turn busy days into meaningful progress.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="rounded-full bg-mint px-6 py-3.5 font-bold text-ink transition hover:scale-[1.02]"
            >
              Start for free ↗
            </a>

            <a
              href="#workflow"
              className="rounded-full border border-white/20 px-6 py-3.5 font-bold text-white hover:bg-white/10"
            >
              See how it works
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-sm text-slate-400">
            <div className="flex -space-x-2">
              <span className="avatar bg-rose-300">A</span>
              <span className="avatar bg-sky-300">J</span>
              <span className="avatar bg-amber-300">M</span>
              <span className="avatar bg-lilac">S</span>
            </div>

            <span>
              <strong className="text-white">12,000+</strong> teams found their flow
            </span>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="relative">

          <div className="absolute -inset-6 rounded-[3rem] bg-lilac/10 blur-3xl"></div>

          <div className="relative rounded-[2rem] border border-white/15 bg-[#121a2d] p-5 shadow-2xl sm:p-7">

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[.2em] text-slate-500">
                  Monday, October 12
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                  Team overview
                </h2>
              </div>

              <span className="rounded-full bg-mint/10 px-3 py-1.5 text-xs font-bold text-mint">
                ● On track
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ['Projects', '08'],
                ['Tasks done', '76%'],
                ['Focus time', '4.8h']
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/[.05] p-3 sm:p-4">
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-white/[.04] p-4">

              <div className="mb-4 flex justify-between text-sm">
                <span className="font-bold text-white">Launch new website</span>
                <span className="text-mint">72%</span>
              </div>

              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-[72%] rounded-full bg-mint"></div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ['Finalize homepage', 'Today', 'bg-mint'],
                  ['Review mobile layout', 'Tomorrow', 'bg-lilac'],
                  ['Publish launch notes', 'Oct 16', 'bg-amber-300']
                ].map(([task, date, color]) => (
                  <div
                    key={task}
                    className="flex items-center gap-3 rounded-xl border border-white/5 p-3"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${color}`}></span>
                    <span className="flex-1 text-sm text-slate-200">{task}</span>
                    <span className="text-xs text-slate-500">{date}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-mint">
            Less chaos. More clarity.
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Everything clicks when work clicks.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            A thoughtfully connected toolkit, designed to make collaboration feel effortless.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

      </section>

      {/* WORKFLOW SECTION */}
      <section
        id="workflow"
        className="mx-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.06] to-lilac/[.06] px-6 py-16 sm:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-lilac">
              Built for momentum
            </p>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              From scattered ideas to shipped work.
            </h2>
          </div>

          <p className="leading-8 text-slate-300">
            Plan together, keep ownership clear, and celebrate progress without another meeting.
            Orbitly gives every teammate the context they need to do their best work.
          </p>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-mint">
            Simple pricing
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Choose your pace.
          </h2>

          <p className="mt-4 text-slate-400">
            Start small. Grow when you're ready.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map(plan => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

      </section>

    </main>

    {/* FOOTER */}
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
      © 2026 Orbitly. Made for teams who care about their craft.
    </footer>

  </div>
</div>

);
}

createRoot(document.getElementById('root')).render(
<React.StrictMode> <App />
</React.StrictMode>
);
