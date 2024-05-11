import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Web Architect
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base ">
            In the realm where digital dreams intertwine with coding spells, I
            am the legendary Web Wizard, a master of pixels and pathways. With a
            flick of my mouse and a chant of HTML, I weave intricate tapestries
            of virtual reality, breathing life into static screens. My arsenal
            includes CSS charms and JavaScript incantations, allowing me to bend
            the very fabric of cyberspace to my will. From crafting mesmerizing
            user experiences to conjuring seamless functionalities, I am the
            architect of the online realm, sculpting digital landscapes with
            boundless creativity and technical prowess. In the saga of the
            internet, I reign supreme as the Web Wizard, a magus of the digital
            age.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <div className="font-semibold w-full text-left text-2xl sm:text-5xl">
            12+ <sub className="font-semibold text-base">Projects</sub>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <div className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">
              years of web-Dev experience
            </sub>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=pratul03&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt=""
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=pratul03&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Pratul02 "
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,bootstrap,js,c,py,anaconda,java,spring,eclipse,maven,hibernate,idea,express,ubuntu,figma,vscode,git,github,gmail,linux,vercel,vite,materialui,tailwind,mongodb,mysql,nodejs,react,redis,redux,nextjs,npm,postman,threejs,powershell"
            alt="Pratul02"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=pratul03&theme=dark&hide_border=true&type=png&border=EB545401&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Pratul02 "
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=pratul03&repo=Hotel-Booking-Management-System&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
