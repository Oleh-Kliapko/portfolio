import ContentLoader, { Facebook, Instagram } from "react-content-loader";

export const MyLoader = () => <ContentLoader width={400} height={400} />;
export const MyFacebookLoader = () => (
  <Facebook
    style={{ position: "absolute" }}
    width={400}
    height={400}
    animate={true}
  />
);
export const MyInstagramLoader = () => <Instagram width={400} height={400} />;
