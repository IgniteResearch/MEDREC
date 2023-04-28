import * as React from "react";
import Button from "../Button";
import Typography from "../Typography";
import ProductHeroLayout from "../../Layouts/ProductHeroLayout";

const backgroundImage =
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';
  "/img/home/producthero_06.png";
  

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7A1", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt='increase priority'
      />
      <Typography color='inherit' align='center' variant='h1' marked='center'>
      <strong> MedRec </strong>
      </Typography>
      <Typography color='inherit' align='center'   marked='center'>
      <strong> A Secure Medical Bank @ 100% No Cost</strong>
      </Typography>
      <Button
        color='primary'
        variant='contained'
        size='large'
        component='a'
        href='/premium-themes/onepirate/sign-up/'
        sx={{ marginTop: 10, minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
        Discover the Digital Clinic Experience 
      </Typography>
    </ProductHeroLayout>
  );
}
