import DynamicTitle from "../shared/DynamicHeading";
import CustomBtn from "../ui/button";
import Container from "../ui/container";

const ContactMe = () => {
  return (
    <Container id="contact">
      <DynamicTitle
        heading="Lets Design Together"
        subHeading="I am available for freelance work according to your choice lets go. Let's create something awesome together!"
      />
      <div className="flex flex-col md:flex-row w-fit mx-auto sm:items-center items-start gap-4">
        <input
          style={{
            borderRadius: "8px",
            border: "1px solid #AFAFAF",
          }}
          type="email"
          required
          className="sm:w-[627px]  w-[320px] sm:h-[54px] h-[40px] rounde-md bg-bgGray dark:text-[#797979] text-text-lg dark:text-text-dark px-4"
          placeholder="Enter your email"
        />
        <CustomBtn>Contact Me</CustomBtn>
      </div>
    </Container>
  );
};

export default ContactMe;
