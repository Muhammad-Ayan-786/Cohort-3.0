import { Star } from "lucide-react";

const StartRating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-2.5 h-2.5 ${rating > i
            ? "text-amber-400 fill-amber-400"
            : "text-white/15 fill-white/15"
            }`}
          strokeWidth={2}
        />
      ))}
    </>
  )
}

export default StartRating