//Este archivo testea un modulo externo, con codigo nativo. Para ello mockea la dependencia, pues no se puede testear sino.
//La dependencia mockeada esta en __Mocks__
function getCurrentPosition() {
    return Promise.resolve({
        latitude: 0,
        longitude: 0,
        altitude: 0,
        accuracy: 0,
        speed: 0,
        time: 0,
        bearing: 0,
        provider: 0,
        verticalAccuracy: 0,
        course: 0,
    })
}

export default {getCurrentPosition};