<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Idiomas disponibles
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  // Idioma seleccionado (por defecto: portugués)
  export const currentLang = writable('pt');

  // Cargar idioma guardado en localStorage (si existe)
  onMount(() => {
    const saved = localStorage.getItem('lang');
    if (saved && languages.some(l => l.code === saved)) {
      currentLang.set(saved);
    }
  });

  // Cambiar idioma y guardar en localStorage
  function selectLang(code) {
    currentLang.set(code);
    localStorage.setItem('lang', code);
  }
</script>

<div class="relative z-50">
  <div class="relative inline-block dropdown">
    <button
      class="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-90 backdrop-blur-sm border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 font-medium text-sm text-gray-700 shadow-sm hover:bg-opacity-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      aria-haspopup="listbox"
      aria-expanded="false"
      on:click={() => $dropdownOpen = !$dropdownOpen}
    >
      <span class="flex items-center gap-1">
        <span class="text-base leading-none">
          {languages.find(lang => lang.code === $currentLang)?.flag}
        </span>
        <span class="text-xs font-semibold uppercase tracking-wide">
          {$currentLang}
        </span>
      </span>
      <svg class="w-3 h-2 transition-transform duration-200 text-gray-500 chevron" viewBox="0 0 12 8" fill="none">
        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </button>
    <div class="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 overflow-hidden min-w-max">
      {#each languages as lang}
        <a
          href="#"
          class="flex items-center gap-3 px-4 py-3 transition-all duration-150 text-sm font-medium no-underline hover:bg-gray-50 focus:outline-none focus:bg-gray-50 {lang.code === $currentLang ? 'bg-primary bg-opacity-10 text-secondary font-semibold' : 'text-gray-700'}"
          on:click|preventDefault={() => selectLang(lang.code)}
        >
          <span class="text-base leading-none">{lang.flag}</span>
          <span class="whitespace-nowrap">{lang.name}</span>
          {#if lang.code === $currentLang}
            <svg class="w-4 h-4 text-primary ml-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          {/if}
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .dropdown.open .chevron {
    transform: rotate(180deg);
  }
  .dropdown.open .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    .dropdown button {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }
    .dropdown-menu a {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
    }
  }
</style>
