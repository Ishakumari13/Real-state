import Dropdown from 'react-bootstrap/Dropdown';

function Location() {
  return (
    <>

      <Dropdown className="d-inline bg-primary" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
            Cities
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/about">Mumbai</Dropdown.Item><br/>
          <Dropdown.Item href="/about">Chennai</Dropdown.Item><br/>
          <Dropdown.Item href="/about">Kolkata</Dropdown.Item><br/>
        </Dropdown.Menu>
      </Dropdown>


      
    </>
  );
}

export default Location;