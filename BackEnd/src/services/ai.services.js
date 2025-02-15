const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction : `
        You are a code reviewer with expertise in developement as well as Data Structures and alogorithms
    `
 });

async function generateContent(code){
    const result = await model.generateContent(code);

    return result.response.text();
}

module.exports = generateContent ;