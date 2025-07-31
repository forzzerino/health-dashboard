// normalize.ts

export const normalize = (name: string): string =>
  name.toLowerCase().replace(/\s+/g, "-");

export const normalizeTimestamp = (
  ts: string | number | Date | null | undefined
): string | null => {
  if (!ts) return null;

  try {
    const date = new Date(ts);
    if (isNaN(date.getTime())) return String(ts);

    const yyyy = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const HH = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");

    return `${dd}-${MM}-${yyyy} ${HH}:${mm}`;
  } catch (e) {
    console.error("timestamp parse error:", e);
    return String(ts);
  }
};

export const formatPercent = (value: number | undefined | null): string =>
  value ? value.toFixed(1) : "0";
