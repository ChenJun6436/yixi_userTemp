angular.module('app.core').directive('alertDelete',function(){
    return {
        restrict :"E",
        //1: 指令形式，（E以元素存在）
        scope:{sureDelete:'&sureDelete'},  //5:传入数据，模板上的变量名：“=指令上的属性名”；
        template :
        '<div class="modal fade modal-open" id="deleteMenu" tabindex="-1" role="dialog" aria-labelledby="addGrantsModal" style="top:50%;margin-top: -200px;height: 202px;overflow-y:hidden;">'+
            '<div class="modal-dialog" style="width:450px;" role="document">'+
                '<div class="modal-content">'+
                    '<div class="modal-header h50">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><spanaria-hidden="true">&times;</span></button>'+
                            '<h4 class="modal-title fs16 lh30" id="addGrantsModal">确认删除{{x}}</h4>'+
                        '</div>'+
                    '<div class="modal-body">'+
                        '<p>确定要删除吗？</p>'+
                        '<div class="text-center mt30">'+
                            '<button class="btn btn-primary" ng-click="sureDelete()">确定</button>'+
                            '<button type="button" class="btn btn-default ml10" data-dismiss="modal" aria-label="Close">取消</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
        ,
        replace:true,
        //3： 是否替换掉自定指令元素
        transclude:true,
        //4： 处理指令里面的dom显示在哪里的，是否需要在
        link:function(scope, element, attrs){
            //自己用一个controller

        }
    }
});