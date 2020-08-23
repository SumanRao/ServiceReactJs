import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderStyle: "groove",
    paddingBottom: 40,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "grid",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const ListProvider = (props) => {
  const classes = useStyles();

  const { items } = props;

  return (
    <React.Fragment>
      {items.map((item) => {
        return (
          <Card className={classes.root} key={item.id}>
            <CardMedia
              component="img"
              className={classes.cover}
              image={item.attributes["card-image"]}
              title="No Image"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h4" variant="h4">
                  {item.attributes["name"]}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <React.Fragment>
                  {item.attributes.subspecialties.map((value) => {
                    return (
                      <ListItem key={value}>
                        <ListItemText
                          color="textSecondary"
                          primary={`${value}`}
                        ></ListItemText>
                      </ListItem>
                    );
                  })}
                </React.Fragment>
              </div>
            </div>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default ListProvider;
