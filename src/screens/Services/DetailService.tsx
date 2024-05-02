import axios from 'axios';
import {Alert} from 'react-native';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

const API_BASE_URL = 'https://qlphong-tro-production.up.railway.app/favorites'; // Thay đổi thành URL API của bạn

// Hàm thêm yêu thích
const addFavorite = async (accountId: number, postId: number) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/add/${accountId}/${postId}`,
    );
    return response.data; // Trả về dữ liệu của yêu thích được thêm mới
  } catch (error) {
    console.error('Error adding favorite:', error);
    throw error; // Ném lỗi để bắt ở nơi gọi hàm này
  }
};

// Hàm xóa yêu thích
const removeFavorite = async (accountId: number, postId: number) => {
  try {
    console.log('vào');
    await axios.post(`${API_BASE_URL}/remove/${accountId}/${postId}`);
  } catch (error) {
    console.error('Error removing favorite:', error);
    throw error; // Ném lỗi để bắt ở nơi gọi hàm này
  }
};

const showToastaddfavorites = () => {
  Toast.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Thông báo',
    textBody: 'Thêm thành công vào yêu thích',
  });
};
const showToastremovefavorites = () => {
  Toast.show({
    type: ALERT_TYPE.INFO,
    title: 'Thông báo',
    textBody: 'Đã xóa ra khỏi danh sách yêu thích',
  });
};

const showDialogBox = () => {
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: 'Congrats! This is a dialog box success',
    button: 'close',
  });
};

export {
  addFavorite,
  removeFavorite,
  showToastaddfavorites,
  showToastremovefavorites,
};
