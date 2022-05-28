const Host = {
    ROOT: "https://back-salon.herokuapp.com",
    BACKEND:
      !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "https://back-salon.herokuapp.com"
        : "https://back-salon.herokuapp.com",
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