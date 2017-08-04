export const ADD_DEVICE = '/App/ADD_DEVICE';
export const SAVE_DEVICE = '/App/SAVE_DEVICE';

export const addDevice = deviceParams => ({
  type: ADD_DEVICE,
  device: {
    id: deviceParams.deviceId,
    type: deviceParams.deviceType,
  },
});

export const saveDevice = (id, data) => ({
  type: SAVE_DEVICE,
  device: {
    id,
    data,
  },
});
