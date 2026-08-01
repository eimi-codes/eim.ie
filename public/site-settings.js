(function () {
  "use strict";

  const storageKey = "eim-ie-site-settings-v1";
  const defaults = {
    font: "default",
    size: "100",
    theme: "reactive",
    width: "68",
    spacing: "standard",
  };
  const legacyThemes = {
    evergreen: "dark",
    "contrast-dark": "high-contrast",
    "contrast-light": "monochrome",
  };
  const allowed = {
    font: new Set(["default", "atkinson", "anois", "gentium", "lexend", "opendyslexic", "opensans", "sourceserif", "system"]),
    size: new Set(["100", "125", "150", "200"]),
    theme: new Set(["light", "dark", "reactive", "high-contrast", "monochrome"]),
    width: new Set(["55", "68", "80"]),
    spacing: new Set(["standard", "relaxed"]),
  };
  const deviceScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function normalizeSetting(key, value) {
    const normalized = key === "theme" && legacyThemes[value] ? legacyThemes[value] : String(value);
    return allowed[key].has(normalized) ? normalized : defaults[key];
  }

  function readSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return Object.fromEntries(Object.entries(defaults).map(([key, fallback]) => [
        key,
        saved[key] === undefined ? fallback : normalizeSetting(key, String(saved[key])),
      ]));
    } catch (_error) {
      return { ...defaults };
    }
  }

  function applySettings(settings) {
    const root = document.documentElement;
    Object.entries(settings).forEach(([key, value]) => {
      root.dataset[key] = value;
    });
    updateThemeColor(settings.theme);
  }

  function updateThemeColor(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const resolvedTheme = theme === "reactive" ? (deviceScheme.matches ? "dark" : "light") : theme;
    meta.content = resolvedTheme === "light" || resolvedTheme === "monochrome" ? "#FFFFFF" :
      resolvedTheme === "dark" ? "#1C3A2E" : "#000000";
  }

  function saveSettings(settings) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(settings));
    } catch (_error) {
      // The settings still apply for this page when storage is unavailable.
    }
  }

  let settings = readSettings();
  applySettings(settings);

  const handleDeviceSchemeChange = function () {
    if (settings.theme === "reactive") updateThemeColor(settings.theme);
  };
  if (typeof deviceScheme.addEventListener === "function") {
    deviceScheme.addEventListener("change", handleDeviceSchemeChange);
  } else if (typeof deviceScheme.addListener === "function") {
    deviceScheme.addListener(handleDeviceSchemeChange);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("site-settings-form");
    const reset = document.getElementById("site-settings-reset");
    const status = document.getElementById("settings-status");
    if (!form || !reset || !status) return;

    function announce(irish, english) {
      const irishText = document.createElement("span");
      const englishText = document.createElement("span");
      irishText.lang = "ga";
      irishText.textContent = irish;
      englishText.lang = "en";
      englishText.textContent = english;
      status.replaceChildren(irishText, " | ", englishText);
    }

    Object.entries(settings).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });

    form.addEventListener("change", function (event) {
      const control = event.target;
      if (!control.name || !allowed[control.name] || !allowed[control.name].has(control.value)) return;
      settings = { ...settings, [control.name]: control.value };
      applySettings(settings);
      saveSettings(settings);
      announce("Sábháladh na roghanna.", "Settings saved.");
    });

    reset.addEventListener("click", function () {
      settings = { ...defaults };
      applySettings(settings);
      try {
        localStorage.removeItem(storageKey);
      } catch (_error) {
        // Reset still applies for this page when storage is unavailable.
      }
      Object.entries(settings).forEach(([key, value]) => {
        if (form.elements[key]) form.elements[key].value = value;
      });
      announce("Athshocraíodh na roghanna.", "Settings reset.");
    });
  });
}());
