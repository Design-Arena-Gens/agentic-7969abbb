import {
  ArrowRightIcon,
  FireIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    title: "Living Dungeons",
    description:
      "Procedurally-forged labyrinths twist with every descent. Master shifting traps, arcane puzzles, and evolving AI foes that learn from each expedition.",
    icon: GlobeAltIcon,
  },
  {
    title: "Guild of Legends",
    description:
      "Recruit spellbinders, wildborn guardians, and arc-tech engineers. Synergize unique skill trees to forge legendary team compositions and combo ultimates.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Adaptive Fate System",
    description:
      "Every defeat rewrites the prophecy. Unlock relics, alter biomes, and infuse weaponry with meta progression that bends the timeline to your will.",
    icon: SparklesIcon,
  },
  {
    title: "Mythic Arsenal",
    description:
      "Wield rune-etched blades, channel living storms, and craft soulbound artifacts with a deep alchemy and rune-inscription system built for theorycrafters.",
    icon: FireIcon,
  },
];

const biomes = [
  {
    title: "The Shattered Expanse",
    description:
      "Floating keeps stitched together by unstable ley lines. Navigate fractured gravity wells and harvest astral shards while outrunning celestial wraiths.",
    accent: "from-arcane-400/70 to-arcane-500/30",
  },
  {
    title: "Embergrove Deep",
    description:
      "Bioluminescent forests haunt the caverns beneath Aethoria. Ignite ember blooms, befriend emberlings, or risk waking the Ashen Warden.",
    accent: "from-ember-400/70 to-ember-500/30",
  },
  {
    title: "Blackglass Bastion",
    description:
      "An ancient fortress trapped in perpetual eclipse. Reflect void beams with mirrored shields and dismantle siege engines possessed by shadow spirits.",
    accent: "from-slate-400/70 to-slate-900/40",
  },
];

const loop = [
  {
    title: "Scout the Fracture",
    body: "Choose your route, harness guild intel, and weave blessings that set the tone for the run.",
  },
  {
    title: "Descend & Adapt",
    body: "Battle, improvise, and capture boons before the realm reshapes. Every floor evolves with your tactics.",
  },
  {
    title: "Claim the Relics",
    body: "Extract shards, forge legendary augments, and return with new lore fragments and evolving NPC storylines.",
  },
  {
    title: "Rewrite Destiny",
    body: "Spend meta-resources, upgrade the guildhall, and unlock world events that ripple into the next descent.",
  },
];

