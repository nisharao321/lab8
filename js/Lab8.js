       function navNext()
       {
         for (temp = 0; temp <= 11 ; temp++)
         {
           document.getElementById('canvas'+temp).style.visibility="hidden";
         }

         simsubscreennum+=1;

         document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
         document.getElementById('nextButton').style.visibility="hidden";
         magic();
       }

       var ca;
       var questions = ["Air flow of a fan does not depend on_________",
       "In efficiency characteristic curve of a fan, efficiency refer to_____________",
       "Which of the following refer to fan characteristics curve"
       ];

       var options2 = [
       ["Rotational speed of fan","Impeller diameter","Air density","Fan drift pressure"], //air density
       ["Mechanical efficiency of fan", "Electrical efficiency of fan", "Overall efficiency of fan", "None of above"], //Electrical efficiency of fan
       ["Pressure Vs Volume", "Power Vs Volume", "Efficiency Vs Volume", "All of above"], //All of above

       ];

       function validateAnswer(qn, ans, left, top) {
         $("#answer").empty();
         document.getElementById("a").innerHTML = "";
         document.getElementById("questDiv").style = "position:absolute;text-align:justify; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
         document.getElementById("q").innerHTML = questions[qn];
         if (qn === 0) document.getElementById('questDiv').style.width = "370px";
         if (qn === 1) document.getElementById('questDiv').style.width = "250px";
         if (qn === 2) document.getElementById('questDiv').style.width = "250px";

         el = document.createElement("option");
         el.textContent = " ";
         el.value = " ";
         answer.appendChild(el);

         for (j = 0; j < options2[qn].length; j++) {
           opt = options2[qn][j];

           el = document.createElement("option");
           el.textContent = opt;
           el.value = opt;
           answer.appendChild(el);
           $("#answer").change(function() {
             ca = $(this).children("option:selected").val();
             if (options2[qn][ans] === ca) {
               document.getElementById("a").innerHTML = "Correct Answer!";
             }
             else {
               document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
             }
             setTimeout(function() {
               document.getElementById("questDiv").style.visibility = "hidden";
               document.getElementById("nextButton").style.visibility = "visible";
             }, 1500);
           });
         }
       }

       var p=Math.floor(Math.random()*(9));
       console.log(p);

       var data = [[12, 1.7, 8.06],
       [24, 3.2, 7.59],
       [30, 4.0, 7.59],
       ];

       var n;
       //for 300rpm at point 1
       var data1=[[0.45,17.6,17.1,0.5,18.6,16.4,2.2,18.3,16.8,1.5],
       [0.35,18.4,16.2,2.2,19.1,15.8,3.2,18,16.9,1.1],
       [0.3,19.1,15.6,3.5,19.7,15.2,4.5,17.2,16.9,0.3],
       [0.27,19.7,15.1,4.6,20,14.7,5.3,17.8,17.1,0.7],
       [0.235,19.7,15.2,4.5,19.9,15.1,4.8,17.7,17.1,0.6],
       [0.195,19.8,15.1,4.7,19.9,14.7,5.2,17.7,17.2,0.5],
       [0.17,20.1,15.1,5,20.2,14.6,5.6,17.6,17.4,0.2],
       [0.158,18.9,14.9,4,20.3,14.5,5.8,17.6,17.3,0.3],
       [0.12,20.1,15,5.1,20.3,14.7,5.6,17.5,17.3,0.2]];

       //for diameter of point1
       var data2=[[0.45,0.159,0.522,2.295,1.565],
       [0.35,0.096,2.295,3.338,1.148],
       [0.3,0.071,3.651,4.695,0.313],
       [0.27,0.051,4.799,5.529,0.730],
       [0.235,0.043,4.695,5.007,0.626],
       [0.195,0.030,4.903,5.424,0.522],
       [0.17,0.023,5.216,5.842,0.209],
       [0.158,0.020,4.173,6.051,0.313],
       [0.12,0.011,5.320,5.842,0.209]];

       var data2_1=[[1.615,0.257],
       [1.383,0.133],
       [0.722,0.051],
       [1.103,0.056],
       [1.021,0.044],
       [0.932,0.028],
       [0.590,0.013],
       [0.722,0.014],
       [0.590,0.007]];
      
       //for 400rpm at point 1
        var data3=[[0.45,17.7,16.9,0.8,18.5,16.1,2.5,19.1,15.6,3.5],
       [0.35,19.4,15.5,3.9,18.2,16.7,1.5,20.3,14.5,5.8],
       [0.3,20.4,14.4,6,17.9,16.7,1.2,21.2,13.6,7.6],
       [0.27,20.9,13.9,7,18,16.8,1.2,21.8,13.1,8.7],
       [0.235,21.1,13.7,7.4,17.8,17,0.8,21.7,13.2,8.5],
       [0.195,21.5,13.4,8.1,17.6,17.1,0.5,22,12.7,9.3],
       [0.17,21.7,13.2,8.5,17.6,17.2,0.4,22.1,12.9,9.2],
       [0.158,21.7,13.2,8.5,17.6,17.2,0.4,22.1,12.9,9.2],
       [0.12,21.6,13.3,8.3,17.6,17.2,0.4,21.2,13,8.2]];

        //for diameter of point2
        var data4=[[0.45,0.159,0.835,2.608,3.651],
       [0.35,0.096,0.096,4.069,1.565,6.051],
       [0.3,0.071,6.259,1.252,7.928],
       [0.27,0.051,7.303,1.252,9.076],
       [0.235,0.043,7.720,0.835,8.867],
       [0.195,0.030,8.450,0.522,9.389],
       [0.17,0.023,8.659,0.522,9.702],
       [0.158,0.020,8.867,0.417,9.598],
       [0.12,0.011,8.659,0.417,8.554]];

       var data11=[[45],
       [35],
       [30],
       [27],
       [23.5],
       [19.5],
       [17],
       [15.8],
       [12]];

       var data4_1=[[2.467,0.392],
       [3.176,0.305],
       [3.635,0.257],
       [3.889,0.199],
       [3.844,0.166],
       [3.956,0.118],
       [4.021,0.091],
       [4.000,0.078],
       [3.776,0.043]]

       var data5=[[0.522,2.295,1.565],
       [2.295,3.338,1.148],
       [3.651,4.695,0.313],
       [4.799,5.529,0.730],
       [4.695,5.007,0.626],
       [4.903,5.425,0.522],
       [5.216,5.842,0.209],
       [4.173,6.051,0.313],
       [5.320,5.842,0.209]];

       var data7=[[0.835,2.608,3.651],
       [4.069,1.565,6.051],
       [6.259,1.252,7.928],
       [7.303,1.252,9.076],
       [7.720,0.835,8.867],
       [8.450,0.522,9.389],
       [8.659,0.522,9.702],
       [8.867,0.417,9.598],
       [8.659,0.417,8.554]];

       var data8=[["data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"],
        ['Images/35 cm.png'],
        ['Images/30 cm.png'],
        ['Images/27 cm.png'], 
        ['Images/23.5 cm.png'],
        ['Images/19.5 cm.png'],
        ['Images/17 cm.png'],
        ['Images/15.8 cm.png'],
        ['Images/12 cm.png']];
       //-----------------------------------------blink arrow on the next step---------------------------------------------
       //blink arrow on the next step
       function animatearrow()
       {
         if (document.getElementById('arrow1').style.visibility==="hidden")
           document.getElementById('arrow1').style.visibility="visible";
         else
           document.getElementById('arrow1').style.visibility="hidden";
       }

       //stop blinking arrow
       function myStopFunction()
       {
         clearInterval(myInt);
         document.getElementById('arrow1').style.visibility="hidden";
       }
       var j0=0;
       function fillTable(repeat)
       {
         var tb1 = document.getElementById("table1");
         var row = tb1.insertRow();
         var cell = row.insertCell();
         cell.innerHTML =(repeat+1);
         for (i = 0; i <= data[j0].length-1; i++)
         {
           var cell = row.insertCell();
           cell.innerHTML = data[j0][i];
         }
         j0++;
       }
         var j1=0;
       function fillTable1(repeat)
       {
         var tb2 = document.getElementById("table2");
         var row2 = tb2.insertRow();
         for (i = 0; i <= data1[j1].length-1; i++)
         {
           var cell2 = row2.insertCell();
           cell2.innerHTML = data1[j1][i];
         }
        if(j1<=7)
        {
        j1++;
        fillTable1(j1);
        }
       }
         function highlight()
         {
          p=p+2;
         var rows = table2.getElementsByTagName("tr")[p];
         rows.style.backgroundColor = "#EFEDEF";
         }
          
        
       var j2=0;
       function fillTable2(repeat)
       {
         var tb3 = document.getElementById("table3");
         var row3 = tb3.insertRow();
         for (i = 0; i <= data2[j2].length-1; i++)
         {
           var cell3 = row3.insertCell();
           cell3.innerHTML = data2[j2][i];
         }
        if(j2<=7)
        {
        j2++;
        fillTable2(j2);
        }
       }

       function highlight1()
         {
          console.log(p);
          p=p+1;
         var rows = table3.getElementsByTagName("tr")[p];
         rows.style.backgroundColor = "#EFEDEF";
         }

        var j3=0;
       function fillTable3(repeat)
       {
         var tb4 = document.getElementById("table4");
         var row4 = tb4.insertRow();
         for (i = 0; i <= data3[j3].length-1; i++)
         {
           var cell4 = row4.insertCell();
           cell4.innerHTML = data3[j3][i];
         }
        if(j3<=7)
        {
        j3++;
        fillTable3(j3);
        }
       }
        function highlight2()
         {
         p=p+2;
         var rows = table4.getElementsByTagName("tr")[p];
         rows.style.backgroundColor = "#EFEDEF";
         }

       var j4=0;
       function fillTable4(repeat)
       {
         var tb5 = document.getElementById("table5");
         var row5 = tb5.insertRow();
         for (i = 0; i <= data2[j4].length-1; i++)
         {
           var cell5 = row5.insertCell();
           cell5.innerHTML = data2[j4][i];
         }
        if(j4<=7)
        {
        j4++;
        fillTable4(j4);
        }
       }
        function highlight3()
         {

          p=p+1;
         var rows = table5.getElementsByTagName("tr")[p];
         rows.style.backgroundColor = "#EFEDEF";
         }


       //-------------------------------------function magic starts here----------------------------------------------------
       function animateArrowATPosition(left,top,height,degg)
       {
         document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height:"+height+"px; z-index: 10;";
         document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
       // Code for IE9
       document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
       // Standard syntax
       document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
     }
     function magic()
     {
       if (simsubscreennum===1)
       {
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(60,85,20,270);
         document.getElementById('a3').onclick=function() { step1(); };
       }
       if (simsubscreennum===2)
       {
         document.getElementById('a03').style.visibility = "hidden";
         document.getElementById('a44').style.visibility = "hidden";
         document.getElementById('arrow2').style.visibility="hidden";
         document.getElementById('wind').style.visibility="hidden";
         document.getElementById('a2').style.visibility="hidden";
         document.getElementById('a5').style.visibility="hidden";
         document.getElementById('a6').style.visibility="hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(50,105,30,-90);
         document.getElementById('a12').onclick=function() { step2(); };
       }
       if (simsubscreennum===3)
       {
         document.getElementById('ca-1').style.visibility="hidden";
         document.getElementById('ca-2').style.visibility="hidden";
         document.getElementById('ca-3').style.visibility="hidden";
         document.getElementById('a15').style.visibility="hidden";
         document.getElementById('10').style.visibility = "visible";
         document.getElementById('ok').onclick = function() {
           document.getElementById('10').style.visibility = "hidden";
           document.getElementById('ok').style.visibility = "hidden";
           document.getElementById('can1').style.visibility="visible";
           document.getElementById('can2').style.visibility="visible";
           document.getElementById('can3').style.visibility="visible";
           document.getElementById('m-1').style.visibility="visible";
           document.getElementById('m-2').style.visibility="visible";
           document.getElementById('m-5').style.visibility="visible";
           document.getElementById('a1-1').style.visibility="visible";
           document.getElementById('a1-11').style.visibility="visible";
           if(p==0)
           {
           document.getElementById('Sample4').style.visibility="hidden";
           }
           else
           {
           document.getElementById('Sample4').style.visibility="visible";
           }
           setTimeout(function()
           {
            document.getElementById('aa').style.visibility="visible";
            document.getElementById("aa").src =data8[p][0];
            document.getElementById('Sample4').style.visibility="hidden";
             document.getElementById('a2-1').style.visibility="visible";
             document.getElementById('a2-11').style.visibility="visible";
             document.getElementById('m-3').style.visibility="visible";
             document.getElementById('m-4').style.visibility="visible";
             document.getElementById('a1-4').style.visibility="visible";
             document.getElementById('a3-1').style.visibility="visible";
             setTimeout(function()
             {
               display('m-1','m-2','m-5','can1','can2','can3','m-3','c1','ab1','m-8','m-9');
               document.getElementById('m-6').style.visibility="visible";
               document.getElementById('a1-21').style.visibility="visible";
               document.getElementById('a1-2').style.visibility="visible";
               document.getElementById('m-4').style.visibility="hidden";

               myInt = setInterval(function(){ animatearrow(); }, 500);
               animateArrowATPosition(150,200,20,180);
               document.getElementById('a1-21').onclick=function() { step3(); };
             },3000);
           },4000);
         };
       }
       if (simsubscreennum===4)
       {
          document.getElementById('Sample5').style.visibility="hidden";
         document.getElementById('aa').style.visibility="hidden";
         document.getElementById('a1-1').style.visibility="hidden";
         document.getElementById('a1-11').style.visibility="hidden";
         document.getElementById('a2-1').style.visibility="hidden";
         document.getElementById('a2-11').style.visibility="hidden";
         document.getElementById('a1-4').style.visibility="hidden";
         document.getElementById('a3-1').style.visibility="hidden";
         document.getElementById('a1-2').style.visibility="hidden";
         document.getElementById('a41-11').style.display="none";
         document.getElementById('a1-22').style.visibility="hidden";
         
         fillTable1(0);
         console.log(p)
         highlight();
         p=p-2;
        console.log(p);
        document.getElementById('s1').innerHTML=data11[p][0];
         calc1( 'button','output','output','button','output','button1','button','wrong','wrong','right','button1','h1','h1','output','wrong','right','right','h1','h1','button',0);

         calc1( 'button1','output1','output1','button1','output1','button2','button1','wrong1','wrong1','right1','button2','h2','h2','output1','wrong1','right1','right1','h2','h2','button1',1);

         calc1( 'button2','output2','output2','button2','output2','nextButton','button2','wrong2','wrong2','right2','nextButton','h3','h3','output2','wrong2','right2','right2','h3','h3','button2',2);
       }

       if (simsubscreennum===5)
       {
        refresh('right','right1','right2');
         refresh1('h1','h2','h3');
        fillTable2(0);
        console.log(p);
         highlight1();
         p=p-1;
         calc2('button2-1','output2-1','output2-1','button2-1','output2-1','button2-2','button2-1','wrong2-1','wrong2-1','right2-1','button2-2','h2-1','h2-1','output2-1','wrong2-1','right2-1','right2-1','h2-1','h2-1','button2-1',0);
         
         calc2('button2-2','output2-2','output2-2','button2-2','output2-2','nextButton','button2-2','wrong2-2','wrong2-2','right2-2','nextButton','h2-2','h2-2','output2-2','wrong2-2','right2-2','right2-2','h2-2','h2-2','button2-2',1);
       }

       if (simsubscreennum===6)
       {
         document.getElementById('right2-1').style.visibility="hidden";
         document.getElementById('right2-2').style.visibility="hidden";
         document.getElementById('h2-1').style.visibility="hidden";
         document.getElementById('h2-2').style.visibility="hidden";   
       }
       if (simsubscreennum===7)
       {
         document.getElementById('chartContainer').style.visibility = "hidden";
        document.getElementById('download-graph').style.visibility = "hidden";

         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(60,85,20,270);
         document.getElementById('b3').onclick=function() { stepp1(); };
       }

       if (simsubscreennum===8)
       {
         display('b03','b44','b2','b5','b6','arrow2','wind','can-1','can-2','can-3','n-1');
         document.getElementById('n-2').style.visibility="visible";
         document.getElementById('n-5').style.visibility="visible";
         document.getElementById('b1-1').style.visibility="visible";
         document.getElementById('b1-11').style.visibility="visible";
           if(p==0)
           {
           document.getElementById('Sample41').style.visibility="hidden";
           }
           else
           {
           document.getElementById('Sample41').style.visibility="visible";
           }         

         setTimeout(function()
         {
           document.getElementById('Sample41').style.visibility="hidden";
           document.getElementById('bb').style.visibility="visible";
           document.getElementById("bb").src =data8[p][0];
           document.getElementById('b2-1').style.visibility="visible";
           document.getElementById('b2-11').style.visibility="visible";
           document.getElementById('n-3').style.visibility="visible";
           document.getElementById('n-4').style.visibility="visible";
           document.getElementById('b1-4').style.visibility="visible";
           document.getElementById('b3-1').style.visibility="visible";
           setTimeout(function()
           {
             display('n-1','n-2','n-5','can-1','can-2','can-3','n-3','c1','ab1','m-8','m-9');
             document.getElementById('m-6').style.visibility="visible";
             document.getElementById('b1-21').style.visibility="visible";
             document.getElementById('b1-2').style.visibility="visible";
             document.getElementById('n-4').style.visibility="hidden";

             myInt = setInterval(function(){ animatearrow(); }, 500);
             animateArrowATPosition(150,200,20,180);
             document.getElementById('b1-21').onclick=function() { step33(); };
           },3000);
         },4000);
       }
       if (simsubscreennum===9)
       {
         document.getElementById('Sample5').style.visibility="hidden";
         document.getElementById('bb').style.visibility="hidden";
         document.getElementById('b1-1').style.visibility="hidden";
         document.getElementById('b1-11').style.visibility="hidden";
         document.getElementById('b2-1').style.visibility="hidden";
         document.getElementById('b2-11').style.visibility="hidden";
         document.getElementById('b1-4').style.visibility="hidden";
         document.getElementById('b3-1').style.visibility="hidden"
         document.getElementById('b1-2').style.visibility="hidden";
         document.getElementById('b41-11').style.display="none";
         document.getElementById('b1-22').style.visibility="hidden";
         
         fillTable3(0);
         highlight2();
         p=p-2;
         document.getElementById('s2').innerHTML=data11[p][0];

         calc3( 'button-11','output-11','output-11','button-11','output-11','button1-11','button-11','wrong-11','wrong-11','right-11','button1-11','h1-2','h1-2','output-11','wrong-11','right-11','right-11','h1-2','h1-2','button-11',0);

         calc3( 'button1-11','output1-11','output1-11','button1-11','output1-11','button2-11','button1-11','wrong1-11','wrong1-11','right1-11','button2-11','h2-21','h2-21','output1-11','wrong1-11','right1-11','right1-11','h2-21','h2-21','button1-11',1);

         calc3( 'button2-11','output2-11','output2-11','button2-11','output2-11','nextButton','button2-11','wrong2-11','wrong2-11','right2-11','nextButton','h3-2','h3-2','output2-11','wrong2-11','right2-11','right2-11','h3-2','h3-2','button2-11',2);


       }
       if (simsubscreennum===10)
       {
          refresh('right-11','right1-11','right2-11');
         refresh1('h1-2','h2-21','h3-2');
          
         fillTable4(0);
         highlight3();
         p=p-1;
         calc4('button3-1','output3-1','output3-1','button3-1','output3-1','button3-2','button3-1','wrong3-1','wrong3-1','right3-1','button3-2','h3-1','h3-1','output3-1','wrong3-1','right3-1','right3-1','h3-1','h3-1','button3-1',0);

         calc4('button3-2','output3-2','output3-2','button3-2','output3-2','nextButton','button3-2','wrong3-2','wrong3-2','right3-2','nextButton','h3-2','h3-2','output3-2','wrong3-2','right3-2','right3-2','h3-2','h3-2','button3-2',1);
       }

       if (simsubscreennum===11)
       {

         document.getElementById('right3-1').style.visibility="hidden";
         document.getElementById('right3-2').style.visibility="hidden";
         document.getElementById('h3-1').style.visibility="hidden";
         document.getElementById('h3-2').style.visibility="hidden";
       }
       if (simsubscreennum===12)
       {
          document.getElementById('chartContainer1').style.visibility = "hidden";
        document.getElementById('download-graph1').style.visibility = "hidden";
         $("#cbcalculation").ejChart(
      { 
        primaryXAxis:
        {
          title: { text: 'Volume Flow in m3/s' ,
              font : { fontWeight : "Bold" ,
                  fontFamily: "Verdana",
                  size: '14px' }},
          labelFormat:"{value}",      
          // range: { min: 1000, max: 4000, interval: 500},              
          range: {min: 0,max: 0.30,interval: 0.05 } ,
          border: { 
                 color: "blue",
                 width: 2,
                 opacity: 0.5 ,
                 cornerRadius : 4
               }, 

          //Customizing Chart title font 
          font:{ 
               opacity: 1,
               fontFamily: "Verdana",
               color: "black",
               size: '14px' 
             }             
           
        },   
         primaryYAxis:
        {
          title: { text: 'Total Pressure in Pascal' ,
              font : { fontWeight : "Bold" ,
                  fontFamily: "Verdana",
                  size: '14px' }},
          labelFormat:"{value}",
          // range: { min: 100, max: 400, interval: 50 },                       
          range: { min: 0, max: 6, interval: 1}  ,
          font:{ 
               opacity: 1,
               fontFamily: "Verdana",
               color: "black",
               size: '14px' 
             }  
          
        },

        series: 
        [ 
          {
            points: [
                                {x: 0.007,y: 5.842},
                                {x: 0.028,y: 5.425},
                                {x: 0.044,y: 5.007},
                                {x: 0.133,y: 3.338},
                                {x: 0.257,y: 2.295}    
                            ],
            name:'Total Pressure v/s Volume Flow for 300 rpm',
            type: 'spline',
            fill:"#0066FF",
            border :{width:5},
            tooltip:{visible:true},
            marker:{
              shape: 'circle',
              size:
              {
                height: 5, width: 5
              },
              visible: true
            },          
            
          },
          {       // Add second series
         points: [
                                {x: 0,y: 0},
                                {x: 0.043,y: 0.417},
                                {x: 0.078,y: 0.417},
                                {x: 0.118,y: 0.522},
                                {x: 0.166,y: 0.835},
                                {x: 0.257,y: 1.252},
                            ], 
          name:'Total Pressure v/s Volume Flow for 400 rpm',
           type: 'line',
           fill:"#a04000",
            border :{width:5},
            tooltip:{visible:true},
            marker:{
              shape: 'circle',
              size:
              {
                height: 5, width: 5
              },
              visible: true
            },          
          },
        ],
        commonSeriesOptions : {
          enableAnimation :true,
          animationDuration : 800 
        },
        load:"loadTheme",
        isResponsive: true,
        title :{text: 'Total Pressure v/s Volume Flow'},
        legend:{visible:true,
            font : { fontWeight : "Bold" ,
            fontFamily: "Verdana",
            size: '13px' }}
      });
    }
  }
     function step1()
     {
       myStopFunction();
       document.getElementById('a3').onclick="";

       document.getElementById("a3").style.animation = "mover 1s ease-in-out  forwards";
       setTimeout(function()
       {
         document.getElementById('a03').style.visibility = "visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(198,280,20,720);
       },1000);
       document.getElementById("a4").onclick=function() {step1_11();};
     }

     function step1_11()
     {
       myStopFunction();
       document.getElementById("a4").onclick="";
       document.getElementById('a44').style.visibility = "visible";
       document.getElementById('m9').style.opacity='1';
       document.getElementById('m10').style.opacity='1';
       document.getElementById('a2').style.visibility="visible";
       document.getElementById('arrow2').style.visibility="visible";
       document.getElementById('wind').style.visibility="visible";
       initiate();
       setInterval("rt(1)", 500);

       setTimeout(function()
       {
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(182,257,20,720);
         document.getElementById("a0").onclick=function() {
           myStopFunction();
           this.onclick = null;

           document.getElementById('a01').style.visibility = "visible";
           document.getElementById('a01').style.transform = "rotate(380deg)";
           document.getElementById("a01").style.WebkitTransform = "rotate(380deg)";
           document.getElementById("a01").style.msTransform = "rotate(380deg)";
           document.getElementById('Sample0').style.visibility="visible";
           document.getElementById('m7').style.opacity='1';
           document.getElementById('m8').style.opacity='1';
           document.getElementById('a5').style.visibility="visible";
           document.getElementById('a6').style.visibility="visible";
           document.getElementById("a6").style.animation = "moven 1s ease-in-out forwards";
           setTimeout(function()
           {
             document.getElementById('a01').style.visibility="hidden";
             document.getElementById('Sample0').style.visibility="hidden";
             document.getElementById('nextButton').style.visibility="visible";
           },1000);
         };
       },1200);
     }

     function step2()
     {
       myStopFunction();
       document.getElementById('a12').onclick="";

       document.getElementById("a12").style.animation = "moves 1s ease-in-out forwards";
       setTimeout(function()
       {
         document.getElementById('a13').style.visibility="visible";
         document.getElementById('c13').style.visibility="visible";
         setTimeout(function()
         {
           fillTable(0);
           setTimeout(function()
           {
             document.getElementById('a13').style.visibility="hidden";
             document.getElementById('c13').style.visibility="hidden";
             document.getElementById("a12").style.animation = "movess 1s ease-in-out forwards";
             setTimeout(function()
             {
               document.getElementById('a14').style.visibility="visible";
               document.getElementById('c14').style.visibility="visible";
               setTimeout(function()
               {
                 fillTable(1);
                 setTimeout(function()
                 {
                   document.getElementById('a14').style.visibility="hidden";
                   document.getElementById('c14').style.visibility="hidden";

                   document.getElementById("a12").style.animation = "movese 1s ease-in-out forwards";
                   setTimeout(function()
                   {
                     document.getElementById('a15').style.visibility="visible";
                     document.getElementById('c15').style.visibility="visible";

                     setTimeout(function()
                     {
                       fillTable(2);
                       setTimeout(function()
                       {
                         document.getElementById('ca-1').style.visibility="visible";
                         document.getElementById('ca-2').style.visibility="visible";
                         document.getElementById('ca-3').style.visibility="visible";

                         setTimeout(function()
                         {
                           document.getElementById('c15').style.visibility="hidden";
                           document.getElementById('a11').style.visibility="hidden";
                           document.getElementById('a12').style.visibility="hidden";
                           document.getElementById('a15').style.visibility="hidden";
                           validateAnswer(0, 2, "150px", "150px");
                         },800);
                       },800);
                     },800);
                   },2000);
                 },2000);
               },800);
             },2000);
           },2000);
         },800);
       },2000);
     }


     function step3()
     {
       myStopFunction();
       document.getElementById('a1-21').onclick="";
       document.getElementById('c1').style.visibility="hidden";
       document.getElementById('ab1').style.visibility="hidden";
       document.getElementById('m-8').style.visibility="hidden";
       document.getElementById('m-9').style.visibility="hidden";
       document.getElementById('m-6').style.visibility="hidden";
       document.getElementById("a1-21").style.animation = "movehand1 1s ease-in-out  forwards";
       setTimeout(function()
       {
         document.getElementById("a1-2").style.animation = "movep 1s ease-in-out  forwards";
         document.getElementById("a1-21").style.animation = "movehand11 1s ease-in-out forwards";
         setTimeout(function()
         {
           document.getElementById('Sample1').style.visibility="visible";
           setTimeout(function()
           {
             document.getElementById('Sample1').style.visibility="hidden";
             document.getElementById('a1-21').style.visibility="hidden";
             var leftLimbMargin = (data1[p][1]-15)*14.6;
             var rightLimbMargin = (data1[p][2]-15)*14.6;
             document.getElementById('a2-2').style.marginLeft = leftLimbMargin + 'px';
             document.getElementById('a2-22').style.marginLeft = rightLimbMargin + 'px';
             setTimeout(function()
             {
               document.getElementById('a3-2').style.visibility="visible";
               myInt = setInterval(function(){ animatearrow(); }, 500);
               animateArrowATPosition(45,370,30,180);
               document.getElementById("a3-2").onclick=function() {
                 myStopFunction();
                 document.getElementById("a3-2").onclick="";
                 var boxHandMargin = (data1[p][1]-5)*14.6;
                 document.getElementById("a3-2").style.marginLeft = boxHandMargin + 'px';
                 document.getElementById("a3-1").style.marginLeft = boxHandMargin + 'px';

                 setTimeout(function()
                 {
                   document.getElementById('a3-2').style.visibility="hidden";
                   document.getElementById('para').innerHTML="Static Head:";
                   document.getElementById('para1').innerHTML="Left Limb Reading="+data1[p][1]+" cm";
                   setTimeout(function()
                   {
                     document.getElementById('a3-1').style.display="none";
                     document.getElementById('a4-1').style.visibility="visible";
                     setTimeout(function()
                     {
                       document.getElementById('a41-22').style.visibility="visible";
                       myInt = setInterval(function(){ animatearrow(); }, 500);
                       animateArrowATPosition(45,370,30,180);
                       document.getElementById("a41-22").onclick=function() {
                         myStopFunction();
                         document.getElementById("a41-22").onclick="";
                         var boxHandMargin = (data1[p][2]-5)*14.6;
                         document.getElementById("a41-22").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("a4-1").style.marginLeft = boxHandMargin + 'px';

                         setTimeout(function()
                         {
                           document.getElementById('a41-22').style.visibility="hidden";
                           document.getElementById('para2').innerHTML="Right Limb Reading="+data1[p][2]+" cm";
                           document.getElementById('para3').innerHTML="Difference="+data1[p][3]+" cm";
                           setTimeout(function()
                           {
                            document.getElementById('a4-1').style.display="none";
                            display('para','para1','para2','para3','a2-2','a2-22','a1-2','a22-2','a22-22','a1-22','a3-11');
                            document.getElementById('a1-23').style.visibility="visible";
                            myInt = setInterval(function(){ animatearrow(); }, 500);
                            animateArrowATPosition(340,170,20,-90);
                            document.getElementById("a1-23").onclick=function() {
                             myStopFunction();
                             document.getElementById("a1-23").onclick="";
                             document.getElementById("a1-23").style.animation = "movehand2 1s ease-in-out forwards";
                             setTimeout(function()
                             {
                               document.getElementById("a1-22").style.animation = "movepp 1s ease-in-out forwards";
                               document.getElementById("a1-23").style.animation = "movehand22 1s ease-in-out forwards";
                               setTimeout(function()
                               {
                                 document.getElementById('Sample2').style.visibility="visible";
                                 setTimeout(function()
                                 {
                                   document.getElementById('Sample2').style.visibility="hidden";
                                   document.getElementById('a1-23').style.visibility="hidden";
                                   var leftLimbMargin = (data1[p][4]-15)*14.6;
                                   var rightLimbMargin = (data1[p][5]-15)*14.6;
                                   document.getElementById('a22-2').style.marginLeft = leftLimbMargin + 'px';
                                   document.getElementById('a22-22').style.marginLeft = rightLimbMargin + 'px';
                                   setTimeout(function()
                                   {
                                     document.getElementById('a3-22').style.visibility="visible";
                                     myInt = setInterval(function(){ animatearrow(); }, 500);
                                     animateArrowATPosition(45,370,30,180);
                                     document.getElementById("a3-22").onclick=function() {
                                       myStopFunction();
                                       var boxHandMargin = (data1[p][4]-5)*14.6;
                                       document.getElementById("a3-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a3-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a3-22').style.visibility="hidden";
                                       document.getElementById('paraa').innerHTML="Total Head:";
                                       document.getElementById('para11').innerHTML="Left Limb Reading="+data1[p][4]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a3-11').style.display="none";
                                       document.getElementById('a4-11').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-22').style.visibility="visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("a4-22").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("a4-22").onclick="";
                                       var boxHandMargin = (data1[p][5]-5)*14.6;
                                       document.getElementById("a4-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a4-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-22').style.visibility="hidden";
                                       document.getElementById('para22').innerHTML="Right Limb Reading="+data1[p][5]+" cm";
                                       document.getElementById('para33').innerHTML="Difference="+data1[p][6]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-11').style.display="none";
                                       display('paraa','para11','para22','para33','a22-2','a22-22','a3-11','a1-2','a21-2','a21-22','a31-11');
                                       setTimeout(function()
                                       {
                                       document.getElementById('Sample3').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('Sample3').style.visibility="hidden";

                                       var leftLimbMargin = (data1[p][7]-15)*14.6;
                                       var rightLimbMargin = (data1[p][8]-15)*14.6;
                                       document.getElementById('a21-2').style.marginLeft = leftLimbMargin + 'px';
                                       document.getElementById('a21-22').style.marginLeft = rightLimbMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a31-22').style.visibility="visible";

                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("a31-22").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("a31-22").onclick="";
                                       boxHandMargin = (data1[p][7]-5)*14.6;
                                       document.getElementById("a31-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a31-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a31-22').style.visibility="hidden";
                                       document.getElementById('para0').innerHTML="Velocity Head:";
                                       document.getElementById('para11-1').innerHTML="Left Limb Reading="+data1[p][7]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a31-11').style.display="none";
                                       document.getElementById('a41-11').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-2').style.visibility="visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("a4-2").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("a4-2").onclick="";
                                       var boxHandMargin = (data1[p][8]-5)*14.6;
                                       document.getElementById("a4-2").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a41-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-2').style.visibility="hidden";
                                       document.getElementById('para22-1').innerHTML="Right Limb Reading="+data1[p][8]+" cm";
                                       document.getElementById('para33-1').innerHTML="Difference="+data1[p][9]+" cm";
                                       document.getElementById('Sample5').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                         validateAnswer(1,0, "530px", "90px");
                                       },4000);
                                       },2000);
                                      }
                                     },2000);
                                    },2000);
                                   },2000);
                                  }
                                 },5000)
                                },3500);
                               },1000);
                              },3000);
                             },2000);
                            }
                           },2000);
                          },2000);
                         },2000);
                        }
                       },6000);
                      },3500);
                     },1000);
                    },1000);
                   };
                  },2000);
                 },2000);
                }
               },2000);
              },2000);
             },2000);
            }
           },6000);
          },3500);
         },2000);
        },1000);
       }

     function initiate() {
       var img=document.getElementById('a2');
       var l=685;
       var t=80;
       var m1=document.getElementById('m1');
       m1.style.top=(t+1)+'px'; m1.style.left=(l+2)+'px';
       document.getElementById('m2').style.top=(t+41)+'px';
       document.getElementById('m2').style.left=(l+5)+'px';
       document.getElementById('m3').style.top=(t+70)+'px';
       document.getElementById('m3').style.left=(l+6)+'px';
       document.getElementById('m4').style.top=(t+105)+'px';
       document.getElementById('m4').style.left=(l+7)+'px';
       document.getElementById('m5').style.top=(t+132)+'px';
       document.getElementById('m5').style.left=(l+7.5)+'px';
       document.getElementById('m6').style.top=(t+147)+'px';
       document.getElementById('m6').style.left=(l+8)+'px';
     }
     function rt(n){
       var t=200;
       while(n){
         for(let i=6;i>0;i--){
           blink(i,t);
           t+=100;
         }
         n--;
       }
     }
     function blink(i,t){
       setTimeout(function(){document.getElementById('m'+i).style.opacity='1';},t);
       setTimeout(function(){document.getElementById('m'+i).style.opacity='0';},t+200);
     }

     function initiate1() {
       var img=document.getElementById('a2');
       var l1=685;
       var t1=80;
       var n1=document.getElementById('n1');
       n1.style.top=(t1+1)+'px'; n1.style.left=(l1+2)+'px';
       document.getElementById('n2').style.top=(t1+41)+'px';
       document.getElementById('n2').style.left=(l1+5)+'px';
       document.getElementById('n3').style.top=(t1+70)+'px';
       document.getElementById('n3').style.left=(l1+6)+'px';
       document.getElementById('n4').style.top=(t1+105)+'px';
       document.getElementById('n4').style.left=(l1+7)+'px';
       document.getElementById('n5').style.top=(t1+132)+'px';
       document.getElementById('n5').style.left=(l1+7.5)+'px';
       document.getElementById('n6').style.top=(t1+147)+'px';
       document.getElementById('n6').style.left=(l1+8)+'px';
     }
     function rt1(n){
       var tx=200;
       while(n){
         for(let i=6;i>0;i--){
           blink1(i,tx);
           tx+=100;
         }
         n--;
       }
     }
     function blink1(i,tx){
       setTimeout(function(){document.getElementById('n'+i).style.opacity='1';},tx);
       setTimeout(function(){document.getElementById('n'+i).style.opacity='0';},tx+200);
     }


     function stepp1()
     {
       myStopFunction();
       document.getElementById('b3').onclick="";

       document.getElementById("b3").style.animation = "mover 1s ease-in-out  forwards";
       setTimeout(function()
       {
         document.getElementById('b03').style.visibility = "visible";

         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(198,280,20,720);
       },1000);
       document.getElementById("b4").onclick=function() {stepp1_11();};
     }

     function stepp1_11()
     {
       myStopFunction();
       document.getElementById("b4").onclick="";
       document.getElementById('b44').style.visibility = "visible";
       document.getElementById('n9').style.opacity='1';
       document.getElementById('n10').style.opacity='1';
       document.getElementById('b2').style.visibility="visible";
       document.getElementById('arrow2').style.visibility="visible";
       document.getElementById('wind').style.visibility="visible";
       initiate1();
       setInterval("rt1(1)", 500);

       setTimeout(function()
       {
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(182,257,20,720);
         document.getElementById("b0").onclick=function() {
           myStopFunction();
           this.onclick = null;

           document.getElementById('b01').style.visibility = "visible";
           document.getElementById('b01').style.transform = "rotate(380deg)";
           document.getElementById("b01").style.WebkitTransform = "rotate(380deg)";
           document.getElementById("b01").style.msTransform = "rotate(380deg)";
           document.getElementById('Sample0').style.visibility="visible";
           document.getElementById('n7').style.opacity='1';
           document.getElementById('n8').style.opacity='1';
           document.getElementById('b5').style.visibility="visible";
           document.getElementById('b6').style.visibility="visible";
           document.getElementById("b6").style.animation = "movenn 1s ease-in-out forwards";
           setTimeout(function()
           {
             document.getElementById('b01').style.visibility="hidden";
             document.getElementById('Sample0').style.visibility="hidden";
             document.getElementById('nextButton').style.visibility="visible";
           },1000);
         };
       },1200);

     }

     function step33()
     {
       myStopFunction();
       document.getElementById('b1-21').onclick="";
       document.getElementById('c1').style.visibility="hidden";
       document.getElementById('ab1').style.visibility="hidden";
       document.getElementById('m-8').style.visibility="hidden";
       document.getElementById('m-9').style.visibility="hidden";
       document.getElementById('m-6').style.visibility="hidden";
       document.getElementById("b1-21").style.animation = "movehand1 1s ease-in-out  forwards";
       setTimeout(function()
       {
         document.getElementById("b1-2").style.animation = "movep 1s ease-in-out  forwards";
         document.getElementById("b1-21").style.animation = "movehand11 1s ease-in-out forwards";
         setTimeout(function()
         {
           document.getElementById('Sample1').style.visibility="visible";
           setTimeout(function()
           {
             document.getElementById('Sample1').style.visibility="hidden";
             document.getElementById('b1-21').style.visibility="hidden";
             var leftLimbMargin = (data3[p][1]-15)*14.6;
             var rightLimbMargin = (data3[p][2]-15)*14.6;
             document.getElementById('b2-2').style.marginLeft = leftLimbMargin + 'px';
             document.getElementById('b2-22').style.marginLeft = rightLimbMargin + 'px';
             setTimeout(function()
             {
               document.getElementById('b3-2').style.visibility="visible";
               myInt = setInterval(function(){ animatearrow(); }, 500);
               animateArrowATPosition(45,370,30,180);
               document.getElementById("b3-2").onclick=function() {
                 myStopFunction();
                 document.getElementById("b3-2").onclick="";
                 var boxHandMargin = (data3[p][1]-5)*14.6;
                 document.getElementById("b3-2").style.marginLeft = boxHandMargin + 'px';
                 document.getElementById("b3-1").style.marginLeft = boxHandMargin + 'px';

                 setTimeout(function()
                 {
                   document.getElementById('b3-2').style.visibility="hidden";
                   document.getElementById('par').innerHTML="Static Head:";
                   document.getElementById('par1').innerHTML="Left Limb Reading="+data3[p][1]+" cm";
                   setTimeout(function()
                   {
                     document.getElementById('b3-1').style.display="none";
                     document.getElementById('b4-1').style.visibility="visible";
                     setTimeout(function()
                     {
                       document.getElementById('b41-22').style.visibility="visible";
                       myInt = setInterval(function(){ animatearrow(); }, 500);
                       animateArrowATPosition(45,370,30,180);
                       document.getElementById("b41-22").onclick=function() {
                         myStopFunction();
                         document.getElementById("b41-22").onclick="";
                         var boxHandMargin = (data3[p][2]-5)*14.6;
                         document.getElementById("b41-22").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("b4-1").style.marginLeft = boxHandMargin + 'px';

                         setTimeout(function()
                         {
                           document.getElementById('b41-22').style.visibility="hidden";
                           document.getElementById('par2').innerHTML="Right Limb Reading="+data3[p][2]+" cm";
                           document.getElementById('par3').innerHTML="Difference="+data3[p][3]+" cm";
                           setTimeout(function()
                           {

                            document.getElementById('b4-1').style.display="none";
                            display('par','par1','par2','par3','b2-2','b2-22','b1-2','b22-2','b22-22','b1-22','b3-11');
                            document.getElementById('b1-23').style.visibility="visible";
                            myInt = setInterval(function(){ animatearrow(); }, 500);
                            animateArrowATPosition(340,170,20,-90);
                            document.getElementById("b1-23").onclick=function() {
                             myStopFunction();
                             document.getElementById("b1-23").onclick="";
                             document.getElementById("b1-23").style.animation = "movehand2 1s ease-in-out forwards";
                             setTimeout(function()
                             {
                               document.getElementById("b1-22").style.animation = "movepp 1s ease-in-out forwards";
                               document.getElementById("b1-23").style.animation = "movehand22 1s ease-in-out forwards";
                               setTimeout(function()
                               {
                                 document.getElementById('Sample2').style.visibility="visible";
                                 setTimeout(function()
                                 {
                                   document.getElementById('Sample2').style.visibility="hidden";
                                   document.getElementById('b1-23').style.visibility="hidden";
                                   var leftLimbMargin = (data3[p][4]-15)*14.6;
                                   var rightLimbMargin = (data3[p][5]-15)*14.6;
                                   document.getElementById('b22-2').style.marginLeft = leftLimbMargin + 'px';
                                   document.getElementById('b22-22').style.marginLeft = rightLimbMargin + 'px';
                                   setTimeout(function()
                                   {
                                     document.getElementById('b3-22').style.visibility="visible";
                                     myInt = setInterval(function(){ animatearrow(); }, 500);
                                     animateArrowATPosition(45,370,30,180);
                                     document.getElementById("b3-22").onclick=function() {
                                       myStopFunction();
                                       var boxHandMargin = (data3[p][4]-5)*14.6;
                                       document.getElementById("b3-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("b3-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('b3-22').style.visibility="hidden";
                                       document.getElementById('parr').innerHTML="Total Head:";
                                       document.getElementById('par11').innerHTML="Left Limb Reading="+data3[p][4]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('b3-11').style.display="none";
                                       document.getElementById('b4-11').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('b4-22').style.visibility="visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("b4-22").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("b4-22").onclick="";
                                       var boxHandMargin = (data3[p][5]-5)*14.6;
                                       document.getElementById("b4-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("b4-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('b4-22').style.visibility="hidden";
                                       document.getElementById('par22').innerHTML="Right Limb Reading="+data3[p][5]+" cm";
                                       document.getElementById('par33').innerHTML="Difference="+data3[p][6]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('b4-11').style.display="none";
                                       display('parr','par11','par22','par33','b22-2','b22-22','b3-11','b1-2','b21-2','b21-22','b31-11');
                                       setTimeout(function()
                                       {
                                       document.getElementById('Sample3').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('Sample3').style.visibility="hidden";

                                       var leftLimbMargin = (data3[p][7]-15)*14.6;
                                       var rightLimbMargin = (data3[p][8]-15)*14.6;
                                       document.getElementById('b21-2').style.marginLeft = leftLimbMargin + 'px';
                                       document.getElementById('b21-22').style.marginLeft = rightLimbMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('b31-22').style.visibility="visible";

                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("b31-22").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("b31-22").onclick="";
                                       boxHandMargin = (data3[p][7]-5)*14.6;
                                       document.getElementById("b31-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("b31-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('b31-22').style.visibility="hidden";
                                       document.getElementById('par0').innerHTML="Velocity Head:";
                                       document.getElementById('par12-2').innerHTML="Left Limb Reading="+data3[p][7]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('b31-11').style.display="none";
                                       document.getElementById('b41-11').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('b4-2').style.visibility="visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("b4-2").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("b4-2").onclick="";
                                       var boxHandMargin = (data3[p][8]-5)*14.6;
                                       document.getElementById("b4-2").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("b41-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('b4-2').style.visibility="hidden";
                                       document.getElementById('par22-2').innerHTML="Right Limb Reading="+data3[p][8]+" cm";
                                       document.getElementById('par33-2').innerHTML="Difference="+data3[p][9]+" cm";
                                       document.getElementById('Sample5').style.visibility="visible";
                                        setTimeout(function()
                                       {
                                         validateAnswer(2,3, "530px", "90px");
                                       },2000);
                                       },2000);
                                      }
                                     },2000);
                                    },2000);
                                   },2000);
                                  }
                                 },5000)
                                },3500);
                               },1000);
                              },3000);
                             },2000);
                            }
                           },2000);
                          },2000);
                         },2000);
                        }
                       },6000);
                      },3500);
                     },1000);
                    },1000);
                   };
                  },2000);
                 },2000);
                }
               },2000);
              },2000);
             },2000);
            }
           },6000);
          },3500);
         },2000);
        },1000);
       }

     function refresh(r1,r2,r3)
     {
       document.getElementById(r1).style.visibility="hidden";
       document.getElementById(r2).style.visibility="hidden";
       document.getElementById(r3).style.visibility="hidden";
     }
     function refresh1(n1,n2,n3)
     {
       document.getElementById(n1).style.display="none";
       document.getElementById(n2).style.display="none";
       document.getElementById(n3).style.display="none";

     }
     function display(para_1,para_2,para_3,para_4,para_5,para_6,para_7,para_8,para_9,para_10,para_11)
     {
       document.getElementById(para_1).style.visibility="hidden";
       document.getElementById(para_2).style.visibility="hidden";
       document.getElementById(para_3).style.visibility="hidden";
       document.getElementById(para_4).style.visibility="hidden";
       document.getElementById(para_5).style.visibility="hidden";
       document.getElementById(para_6).style.visibility="hidden";
       document.getElementById(para_7).style.visibility="hidden";
       document.getElementById(para_8).style.visibility="visible";
       document.getElementById(para_9).style.visibility="visible";
       document.getElementById(para_10).style.visibility="visible";
       document.getElementById(para_11).style.visibility="visible";
     }

     var k;
     function calc1(para_button,para_output,para_output,para_button,para_output,
      para_button1,para_button,para_wrong,para_wrong,para_right,para_button1,
      para_h1,para_h1,para_output,para_wrong,para_right,para_right,para_h1,para_h1,para_button,k )
     {
      console.log(p);
       var flag1=0;
       document.getElementById(para_button).onclick=function() {
         n= document.getElementById(para_output).value;
         if(document.getElementById(para_output).value==="")
         {
           if(document.getElementById(para_button).innerHTML==="Result"){
             document.getElementById(para_output).value=data5[p][k];
             document.getElementById(para_button1).style.visibility="visible";
             document.getElementById(para_button).style.visibility = "hidden";
             document.getElementById(para_wrong).style.visibility = "hidden";
           }
           else
             alert("Enter the value to proceed");
         }
         else {
           if(Math.floor(n)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100)){
             document.getElementById(para_button).style.visibility = 'hidden';
             document.getElementById(para_wrong).style.visibility = "hidden";
             document.getElementById(para_right).style.visibility = "visible";
             document.getElementById(para_button1).style.visibility = 'visible';
             document.getElementById(para_h1).style.visibility="visible";
             document.getElementById(para_h1).innerHTML=data5[p][k];}
             else{
               flag1+=1;
               document.getElementById(para_output).value = "";
               document.getElementById(para_wrong).style.visibility = "visible";
               document.getElementById(para_right).style.visibility = "hidden";
               if (flag1===2){
                 if(Math.floor(n)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100)){
                   document.getElementById(para_right).style.visibility="visible";
                   document.getElementById(para_h1).style.visibility="visible";
                   document.getElementById(para_h1).innerHTML=data5[p][k];
                 }
                 else
                   document.getElementById(para_button).innerHTML="Result";
               }
             }
           }
         };
       }

       var k;
       function calc2(para_button1,para_output1,para_output1,para_button1,para_output1,para_button11,
        para_button1,para_wrong1,para_wrong1,para_right1,para_button11,para_h11,para_h11,para_output1,
        para_wrong1,para_right1,para_right1,para_h11,para_h11,para_button1,k)
       {
         var flag1=0;
         document.getElementById(para_button1).onclick=function() {
           n= document.getElementById(para_output1).value;
           if(document.getElementById(para_output1).value==="")
           {
             if(document.getElementById(para_button1).innerHTML==="Result"){
               document.getElementById(para_output1).value=data2_1[p][k];
               //document.getElementById(rr5).innerHTML=data2_1[p][k];
               document.getElementById(para_button11).style.visibility="visible";
               document.getElementById(para_button1).style.visibility = "hidden";
               document.getElementById(para_wrong1).style.visibility = "hidden";
             }
             else
               alert("Enter the value to proceed");
           }
           else {
             if(Math.floor(n)===Math.floor(data2_1[p][k])||Math.floor(n*10)===Math.floor(data2_1[p][k]*10)||Math.floor(n*100)===Math.floor(data2_1[p][k]*100)){
               document.getElementById(para_button1).style.visibility = 'hidden';
               document.getElementById(para_wrong1).style.visibility = "hidden";
               document.getElementById(para_right1).style.visibility = "visible";
               document.getElementById(para_button11).style.visibility = 'visible';
               document.getElementById(para_h11).style.visibility="visible";
               document.getElementById(para_h11).innerHTML=data2_1[p][k];
               //document.getElementById(rr5).innerHTML=data2_1[p][k];
             }
               else{
                 flag1+=1;
                 document.getElementById(para_output1).value = "";
                 document.getElementById(para_wrong1).style.visibility = "visible";
                 document.getElementById(para_right1).style.visibility = "hidden";
                 if (flag1===2){
                   if(Math.floor(n)===Math.floor(data2_1[p][k])||Math.floor(n*10)===Math.floor(data2_1[p][k]*10)||Math.floor(n*100)===Math.floor(data2_1[p][k]*100)){
                     document.getElementById(para_right1).style.visibility="visible";
                     document.getElementById(para_h11).style.visibility="visible";
                     document.getElementById(para_h11).innerHTML=data2_1[p][k];
                     //document.getElementById(rr5).innerHTML=data2_1[p][k];
                   }
                   else
                     document.getElementById(para_button1).innerHTML="Result";
                 }
               }
             }
           };
         }

         var k;
         function calc3(para_button2,para_output2,para_output2,para_button2,para_output2,para_button12,
          para_button2,para_wrong2,para_wrong2,para_right2,para_button12,para_h2,para_h2,para_output2,
          para_wrong2,para_right2,para_right2,para_h2,para_h2,para_button2,k )
         {
           var flag1=0;
           document.getElementById(para_button2).onclick=function() {
             n= document.getElementById(para_output2).value;
             if(document.getElementById(para_output2).value==="")
             {
               if(document.getElementById(para_button2).innerHTML==="Result"){
                 document.getElementById(para_output2).value=data7[p][k];
                 document.getElementById(para_button12).style.visibility="visible";
                 document.getElementById(para_button2).style.visibility = "hidden";
                 document.getElementById(para_wrong2).style.visibility = "hidden";
               }
               else
                 alert("Enter the value to proceed");
             }
             else {
               if(Math.floor(n)===Math.floor(data7[p][k])||Math.floor(n*10)===Math.floor(data7[p][k]*10)||Math.floor(n*100)===Math.floor(data7[p][k]*100)){
                 document.getElementById(para_button2).style.visibility = 'hidden';
                 document.getElementById(para_wrong2).style.visibility = "hidden";
                 document.getElementById(para_right2).style.visibility = "visible";
                 document.getElementById(para_button12).style.visibility = 'visible';
                 document.getElementById(para_h2).style.visibility="visible";
                 document.getElementById(para_h2).innerHTML=data7[p][k];}
                 else{
                   flag1+=1;
                   document.getElementById(para_output2).value = "";
                   document.getElementById(para_wrong2).style.visibility = "visible";
                   document.getElementById(para_right2).style.visibility = "hidden";
                   if (flag1===2){
                     if(Math.floor(n)===Math.floor(data7[p][k])||Math.floor(n*10)===Math.floor(data7[p][k]*10)||Math.floor(n*100)===Math.floor(data7[p][k]*100)){
                       document.getElementById(para_right2).style.visibility="visible";
                       document.getElementById(para_h2).style.visibility="visible";
                       document.getElementById(para_h2).innerHTML=data7[p][k];
                     }
                     else
                       document.getElementById(para_button2).innerHTML="Result";
                   }
                 }
               }
             };
           }

           var k;
           function calc4(para_button3,para_output3,para_output3,para_button3,para_output3,para_button13,
            para_button3,para_wrong3,para_wrong3,para_right3,para_button13,para_h3,para_h3,para_output3,
            para_wrong3,para_right3,para_right3,para_h3,para_h3,para_button3,k )
           {
             var flag1=0;
             document.getElementById(para_button3).onclick=function() {
               n= document.getElementById(para_output3).value;
               if(document.getElementById(para_output3).value==="")
               {
                 if(document.getElementById(para_button3).innerHTML==="Result"){
                   document.getElementById(para_output3).value=data4_1[p][k];
                   // document.getElementById(rs5).innerHTML=data4_1[p][k];
                   document.getElementById(para_button13).style.visibility="visible";
                   document.getElementById(para_button3).style.visibility = "hidden";
                   document.getElementById(para_wrong3).style.visibility = "hidden";
                 }
                 else
                   alert("Enter the value to proceed");
               }
               else {
                 if(Math.floor(n)===Math.floor(data4_1[p][k])||Math.floor(n*10)===Math.floor(data4_1[p][k]*10)||Math.floor(n*100)===Math.floor(data4_1[p][k]*100)){
                   document.getElementById(para_button3).style.visibility = 'hidden';
                   document.getElementById(para_wrong3).style.visibility = "hidden";
                   document.getElementById(para_right3).style.visibility = "visible";
                   document.getElementById(para_button13).style.visibility = 'visible';
                   document.getElementById(para_h3).style.visibility="visible";
                   document.getElementById(para_h3).innerHTML=data4_1[p][k];
                 // document.getElementById(rs5).innerHTML=data4_1[p][k];
               }

                   else{
                     flag1+=1;
                     document.getElementById(para_output3).value = "";
                     document.getElementById(para_wrong3).style.visibility = "visible";
                     document.getElementById(para_right3).style.visibility = "hidden";
                     if (flag1===2){
                       if(Math.floor(n)===Math.floor(data4_1[p][k])||Math.floor(n*10)===Math.floor(data4_1[p][k]*10)||Math.floor(n*100)===Math.floor(data4_1[p][k]*100)){
                         document.getElementById(para_right3).style.visibility="visible";
                         document.getElementById(para_h3).style.visibility="visible";
                         document.getElementById(para_h3).innerHTML=data4_1[p][k];
                         //document.getElementById(rs5).innerHTML=data4_1[p][k];
                       }
                       else
                         document.getElementById(para_button3).innerHTML="Result";
                     }
                   }
                 }
               };
             }


            function graph() {
                document.getElementById('chartContainer').style.visibility = "visible";
                document.getElementById('download-graph').style.visibility = "visible";

                $("#chartContainer").ejChart({
                    primaryXAxis: {
                        title: {
                            text: 'Volume Flow in m3/s',
                            font: {
                                fontWeight: "Bold",
                                fontFamily: "Verdana",
                                size: '14px'
                            }
                        },
                        labelFormat: "{value}",
                        // range: { min: 1000, max: 4000, interval: 500},              
                        range: {
                            min: 0,max: 0.30,interval: 0.05
                        },
                        border: {
                            color: "blue",width: 2,opacity: 0.5,cornerRadius: 4
                        },

                        //Customizing Chart title font 
                        font: {
                            opacity: 1,fontFamily: "Verdana",color: "black",size: '14px'
                        }
                    },
                    primaryYAxis: {
                        title: {
                            text: 'Total Pressure in Pascal',
                            font: {
                                fontWeight: "Bold",fontFamily: "Verdana",size: '14px'
                            }
                        },
                        labelFormat: "{value}",
                        // range: { min: 100, max: 400, interval: 50 },                       
                        range: {
                            min: 0,max: 6,interval: 1
                        },
                        font: {
                            opacity: 1,fontFamily: "Verdana",color: "black",size: '14px'
                        }

                    },
                    series: [{
                            points: [
                                {x: 0.007,y: 5.842},
                                {x: 0.028,y: 5.425},
                                {x: 0.044,y: 5.007},
                                {x: 0.133,y: 3.338},
                                {x: 0.257,y: 2.295}
                               
                            ],
                            name: 'Total Pressure v/s Volume Flow',
                            type: 'line',
                            fill: "#0066FF",
                            border: {
                                width: 5
                            },
                            tooltip: {
                                visible: true
                            },
                            marker: {
                                shape: 'circle',
                                size: {
                                    height: 5,
                                    width: 5
                                },
                                visible: true
                            },

                        },

                    ],
                    commonSeriesOptions: {
                        enableAnimation: true,
                        animationDuration: 800
                    },
                    load: "loadTheme",
                    isResponsive: true,
                    legend: {
                        visible: true,
                        font: {
                            fontWeight: "Bold",
                            fontFamily: "Verdana",
                            size: '12px'
                        }
                    },
                     enableCanvasRendering: true,
                    exportSettings: { type: "jpg", mode: "client"}
                  
                });
                
                setTimeout(function() {
                    document.getElementById("nextButton").style.visibility = "visible";
                }, 1000);

                //Add download function to the anchor element.
                document.getElementById('download-graph').onclick = function download() {
                    var chart = $("#chartContainer").ejChart("export");
                    if(window.navigator.msSaveOrOpenBlob)
                      window.navigator.msSaveOrOpenBlob(chart.msToBlob(), "Graph for 300 rpm.jpg");
                    else{
                      var chartData = chart.toDataURL();
                      this.download = "Graph for 300 rpm.jpg";
                      this.href = chartData;
                    }
                }
            }

           function graph1() {
                document.getElementById('chartContainer1').style.visibility = "visible";
                document.getElementById('download-graph1').style.visibility = "visible";

                $("#chartContainer1").ejChart({
                    primaryXAxis: {
                        title: {
                            text: 'Volume Flow in m3/s',
                            font: {
                                fontWeight: "Bold",
                                fontFamily: "Verdana",
                                size: '14px'
                            }
                        },
                        labelFormat: "{value}",
                        // range: { min: 1000, max: 4000, interval: 500},              
                        range: {
                            min: 0,max: 0.30,interval: 0.05
                        },
                        border: {
                            color: "blue",width: 2,opacity: 0.5,cornerRadius: 4
                        },

                        //Customizing Chart title font 
                        font: {
                            opacity: 1,fontFamily: "Verdana",color: "black",size: '14px'
                        }
                    },
                    primaryYAxis: {
                        title: {
                            text: 'Total Pressure in Pascal',
                            font: {
                                fontWeight: "Bold",fontFamily: "Verdana",size: '14px'
                            }
                        },
                        labelFormat: "{value}",
                        // range: { min: 100, max: 400, interval: 50 },                       
                        range: {
                            min: 0,max: 6,interval: 1
                        },
                        font: {
                            opacity: 1,fontFamily: "Verdana",color: "black",size: '14px'
                        }

                    },
                    series: [{
                            points: [
                                {x: 0,y: 0},
                                {x: 0.043,y: 0.417},
                                {x: 0.078,y: 0.417},
                                {x: 0.118,y: 0.522},
                                {x: 0.166,y: 0.835},
                                {x: 0.257,y: 1.252},
                            ],
                            name: 'Total Pressure v/s Volume Flow',
                            type: 'line',
                            fill: "#a04000",
                            border: {
                                width: 5
                            },
                            tooltip: {
                                visible: true
                            },
                            marker: {
                                shape: 'circle',
                                size: {
                                    height: 5,
                                    width: 5
                                },
                                visible: true
                            },
                        },
                    ],
                    commonSeriesOptions: {
                        enableAnimation: true,
                        animationDuration: 800
                    },
                    load: "loadTheme",
                    isResponsive: true,
                    legend: {
                        visible: true,
                        font: {
                            fontWeight: "Bold",
                            fontFamily: "Verdana",
                            size: '12px'
                        }
                    },
                     enableCanvasRendering: true,
                    exportSettings: { type: "jpg", mode: "client"}
                });
                
                setTimeout(function() {
                    document.getElementById("nextButton").style.visibility = "visible";
                }, 1000);

                //Add download function to the anchor element.
                document.getElementById('download-graph1').onclick = function download() {
                    var chart = $("#chartContainer1").ejChart("export");
                    if(window.navigator.msSaveOrOpenBlob)
                      window.navigator.msSaveOrOpenBlob(chart.msToBlob(), "Graph for 400 rpm.jpg");
                    else{
                      var chartData = chart.toDataURL();
                      this.download = "Graph for 400 rpm.jpg";
                      this.href = chartData;
                    }
                }
            }