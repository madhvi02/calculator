var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
for (var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click',function()
	{
        
		var value=this.getAttribute('data-value');
		if(value=='+')
		{
			if(display.textContent!=" ")
			{
			operator='+';
			operand1=parseFloat(display.textContent);
			display.textContent=" ";
		    }
		}
		else if(value=='*')
		{
			  if(display.textContent!=" ")
			{
			  operator='*';
			  operand1=parseFloat(display.textContent);
			  display.textContent=" ";
			}

		}
		else if(value=='/')
		{
			if(display.textContent!=" ")
			{
			 operator='/';
			 operand1=parseFloat(display.textContent);
			 display.textContent=" ";
			}
			
		}
		else if(value=='-')
		{
			if(display.textContent!=" ")
			{
			 operator='-';
			 operand1=parseFloat(display.textContent);
			 display.textContent=" ";
			}
		}
		else if(value=='%')
		{
			if(display.textContent!=" ")
			{
			 operator='%';
			 operand1=parseFloat(display.textContent);
			 display.textContent=" ";
			}
		}
		else if (value=='=') 
		{
			if(display.textContent!=" ")
			
			{
				operand2=parseFloat(display.textContent);
                
            }
			else
			{
				operand2=operand1;
			}
			var result=eval(operand1+" "+operator+" "+operand2);
            display.innerText=result;
            
		}
		else if(value=='AC')
		{
			display.innerText=" ";
		}
		else
		{
           display.innerText+=value;
		}
		

	});
	
}












