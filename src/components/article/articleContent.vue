<template>
    <el-card>
        <div class="article_main">
            <div class="article_main_header">
                <div class="header_count">
                <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <strong>名字</strong>
                    <el-tooltip content="点击关注" placement="bottom" effect="light">
                        <i class="iconfont iconicon_follow"></i>
                    </el-tooltip>
                </div>
                <div class="header_title">
                     <h1>谷歌云计算部门被曝裁员 50 人，是谷歌不行还是云计算不行？</h1>
                </div>
                <div class="header_label">
                    <!--这里后期一个循环-->
                    <el-tag type="info" size="small">行业</el-tag>
                    <el-tag type="info" size="small">java</el-tag>
                    <span class="label_time">发布于今天</span>
                    <span class="label_read">阅读:100</span>
                </div>
            </div>
            <div class="article_main_body markdown-body js-toc-content" v-html="content" >
            </div>

        </div>
    </el-card>
</template>

<script>
    import marked from 'marked';
    import 'github-markdown-css/github-markdown.css';
    export default {
        name: "articleContent",
        data(){
            return{
              content:{

              }
            }
        },
          beforeMount(){
            this.getContent();
        },
        methods:{
          getContent(){
             this.content=marked('### Java基础\n' +
                 '#### 1. 两个对象的 hashCode()相同\n' +
                 '代码实例:\n' +
                 '```java\n' +
                 'String str1 = "通话";\n' +
                 'String str2 = "重地";\n' +
                 'System.out.println(String.format("str1：%d | str2：%d",  str1.hashCode(),str2.hashCode()));\n' +
                 'System.out.println(str1.equals(str2));\n' +
                 '```\n' +
                 '执行的结果： \n' +
                 '\n' +
                 'str1：1179395 | str2：1179395\n' +
                 '\n' +
                 'false\n' +
                 '\n' +
                 '很显然“通话”和“重地”的 hashCode() 相同，然而 equals() 则为 false，因为在散列表中，hashCode()相等即两个键值对的哈希值相等，然而哈希值相等，并不一定能得出键值对相等。\n' +
                 '\n' +
                 '此外，两个对象用equals方法比较为true，它们的hashcode值也不一定相同\n' +
                 '下面的话来自JDK：\n' +
                 '> public int hashCode()返回该对象的哈希码值。支持此方法是为了==提高哈希表的性能==。\n' +
                 'hashCode 的常规协定是： \n' +
                 '&emsp;&emsp;在 Java 应用程序执行期间，在对同一对象多次调用hashCode 方法时，必须一致地返回相同的整数，前提是将对象进行equals比较时所用的信息没有被修改。从某一应用程序的一次执行到同一应用程序的另一次执行，该整数无需保持一致。\n' +
                 '\n' +
                 '&emsp;&emsp;如果根据 equals(Object) 方法，两个对象是相等的，那么对这两个对象中的每个对象调用 hashCode 方法都必须生成相同的整数结果。如果根据 equals(java.lang.Object) 方法，两个对象不相等，那么对这两个对象中的任一对象上调用 hashCode 方法不要求一定生成不同的整数结果。但是，程序员应该意识到，为不相等的对象生成不同整数结果可以提高哈希表的性能。\n' +
                 '\n' +
                 '**总的来说：重写equals方法时请必须重写hashcode，以保证equals方法相等时两个对象hashcode返回相同的值。如果你不按照规范来，就不一定相同了。**');
          }
        }

    }
</script>

<style scoped lang="scss">
     .article_main{
         display: flex;
         flex-direction: column;
         .article_main_header{
             display: flex;
             flex-direction: column;
             .header_count{
                 display: flex;
                 justify-content: left;
                 strong{
                     align-self: center;
                     margin-top: 2px;
                     margin-left: 8px;
                     color: #BF7158;
                     font-size: 18px;
                 }
                 .iconicon_follow{
                     align-self: center;
                     margin-top: 5px;
                     margin-left: 10px;
                     color: green;
                 }
             }
             .header_title{
                 text-align: left;
                 line-height: 1.2;
             }
             .header_label{
                 display: flex;
                 span{
                     margin-right: 10px;
                 }
                 .label_time{
                     font-size: 14px;
                     margin-top: 5px;
                     margin-left: 6px;
                 }
                 .label_read{
                     font-size: 14px;
                     margin-top: 5px;
                 }
             }
         }
         .article_main_body{
             text-align: left;
             box-sizing: border-box;
             min-width: 200px;
             max-width: 980px;
             margin: 0 auto;
             padding: 45px;
         }
     }
</style>