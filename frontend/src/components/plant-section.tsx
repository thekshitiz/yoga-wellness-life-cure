'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const plants = [
    {
        title: 'Snake Plant',
        description:
            'Purifies air and releases oxygen at night, perfect for bedrooms.',
    },
    {
        title: 'Peace Lily',
        description:
            'Beautiful flowering plant that improves indoor air quality.',
    },
    {
        title: 'Aloe Vera',
        description:
            'Healing properties and easy to care for, great for beginners.',
    },
    {
        title: 'Spider Plant',
        description:
            'Natural air purifier that removes common household toxins.',
    },
]

export default function PlantSection() {
    return (
        <section id="plants" className="bg-neutral-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">Healing Plants</h2>
                    <p className="text-neutral-600 mb-8">
                        Enhance your space with these beneficial plants
                    </p>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {plants.map((plant, index) => (
                        <motion.div
                            key={plant.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-neutral-900">{plant.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-600">
                                        {plant.description}
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
