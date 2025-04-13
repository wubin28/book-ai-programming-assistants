# Question

Please help me implement the DeepSeek API integration for my existing Promptyoo frontend application. Specifically:

Advise whether this integration should be handled by:

A new Node.js backend service (preferred approach)
Direct API calls from the frontend
If recommending a Node.js backend:

Provide the necessary backend code structure
Show how to create API endpoints to handle DeepSeek requests
Include the integration between frontend and backend
Specify the directory structure and setup requirements
If recommending frontend implementation:

Provide the secure way to handle API calls directly
Show how to manage API keys and authentication
Include error handling and response processing
Please provide specific code examples for the recommended approach, ensuring security best practices are followed.

# bolt.new

Integrating the DeepSeek API is best handled with a Node.js backend for security and flexibility. Here's why and how:

## Why a Node.js Backend?

* Security: Keeps your API keys server-side, preventing exposure in the frontend code.
* Flexibility: Allows you to easily switch or update AI models without changing the frontend.
* Rate Limiting: You can implement rate limiting to prevent abuse and manage costs.
* Complex Logic: You can perform more complex prompt engineering or post-processing of results.

## The Plan

1. Create a new file server.js: This file will contain the Node.js backend code.
2. Install express and dotenv: These packages are needed for creating the server and managing environment variables.
3. Set up the Express server: Configure the server to listen for requests and handle API routes.
4. Load environment variables: Use dotenv to load the DeepSeek API key from a .env file.
5. Create a /optimize endpoint: This endpoint will receive the prompt data from the frontend, call the DeepSeek API, and return the optimized prompt.
6. Implement the DeepSeek API call: Use node-fetch or axios to make a POST request to the DeepSeek API with the prompt data.
7. Handle errors: Implement error handling to catch any issues with the API call and return an appropriate error message to the frontend.
8. Update the frontend: Modify the handleOptimize function in src/App.tsx to send a request to the /optimize endpoint on the backend and display the result.
9. Add CORS: Configure CORS to allow requests from the frontend.
10. Create a .env file: Add a .env file to store the DeepSeek API key.

Here's a more detailed breakdown of the steps:

**Step 1: Create server.js**

Create a new file named server.js in the root of your project.

**Step 2: Install express and dotenv**

You'll need to install express and dotenv.

**Step 3: Set up the Express server**

In server.js, set up a basic Express server:

```javascript
const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```
**Step 4: Load environment variables**

Make sure you have a .env file in your project root with your DeepSeek API key:

```toml
DEEPSEEK_API_KEY=YOUR_DEEPSEEK_API_KEY
```
**Step 5: Create a /optimize endpoint**

Add an endpoint to handle the prompt optimization requests:

```javascript
app.post('/optimize', async (req, res) => {
  try {
    const { prompt } = req.body;
    // Call DeepSeek API here
    res.json({ optimizedPrompt: "This is a test" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to optimize prompt' });
  }
});
```
**Step 6: Implement the DeepSeek API call**

Replace the // Call DeepSeek API here comment with the actual API call using node-fetch or axios.  Since node-fetch is not available, you can use curl command to make the API call.

```javascript
const { exec } = require('child_process');

app.post('/optimize', async (req, res) => {
  try {
    const { prompt } = req.body;
    const apiKey = process.env.DEEPSEEK_API_KEY;
    const apiUrl = 'YOUR_DEEPSEEK_API_ENDPOINT'; // Replace with DeepSeek's API endpoint

    // Construct the curl command
    const curlCommand = `curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${apiKey}" -d '${JSON.stringify({ prompt })}' ${apiUrl}`;

    // Execute the curl command
    exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).json({ error: 'Failed to optimize prompt' });
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      // Parse the output from the API
      try {
        const apiResponse = JSON.parse(stdout);
        const optimizedPrompt = apiResponse.choices[0].text; // Adjust based on the actual API response structure
        res.json({ optimizedPrompt });
      } catch (parseError) {
        console.error("Failed to parse API response", parseError);
        return res.status(500).json({ error: 'Failed to parse API response' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to optimize prompt' });
  }
});
```
**Step 7: Handle errors**

The code above includes basic error handling.  You can customize the error messages as needed.

**Step 8: Update the frontend**

Modify the handleOptimize function in src/App.tsx to send a request to the /optimize endpoint:

```javascript
  const handleOptimize = async () => {
    try {
      const response = await fetch('http://localhost:3000/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `As a prompt engineering expert, please generate an English prompt based on the answers to the 6 questions below, targeting AI beginners. The prompt must incorporate the content from all 6 answers to help formulate high-quality questions for AI. Please provide only the prompt itself, without any additional content.

What Role you want AI to play? ${form.role}.

What Audience you want AI to generate content for? ${form.audience}.

What Boundary should AI focus on for this discussion? ${form.boundary}.

What Purpose you want AI to help you achieve? ${form.purpose}.

What Output format you want AI to generate? ${form.output}.

What Concern you have about this discussion with AI? ${form.concern}.`,
        }),
      });

      const data = await response.json();
      setOptimizedPrompt(data.optimizedPrompt);
    } catch (error) {
      console.error(error);
      setOptimizedPrompt('Failed to optimize prompt. Please try again.');
    }
  };
```
**Step 9: Add CORS**

The code above includes CORS using the cors middleware.

**Step 10: Create a .env file**

Create a .env file in the root of your project and add your DeepSeek API key:

```toml
DEEPSEEK_API_KEY=YOUR_DEEPSEEK_API_KEY
```
## Directory Structure:
```shell
promptyoo/
├── src/
│   ├── App.tsx
│   ├── ...
├── server.js
├── .env
├── package.json
├── ...
```
## Setup Requirements:

Install Node.js and npm.
Run npm install express cors dotenv in your project directory.
Create a .env file with your DeepSeek API key.
Run node server.js to start the backend server.
Run npm run dev to start the frontend development server.
This setup provides a secure and flexible way to integrate the DeepSeek API into your Promptyoo application.