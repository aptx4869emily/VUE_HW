import {ref,reactive} from './vue.js'
export default{
    
    setup(){
        

        return {
            
        }
    },
    template:`<table class="table table-borded">
                <thead>
                    <tr>
                        <th class="text-center">員工編號</th>
                        <th class="text-center">員工姓名</th>
                        <th class="text-center">分機</th>
                        <th class="text-center">功能</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center"><input type="text" v-model="arr[0]" disabled="disabled" ></td>
                        <td class="text-center"><input type="text" v-model="arr[1]" ></td>
                        <td class="text-center"><input type="text" v-model="arr[2]" ></td>
                        <td class="text-center"><input type="button" class="btn btn-warning"  value="儲存" @click="SaveUpdate(arr)" /> <input type="button" class="btn btn-danger"  value="取消" @click="CancelUpdate" /></td>
                    </tr>
                </tbody>
            </table>`
}