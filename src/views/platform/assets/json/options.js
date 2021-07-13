var builderJson = {
    "all": 10887,
    "charts": {
        "资费套餐价格高": 3237,
        "手机通话不畅": 2164,
        "手机消费不适": 7561,
        "line": 7778,
        "pie": 7355,
        "scatter": 2405,
        "candlestick": 1842,
        "radar": 2090,
        "heatmap": 1762,
        "treemap": 1593,
        "graph": 2060,
        "boxplot": 1537,
        "parallel": 1908,
        "gauge": 2107,
        "funnel": 1692,
        "sankey": 1568
    },
    "components": {
        "geo": 2788,
        "title": 9575,
        "legend": 9400,
        "tooltip": 9466,
        "grid": 9266,
        "markPoint": 3419,
        "markLine": 2984,
        "timeline": 2739,
        "dataZoom": 2744,
        "visualMap": 2466,
        "toolbox": 3034,
        "polar": 1945
    },
    "ie": 9743
};

var downloadJson = {
    "服务不满": 17365,
    "资费不满": 4079,
    "xx不满": 6929,
    "网络不满": 14890
};

//   var waterMarkText = 'ECHARTS';

//   var canvas = document.createElement('canvas');
//   var ctx = canvas.getContext('2d');
//   canvas.width = canvas.height = 100;
//   ctx.textAlign = 'center';
//   ctx.textBaseline = 'middle';
//   ctx.globalAlpha = 0.08;
//   ctx.font = '20px Microsoft Yahei';
//   ctx.translate(50, 50);
//   ctx.rotate(-Math.PI / 4);
//   ctx.fillText(waterMarkText, 0, 0);







