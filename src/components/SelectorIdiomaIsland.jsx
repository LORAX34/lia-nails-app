import { h } from "preact";
import { useState } from "preact/hooks";

const languages = [
  { code: "pt", name: "Português", flag: "🇵🇹", path: "/" },
  { code: "en", name: "English", flag: "🇺🇸", path: "/en/" },
  { code: "es", name: "Español", flag: "🇪🇸", path: "/es/" },
];

function getCurrentLang(pathname) {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/es")) return "es";
  return "pt";
}
export default function SelectorIdiomaIsland() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const currentLang = getCurrentLang(pathname);
  const pathWithoutLang = pathname.replace(/^\/(en|es)/, "") || "/";

  const handleSelect = (lang) => {
    let target =
      lang.code === "pt"
        ? pathWithoutLang
        : lang.path.slice(0, -1) + pathWithoutLang;
    setLoading(true);
    setTimeout(() => {
      window.location.href = target;
    }, 300);
    setOpen(false);
  };

  return (
    <div class="relative z-50">
      {/* Loader overlay */}
      {loading && (
        <div class="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[9999] transition-opacity duration-200">
          <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
        </div>
      )}
      <div class="relative inline-block dropdown">
        <button
          class="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 backdrop-blur-sm border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm text-gray-700 shadow-sm hover:bg-opacity-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          id="languageBtn"
          onClick={() => setOpen((o) => !o)}
        >
          <span class="flex items-center gap-1">
            <span class="text-base leading-none">
              {languages.find((lang) => lang.code === currentLang)?.flag}
            </span>
            <span class="text-xs font-semibold uppercase tracking-wide">
              {currentLang}
            </span>
          </span>
          <svg
            class={`w-3 h-2 transition-transform duration-200 text-gray-500 chevron${
              open ? " rotate-180" : ""
            }`}
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          class={`absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-200 mt-1 overflow-hidden dropdown-menu min-w-max${
            open
              ? " opacity-100 visible translate-y-0"
              : " opacity-0 invisible translate-y-1"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              class={`flex items-center gap-3 px-4 py-3 transition-all duration-150 text-sm font-medium no-underline hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${
                lang.code === currentLang
                  ? "bg-primary bg-opacity-10 text-secondary font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => handleSelect(lang)}
              tabIndex={0}
            >
              <span class="text-base leading-none">{lang.flag}</span>
              <span class="whitespace-nowrap">{lang.name}</span>
              {lang.code === currentLang && (
                <svg
                  class="w-4 h-4 text-primary ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
