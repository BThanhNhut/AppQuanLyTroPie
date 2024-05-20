# Ứng dụng Quản lý Trọ
## Giới thiệu
Ứng dụng Quản lý Nhà trọ là một app phát triển để giúp người dùng tìm kiếm phòng trọ một cách dễ dàng, quản lý các thông tin liên quan đến việc quản lý một nhà trọ hoặc căn hộ cho thuê. Ứng dụng này cung cấp một giao diện đơn giản và dễ sử dụng cho việc quản lý danh sách các phòng trọ, thông tin hợp đồng khách thuê, hóa đơn.
## Tính năng
- Đăng nhập (Đăng nhập truyền thống, đăng nhập bằng facebook, đăng nhập bằng google)
- Chat giữa các người dùng với nhau.
- Quản lý danh sách phòng trọ, quản lý bài đăng.
- Quản lý yêu thích.
- Quản lý hợp đồng.
- Tạo và quản lý hóa đơn: Tạo hóa đơn cho từng khách thuê, ghi nhận các khoản thu.
- Quản lý yêu cầu bảo trì: Ghi nhận và quản lý các yêu cầu bảo trì từ phía khách thuê.
## Kiến thức
- Ngôn ngữ typescript
- Framework FE: React native
- Framework Backend: NestJS
- CSDL: postgresql
- Firebase: firestore, storage database, storage, messaging, authentication
## Giao diện của ứng dụng
<table align="center">
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/6a2b71f3-19df-4c81-8bfc-17a4f6e63205" alt="Giao diện ứng dụng" width="250" />
         <div style="width: 150px; text-align: justify;">Màn hình splash</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình splash màn hình load đầu tiên trước khi vào ứng dụng, dùng để điều hướng nếu chưa có tài khoản nào đăng nhập thì nó điều hướng vào màn hình login, nếu đã có tài khoản đăng nhập từ trước thì nó sẽ được điều hướng sang màn hình chính của ứng dụng
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/1c0ba52b-f1e5-4d5d-b2fe-4d740006df8b" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/7ef94ed6-dce5-424e-9dbc-055a52d8ef76" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình đăng nhập, và màn hình đăng ký, chúng ta có thể đăng nhập bằng google hoặc facebook
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/bd602644-7ce9-42bc-ba20-4723ae5d546c" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/c384eda1-389e-46fc-8882-f7b020f8dffd" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/c7d90dff-1491-4bf5-9c99-e0b1b92af9f7" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình thông báo khi lỗi và khi đăng ký tài khoản thành công</div>
      </td>
      <td align="center" width="250">
         Đây là một vài ràng buộc sẽ xuất hiện khi vi phạm ràng buộc, ví dụ như tài khoản chứa kí tự đặc biệt, để trống, không đúng định dạng .... 
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/cc428e75-485f-41f7-b274-1a61fcbd470d" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/6a375e37-2f42-4545-91a6-15bde7ebf722" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/76380670-a3f8-4f1f-bd56-72a543288407" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình, chứa các thông tin về các nhà trọ đang cho thuê, bài viết gần đây là 4 bài viết được đăng gần đây, Các bài viết nổi bậc là 10 bài viết được random ngẫu nhiên 
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/841919e7-9602-4324-a8ff-4e463a9f2d1a" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/81a0b6fd-f83c-4457-aee4-c43e66bc5c3b" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình chứa các notifications, notifications gửi từ remote sẽ được lừu vào bộ nhớ local của app
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/10bef490-f678-4a2a-9649-8645382d77a8" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/10bef490-f678-4a2a-9649-8645382d77a8" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/47f8ce88-6aa6-48ed-a578-910199a367df" alt="Giao diện ứng dụng" width="200" />
         <img src=https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/2efde44c-0838-4eb7-a0e3-845bcdfed901" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình chi tiết của phòng chứa các thông tin, giá phòng, dịch vụ, nội thất, người đăng...
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/af8443fd-27c3-453f-9666-9ecd6cafc31d" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/967b70ae-7e8e-42b6-bc7e-cee2f655a4fb" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình chat chứa danh sách các tài khoản mà tài khoản mình đang chat, các thông tin sẽ được lưu trên firestorage.
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình đăng nhập, và các thông báo nếu người dùng nhập không hợp lê
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình đăng nhập, và các thông báo nếu người dùng nhập không hợp lê
      </td>
   </tr>
   <tr>
      <td style="text-align: center;">
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <img src="https://github.com/BThanhNhut/AppQuanLyTroPie/assets/92388024/b7b65231-743c-4708-a76a-0a3887a8c542" alt="Giao diện ứng dụng" width="200" />
         <div style="width: 150px; text-align: justify;">Màn hình đăng nhập</div>
      </td>
      <td align="center" width="250">
         Đây là màn hình đăng nhập, và các thông báo nếu người dùng nhập không hợp lê
      </td>
   </tr>
</table>
