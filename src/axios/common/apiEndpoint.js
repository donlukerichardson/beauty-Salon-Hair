const Host = {
    ROOT: "http://localhost:3000",
    BACKEND:
      !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "http://localhost:3001",
    PREFIX: "/v1/api",
  };
  const ApiEndpoints = {
    contactEndpoints: {
      route: `${Host.PREFIX}/contact`,
      create: `/create`,
      list: `/list`,
    }
}
export { ApiEndpoints, Host };