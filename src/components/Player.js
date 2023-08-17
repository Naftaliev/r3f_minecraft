import { useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useEffect } from "react"

export const Player = () => {
    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }))

    // useRef is used to create a mutable value, that changes without re-render
    const pos = useRef([0,0,0])

    useEffect(() => {
        // subscribe method is used to connect two values and update onchange
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    // update camera position, literally copies XYZ from player pos
    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    })

    return (
        <mesh ref={ref}>
        </mesh>
    )
}
