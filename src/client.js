import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_SC_PROJECT_ID,
  dataset: process.env.REACT_APP_SC_DATASET,
  useCdn: true,
  apiVersion: "2021-08-22",
});
