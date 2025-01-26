"use client"

import { motion } from "framer-motion"
import SnowCanvas from "./components/SnowCanvas"
import ProjectCard from "./components/ProjectCard"
import { HomeBar } from "./components/HomeBar"
import { config } from "./config"

export default function Home() {
  const project = {
    id: 1,
    name: config.projectName,
    imageUrl: config.projectImageUrl,
  }

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: config.backgroundColor }}
    >
      <HomeBar />
      <SnowCanvas />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 mt-16"
      >
        <ProjectCard project={project} />
      </motion.div>
    </div>
  )
}

