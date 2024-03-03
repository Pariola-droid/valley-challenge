'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { coerce, z } from 'zod';
import { SettingsFormSchema } from '../../../validation/settings';
import { EMPLOYEE_COUNT_OPTIONS } from '../../../utils/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ctl from '@netlify/classnames-template-literals';

const CompanyInfoSettings = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof SettingsFormSchema>>({
    resolver: zodResolver(SettingsFormSchema),
    defaultValues: {
      companyName: '',
      companyWebsite: '',
      companyLinkedin: '',
      companyIndustry: '',
      employeeCount: '1-10',
      companyDescription: '',
      companyGoals: '',
      headquarters: '',
      fundingRound: '1st round',
      faqs: '',
    },
  });

  function onSubmit(values: z.infer<typeof SettingsFormSchema>) {
    console.log(values);
  }

  const handleSelectProfileImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleResetProfileImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={CompanySettingsContainer}>
      <Form {...form}>
        <form className={FormSection} onSubmit={form.handleSubmit(onSubmit)}>
          <div className={AvatarRowStyles}>
            <div className={AvatarUploadWrapper}>
              <Avatar className={AvatarImgStyles}>
                <AvatarImage
                  src={selectedImage || 'https://github.com/pariola-droid.png '}
                />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className={AvatarActionStyles}>
                <div className={ActionButtonsWrapper}>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={handleResetProfileImage}
                  >
                    Remove
                  </Button>
                  <Button type="button" variant="outline" className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      multiple={false}
                      className={invisibleFileInputStyles}
                      onChange={handleSelectProfileImage}
                    />
                    Change Photo
                  </Button>
                </div>
                <p className="text-sm font-medium text-[rgba(23,23,31,0.40)]">
                  or drag and drop (SVG, PNG, JPG)
                </p>
              </div>
            </div>
            {/*  */}
            <div
              className={`${ActionButtonsWrapper} w-full lg:w-[fit-content] mb-[1.88rem] grid grid-cols-2 lg:mb-0`}
            >
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </div>
          </div>
          {/*  */}
          <fieldset className={FormFieldSection}>
            <div className={DoubleInputStyles}>
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&apos;s Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sixteen Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&apos;s Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://sixteen.life" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={DoubleInputStyles}>
              <FormField
                control={form.control}
                name="companyLinkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&apos;s Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.linkedin.com/company/sixteenlife"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyIndustry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company&apos;s Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Digital Wellbeing" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={SingleInputStyles}>
              <FormField
                control={form.control}
                name="employeeCount"
                render={({ field }) => (
                  <FormItem className="w-full space-y-[1rem]">
                    <FormLabel className="text-[#17171F]">
                      Employee Count
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={EMPLOYEE_COUNT_OPTIONS[0].value}
                        className="flex !space-x-[0.75rem]"
                      >
                        {EMPLOYEE_COUNT_OPTIONS.map((option: any) => (
                          <FormItem
                            key={option.value}
                            className={`flex items-center space-y-0 !px-[0.75rem] !py-[0.5rem] rounded-[6.25rem] cursor-pointer relative !ml-0 ${
                              field.value === option.value
                                ? 'bg-[#17171F] text-white'
                                : 'bg-transparent border border-[rgba(23,23,31,0.10)] text-[#17171F]'
                            }`}
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={option.value}
                                className="absolute left-0 opacity-0 w-full h-full"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={SingleInputStyles}>
              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Company description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Redesign your digital life, reduce your screen time"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your detailed company description
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={SingleInputStyles}>
              <FormField
                control={form.control}
                name="companyGoals"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>What are your company goals?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Help everyone to be more conscious of where they are spending their time"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={SingleInputStyles}>
              <FormField
                control={form.control}
                name="headquarters"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Headquarters</FormLabel>
                    <FormControl>
                      <Input placeholder="Delhi, India" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={DoubleInputStyles}>
              <FormField
                control={form.control}
                name="fundingRound"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funding Round</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={'1st round'}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a funding round" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1st round">1st Round</SelectItem>
                        <SelectItem value="2nd round">2nd Round</SelectItem>
                        <SelectItem value="3rd round">3rd Round</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="faqs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FAQs</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://sixteen.life/faq"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

const CompanySettingsContainer = ctl(`
w-full
`);

const FormSection = ctl(`
w-full
flex
flex-col
items-start
justify-start
`);

const AvatarRowStyles = ctl(`
w-full
flex
flex-col
flex-col-reverse
items-start
justify-between
mb-[3rem]
lg:flex-row
`);

const AvatarUploadWrapper = ctl(`
flex
items-center
justify-start
gap-[1.88rem]
`);

const AvatarImgStyles = ctl(`
w-[6.75rem]
h-[6.75rem]
bg-gray-300
rounded-full
`);

const AvatarActionStyles = ctl(`
flex
flex-col
items-start
justify-start
gap-[0.75rem]
`);

const invisibleFileInputStyles = ctl(`
absolute
top-0
left-0
w-full
h-full
opacity-0
cursor-pointer
`);

const ActionButtonsWrapper = ctl(`
flex
items-center
justify-start
gap-[0.75rem]
`);

const FormFieldSection = ctl(`
w-full
flex
flex-col
items-start
lg:gap-[2.5rem]
gap-[1.88rem]
`);

const DoubleInputStyles = ctl(`
w-full
grid
grid-row-2
gap-[2.5rem]
lg:grid-cols-2
lg:gap-[2.5rem]
`);

const SingleInputStyles = ctl(`
w-full
flex
flex-col
items-start
`);

export default CompanyInfoSettings;
