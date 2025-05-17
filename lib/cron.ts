import cron from "cron"
import https from "https"

const job = new cron.CronJob("*/14 * * * *", function () {
    https

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        .get("https://carr-predict.onrender.com", (res: any) => {
            if (res.statusCode == 200) console.log("GET request sent successfully")
            else console.log("GET request failed", res.statusCode)
        })
        .on("error", () => console.error("Error while sendig request"))
})

job.start()
