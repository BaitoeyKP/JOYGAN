
import { Admin } from "./admin.entity";
import { Content } from "./content.entity";
import { User } from "./user.entity";
import { LogUser } from "./log.entity";

const entities = [User,Admin,Content,LogUser];

export {User,Admin,Content,LogUser};
export default entities;