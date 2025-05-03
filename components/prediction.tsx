"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PredictionFormProps {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    onSubmit: (formData: any) => void
    loading: boolean
}

export default function PredictionForm({ onSubmit, loading }: PredictionFormProps) {
    const [step, setStep] = useState(1)
    const totalSteps = 4

    const [formData, setFormData] = useState({
        // Academic percentages
        operatingSystemsPercentage: 69,
        algorithmsPercentage: 63,
        programmingConceptsPercentage: 78,
        softwareEngineeringPercentage: 87,
        computerNetworksPercentage: 94,
        electronicsSubjectsPercentage: 94,
        computerArchitecturePercentage: 87,
        mathematicsPercentage: 84,
        communicationSkillsPercentage: 61,

        // Other inputs
        hoursWorkingPerDay: "9",
        logicalQuotientRating: "4",
        hackathons: "1",
        codingSkillsRating: "4",
        publicSpeakingPoints: "8",
        certifications: "shell programming",
        workshops: "cloud computing",
        extraCourses: "yes",
        interestedSubjects: "cloud computing",
        interestedCareerArea: "system developer",
        jobOrHigherStudies: "higherstudies",
    })

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSliderChange = (field: string, value: number[]) => {
        setFormData((prev) => ({ ...prev, [field]: value[0] }))
    }

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1)
        } else {
            onSubmit(formData)
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">
                                Step {step} of {totalSteps}
                            </span>
                            <span className="text-sm font-medium">{Math.round((step / totalSteps) * 100)}%</span>
                        </div>
                        <Progress value={(step / totalSteps) * 100} className="h-2" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center mb-6">Academic Performance</h2>

                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Operating Systems</label>
                                                <span className="text-sm font-bold">{formData.operatingSystemsPercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.operatingSystemsPercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("operatingSystemsPercentage", value)}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Algorithms</label>
                                                <span className="text-sm font-bold">{formData.algorithmsPercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.algorithmsPercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("algorithmsPercentage", value)}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Programming Concepts</label>
                                                <span className="text-sm font-bold">{formData.programmingConceptsPercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.programmingConceptsPercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("programmingConceptsPercentage", value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center mb-6">More Academic Subjects</h2>

                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Software Engineering</label>
                                                <span className="text-sm font-bold">{formData.softwareEngineeringPercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.softwareEngineeringPercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("softwareEngineeringPercentage", value)}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Computer Networks</label>
                                                <span className="text-sm font-bold">{formData.computerNetworksPercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.computerNetworksPercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("computerNetworksPercentage", value)}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Computer Architecture</label>
                                                <span className="text-sm font-bold">{formData.computerArchitecturePercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.computerArchitecturePercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("computerArchitecturePercentage", value)}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <label className="text-sm font-medium">Mathematics</label>
                                                <span className="text-sm font-bold">{formData.mathematicsPercentage}%</span>
                                            </div>
                                            <Slider
                                                defaultValue={[formData.mathematicsPercentage]}
                                                max={100}
                                                min={60}
                                                step={1}
                                                onValueChange={(value) => handleSliderChange("mathematicsPercentage", value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center mb-6">Skills & Activities</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Hours Working Per Day</label>
                                            <Select
                                                value={formData.hoursWorkingPerDay}
                                                onValueChange={(value) => handleChange("hoursWorkingPerDay", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select hours" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((hours) => (
                                                        <SelectItem key={hours} value={hours.toString()}>
                                                            {hours} hours
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Logical Quotient Rating</label>
                                            <Select
                                                value={formData.logicalQuotientRating}
                                                onValueChange={(value) => handleChange("logicalQuotientRating", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select rating" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((rating) => (
                                                        <SelectItem key={rating} value={rating.toString()}>
                                                            {rating}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Hackathons</label>
                                            <Select value={formData.hackathons} onValueChange={(value) => handleChange("hackathons", value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select number" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                                                        <SelectItem key={num} value={num.toString()}>
                                                            {num}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Coding Skills Rating</label>
                                            <Select
                                                value={formData.codingSkillsRating}
                                                onValueChange={(value) => handleChange("codingSkillsRating", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select rating" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((rating) => (
                                                        <SelectItem key={rating} value={rating.toString()}>
                                                            {rating}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Public Speaking Points</label>
                                            <Select
                                                value={formData.publicSpeakingPoints}
                                                onValueChange={(value) => handleChange("publicSpeakingPoints", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select points" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((points) => (
                                                        <SelectItem key={points} value={points.toString()}>
                                                            {points}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Extra Courses</label>
                                            <Select
                                                value={formData.extraCourses}
                                                onValueChange={(value) => handleChange("extraCourses", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="yes">Yes</SelectItem>
                                                    <SelectItem value="no">No</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-center mb-6">Interests & Career</h2>

                                    <div className="grid grid-cols-1 gap-6 ">
                                        <div className="space-y-2 w-full">
                                            <label className="text-sm font-medium">Certifications</label>

                                            <Select
                                                value={formData.certifications}
                                                onValueChange={(value) => handleChange("certifications", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select certification" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="shell programming">Shell Programming</SelectItem>
                                                    <SelectItem value="machine learning">Machine Learning</SelectItem>
                                                    <SelectItem value="app development">App Development</SelectItem>
                                                    <SelectItem value="python">Python</SelectItem>
                                                    <SelectItem value="r programming">R Programming</SelectItem>
                                                    <SelectItem value="information security">Information Security</SelectItem>
                                                    <SelectItem value="hadoop">Hadoop</SelectItem>
                                                    <SelectItem value="distro making">Distro Making</SelectItem>
                                                    <SelectItem value="full stack">Full Stack</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Workshops</label>
                                            <Select value={formData.workshops} onValueChange={(value) => handleChange("workshops", value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select workshop" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cloud computing">Cloud Computing</SelectItem>
                                                    <SelectItem value="database security">Database Security</SelectItem>
                                                    <SelectItem value="web technologies">Web Technologies</SelectItem>
                                                    <SelectItem value="data science">Data Science</SelectItem>
                                                    <SelectItem value="testing">Testing</SelectItem>
                                                    <SelectItem value="hacking">Hacking</SelectItem>
                                                    <SelectItem value="game development">Game Development</SelectItem>
                                                    <SelectItem value="system designing">System Designing</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Interested Subjects</label>
                                            <Select
                                                value={formData.interestedSubjects}
                                                onValueChange={(value) => handleChange("interestedSubjects", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select subject" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cloud computing">Cloud Computing</SelectItem>
                                                    <SelectItem value="networks">Networks</SelectItem>
                                                    <SelectItem value="hacking">Hacking</SelectItem>
                                                    <SelectItem value="Computer Architecture">Computer Architecture</SelectItem>
                                                    <SelectItem value="programming">Programming</SelectItem>
                                                    <SelectItem value="parallel computing">Parallel Computing</SelectItem>
                                                    <SelectItem value="IOT">IOT</SelectItem>
                                                    <SelectItem value="data engineering">Data Engineering</SelectItem>
                                                    <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                                                    <SelectItem value="Management">Management</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Interested Career Area</label>
                                            <Select
                                                value={formData.interestedCareerArea}
                                                onValueChange={(value) => handleChange("interestedCareerArea", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select career area" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="system developer">System Developer</SelectItem>
                                                    <SelectItem value="Business process analyst">Business Process Analyst</SelectItem>
                                                    <SelectItem value="developer">Developer</SelectItem>
                                                    <SelectItem value="testing">Testing</SelectItem>
                                                    <SelectItem value="security">Security</SelectItem>
                                                    <SelectItem value="cloud computing">Cloud Computing</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Job or Higher Studies?</label>
                                            <Select
                                                value={formData.jobOrHigherStudies}
                                                onValueChange={(value) => handleChange("jobOrHigherStudies", value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select preference" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="higherstudies">Higher Studies</SelectItem>
                                                    <SelectItem value="job">Job</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between mt-8">
                        <Button variant="outline" onClick={prevStep} disabled={step === 1} className="flex items-center gap-1">
                            <ChevronLeft className="h-4 w-4" /> Previous
                        </Button>

                        <Button
                            onClick={nextStep}
                            disabled={loading}
                            className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" /> Processing...
                                </>
                            ) : (
                                <>
                                    {step === totalSteps ? "Predict Career" : "Next"}
                                    {step !== totalSteps && <ChevronRight className="h-4 w-4" />}
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
