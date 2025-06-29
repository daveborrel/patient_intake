import { Container, Stack } from "@mui/material";
import PatientTable from "./PatientTable";
import AdminBar from "./AdminBar";

export default function PatientPage() {
  return (
    <Container>
      <Stack spacing={2}>
        <AdminBar />
        <PatientTable />
      </Stack>
    </Container>
  );
}
