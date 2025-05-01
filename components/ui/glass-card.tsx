
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  animate?: boolean
}

export function GlassCard({ children, className, animate = true, ...props }: GlassCardProps) {
  const Card = animate ? motion.div : "div"
  
  return (
    <Card
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
      className={cn(
        "backdrop-blur-lg bg-black/30 border border-white/10 rounded-xl shadow-[0_0_15px_rgba(149,128,255,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  )
}
