
import { ChatOpenAI } from "@langchain/openai";
import {  HumanMessage } from "@langchain/core/messages";


export async function getChatResponse(userMessage: string): Promise<string> {
  const model = new ChatOpenAI({
    modelName: "openai/gpt-3.5-turbo-0613", 
    temperature: 0.7,
    openAIApiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment variables
    configuration: {
      baseURL: "https://openrouter.ai/api/v1", 
    },
  });
//   console.log(openAIApiKey);
 // Check if the API key is being set correctly

  const response = await model.invoke([
    new HumanMessage(userMessage),
  ]);
  console.log(response)

  return response.content as string// Extracting the text from the response
}


// openAIApiKey: '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',
