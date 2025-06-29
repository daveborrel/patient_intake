import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Card, Grid, Typography } from "@mui/material";
import type { Patient } from "../types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface PatientIntakeFormProps {
  onAddPatient: (newPatient: Patient) => void;
}

export default function PatientIntakeForm({
  onAddPatient,
}: PatientIntakeFormProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [insurance, setInsurance] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleSubmit = () => {
    const patient: Patient = {
      name: name,
      age: Number(age),
      insurance: insurance,
      phone: Number(phone),
      email: email,
      date: date,
    };

    console.log(patient);
    onAddPatient(patient);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Patient
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card variant="outlined" sx={style}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Stack spacing={5}>
                <Typography variant="h6" gutterBottom>
                  Name
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Age
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Insurance
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Phone Number
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Date
                </Typography>
              </Stack>
            </Grid>
            <Grid size={6}>
              <Stack spacing={2}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  id="name-field"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setAge(e.target.value)}
                  id="age-field"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setInsurance(e.target.value)}
                  id="insurance-field"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone-number-field"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-field"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => setDate(e.target.value)}
                  id="date-field"
                  label="Outlined"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </Card>
      </Modal>
    </div>
  );
}
