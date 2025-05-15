<template>
    <v-container class="">
        <v-row no-gutters>
            <v-col
                v-for=" i in length"
                :key="i"
                class="pa-3"
                cols="12"
                sm="12"
                md="6"
                lg="4"
            >

                <slot name="card" v-bind="{ index: i - 1 }">
                </slot>
                    
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    defineProps<{
        length: number,
    }>();

</script>

<style scoped>
    
</style>
