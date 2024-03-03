import { z } from 'zod';

export const SettingsFormSchema = z.object({
  companyName: z.string().trim().min(1, {
    message: 'Company name is required',
  }),
  companyWebsite: z.string().trim().toLowerCase().url({
    message: 'Please enter a valid URL',
  }),
  companyLinkedin: z.string().trim().url({
    message: 'Please enter a valid URL',
  }),
  companyIndustry: z.string().trim().min(1, {
    message: 'Company industry is required',
  }),
  employeeCount: z.enum(['1-10', '10-100', '100-500', '1000+'], {
    required_error: 'You need to select an employee count',
  }),
  companyDescription: z.string().trim().min(1, {
    message: 'Company description is required',
  }),
  companyGoals: z.string().trim().min(1, {
    message: 'Company goals are required',
  }),
  headquarters: z.string().trim().min(1, {
    message: 'Headquarters are required',
  }),
  fundingRound: z.string({
    required_error: 'Please select an a funding round',
  }),
  faqs: z.string().trim().url({
    message: 'Faqs URL is required',
  }),
});
