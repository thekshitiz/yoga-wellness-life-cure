'use client'

import type React from 'react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <section id="contact" className="bg-secondary/50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-8 md:grid-cols-2"
                >
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2>Get in Touch</h2>
                        <p className="text-muted-foreground">
                            Have questions? We'd love to hear from you.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5" />
                                <span>123 Yoga Street, Wellness City</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5" />
                                <span>hello@yogawellness.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <Input
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        <Textarea
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            rows={6}
                        />
                        <Button type="submit" size="lg">
                            Send Message
                        </Button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    )
}
