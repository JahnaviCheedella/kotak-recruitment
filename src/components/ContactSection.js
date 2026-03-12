import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";

const contactItems = [
  {
    icon: <PersonIcon />,
    label: "Name",
    value: "Singeetham Praveen Kumar",
    iconBg: "rgba(230,57,70,0.2)",
    iconColor: "#FF6B6B",
    href: null,
  },
  {
    icon: <BadgeIcon />,
    label: "Designation",
    value: "Agency Partner",
    iconBg: "rgba(212,168,67,0.2)",
    iconColor: "#D4A843",
    href: null,
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "SINGEETHAM56@GMAIL.COM",
    iconBg: "rgba(33,150,243,0.2)",
    iconColor: "#64B5F6",
    href: "mailto:SINGEETHAM56@GMAIL.COM",
  },
  {
    icon: <PhoneIcon />,
    label: "Mobile",
    value: "9948438426",
    iconBg: "rgba(76,175,80,0.2)",
    iconColor: "#81C784",
    href: "tel:9948438426",
  },
  // ...existing code...
];

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, #0A2463 0%, #1E3A7B 40%, #051845 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "1px dashed rgba(230,57,70,0.12)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-15%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#D4A843" : "#E63946",
            top: `${10 + ((i * 15) % 80)}%`,
            right: `${5 + ((i * 12) % 50)}%`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Column */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Grid container direction="column" spacing={2}>
                <Grid>
                  <Typography
                    variant="overline"
                    sx={{ color: "#FF6B6B", fontWeight: 700, letterSpacing: 3 }}
                  >
                    Get in Touch
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ color: "#fff" }}>
                    Ready to Start Your Journey?
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    justifyContent: { xs: "center", md: "flex-start" },
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 4,
                      background: "linear-gradient(90deg, #E63946, #D4A843)",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}
                  >
                    Take the first step towards an exciting career with Kotak
                    Life Insurance. Contact us today and let us guide you on
                    your path to success.
                  </Typography>
                </Grid>
                <Grid sx={{ display: { xs: "none", md: "block" }, mt: 2 }}>
                  {/* Website and Office Location */}
                  <Grid sx={{ mt: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#D4A843", fontWeight: 600 }}
                      component="a"
                      href="https://www.kotaklife.com"
                      target="_blank"
                      rel="noopener"
                    >
                      www.kotaklife.com
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", fontWeight: 500, mt: 0.5 }}
                    >
                      KOTAK MAHINDRA LIFE INSURANCE COMPANY LTD
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", fontWeight: 500 }}
                    >
                      9th Floor, Intellion Square (Bldg No.4), Infinity IT Park,
                      Gen.AK Vaidhya Marg, Malad(E), Mumbai - 400097
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Column - Contact Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                sx={{
                  p: { xs: 1.5, md: 2 },
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  maxWidth: 450,
                  margin: "0 auto",
                }}
              >
                <Grid container direction="column" spacing={3}>
                  <Grid>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        textAlign: "center",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        mb: 1,
                      }}
                    >
                      Your Advisor Contact
                    </Typography>
                  </Grid>

                  {contactItems.map((item, index) => (
                    <Grid key={index} sx={{ mb: 0.5 }}>
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      >
                        <motion.div
                          whileHover={{ x: 10, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Box
                            component={item.href ? "a" : "div"}
                            href={item.href || undefined}
                            sx={{
                              display: "block",
                              textDecoration: "none",
                              p: { xs: 0.5, md: 1 },
                              background: "rgba(255,255,255,0.05)",
                              borderRadius: 2,
                              border: "1px solid rgba(255,255,255,0.08)",
                              transition: "all 0.3s ease",
                              cursor: item.href ? "pointer" : "default",
                              "&:hover": {
                                background: "rgba(255,255,255,0.1)",
                                borderColor: `${item.iconColor}40`,
                              },
                            }}
                          >
                            <Grid container spacing={2} alignItems="center">
                              <Grid>
                                <IconButton
                                  sx={{
                                    background: item.iconBg,
                                    color: item.iconColor,
                                    "&:hover": { background: item.iconBg },
                                  }}
                                >
                                  {item.icon}
                                </IconButton>
                              </Grid>
                              <Grid size="grow">
                                <Grid
                                  container
                                  direction="column"
                                  spacing={0.2}
                                >
                                  <Grid>
                                    <Typography
                                      variant="caption"
                                      sx={{
                                        color: "rgba(255,255,255,0.5)",
                                        fontSize: "0.75rem",
                                      }}
                                    >
                                      {item.label}
                                    </Typography>
                                  </Grid>
                                  <Grid>
                                    {index === 5 &&
                                    typeof item.value === "string" &&
                                    item.value.includes("\n") ? (
                                      item.value.split("\n").map((line, i) => (
                                        <Typography
                                          key={i}
                                          variant="body2"
                                          sx={{
                                            color: "#fff",
                                            fontWeight: 600,
                                            fontSize: {
                                              xs: "0.70rem",
                                              sm: "0.95rem",
                                            },
                                          }}
                                        >
                                          {line}
                                        </Typography>
                                      ))
                                    ) : (
                                      <Typography
                                        variant="body2"
                                        sx={{
                                          color: "#fff",
                                          fontWeight: 600,
                                          fontSize: {
                                            xs: "0.70rem",
                                            sm: "0.95rem",
                                          },
                                        }}
                                      >
                                        {item.value}
                                      </Typography>
                                    )}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Box>
                        </motion.div>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
