import {Marker as GoogleMapMarker} from '@react-google-maps/api'

export const Marker = ({position}) => {
    return <Marker position={position} icon={{url:'../images/monkey.svg'}} /> 
}