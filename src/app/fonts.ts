import localFont from 'next/font/local';

export const NeueMontreal = localFont({
  variable: '--font-neue-montreal',
  src: [
    {
      path: 'fonts/neue-montreal/ppneuemontreal-thin.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/neue-montreal/ppneuemontreal-book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/neue-montreal/ppneuemontreal-italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'fonts/neue-montreal/ppneuemontreal-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/neue-montreal/ppneuemontreal-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
});
