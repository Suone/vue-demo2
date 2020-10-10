import VDistpicker from 'v-distpicker';
export default {
    components: { VDistpicker },
    methods: {
        // 选择省
        onProvince(data) {
            const me = this;
            me.selectAddress = {
                province: '',
                city: '',
                area: ''
            };
            me.selectAddress.province = data.value || '';
        },
        // 选择市
        onCity(data) {
            const me = this;
            me.selectAddress.area = '';
            me.selectAddress.city = data.value || '';
        },
        // 选择区
        onArea(data) {
            const me = this;
            me.selectAddress.area = data.area.value || '';
        }
    }
};
