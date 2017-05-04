/**
 * 活动
 */
export default ({ debug, logger }) => {
    const model = DB.models.demo
    return {
        async add(ctx, next) {
            const result = await model._add(ctx.request.fields)
            ctx.body = JSONResponse(1, result)
        },
        async delete(ctx, next) {
            const result = await model._delete({ condition: ctx.params })
            ctx.body = JSONResponse(1, result)
        },
        async update(ctx, next) {
            const result = await model._update(ctx.params, ctx.request.fields)
            ctx.body = JSONResponse(1, result)
        },
        async getPage(ctx, next) {
            const result = await model._getPage({ condition: ctx.query, ...ctx.params })
            ctx.body = JSONResponse(1, result)
        },
        async getById(ctx, next) {
            const result = await model._findById(ctx.request.params._id)
            ctx.body = JSONResponse(1, result)
        }
    }
}