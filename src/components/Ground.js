import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
import { NearestFilter, RepeatWrapping } from "three"

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI/2,0,0], position:[0,0,0]
    }))

    // avoid bluriness

    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100,100)

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial attach='material' map={groundTexture}/>

        </mesh>
    )
}