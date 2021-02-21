import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Link, matchPath, MemoryRouter, Redirect, Route, useLocation } from 'react-router-dom';
import { uid } from 'react-uid';
import { Badge, Stack, Tab, Tabs, TabsProps } from '..';

export default {
  title: 'Tabs',
  component: Tabs,
  subcomponents: { Tab },
} as Meta<TabsProps>;

export const Usage: Story<TabsProps> = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const tabs = Array(3)
    .fill('Tab')
    .map((label, i) => (
      <Tab key={uid(label, i)} isSelected={tabIndex === i} onClick={() => setTabIndex(i)}>
        {label} {i}
      </Tab>
    ));

  return (
    <>
      <Tabs {...props}>{tabs}</Tabs>
      <div>{tabIndex}</div>
    </>
  );
};

export const Variants: Story<TabsProps> = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const tabs = Array(3)
    .fill('Tab')
    .map((label, i) => (
      <Tab key={uid(label, i)} isSelected={tabIndex === i} onClick={() => setTabIndex(i)}>
        {label} {i}
      </Tab>
    ));

  return (
    <Stack spacing={8}>
      <Tabs {...props} variant="line">
        {tabs}
      </Tabs>
      <Tabs {...props} variant="enclosed">
        {tabs}
      </Tabs>
      <Tabs {...props} variant="pill">
        {tabs}
      </Tabs>
    </Stack>
  );
};
export const Disabled: Story<TabsProps> = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const tabs = Array(3)
    .fill('Tab')
    .map((label, i) => (
      <Tab key={uid(label, i)} isDisabled={i === 1} isSelected={tabIndex === i} onClick={() => setTabIndex(i)}>
        {label} {i}
      </Tab>
    ));

  return (
    <>
      <Tabs {...props}>{tabs}</Tabs>
      <div>{tabIndex}</div>
    </>
  );
};

const RouteAwareTabs: React.FC<TabsProps> = (props) => {
  const { pathname } = useLocation();
  const isSelected = React.useCallback((path: string) => !!matchPath(pathname, { path }), [pathname]);

  return (
    <Tabs {...props}>
      <Tab as={Link} to="/overview" isSelected={isSelected('/overview')}>
        Overview
      </Tab>
      <Tab as={Link} to="/sales" isSelected={isSelected('/sales')}>
        Sales
        <Badge sx={{ ml: 1.5 }}>6</Badge>
      </Tab>
      <Tab as={Link} to="/settings" isSelected={isSelected('/settings')}>
        Settings
      </Tab>
    </Tabs>
  );
};

export const WithReactRouter: Story<TabsProps> = (props) => (
  <MemoryRouter>
    <RouteAwareTabs {...props} />

    <div>
      <Route path="/overview" render={() => <div>overview</div>} />
      <Route path="/sales" render={() => <div>sales</div>} />
      <Route path="/settings" render={() => <div>settings</div>} />

      {/* Fallback default route */}
      <Route render={() => <Redirect to="/overview" />} />
    </div>
  </MemoryRouter>
);
