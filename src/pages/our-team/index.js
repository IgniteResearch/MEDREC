import {
  Box,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Layout from "@theme/Layout";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

const FeatureList = [
  {
    userName: "Gandikota RamaGopal",
    profilePic: "/img/profile/ramagopal.png",
    role: ["CEO & Founder"],
    description:
      "Our CEO, Gandikota Ramagopal, had a vision to digitize every aspect of medical interactions and make it accessible to all in a cost-effective and secure way. Our aim is to provide a platform that enables healthcare providers to access, manage, and share patient records seamlessly, without compromising on data security.",
    email: "ramg@igniteresearch.in",
    facebookLink: "https://www.facebook.com/ramagopal.gandikota.1",
    twitterLink: "https://twitter.com/ramagopal_g",
    instagramLink: "https://www.instagram.com/ramagopal_gandikota/",
  },
  {
    userName: "Vemuru Radha",
    profilePic: "/img/profile/vemuru-radha.jpeg",
    role: ["CFO"],
    description:
      "Introducing our CFO, Vemuru Radha, a seasoned financial strategist with a sharp business acumen. With a wealth of experience in financial management, Radha ensures the financial health and stability of Ignite Research. Her expertise in optimizing resources and driving growth fuels our mission to provide cost-effective solutions for the modern industry.",
    email: "radha@igniteresearch.in",
    facebookLink: "https://www.facebook.com/vemuru.radha",
    twitterLink: "https://twitter.com/vemururadha",
    instagramLink: "https://www.instagram.com/vemururadha/",
  },
  {
    userName: "Dr. G Guru Karthik",
    profilePic: "/img/profile/guru-karthik-g.jpg",
    role: ["Medical Director", "OMS-Surgeon"],
    description:
      "Leading our medical team is Dr. G Guru Karthik, our dedicated Medical Head. With her profound experience in the healthcare field, Dr. Guru plays a pivotal role in shaping the medical aspects of MedRec. Her commitment to excellence and patient-centered care drives our mission to provide innovative solutions for healthcare providers.",
    email: "gurggk@igniteresearch.in",
    facebookLink: "https://www.facebook.com/gurukarthik.g",
    twitterLink: "https://twitter.com/gurukarthikg",
    instagramLink: "https://www.instagram.com/gurukarthikg/",
  },
  {
    userName: "Dr. K Usha",
    profilePic: "/img/profile/usha-k.jpg",
    role: ["Medical Advisor", "Cosmetic Surgeon"],
    description:
      "We are privileged to have Dr. Usha K as our esteemed Medical Advisor. With his vast medical knowledge and expertise, Dr. Usha guides us in ensuring that MedRec meets the highest standards of medical accuracy and relevance, enhancing patient care and safety.",
    email: "usha@igniteresearch.in",
    facebookLink: "https://www.facebook.com/usha.k.5",
    twitterLink: "https://twitter.com/ushak",
    instagramLink: "https://www.instagram.com/ushak/",
  },
  {
    userName: "Snigdha",
    profilePic: "https://ui-avatars.com/api/?name=Snigdha",
    role: ["Creative Head"],
    description:
      "Meet our Creative Head, Snigdha, a visionary artist with a passion for design and innovation. Snigdha's creative expertise brings a fresh and captivating approach to our brand and MedRec app. Her keen eye for aesthetics ensures an engaging and visually appealing user experience.",
    email: "snigdha@igniteresearch.in",
    facebookLink: "https://www.facebook.com/snigdha.singh.754918",
    twitterLink: "https://twitter.com/snigdha",
    instagramLink: "https://www.instagram.com/snigdha/",
  },
  {
    userName: "Shreyan",
    profilePic: "https://ui-avatars.com/api/?name=Shreyan",
    role: ["Marketing Head"],
    description:
      "Introducing our dynamic Marketing Head, Shreyan. With her extensive experience and strategic mindset, Shreyan drives our marketing efforts for MedRec. Her innovative ideas and passion for healthcare technology help us reach and engage with our target audience effectively.",
    email: "shreyan@igniteresearch.in",
    facebookLink: "https://www.facebook.com/shreyan.singh.754918",
    twitterLink: "https://twitter.com/shreyan",
    instagramLink: "https://www.instagram.com/shreyan/",
  },
  {
    userName: "Sai Koushik G",
    profilePic: "https://ui-avatars.com/api/?name=Sai+koushik+G",
    role: ["Open-Source-Contributor", "Software-Engineer"],
    description:
      "Sai Koushik, a talented freelancer and Open-Source Contributor, plays a crucial role in shaping our MedRec app. With his excellent frontend skills, he combines his experience at a corporate IT giant to deliver outstanding contributions.",
    email: "saikoushikg@igniteresearch.in",
    facebookLink: "https://www.facebook.com/saikoushikg",
    twitterLink: "https://twitter.com/saikoushikg",
    instagramLink: "https://www.instagram.com/saikoushikg/",
  },
  {
    userName: "Naga Jyothi",
    profilePic: "https://ui-avatars.com/api/?name=Naga+Jyothi",
    role: ["Open-Source-Contributor", "Software-Engineer"],
    description:
      "Meet our exceptional backend engineer, Naga Jyothi. With his expertise as a freelancer and Open-Source Contributor, along with his corporate experience in the IT industry, Jyothi plays a vital role in shaping our MedRec app. His outstanding backend skills ensure seamless functionality and optimal performance.",
    email: "nagajyothi@igniteresearch.in",
    facebookLink: "https://www.facebook.com/nagajyothi",
    twitterLink: "https://twitter.com/nagajyothi",
    instagramLink: "https://www.instagram.com/nagajyothi/",
  },
];

function Feature({
  userName,
  profilePic,
  role,
  description,
  email,
  facebookLink,
  twitterLink,
  instagramLink,
}) {
  const id = userName.toLowerCase().replaceAll(/ /g, "-");
  console.log(id);
  return (
    <>
      <section id={id}>
        <Box sx={{ flexGrow: 1 }}>
          <Card>
            <CardHeader
              avatar={
                <Avatar src={profilePic} aria-label='profile-pic'></Avatar>
              }
              title={userName}
              subheader={role.map((props, idx) => (
                <Chip id={idx} label={props} size='small' />
              ))}
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                {description}
              </Typography>
            </CardContent>
          </Card>
          <Grid p={3} container spacing={12}>
            {/* Job Career Timeline section */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader title='Job Career' />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='UX Designer'
                        secondary='Apple Inc. (2017 - Present)'
                      />
                    </ListItem>
                    <Divider variant='middle' />
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='UI Designer'
                        secondary='Google Inc. (2015 - 2017)'
                      />
                    </ListItem>
                    <Divider variant='middle' />
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Web Designer'
                        secondary='Microsoft Corporation (2012 - 2015)'
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact section */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardHeader title='Follow me' />
                <CardContent>
                  <Stack direction='row' spacing={2}>
                    <a href={facebookLink}>
                      <FacebookIcon />
                    </a>
                    <a href={twitterLink}>
                      <TwitterIcon />
                    </a>
                    <a href={instagramLink}>
                      <InstagramIcon />
                    </a>
                  </Stack>
                </CardContent>
              </Card>
              <Card style={{ marginTop: "2%" }}>
                <CardHeader title='Contact' />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText primary='Email' secondary={email} />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
}

export default function Profile() {
  return (
    <Layout title='' description=''>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <>
              <hr />
              <Feature key={idx} {...props} />
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}
