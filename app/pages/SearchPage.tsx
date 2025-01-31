import { ErrorFallback } from '@/components/ErrorFallback';
import { Button } from '@/components/ui/button.tsx';
import { Form } from '@/components/ui/form.tsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { roundToNearest30Minutes } from '@/lib/times.ts';
import { addDays, addHours, format } from 'date-fns';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/components/search/form.tsx';
import { AdditionalFilters } from '@/components/search/AdditionalFilters.tsx';
import { VehicleList } from '@/components/search/VehicleList.tsx';
import { TimeRangeFilters } from '@/components/search/TimeRangeFilters.tsx';

export function SearchPage() {
  const [initialStartDateAndTime] = useState(() =>
    roundToNearest30Minutes(addHours(new Date(), 1))
  );

  const [initialEndDateAndTime] = useState(() =>
    addDays(initialStartDateAndTime, 1)
  );

  const form = useForm<FormValues>({
    defaultValues: {
      startDate: initialStartDateAndTime,
      startTime: format(initialStartDateAndTime, 'HH:mm'),
      endDate: initialEndDateAndTime,
      endTime: format(initialEndDateAndTime, 'HH:mm'),
      minPassengers: 1,
      classification: [],
      make: [],
      price: [10, 100],
      page: 1,
    },
  });

  const filters = (
    <ErrorBoundary
      fallback={<ErrorFallback message='Failed to load filters' />}
    >
      <Suspense
        fallback={
          <div className='flex flex-col gap-4'>
            <Skeleton className='h-[100px] w-full rounded' />
            <Skeleton className='h-[100px] w-full rounded' />
            <Skeleton className='h-[100px] w-full rounded' />
          </div>
        }
      >
        <AdditionalFilters />
      </Suspense>
    </ErrorBoundary>
  );

  return (
    <Form {...form}>
      <body className={`scrollbar-hide bg-[#F8F9FA] text-gray-800`}>
        <div className='container mx-auto flex flex-col bg-gradient-to-b pb-8'>
          <div className='grid grid-flow-row grid-cols-12'>
            <div className='top-0 z-10 col-span-12 grid grid-cols-subgrid border-b bg-[#F8F9FA] bg-background/80 pb-4 pt-12 backdrop-blur-md md:sticky'>
              <div className='col-span-12 flex items-end px-4 md:col-span-3'>
                <div className='flex w-full flex-col items-center'>
                  <img
                    src='/logo.svg'
                    alt='Workoast Logo'
                    width={64}
                    className='box-shadow-[inset_0_0_0_2px_black] rounded-full border-2 border-black bg-black transition-transform duration-300 ease-in-out hover:scale-125'
                  />
                  <h1 className='whitespace-nowrap text-center text-2xl font-semibold tracking-tight text-[#343A40]'>
                    Workoast Wheels
                  </h1>
                </div>
              </div>
              <div className='col-span-12 mt-4 px-4 md:col-span-9 md:mt-0'>
                <TimeRangeFilters />
              </div>
            </div>

            <div className='col-span-12 flex w-full flex-col items-center px-4 md:col-span-3 md:py-8'>
              <div className='mt-4 md:hidden'>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant='outline'>Filters</Button>
                  </SheetTrigger>
                  <SheetContent>{filters}</SheetContent>
                </Sheet>
              </div>
              <div className='hidden md:block'>{filters}</div>
            </div>

            <div className='col-span-12 px-4 py-8 lg:col-span-9'>
              <ErrorBoundary
                fallback={<ErrorFallback message='Failed to load vehicles' />}
              >
                <Suspense
                  fallback={
                    <div className='flex flex-col gap-4'>
                      <Skeleton className='h-[178px] w-full rounded' />
                      <Skeleton className='h-[178px] w-full rounded' />
                      <Skeleton className='h-[178px] w-full rounded' />
                      <Skeleton className='h-[178px] w-full rounded' />
                    </div>
                  }
                >
                  <VehicleList />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </body>
    </Form>
  );
}
