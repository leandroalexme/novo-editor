
import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Navbar,
  NavbarGroup,
  NavbarDivider,
  Alignment,
  Button,
  Popover,
  Menu,
  MenuItem,
  Position,
} from '@blueprintjs/core';

import { FileMenu } from './file-menu';
import { DownloadButton } from './download-button';
import { UserMenu } from './user-menu';

const Topbar = observer(({ store }) => {
  return (
    <Navbar style={{ height: '50px' }}>
      <NavbarGroup align={Alignment.LEFT}>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginRight: '20px',
          }}
        >
          Design Editor
        </div>
        <FileMenu store={store} />
        <NavbarDivider />
        <DownloadButton store={store} />
      </NavbarGroup>

      <NavbarGroup align={Alignment.RIGHT}>
        <Button
          icon="undo"
          minimal
          onClick={() => store.history.undo()}
          disabled={!store.history.canUndo}
          title="Undo"
        />
        <Button
          icon="redo"
          minimal
          onClick={() => store.history.redo()}
          disabled={!store.history.canRedo}
          title="Redo"
        />
        <NavbarDivider />
        <UserMenu store={store} />
      </NavbarGroup>
    </Navbar>
  );
});

export default Topbar;
