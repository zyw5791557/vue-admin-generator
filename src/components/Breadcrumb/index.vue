<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item in levelList" :key="item.path" v-if="item.meta.title">
                <span class="no-redirect">
                    {{item.meta.title}}
                </span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    created () {
        this.getBreadcrumb();
    },
    data () {
        return {
            levelList: null
        };
    },
    watch: {
        $route () {
            this.getBreadcrumb();
        }
    },
    methods: {
        getBreadcrumb () {
            let matched = this.$route.matched.filter(item => item.meta.title);
            this.levelList = matched;
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>
