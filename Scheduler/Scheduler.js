const corn = require("node-cron");
const {storeLogs} = require("./StoreLogs");
const getClassTimetable = require("../Puppeteer/getClassTimetables");

const ExtractData = async () => {
  try {
    await getClassTimetable();
    storeLogs(false,"Scrapping completed Successfully")
  } catch (error) {
    storeLogs(true, error.message);
  }
};

module.exports = ExtractData;
