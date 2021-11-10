import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import EmployeeService from "../services/EmployeeService";

export default function Register() {
  let employeeService = new EmployeeService();

  const initialValues = {
    employeeName: "",
    employeeSurname: "",
    employeePassword: "",
    employeeMail: "",
    employeeBirthYear: "",
    employeeTcNo: "",
  };

  const schema = Yup.object({
    employeeName: Yup.string().required("İsim zorunludur"),
    employeeSurname: Yup.string().required("Soyadı zorunludur"),
    employeePassword: Yup.string().required("Şifre zorunludur"),
    employeeMail: Yup.string().required("Mail alanı zorunludur"),
    employeeBirthYear: Yup.string().required("Doğum yılı zorunludur"),
    employeeTcNo: Yup.string().required("Kimlik Numarası zorunludur"),
  });

  return (
    <div style={{ marginRight: "400px", marginTop: "-40px" }}>
      <div
        container-header
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-80px",
        }}
      >
        <strong>KAYIT OL</strong>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          employeeService.registerEmployee(values);
          resetForm();
        }}
      >
        <Form className="ui form" style={{ marginTop: "30px" }}>
          <FormField>
            <Field name="employeeName" placeholder="İsim"></Field>
            <ErrorMessage
              name="employeeName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="employeeSurname" placeholder="Soyadı"></Field>
            <ErrorMessage
              name="employeeSurname"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="employeePassword" placeholder="Şifre"></Field>
            <ErrorMessage
              name="employeePassword"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="employeeMail" placeholder="Mail"></Field>
            <ErrorMessage
              name="employeeMail"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="employeeTcNo" placeholder="Soyadı"></Field>
            <ErrorMessage
              name="employeeTcNo"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="employeeBirthYear" placeholder="Doğum Yılı"></Field>
            <ErrorMessage
              name="employeeBirthYear"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <Button
            type="submit"
            color="green"
            style={{ marginLeft: "250px", width: "200px" }}
          >
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
