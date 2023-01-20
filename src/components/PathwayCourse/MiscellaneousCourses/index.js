import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as courseActions } from "../../Course/redux/action";
import { actions as pathwayActions } from "../../PathwayCourse/redux/action";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../../theme/constant";

import { Link } from "react-router-dom";
import { PATHS, interpolatePath } from "../../../constant";
import { Container, Box, Grid, Card, Typography } from "@mui/material";
import useStyles from "../styles";

function MiscellaneousCourses() {
  const dispatch = useDispatch();
  const { data } = useSelector(({ Course }) => Course);
  const pathway = useSelector((state) => state);
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");

  
  useEffect(() => {
    dispatch(courseActions.getCourses());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(pathwayActions.getPathways());
  }, [dispatch]);
  
  const pathwayCourseId =
  (pathway.Pathways.data &&
    pathway.Pathways.data.pathways
    .map((pathway) => pathway.courses || [])
    .flat()
    .map((course) => course.id)) ||
    [];
    
    const otherCourses =
    data &&
    data.allCourses.filter(
      (item) => pathwayCourseId && !pathwayCourseId.includes(item.id)
      );
      
      const [courses, setCourses] = useState('');
      // const [miscellaneous, setMiscellaneous] = useState(otherCourses)

      let miscellaneous;
      
      if(courses == "All"){
        miscellaneous = (
          <Grid sx={{ mt: "16px" }} container spacing={2}>
            {otherCourses
            .map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  
                  <Link
                    className={classes.pathwayLink}
                    to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                      courseId: item.id,
                      exerciseId: 0,
                      pathwayId: "miscellaneous",
                    })}
                  >
                    <Card
                      elevation={0}
                      className={classes.pathwayCard}
                      sx={{
                        background: "#EEF1F5",
                        m: isActive ? "16px" : "15px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="subtitle1"
                        sx={{
                          px: "10px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ))}
          </Grid>
        )
      }


      if(courses == "For-Volunteers"){
        miscellaneous = (
          <Grid sx={{ mt: "16px" }} container spacing={2}>
            {otherCourses
            .map((item, index) => item.id == 1 ?(
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  
                  <Link
                    className={classes.pathwayLink}
                    to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                      courseId: item.id,
                      exerciseId: 0,
                      pathwayId: "miscellaneous",
                    })}
                  >
                    <Card
                      elevation={0}
                      className={classes.pathwayCard}
                      sx={{
                        background: "#EEF1F5",
                        m: isActive ? "16px" : "15px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="subtitle1"
                        sx={{
                          px: "10px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ):(''))}
          </Grid>
        )
      }



      if(courses == "Others"){
        miscellaneous = (
          <Grid sx={{ mt: "16px" }} container spacing={2}>
            {otherCourses
            .map((item, index) => item.id == 1 || item.id == 24 || item.id == 38 || item.id == 43 || item.id == 53 || item.id == 58 || item.id == 59 || item.id == 71 || item.id == 77 ?(
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  
                  <Link
                    className={classes.pathwayLink}
                    to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                      courseId: item.id,
                      exerciseId: 0,
                      pathwayId: "miscellaneous",
                    })}
                  >
                    <Card
                      elevation={0}
                      className={classes.pathwayCard}
                      sx={{
                        background: "#EEF1F5",
                        m: isActive ? "16px" : "15px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="subtitle1"
                        sx={{
                          px: "10px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ):(''))}
          </Grid>
        )
      }


      if(courses == "Non-Tech"){
        miscellaneous = (
          <Grid sx={{ mt: "16px" }} container spacing={2}>
            {otherCourses
            .map((item, index) => item.id == 27 || item.id == 36 || item.id == 40 || item.id == 41 || item.id == 44 || item.id == 46 || item.id == 47 || item.id == 48 || item.id == 52 || item.id == 55 || item.id == 57 || item.id == 60 || item.id == 61 || item.id == 62 || item.id == 65 || item.id == 67 || item.id == 68 || item.id == 69 || item.id == 72 ?(
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  
                  <Link
                    className={classes.pathwayLink}
                    to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                      courseId: item.id,
                      exerciseId: 0,
                      pathwayId: "miscellaneous",
                    })}
                  >
                    <Card
                      elevation={0}
                      className={classes.pathwayCard}
                      sx={{
                        background: "#EEF1F5",
                        m: isActive ? "16px" : "15px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="subtitle1"
                        sx={{
                          px: "10px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ):(''))}
          </Grid>
        )
      }



      if(courses == "Tech"){
        miscellaneous = (
          <Grid sx={{ mt: "16px" }} container spacing={2}>
            {otherCourses
            .map((item, index) => item.id == 2 || item.id == 3 || item.id == 4 || item.id == 5 || item.id == 7 || item.id == 25 || item.id == 26 || item.id == 37 || item.id == 39 || item.id == 42 || item.id == 45 || item.id == 49 || item.id == 50 || item.id == 51 || item.id == 54 || item.id == 63 || item.id == 64 || item.id == 66 || item.id == 70 || item.id == 73 || item.id == 74 || item.id == 75 || item.id == 76 || item.id == 78 || item.id == 79 || item.id == 80 || item.id == 81 ?(
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  
                  <Link
                    className={classes.pathwayLink}
                    to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                      courseId: item.id,
                      exerciseId: 0,
                      pathwayId: "miscellaneous",
                    })}
                  >
                    <Card
                      elevation={0}
                      className={classes.pathwayCard}
                      sx={{
                        background: "#EEF1F5",
                        m: isActive ? "16px" : "15px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="subtitle1"
                        sx={{
                          px: "10px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ):(''))}
          </Grid>
        )
      }

  return (
    <React.Fragment>
      <Container className={classes.pathwayContainer} maxWidth="lg">
        <Grid container>
          <Grid xs={12}>
            <Card align="left" elevation={0}>
              <Typography
                variant="h4"
                align={isActive ? "center" : "left"}
                sx={{ pb: "16px" }}
              >
                Miscellaneous Courses
              </Typography>
              <Typography
                variant="body1"
                maxWidth={"sm"}
                align={isActive ? "center" : "left"}
              >
                Do you want to delve into Android, Game Development, Web Dev
                Basics or just some fun projects? Check out these courses for a
                sneak peak into these exciting fields.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: isActive ? 5 : 10 }}>
          <Typography variant="h6" align={isActive ? "center" : "left"}>
            Courses
          </Typography>
          <Box>
          <select name="courses"  id="courses" onChange={(e)=>setCourses(e.target.value)}>
          <option>select</option>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Non-Tech">Non-Tech</option>
          <option value="For-Volunteers">For-Volunteers</option>
          <option value="Others">Others</option>
          </select>
          </Box>
          <Grid sx={{ mt: "16px" }} container spacing={2}>
            {/* {otherCourses &&
              otherCourses
            .map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  
                  <Link
                    className={classes.pathwayLink}
                    to={interpolatePath(PATHS.PATHWAY_COURSE_CONTENT, {
                      courseId: item.id,
                      exerciseId: 0,
                      pathwayId: "miscellaneous",
                    })}
                  >
                    <Card
                      elevation={0}
                      className={classes.pathwayCard}
                      sx={{
                        background: "#EEF1F5",
                        m: isActive ? "16px" : "15px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        variant="subtitle1"
                        sx={{
                          px: "10px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ))} */}

              {miscellaneous}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default MiscellaneousCourses;
