import { useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useEffect } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
const JUMP_FORCE = 10

export const Player = () => {
    const actions = useKeyboard()
    console.log('actions', Object.entries(actions).filter(([k,v]) => v))

    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 2, 0]
    }))

    // useRef is used to create a mutable value, that changes without re-render
    const vel = useRef([0,0,0])
    useEffect(() => {
        // subscribe method is used to connect two values and update onchange
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])
 

    // useRef is used to create a mutable value, that changes without re-render
    const pos = useRef([0,0,0])
    useEffect(() => {
        // subscribe method is used to connect two values and update onchange
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    // update camera position, literally copies XYZ from player pos
    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
        
        if(actions.jump) {
            api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
        }
        
    })

    return (
        <mesh ref={ref}>
        </mesh>
    )
}
