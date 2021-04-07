<template>
<div>
    <div class="absolute h-full w-full opacity-25 bg-gray-200 z-40 flex justify-center">
        
        </div>
        <div class="absolute h-1/2 w-screen text-center z-50 flex justify-center">
        <div class="text-xl text-black bg-blue-300 mt-48 px-12 py-12 w-2/5 rounded-lg">
            <form action="">

            <div class="text-4xl font-bold">
                Create Account
            </div>
            
            <div class="text-left py-1">
                <input type="text" class="w-full rounded-lg shadow-md p-3" placeholder="Email" v-model="email">
            </div>
            <div class="text-left py-1">
                <input type="text" class="w-full rounded-lg shadow-md p-3" placeholder="Username" v-model="username">
            </div>
            <div class="text-left py-1">
                <input type="password" class="w-full rounded-lg shadow-md p-3" placeholder="Password" v-model="password">
            </div>
            <div class="text-left py-1">
                <input type="password" class="w-full rounded-lg shadow-md p-3" placeholder="Re-enter Password" v-model="rePassword">
            </div>
            <div class="text-left mt-4">
                <button type="button" class="bg-gray-300 px-4 py-2 rounded-lg" @click="signUp">
                    Register
                </button>
                <button type="button" class="bg-gray-300 px-4 py-2 rounded-lg" @click="closeModal">
                    Close
                </button>
            </div>
            </form>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return {
            username:"",
            password:"",
            rePassword:"",
            email:""
        }
    },
    methods:{
        closeModal(){
            this.$emit('closeModal')
        },
        async signUp(){
            await this.$http.$post("http://localhost:8080/user/add", {
                "username" : this.username,
                "password" : this.password,
                "password2" : this.rePassword,
                "email" : this.email
            })
        }
    }
}
</script>