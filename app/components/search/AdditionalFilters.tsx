import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/components/search/form.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form.tsx';

export const AdditionalFilters = () => {
  const form = useFormContext<FormValues>();
  const { setValue, reset } = form;
  const vehiclesMakes = [
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Ford',
    'Honda',
    'Hyundai',
    'Jeep',
    'Mazda',
    'Mercedes-Benz',
    'Nissan',
    'Toyota',
    'Volkswagen',
  ];
  const vehicleClass = [
    'Compact',
    'Luxury',
    'Luxury SUV',
    'Minivan',
    'Off-Road SUV',
    'SUV',
    'Sports',
    'Subcompact',
  ];
  const resetExtraFilter = () => {
    reset();
  };

  return (
    <div className='w-64 space-y-4 rounded-lg border bg-[#FFFFFF] p-4 shadow-md'>
      <h2 className='text-center text-xl font-semibold text-[#6C757D]'>
        Narrow Your Search
      </h2>
      <Accordion type='multiple' className='space-y-2'>
        <AccordionItem value='price'>
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='price'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Select Price Range</FormLabel>
                      <FormControl>
                        <div>
                          <Slider
                            id='priceSlider'
                            defaultValue={[10, 100]}
                            value={field.value}
                            onValueChange={(value) => {
                              field.onChange(value);
                              if (value.length === 2) {
                                setValue('price', value as [number, number]);
                              }
                            }}
                            min={10}
                            max={100}
                            step={10}
                            className='mb-2 mt-2'
                          />
                          <div className='flex justify-between text-sm text-muted-foreground'>
                            <span>${field.value?.[0] || 10}</span>
                            <span>${field.value?.[1] || 100}</span>
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <Accordion type='multiple' className='space-y-2'>
          <AccordionItem value='passenter-count'>
            <AccordionTrigger>Passenger Count</AccordionTrigger>
            <AccordionContent>
              <div className='space-y-4'>
                <FormField
                  control={form.control}
                  name='minPassengers'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Select Passenger Count</FormLabel>
                        <FormControl>
                          <div>
                            <Slider
                              id='passengerSlider'
                              defaultValue={[1]}
                              value={[field.value]}
                              onValueChange={(value) => {
                                field.onChange(value);
                                setValue('minPassengers', value[0]);
                              }}
                              min={1}
                              max={20}
                              step={1}
                              className='mb-2 mt-2'
                            />
                            <div className='flex justify-between text-sm text-muted-foreground'>
                              <span>{field?.value || 1}</span>
                              <span>20</span>
                            </div>
                          </div>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <AccordionItem value='vehicle-make'>
          <AccordionTrigger>Vehicle Make</AccordionTrigger>
          <AccordionContent>
            <FormField
              control={form.control}
              name='make'
              render={({ field }) => {
                const selectedvehiclesMakes = form.watch('make'); //field.value || [];
                const handleCheckboxChange = (item: string) => {
                  const updatedValues = selectedvehiclesMakes.includes(item)
                    ? selectedvehiclesMakes.filter((c) => c !== item)
                    : [...selectedvehiclesMakes, item];
                  field.onChange(updatedValues);
                  setValue('make', updatedValues);
                };
                return (
                  <FormItem>
                    <FormControl>
                      <div>
                        {vehiclesMakes.map((item) => (
                          <div
                            key={item}
                            className='flex items-center space-x-2 space-y-2'
                          >
                            <Checkbox
                              id={item}
                              value={item}
                              checked={selectedvehiclesMakes.includes(item)}
                              onCheckedChange={() => handleCheckboxChange(item)}
                            />
                            <Label htmlFor={item}>{item}</Label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='vehicle-class'>
          <AccordionTrigger>Vehicle Class</AccordionTrigger>
          <AccordionContent>
            <FormField
              control={form.control}
              name='classification'
              render={({ field }) => {
                const selectedvehiclesClass = form.watch('classification');
                const handleCheckboxChange = (item: string) => {
                  const updatedValues = selectedvehiclesClass.includes(item)
                    ? selectedvehiclesClass.filter((c) => c !== item)
                    : [...selectedvehiclesClass, item];
                  field.onChange(updatedValues);
                  setValue('classification', updatedValues);
                };
                return (
                  <FormItem>
                    <FormControl>
                      <div>
                        {vehicleClass.map((item) => (
                          <div
                            key={item}
                            className='flex items-center space-x-2 space-y-2'
                          >
                            <Checkbox
                              id={item}
                              value={item}
                              checked={selectedvehiclesClass.includes(item)}
                              onCheckedChange={() => handleCheckboxChange(item)}
                            />
                            <Label htmlFor={item}>{item}</Label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        variant='secondary'
        onClick={resetExtraFilter}
        className='mt-4 w-full'
      >
        Reset Filters
      </Button>
    </div>
  );
};
