"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    title: "Structural Analysis Tool",
    description: "Python-based tool for analyzing beam structures using finite element methods",
    tech: ["Python", "NumPy", "Matplotlib"],
    type: "Engineering Software",
  },
  {
    title: "Campus Infrastructure Study",
    description: "Comprehensive analysis of campus building structures using ETABS and STAAD Pro",
    tech: ["ETABS", "STAAD Pro", "AutoCAD"],
    type: "Research Project",
  },
  {
    title: "Fluid Flow Simulation",
    description: "OpenFOAM simulation of fluid dynamics in hydraulic structures",
    tech: ["OpenFOAM", "ParaView", "Linux"],
    type: "Simulation",
  },
  {
    title: "GIS Mapping Project",
    description: "Geospatial analysis and mapping of local infrastructure using ArcGIS",
    tech: ["ArcGIS", "Python", "SQL"],
    type: "Geospatial Analysis",
  },
  {
    title: "Seismic Analysis Dashboard",
    description: "Web-based dashboard for visualizing seismic analysis results",
    tech: ["HTML", "CSS", "Python"],
    type: "Web Application",
  },
  {
    title: "Bridge Design Optimization",
    description: "Optimization algorithms for bridge design using computational methods",
    tech: ["C", "Python", "OpenSees"],
    type: "Optimization",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="w-full group">
                      <ExternalLink className="mr-2 h-3 w-3 group-hover:rotate-45 transition-transform" />
                      View Project
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
