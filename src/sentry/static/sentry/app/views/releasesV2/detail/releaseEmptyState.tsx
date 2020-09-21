import React from 'react';

import EmptyStateWarning from 'app/components/emptyStateWarning';
import {Panel, PanelBody} from 'app/components/panels';

type Props = Pick<React.ComponentProps<typeof EmptyStateWarning>, 'withIcon'> & {
  children: React.ReactNode;
};

const ReleaseEmptyState = ({withIcon, children}: Props) => (
  <Panel>
    <PanelBody>
      <EmptyStateWarning small withIcon={withIcon}>
        {children}
      </EmptyStateWarning>
    </PanelBody>
  </Panel>
);

export default ReleaseEmptyState;
