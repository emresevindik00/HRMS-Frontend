import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormField, Label } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JobPosting() {
  const initialValues = {
    city: "",
    expirationDate: "",
    jobDescription: "",
    neededEmployee: "",
    salary: "",
    position: {
      position: "",
    },
    employer: {
      companyName: "",
      employerMail: "",
      employerPhone: "",
      webAdress: "",
    },
  };

  const validationSchema = Yup.object({
    city: Yup.string().required("Şehir Alanı Gereklidir"),
    expirationDate: Yup.date().required("Tarih Alanı Gereklidir"),
    jobDescription: Yup.string().required("Açıklama Alanı Gereklidir"),
    neededEmployee: Yup.number().required("Gerekli Pozisyon Alanı Gereklidir"),
    salary: Yup.string().required("Maaş Alanı Gereklidir"),

    position: Yup.object({
        id:Yup.number().required("Pozisyon ID'si gereklidir"),
      position: Yup.string().required("Pozisyon Gereklidir"),
    }),

    employer: Yup.object({
      employerId: Yup.number().required("ID Alanı Gereklidir"),
      companyName: Yup.string().required("Şirket Adı Gereklidir"),
      employerMail: Yup.string().required("Mail Alanı Gereklidir"),
      employerPhone: Yup.string().required("Telefon Alanı Gereklidir"),
      webAdress: Yup.string().required("Site Alanı Gereklidir"),
    }),
  });

  let jobAdvertisementService = new JobAdvertisementService();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          jobAdvertisementService
            .addJobAdvertisement(values)
            .then(toast.success("İş İlanı Eklendi!"))
        }
      >
        <Form
          className="ui form"
          style={{ width: "600px", marginTop: "-70px" }}
        >
          <FormField >
            <strong>Şirket Adı</strong>
            <Field name="employer.companyName" placeholder="Şirket Adı"></Field>
            <ErrorMessage
              name="employer.companyName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Şirket ID</strong>
            <Field name="employer.employerId" placeholder="Şirket ID"></Field>
            <ErrorMessage
              name="employer.employerId"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Mail</strong>
            <Field name="employer.employerMail" placeholder="Mail"></Field>
            <ErrorMessage
              name="employer.employerMail"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField>
            <strong>Telefon</strong>
            <Field name="employer.employerPhone" placeholder="Telefon"></Field>
            <ErrorMessage
              name="employer.employerPhone"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Web Adresi</strong>
            <Field name="employer.webAdress" placeholder="Web Adresi"></Field>
            <ErrorMessage
              name="employer.webAdress"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Pozisyon</strong>
            <Field name="position.position" placeholder="Pozisyon"></Field>
            <ErrorMessage
              name="position.position"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Pozisyon ID</strong>
            <Field name="position.id" placeholder="Pozisyon ID"></Field>
            <ErrorMessage
              name="position.id"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Şehir</strong>
            <Field name="city" placeholder="Şehir"></Field>
            <ErrorMessage
              name="city"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Son Tarih</strong>
            <Field name="expirationDate" placeholder="Son Tarih"></Field>
            <ErrorMessage
              name="expirationDate"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>İş hakkında açıklama</strong>
            <Field
              name="jobDescription"
              placeholder="İş hakkında açıklama..."
            ></Field>
            <ErrorMessage
              name="jobDescription"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Gerekli Personel</strong>
            <Field name="neededEmployee" placeholder="Gerekli Personel"></Field>
            <ErrorMessage
              name="neededEmployee"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <strong>Maaş</strong>
            <Field name="salary" placeholder="Maaş"></Field>
            <ErrorMessage
              name="salary"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <Button type="submit" style={{ width: "600px" }} color="linkedin">
            Gönder
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
