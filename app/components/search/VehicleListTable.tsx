import { Link } from 'react-router-dom';
import {
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button.tsx';
import { formatCents } from '@/lib/formatters';
import type { SearchResponse } from '@/trpc.ts';
import { PaginationButtons } from './PaginationButtons';

type VehicleProps = {
  searchResponse: SearchResponse;
  startDateTime: Date;
  endDateTime: Date;
};

export function VehicleListTable({
  searchResponse,
  startDateTime,
  endDateTime,
}: VehicleProps) {
  return (
    <div className='overflow-x-auto rounded-lg border border-gray-300 shadow-md'>
      <table className='min-w-full table-auto overflow-y-auto sm:text-sm lg:text-base'>
        <TableHeader className='border-b bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 sm:text-base lg:text-base'>
          <TableRow>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'></TableHead>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'>
              Mark
            </TableHead>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'>
              Model
            </TableHead>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'>
              Year
            </TableHead>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'>
              Hourly Price
            </TableHead>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'>
              Max. Capacity
            </TableHead>
            <TableHead className='border-b-2 border-gray-100 px-4 py-2 text-center font-semibold text-black'>
              Book
            </TableHead>
          </TableRow>
        </TableHeader>
        {searchResponse.vehicles.map((vehicle) => {
          const bookNowParams = new URLSearchParams({
            id: vehicle.id,
            start: startDateTime.toISOString(),
            end: endDateTime.toISOString(),
          });
          return (
            <TableBody key={vehicle.id}>
              <TableRow className='bg-[#FFFFFF] text-sm hover:bg-gray-100 sm:text-base'>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  <div className='flex flex-col items-center'>
                    <img
                      src={vehicle.thumbnail_url}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className='w-full max-w-[110px] rounded-full p-4 transition-transform duration-300 ease-in-out hover:scale-150'
                    />
                  </div>
                </TableCell>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  {vehicle.make}
                </TableCell>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  {vehicle.classification}
                </TableCell>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  {vehicle.year}
                </TableCell>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  {formatCents(vehicle.hourly_rate_cents)}
                </TableCell>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  {vehicle.max_passengers}
                </TableCell>
                <TableCell className='border-b-2 border-gray-100 px-4 py-2 text-center'>
                  <Button
                    asChild
                    className='w-full bg-[#bce038] opacity-85 hover:bg-[#d9e972] sm:w-auto'
                  >
                    <Link
                      to={{
                        pathname: 'review',
                        search: bookNowParams.toString(),
                      }}
                    >
                      <h1 className='text-[#343A40]'>Book now</h1>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </table>
      <div className='mb-4 flex w-full justify-center'>
        <PaginationButtons data={searchResponse.pagination} />
      </div>
    </div>
  );
}
