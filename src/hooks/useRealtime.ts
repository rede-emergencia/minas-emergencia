'use client';

import { useState, useEffect } from 'react';
import { Point } from '@/types/point';

export interface UseRealtimeOptions {
  limitCount?: number;
  enabled?: boolean;
}

/**
 * Hook to fetch points from the API on mount
 */
export function useRealtime(
  collectionName: string,
  initialPoints: Point[] = [],
  options: UseRealtimeOptions = {}
) {
  const { enabled = true } = options;

  const [points, setPoints] = useState<Point[]>(initialPoints);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const citySlug = collectionName.replace('_pontos', '');

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchPoints() {
      try {
        const res = await fetch(`/api/points?city=${citySlug}`);
        const data = await res.json();
        if (!cancelled && data.success && data.points) {
          setPoints(data.points);
        } else if (!cancelled) {
          setError('Erro ao carregar pontos.');
        }
      } catch {
        if (!cancelled) {
          setError('Erro ao carregar pontos. Recarregue a página.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchPoints();

    return () => { cancelled = true; };
  }, [citySlug, enabled]);

  return {
    points,
    loading,
    error,
    newPointsCount: 0,
    resetNewPointsCount: () => {},
  };
}
