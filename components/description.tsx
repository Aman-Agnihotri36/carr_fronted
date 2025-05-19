import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type CareerTip = string
type Recommendation = string

interface CareerData {
    "Job/Higher Studies?"?: string
    Reasoning?: string
    Recommendations?: Recommendation[]
    "Career Tips"?: CareerTip[]
}

interface CareerRecommendationsProps {
    description: CareerData | CareerData[]
}

export function CareerRecommendations({ description }: CareerRecommendationsProps) {
    // Handle the case where description might not be an array
    const dataArray = Array.isArray(description) ? description : [description]

    // Check if we have valid data to display
    if (!dataArray || dataArray.length === 0 || !dataArray[0]) {
        return <div className="text-center p-4">No career data available</div>
    }

    return (
        <div className="space-y-6">
            {dataArray.map((item, index) => (
                <div key={index} className="space-y-6">
                    <Card className="border-purple-200 bg-transparent shadow-md">
                        <CardHeader className="bg-[#202028eb] border-gray-400 text-white ">
                            <div className="flex items-center 0 justify-between">
                                <CardTitle className="text-2xl font-bold">Career Path</CardTitle>
                                {item["Job/Higher Studies?"] && (
                                    <Badge className="bg-green-600 hover:bg-green-700">{item["Job/Higher Studies?"]}</Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                {item.Reasoning && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-green-500 dark:text-purple-300 mb-2">Analysis</h3>
                                        <p className="text-white dark:text-gray-300">{item.Reasoning}</p>
                                    </section>
                                )}

                                {item.Recommendations && item.Recommendations.length > 0 && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-green-500 dark:text-purple-300 mb-2">Recommendations</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-white dark:text-gray-300">
                                            {item.Recommendations.map((rec, recIndex) => (
                                                <li key={recIndex}>{rec}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {item["Career Tips"] && item["Career Tips"].length > 0 && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-green-500  mb-2">Career Tips</h3>
                                        <div className="grid gap-3 md:grid-cols-1">
                                            {item["Career Tips"].map((tip, tipIndex) => (
                                                <div
                                                    key={tipIndex}
                                                    className="p-3  rounded-lg bg-[#202028eb] border-gray-400  "
                                                >
                                                    <p className="text-white dark:text-gray-300">{tip}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}
