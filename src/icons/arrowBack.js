import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowBack(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.125 21.1L6.7 12.7a.871.871 0 01-.212-.325A1.098 1.098 0 016.425 12a1.1 1.1 0 01.063-.375.872.872 0 01.212-.325l8.425-8.425c.233-.233.525-.35.875-.35s.65.125.9.375.375.542.375.875a1.2 1.2 0 01-.375.875L9.55 12l7.35 7.35c.233.233.35.52.35.862 0 .342-.125.638-.375.888a1.2 1.2 0 01-.875.375 1.2 1.2 0 01-.875-.375z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ArrowBack
