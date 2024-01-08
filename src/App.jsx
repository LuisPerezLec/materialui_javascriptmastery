import React from 'react';
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { useTheme } from '@mui/material'

const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar >
          <PhotoCamera style={{margin: '0 20px 0 0'}}/>
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div style={{padding: "60px 0px"}}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Hola mundo
            </Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>
              Este texto debe de describir de forma general el contenido de la página, estamos interesados en que sea largo así que utilizaremos un lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam recusandae laudantium quae magni vitae suscipit.
            </Typography>
            <div style={{margin: '40px 0 0 0'}}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container style={{padding: "20px 0"}} maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            {cards.map((card) => (
              <Grid item key={card}>
              <Card style={{height: "100%", display: 'flex', flexDirection: 'column'}}>
                <CardMedia 
                  style={{paddingTop: '56.25%'}}
                  image='https://source.unsplash.com/random'
                  title="Image title"
                />
                <CardContent style={{flexGrow: 1}}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. Hello mom
                  </Typography>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer style={{backgroundColor: '#fff', padding: '50px 0'}}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Texto genérico que me inventé, no estás leyendo esto, verdad?
        </Typography>
      </footer>
    </>
  );
}

export default App;