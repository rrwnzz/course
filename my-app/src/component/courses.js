import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

// Your categories data
const categories = [
  {
    title: 'Web Basics',
    img: 'https://i.pinimg.com/736x/c9/48/a3/c948a321b2aab805f7ff884a0ae3e6b7.jpg',
    rating: 4.5,
  },
  {
    title: 'App Development',
    img: 'https://i.pinimg.com/736x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg',
    rating: 5,
  },
  {
    title: 'AI and Ml',
    img: 'https://i.pinimg.com/1200x/96/5a/b2/965ab2793c2a5a3b68e6672694449cbf.jpg',
    rating: 3,
  },
  {
    title: 'Java',
    img: 'https://i.pinimg.com/736x/c9/08/07/c9080749a3b2d05ae531df10c1a42a11.jpg',
    rating: 4,
  },
  {
    title: 'Java Script',
    img: 'https://i.pinimg.com/1200x/3f/f3/38/3ff338fded7cab6c231606b35ebe18ab.jpg',
    rating: 3.5,
  },
  {
    title: 'Python',
    img: 'https://i.pinimg.com/736x/a8/c9/34/a8c934a6bd243de6e63aaf072c69013c.jpg',
    rating: 5,
  },
  {
    title: 'React JS',
    img: 'https://i.pinimg.com/1200x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg',
    rating: 4.7,
  },
  {
    title: 'Mern Stack',
    img: 'https://i.pinimg.com/736x/f0/56/5f/f0565f9269afc3bc32fcfce87915e349.jpg',
    rating: 4.8,
  },
  {
    title: 'UI/UX',
    img: 'https://i.pinimg.com/736x/46/0e/f3/460ef3c3fa05eae192e32d056fc5339d.jpg',
    rating: 3.2,
  },
  {
    title: 'Asp.net',
    img: 'https://i.pinimg.com/1200x/72/e8/5c/72e85c1853140fd59656d89ba2b5656a.jpg',
    rating: 4.5,
  },
  {
    title: 'C#',
    img: 'https://i.pinimg.com/1200x/e1/85/dc/e185dc6ca57c6559bfeb5aa7de50cd5e.jpg',
    rating: 3.7,
  },
  {
    title: 'Unity',
    img: 'https://i.pinimg.com/1200x/da/80/be/da80bebd996f2d246aa914ef2bcb7ed6.jpg',
    rating: 5,
  },
  {
    title: 'Linux',
    img: 'https://i.pinimg.com/736x/ff/4a/af/ff4aaf6bf51b825a7c7a57dc538f1dbb.jpg',
    rating: 3.8,
  },
  {
    title: 'CyberSecurity Basics',
    img: 'https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37368.jpg?semt=ais_hybrid&w=740',
    rating: 5,
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

export default function CategoryGrid() {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        COURSES
      </Typography>
      <Grid container spacing={2}>
        {categories.map((item, index) => (
          <Grid item xs={12} sm={3} md={6} key={index}>
            <Item>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '120px', height: '120px', objectFit: 'contain' }}
              />
              <Typography variant="body1" sx={{ mt: 1 }}>
                {item.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
                <Rating
                  name={`rating-${index}`}
                  value={item.rating}
                  precision={0.5}
                  readOnly
                />
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    backgroundColor: '#673AB7',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '20px',
                  }}
                  onClick={() => {
                    if (item.title === 'Web Basics') {
                      navigate('/web'); // navigate to /web page
                    }
                    // You can add more navigation logic for other courses here
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}




