import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PatientIntakeForm from "./PatientIntakeForm";
import type { Patient } from "../types";

interface AdminBarProps {
  onAddPatient: (newPatient: Patient) => void;
}

export default function AdminBar({ onAddPatient }: AdminBarProps) {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid size={8} display="flex" justifyContent="center">
        <PatientIntakeForm onAddPatient={onAddPatient} />
      </Grid>
      <Grid size={8} display="flex" justifyContent="center">
        <Button variant="outlined">Remove Patient</Button>
      </Grid>
    </Grid>
  );
}
