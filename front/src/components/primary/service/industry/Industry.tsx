import { IndustryT } from "@/types/industry";
import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
import Image from "next/image";

const Industry = ({ industry }: { industry: IndustryT }) => {
  return Number(industry.number) % 2 === 0 ? (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        display: "flex",
        gridTemplateColumns: { lg: "1fr 1fr" },
        gap: 10,
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <Grid2
        sx={{
          width: "50%",
        }}
      >
        <Image
          src={industry.photo1}
          alt={industry.title}
          width={500}
          height={250}
          style={{ borderRadius: "12px", width: "100%", height: "auto" }}
        />
      </Grid2>
      <Box
        sx={{
          width: "50%",
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
        width: "90%",
        mx: "auto",
        display: "flex",
        gridTemplateColumns: { lg: "1fr 1fr" },
        gap: 10,
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <Box
        sx={{
          width: "50%",
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
        // spacing={2}
        sx={{
          width: "50%",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Grid2
          sx={{
            width: "48%",
          }}
        >
          <Image
            src={industry.photo1}
            alt={`${industry.title}_01`}
            width={667}
            height={444}
            style={{ borderRadius: "12px", width: "100%", objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          sx={{
            width: "48%",
          }}
        >
          <Image
            src={industry.photo2}
            alt={`${industry.title}_02`}
            width={667}
            height={444}
            style={{
              borderRadius: "12px",
              width: "100%",
              marginTop: "1rem",
              objectFit: "cover",
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Industry;
