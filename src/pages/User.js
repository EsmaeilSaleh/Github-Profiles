import React, { useContext, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Grid from "@mui/material/Grid";

import ReposList from '../components/ReposList'
import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { getUser, user, getRepos } = useContext(GithubContext);
  const param = useParams();

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    getUser(param.login);
    getRepos(param.login);
  }, []);

  return (
    <Box sx={{ mt: { xs: "4em", sm: "5em" } }}>
      <Button
        variant="contained"
        sx={{
          mb: 2,
          "&:hover": { background: "rgba(0,0,0,0.3)" },
          background: "rgba(0,0,0,0.5)",
        }}
        startIcon={<HomeIcon />}
      >
        <RouterLink style={{ textDecoration: "none", color: "#000" }} to="/">
          Back to Home
        </RouterLink>
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} md={4}>
          <Card sx={{ position: "relative", borderRadius: 10 }}>
            <CardMedia component="img" image={avatar_url} />
            <Box
              sx={{
                textAlign: "center",
                position: "absolute",
                width: "100%",
                bottom: "2em",
                background: "rgba(255,255,255,0.4)",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: 700,
                  padding: 4,
                }}
              >
                {name}
              </Typography>
              <Button
                sx={{
                  marginBottom: "0.6em",
                }}
                startIcon={<GitHubIcon />}
              >
                <Typography sx={{ fontSize: "1em" }}>
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    @{login}
                  </a>
                </Typography>
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          {bio && <Typography>{bio}</Typography>}
          <Button
            sx={{ marginY: "2em" }}
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            <Typography sx={{ padding: "0.2em" }}>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Visit Github Profile
              </a>
            </Typography>
          </Button>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            {location && (
              <Paper sx={{ padding: "0.2em" }}>
                <Typography
                  sx={{ pl: "0.2em", pt: "0.2em", pb: "0.6em" }}
                  variant="body2"
                >
                  Location:{" "}
                </Typography>
                <Typography variant="h6" sx={{ pr: "1em" }}>
                  <AddLocationIcon sx={{ mr: "0.4em", fontSize: "medium" }} />
                  {location}
                </Typography>
              </Paper>
            )}
            {blog && (
              <Paper sx={{ padding: "0.2em" }}>
                <Typography variant="body2">Website: </Typography>
                <Button startIcon={<LanguageIcon />}>
                  <Link
                    href={`https://${blog}`}
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {blog}
                  </Link>
                </Button>
              </Paper>
            )}
            {twitter_username && (
              <Paper sx={{ padding: "0.2em" }}>
                <Typography variant="body2">Twitter: </Typography>
                <Button startIcon={<TwitterIcon />}>
                  <Link
                    href={`https://twitter.com/${twitter_username}`}
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {blog}
                  </Link>
                </Button>
              </Paper>
            )}
          </Stack>
        </Grid>
      </Grid>
      <Card sx={{ mt: "2em" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 1 }}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Paper
            sx={{
              width: { xs: "50%", sm: "100%" },
              paddingY: 2,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ pr: "1em" }}>
              <Typography variant="subtitle2">Followers: </Typography>
              <Typography sx={{ fontSize: "2em", fontWeight: 700 }}>
                {" "}
                {followers}{" "}
              </Typography>
            </Box>
            <GroupIcon sx={{ fontSize: "4em" }} />
          </Paper>
          <Paper
            sx={{
              width: { xs: "50%", sm: "100%" },
              paddingY: 2,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography variant="subtitle2">Followings: </Typography>
              <Typography sx={{ fontSize: "2em", fontWeight: 700 }}>
                {" "}
                {following}{" "}
              </Typography>
            </Box>
            <PeopleIcon sx={{ fontSize: "4em" }} />
          </Paper>
          <Paper
            sx={{
              width: { xs: "50%", sm: "100%" },
              paddingY: 2,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography variant="subtitle2">Public Repos: </Typography>
              <Typography sx={{ fontSize: "2em", fontWeight: 700 }}>
                {" "}
                {public_repos}{" "}
              </Typography>
            </Box>
            <CodeIcon sx={{ fontSize: "4em" }} />{" "}
          </Paper>
          <Paper
            sx={{
              width: { xs: "50%", sm: "100%" },
              paddingY: 2,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography variant="subtitle2">Public Gists: </Typography>
              <Typography sx={{ fontSize: "2em", fontWeight: 700 }}>
                {public_gists}{" "}
              </Typography>
            </Box>
            <StorefrontIcon sx={{ fontSize: "4em" }} />
          </Paper>
        </Stack>
      </Card>
      <Card sx={{ marginTop: "1em" }}>
        <Typography
          variant="h4"
          sx={{ paddingLeft: "0.5em", paddingTop: "0.5em" }}
        >
          Public Repos:
        </Typography>
        <ReposList />
      </Card>
    </Box>
  );
};

export default User;
