import { NearestFilter, TextureLoader } from 'three'

import  {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const woodTexture = new TextureLoader().load(woodImg)
const glassTexture = new TextureLoader().load(glassImg)
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
groundTexture.magFilter = NearestFilter

export {
	dirtTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	logTexture,
    groundTexture,
}
