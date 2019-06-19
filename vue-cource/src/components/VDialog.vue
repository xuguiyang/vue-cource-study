<template>
<div class="dialog">
    <div class="mask"></div>
    <div class="dialog-content">
        <h3 class="title">qqq</h3>
        <p class="text">www</p>
        <div class="btn-group">
            <div class="btn" @click="submit">X</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'VDialog',
    props: {
      
    },
    data() {
        return {
          showCustomPopup: true,
        }
    },

    methods: {
        submit() {
          this.$refs.CustomPopupRef.maskClick();
        },
        cancel() {

        },

    }

}
</script>
<style lang='less'>
.dialog {
    position: relative;
    .dialog-content {
        //
        box-sizing: border-box;
        padding: 20px;
        width: 80%;
        min-height: 140px;
        // position: fixed;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgb(255, 255, 255);
        z-index: 50002;
        .title {
            font-size: 16px;
            font-weight: 600;
            line-height: 30px;
        }
        .text {
            font-size: 14px;
            line-height: 30px;
            color: #555;
        }
        .btn-group {
            display: flex;
            position: absolute;
            right: -30px;
            bottom: 130px;
            background-color: aliceblue;
            border-radius: 50%;
            .btn {
                padding: 10px 20px;
                font-size: 14px;
                &:last-child {
                    color: #76D49B;
                }
            }
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 50001;
        background: rgba(0,0,0,.5);
    }
}

</style>
