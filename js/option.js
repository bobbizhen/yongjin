var option01 = {
		color: ['#4472c4','#22bf22','#bf2e22'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name: '当月已发佣金',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '内部佣金'},
                    {value: 310, name: '中介机构'},
                    {value: 234, name: '泛营销'},
                ]
            }
        ]


};
var option02 = {
    color: ['#4472c4'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '15%',
		top: '1%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['西南', '华南', '东南', '华中', '上海', '华北', '北京', '文旅展厅'],
            axisTick: {
                alignWithLabel: true
            },
			axisLabel: {
			    show: true,
			    interval:0,
			},
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '佣金分布',
            type: 'bar',
            barWidth: '40%',
            data: [1425.6, 752.8, 1200.5, 676.9, 345.6, 1008.9, 456.7,234.5],
			label: {
			    show: true,
			},
        }
    ]
};
var option03 = {
	color: ['#4472c4'],
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
	grid: {
	    left: '8%',
	    right: '1%',
	    bottom: '15%',
		top: '3%',
	},
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [30, 40, 50.3, 49.8, 43.2, 51.6, 60,48,56.3,70.2,77,73],
        type: 'line'
    }]
};
var option04 = {
		color: ['#4472c4','#22bf22','#bf2e22'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name: '截止当月佣金池分布',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '预留'},
                    {value: 310, name: '奖惩'},
                    {value: 234, name: '其他'},
                ]
            }
        ]


};
var option05 = {
    color: ['#4472c4'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '15%',
		top: '1%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['城市1', '城市2', '城市3', '城市4', '城市5', '城市6', '城市7', '城市8'],
            axisTick: {
                alignWithLabel: true
            },
			axisLabel: {
			    show: true,
			    interval:0,
			},
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '佣金分布',
            type: 'bar',
            barWidth: '40%',
            data: [1425.6, 752.8, 1200.5, 676.9, 345.6, 1008.9, 456.7,234.5],
			label: {
			    show: true,
			},
        }
    ]
};
var option06 = {
    color: ['#4472c4'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '15%',
		top: '1%',
    },
    xAxis: [
        {
            type: 'category',
            data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8'],
            axisTick: {
                alignWithLabel: true
            },
			axisLabel: {
			    show: true,
			    interval:0,
			},
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '佣金分布',
            type: 'bar',
            barWidth: '40%',
            data: [1425.6, 752.8, 1200.5, 676.9, 345.6, 1008.9, 456.7,234.5],
			label: {
			    show: true,
			},
        }
    ]
};
var option07 = {
    color: ['#4472c4'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '15%',
        right: '1%',
        bottom: '3%',
		top: '1%',
    },
    yAxis: [
        {
            type: 'category',
            data: ['渠道专员', '置业顾问', '渠道组长', '渠道主管', '销售主管', '渠道经理', '销售经理', '渠道总监'],
            axisTick: {
                alignWithLabel: true
            },
			axisLabel: {
			    show: true,
			    interval:0,
			},
        }
    ],
    xAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '佣金分布',
            type: 'bar',
            barWidth: '40%',
            data: [14, 72.8, 10.5, 76.9, 45.6, 18.9, 56.7,34.5],
			label: {
			    show: true,
			},
        }
    ]
};
var option08 = {
		color: ['#4472c4','#22bf22','#bf2e22'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 35, name: '普通经纪人'},
                    {value: 10, name: '老业主'},
                    {value: 34, name: '员工'},
                ]
            }
        ]


};