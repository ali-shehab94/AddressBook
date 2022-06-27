import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';
const Map = ({ selectedPosition, setSelectedPosition, getName }) => {
    const Markers = () => {
        const map = useMapEvents({
            click(e) {
                setSelectedPosition([e.latlng.lat, e.latlng.lng]);
                console.log(selectedPosition);
                getName();
            },
        });
        return selectedPosition ? <Marker key={selectedPosition[0]} position={selectedPosition} interactive={false} icon={icon} /> : null;
    };
    return (
        <>
            <MapContainer center={selectedPosition} zoom='12'>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                <Markers />
            </MapContainer>
        </>
    );
};
export default Map;
