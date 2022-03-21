import * as types from './actionType';
import axios from 'axios';
import {apiUrl} from '../../configurations/config';
import Geolocation from '@react-native-community/geolocation';

// Auth Action
export const userSignup = (data, _onSignUpFailed) => async dispatch => {
  try {
    const response = await axios.post(`${apiUrl}/register`, data);

    if (response?.data?.status) {
      dispatch({
        type: types.USER_SIGNUP,
        payload: response?.data?.data,
      });
    } else {
      dispatch({
        type: types.ERROR_MODAL,
        payload: {
          msg:
            response?.data?.errors?.email[0] ||
            response?.data?.errors?.phone[0] ||
            'Something went wrong.',
          status: true,
          title: 'Sign-Up Failed!',
        },
      });
      _onSignUpFailed();
    }
  } catch (error) {
    console.log(
      'CATCH ERROR RESPONSE STATUS: ',
      JSON.stringify(error?.response?.data, null, 2),
    );
    _onSignUpFailed();
    dispatch({
      type: types.ERROR_MODAL,
      payload: {
        msg:
          error?.response?.data?.errors?.email[0] ||
          error?.response?.data?.errors?.phone[0] ||
          'Something went wrong',
        status: true,
        title: 'Sign-Up Failed!',
      },
    });
    // console.log(error?.response?.data?.errors?.email[0])
  }
};

export const userLogin = (data, _onLoginFailed) => async dispatch => {
  try {
    const URL = `https://ed12-110-93-244-255.ngrok.io/api/login`;
    const response = await axios.post(URL, data);
    console.log(response?.data);
    if (response.data.status) {
      if (response?.data?.data?.role_id == 2) {
        dispatch({
          type: types.USER_LOGIN,
          payload: {
            userData: response?.data?.data,
            accessToken: response.data?.data.token,
          },
        });
      } else {
        dispatch({
          type: types.ERROR_MODAL,
          payload: {
            title: 'Login Failed',
            msg: "Email doesn't match to any client.",
            status: true,
          },
        });
        _onLoginFailed();
      }
    }

    if (response.data?.data.length === 0) {
      _onLoginFailed();
      dispatch({
        type: types.ERROR_MODAL,
        payload: {
          msg: response.data.msg,
          title: 'Login Failed',
          status: true,
        },
      });
    }
  } catch (error) {
    _onLoginFailed();
    dispatch({
      type: types.ERROR_MODAL,
      payload: {
        status: true,
        msg: error?.message || 'Something went wrong.',
        title: 'Login Failed',
      },
    });
    console.log('Network Error', JSON.stringify(error.message, null, 2));
  }
};

