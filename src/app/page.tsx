'use client';

import React, { Fragment } from 'react';
import ctl from '@netlify/classnames-template-literals';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CompanyInfoSettings from '@/components/settings/CompanyInfoSettings';

type SettingsTab =
  | 'your-profile'
  | 'company-info'
  | 'manage-seats'
  | 'not-contact'
  | 'integrations';

const SETTINGS_TAB_ITEMS: Array<{
  label: string;
  value: SettingsTab;
  content: React.ReactElement;
}> = [
  {
    label: 'Your Profile',
    value: 'your-profile',
    content: <div>Make changes to your profile here</div>,
  },
  {
    label: 'Company Info',
    value: 'company-info',
    content: <CompanyInfoSettings />,
  },
  {
    label: 'Manage Seats',
    value: 'manage-seats',
    content: <div>Manage your seats here</div>,
  },
  {
    label: 'Do not Contact',
    value: 'not-contact',
    content: <div>Change your do not contact settings here</div>,
  },
  {
    label: 'Integrations',
    value: 'integrations',
    content: <div>Manage your integrations here</div>,
  },
];

const SettingsPage = () => {
  return (
    <div className={LayoutStyles}>
      <nav className={NavbarStyles}>Navigation</nav>
      <main>
        <div className={SettingsContainerStyles}>
          <h1 className={headingTextStyles}>Settings</h1>
          <Tabs defaultValue="company-info" className={TabContainerStyles}>
            <div className={ScrollableTabStyles}>
              <TabsList className="max-w-[36.3rem] ">
                {SETTINGS_TAB_ITEMS.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <Fragment>
              {SETTINGS_TAB_ITEMS.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  {tab.content}
                </TabsContent>
              ))}
            </Fragment>
          </Tabs>
        </div>
      </main>
      <footer className={FooterStyles}>Footer</footer>
    </div>
  );
};

const LayoutStyles = ctl(`
w-full
min-h-screen
pt-[6.25rem]
relative
`);

const NavbarStyles = ctl(`
w-full
h-[6.25rem]
fixed
top-0
z-50
left-0
border-b
border-muted
bg-white
`);

const FooterStyles = ctl(`  
w-full
h-[5.25rem]
border-t
border-muted
bg-white
`);
//
const SettingsContainerStyles = ctl(`
w-full
h-full
flex
flex-col
items-start
py-[3rem]
pl-[5%]
lg:pl-[7.25rem]
pr-[5%]
lg:pr-[7.5rem]

`);

const headingTextStyles = ctl(`
text-[#17171F]
font-semibold
text-2xl
lg:text-4xl
`);

const TabContainerStyles = ctl(`
w-full
`);

const ScrollableTabStyles = ctl(`
w-full
lg:w-[fit-content]
overflow-x-auto
my-[2rem] 
`);
// lg-rounded-none
// rounded-[0.75rem]

export default SettingsPage;
