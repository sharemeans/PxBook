const Service = require('egg').Service;
class deviceService extends Service {
    /**
     * 
     * @param {Number} total 获取的数据总条数
     */
   async getTops(total) {
        try {
            const datas = await this.app.mysql.select('devices', {
                limit: total
            })
            return datas
        } catch (err) {
            return err
        }
    }
}

module.exports = deviceService;