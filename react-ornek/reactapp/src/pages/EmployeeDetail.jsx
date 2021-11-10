import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { List, Card, Icon, Button } from "semantic-ui-react";
import ResumeService from "../services/ResumeService";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employee, setemployee] = useState([]);
  const [language, setlanguage] = useState([]);
  const [experience, setexperience] = useState([]);
  const [link, setlink] = useState([]);
  const [education, seteducation] = useState([]);
  const [coverLetter, setcoverLetter] = useState([]);

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService
      .getResumeById(id)
      .then((result) => setemployee(result.data.data.employee));
  }, []);

  useEffect(() => {
    resumeService
      .getResumeById(id)
      .then((result) => setlanguage(result.data.data.language));
  }, []);

  useEffect(() => {
    resumeService
      .getResumeById(id)
      .then((result) => setexperience(result.data.data.jobExperiences));
  }, []);

  useEffect(() => {
    resumeService
      .getResumeById(id)
      .then((result) => setlink(result.data.data.link));
  }, []);

  useEffect(() => {
    resumeService
      .getResumeById(id)
      .then((result) => seteducation(result.data.data.education));
  }, []);

  useEffect(() => {
    resumeService
      .getResumeById(id)
      .then((result) => setcoverLetter(result.data.data.coverLetters));
  }, []);

  return (
    <div
      style={{
        alignItems: "center",
        marginLeft: "50px",
        marginTop: "-100px",
        
      }}
    >
      <div className="container-header">
        <h1>
          {employee?.employeeName} {employee?.employeeSurname} <Button color="google plus" style={{marginLeft:"230px"}}>Düzenle</Button>
        </h1>
        {coverLetter.map((cv) => (
          <Card style={{ width: "500px" }}>
            <Card.Content>
              <Card.Header>Cover Letter</Card.Header>
              <Card.Description>{cv.summary}</Card.Description>
            </Card.Content>
          </Card>
        ))}

        {experience.map((ex) => (
          <Card style={{ width: "500px" }}>
            <Card.Content>
              <Card.Header>Çalışma Geçmişi</Card.Header>
              <Card.Description>{ex.companyName}</Card.Description>
              <Card.Description>{ex.jobPosition}</Card.Description>
              <Card.Description>{ex.jobStartDay}</Card.Description>
              <Card.Description>{ex.jobDismissDate}</Card.Description>
            </Card.Content>
          </Card>
        ))}

        {language.map((lang) => (
          <Card style={{ width: "500px" }}>
            <Card.Content>
              <Card.Header>Diller</Card.Header>
              <Card.Description>{lang.languageName}</Card.Description>
              <Card.Description>{lang.languageLevel} </Card.Description>
            </Card.Content>
          </Card>
        ))}
        
        {link.map((l) => (
          <Card style={{ width: "500px" }}>
            <Card.Content>
              <Card.Header>Linkedin</Card.Header>
              <Card.Description> <a href="">{l.linkedinLink}</a> </Card.Description>
            </Card.Content>
          </Card>
        ))}
        <h3>Eğitim</h3>
        {education.map((ed) => (
          <List divided relaxed>
            <List.Item>
              <List.Icon
                name="building outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header>{ed.schoolName}</List.Header>
                <List.Description>{ed.schoolDepartmentName}</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                name="calendar times outline"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header>{ed.entryDate}</List.Header>
                <List.Description>{ed.graduationDate}</List.Description>
              </List.Content>
            </List.Item>
          </List>
        ))}
      </div>
    </div>
  );
}
