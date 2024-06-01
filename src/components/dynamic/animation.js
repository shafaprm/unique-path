// import { motion, useAnimate } from "framer-motion";

// const resetAnimation = async (animate) => {
//   animate("#box-0", { backgroundColor: "#fff" });
//   animate("#box-1", { backgroundColor: "#fff" });
//   animate("#box-2", { backgroundColor: "#fff" });
//   animate("#box-3", { backgroundColor: "#fff" });
//   animate("#box-4", { backgroundColor: "#fff" });
//   animate("#box-5", { backgroundColor: "#fff" });
//   animate("#box-6", { backgroundColor: "#fff" });
//   animate("#box-7", { backgroundColor: "#fff" });
//   animate("#box-8", { backgroundColor: "#fff" });
//   animate("#box-9", { backgroundColor: "#fff" });
//   animate("#box-10", { backgroundColor: "#fff" });
//   animate("#box-11", { backgroundColor: "#fff" });

//   animate("#box-0 .right-arrow", { opacity: 0 });
//   animate("#box-0 .down-arrow", { opacity: 0 });
//   animate("#box-1 .right-arrow", { opacity: 0 });
//   animate("#box-1 .down-arrow", { opacity: 0 });
//   animate("#box-2 .right-arrow", { opacity: 0 });
//   animate("#box-2 .down-arrow", { opacity: 0 });
//   animate("#box-3 .right-arrow", { opacity: 0 });
//   animate("#box-3 .down-arrow", { opacity: 0 });
//   animate("#box-4 .right-arrow", { opacity: 0 });
//   animate("#box-4 .down-arrow", { opacity: 0 });
//   animate("#box-5 .right-arrow", { opacity: 0 });
//   animate("#box-5 .down-arrow", { opacity: 0 });
//   animate("#box-6 .right-arrow", { opacity: 0 });
//   animate("#box-6 .down-arrow", { opacity: 0 });
//   animate("#box-7 .right-arrow", { opacity: 0 });
//   animate("#box-7 .down-arrow", { opacity: 0 });
//   animate("#box-8 .right-arrow", { opacity: 0 });
//   animate("#box-8 .down-arrow", { opacity: 0 });
//   animate("#box-9 .right-arrow", { opacity: 0 });
//   animate("#box-9 .down-arrow", { opacity: 0 });
//   animate("#box-9 .right-arrow", { opacity: 0 });
//   animate("#box-10 .down-arrow", { opacity: 0 });
//   animate("#box-10 .right-arrow", { opacity: 0 });
// };

// const gridAnimation = async (animate, animateCode) => {
//   resetAnimation(animate);
//   // SHOW OBSTACLE
//   animate("#box-4", { backgroundColor: "#D65775" }, { duration: 1 });
//   await animate("#box-6", { backgroundColor: "#D65775" }, { duration: 1 });

//   animate("#box-4", { backgroundColor: "#fff" }, { duration: 1, delay: 1 });
//   await animate(
//     "#box-6",
//     { backgroundColor: "#fff" },
//     { duration: 1, delay: 1 }
//   );

//   await animate(
//     "#box-0",
//     { backgroundColor: "#4B65BA", color: "#fff" },
//     { duration: 1 }
//   );
// };

// const codeAnimation = async (animate) => {
//   await animate('#code-0', {backgroundColor: "#000"}, {duration: 0.2})

//   await animate('#code-0', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})

//   animate('#code-7', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.7})
//   await animate('#code-8', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.7})

//   animate('#code-7', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 0.7})
//   await animate('#code-8', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 0.7})

//   await animate('#code-3', {backgroundColor: "#000"}, {duration: 0.5, delay: 0.3})
//   await animate('#code-3', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 0.3})

//   animate('#code-7', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.7})
//   await animate('#code-8', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.7})

//   animate('#code-7', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 5})
//   await animate('#code-8', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 5})

//   await animate('#code-3', {backgroundColor: "#000"}, {duration: 0.5, delay: 0})
//   await animate('#code-3', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 0.7})

//   animate('#code-7', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.7})
//   await animate('#code-8', {backgroundColor: "#000"}, {duration: 0.2, delay: 0.7})

//   animate('#code-7', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})
//   await animate('#code-8', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 2})

//   await animate('#code-1', {backgroundColor: "#000"}, {duration: 0.2})
//   await animate('#code-1', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 1})

//   animate('#code-7', {backgroundColor: "#000"}, {duration: 0.2, delay: 1.5})
//   await animate('#code-8', {backgroundColor: "#000"}, {duration: 0.2, delay: 1.5})

//   animate('#code-7', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 1})
//   await animate('#code-8', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 1 })

//   await animate('#code-1', {backgroundColor: "#000"}, {duration: 0.2})
//   await animate('#code-1', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 1})

//   await animate('#code-5', {backgroundColor: "#000"}, {duration: 0.2})
//   await animate('#code-5', {backgroundColor: "#52BC69"}, {duration: 0.2, delay: 1})
// }


// export { gridAnimation, codeAnimation, resetAnimation };
