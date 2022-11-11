import * as React from "react"
import { StyleSheet,Dimensions } from "react-native"
import Svg, { Path } from "react-native-svg"



function VectorCabecera(props) {

    const windowWidth = Dimensions.get('window').width;

  return (
    <Svg
      width="100%"
      height="100%"
      viewBox=" 100 5 180 270"
      {...props}
    >
      <Path
        width="100%"
        d="M197.268 265.938C294.4 252.941 358.654 192.289 368 166.961L366.999 0 0 2V169.46c18.191 39.824 120.36 106.768 197.268 96.477z"
      />
    </Svg>
  )
}

export default VectorCabecera

