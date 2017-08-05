export const ADD_DEVICE = '/App/ADD_DEVICE';
export const DEVICE_DATA = '/App/DEVICE_DATA';
export const REMOVE_DEVICE = '/App/REMOVE_DEVICE';

export const addDevice = deviceParams => ({
  type: ADD_DEVICE,
  device: {
    id: deviceParams.deviceId,
    type: deviceParams.deviceType,
  },
});

export const onData = deviceParams => ({
  type: DEVICE_DATA,
  device: {
    id: deviceParams.deviceId,
    value: deviceParams.value,
  },
});

export const removeDevice = deviceParams => ({
  type: REMOVE_DEVICE,
  device: {
    id: deviceParams.deviceId,
  },
});