export const setErrorModal = () => dispatch => {
  try {
    dispatch({
      type: types.ERROR_MODAL,
      payload: {
        msg: '',
        title: '',
        status: false,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const user_logout = () => async dispatch => {
  try {
    dispatch({
      type: types.USER_LOGOUT,
      payload: {isUserLogin: false},
    });
  } catch (error) {
    console.log('Network Error');
  }
};

export const is_walk_thorugh_seen = () => async dispatch => {
  try {
    dispatch({
      type: types.SEEN_WALK_THROUGH,
      payload: {isWalkThroughSeen: true},
    });
  } catch (error) {
    console.log('Network Error');
  }
};

// export const updateUserData = userData => async dispatch => {
//   // console.log(userData.username,"----ACtions")
//   try {
//     dispatch({
//       type: types.UPDATE_USER_DATA,
//       payload: {
//         userData: userData,
//       },
//     });
//   } catch (error) {
//     console.log('Failed to update data.');
//   }
// };

export const getAllServices = token => async dispatch => {
  try {
    const res = await axios.get(`${apiUrl}/admin/services`, {
      headers: {
        Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
        Accept: 'application/json',
      },
    });

    if (res?.data?.status) {
      dispatch({
        type: types.GET_SERVICES,
        payload: res.data.data.filter(ele => ele.services_status === 1),
      });
    }
  } catch (error) {
    console.log('Services Fetching Failed: ' + error.response);
  }
};

export const getUserWalletBalance = (data, token) => async dispatch => {
  try {
    const res = await axios.post(`${apiUrl}/admin/show_balance`, data, {
      headers: {
        Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
        // Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    });

    dispatch({
      type: types.WALLET_BALANCE,
      payload: res.data.data,
    });
  } catch (error) {
    console.log('Wallet Balance Fetching Failed: ' + error.response);
  }
};

export const buyCredits = (data, token) => async dispatch => {
  console.log(data);
  try {
    const response = await axios.post(
      `${apiUrl}/admin/wallet`,
      {
        user_id: data?.user_id,
        credit: data?.credit,
      },
      {
        headers: {
          Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
          Accept: 'application/json',
        },
      },
    );

    console.log(response.data);
    if (response?.data?.status) {
      dispatch({
        type: types.WALLET_BALANCE,
        payload: data?.credit,
      });
    }
  } catch (err) {
    console.log('Buying Credits Failed! ', err.response.data);
  }
};

export const getCurrentLocation = () => async dispatch => {
  try {
    Geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: types.GET_CURRENT_LOC,
          payload: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      },
      error => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  } catch (err) {
    console.log(err);
  }
};

export const requestForService =
  (data, token, _onFailed, _onPressModalSuccessButton) => async dispatch => {
    console.log(data);
    const test = {
      lat: 37.4220047,
      long: -122.0839995,
      radius: 10,
      service_id: 13,
      user_id: 53,
    };
    try {
      const response = await axios.post(
        `https://5e33-103-244-176-173.ngrok.io/api/admin/request_for_service`,
        JSON.stringify(test),
        {
          headers: {
            Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
            Accept: 'application/json',
          },
        },
      );
      console.log('-------------', response, '0000');
      if (response?.data?.status) {
        dispatch({
          type: types.ERROR_MODAL,
          payload: {
            title: 'Service Requested!',
            msg: "Your service request has been initiated, you'll be informed with a notification.",
            status: true,
            onPress: _onPressModalSuccessButton,
          },
        });
      } else {
        _onFailed();
        // dispatch({
        //   type: types.ERROR_MODAL,
        //   payload: {
        //     title: 'Request Failed!',
        //     msg: 'Something went wrong.',
        //     status: true,
        //   },
        // });
      }
    } catch (err) {
      _onFailed();
      dispatch({
        type: types.ERROR_MODAL,
        payload: {
          title: 'Request Failed!',
          msg: 'Something went wrong.',
          status: true,
        },
      });
      console.log('Buying Credits Failed! ', err);
    }
  };

export const updateProfile = (data, token, _onFailed) => async dispatch => {
  // var formData = new FormData();
  // formData.append('id', 33);
  // formData.append('name', "Ahsan");
  // formData.append('name', "Ahsan");
  // console.log(data)
  // if (data.image !== undefined && data.image !== null && data.image !== '') {
  //   formData.append('image', {
  //     uri: data.image.uri,
  //     name: data.image.fileName,
  //     type: data.image.type,
  //   });

  // }
  const userData = {
    id: data.id,
    image: {
      uri: data.image.uri,
      name: data.image.fileName,
      type: data.image.type,
    },
    name: data.name,
  };
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/admin/profile_img_update`,
      data: userData,
      headers: {
        Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
        Accept: 'application/json',
      },
    });
    // const response = await axios.post(
    //   `${apiUrl}/admin/profile_img_update`,
    //   {
    //     formData
    //   },

    //   {
    //     headers: {
    //       Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   },
    // );
    console.log(response?.data);
    if (response?.data.status) {
      dispatch({
        type: types.ERROR_MODAL,
        payload: {
          title: 'Profile Updated!',
          msg: response?.data?.msg,
          status: true,
        },
      });
      dispatch({
        type: types.UPDATE_USER_DATA,
        payload: response.data.updated_data,
      });
    }
    if (!response?.data.status) {
      _onFailed();
      dispatch({
        type: types.ERROR_MODAL,
        payload: {
          title: 'Profile Update Failed!',
          msg: 'Something went wrongg.',
          status: true,
        },
      });
    }
  } catch (err) {
    _onFailed();
    dispatch({
      type: types.ERROR_MODAL,
      payload: {
        title: 'Profile Update Failed!',
        msg: 'Something went wrong.',
        status: true,
      },
    });
    console.log('Failed Profile Update ', err?.response?.data);
  }
};

export const changePasswordRequest =
  (data, token, _onSuccessChanged) => async dispatch => {
    try {
      const URL = `${apiUrl}/admin/profile_update`;
      const authHeader = {
        headers: {
          Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
          Accept: 'application/json',
        },
      };
      const response = await axios.post(URL, data, authHeader);
      if (response?.data.success) {
        dispatch({
          type: types.ERROR_MODAL,
          payload: {
            title: 'Password Changed Success!',
            msg: response?.data?.message,
            status: true,
          },
        });
        _onSuccessChanged();
      }
      if (!response?.data.success) {
        dispatch({
          type: types.ERROR_MODAL,
          payload: {
            title: 'Password Change Failed!',
            msg: 'Something went wrongg.',
            status: true,
          },
        });
      }
    } catch (err) {
      console.log(err.response.data);

      dispatch({
        type: types.ERROR_MODAL,
        payload: {
          title: 'Password Change Failed!',
          msg: 'Something went wrongg.',
          status: true,
        },
      });
    }
  };

export const getCurrentBookings = data => async dispatch => {
  try {
    const response = await axios.post(
      `${apiUrl}/admin/current_bookings`,
     data,
      {
        headers: {
          Authorization: 'Bearer 28|zfYLBDgYy2Lb8oY1j4LqimqwuLzCjSHNhRSJzcpt',
          Accept: 'application/json',
        },
      },
    );
    console.log(response.data.data);
    if (response.data.status) {
      dispatch({
        type: types.GET_CURRENT_BOOKINGS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    console.log('Fetching Current Bookings Failed: ' + error);
  }
};
