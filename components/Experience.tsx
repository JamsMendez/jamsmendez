import type {
  Experience as ExperienceData,
  Milestone as MilestoneData,
} from "../routes/types.ts";

interface MilestoneProps {
  data: MilestoneData;
}

interface ExperienceProps {
  data: ExperienceData;
}

function Milestone({ data }: MilestoneProps) {
  return (
    <article class="milestone">
      <div class="milestone__content">
        <h4>{data.name}</h4>
        <h5>{data.role}</h5>
        <ul>
          {data.tasks.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <p class="milestone__date">{data.date}</p>
    </article>
  );
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section class="content-section" aria-labelledby="experience-title">
      <h3 id="experience-title" class="section-title">
        {data.title}
      </h3>
      <div class="section-body experience-list">
        {data.jobs.map((job) => <Milestone key={job.name} data={job} />)}
      </div>
    </section>
  );
}
