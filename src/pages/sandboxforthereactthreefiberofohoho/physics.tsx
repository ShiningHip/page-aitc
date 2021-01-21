import SandboxLayout from "components/SandboxLayout";
import { FC } from "react";
import { Canvas } from "react-three-fiber";
import { Physics, useBox, usePlane } from "use-cannon";

interface Props {
  position: number[]
  args: [(number | undefined)?, (number | undefined)?, (number | undefined)?, (number | undefined)?] | undefined
}

const Box: FC<Props> = ({ position, args }: Props) => {
  const [ref] = useBox(() => ({ mass: 1, position }))
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' />
    </mesh>
  )
}

const Plane: FC<Props> = ({ position, args }: Props) => {
  const [ref] = usePlane(() => ({ mass: 0, position, rotation: [-Math.PI  / 2, 0, 0] }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry attach='geometry' args={args} />
      <meshPhongMaterial attach='material' color='#272727' />
    </mesh>
  )
}

const Index: FC<Props> = () => (
  <SandboxLayout>
    <div className='canvas' >
      <Canvas camera={{fov: 60, aspect: 1, near: 1, far: 2000, position: [0, 20, 0]}}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.6}
          position={[30, 100, 30]}
          angle={0.2}
          penumbra={1}
          castShadow
        />
        <Physics gravity={[0, -98, 0]}>
          <Plane position={[0, -30, 0]} args={[1000, 1000]} />
          <Box position={[1, 0, 1]} args={[2, 2, 2]} />
          <Box position={[1, 0, 1]} args={[1, 1, 5]} />
          <Box position={[2, 1, 5]} args={[3, 3, 3]} />
          <Box position={[0, 0, 6]} args={[2, 4, 2]} />
          <Box position={[-1, 1, 8]} args={[2, 3, 2]} />
          <Box position={[0, 2, 3]} args={[5, 5, 1]} />
          <Box position={[2, -1, 13]} args={[1, 1, 10]} />
        </Physics>
      </Canvas>
    </div>
  </SandboxLayout>
)

export default Index