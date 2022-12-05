import Dropdown from 'react-bootstrap/Dropdown';

function State() {
  return (
    <>

      <Dropdown className="d-lg-inline bg-primary" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
            State
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/about">Maharastra</Dropdown.Item><br/>
          <Dropdown.Item href="/about">TamilNadu</Dropdown.Item><br/>
          <Dropdown.Item href="/about">WestBengal</Dropdown.Item><br/>
        </Dropdown.Menu>
      </Dropdown>


      
    </>
  );
}

export default State;