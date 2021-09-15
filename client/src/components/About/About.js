import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Card, Container, CardContent, CardMedia,
    Grid, Fade, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const About = () => {
    const classes = useStyles();

  return (
    <React.Fragment>
        {/* Hero unit */}
        <Fade in timeout={1000}>
          <Typography
            className={classes.heroCardMedia}
            component="h1"
            variant="h2"
            align="center"
            color="inherit" gutterBottom>
            <Fade in timeout={800}>
              <b>ABOUT JSA</b>
            </Fade>
          </Typography>
        </Fade>
        <Fade in timeout={800}>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h4"
                align="center"
                color="primary"
                gutterBottom>
                <b>What is JSA?</b>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
                paragraph>
                This would be the event description. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam vel eros pretium libero
                consequat viverra vitae in purus. In vestibulum feugiat tincidunt.
                Donec feugiat consequat nisl, eu lobortis justo dapibus rutrum.
                Quisque vel lobortis tellus. Praesent tincidunt nisi vitae nunc
                lobortis venenatis. Donec lacinia dolor et nulla tristique congue.
              </Typography>
            </Container>
          </div>
        </Fade>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h2" variant="h4" align="center" color="primary" gutterTop gutterBottom>
            <b>Meet the Current Officers</b>
          </Typography>
          {/* **MEMBERS** */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Yuka Kozakai"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Yuka Kozakai
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: <br />&nbsp;&nbsp; President/Event/E-Board <br />
                    Major: Business Economics <br />
                    Year: Junior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Tina Sato"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Tina Sato
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Vice President/Design <br />
                    Major: Design Media Arts <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Daichi Kanemoto"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Daichi Kanemoto
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: E-Board <br />
                    Major: Sociology <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Akira Suzuki"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Akira Suzuki
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Treasurer/Website <br />
                    Major: Electrical Engineering <br />
                    Year: Senior <br />
                    Hobbies: Soccer, Video Games
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Naoya Kumagai"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Naoya Kumagai
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Secretary <br />
                    Major: Math of Computation <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Yuriko Sanno"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                  Yuriko Sanno
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Career <br />
                    Major: Cognitive Sciences <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Ryan Zhong"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Ryan Zhong
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Career <br />
                    Major: Electrical Engineering <br />
                    Year: Senior <br />
                    Hobbies: Stonks
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Erino Watanabe"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Erino Watanabe
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Career <br />
                    Major: <br />&nbsp;&nbsp;Geography/Public Affairs <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Hyuma Miura Tio"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Hyuma Miura Tio
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Career <br />
                    Major: Business Economics <br />
                    Year: Sophomore <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Sae Tsunawaki"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Sae Tsunawaki
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Campus Tour <br />
                    Major: Computer Science <br />
                    Year: Junior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Ruka Nagashima"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Ruka Nagashima
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Campus Tour <br />
                    Major: Communications <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Hiromitsu Inoue"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Hiromitsu Inoue
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Campus Tour <br />
                    Major: Asian Humanities <br />
                    Year: Senior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Karine Kim"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Karine Kim
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Campus Tour/Event <br />
                    Major: PhySci/Anthropology <br />
                    Year: Junior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Miranda Wu"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Miranda Wu
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Event <br />
                    Major: Business Economics <br />
                    Year: Junior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Anna Yakura"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Anna Yakura
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Event <br />
                    Major: MCDB <br />
                    Year: Sophomore <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Seita Yoshifusa"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Seita Yoshifusa
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Event <br />
                    Major: Math/Economics <br />
                    Year: Sophomore <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Sana Iwao"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Sana Iwao
                  </Typography>
                  <Typography variant="body2">
                    <i>
                    Role: Event <br />
                    Major: Mechanical Engr. <br />
                    Year: Junior <br />
                    Hobbies: ?
                    </i>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Shiyu Murashima"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                Shiyu Murashima
                </Typography>
                <Typography variant="body2">
                  <i>
                  Role: Design <br />
                  Major: Statistics <br />
                  Year: Sophomore <br />
                  Hobbies: ?
                  </i>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
        </Container>
    </React.Fragment>
  );
}

export default About;