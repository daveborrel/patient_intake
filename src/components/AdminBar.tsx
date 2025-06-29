import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PatientIntakeForm from "./PatientIntakeForm";

export default function AdminBar() {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid size={8} display="flex" justifyContent="center">
        <PatientIntakeForm />
      </Grid>
      <Grid size={8} display="flex" justifyContent="center">
        <Button variant="outlined">Remove Patient</Button>
      </Grid>
    </Grid>
  );
}
