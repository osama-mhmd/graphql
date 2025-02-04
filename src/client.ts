fetch("http://localhost:4000", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    query: `
      query {
        user (id: 1) {
          name
          email
        }
      }
    `,
  }),
}).then(async (res) => {
  const response = await res.json();
  console.log(response);
});
