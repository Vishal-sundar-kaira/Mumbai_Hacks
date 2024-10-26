// utils/learningPathway.js

const { HfInference } = require("@huggingface/inference");
const inference = new HfInference("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");

async function recommendLearningPathway(profile, retries = 3) {
  const inputText = profile;

  console.log("Input text:", inputText);

  try {
    const response = await inference.textGeneration({
      model: "meta-llama/Llama-3.2-3B-Instruct", // Use a correct model name
      inputs: inputText,
      parameters: {
        max_new_tokens: 1500,  // Adjust this to control response length
        temperature: 0.7,     // Adjust for more variety, lower values for more deterministic
        top_p: 0.9            // Use a sampling setting for more natural responses
      }
    });

    if (response && response.generated_text) {
      console.log("Full Response received:", response.generated_text);
      return response.generated_text.split(",").map(item => item.trim());
    } else {
      throw new Error("Unexpected response format: Missing generated_text.");
    }

  } catch (error) {
    console.error(`Attempt failed:`, error);
    
    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries - 1}`);
      return await recommendLearningPathway(profile, retries - 1);
    } else {
      console.error("All attempts failed.");
      throw new Error("Failed to get a response from the model after multiple attempts.");
    }
  }
}

module.exports = recommendLearningPathway;
