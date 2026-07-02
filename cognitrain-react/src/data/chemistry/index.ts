import type { SubjectModule } from "../../engine/types";
import { chemistryConcepts } from "./concepts";

export const chemistryModule: SubjectModule = {
  id: "chemistry",
  name: "AP Chemistry",
  concepts: chemistryConcepts,
};
