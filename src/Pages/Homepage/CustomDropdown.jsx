import React from 'react'
import {Form,DropdownButton,Dropdown} from 'react-bootstrap'

export default function CustomDropdown() {
    return (
        <div>
          

<Form.Select aria-label="Default select example" style={{marginTop:'15px',fontSize:'14px'}}>
  <option>select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
 </Form.Select>


{/* <DropdownButton align="end" title="select" id="dropdown-menu-align-end" variant="light">
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>

</DropdownButton> */}
</div>
    )
}
