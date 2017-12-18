 function GetRandomNum(Min,Max){

            var Range = Max - Min;

            var Rand = Math.random();

            return(Min + Math.round(Rand * Range));

        }




        $(document).ready(function(){
            $("#tip").hover(
                    function() {
                        $(this).attr("src","images/four2.gif");
                    },
                    //zrmgg  this no d
                    function(){
                        $(this).attr("src","images/four1.gif");
                    }

            );
            //指针变色



            var roll= function(){


                if(parseInt($(".coud_num").html())<= 0){
                    alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会!");
                    var json_error= "error_0";
                    return false;
                }

                $(this).unbind("click",roll);

                var angle = 0;

                var Rand_num_s =GetRandomNum(1,8)
                var Rand_num_m =GetRandomNum(1,8)
                var Rand_num_b =GetRandomNum(1,8)
                //var json_error;

                switch(Rand_num_s){
                    case "2":
                        var json_error_s="win_1";
                        break;

                    default :
                        var json_error_s="error_2";

                }
                 switch(Rand_num_m){
                    case "2":
                        var json_error_m="win_1";
                        break;

                    default :
                        var json_error_m="error_2";

                }
                 switch(Rand_num_b){
                    case "2":
                        var json_error_b="win_1";
                        break;

                    default :
                        var json_error_b="error_2";

                }
                switch(json_error_s){
                    case "error_0":
                        alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会.");
                        return false;
                        break;
                    case "win_1":
                        var $dushu_s= 1440;
                        break;
                   
                    case "error_2":
                        var error_num = GetRandomNum(1,4);
                        if(error_num==1){
                            var $dushu_s= 770;
                        }else if(error_num==2){
                            var $dushu_s= 495;
                        }else if(error_num==3){
                            var $dushu_s= 1320;
                        }else if(error_num==4){
                            var $dushu_s= 690;
                        }

                        break;
                    default:
                }
                
                   switch(json_error_m){
                    case "error_0":
                        alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会.");
                        return false;
                        break;
                    case "win_1":
                        var $dushu_s= 1440;
                        break;
                   
                    case "error_2":
                        var error_num = GetRandomNum(1,4);
                        if(error_num==1){
                            var $dushu_m= 770;
                        }else if(error_num==2){
                            var $dushu_m= 495;
                        }else if(error_num==3){
                            var $dushu_m= 1320;
                        }else if(error_num==4){
                            var $dushu_m= 690;
                        }

                        break;
                    default:
                }             
                
                switch(json_error_b){
                    case "error_0":
                        alert("您的抽奖机会已用完，您可以完成任务获取更多抽奖机会.");
                        return false;
                        break;
                    case "win_1":
                        var $dushu_b= 1440;
                        break;
                   
                    case "error_2":
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
                
                




                var zhuan_s= setInterval(function(){
                    angle+=1;
                    $("#img3").rotate(angle);
    
                    if(angle >= $dushu_s){
                        clearInterval(zhuan_s);


                        $(".coud_num").html($(".coud_num").html()-1);
                        	$("#tip").bind("click",roll	);

         



                    }
                },10);

                var zhuan_m= setInterval(function(){
                    angle+=1;
                    $("#img").rotate(-angle);
    
                    if(angle >= $dushu_m){
                        clearInterval(zhuan_m);


 
                





                    }
                },10);


                var zhuan_b= setInterval(function(){
                    angle+=1;
                    $("#img2").rotate(angle);
    
                    if(angle >= $dushu_b){
                        clearInterval(zhuan_b);


                    }
                },10);













            };


            $("#tip").bind("click",roll	);



        });

