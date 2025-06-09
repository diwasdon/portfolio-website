"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap } from "lucide-react"

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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Leadership & Experience
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* First Card */}
          <motion.div
            variants={fadeInLeft}
            whileHover={{ x: 10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden group relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Users className="mr-2 h-5 w-5" />
                      </motion.div>
                      Secretary - Free Student Union
                    </span>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge variant="outline">Current</Badge>
                    </motion.div>
                  </CardTitle>
                  <CardDescription>Pulchowk Campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Leading student initiatives and representing student interests in campus governance. Organizing events,
                    managing communications, and facilitating dialogue between students and administration.
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Second Card */}
          <motion.div
            variants={fadeInRight}
            whileHover={{ x: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden group relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 pointer-events-none"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <GraduationCap className="mr-2 h-5 w-5" />
                      </motion.div>
                      Intellectual Head
                    </span>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Badge variant="outline">3+ Years</Badge>
                    </motion.div>
                  </CardTitle>
                  <CardDescription>Math and Physics Society</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Active participant in academic discussions, workshops, and research activities. Contributing to peer
                    learning and knowledge sharing in mathematics and physics applications in engineering.
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
