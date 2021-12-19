const scrollTo = (event, targetRef) => {
  event.preventDefault();
  targetRef.current.scrollIntoView({ behavior: 'smooth' });
};

export default scrollTo;
