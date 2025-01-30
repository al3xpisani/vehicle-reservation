import { trpc } from '@/trpc.ts';
import { useFormContext } from 'react-hook-form';
import { combineDateTime, FormValues } from '@/components/search/form.tsx';
import { useMemo } from 'react';
import { VehicleListTable } from './VehicleListTable';

export function VehicleList() {
  const form = useFormContext<FormValues>();
  const startDate = form.watch('startDate');
  const startTime = form.watch('startTime');
  const endDate = form.watch('endDate');
  const endTime = form.watch('endTime');
  const minPassengers = form.watch('minPassengers');
  const classification = form.watch('classification');
  const make = form.watch('make');
  const price = form.watch('price');
  const page = form.watch('page');

  const startDateTime = useMemo(
    () => combineDateTime(startDate, startTime),
    [startDate, startTime]
  );
  const endDateTime = useMemo(
    () => combineDateTime(endDate, endTime),
    [endDate, endTime]
  );

  const [searchResponse] = trpc.vehicles.search.useSuspenseQuery(
    {
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      page: Number(page),
      passengerCount: Number(minPassengers),
      classification: classification,
      make: make,
      priceMin: price[0],
      priceMax: price[1],
    },
    {
      keepPreviousData: true,
    }
  );

  if (searchResponse.vehicles.length === 0) {
    return (
      <div className='flex h-32 items-center justify-center'>
        <p className='text-muted-foreground'>
          No vehicles found. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <VehicleListTable
      searchResponse={searchResponse}
      startDateTime={startDateTime}
      endDateTime={endDateTime}
    />
  );
}
