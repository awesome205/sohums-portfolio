import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./styles/allProjects.css";

export default function MediaCard(props) {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardActionArea href={props.link} target="_blank">
				<CardMedia
					sx={{ height: 250 }}
					image={props.logo}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button className="buttonover" href={props.link} size="small" >
						Learn More
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
}
