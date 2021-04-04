import {Grid } from "@material-ui/core";
import GalleryItem from "./GalleryItem";
import one from "d:/01.PersonalProjects/menu/src/img/21x21cmTapaDura.jpg";
import two from "d:/01.PersonalProjects/menu/src/img/IMG_20210123_130630~2.jpg";
import three from "d:/01.PersonalProjects/menu/src/img/IMG_20210212_144817.jpg";

function Gallery() {
    
    return (
    <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={3}>
            <GalleryItem imagePath={one} title="Libro de Fotos"></GalleryItem>
        </Grid>
        <Grid item xs={3}>
            <GalleryItem imagePath={two} title="Calendarios"></GalleryItem>
        </Grid>
        <Grid item xs={3}>
            <GalleryItem imagePath={three} title="Imanes"></GalleryItem>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
}

export default Gallery;