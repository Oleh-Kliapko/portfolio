import ContentLoader, { Facebook, Instagram } from "react-content-loader";

export const MyLoader = () => (
  <ContentLoader title="Loading... Please wait" width={400} height={400} />
);
export const MyFacebookLoader = () => (
  <Facebook title="Loading... Please wait" width={400} height={400} />
);
export const MyInstagramLoader = () => (
  <Instagram title="Loading... Please wait" width={400} height={400} />
);
