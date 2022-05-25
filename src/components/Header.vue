<template>
  <div class="header">
    <div class="h-left">
      <img src="../assets/images/校徽.png" alt="" />
      <div class="title">
        <dv-border-box-9>海虹四栋智能宿舍管理系统</dv-border-box-9>
      </div>
    </div>
    <div class="h-middle">{{ nowtime }}</div>
    <div class="h-right">
      <a-icon type="fullscreen" />
      <a-icon type="reload" />
      <a-icon type="close" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',

    data() {
      return {
        nowtime: new Date(),
      }
    },
    mounted() {
      // 生命周期模板挂载之后
      const _this = this
      this.timer = setInterval(() => {
        _this.nowtime = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }, 1000)
    },
    beforeDestroy() {
      // 生命周期实例销毁之前
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
  }
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
      flex: 1;
      display: flex;
      color: #fff;
      font-family: '宋体';
      font-weight: 600;
      font-size: 25px;
    }
    .h-left {
      height: 100%;
      margin-left: 10px;
      .title {
        margin-left: 10px;
        width: 80%;
      }
      img {
        height: 100%;
      }
    }
    .h-middle {
      justify-content: center;
    }
    .h-right {
      justify-content: flex-end;
      margin-right: 10px;
      * {
        margin-right: 10px;
        padding: 3px;
        border-radius: 6px;
        cursor: pointer;
        background-color: #303e66;
      }
    }
  }
  /deep/.dv-border-box-9 .border-box-content {
    color: #fff;
    display: flex;
    font-family: '宋体';
    font-weight: 600;
    font-size: 23px;
    justify-content: center;
    align-items: center;
  }

  /deep/.ant-btn > i,
  /deep/.ant-btn > span {
    font-size: 23px;
    color: #09bbea;
    font-family: '宋体';
    font-weight: 600;
  }
</style>
