<template>
  <div>
    <scroller :on-refresh="refresh" :on-infinite="infinite.stop" ref="myscroller">
      <!-- 2 -->
      <ul>
        <!-- 3 -->
        <li v-for="(item,i) in arr" :key="i" >
        <router-link :to="{name:'about'}">  4 </router-link>
          </li>
          <!-- 5 -->
      </ul>
      <!-- 6 -->
    </scroller>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      noDate: false, //这是一个判断是否加载的开关
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      page: 1,
      pageSize: 5
    };
  },
  computed: {},
  methods: {
    // 获取数据
    getData() {
      var that = this;
      axios
        .get("/api/article/findArticleList", {
          params: { pageNum: that.page, pageSize: that.pageSize }
        })
        .then(function(data) {
          if (data.data.success) {
            //这一步是判断你当前请求的这一页数据是不是最后一页，如果是最后一页就不能请求了（这个根据后端给的接口判断，只要能判断出就行了，如果是最后一页给that.noDate=true）
            that.noDate = data.data.data.isLastPage;
            // 判断是下拉刷新还是上拉加载（这一步也是比较巧妙的，当然也很好理解）
            if (that.page == 1) {
              that.arr = data.data.data.list;
            } else {
              that.arr = that.arr.concat(data.data.data.list);
            }
          }
        });
    },
    // 下拉刷新
    refresh() {
      this.page = 1; //重置页数刷新每次页数都是第一页
      this.noDate = false; //重置数据判断
      setTimeout(
        function() {
          this.getData();
          this.$refs.myscroller.finishPullToRefresh(); //刷新完毕关闭刷新的转圈圈
        }.bind(this),
        1700
      );
    },
    // 上拉加载
    infinite(done) {
      // if (this.noDate) {
      //   this.$refs.myscroller.finishInfinite(true); //这个方法是不让它加载了，显示“没有更多数据”，要不然会一直转圈圈
      // } else {
      //   setTimeout(() => {
      //     this.page++; //下拉一次页数+1
      //     this.getData();
      //     done(); //进行下一次加载操作
      //   }, 1500);
      // }
    }
  },
  mounted() {},
  created() {},
  watch: {}
};
</script>

<style scoped lang="less">
</style>
