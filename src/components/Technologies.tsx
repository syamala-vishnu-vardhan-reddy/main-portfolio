import "../App.css";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { IoLogoReact } from "react-icons/io5";

import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { motion } from "framer-motion";

const Technologies = () => {
  const techStack = [
    {
      id: 1,
      name: "React",
      icon: <IoLogoReact size={70} color="#22D3EE" />,
      duration: 2,
    },

    {
      id: 2,
      name: "Javascript",
      icon: <IoLogoJavascript size={70} color="#EFD81D" />,
      duration: 4,
    },
    {
      id: 3,
      name: "HTML",
      icon: <FaHtml5 size={70} color="#DD4B25" />,
      duration: 5,
    },
    {
      id: 4,
      name: "CSS",
      icon: <FaCss3 size={70} color="#254BDD" />,
      duration: 2,
    },
    {
      id: 5,
      name: "Redux",
      icon: <TbBrandRedux size={70} color="#7248B6" />,
      duration: 3,
    },
  ];
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography className="technologies">Technologies</Typography>
      </motion.div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}></Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Grid container spacing={0} style={{ textAlign: "center" }}>
              {techStack.map((tech) => {
                return (
                  <motion.div
                    animate={{ y: [-10, 10] }}
                    transition={{
                      duration: tech.duration,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      x: { type: "spring", bounce: 20 },
                    }}
                  >
                    <Grid className="tech" item style={{ margin: "0.5rem" }}>
                      <Tooltip title={tech.name}>
                        <IconButton>{tech.icon}</IconButton>
                      </Tooltip>
                    </Grid>
                  </motion.div>
                );
              })}
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </div>
  );
};

export default Technologies;
