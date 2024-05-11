import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article
        className="relative w-full flex flex-col items-center justify-center 
      py-8 sm:py-0
      space-y-8"
      >
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Whether you have a question, feedback, or just want to say hello,
            the wizard is here for you. Drop a line using the form below, and
            I&apos;ll get back to you promptly. Your thoughts matter to me, and
            I&apos;m committed to providing you with the best support possible.
            Looking forward to hearing from everyone!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
