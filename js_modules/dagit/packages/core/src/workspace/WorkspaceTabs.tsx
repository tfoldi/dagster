import {QueryResult} from '@apollo/client';
import {Box, Tabs} from '@dagster-io/ui';
import * as React from 'react';

import {QueryRefreshCountdown, QueryRefreshState} from '../app/QueryRefresh';
import {TabLink} from '../ui/TabLink';

interface Props<TData> {
  refreshState?: QueryRefreshState;
  queryData?: QueryResult<TData, any>;
  tab: string;
}

export const WorkspaceTabs = <TData extends Record<string, any>>(props: Props<TData>) => {
  const {refreshState, tab} = props;

  return (
    <Box flex={{direction: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
      <Tabs selectedTabId={tab}>
        <TabLink id="jobs" title="Jobs" to="/workspace/jobs" />
        {/* <TabLink id="schedules" title="Schedules" to="/workspace/schedules" />
        <TabLink id="sensors" title="Sensors" to="/workspace/sensors" />
        <TabLink id="graphs" title="Graphs" to="/workspace/graphs" />
        <TabLink id="ops" title="Ops" to="/workspace/ops" /> */}
      </Tabs>
      {refreshState ? (
        <Box padding={{bottom: 8}}>
          <QueryRefreshCountdown refreshState={refreshState} />
        </Box>
      ) : null}
    </Box>
  );
};
