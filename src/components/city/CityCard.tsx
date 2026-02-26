import Link from 'next/link';
import { City } from '@/types/city';

export interface CityCardProps {
  city: City;
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`/${city.slug}`}
      className="group flex items-center justify-between w-full bg-white hover:bg-emergency-50 rounded-xl px-4 py-3 shadow-md hover:shadow-lg border-2 border-transparent hover:border-emergency-400 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-emergency-50 group-hover:bg-emergency-100 rounded-lg flex items-center justify-center text-emergency-600 flex-shrink-0 transition-colors duration-200">
          <MapPinIcon />
        </div>
        <div className="leading-tight">
          <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-emergency-700 transition-colors block">
            {city.name}
          </span>
          <span className="text-xs text-emergency-500 font-medium">Ver pontos de coleta</span>
        </div>
      </div>
      <div className="text-emergency-300 group-hover:text-emergency-500 transition-colors duration-200 ml-3 flex-shrink-0">
        <ArrowRightIcon />
      </div>
    </Link>
  );
}
