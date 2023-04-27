import { Experience, type Milestone } from "../routes/types.d.ts";

interface MilestoneProps {
  data: Milestone;
}

interface ExperienceProps {
  data: Experience;
}

const Milestone = ({ data }: MilestoneProps) => (
  <div>
    <div class="flex justify-between md:flex-col">
      <div class="md:order-2">
        <h4>{data.name}</h4>
        <h5>{data.role}</h5>
        <ul>
          {data.tasks.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <p class="flex-shrink-0 md:order-1 md:mb-0.2">{data.date}</p>
    </div>
  </div>
);
const Experience = ({ data }: ExperienceProps) => (
  <section>
    <h3>{data.title}</h3>
    <div class="space-y-3 lg:space-y-2">
      {data.jobs.map((job) => <Milestone data={job} />)}
    </div>
  </section>
);
export default Experience;

