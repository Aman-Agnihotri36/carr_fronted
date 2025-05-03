"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import PredictionForm from "@/components/prediction"
import ResultDisplay from "@/components/result"
import Footer from "@/components/footer"

export default function Home() {
  const [prediction, setPrediction] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handlePrediction = async (formData: any) => {
    setLoading(true)



    const arr = Object.values(formData);
    console.log(arr)


    const response = await fetch('https://carr-predict.onrender.com/predict-career', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: arr,  // Assuming `arr` is the array of user inputs
      }),
    });

    const data = await response.json();
    console.log("Yor DATA ", data);
    setPrediction(data?.prediction)  // { prediction: "Some career role" } or error
    setLoading(false)
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Career Path Predictor</h1>
            <p className="mt-3 text-xl text-gray-600">
              Find your ideal tech career path based on your skills and interests
            </p>
          </motion.div>

          {prediction ? (
            <ResultDisplay prediction={prediction} onReset={() => setPrediction(null)} />
          ) : (
            <PredictionForm onSubmit={handlePrediction} loading={loading} />
          )}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
