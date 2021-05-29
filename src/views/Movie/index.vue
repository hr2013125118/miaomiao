<template>
    <div>
        <Header title="喵喵电影"/>

        <div id="content">
            <div class="movie_menu">
                
                <!-- 2.0语法 -->
                <!-- <router-link tag="div" to="/movie/city" class="city_name">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
                <div class="hot_swtich">
					<router-link tag="div" to="/movie/nowPlaying" class="hot_item active">正在热映</router-link>
					<router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
				</div>
                <router-link tag="div" to="/movie/search" class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</router-link> -->

                <!-- 3.0语法 -->
                <router-link to="/movie/city" custom :isActive=true v-slot="{ navigate,isActive, }">
					<div :class="[isActive && 'router-link-active', 'city_name']" @click="navigate" >
                        <span>大连</span><i class="iconfont icon-lower-triangle"></i>
                    </div>
				</router-link>
                <div class="hot_swtich">
                     <router-link to="/movie/nowPlaying" custom :isActive=true v-slot="{ navigate,isActive }">
					    <div :class="[isActive && 'router-link-active', 'hot_item']" @click="navigate">正在热映</div>
                     </router-link>
                     <router-link to="/movie/comingSoon" custom :isActive=true v-slot="{ navigate,isActive }">
					    <div :class="[isActive && 'router-link-active', 'hot_item']" @click="navigate">即将上映</div>
                     </router-link>
				</div>
                <router-link to="/movie/search" custom :isActive=true v-slot="{ navigate,isActive }">
                    <div :class="[isActive && 'router-link-active', 'search_entry']" @click="navigate">
                        <i class="iconfont icon-sousuo"></i>
                    </div>
                </router-link>
                
				<!-- <div class="city_name">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="hot_swtich">
					<div class="hot_item active">正在热映</div>
					<div class="hot_item">即将上映</div>
				</div>
				<div class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</div> -->
			</div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>

        <TabBar/>
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    name: 'Movie',
    components: {
        Header,
        TabBar
    }
}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>