const roadmap = [
  {
    season: "Pre-Launch",
    content:
      "Closed alpha guild trials, buildcraft balance passes, and storytelling feedback rounds with the community council.",
  },
  {
    season: "Launch Window",
    content:
      "Co-op raid rifts, seasonal chaos modifiers, and the first narrative arc confronting the Eclipse Sovereign.",
  },
  {
    season: "Beyond",
    content:
      "Player-forged realms, guild versus guild relic wars, and living world events shaped by community vote.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-aurora mix-blend-screen opacity-70" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-12 md:px-10 lg:px-16">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute inset-0 animate-pulseRing rounded-full bg-ember-500/25 blur-md" />
              <div className="relative flex size-12 items-center justify-center rounded-full border border-white/10 bg-midnight-800/70 shadow-glow-ember backdrop-blur">
                <SparklesIcon className="size-6 text-ember-300" />
              </div>
            </div>
            <div>
              <p className="font-display text-xl tracking-[0.3em] text-amber-200 md:text-2xl">
                Echoes of Aethoria
              </p>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
                Fantasy Roguelite RPG
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link className="transition hover:text-white" href="#world">
              World
            </Link>
            <Link className="transition hover:text-white" href="#loop">
              Roguelite Loop
            </Link>
            <Link className="transition hover:text-white" href="#roadmap">
              Roadmap
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-ember-400/50 bg-ember-500/20 px-5 py-2 text-sm font-semibold text-ember-300 shadow-glow-ember transition hover:border-ember-400 hover:bg-ember-500/30 hover:text-white"
              href="https://store.steampowered.com"
              target="_blank"
              rel="noreferrer"
            >
              Wishlist
              <ArrowRightIcon className="size-4" />
            </a>
          </nav>
        </header>

        <section className="relative flex flex-1 flex-col justify-center gap-14 py-12">
          <div className="absolute inset-0 -z-10 overflow-visible">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-ember-500/20 blur-3xl" />
            <div className="absolute right-10 top-10 size-24 rounded-full border border-amber-200/30 opacity-60" />
            <div className="absolute bottom-0 left-0 size-36 rounded-full border border-arcane-400/40 opacity-40" />
          </div>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate-200/80 backdrop-blur">
                Descend. Endure. Rewrite Fate.
              </p>
              <h1 className="font-display text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
                A roguelite odyssey through a realm shattered by celestial war.
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Command a guild of legendary heroes, wield living magic, and master ever-changing dungeons in a richly illustrated story-driven roguelite crafted for bold tacticians and lorehungry adventurers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://store.steampowered.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-ember-500/80 px-8 py-3 text-base font-semibold text-white shadow-glow-ember transition hover:bg-ember-500"
                >
                  Wishlist on Steam
                  <ArrowRightIcon className="size-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
                >
                  Watch the Trailer
                </a>
              </div>
              <dl className="grid gap-6 sm:grid-cols-3">
                {[
                  ["12", "Biomes to master"],
                  ["65+", "Legendary abilities"],
                  ["1", "Chance to rewrite destiny"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
                    <dt className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      {label}
                    </dt>
                    <dd className="font-display text-3xl text-amber-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative hidden h-full min-h-[22rem] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-glow-arcane backdrop-blur-sm lg:block">
              <div className="relative h-full w-full overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-midnight-800/70 via-midnight-700/80 to-midnight-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,124,255,0.25),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(236,94,35,0.2),transparent_60%)]" />
                <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(120deg,rgba(236,94,35,0.15)0%,rgba(127,124,255,0.3)50%,rgba(70,168,243,0.15)100%)] bg-[length:200%_200%]" />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                      Realm Forecast
                    </p>
                    <h3 className="font-display text-3xl text-white">
                      The Fractured Citadel
                    </h3>
                    <p className="text-sm text-slate-200/80">
                      Leyline storms surge every 12 minutes. Expect spectral reinforcements and gravity inversions in the lower vaults.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/80">
                      <span>Threat Level</span>
                      <span className="font-display text-xl text-amber-200">
                        Severe
                      </span>
                    </div>
                    <div className="grid gap-2 text-xs uppercase tracking-[0.3em] text-slate-300/80">
                      <span>Modifiers</span>
                      <ul className="space-y-2 text-[0.7rem] tracking-[0.2em] text-slate-300/70">
                        <li>⚔️ Echoing Foes: Enemies respawn empowered.</li>
                        <li>🌪️ Rift Winds: Movement speed +20% / Control -15%.</li>
                        <li>💎 Crystalline Veins: Harvest gains x2 at great risk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                Core Pillars
              </p>
              <h2 className="font-display text-3xl text-white md:text-4xl">
                Built for daring strategists and lore seekers alike.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/80">
              Every system in Echoes of Aethoria intertwines tactical depth with narrative discovery. Skillful runs unlock new NPC arcs, factions, and power synergies that transform each return to the guildhall.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur transition hover:border-ember-400/40 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/0 opacity-0 transition group-hover:opacity-100" />
                <Icon className="mb-6 size-10 text-amber-200/80 transition group-hover:text-amber-100" />
                <h3 className="font-display text-2xl text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="world"
          className="mt-24 space-y-10 rounded-[2.5rem] border border-white/5 bg-white/5 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                The Realms Await
              </p>
              <h2 className="font-display text-3xl text-white md:text-4xl">
                Explore biomes forged by celestial cataclysms.
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-slate-300/80">
              Each descent redraws the map. Unlock shortcuts, uncover relic-hunting contracts, and leave your mark on persistent guild chronicles that track every triumph and loss.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {biomes.map(({ title, description, accent }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-midnight-800/70 p-8 shadow-lg transition hover:-translate-y-1 hover:border-amber-200/40"
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent}`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25" />
                <h3 className="font-display text-2xl text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="loop" className="mt-20 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                Roguelite Loop
              </p>
              <h2 className="font-display text-3xl text-white md:text-4xl">
                Every expedition reshapes the fate of Aethoria.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/80">
              Runs aren’t resets—they are chapters in a sprawling saga where loot, choices, and even your defeats ripple across the world.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {loop.map(({ title, body }, index) => (
              <div
                key={title}
                className="relative rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur"
              >
                <span className="absolute -top-4 left-8 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-midnight-800/80 font-display text-lg text-amber-200 shadow-glow-arcane">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="roadmap"
          className="mt-20 space-y-8 rounded-[2.5rem] border border-white/5 bg-white/5 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
                Journey Ahead
              </p>
              <h2 className="font-display text-3xl text-white md:text-4xl">
                A live fantasy world guided by its community.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/80">
              Share feedback during alpha, influence balance updates, and help steer seasonal content as part of the Guild Council.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {roadmap.map(({ season, content }) => (
              <div
                key={season}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-midnight-800/70 p-8 shadow-glow-arcane transition hover:-translate-y-1 hover:shadow-glow-ember"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
                  {season}
                </p>
                <p className="text-sm leading-relaxed text-slate-200/80">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[2.5rem] border border-amber-200/30 bg-amber-500/10 p-10 shadow-glow-ember backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">
                Join the Vanguard
              </p>
              <h2 className="font-display text-3xl text-amber-50 md:text-4xl">
                Become a founding guildmaster and secure exclusive relics.
              </h2>
              <p className="text-sm text-amber-100/80">
                Enlist for updates, closed-alpha invites, and unique cosmetic rewards forged for those who answer the first call.
              </p>
            </div>
            <form className="w-full max-w-md space-y-4">
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 focus-within:border-white/40">
                <input
                  type="email"
                  required
                  placeholder="you@valorian.guild"
                  className="h-12 flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-midnight-800 transition hover:bg-white"
                >
                  Enlist
                  <ArrowRightIcon className="size-4" />
                </button>
              </div>
              <p className="text-xs text-amber-100/60">
                We respect your inbox. Unsubscribe anytime with a single click.
              </p>
            </form>
          </div>
        </section>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Echoes of Aethoria. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="transition hover:text-white" href="#">
              Press Kit
            </Link>
            <Link className="transition hover:text-white" href="#">
              Community Discord
            </Link>
            <Link className="transition hover:text-white" href="#">
              Support
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