export default {
    portrait: {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        title: {
            text: '不满意客户画像'
        },
        radar: [
            {
                indicator: [
                    { text: '月份变化数', max: 150 },
                    { text: '客户类型', max: 150 },
                    { text: '性别:男', max: 150 },
                    { text: 'Appu环比', max: 120 },
                    { text: 'Dou', max: 108 },
                    { text: 'Mou', max: 72 },
                    { text: 'Mou', max: 72 },
                    { text: 'Appu环比:100-200', max: 120 },
                ],
                center: ['50%', '55%'],
                radius: 70,
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                name: {
                    formatter: '【{value}】',
                    textStyle: {
                        color: '#428BD4'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(211, 253, 250, 0.8)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(211, 253, 250, 0.8)'
                    }
                }
            }
        ],
        series: [
            {
                name: '雷达图',
                type: 'radar',
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                },
                data: [
                    {
                        value: [60, 69, 100, 59, 105, 59, 60],
                        name: 'Data B',
                        areaStyle: {
                            color: 'rgba(255, 228, 52, 0.6)'
                        }
                    }
                ]
            },
        ]
    },
    age: {
        title: {
            text: '年龄',
        },
        grid: {
            bottom: 25
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['低于20', '20-30', '30-40', '40-50', '50以上'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '手机不满意客户数',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '不满意客户数占比',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [200, 590, 900, 264, 287]
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                data: [2.0, 2.2, 3.3, 4.5, 6.3]
            }
        ]
    },
    sex: {
        title: {
            text: '性别',
        },
        grid: {
            bottom: 25
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['男', '女', '未知'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '手机不满意客户数',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '不满意客户数占比',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [200, 590, 900, 264, 287]
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                data: [2.0, 2.2, 3.3, 4.5, 6.3]
            }
        ]
    },
    type: {
        title: {
            text: '客户类型'
        },
        grid: {
            bottom: 25
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['校园客户', '农村', '城市', '集团'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '手机不满意客户数',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '不满意客户数占比',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [200, 590, 900, 264, 287]
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                data: [2.0, 2.2, 3.3, 4.5, 6.3]
            }
        ]
    },
    appu: {
        title: {
            text: 'Appu'
        },
        grid: {
            bottom: 25
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['校园客户', '农村', '城市', '集团'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '手机不满意客户数',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '不满意客户数占比',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [590, 900, 264, 287]
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                yAxisIndex: 1,
                data: [2.2, 3.3, 4.5, 6.3]
            }
        ]
    },
    dou: {
        title: {
            text: 'Dou'
        },
        grid: {
            bottom: 25
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: {
            type: 'category',
            data: ['06/10', '06/11', '06/12', '06/13', '06/14', '06/15', '06/16']
        },
        yAxis: [{
            type: 'value',
            name: '手机不满意客户数',
            min: 0,
            max: 500,
            interval: 100,
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        {
            type: 'value',
            name: '不满意客户数占比',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }]
        ,
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [500, 400, 390, 380, 390, 400, 500],
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: [3.3, 4.5, 6.3, 2.0, 2.2, 3.3, 4.5]
            }
        ]
    },
    mou: {
        title: {
            text: 'Mou'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            bottom: 40,
        },
        xAxis: {
            type: 'category',
            data: ['06/10', '06/11', '06/12', '06/13', '06/14', '06/15', '06/16']
        },
        yAxis: [{
            type: 'value',
            name: '手机不满意客户数',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        {
            type: 'value',
            name: '不满意客户数占比',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }]
        ,
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [300, 280, 250, 260, 270, 300, 550],
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 2.0, 2.2]
            }
        ]
    },
    change: {
        title: {
            text: '月份客户数'
        },
        grid: {
            bottom: 25
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        xAxis: {
            type: 'category',
            data: ['06/10', '06/11', '06/12', '06/13', '06/14', '06/15', '06/16']
        },
        yAxis: [{
            type: 'value',
            name: '手机不满意客户数',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 个'
            }
        },
        {
            type: 'value',
            name: '不满意客户数占比',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }]
        ,
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                data: [300, 280, 250, 260, 270, 300, 550],
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                smooth: true,
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 2.0, 2.2]
            }
        ]
    },


    trend: {
        title: {
            text: '趋势',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['手机不满意客户数', '不满意客户数占比']
        },
        xAxis: [
            {
                type: 'category',
                data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '手机不满意客户数',
                min: 0,
                max: 1200,
                interval: 200,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '不满意客户数占比',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        grid: {
            bottom: 25
        },
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                label: {
                    position: 'top',
                    show: true,
                },
                data: [200, 590, 900, 264, 287, 590, 900, 264, 287, 590, 900, 264, 287]
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,     // 这个可以显示为平滑过渡的线条
                data: [5, 10, 12, 8, 20, 13, 5, 20, 15, 8, 6, 16]
            }
        ]
    },
    spread: {
        title: {
            text: '地域分布',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['手机不满意客户数', '不满意客户数占比']
        },
        xAxis: [
            {
                type: 'category',
                data: ['长沙', '岳阳', '湘潭', '株洲', '益阳', '郴州', '永州', '怀化', '张家界', '湘西', '娄底', '邵阳', '常德'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '手机不满意客户数',
                min: 0,
                max: 1200,
                interval: 200,
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            {
                type: 'value',
                name: '不满意客户数占比',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        grid: {
            bottom: 25
        },
        series: [
            {
                name: '手机不满意客户数',
                type: 'bar',
                barWidth: 30,
                label: {
                    position: 'top',
                    show: true,
                },
                data: [200, 590, 900, 264, 287, 590, 900, 264, 287, 590, 900, 264, 287]
            },
            {
                name: '不满意客户数占比',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,     // 这个可以显示为平滑过渡的线条
                data: [5, 10, 12, 8, 20, 13, 5, 20, 15, 8, 6, 16]
            }
        ]
    },
    unsatisfyUnit: {

        tooltip: {},
        title: [{
            text: '在线构建',
            subtext: '总计 ' + builderJson.all,
            left: '25%',
            textAlign: 'center'
        }, {
            text: '各版本下载',
            subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
                return all + downloadJson[key];
            }, 0),
            left: '75%',
            textAlign: 'center'
        }],
        grid: [{
            top: 50,
            width: '50%',
            bottom: '5%',
            left: '50%',
            containLabel: true
        }],
        xAxis: [{
            type: 'value',
            max: builderJson.all,
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            data: Object.keys(builderJson.charts),
            axisLabel: {
                interval: 0,
                rotate: 30
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
                position: 'right',
                show: true
            },
            data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.charts[key];
            })
        }, {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
                color: '#eee'
            },
            data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.all - builderJson.charts[key];
            })
        }, {
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['25%', '50%'],
            data: Object.keys(downloadJson).map(function (key) {
                return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                };
            })
        }]
    }
}