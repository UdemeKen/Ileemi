import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ElectricityOrderSummaryCard from './electricity-order-summary-card'
import CardWrapper from '../auth/card-wrapper'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useForm, FormProvider } from 'react-hook-form'
import ElectricityCardWrapper from './electricity-card-wrapper'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function ElectricityOrderSummaryDesktop() {
  const searchParams = useSearchParams()
  const selectedName = searchParams.get('name') || ''
  const selectedImage = searchParams.get('image') || ''

  const form = useForm({
    defaultValues: {
      meter_type: "",
      meter_account_number: "",
      amount: ""
    }
  })
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Main diagonal curve - curved inward */}
          <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-green-500 via-green-300 to-transparent">
            <div className="absolute top-0 right-0 w-full h-full bg-white rounded-tr-[900px]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className='flex flex-col gap-8 mt-10'>
            <Link href={"/page/electricity/"} className='flex justify-center items-center w-[30px] h-[30px]'>
                <ArrowLeftIcon />
            </Link>
            <div className="flex flex-col justify-center items-center w-full">
                <div className='flex flex-row w-4/5'>
                    <FormProvider {...form}>
                        <ElectricityCardWrapper 
                            title="Payment Details"
                            className='bg-slate-100'>
                            <div className="flex flex-col items-center gap-4 mb-6">
                                <Image 
                                    src={selectedImage} 
                                    alt={selectedName} 
                                    width={70} 
                                    height={70} 
                                    className="rounded-lg"
                                />
                                <h3 className="text-xl font-semibold text-gray-800">{selectedName}</h3>
                            </div>
                            <form className='space-y-[20px]'>
                                <FormField
                                    control={form.control}
                                    name="meter_type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Meter Type</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        className="mt-2 block w-full border-0 py-2.5 pl-3 pr-10 text-gray-900 bg-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
                                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                                    >
                                                        {field.value || "Select meter type"}
                                                    </button>
                                                    {dropdownOpen && (
                                                        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-none shadow-lg">
                                                            <li
                                                                onClick={() => {
                                                                    field.onChange("Prepaid");
                                                                    setDropdownOpen(false);
                                                                }}
                                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                            >
                                                                Prepaid
                                                            </li>
                                                            <li
                                                                onClick={() => {
                                                                    field.onChange("Postpaid");
                                                                    setDropdownOpen(false);
                                                                }}
                                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                                            >
                                                                Postpaid
                                                            </li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="meter_account_number"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Meter/Account Number</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="***********" className='rounded-none'/>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="amount"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Amount (₦)</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="number" placeholder="0.00" className='rounded-none'/>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        );
                                    }}
                                />
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    className="w-1/3"
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button>
                            </form>
                        </ElectricityCardWrapper>
                        <ElectricityCardWrapper 
                            title="Order Summary"
                            className=''>
                                <div className="space-y-[21px] text-center">
                                    <div>
                                        <FormLabel>Meter Type</FormLabel>
                                        <div className="mt-2 p-2 bg-gray-100">
                                            {form.watch("meter_type") || "Not selected"}
                                        </div>
                                    </div>
                                    <div>
                                        <FormLabel>Meter/Account Number</FormLabel>
                                        <div className="mt-2 p-2 bg-gray-100 rounded-none">
                                            {form.watch("meter_account_number") || "Not entered"}
                                        </div>
                                    </div>
                                    <div>
                                        <FormLabel>Amount</FormLabel>
                                        <div className="mt-2 p-2 bg-gray-100 rounded-none">
                                            ₦{form.watch("amount") || "0.00"}
                                        </div>
                                    </div>
                                    <Button 
                                        type="submit" 
                                        className="w-1/3 mt-4"
                                        onClick={form.handleSubmit(onSubmit)}
                                    >
                                        Pay Now
                                    </Button>
                                </div>
                        </ElectricityCardWrapper>
                    </FormProvider>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}
