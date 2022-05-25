<template>
  <div id="main">
    <!-- 加载动画 -->
    <dv-loading v-if="loading">Loading...</dv-loading>
    <!-- 头部 -->
    <header><Header /></header>
    <!-- 主体内容部分 -->
    <div class="content">
      <li class="content-left">
        <!-- 归寝人数统计 -->
        <div class="li-top">
          <article v-for="item in backNum" :key="item.id">
            <h2>{{ item.title }}</h2>
            <h2>{{ item.num }}</h2>
          </article>
        </div>
        <!-- 各年级情况说明 -->
        <div class="li-middle">
          <ul>
            <li v-for="item in rankData" :key="item.id">
              <div class="user-id">{{ item.id }}</div>
              <div class="user-name">{{ item.name }}</div>
              <div class="user-num">{{ item.num }}</div>
              <a-progress
                :percent="item.rank"
                :show-info="false"
                :strokeWidth="17"
                :stroke-color="{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }"
              />
            </li>
          </ul>
        </div>
        <!-- 进出实时统计 -->
        <div class="li-bottom">
          <dv-scroll-board :config="realData" class="li-bottom" />
        </div>
      </li>
      <li class="content-right">
        <div class="imgs">
          <li><img src="./../assets/images/img1.png" alt="" /></li>
          <li><img src="./../assets/images/img2.png" alt="" /></li>
        </div>
        <div class="res">计算机1903 孟祥昊 <span class="res-text">匹配成功</span></div>
      </li>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'Home',
    components: {
      Header,
    },
    data() {
      let backed = Math.round(Math.random() * 1351)
      let showBack = 1351
      let rank = Math.round((backed * 100) / showBack) + '%'
      return {
        loading: true,
        backNum: [
          { id: 1, title: '回寝人数', num: backed },
          { id: 2, title: '应归人数', num: showBack },
          { id: 3, title: '回寝比例', num: rank },
        ],
        rankData: [
          { id: 1, name: '张睿麒', num: 234, rank: 95 },
          { id: 2, name: '马  可', num: 201, rank: 84 },
          { id: 3, name: '石  林', num: 224, rank: 81 },
          { id: 4, name: '周豪义', num: 196, rank: 76 },
        ],
        realData: {
          header: ['姓名', '寝室号', '寝室出入', '出入时间'],
          data: [
            ['王帅', '532', '出', `14:38:22`],
            ['陈爽', '541', '入', `14:42:02`],
            ['李涛', '621', '入', `14:48:27`],
            ['张居富', '520', '出', `15:08:02`],
            ['苏建龙', '518', '出', `15:31:27`],
            ['周译玮', '523', '入', `15:38:22`],
            ['杨舟', '520', '出', `15:39:12`],
            ['焦航', '518', '出', `15:48:22`],
            ['裴超', '520', '入', `15:51:42`],
            ['任旭杰', '632', '出', `16:08:12`],
          ],
          index: true,
          columnWidth: [50],
          align: ['center'],
          headerBGC: ['#1F418E'],
          // oddRowBGC: ['#203D73'],
          // evenRowBGC: ['#44ABB0'],
          align: ['center'],
        },
      }
    },
    methods: {
      cancelLoading() {
        setTimeout(() => {
          this.loading = false
        }, 500)
      },
    },
    mounted() {
      this.cancelLoading()
    },
  }
</script>

<style lang="less" scoped>
  @bg-color: rgba(53, 116, 209, 0.452);
  #main {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('../assets/images/pageBg.png');
    // 头部样式
    Header {
      height: 10%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    // 内容部分样式
    .content {
      display: flex;
      justify-content: space-between;
      height: 90%;
      width: 100%;
      padding: 10px;
      .content-left {
        flex: 1;
        .li-top {
          display: flex;
          align-content: space-around;
          justify-content: space-around;
          height: 13%;
          article {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: space-around;
            border-radius: 10px;
            width: 27%;
            background-color: @bg-color;
            h2 {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 800;
            }
          }
        }
        .li-middle {
          margin: 20px 10px 0 20px;
          width: 94%;
          margin-top: 20px;
          height: 30%;
          border-radius: 10px;
          // background-color: #1e418e;
          ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
            border-radius: 10px;
            background-color: @bg-color;
            li {
              display: flex;
              justify-content: space-around;
              > div {
                height: 30px;
                line-height: 30px;
                text-align: center;
                margin-right: 20px;
                font-size: 24px;
              }
              .user-id {
                width: 40px;
                height: 30px;
                background-color: #87d068;
              }
              .user-name {
                padding: 0 10px;
                width: 150px;
                background-color: #1792e2;
              }
            }
          }
        }
        .li-bottom {
          margin: 20px 10px 0 10px;
          height: 50%;
          width: 97%;
        }
      }
      .content-right {
        flex: 1;
        height: 80.5%;
        border-radius: 10px;
        background-color: @bg-color;
        .imgs {
          display: flex;
          justify-content: space-evenly;
          margin-top: 60px;
          img {
            width: 300px;
            height: 400px;
          }
        }
        .res {
          margin-top: 60px;
          font-size: 32px;
          text-align: center;
          .res-text {
            font-weight: bold;
            display: inline-block;
            color: #08ff31 !important;
          }
        }
      }
    }
  }

  ::v-deep .dv-scroll-board .header,
  ::v-deep .dv-scroll-board .rows .row-item {
    font-size: 24px !important;
    height: 35px !important;
    line-height: 35px !important;
  }
  ::v-deep .dv-scroll-board .rows {
    height: 40vh !important;
  }
</style>
