// Correct manner
// useLayoutEffect to operations what need disposition DOM
const CorrectComponent = () => {
 const ref = useRef();


  useLayoutEffect(() => {
   if(ref.current) {
      ref.current.style.backgroundColor = "blue";
}
}, []);
  return <div ref={ref}>example test</div>;
};