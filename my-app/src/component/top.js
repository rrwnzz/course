import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Footer from './footer';

// بيانات الكورسات
const categories = [
  {
    title: 'Advanced JavaScript & React',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s',
  },
  {
    title: 'Python for Beginners',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgY4Wfy9hXIn-GOD3xvwiisF8GM97MiktoA&s',
  },
  {
    title: 'Cybersecurity Basics',
    img: 'https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37368.jpg?semt=ais_hybrid&w=740',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, width: '100%' }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#673AB7',
        }}
      >
        TOP COURSES
      </Typography>

      <Grid container spacing={2} justifyContent="center" gap={12}>
        {categories.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
          >
            <Item sx={{ height: '100%' }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />
              <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>
                {item.title}
              </Typography>

              {/* ⭐ النجوم */}
              <div
                className="star-rating"
                style={{ color: '#fbc02d', marginTop: '8px' }}
              >
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <button
                style={{
                 marginTop: '12px',
                backgroundColor: '#673AB7',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',}}
            >   
                Enroll Now
                </button>

            </Item>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
}
