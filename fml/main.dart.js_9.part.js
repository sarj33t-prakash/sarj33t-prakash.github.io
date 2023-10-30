self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
cbd(d,e){return new B.aBT(d,e,new H.f8(""),A.aE(9,0,!1,x.e))},
d2_(d,e){var w,v,u,t,s,r,q=d.b,p=d.pq(0)
for(w=p,v=w,u=0,t=!1;w<q;++w){s=d.a
s===$&&A.d()
if((s[C.h.ag(w,32)]&1<<(w&31))>>>0!==0!==t)e[u]=e[u]+1
else{if(u===8){if(B.cjL(e)===148&&d.OL(Math.max(0,v-C.h.ag(w-v,2)),v,!1))return A.a([v,w],x.r)
v+=e[0]+e[1]
A.Ji(e,0,e,2,u+1)
r=u-1
e[r]=0
e[u]=0
u=r}else ++u
e[u]=1
t=!t}}throw A.j($.be())},
cjL(d){var w,v,u,t,s,r,q,p=0
do{for(w=2147483647,v=0;v<9;++v){u=d[v]
if(u<w&&u>p)w=u}for(t=0,s=0,r=0,q=0;q<9;++q){u=d[q]
if(u>w){r=(r|C.h.eW(1,8-q))>>>0;++t
s+=u}}if(t===3){q=0
while(!0){if(!(q<9&&t>0))break
u=d[q]
if(u>w){--t
if(u*2>=s)return-1}++q}return r}if(t>3){p=w
continue}else break}while(!0)
return-1},
d20(d){var w
for(w=0;w<43;++w)if(E.lDQ[w]===d)return y.a[w]
if(d===148)return"*"
throw A.j($.be())},
d1Z(d){var w,v,u,t,s,r=d.length
for(w=0,v="";w<r;++w){u=d[w]
if(u==="+"||u==="$"||u==="%"||u==="/"){++w
t=C.e.aG(d,w)
switch(u){case"+":if(t>=65&&t<=90)s=A.bT(t+32)
else throw A.j($.c4())
break
case"$":if(t>=65&&t<=90)s=A.bT(t-64)
else throw A.j($.c4())
break
case"%":if(t>=65&&t<=69)s=A.bT(t-38)
else if(t>=70&&t<=74)s=A.bT(t-11)
else if(t>=75&&t<=79)s=A.bT(t+16)
else if(t>=80&&t<=84)s=A.bT(t+43)
else if(t===85)s=A.bT(0)
else if(t===86)s="@"
else if(t===87)s="`"
else if(t===88||t===89||t===90)s=A.bT(127)
else throw A.j($.c4())
break
case"/":if(t>=65&&t<=79)s=A.bT(t-32)
else{if(t!==90)throw A.j($.c4())
s=":"}break
default:s="\x00"}v+=s}else v+=u}return v.charCodeAt(0)==0?v:v},
aBT:function aBT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2h(d,e,f){var w,v,u,t,s,r=f.length
C.b.iG(f,0,r,0)
w=d.b
if(e>=w)throw A.j($.be())
v=!d.cQ(0,e)
for(u=d.a,t=e,s=0;t<w;){u===$&&A.d()
if((u[C.h.ag(t,32)]&1<<(t&31))>>>0!==0!==v)f[s]=f[s]+1
else{++s
if(s===r)break
else{f[s]=1
v=!v}}++t}if(s!==r)w=s===r-1&&t===w
else w=!0
if(!w)throw A.j($.be())},
HA:function HA(){}},C,A,D,E,G,F,J,H
B=a.updateHolder(c[12],B)
C=c[2]
A=c[0]
D=c[18]
E=c[27]
G=c[26]
F=c[9]
J=c[1]
H=c[16]
B.aBT.prototype={
oS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=y.a,g=i.d
C.b.iG(g,0,9,0)
w=i.c
w.b=null
w.yv(0)
v=B.d2_(e,g)
u=e.pq(v[1])
do{B.a2h(e,u,g)
t=B.cjL(g)
if(t<0)throw A.j($.be())
s=B.d20(t)
w.b=null
w.cS(0,s)
for(r=u,q=0;q<9;++q)r+=g[q]
r=e.pq(r)
if(s!=="*"){u=r
continue}else break}while(!0)
w.a1j(w.a.length-1)
for(p=0,q=0;q<9;++q)p+=g[q]
if(r!==e.b&&(r-u-p)*2<p)throw A.j($.be())
if(i.a){o=w.a.length-1
for(n=0,m=0;m<o;++m){l=w.b
n+=C.e.cM(h,(l==null||!1?w.b=w.wq(0):l)[m])}w.BS()
l=w.b
l.toString
if(C.e.aR(l,o)!==C.e.aR(h,C.h.a7(n,43)))throw A.j($.LQ())
w.a1j(o)}l=w.a
if(l.length===0)throw A.j($.be())
k=l.charCodeAt(0)==0?l:l
if(i.b)k=B.d1Z(k)
j=D.Nh(k,null,A.a([new D.cM((v[1]+v[0])/2,d),new D.cM(u+p/2,d)],x.d),E.wQ)
j.kx(G.ec,"]A0")
return j}}
B.HA.prototype={
kL(d,e,f){var w,v,u
try{v=this.aY9(e,f)
return v}catch(u){if(A.H(u) instanceof A.IJ){w=f!=null&&f.X(0,F.mj)
throw u}else throw u}},
aY9(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
a4=a4
q=a3.a
p=q.a
w=p.a
o=p.b
v=A.afy(w)
n=a4!=null&&J.fa(a4,F.mj)
m=Math.max(1,C.h.al(o,n?8:5))
l=A.by("maxLines")
if(n)l.b=o
else l.b=15
k=C.h.ag(o,2)
p=x.i
j=x.E
i=x.t
h=l.a
g=0
while(!0){f=l.b
if(f===l)A.O(A.hN(h))
if(!(g<f))break
c$0:{e=g+1
d=C.h.ag(e,2)
u=k+m*((g&1)===0?d:-d)
if(u<0||u>=o)break
try{v=q.aFQ(u,v)}catch(a0){if(A.H(a0) instanceof A.IJ)break c$0
else throw a0}for(t=0;t<2;++t){if(J.n(t,1)){J.d03(v)
if(a4!=null&&J.fa(a4,F.ke)){a1=A.C(p,j)
a1.K(0,a4)
a1.G(0,F.ke)
a4=a1}}try{s=this.oS(u,v,a4)
if(J.n(t,1)){f=s
a2=f.f;(a2==null?f.f=A.C(i,j):a2).m(0,E.lTu,180)
r=s.d
if(r!=null){J.dq(r,0,new D.cM(w-J.ag(r,0).a-1,J.ag(r,0).b))
J.dq(r,1,new D.cM(w-J.ag(r,1).a-1,J.ag(r,1).b))}}f=s
return f}catch(a0){if(!(A.H(a0) instanceof A.Ov))throw a0}}}g=e}throw A.j($.be())},
$ihk:1}
var z=a.updateTypes([]);(function inheritance(){var w=a.inherit
w(B.HA,A.Y)
w(B.aBT,B.HA)})()
A.a4U(b.typeUniverse,JSON.parse('{"aBT":{"HA":[],"hk":[]},"HA":{"hk":[]}}'))
var y={a:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%"}
var x={i:A.a0("M_"),r:A.a0("B<D>"),d:A.a0("B<cM?>"),E:A.a0("Y"),t:A.a0("K_"),e:A.a0("D")};(function constants(){var w=a.makeConstList
E.wQ=new D.HQ(2,"CODE_39")
E.lDQ=A.a(w([52,289,97,352,49,304,112,37,292,100,265,73,328,25,280,88,13,268,76,28,259,67,322,19,274,82,7,262,70,22,385,193,448,145,400,208,133,388,196,168,162,138,42]),x.r)
E.lTu=new D.K_(1,"ORIENTATION")})()}
$__dart_deferred_initializers__["B265o3o3kfQzQPJKM+C/vh+XxkU="] = $__dart_deferred_initializers__.current
