import { fadeIn } from "@/utils/transitions";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "../../../node_modules/framer-motion/dist/index";
import { MotionTransitionProps } from "./MotionTransition.types";

export function MotionTransition(props: MotionTransitionProps){
    const {children, className} = props
    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    const mainControls = useAnimation()
    const slideControls= useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref}> 
            <motion.div
                variants= {fadeIn()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}