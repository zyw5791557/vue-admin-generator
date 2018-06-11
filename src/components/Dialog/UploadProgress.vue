<script>
import * as types from '@/store/mutation-types.js';
export default {
    name: 'UploadProgress',
    computed: {
        dialog () {
            return this.$store.state.progress.dialog
        },
        value () {
            return this.$store.state.progress.value
        }
    },
    methods: {
        handleClose (done) {
            this.$store.commit(types.UPDATE_PROGRESS_DIALOG, false);
        }
    }
}
</script>

<template>
    <el-dialog
        title="上传进度"
        :visible.sync="dialog"
        width="30%"
        :before-close="handleClose"
        class="progress-dialog">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="value"></el-progress>
    </el-dialog>
</template>
