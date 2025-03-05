import React from "react";

const Goals = () => {
  const goals = [
    { icon: '/images/go3.svg', text: "Production of Italian cheese varieties" },
    { icon: '/images/go1.svg', text: "Adherence to the highest food safety standards." },
    { icon: '/images/go2.svg', text: "Building Saudi capabilities in the cheese industry." },
    { icon: '/images/go5.svg', text: "Satisfying customer tastes." },
    {
      icon: '/images/go4.svg',
      text: "Contributing to Saudi Arabia's Vision 2030 by increasing local content with global quality and innovation.",
    },
  ];

  return (
    <>
      <section className="py-12 text-center">
  <h2 className="text-3xl font-bold text-primary mb-8">Our Goals</h2>

  <div className="flex flex-wrap justify-center gap-x-6 gap-y-14 max-w-6xl mx-auto">
    {goals.map((goal, index) => (
      <div
        key={index}
        className="group border-2 border-primary rounded-3xl px-6 py-3 w-[300px] flex flex-col items-center text-center shadow-md 
                   transition-all duration-300 hover:bg-primary hover:text-white"
      >
        {/* <img 
          src={goal.icon} 
          alt="" 
          className="mb-5 transition-all duration-300 group-hover:filter group-hover:invert"
        /> */}
          <img 
          src={goal.icon} 
          alt="" 
          className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
        />
        <p className="text-secondary transition-all duration-300 group-hover:text-white">{goal.text}</p>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default Goals;
