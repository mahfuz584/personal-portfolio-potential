import DynamicTitle from "@/components/shared/DynamicHeading";
import Container from "@/components/ui/container";
import TestimonialList from "./TestimonialList";

const Testimonial = () => {
  return (
    <div id="testimonials">
      <Container>
        <DynamicTitle
          heading="Testimonials"
          subHeading="Exceptional UX, web, app, and graphic design services. Delivered stunning, user-friendly designs that truly make an impact"
        />
      </Container>
      <TestimonialList />
    </div>
  );
};

export default Testimonial;
