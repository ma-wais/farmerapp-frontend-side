import { Box, Container } from "@mui/material";
import Sidebar from "../../components/web/Sidebar";
import Navbar from "../../components/web/Navbar";

export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Sidebar />
      <Box sx={{ width: 1 }}>
        <Navbar />
        <Container sx={{ p: 0 }}>
          <Box p={4}>{children}</Box>
        </Container>
      </Box>
    </div>
  );
}
