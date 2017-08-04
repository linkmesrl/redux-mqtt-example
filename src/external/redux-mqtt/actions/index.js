export const ADD_DEVICE = '/App/ADD_DEVICE';
export const DEVICE_DATA = '/App/DEVICE_DATA';
export const SAVE_DEVICE = '/App/SAVE_DEVICE';

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
    value: deviceParams.value,
    id: deviceParams.deviceId,
  },
});

export const saveDevice = (id, data) => ({
  type: SAVE_DEVICE,
  device: {
    id,
    data,
  },
});
