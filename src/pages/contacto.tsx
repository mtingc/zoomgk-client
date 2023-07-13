import { ContactImage, ContactForm } from "@/components";
import { WebLayout } from "@/layouts";

const ContactoPage = () => {
  return (
    <WebLayout>
      <div className="relative bg-white">
        <ContactImage />
        <ContactForm />
      </div>
    </WebLayout>
  );
};

export default ContactoPage;
