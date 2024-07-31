"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="W-ful">
      <CountUp
        decimal=","
        prefix="CFA "
        duration={2.75}
        decimals={2}
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
