import Marquee from "react-fast-marquee";

const messages = [
  "🚀 Limited Time Offer: Get 20% off on all digital marketing services!",
  "📈 Boost your online presence with our exclusive packages!",
  "🎉 New Client Special: First month at 50% off!",
  "🛍️ Enjoy a 15% discount on social media management services!",
  "🌟 Refer a friend and get a $10 discount towards your next campaign!",
];

const SmoothTicker = () => {
  return (
    <div className="fixed bottom-0 w-full bg-navy-500 h-20 flex items-center z-50 overflow-hidden">
      <Marquee speed={100} pauseOnHover={true} gradient={false}>
        {messages.map((message, index) => (
          <div key={index} className="flex items-center">
            <p className="text-white text-lg inline-block mr-12 font-bold">
              {message}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SmoothTicker;
