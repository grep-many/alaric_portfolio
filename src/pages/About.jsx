import { name } from "~/config";
import { experiences, skills } from "../constants";
import { Timeline, TimelineItem } from "../components/timeline";
import CTA from "../components/CTA";

const About = () => (
  <section className="max-container">
    <h1 className="head-text">
      Hello, I'm{" "}
      <span className="blue-gradient_text font-semibold drop-shadow">
        {name.split(" ")[0]}
      </span>
      👋
    </h1>

    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>
        Software Engineer based in Croatia, specializing in technical education
        through hands-on learning and building applications.
      </p>
    </div>

    <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Skills</h3>
      <div className="mt-16 flex flex-wrap justify-center items-center gap-20">
        {skills.map(({ name, imageUrl }) => (
          <div key={imageUrl} className="block-container size-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={imageUrl}
                alt={name}
                className="size-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="py-16">
      <h3 className="subhead-text">Work Experience.</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </p>
      </div>

      <div className="mt-12 flex max-lg:justify-center">
        <Timeline>
          {experiences.map(
            ({ title, company_name, icon, iconBg, date, points }, i) => (
              <TimelineItem
                key={company_name}
                date={date}
                isLeft={i % 2 === 0}
                iconStyle={{ background: iconBg }}
                icon={
                  <div className="flex justify-center items-center size-full shadow-[inset_0_6px_12px_rgba(0,0,0,0.20)] rounded-full">
                    <img
                      src={icon}
                      alt={company_name}
                      className="size-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ),
          )}
        </Timeline>
      </div>
    </div>
    <hr className="border-slate-200" />
    <CTA />
  </section>
);

export default About;
