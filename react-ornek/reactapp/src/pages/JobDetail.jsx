import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Image, List } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobDetail() {
  let { id } = useParams();
  const [jobDetail, setjobDetail] = useState([]);

  let jobAdvertisementService = new JobAdvertisementService();
  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisementsById(id)
      .then((result) => setjobDetail(result.data.data));
  }, []);

  return (
    <div style={{ marginTop: "-70px" }}>
      
      <Card style={{ width: "600px", height: "500px" }}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header> {jobDetail.employer?.companyName} </Card.Header>
          <Card.Meta>{jobDetail.city}</Card.Meta>
          <Card.Description>{jobDetail.jobDescription}</Card.Description>
          <div className="card-footer">
            <List>
              <List.Item>
                <List.Icon name="money" />
                <List.Content>{jobDetail.salary} </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" />
                <List.Content>{jobDetail.employer?.employerPhone}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:jack@semantic-ui.com">
                    {jobDetail.employer?.employerMail}
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="http://www.semantic-ui.com">
                    {jobDetail.employer?.webAdress}
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className="approve-button">
            <Button basic color="green">
              Başvur
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
