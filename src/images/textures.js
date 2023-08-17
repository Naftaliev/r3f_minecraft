import { TextureLoader } from 'three'

import  {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

const dirtTexture = new TextureLoader(dirtImg)
const logTexture = new TextureLoader(logImg)
const grassTexture = new TextureLoader(grassImg)
const woodTexture = new TextureLoader(woodImg)
const glassTexture = new TextureLoader(glassImg)
const groundTexture = new TextureLoader(grassImg)

export {
	dirtTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	logTexture,
}
