'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const yogaClasses = [
    {
        title: 'Hatha Yoga',
        description:
            'A gentle practice that focuses on basic postures and breathing techniques.',
    },
    {
        title: 'Vinyasa Flow',
        description:
            'Dynamic sequences that synchronize breath with continuous movement.',
    },
    {
        title: 'Yin Yoga',
        description:
            'Slow-paced style holding poses for longer to target deep tissues.',
    },
    {
        title: 'Meditation',
        description:
            'Guided sessions for mental clarity, stress relief, and inner peace.',
    },
]

export default function YogaSection() {
    return (
        <section id="classes">
            <div className="container">
                <div className="text-center">
                    <h2>Our Classes</h2>
                    <p className="text-muted-foreground">
                        Find the perfect class for your journey
                    </p>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {yogaClasses.map((yogaClass, index) => (
                        <motion.div
                            key={yogaClass.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{yogaClass.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {yogaClass.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
