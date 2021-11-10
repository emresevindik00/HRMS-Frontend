import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";

export default function Employees() {
  const [employees, setemployees] = useState([]);

  let employeeService = new EmployeeService();

  
  useEffect(() => {
    employeeService
      .getEmployees()
      .then((result) => setemployees(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group style={{ marginRight: "250px", paddingRight: "10px" }}>
        {employees.map((employee) => (
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              <Card.Header>
                {employee.employeeName} {employee.employeeSurname}
              </Card.Header>
              <Card.Meta>{employee.employeeMail}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                
                  <Button basic color="green"
                  as = {NavLink}
                  to={`/employees/${employee.id}`}
                  >
                    İş Arayan Profilini Gör
                  </Button>
                
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
