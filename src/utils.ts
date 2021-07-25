const state = (data, base) => new Proxy(data, {
    set:function(target, propKey, value, receiver) {
        Reflect.set(target, propKey, value, receiver);
        base.update()
        return true
    }
})
export default state