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
                    <Card className="border-purple-200 shadow-md">
                        <CardHeader className="bg-purple-100 dark:bg-purple-900/20">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-2xl font-bold">Career Path</CardTitle>
                                {item["Job/Higher Studies?"] && (
                                    <Badge className="bg-purple-600 hover:bg-purple-700">{item["Job/Higher Studies?"]}</Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                {item.Reasoning && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Analysis</h3>
                                        <p className="text-gray-700 dark:text-gray-300">{item.Reasoning}</p>
                                    </section>
                                )}

                                {item.Recommendations && item.Recommendations.length > 0 && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Recommendations</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                            {item.Recommendations.map((rec, recIndex) => (
                                                <li key={recIndex}>{rec}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {item["Career Tips"] && item["Career Tips"].length > 0 && (
                                    <section>
                                        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">Career Tips</h3>
                                        <div className="grid gap-3 md:grid-cols-1">
                                            {item["Career Tips"].map((tip, tipIndex) => (
                                                <div
                                                    key={tipIndex}
                                                    className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-800"
                                                >
                                                    <p className="text-gray-700 dark:text-gray-300">{tip}</p>
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
