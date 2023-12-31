import userRouting from "./User";
import companyOrganisation from "./company";
import ProjectRouting from "./project";
import Testimonial from "./testimonial";
import Videos from './video'

const importRoutings = (app: any) => {
  app.use("/api/auth", userRouting);
  app.use("/api/organisation", companyOrganisation);
  app.use("/api/project", ProjectRouting);
  app.use("/api/testimonial", Testimonial);
  app.use("/api/videos",Videos)
};

export default importRoutings;
