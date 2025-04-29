<template>
    <v-container class="bg-black">
        <v-row no-gutters>
            <!--
            <v-col v-for="n in 9" :key="n" cols="12" sm="12" md="6" lg="4">
                <v-sheet class="ma-2 pa-2"> One of three columns {{n}} </v-sheet>
            </v-col>
            
            <v-col cols="4">
                <activity-card :title="'Prova'"/>
            </v-col>
            <v-col cols="4">
                <activity-card :title="'Prova'"/>
            </v-col>
            <v-col cols="4">
                <activity-card :title="'Prova'"/>
            </v-col>
            -->

            <v-col v-for="n in 9" :key="n" class="pa-3" cols="12" sm="12" md="6" lg="4">
                <activity-card :title="'Prova ' +  n "/>
            </v-col>
  
        </v-row>
    </v-container>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
    

   
</style>