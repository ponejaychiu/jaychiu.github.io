//全选与取消全选
function checkboxed(objName)
{
	var objNameList=document.getElementsByName(objName)
	if (objNameList !=null)
	{
		alert("全选操作")
		for (var i=0;i<objNameList.length;i++)
		{
			objNameList[i].checked="checked"
		}
	}
}
function uncheckboxed(objName)
{
	var objNameList=document.getElementsByName(objName)
	if (objNameList !=null)
	{
		alert("取消全选操作")
		for (var i=0;i<objNameList.length;i++)
		{
			objNameList[i].checked=""
		}
	}
}
