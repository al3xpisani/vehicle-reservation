import { Pagination } from '@/trpc.ts';
import { FormValues } from '@/components/search/form.tsx';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PaginationButtons({ data }: { data: Pagination }) {
  const form = useFormContext<FormValues>();
  const page = form.watch('page');

  return (
    <div className='mt-6 flex items-center justify-center gap-4'>
      <Button
        variant='link'
        onClick={() => form.setValue('page', page - 1)}
        disabled={page === 1}
        className='rounded-lg border border-gray-300 bg-gray-100 p-2 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <ChevronLeft className='h-5 w-5' />
      </Button>
      <span className='text-lg font-semibold'>
        {page} of {data.totalPages} pages
      </span>
      <Button
        variant='link'
        onClick={() => form.setValue('page', page + 1)}
        disabled={page === data.totalPages}
        className='rounded-lg border border-gray-300 bg-gray-100 p-2 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <ChevronRight className='h-5 w-5' />
      </Button>
    </div>
  );
}
