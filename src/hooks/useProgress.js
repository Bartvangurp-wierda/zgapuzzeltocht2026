import { useState, useCallback } from "react";

const STORAGE_KEY = "llt_progress";

const DEFAULT_PROGRESS = {
  pinVerified: false,
  welcomeSeen: false,
  currentStopIndex: 0,
  screen: "pin",
  wrongAttempts: {},
  score: 0,
  finished: false,
  debugMode: false,
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_PROGRESS, ...JSON.parse(raw) } : null;
  } catch {
    return null;
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function useProgress() {
  const [progress, setProgressState] = useState(() => {
    return (
      loadProgress() || { ...DEFAULT_PROGRESS }
    );
  });

  const update = useCallback((patch) => {
    setProgressState((prev) => {
      const next = { ...prev, ...patch };
      saveProgress(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProgressState({ ...DEFAULT_PROGRESS });
  }, []);

  return { progress, update, reset };
}
