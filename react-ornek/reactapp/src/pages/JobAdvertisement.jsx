import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";
import "./PageStyle.css";

export default function UserList() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);

  return (
    <div className="job-list" style={{ display: "grid" }}>
      <Button
        style={{ marginTop: "-50px" }}
        color="teal"
        as={NavLink}
        to={"/jobposting"}
      >
        {" "}
        İş İlanı Ekle
      </Button>
      <Table celled width={100}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firma</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Web Adresi </Table.HeaderCell>
            <Table.HeaderCell>Pozisyon </Table.HeaderCell>
            <Table.HeaderCell>Detaylar </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.webAdress}</Table.Cell>
              <Table.Cell>{jobAdvertisement.position.position}</Table.Cell>
              <Table.Cell>
                {" "}
                <Button
                  content="Detaylar"
                  primary
                  as={NavLink}
                  to={`/jobdetails/${jobAdvertisement.jobAdvertisementId}`}
                />{" "}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
