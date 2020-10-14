export function Network(endpoint, { body, ...customConfig } = {}) {
  const headers = {
    "content-type": "application/json",
    Authorization: `Bearer ${Cookies.get("accessToken")}`,
  };

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  
  return fetch(endpoint, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      console.log(`Got response ${response.status}`, data);
      return data;
    } else {
      console.error(`${response.status} : '${data.message}'`);
      throw data;
    }
  });
}
