<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <breadcrumb v-if="device === 'desktop'" />

        <a v-if="device === 'desktop'" class="navbar-brand" href="javascript:;">
            <img class="logo" src="../../../assets/images/logo.png" alt="哨子运营"> {{ sysName }}
        </a>

        <el-dropdown class="navbar-user" trigger="click">
            <span class="el-dropdown-link">
                {{ name }}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';

export default {
    components: {
        Breadcrumb,
        Hamburger
    },
    data () {
        return {
            sysName: '哨子运营',
            selectEnvLock: false
        }
    },
    computed: {
        ...mapGetters(['sidebar', 'device', 'name'])
    },
    methods: {
        toggleSideBar () {
            this.$store.dispatch('ToggleSideBar');
        },
        logout () {
            this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }
    .screenfull {
        position: absolute;
        right: 90px;
        top: 16px;
        color: red;
    }
    .navbar-brand {
        float: left;
        font-size: 20px;
        padding: 0 15px;
        font-weight: bold;
        .logo {
            max-height: 20px;
            margin-top: -4px;
            vertical-align: middle;
        }
    }

    .select-env {
        float: right;
        width: 100px;
    }
    .navbar-user {
        float: right;
        padding: 0 10px;
    }
}
</style>
