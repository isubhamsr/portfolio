import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Roadmap() {
  const classes = useStyles();
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Roadmap
          </h1>
        </div>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              {/* <Typography variant="body2" color="textSecondary">
            9:30 am
          </Typography> */}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {/* <FastfoodIcon /> */}
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Higher Secondary
                </Typography>
                <Typography>2016</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              {/* <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography> */}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {/* <LaptopMacIcon /> */}
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Graduation
                </Typography>
                <Typography>B.Tech in Computer Science, 2020</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {/* <HotelIcon /> */}
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Intership
                </Typography>
                <Typography>
                  React Js Developer at{" "}
                  <a
                    style={{ color: "blue" }}
                    target="_blank"
                    href="https://astakyuta.com/"
                  >
                    Astakyuta Private Limited
                  </a>{" "}
                  (2 months)
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {/* <RepeatIcon /> */}
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Masters
                </Typography>
                <Typography>M.Tech in Computer Science, 2022</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {/* <HotelIcon /> */}
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Intern @{" "}
                  <a
                    style={{ color: "blue" }}
                    target="_blank"
                    href="https://www.cognizant.com/in/en"
                  >
                    Cognizant
                  </a>{" "}
                </Typography>
                <Typography>Learn and build web app with ASP dot Net, Angular and SQL Server</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {/* <HotelIcon /> */}
                <WorkIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Programmer Analyst Trainee{" "}
                  <a
                    style={{ color: "blue" }}
                    target="_blank"
                    href="https://www.cognizant.com/in/en"
                  >
                    Cognizant
                  </a>{" "}
                </Typography>
                <Typography>Build POC app with ASP dot Net, ReactJs</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
