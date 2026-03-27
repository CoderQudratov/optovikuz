import { ExternalLink, MapPin, ChevronRight, Star, Package, Users } from "lucide-react";

const optovikLogo = "/images/optovik-logo-nobg.png";
const tiramisuImg = "/images/tiramisu-nobg.png";
const megaParkImg = "/images/megapark-nobg.png";

const YANDEX_MAP_URL =
  "https://yandex.uz/maps/org/100357560808/?ll=66.975414%2C39.676419&utm_source=share&z=17";

const INSTAGRAM_URL = "https://www.instagram.com/optovikuz";
const MEGAPARK_INSTAGRAM_URL = "https://www.instagram.com/megapark_uz/";
const TELEGRAM_URL = "https://t.me/s/optovikuzsamarkand";
const FACEBOOK_URL = "https://www.facebook.com/optovikuzsamarkand";

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const locations = [
  {
    id: 1,
    name: "MEGA PARK",
    subtitle: "Savdo markazi",
    tag: "3 qavat",
    url: YANDEX_MAP_URL,
    image: megaParkImg,
    redBg: false,
    accent: "rgba(34,197,94,0.15)",
    accentBorder: "rgba(34,197,94,0.25)",
  },
  {
    id: 2,
    name: "Gipermarket OPTOVIK.UZ",
    subtitle: "Ulgurji savdo markazi",
    tag: "Ulgurji",
    url: YANDEX_MAP_URL,
    image: optovikLogo,
    redBg: true,
    accent: "rgba(239,68,68,0.15)",
    accentBorder: "rgba(239,68,68,0.25)",
  },
  {
    id: 3,
    name: "Tiramisu Restaurant",
    subtitle: "Yevropacha taomlar",
    tag: "Restoran",
    url: YANDEX_MAP_URL,
    image: tiramisuImg,
    redBg: false,
    accent: "rgba(251,191,36,0.12)",
    accentBorder: "rgba(251,191,36,0.22)",
  },
];

const instagramAccounts = [
  {
    id: 1,
    handle: "@megapark_uz",
    name: "Mega Park",
    description: "Yangiliklar, aksiyalar va ko'ngilochar tadbirlar",
    url: MEGAPARK_INSTAGRAM_URL,
    followers: "25K+",
    image: megaParkImg,
    redBg: false,
  },
  {
    id: 2,
    handle: "@megapark_uz",
    name: "Tiramisu",
    description: "Mazali taomlar va dam olish maskani",
    url: MEGAPARK_INSTAGRAM_URL,
    followers: "18K+",
    image: tiramisuImg,
    redBg: false,
  },
  {
    id: 3,
    handle: "@optovikuz",
    name: "Optovik.uz",
    description: "Ulgurji mahsulotlar, eng yaxshi narxlar",
    url: INSTAGRAM_URL,
    followers: "42K+",
    image: optovikLogo,
    redBg: true,
  },
];

