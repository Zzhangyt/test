<template>
    <div class="login">
      <div>
        <span>{{$store.state.count}}</span>
      </div>
      <div>
        <button @click="add">vuex里count+10</button>
        <button @click="reduce">vuex里count-5</button>
        <button @click="save">把改变后的count存到vuex</button>
        <button @click="take">读取vuex里的count</button>
<!--        <ul style="width: 500px;height: 300px;background: #f4f4f4">-->
<!--          <li v-for="(item,index) in list" :key="index">-->
<!--            <input type="text" v-model="item.value">-->
<!--            <input type="text" v-model="item.value2">-->
<!--            <button @click="btn(item)">btn</button>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                text:this.$store.state.count,
                count:100,
                list:[
                    {
                        value:'',
                        value2:''
                    }
                ]
            }
        },
        created() {
            this.animation()
        },
        methods:{
            btn(val){
              console.log(val)
            },
            add(){
                this.$store.commit('add',10)
                // let obj = {
                //     value:'',
                //     value2:''
                // };
                // this.list.push(obj)
            },
            reduce(){
                this.$store.commit('reduce',5)
            },
            save(){
                this.$store.commit('save',this.$store.state.count)
            },
            take(){
                alert(`值为:${this.$store.state.value}`);
            },
            animation(){
                !function() {
                    function o(w, v, i) {
                        return w.getAttribute(v) || i
                    }
                    function j(i) {
                        return document.getElementsByTagName(i)
                    }
                    function l() {
                        var i = j("script"),
                            w = i.length,
                            v = i[w - 1];
                        return {
                            l: w,
                            z: o(v, "zIndex", -1),
                            o: o(v, "opacity", 1),
                            c: o(v, "color", "red"),
                            n: o(v, "count", 99)
                        }
                    }
                    function k() {
                        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                    }
                    function b() {
                        e.clearRect(0, 0, r, n);
                        var w = [f].concat(t);
                        var x, v, A, B, z, y;
                        t.forEach(function(i) {
                            i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
                            for (v = 0; v < w.length; v++) {
                                x = w[v];
                                if (i !== x && null !== x.x && null !== x.y) {
                                    B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
                                    y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
                                }
                            }
                            w.splice(w.indexOf(i), 1)
                        }), m(b)
                    }
                    var u = document.createElement("canvas"),
                        s = l(),
                        c = "c_n" + s.l,
                        e = u.getContext("2d"),
                        r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                        function(i) {
                            window.setTimeout(i, 1000 / 45)
                        }, a = Math.random, f = {
                            x: null,
                            y: null,
                            max: 20000
                        };
                    u.id = c;
                    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
                    j("body")[0].appendChild(u);
                    k(), window.onresize = k;
                    window.onmousemove = function(i) {
                        i = i || window.event, f.x = i.clientX, f.y = i.clientY
                    }, window.onmouseout = function() {
                        f.x = null, f.y = null
                    };
                    for (var t = [], p = 0; s.n > p; p++) {
                        var h = a() * r,
                            g = a() * n,
                            q = 2 * a() - 1,
                            d = 2 * a() - 1;
                        t.push({
                            x: h,
                            y: g,
                            xa: q,
                            ya: d,
                            max: 6000
                        })
                    }
                    setTimeout(function() {
                        b()
                    }, 100)
                }();
            }
        }
    }
</script>

<style scoped>

</style>
