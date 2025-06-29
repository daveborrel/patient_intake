import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";

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

export default function PatientIntakeForm() {
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
    // How would I use the text input?
    const patient = {
      name: name,
      age: age,
      insurance: insurance,
      phone: phone,
      email: email,
      date: date,
    };

    console.log(patient);
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
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </Card>
      </Modal>
    </div>
  );
}
