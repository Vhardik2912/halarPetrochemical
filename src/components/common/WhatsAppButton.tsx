import whatsappIcon from '@/assets/whatsappicon.svg';

const WhatsAppButton = () => {
  const whatsappNumber = '971551623344'; // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20products.`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-primary/20"
      title="Contact us on WhatsApp"
      aria-label="Contact us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
