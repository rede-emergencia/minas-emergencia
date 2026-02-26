import { getAllEnabledCities } from '@/config/cities';
import { CityCard } from './CityCard';

export function CitySelector() {
  const cities = getAllEnabledCities();

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 max-w-xl mx-auto">
      {cities.map((city) => (
        <div key={city.slug} className="w-full sm:w-56">
          <CityCard city={city} />
        </div>
      ))}
    </div>
  );
}
