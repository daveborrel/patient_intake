import { Container, Stack } from "@mui/material";
import PatientTable from "./PatientTable";
import AdminBar from "./AdminBar";
import { useEffect, useState } from "react";
import type { Patient } from "../types";

export default function PatientPage() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const storedPatients = localStorage.getItem("patients");

    if (storedPatients) {
      setPatients(JSON.parse(storedPatients));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (newPatient: Patient) => {
    // In setPatients, we pass in a new function
    // This function will take the prevPatients as the parameter
    // [...prevPatients, newPatient]
    // ...prevPatients takes all of the elements
    // rest of the line creates a new array with newPatient at the end.
    setPatients((prevPatients) => [...prevPatients, newPatient]);
  };

  return (
    <Container>
      <Stack spacing={2}>
        <AdminBar onAddPatient={addPatient} />
        <PatientTable patients={patients} />
      </Stack>
    </Container>
  );
}
