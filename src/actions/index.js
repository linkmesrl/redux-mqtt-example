export const SAVE_DEVICE = '/App/SAVE_DEVICE';

export const saveDevice = (id, data) => ({
  type: SAVE_DEVICE,
  device: {
    id,
    data,
  },
});
