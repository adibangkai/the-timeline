export const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("FETCH ERROR!");
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const signup = (user) => {
  return fetcher({ url: "/api/signup", method: "post", body: user });
};

export const signin = (user) => {
  return fetcher({ url: "/api/signin", method: "post", body: user });
};

export const logout = async () => {
  await fetch("/api/logout");
  // return fetcher({
  //   url: "/api/logout",
  //   method: "POST",
  //   body: { name },
  //   json: false,
  // });
};

export const addTokoh = async (tokoh) => {
  return fetcher({
    url: "/api/tokoh",
    method: "POST",
    body: tokoh,
    json: true,
  });
};
export const editTokoh = async (tokoh) => {
  return fetcher({
    url: "/api/tokoh",
    method: "PUT",
    body: tokoh,
    json: true,
  });
};

export const addTopic = async (topic) => {
  return fetcher({
    url: "/api/topic",
    method: "POST",
    body: topic,
    json: true,
  });
};

export const addQuotes = async (quote) => {
  return fetcher({
    url: "/api/quote",
    method: "POST",
    body: quote,
    json: true,
  });
};

export const addSaran = async (saran) => {
  return fetcher({
    url: "/api/saran",
    method: "POST",
    body: saran,
    json: true,
  });
};
export const addKontribusi = async (kontribusi) => {
  return fetcher({
    url: "/api/kontribusi",
    method: "POST",
    body: kontribusi,
    json: true,
  });
};

export const getTopic = async (topicId) => {
  return fetcher({
    url: "/api/topic",
    method: "GET",
    body: { topicId },
    json: true,
  });
};
