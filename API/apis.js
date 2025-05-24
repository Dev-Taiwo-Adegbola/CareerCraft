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

export const getStatesFromApi = async () => {
  let response = await fetch("https://nga-states-lga.onrender.com/fetch");
  let json = await response.json();
  console.log(json);

  return json;
};

export const fetchJobs = async (title, location) => {
  const url = `https://jsearch.p.rapidapi.com/search?query=${title}+jobs+in+${location}&page=1&num_pages=1&country=ng&date_posted=all`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b2db7af194mshfc225507111ec17p19171fjsn236fae3f7c6f",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
