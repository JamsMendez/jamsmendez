import { Section, type Skills } from "../routes/types.d.ts";

interface SectionProps {
  section: Section;
}

interface SkillsProps {
  data: Skills;
}

const Section = ({ section }: SectionProps) => {
  const { title, skills } = section;
  return (
    <>
      <h4 id="section-skills" >{title}</h4>
      <div class="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
        {skills.map((skill) => <p key={skill}>{skill}</p>)}
      </div>
    </>
  );
};

const Skills = ({ data }: SkillsProps) => (
  <section>
    <h3>{data.title}</h3>
    <div class="space-y-3">
      {data.sections.map((section) => <Section section={section} />)}
    </div>
  </section>
);

export default Skills;

