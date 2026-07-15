import posthog from "posthog-js";

const KEY = import.meta.env.VITE_POSTHOG_KEY;
const HOST = import.meta.env.VITE_POSTHOG_HOST;

// Only capture in production builds — local dev sessions would otherwise
// pollute PostHog with the developer's own testing traffic.
const enabled = import.meta.env.PROD && Boolean(KEY);

export function initAnalytics() {
  if (!enabled) return;
  posthog.init(KEY, {
    api_host: HOST,
    // We call capture('$pageview') manually on route change instead — this
    // is a client-side router (react-router), so PostHog's default
    // history-based autocapture doesn't see in-app navigations.
    capture_pageview: false,
  });
}

export function capturePageview(path: string) {
  if (!enabled) return;
  posthog.capture("$pageview", { $current_url: window.location.origin + path });
}
