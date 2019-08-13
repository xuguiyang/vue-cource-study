<template>
  <div class="members">
         <Breadcrumb separator=">" >      <!--  //面面包屑导航组件，用“>”隔开 -->
            <BreadcrumbItem   v-for="(item,index) in accountList">   <!-- // 用v-for遍历循环账号数组-->
                <span class="select_span" @click="queryAgentMember(item)">  <!-- //商品这里放置账号，调用查询函数实现点击账号查询-->
                  <Icon v-if="index==0" type="ios-home-outline"></Icon>  <!-- // v-if判断第一个账号的图标-->
                  <Icon v-if="index>0" type="android-person"></Icon>  <!-- // v-if判断不是第一个账号的图标-->
                  <span>{{item}}</span>  <!-- // 图标后面的账号-->
                </span>
            </BreadcrumbItem>
          </Breadcrumb>
    <Table class="table_a" :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''"
           :size="tableSize" :data="queryAgentMemberdataList" :columns="tableColumns3"></Table>
  </div>
</template>
<script>
  import { mapActions,mapState } from "vuex";
  export default {
    data () {
      return {
        Account:'', //定义一个账号变量
        accountList:[], //定义一个数组装账号
        queryAgentMemberdataList:[], //这是表格列表数据

      }
    },
    methods:{
      ...mapActions('account',
        [
          'queryAgentMemberInfo',
        ]
      ),
      //查询函数
      search(acc) {
        this.time();
        if(acc ){ //对函数参数进行判断，在有账号的情况下
           this.Account = acc;  // 如果有就赋值给Account
        }else if(this.childAccount === ""){  //继续判断没有下级账号
          this.Account = this.userDetail.account; // 如果没有就等于后台返回的账号
          if(this.accountList.indexOf(this.userDetail.account)==-1){  // 再一次判断这个账号在不在账号数组里面，这里是不在的情况下
            this.accountList.push(this.userDetail.account) // 不在就push到账号数组
          }

        }else { //对函数参数进行判断，在没有账号的情况下
          this.Account = this.childAccount
        }
        let data = {
          'memberAccount':this.Account,
          'sort': '1',
          'type': '1'
        };
        this.queryAgentMemberInfo(data).then((res) => {
          this.queryAgentMemberdataList = this.queryAgentMemberInfoList;
        })
      },
      // 面包屑导航点击查询实时变更函数
      queryAgentMember(account){
        let end = this.accountList.indexOf(account); // 定义一个变量等于传入的账号的下标
        this.accountList = this.accountList.slice(0,end+1); // 利用这个下标对张海数组进行截取
        this.search(account)  //调用查询函数更新表格数据
      },
    },
    computed: {
      ...mapState(['userDetail']),
      ...mapState( "account",['queryAgentMemberInfoList',]),
      tableColumns3 () {
        let columns = [];
        if (this.showCheckbox) {
          columns.push({
            type: 'selection',
            align: 'center'
          })
        }
        if (this.showIndex) {
          columns.push({
            type: 'index',
            align: 'center'
          })
        }
        columns.push({
          title: '会员账号',
          sortable: true,
          render: (h, params) => {
            if (params.row.account === this.Account) {
            }
            return h('Span',{
              props: {
                type: 'text'
              },
              style: {
                color: '#4ca5e9',
                cursor: 'pointer'
              },
              on: {   // 这里还要对表格账号点击查询进行判断
                click:()=>{
                  //同样的先判断账号数组里面有没有当前查询的账号，这里也是在没有的额情况下
                  if(this.accountList.indexOf(params.row.account)==-1){
                    //没有就将当前查询的账号添加到账号数组
                    this.accountList.push(params.row.account)
                  }
                  this.search(params.row.account);  //查询函数
                }
              }
            },params.row.account)
          }
        });
        columns.push({
          title: '账号名称',
          key: 'name'
        });
        columns.push({
          title: '彩票钱包余额',
          key: 'accountBalance',
          sortable: true
        });
        columns.push({
          title: '团队人数',
          key: 'childCount'
        });
        columns.push({
          title: '注册时间',
          key: 'create_Time',
          sortable: true,
          width: 200
        });
        columns.push({
          title: '最后登录时间',
          key: 'last_LoginTime',
          sortable: true,
          width: 150
        });
        columns.push({
          title: '下级总额',
          key: 'childAmount'
        });
        return columns;
      },
    },
    watch:{
      userDetail(){
        this.search()
      }
    }
  }
</script>
~
