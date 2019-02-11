#include<bits/stdc++.h>
using namespace std;
int main()
{
	int i,j,k,l,n;
	string str;
	getline(cin,str);
	cin.clear();
	string s;
	s="";
	int flag=0;
	for(i=0;i<str.length();i++){
	       if(str[i]==' '){
		       if(s=="not"){
			       flag=1;
			       break;
		       }
		       s="";
	       }
	       else{
		       s+=str[i];
	       }
	    //   cout<<s<<endl;
                    }
             if(flag==0){
		     cout<<"regularly fancy"<<endl;
	     }
             else{
		     cout<<"Real Fancy"<<endl;
	        }	     
}
