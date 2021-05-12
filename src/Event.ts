class EventEmitter {
  eventMap: {}
  constructor() {
    this.eventMap = {}
  }

  // 订阅事件
  on(eventName: any, handler: any) {
    // 如果没有这个事件名，则新建
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = []
    }
    // 推入队列
    this.eventMap[eventName].push(handler)
  }

  // 触发事件
  emit(eventName: any, params: any) {
    // 如果有这个事件
    const events = this.eventMap[eventName]
    if (events) {
      events.forEach((handler: any) => {
        handler(params)
      })
    }
  }

  // 删除事件
  off(type: any, handler: any) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) > 0, 1);
    }
  }
}

const eventEmitter = new EventEmitter()
export default eventEmitter