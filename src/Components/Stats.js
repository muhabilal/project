import React, { useEffect, useState } from 'react';
import './Stats.css';

const formatNumber = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count;
};

const Counter = ({ target, label, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const increment = target / 100; // You can adjust the speed of the animation here

      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          current = target;
        }

        setCount(Math.floor(current));

        if (current < target) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    }
  }, [target, isVisible]);

  return (
    <div className="counter">
      <p className="count">{formatNumber(count)}+</p>
      <p className='countLabel'>{label}</p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const statsSection = document.getElementById('statsSection');

      if (statsSection) {
        const statsSectionTop = statsSection.offsetTop;
        const statsSectionHeight = statsSection.offsetHeight;

        if (scrollY >= statsSectionTop - window.innerHeight && scrollY <= statsSectionTop + statsSectionHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='stats' style={{textAlign:'center'}}>
      {/* <h1 className='allText' style={{ color: 'var(--color-primary)', textAlign: 'center' }}>
        <span className='horizontalLine'></span>WE’RE WORKING WITH
      </h1> */}
      <h1 className='allText animated-buttonH' > <span></span>
  <span></span>
  <span></span>
  <span></span>WE’RE WORKING WITH</h1>
      <div id="statsSection" className='counterSection'>
        <Counter target={2000} label="Project Completed" isVisible={isVisible} />
        <Counter target={10} label="Team Members" isVisible={isVisible} />
        <Counter target={300} label="Clients" isVisible={isVisible} />
      </div>
     
    </div>
  );
};

export default Stats;