export default function Home() {
  return (
    <div className="page-bg">
      <div className="relative z-10 max-w-[480px] mx-auto px-4 pt-6 pb-16">

        {/* ── HEADER ───────────────────────────────────────── */}
        <header className="flex items-center justify-between mb-8 fade-in">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex-shrink-0 overflow-hidden"
              style={{ background: "#c41a1a", boxShadow: "0 0 14px rgba(200,30,30,0.35)" }}
            >
              <img src={optovikLogo} alt="Optovik.uz" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-bold text-base leading-none tracking-tight">
                Optovik<span className="text-red-400">.uz</span>
              </p>
              <p className="text-white/35 text-[10px] mt-0.5 leading-none">Samarqand</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
               className="social-icon-btn" aria-label="Telegram">
              <TelegramIcon size={15} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
               className="social-icon-btn" aria-label="Instagram">
              <InstagramIcon size={15} />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
               className="social-icon-btn" aria-label="Facebook">
              <FacebookIcon size={15} />
            </a>
          </div>
        </header>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="text-center mb-8 fade-in-delay-1">
          {/* Avatar */}
          <div className="relative inline-block mb-4">
            <div
              className="w-[96px] h-[96px] rounded-full overflow-hidden mx-auto"
              style={{
                background: "#c41a1a",
                boxShadow: "0 0 0 3px rgba(200,50,50,0.2), 0 0 40px rgba(200,30,30,0.45), 0 0 80px rgba(150,10,10,0.2)",
              }}
            >
              <img src={optovikLogo} alt="Optovik.uz" className="w-full h-full object-cover" />
            </div>
            <div className="verified-badge">✓</div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="status-dot" />
            <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">Faol • Samarqand</span>
          </div>

          {/* Title */}
          <h1 className="font-extrabold text-white leading-tight mb-2">
            <span className="gradient-text text-2xl">@optovikuz</span>
          </h1>
          <p className="text-white/75 text-[15px] font-semibold mb-2">
            Ulgurji xarid qilish — tez, qulay, ishonchli
          </p>
          <p className="text-white/40 text-[13px] leading-relaxed mb-6 max-w-[280px] mx-auto">
            Samarqandning yetakchi ulgurji savdo markazi. Mega Park, restoran va gipermarket — hammasi bir joyda.
          </p>

          {/* Trust stats */}
          <div className="flex gap-2.5 mb-7 fade-in-delay-2">
            <div className="stat-card">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users size={13} style={{ color: "rgba(255,120,120,0.8)" }} />
              </div>
              <p className="text-white font-bold text-lg leading-none">5000+</p>
              <p className="text-white/40 text-[10px] mt-1 leading-none">Mijozlar</p>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Package size={13} style={{ color: "rgba(255,120,120,0.8)" }} />
              </div>
              <p className="text-white font-bold text-lg leading-none">10 000+</p>
              <p className="text-white/40 text-[10px] mt-1 leading-none">Mahsulot</p>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star size={13} style={{ color: "rgba(255,120,120,0.8)" }} />
              </div>
              <p className="text-white font-bold text-lg leading-none">8+</p>
              <p className="text-white/40 text-[10px] mt-1 leading-none">Yil tajriba</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5 fade-in-delay-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-link btn-instagram">
              <span className="btn-icon">
                <InstagramIcon size={18} />
              </span>
              <span>Instagram — @optovikuz</span>
              <ChevronRight size={16} className="btn-chevron" />
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-link btn-telegram">
              <span className="btn-icon">
                <TelegramIcon size={18} />
              </span>
              <span>Telegram kanal</span>
              <ChevronRight size={16} className="btn-chevron" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-link btn-facebook">
              <span className="btn-icon">
                <FacebookIcon size={18} />
              </span>
              <span>Facebook sahifa</span>
              <ChevronRight size={16} className="btn-chevron" />
            </a>
          </div>
        </section>

        {/* ── DIVIDER ───────────────────────────────────────── */}
        <div className="divider my-8 fade-in-delay-3" />

        {/* ── LOCATIONS ────────────────────────────────────── */}
        <section className="mb-8 fade-in-delay-4">
          <div className="mb-5">
            <div className="section-label">
              <MapPin size={11} />
              Bizning manzillar
            </div>
            <h2 className="text-white text-xl font-bold leading-tight">Bizni toping</h2>
            <p className="text-white/35 text-xs mt-1">Samarqand shahri bo'ylab joylashgan</p>
          </div>

          <div className="flex flex-col gap-3">
            {locations.map((loc, i) => (
              <a
                key={loc.id}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card fade-in-delay-${Math.min(i + 4, 6)}`}
                style={{ padding: "14px 16px", textDecoration: "none", display: "block" }}
              >
                <div className="flex items-center gap-3">
                  {/* Image */}
                  <div
                    className="flex-shrink-0 w-[52px] h-[52px] rounded-2xl overflow-hidden"
                    style={{
                      background: loc.redBg ? "#c41a1a" : "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                    }}
                  >
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-[14px] leading-tight truncate">{loc.name}</h3>
                        <p className="text-white/40 text-[12px] mt-0.5">{loc.subtitle}</p>
                      </div>
                      <span
                        className="flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: loc.accent,
                          border: `1px solid ${loc.accentBorder}`,
                          color: "rgba(255,255,255,0.65)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {loc.tag}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="map-pill">
                        <MapPin size={9} />
                        Xaritada ochish
                        <ChevronRight size={9} />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ───────────────────────────────────────── */}
        <div className="divider my-8 fade-in-delay-5" />

        {/* ── INSTAGRAM ────────────────────────────────────── */}
        <section className="fade-in-delay-5">
          <div className="mb-5">
            <div className="section-label">
              <InstagramIcon size={11} />
              Instagram
            </div>
            <h2 className="text-white text-xl font-bold leading-tight">Bizni kuzating</h2>
            <p className="text-white/35 text-xs mt-1">Yangiliklar va aksiyalardan xabardor bo'ling</p>
          </div>

          <div className="flex flex-col gap-3">
            {instagramAccounts.map((acc, i) => (
              <a
                key={acc.id}
                href={acc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card fade-in-delay-${Math.min(i + 5, 6)}`}
                style={{ padding: "14px 16px", textDecoration: "none", display: "block" }}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar with IG border */}
                  <div
                    className="flex-shrink-0 w-[52px] h-[52px] rounded-2xl overflow-hidden p-0.5"
                    style={acc.redBg ? {
                      background: "#c41a1a",
                      border: "1.5px solid rgba(200,60,60,0.45)",
                      boxShadow: "0 4px 14px rgba(180,20,20,0.25)",
                    } : {
                      background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                      boxShadow: "0 4px 14px rgba(220,39,67,0.2)",
                    }}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden" style={{ background: acc.redBg ? "transparent" : "#1a0000" }}>
                      <img src={acc.image} alt={acc.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-[14px] leading-tight">{acc.name}</h3>
                        <p className="text-white/40 text-[12px]">{acc.handle}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="ig-badge">{acc.followers}</span>
                        <ExternalLink size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
                      </div>
                    </div>
                    <p className="text-white/30 text-[11px] mt-1.5 truncate">{acc.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="text-center mt-12 fade-in-delay-6">
          <div className="divider mb-6" />
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0"
              style={{ background: "#c41a1a", opacity: 0.7 }}
            >
              <img src={optovikLogo} alt="Optovik.uz" className="w-full h-full object-cover" />
            </div>
            <p className="text-white/25 text-[11px]">© 2025 Optovik.uz — Samarqand, O'zbekiston</p>
          </div>
          <p className="text-white/12 text-[10px]">Barcha huquqlar himoyalangan</p>
        </footer>

      </div>
    </div>
  );
}
