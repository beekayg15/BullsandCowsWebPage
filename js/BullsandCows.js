var chance;
var digits=4;
var guess;
var code;
var allguess;

function start3()
{
	digits=3;
	document.getElementById("start").style.display="none";
	document.getElementById("main").style.display="block";
}

function start4()
{
	digits=4;
	document.getElementById("start").style.display="none";
	document.getElementById("main").style.display="block";
}

function start5()
{
	digits=5;
	document.getElementById("start").style.display="none";
	document.getElementById("main").style.display="block";
}


function setrand()
{
	code=[];
	var count=0;
	while(count<digits)
	{
		var num=Math.floor(Math.random()*10);
		var i;
		var flag=1;
		for(i=0;i<count;i++)
		{
			if(num==code[i])
			{
				flag=0;
			}
		}
		code[count]=num;
		count+=flag;
	}
}

function reset()
{
	allguess=[]
	chance=1;
	setrand();
}

function playbullsandcows()
{
	guess=prompt("Chance : "+ chance+"\n\nEnter a "+digits+"-digit number : \n");
	var valid=checkinput(guess);
	if(valid){
		var b=numberofbulls(guess,code);
		document.getElementById("bulls").innerHTML=b;
		var c=numberofcows(guess,code);
		document.getElementById("cows").innerHTML=c;
		document.getElementById("chance").innerHTML=chance;
		allguess[chance-1]="\nChance : "+ chance++ +"  "+guess+"  Bulls: "+b+"  Cows: "+c;
		if(b==digits){			
			document.getElementById("turn").innerHTML="You have identified the code in "+(chance-1)+" turn(s)";
			document.getElementById("win").style.display="block";
			document.getElementById("main").style.display="none";
		}
	}
	else{
		alert("Invalid Input\n\nPlease refer the instructions to know the game rules");
	}
}

function numberofbulls(x,y)
{
	var i;
	var bulls=0;
	for(i=0;i<digits;i++)
	{
		if(x[i]==y[i])
		{
			bulls++;
		}
	}
	return bulls;
}

function numberofcows(x,y)
{
	var i;
	var j;
	var cows=0;
	for(i=0;i<digits;i++)
	{
		for(j=0;j<digits;j++)
		{
			if(x[i]==y[j]&&i!=j)
			{
				cows++;
			}
		}
	}
	return cows;
}

function printguess()
{
	alert(allguess);
}

function checkinput(x)
{
	if(x.length!=digits){
		return false;
	}
	var i;
	for(i=0;i<digits;i++)
	{
		if(x[i]>'9'||x[i]<'0'){
			return false;
		}
	}
	return true;
}