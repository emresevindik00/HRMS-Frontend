import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormField } from "semantic-ui-react";

export default function SignIn() {
  const initialValues = {
    employeeName: "",
    employeeSurname: "",
    employeePassword: "",
    employeeMail: "",
    employeeBirthYear: "",
  };

  const schema = Yup.object({
    employeeName: Yup.string().required("İsim zorunludur"),
    employeePassword: Yup.string().required("Şifre zorunludur"),
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
        <strong>GİRİŞ YAP</strong>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="ui form" style={{ marginTop: "30px" }}>
          <FormField>
            <Field name="employeeName" placeholder="İsim"></Field>
          </FormField>
          <FormField>
            <Field name="employeePassword" placeholder="Şifre"></Field>
          </FormField>

          <Button
            type="submit"
            color="green"
            style={{ marginLeft: "250px", width: "200px" }}
          >
            Giris Yap
          </Button>

          <Button
            type="submit"
            color="google plus"
            style={{ marginLeft: "250px", width: "200px" , marginTop:"20px"}}
          >
            İşveren Girişi
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
