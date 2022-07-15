<template>
  <view class="comp-wrapper">
    <view class="login-comp-wrapper">
      <view class="login-item">
        <view class="login-item-h1">手机快捷注册登录</view>
      </view>
      <view class="hr" />
      <view class="login-item">
        <view class="login-item-bg">
          <view class="login-item-name">手机号</view>
          <input v-model="form.mobile" class="login-item-input" type="tel" placeholder="请输入手机号" maxlength="11" @input="
            form.mobile ? (form.mobile = form.mobile.replace(/\D/g, '')) : ''
          " />
        </view>
      </view>
      <view class="login-item">
        <view class="login-item-bg">
          <view class="login-item-name">验证码</view>
          <input v-model="form.smscode" class="login-item-input" type="tel" placeholder="请输入验证码" maxlength="6" @input="
            form.smscode ? (form.smscode = form.smscode.replace(/\D/g, '')) : ''
          " />
        </view>
        <view class="hr2"></view>
        <view :class="{
          'login-item-smsbtn': true}">
          {{ smsBtnText }}
        </view>
      </view>
      <view class="hr" />
      <view class="login-btn">同意协议并提交</view>
    </view>
  </view>
</template>
<script>
export default {
  name: "mall-login",
  title: "登录",
  data() {
    return {
      form: {
        mobile: "",
        smscode: "",
      },
      smsBtnText: "发送验证码",
		}
  },
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
.comp-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .comp-wrapper-left {
    width: 500px;
    height: 100vh;
    border: 2px solid #000000;
  }
  .comp-wrapper-right {
    width: 500px;
    height: 100vh;
    border: 2px solid #000000;
  }
  .login-comp-wrapper {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    height: 100vh;
    
    .hr {
      height: 2rpx;
      border: none;
      border-top: 2rpx solid #eee;
      width: 100%;
    }

    .hr2 {
      height: 44rpx;
      border: none;
      border-right: 2rpx solid #eee;
      width: 2rpx;
    }

    .login-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 24rpx;
      padding-right: 24rpx;
      box-sizing: border-box;

      .login-item-h1 {
        text-align: center;
        font-size: 54rpx;
        color: #333;
        margin-top: 100rpx;
        margin-bottom: 80rpx;
      }

      .login-item-bg {
        width:100%;
        height: 80rpx;
        border-radius: 40rpx;
        background: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;

        .login-item-name {
          font-size: 34rpx;
          color: #333;
          width: 172rpx;
          text-align: center;
        }

        .login-item-input {
          height: 80rpx;
          background: transparent;
          border: 0;
          font-size: 28rpx;
          color: #333;
          font-weight: 400;
          line-height: 80rpx;
        }

        input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: #bdbfc2;
          /* placeholder字体大小  */
          /* placeholder位置  */
          text-align: left;
          font-size: 28rpx;
          font-weight: 400;
          font-family: Source Han Sans CN;
        }
      }

      .login-item-smsbtn {
        width: 300rpx;
        height: 80rpx;
        color: #1677ff;
        font-size: 34rpx;
        line-height: 80rpx;
        text-align: center;
      }

      .login-item-smsbtning {
        background: #fff;
        color: #999;
      }
    }

    .agreement {
      margin-top: 40rpx;
      display: flex;
      font-size: 24rpx;
      padding-left: 24rpx;
    }

    .read-agree {
      color: #999;
      margin-left: 8rpx;
      height: 36rpx;
      line-height: 36rpx;
    }

    .agreement-content {
      color: #999;
      color: #1677FF;
      line-height: 36rpx;
    }

    .xieyiPopup {
      border-radius: 10rpx 10rpx 0 0;
      color: #333;
      overflow: hidden;

      h1 {
        font-size: 36rpx;
        font-weight: bold;
        text-align: center;
        margin-top: 34rpx;
        height: 68rpx;
        border-bottom: 1rpx solid #eee;
        position: fixed;
      }

      p {
        padding: 0 20rpx 20rpx;
        -webkit-overflow-scrolling: touch;
        white-space: pre-wrap;
        margin-top: 120rpx;
        color: #999;
        overflow: auto;
        height: 88%;
        line-height: 32rpx;
      }
    }

    .van-popup__close-icon--top-right {
      position: fixed;
    }

    .login-btn {
      width: 702rpx;
      margin: 0 auto;
      margin-top: 26rpx;
      height: 98rpx;
      border-radius: 2.5rpx;
      background: rgb(102, 150, 255);
      color: white;
      font-size: 36rpx;
      font-weight: 400;
      font-family: Source Han Sans CN;
      text-align: center;
      line-height: 98rpx;
    }

    .login-onekey {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .login-onekey-btn {
        width: 580rpx;
        margin-top: 80rpx;
        height: 94rpx;
        border-radius: 47rpx;
        background: rgb(102, 150, 255);
        color: white;
        font-size: 36rpx;
        font-weight: 400;
        font-family: Source Han Sans CN;
        text-align: center;
        line-height: 94rpx;
      }

      .other-mobile-text {
        margin-top: 50rpx;
        font-size: 36rpx;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #6696ff;
        line-height: 36rpx;
        text-decoration: underline;
      }
    }
  }
}
</style>
