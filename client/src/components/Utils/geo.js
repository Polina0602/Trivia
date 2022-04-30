const defaultCenter = {
  lat: 31.778903,
  lng: 35.240629,
};

export const getBrowserLocation = () => {
    return new Promise((resolve, reject) => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                const { latitude: lat, longitude: lng} = pos.coords;
                resolve({ lat, lng});
            },
            () => {
                reject(defaultCenter);
            },
            );
        }  else {
            reject(defaultCenter);
        }
    });
};