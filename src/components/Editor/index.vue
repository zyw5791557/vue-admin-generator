<script>
import plugins from './plugins'
import toolbar from './toolbar'
export default {
    name: 'Editor',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            id: 'editor-' + new Date().getTime()
        }
    },
    computed: {
        currentValue () {
            return this.value;
        }
    },
    mounted () {
        this.initTinymce();
    },
    destroyed () {
        this.destroyTinymce();
    },
    methods: {
        initTinymce () {
            const _this = this;
            const setting = {
                selector: '#' + this.id,
                height: 300,
                plugins: plugins,
                toolbar: toolbar,
                init_instance_callback (editor) {
                    editor.on('input change undo redo', () => {
                        let content = editor.getContent()
                        _this.$emit('input', content);
                    });
                }
            };
            window.tinymce.init(setting);
        },
        destroyTinymce () {
            if (window.tinymce.get(this.id)) {
                window.tinymce.get(this.id).destroy();
            }
        }
    }
}
</script>

<template>
    <el-input
        :id="id"
        type="textarea"
        placeholder="请输入摘要内容"
        :value="currentValue">
    </el-input>
</template>
