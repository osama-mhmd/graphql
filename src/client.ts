fetch("http://localhost:4000/graphql", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    query: `
      query {
        hello
      }
    `,
  }),
}).then(async (res) => {
  const response = await res.json();
  console.log(response);
});
