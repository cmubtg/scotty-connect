import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = { // set properties for 
  // modal's container (position, size, color, border) 
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() { // child modal --> nested modal
  const [open, setOpen] = React.useState(false); // if child modal closed/ open
  const handleOpen = () => { // func to set open to true
    setOpen(true);
  };
  const handleClose = () => { // func to set open to false
    setOpen(false);
  };
 
  return ( // if button clicked opens child modal 
    <React.Fragment> 
      <Button onClick={handleOpen}>another one</Button> 
      <Modal
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Modal in a modal</h2>
          <p id="child-modal-description">
            notorius optimistic poor quiet rat soggy tall ukelele.
          </p>
          <Button onClick={handleClose}>Close this modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() { // main modal that includes child
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div // div for wrapper so that in the center 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">My modal for BTG</h2>
          <p id="parent-modal-description">
            apple banana carrot dog egg frog goat hello igloo joke k lmao man.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ChildModal />
            <Button onClick={handleClose}
            sx = {{ 
              '&:hover':{
                backgroundColor:"pink", // edited color of hover
              },
            }}
            >Close modal</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
