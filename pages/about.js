import NextHead from "@/components/Head";

export default function Home() {
  const paragraphStyles = "mb-4 lg:leading-[1.8]";
  return (
    <>
      <NextHead
        title="About Junkerri Art"
        description="Learn about Aastha Kumari Karki who is a multidisciplinary artist/musician based in Austin, TX who creates under the name Junkerri. She has dedicated her career to creative expression and community service."
      />
      <div className="container xl:max-w-screen-lg mx-auto py-12 px-6">
        <div className="text-lg md:text-xl text-gray-700">
          <p className={paragraphStyles}>
            Aastha Kumari Karki is a multidisciplinary artist/musician based in
            Austin, TX who creates under the name Junkerri. She has dedicated
            her career to creative expression and community service. As a
            first-generation immigrant from Nepal, Aastha brings a unique
            perspective to her work that is informed by her cultural heritage
            and personal experience.
          </p>
          <p className={paragraphStyles}>
            In addition to her creative pursuits, Aastha is passionate about
            using her skills to help others. She currently works at a non-profit
            organization in Austin that assists the Asian diaspora with health
            navigation programs through language justice based work. Through her
            role, Aastha is able to use her language skills and cultural
            knowledge to help members of her community navigate the complex
            healthcare system.
          </p>
          <p className={paragraphStyles}>
            Aastha's artistic work spans a variety of mediums and she is
            constantly exploring new forms of creative expression. Her music and
            art are deeply personal, often drawing from her own experiences and
            emotions. Aastha remains committed to her community and is always
            looking for new ways to give back.
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
}
