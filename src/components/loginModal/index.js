import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormLogin from "../FormLogin"


export default function LoginModal() {
  const rootRef = React.useRef(null);

  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: 'relative',
            width: 300,
            height: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            borderRadius: 2,
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          <FormLogin/>
        </Box>
      </Modal>
    </Box>
  );
}