const DOWNLOAD_KEY = 'expensa_downloads';
const BASE_DOWNLOADS = 121;

export function getDownloadCount(): number {
  if (typeof window === 'undefined') return BASE_DOWNLOADS;
  const countStr = localStorage.getItem(DOWNLOAD_KEY);
  if (countStr === null) {
    localStorage.setItem(DOWNLOAD_KEY, BASE_DOWNLOADS.toString());
    return BASE_DOWNLOADS;
  }
  const count = parseInt(countStr, 10);
  return isNaN(count) ? BASE_DOWNLOADS : count;
}

export function incrementDownloadCount(): number {
  if (typeof window === 'undefined') return BASE_DOWNLOADS;
  const current = getDownloadCount();
  const next = current + 1;
  localStorage.setItem(DOWNLOAD_KEY, next.toString());
  return next;
}
