"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card className="overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardContent className="p-8 relative z-10">
                <motion.p {...fadeInLeft} className="text-lg leading-relaxed mb-6">
                  I'm a dedicated fourth-year Civil Engineering student with a passion for integrating technology into
                  traditional engineering practices. My journey combines structural analysis, computational modeling,
                  and software development to solve complex engineering challenges.
                </motion.p>
                <motion.p {...fadeInRight} transition={{ delay: 0.2 }} className="text-lg leading-relaxed">
                  Beyond academics, I'm actively involved in campus leadership and community building, serving as
                  Secretary of the Free Student Union and being an active member of the Math and Physics Society for
                  over three years.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
