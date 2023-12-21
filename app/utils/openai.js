
const API_KEY = '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';
import { Configuration,OpenAIApi } from "openai";

const configuration=new Configuration({
    apiKey:API_KEY
});

delete configuration.baseOptions.headers['User-Agent'];
const openai=new OpenAIApi(configuration);

export const generateMessage=async (prompt)=>{
    const response=await openai.createCompletion({
        model:"text-davinci-003",
        prompt:`${prompt}`,
        temperature:0.9,
        max_tokens:256,
        frequency_penalty:0.0,
        presence_penalty:0.0
    })

    return response.data.choices[0].text
}
