import React, { useEffect, useState } from "react";
import EmployerService from "../services/EmployerService";
import { Card, Icon } from "semantic-ui-react";

export default function Employers() {
  const [employers, setemployers] = useState([]);

  let employerService = new EmployerService();

  useEffect(() => {
    employerService
      .getEmployers()
      .then((result) => setemployers(result.data.data));
  }, []);

  return (
    <div style={{ justifyContent: "center", marginRight:"200px"}}>
        
      <Card.Group>
        {employers.map((employer) => (
          <Card>
            <Card.Content extra>
              <Card.Header>
                <Icon name="building" /> {employer.companyName}
              </Card.Header>
              <Card.Meta>
                <a>
                  <span className="date">{employer.webAdress}</span>
                </a>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="mail" />
                {employer.employerMail}
              </a>
              <Card.Meta>
                <span className="date">
                  <Icon name="phone" /> {employer.employerPhone}
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
