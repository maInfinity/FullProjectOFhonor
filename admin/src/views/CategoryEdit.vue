<template>
  <div>
    <h1>新建列表</h1>
    <el-form @submit.native.prevent='save'>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-fomr-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-fomr-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model:{
                name
            }
        }
    },
    methods: {
        async save() {
            await this.$http.post('categories', this.model)
            this.$router.push('/categories/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
        }
    },
}
</script>