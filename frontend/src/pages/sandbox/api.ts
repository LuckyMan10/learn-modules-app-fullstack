import axios from 'axios';
import {
  registrationData,
  loginData,
  updateAccountInfoData,
  moduleData,
} from './types';

const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/auth`,
  headers: {
    api_key: '1f518b6c-60d5-11ec-8607-0242ac130002',
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRhbmlsQW5kcmVldjQwQG1haWwucnUiLCJ1c2VybmFtZSI6IkRhbmlsQW5kcmVldjQwIiwicGFzc3dvcmQiOiIkMmIkMDQkUUZRYnZ6Vmh6UUxySU91bGpVZnZGTzhhVk1jOVo0Nk5mb3JxeXRrNDRRUENFYi5MajZhYWkiLCJpZCI6ImZiMGU5N2VlLWQ5YmYtNDU4ZC05MGVmLWZkZDA5ZmFiYzExNCIsImlhdCI6MTY0MDI0ODc3OCwiZXhwIjoxNjQwMzM1MTc4fQ.8e_rdVtllaWEEzSKb_RKYpxL_U3BDU8gDooIXTp2FJU`
  },
  withCredentials: true,
});
const userApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/user`,
  headers: {
    api_key: '1f518b6c-60d5-11ec-8607-0242ac130002',
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRhbmlsQW5kcmVldjQwQG1haWwucnUiLCJ1c2VybmFtZSI6IkRhbmlsQW5kcmVldjQwIiwicGFzc3dvcmQiOiIkMmIkMDQkUUZRYnZ6Vmh6UUxySU91bGpVZnZGTzhhVk1jOVo0Nk5mb3JxeXRrNDRRUENFYi5MajZhYWkiLCJpZCI6ImZiMGU5N2VlLWQ5YmYtNDU4ZC05MGVmLWZkZDA5ZmFiYzExNCIsImlhdCI6MTY0MDI0ODc3OCwiZXhwIjoxNjQwMzM1MTc4fQ.8e_rdVtllaWEEzSKb_RKYpxL_U3BDU8gDooIXTp2FJU`
  },
  withCredentials: true,
});

const registration = async (data: registrationData) => {
  try {
    const res = await authApi.post('/registration', data);
    return res;
  } catch (e) {
    throw e;
  }
};
const login = async (data: loginData) => {
  try {
    const res = await authApi.post('/login', data);
    return res;
  } catch (e) {
    throw e;
  }
};
const refresh = async () => {
  try {
    const res = await authApi.get('/refresh');
    return res;
  } catch (e) {
    throw e;
  }
};
//must be remove refresh-token from cookie
const logout = async () => {
  try {
    const res = await authApi.get('/logout');
    return res;
  } catch (e) {
    throw e;
  }
};
const removeAcc = async () => {
  try {
    const res = await authApi.delete('/delete');
    return res;
  } catch (e) {
    throw e;
  }
};

const getAccountInfo = async () => {
  try {
    const res = await userApi.get('/accountInfo');
    return res;
  } catch (e) {
    throw e;
  }
};
const updateAccountInfo = async (data: updateAccountInfoData) => {
  try {
    const res = await userApi.put('/accountInfo', data);
    return res;
  } catch (e) {
    throw e;
  }
};

const getActiveModules = async () => {
  try {
    const res = await userApi.get('/activeModules');
    return res;
  } catch (e) {
    throw e;
  }
};
//just add new module
const addActiveModule = async (data: moduleData) => {
  try {
    const res = await userApi.post('/activeModules', data);
    return res;
  } catch (e) {
    throw e;
  }
};
//replaces the old module with a new one
const updateActiveModule = async (data: moduleData) => {
  try {
    const res = await userApi.put('/activeModules', data);
    return res;
  } catch (e) {
    throw e;
  }
};
const deleteActiveModule = async (id: string) => {
  try {
    const res = await userApi.delete(`/activeModules?id=${id}`);
    return res;
  } catch (e) {
    throw e;
  }
};

const getArchive = async () => {
  try {
    const res = await userApi.get('/archive');
    return res;
  } catch (e) {
    throw e;
  }
};

//if id === undefined => remove all from archive
//if id !== undefined => remove by id
const removeArchive = async (id?: string) => {
  try {
    if (id) {
      const res = await userApi.delete(`/archive?id=${id}`);
      return res;
    }
    if (!id) {
      const res = await userApi.delete('/archive');
      return res;
    }
  } catch (e) {
    throw e;
  }
};

export {
  registration,
  login,
  refresh,
  logout,
  removeAcc,
  getAccountInfo,
  updateAccountInfo,
  getActiveModules,
  addActiveModule,
  updateActiveModule,
  deleteActiveModule,
  getArchive,
  removeArchive,
};
