import * as THREE from 'three'
import { FC, Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader, Dom } from 'react-three-fiber'
import SandboxLayout from 'components/SandboxLayout'

interface Props {
}

const Content: FC<Props> = () => {
  const ref = useRef<THREE.Mesh>()
  const texture = useLoader(THREE.TextureLoader, 'static/earth.jpg')
  useFrame(() => {
  })
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry attach='geometry' args={[300, 30, 30]} />
      <meshPhongMaterial
        attach='material'
        map={texture}
        side = {THREE.DoubleSide}/>
    </mesh>
  )
}

const Index: FC<Props> = () => {
  const Dolly = () => {
    useFrame(context => {
      const theta = 100 * context.clock.getElapsedTime() * Math.PI / 180 % (2 * Math.PI)
      context.camera.position.x = 1000 * Math.cos(theta)
      context.camera.position.z = 1000 * Math.sin(theta)
      context.camera.lookAt(0,0,0)
      context.camera.updateProjectionMatrix()
    })
    return null
  }
  return (
    <SandboxLayout>
      <div className='canvas'>
        <Canvas camera={{
          position: [0,0,0],
          fov: 45,
          aspect: 1,
          near: 1,
          far: 10000
        }}>
          <Suspense fallback={<Dom></Dom>}>
            <ambientLight color='#FFFFFF' position={[1,1,1]} />
            <Content/>
            <Dolly/>
          </Suspense>
        </Canvas>
      </div>
    </SandboxLayout>
  )
}

export default Index
