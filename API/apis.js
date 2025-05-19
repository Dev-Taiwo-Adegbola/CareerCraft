export async function getCareerAdvice(inputs) {
  const prompt = `Suggest 3 career paths for someone with these skills: ${inputs.skills} and interests: ${inputs.interest}. Give reasons. use html syntax, where bold texts use strong, ul, li`;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-8b-instruct:free",
        messages: [
          { role: "system", content: "You are a helpful career advisor." },
          { role: "user", content: prompt },
        ],
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Something went wrong");
  }
  let text = data.choices[0].message.content;
  console.log(text);
  return text;
}

export async function coverletter(params) {
  const prompt = `Generate a professional cover letter for the role of ${jobTitle} at ${companyName}. 
Here’s the user’s background: ${userExperience}.
Tone: ${writingStyle}`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3.3-8b-instruct:free",
      messages: [
        {
          role: "system",
          content:
            "You are a career assistant who writes professional cover letters.",
        },
        {
          role: "user",
          content: `Job Title: Frontend Developer\nCompany: Google\nExperience: 2 years in React, Next.js, Tailwind.\nStyle: Formal`,
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Something went wrong");
  }
  let text = data.choices[0].message.content;
  console.log(text);
  return text;
}
