import React from 'react'
import {Form, Col} from 'react-bootstrap'
function SearchForm({params, onParamChange}) {
    return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Button onSubmit={onParamChange} value={params.description} name="description" type="text" />
        </Form.Group>
        </Form.Row>.
    </Form>
    )
}

export default SearchForm