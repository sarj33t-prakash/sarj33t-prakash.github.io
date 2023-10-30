self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
cl0(d,e){var x=A.ab5()
return d.a_6(null).Ol(new B.bhY(e,x))},
bhY:function bhY(d,e){this.a=d
this.b=e},
cli(){var x=$.aik,w=(x==null?$.aik=$.c9E():x).a7T(0,"[DEFAULT]")
A.JZ(w,$.ayq(),!0)
return B.d5X(new A.Xi(w))},
d5X(d){return $.d5Y.cY(0,d.a.a,new B.bjl(d,null))},
a7k:function a7k(d,e,f,g){var _=this
_.c=null
_.d=d
_.e=e
_.a=f
_.b=g},
bjl:function bjl(d,e){this.a=d
this.b=e},
aFp:function aFp(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j},
aRo:function aRo(d){this.a=d},
aRp:function aRp(d,e){this.a=d
this.b=e},
d8E(d){var x=$.ayr(),w=new B.a25(d)
$.Hr().m(0,w,x)
w.aRz(d)
return w},
a25:function a25(d){this.c=null
this.a=d},
btP:function btP(d,e){this.a=d
this.b=e},
btN:function btN(d,e){this.a=d
this.b=e},
btQ:function btQ(d,e){this.a=d
this.b=e},
btM:function btM(d,e){this.a=d
this.b=e},
btR:function btR(d){this.a=d},
QO:function QO(d,e){this.a=d
this.$ti=e},
ccW(d){var x=$.ch0(),w=new B.aJl(new B.bvB())
$.Hr().m(0,w,x)
return w},
aJl:function aJl(d){this.b=d},
bu0:function bu0(d){this.e=d},
ccX(d,e,f){var x=$.ca_(),w=new B.aJm(d,f)
$.Hr().m(0,w,x)
return w},
aJm:function aJm(d,e){this.a=d
this.c=e},
e5V(d){var x=B.ccE(d,y.y)
x=A.i2(x,new B.c8K(),x.$ti.h("G.E"),y.P)
return A.a8(x,!0,A.w(x).h("G.E"))},
c8K:function c8K(){},
d9U(d){var x,w,v,u,t
y.F.a(d)
x=J.ao(d)
w=A.cw(x.i(d,"displayName"))
v=x.i(d,"enrollmentTimestamp")
v.toString
A.id(v)
u=A.cw(x.i(d,"factorId"))
t=x.i(d,"uid")
t.toString
return new B.Yt(w,v,u,A.c_(t),A.cw(x.i(d,"phoneNumber")))},
Yt:function Yt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bvB:function bvB(){},
bvv:function bvv(){},
bjz:function bjz(){},
ccE(d,e){return B.d7F(d,e,e)},
d7F(d,e,f){return A.Ki(function(){var x=d,w=e
var v=0,u=1,t,s,r
return function $async$ccE(g,h){if(g===1){t=h
v=u}while(true)switch(v){case 0:s=J.ap(x)
case 2:if(!s.t()){v=3
break}r=s.gR(s)
v=r!=null?4:5
break
case 4:v=6
return r
case 6:case 5:v=2
break
case 3:return A.Ke()
case 1:return A.Kf(t)}}},f)},
cfS(d,e,f){if(!(d instanceof A.f6))A.bhN(d,e)
A.bhN(B.e6r(d,!1),e)},
e6r(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m="additionalData",l="Can't parse multi factor error",k="authCredential",j=d.c,i=j!=null?A.KC(j,y.N,y.z):n,h=d.b
if(i!=null){x=i.i(0,"code")
if(x==null)x="unknown"
if(x==="second-factor-required"){x=A.cw(i.i(0,"code"))
h=A.cw(i.i(0,"message"))
w=y.n.a(i.i(0,m))
if(w==null)A.O(A.a7m(l,n,n,h,n,n))
j=J.ao(w)
v=y.A.a(j.i(w,"multiFactorHints"))
if(v==null)v=[]
v=B.ccE(v,y.K)
v=A.i2(v,B.e5R(),v.$ti.h("G.E"),y.y)
B.e5V(A.a8(v,!0,A.w(v).h("G.E")))
if($.btS.i(0,j.i(w,"appName"))==null)A.O(A.a7m(x==null?"Unknown":x,n,n,h,n,n))
u=A.cw(j.i(w,"multiFactorSessionId"))
t=A.cw(j.i(w,"multiFactorResolverId"))
if(u==null||t==null)A.O(A.a7m(l,n,n,h,n,n))
j=$.ch1()
s=new B.bu0(new B.bvv())
$.Hr().m(0,s,j)
return A.cld(x==null?"Unknown":x,n,h,n,s,n)}r=i.i(0,"message")
h=r==null?h:r
w=i.i(0,m)
if(w!=null){j=J.ao(w)
q=j.i(w,k)!=null?new A.azv(J.ag(j.i(w,k),"providerId"),J.ag(j.i(w,k),"signInMethod"),J.ag(j.i(w,k),"token"),n):n
p=j.i(w,"email")!=null?j.i(w,"email"):n}else{q=n
p=q}o=B.dhU(w,h)
if(o!=null)x=o}else{q=n
p=q
x="unknown"}return A.a7m(x,q,p,h,n,n)},
dhU(d,e){var x,w,v,u,t,s=null,r=["INVALID_LOGIN_CREDENTIALS","BLOCKING_FUNCTION_ERROR_RESPONSE"]
for(x=d==null,w=e==null,v=0;v<2;++v){u=r[v]
if(!J.n(x?s:J.ag(d,"message"),u)){if(w)t=s
else{t=e.length
t=A.JG(e,u,0)}t=t===!0}else t=!0
if(t)return u}return s}},J,A,C,D
B=a.updateHolder(c[4],B)
J=c[1]
A=c[0]
C=c[19]
D=c[2]
B.a7k.prototype={
gaku(){var x,w,v,u=this,t="APP_CURRENT_USER",s=u.c
if(s==null){s=u.gbD7()
x=$.cc5
if(x==null){x=$.ayr()
w=new B.a25(null)
$.Hr().m(0,w,x)
$.cc5=w
x=w}x=x.aws(u.e,u.d)
w=J.ao(s)
v=w.i(s,"APP_LANGUAGE_CODE")
s=u.c=x.afY(w.i(s,t)==null?null:A.KC(w.i(s,t),y.N,y.z),v)}return s},
uA(d){return this.aJm(d)},
aJm(d){var x=0,w=A.u(y._),v,u=2,t,s=this,r,q,p,o,n,m,l,k,j
var $async$uA=A.p(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:u=4
x=7
return A.v(s.gaku().uA(d),$async$uA)
case 7:q=f
A.JZ(q,$.chb(),!0)
v=new B.aRp(s,q)
x=1
break
u=2
x=6
break
case 4:u=3
j=t
q=A.H(j)
if(q instanceof A.aii){r=q
q=r
o=q.c
n=q.b
m=q.e
l=q.f
k=q.r
q=q.w
throw A.j(new B.aFp(m,l,k,q,"firebase_auth",n,o))}else throw j
x=6
break
case 3:x=2
break
case 6:case 1:return A.r(v,w)
case 2:return A.q(t,w)}})
return A.t($async$uA,w)},
m_(d){var x=0,w=A.u(y.H),v=this
var $async$m_=A.p(function(e,f){if(e===1)return A.q(f,w)
while(true)switch(x){case 0:x=2
return A.v(v.gaku().m_(0),$async$m_)
case 2:return A.r(null,w)}})
return A.t($async$m_,w)},
k(d){return"FirebaseAuth(app: "+this.e.a.a+")"}}
B.aFp.prototype={}
B.aRo.prototype={
Es(d){return this.a.t_(0,!1)},
k(d){var x="metadata",w=this.a,v=w.c
return C.m5m.k(0)+"(displayName: "+A.l(v.i(0,"displayName"))+", email: "+A.l(v.i(0,"email"))+", emailVerified: "+A.l(v.i(0,"emailVerified"))+", isAnonymous: "+A.l(v.i(0,"isAnonymous"))+", metadata: "+new A.bLg(J.ag(v.i(0,x),"creationTime"),J.ag(v.i(0,x),"lastSignInTime")).k(0)+", phoneNumber: "+A.l(v.i(0,"phoneNumber"))+", photoURL: "+A.l(v.i(0,"photoURL"))+", providerData, "+A.l(w.gAo(w))+", refreshToken: "+A.l(v.i(0,"refreshToken"))+", tenantId: "+A.l(v.i(0,"tenantId"))+", uid: "+v.i(0,"uid")+")"}}
B.aRp.prototype={
gAJ(d){var x=this.b.d,w=$.ca_()
A.JZ(x,w,!0)
return new B.aRo(x)},
k(d){var x=this.b
return"UserCredential(additionalUserInfo: "+A.l(x.b)+", credential: "+A.l(x.c)+", user: "+A.l(this.gAJ(this))+")"}}
B.a25.prototype={
aRz(d){var x=null,w=d.a.a,v=y.N,u=y.a
C.Bq.f2("Auth#registerIdTokenListener",A.e(["appName",w],v,v),!1,v).cn(0,new B.btP(this,d),u)
C.Bq.f2("Auth#registerAuthStateListener",A.e(["appName",w],v,v),!1,v).cn(0,new B.btQ(this,d),u)
v=y.X
$.cKg.m(0,w,new A.ei(x,x,v))
$.cKh.m(0,w,new A.ei(x,x,v))
$.cKi.m(0,w,new A.ei(x,x,v))},
a4v(d,e){return this.b0E(d,e)},
b0E(d,e){var x=0,w=A.u(y.H),v,u,t,s,r
var $async$a4v=A.p(function(f,g){if(f===1)return A.q(g,w)
while(true)switch(x){case 0:r=$.cKg.i(0,d)
r.toString
v=$.btS.i(0,d)
v.toString
u=$.btO.i(0,d)
if(u==null){u=B.ccW(v)
$.btO.m(0,d,u)}t=J.ag(e,"user")
if(t==null){v.c=null
r.A(0,C.EX)}else{s=B.ccX(v,u,J.LS(t,y.N,y.z))
v.c=s
r.A(0,new B.QO(s,y.B))}return A.r(null,w)}})
return A.t($async$a4v,w)},
a4L(d,e){return this.b3y(d,e)},
b3y(d,e){var x=0,w=A.u(y.H),v,u,t,s,r,q
var $async$a4L=A.p(function(f,g){if(f===1)return A.q(g,w)
while(true)switch(x){case 0:q=$.cKh.i(0,d)
q.toString
v=$.cKi.i(0,d)
v.toString
u=$.btS.i(0,d)
u.toString
t=$.btO.i(0,d)
if(t==null){t=B.ccW(u)
$.btO.m(0,d,t)}s=J.ag(e,"user")
if(s==null){u.c=null
q.A(0,C.EX)
v.A(0,C.EX)}else{r=u.c=B.ccX(u,t,J.LS(s,y.N,y.z))
u=y.B
q.A(0,new B.QO(r,u))
v.A(0,new B.QO(r,u))}return A.r(null,w)}})
return A.t($async$a4L,w)},
aws(d,e){return $.btS.cY(0,d.a.a,new B.btR(d))},
afY(d,e){var x=this
if(d!=null)x.c=B.ccX(x,B.ccW(x),d)
return x},
uA(d){throw A.j(A.ck("signInWithPopup() is only supported on web based platforms"))},
m_(d){var x=0,w=A.u(y.H),v=1,u,t=this,s,r,q,p,o,n,m
var $async$m_=A.p(function(e,f){if(e===1){u=f
x=v}while(true)switch(x){case 0:v=3
q=y.N
p=y.z
o=A.e(["appName",t.gau3(t).a.a,"tenantId",null],q,p)
o.K(0,A.C(q,p))
x=6
return A.v(C.Bq.f2("Auth#signOut",o,!1,y.H),$async$m_)
case 6:t.c=null
v=1
x=5
break
case 3:v=2
m=u
s=A.H(m)
r=A.bB(m)
B.cfS(s,r,!1)
x=5
break
case 2:x=1
break
case 5:return A.r(null,w)
case 1:return A.q(u,w)}})
return A.t($async$m_,w)},
gCE(d){return this.c}}
B.QO.prototype={
gj(d){return this.a}}
B.aJl.prototype={}
B.bu0.prototype={}
B.aJm.prototype={}
B.Yt.prototype={}
B.bvB.prototype={}
B.bvv.prototype={}
B.bjz.prototype={
gbD7(){var x,w=$.clk.i(0,this.a)
if(w!=null&&w.i(0,this.b)!=null){x=w.i(0,this.b)
x.toString
return y.f.a(x)}x=y.z
return A.C(x,x)}}
var z=a.updateTypes(["a7k()","a25()","On(Yt)","Yt(Y)","0&(Y,eu{fromPigeon:N})"])
B.bhY.prototype={
$1(d){return this.a.$2(d,this.b)},
$S:1051}
B.bjl.prototype={
$0(){var x=this.a,w=$.cUx()
x=new B.a7k(this.b,x,x.a.a,"plugins.flutter.io/firebase_auth")
$.Hr().m(0,x,w)
return x},
$S:z+0}
B.btP.prototype={
$1(d){d.toString
B.cl0(new A.U_(d,D.bd),B.cRw()).hk(new B.btN(this.a,this.b))},
$S:341}
B.btN.prototype={
$1(d){this.a.a4L(this.b.a.a,d)},
$S:6}
B.btQ.prototype={
$1(d){d.toString
B.cl0(new A.U_(d,D.bd),B.cRw()).hk(new B.btM(this.a,this.b))},
$S:341}
B.btM.prototype={
$1(d){this.a.a4v(this.b.a.a,d)},
$S:6}
B.btR.prototype={
$0(){return B.d8E(this.a)},
$S:z+1}
B.c8K.prototype={
$1(d){var x,w,v,u=d.e
if(u!=null){x=d.a
w=d.b
v=d.c
if(v==null)v="phone"
return new A.amc(u,x,w,v,d.d)}u=d.a
x=d.b
w=d.c
if(w==null)w=""
return new A.On(u,x,w,d.d)},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a.installStaticTearOff
x(B,"e5R","d9U",3)
w(B,"cRw",2,null,["$3$fromPigeon","$2"],["cfS",function(d,e){return B.cfS(d,e,!1)}],4,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.MG,[B.bhY,B.btP,B.btN,B.btQ,B.btM,B.c8K])
w(B.bjz,A.aLP)
w(B.a7k,B.bjz)
x(A.ago,[B.bjl,B.btR])
w(B.aFp,A.a7l)
x(A.Y,[B.aRo,B.aRp,B.QO,B.Yt,B.bvB,B.bvv])
w(B.a25,A.aFq)
w(B.aJl,A.aJT)
w(B.bu0,A.aJU)
w(B.aJm,A.LF)})()
A.a4U(b.typeUniverse,JSON.parse('{"aFp":{"bb":[]},"aJm":{"LF":[]}}'))
var y=(function rtii(){var x=A.a0
return{f:x("b5<@,@>"),F:x("b5<Y?,Y?>"),P:x("On"),a:x("bj"),K:x("Y"),y:x("Yt"),N:x("o"),_:x("aRp"),X:x("ei<QO<LF>>"),B:x("QO<LF>"),z:x("@"),A:x("F<Y?>?"),n:x("b5<Y?,Y?>?"),H:x("~")}})();(function constants(){C.Bq=new A.Gu("plugins.flutter.io/firebase_auth",D.bd,null)
C.m5m=A.aT("aRo")
C.EX=new B.QO(null,y.B)})();(function staticFields(){$.d5Y=A.C(y.N,A.a0("a7k"))
$.btS=A.C(y.N,A.a0("a25"))
$.btO=A.C(y.N,A.a0("aJl"))
$.cKg=A.C(y.N,A.a0("IQ<QO<LF>>"))
$.cKh=A.C(y.N,A.a0("IQ<QO<LF>>"))
$.cKi=A.C(y.N,A.a0("IQ<QO<LF>>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e9Z","cUx",()=>new A.Y())})()}
$__dart_deferred_initializers__["LtZwmFHw4VGepcIsRzfrpj7jGb8="] = $__dart_deferred_initializers__.current
