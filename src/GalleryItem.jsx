import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 140,
      paddingTop: '56.25%', // 16:9
    },
    title: {
        position: "relative",
        top: 0,
    }
  }));

function GalleryItem(props) {

    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.imagePath}
                title={props.title}
                elevation={0}
                />
                <CardContent display={3}>
                    <Typography variant="h6" align="center">{props.title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default GalleryItem;