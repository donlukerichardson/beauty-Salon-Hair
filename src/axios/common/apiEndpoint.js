const Host = {
    ROOT: "https://back-salon.herokuapp.com",
    BACKEND:
      !process.env.NODE_ENV || process.env.NODE_ENV === "development"
        ? "https://api.lamassati.ma"
        : "https://api.lamassati.ma",
    PREFIX: "/v1/api",
  };
  const ApiEndpoints = {
    AppointmentEndpoints: {
      route: `${Host.PREFIX}/appointment`,
      list: `/list`,
      create: `/create` , 
      times: `/times` , 
      
  },
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create`,
  },
}
export { ApiEndpoints, Host };