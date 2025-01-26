"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { config } from "../config"

interface Project {
  id: number
  name: string
  imageUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    window.open(config.downloadFileUrl, "_blank")
  }

  return (
    <motion.div
      className={`backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col items-center w-64 border border-gray-800`}
      style={{
        backgroundColor: config.cardBackgroundColor,
      }}
      whileHover={{ scale: config.cardHoverScale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.img
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.name}
        className="mb-4 rounded w-full h-auto"
      />
      <motion.h2
        className="text-xl font-bold mb-4"
        animate={{ scale: isHovered ? 1.2 : 1, color: isHovered ? config.textHoverColor : config.textColor }}
        transition={{ duration: 0.3 }}
      >
        {project.name}
      </motion.h2>
      <Button
        onClick={handleDownload}
        className={`w-full text-white ${config.downloadButtonColor} ${config.downloadButtonHoverColor}`}
      >
        {config.downloadButtonText}
      </Button>
    </motion.div>
  )
}

