import type { Skills as SkillsData, SkillSection } from "../routes/types.ts";

interface SkillSectionProps {
  section: SkillSection;
}

interface SkillsProps {
  data: SkillsData;
}

function Section({ section }: SkillSectionProps) {
  return (
    <section class="skills__group">
      <h4>{section.title}</h4>
      <ul class="skills__list">
        {section.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section
      id="section-skills"
      class="content-section"
      aria-labelledby="skills-title"
    >
      <h3 id="skills-title" class="section-title">
        {data.title}
      </h3>
      <div class="section-body skills">
        {data.sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}
