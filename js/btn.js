$(document).ready(function(){
	
function GetRandomNum(Min,Max){  

		var Range = Max - Min;  

		var Rand = Math.random();  

		return(Min + Math.round(Rand * Range));  

} 
	
	
	var roll=function(){
	
                if(parseInt($(".coud_num").html())<= 0){
                    alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会!");
                    var json_error= "error_0";
                    return false;
                }
                
                $(this).ubind("click",roll);
                var angle=0
                
                var Rand_num_b=GetRandomNum(1,9)
                switch(Rand_num_b){
                	
                	case 1:
                	var json_error_b="win_1";break;
                	default :
                        var json_error_s="error_2";
                	
                }
		
		switch(json_error_s){

			 case error_2:
                        var error_num = GetRandomNum(1,4);
                        if(error_num==1){
                            var $dushu_b= 770;
                        }else if(error_num==2){
                            var $dushu_b= 495;
                        }else if(error_num==3){
                            var $dushu_b= 1320;
                        }else if(error_num==4){
                            var $dushu_b= 690;
                        }

                        break;
                    default:
		}
	
	 var zhuan_b= setInterval(function(){
                    angle+=10;
                    $("#img1").rotate(angle);
    
                    if(angle >= $dushu_b){
                        clearInterval(zhuan_b);


                        $(".coud_num").html($(".coud_num").html()-1);
                        	$("#tip").bind("click",roll	);

         



                    }
                },10);
	
	
	
	};
	 $("#tip").bind("click",roll	);

})
