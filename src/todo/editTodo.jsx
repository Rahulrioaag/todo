import { render } from '@testing-library/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
    let {elem, handleDelete,i, handleEdit,newState,handleChange,handleSubmit,state} =props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Edit
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit ToDo Here!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form >
          <input type="text" onChange={handleChange} className='form-control w-50 mx-2' required value={state} placeholder='enter the task' />
          <button onClick={()=>handleEdit(i)} className='btn btn-success'>Update</button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

// render(<Example />);

export default Example