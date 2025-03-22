import { IndustryT } from "@/types/industry";
import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
import Image from "next/image";

const Industry = ({ industry }: { industry: IndustryT }) => {
  return Number(industry.number) % 2 === 0 ? (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        mx: "auto",
        display: "flex",
        flexDirection: {
          mobile: "column",
          desktop: "row",
        },
        gridTemplateColumns: {
          mobile: "1fr",
          desktop: "1fr 1fr",
        },
        gap: {
          mobile: 1,
          tablet: 2,
          laptop: 10,
          desktop: 10,
        },
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <Box
        sx={{
          width: {
            mobile: "100%",
            desktop: "50%",
          },
          height: {
            mobile: "20rem",
            desktop: "auto",
          },
        }}
      >
        <Image
          src={industry.photo1}
          alt={industry.title}
          width={500}
          height={250}
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          width: {
            mobile: "100%",
            desktop: "50%",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: "extrabold",
            color: "text.primary",
          }}
        >
          {industry.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "text.secondary",
          }}
        >
          {industry.description}
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item1title}:</strong> {industry.item1text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item2title}:</strong> {industry.item2text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item3title}:</strong> {industry.item3text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item4title}:</strong> {industry.item4text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item5title}:</strong> {industry.item5text}
          </ListItem>
        </List>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        mx: "auto",
        display: "flex",
        flexDirection: {
          mobile: "column",
          desktop: "row",
        },
        gridTemplateColumns: {
          mobile: "1fr",
          desktop: "1fr 1fr",
        },
        gap: {
          mobile: 1,
          tablet: 2,
          laptop: 10,
          desktop: 10,
        },
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <Box
        sx={{
          width: {
            mobile: "100%",
            desktop: "50%",
          },
          height: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontWeight: "extrabold",
            color: "text.primary",
          }}
        >
          {industry.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "text.secondary",
          }}
        >
          {industry.description}
        </Typography>
        <List sx={{ pl: 2 }}>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item1title}:</strong> {industry.item1text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item2title}:</strong> {industry.item2text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item3title}:</strong> {industry.item3text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item4title}:</strong> {industry.item4text}
          </ListItem>
          <ListItem sx={{ display: "list-item", pl: 2 }}>
            <strong>{industry.item5title}:</strong> {industry.item5text}
          </ListItem>
        </List>
      </Box>

      <Grid2
        container
        sx={{
          width: {
            mobile: "100%",
            desktop: "50%",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        {[industry.photo1, industry.photo2].map((photo, index) => (
          <Box
            key={index}
            sx={{
              width: "48%",
              display: "flex",
              alignItems: "stretch",
              flex: 1,
              height: {
                mobile: "20rem",
                desktop: "auto",
              },
              mt: index === 1 ? { mobile: "1rem", laptop: "2rem" } : "0",
              ml: index === 1 ? { mobile: "0.5rem", laptop: "1rem" } : "0",
              mr: index === 0 ? { mobile: "0.5rem", laptop: "1rem" } : "0",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={photo}
                alt={`${industry.title}_${index + 1}`}
                width={667}
                height={444}
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  height: window.innerWidth <= 1024 ? "100%" : "",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        ))}
      </Grid2>
    </Box>
  );
};

export default Industry;
