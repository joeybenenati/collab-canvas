import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ViewCanvas from '../components/ViewCanvas.jsx';
import {Canvases} from '../../api/canvases.js'

export default CanvasContainer = createContainer((props) => {
  Meteor.subscribe('canvas', props.params.canvasId)
  return {...Canvases.findOne(props.params.canvasId)}
}, ViewCanvas);