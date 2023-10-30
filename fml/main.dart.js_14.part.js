self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={b7g:function b7g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},Tp:function Tp(d){this.a=d},
caV(d,e,f,g,h){var w,v=new B.afF(d,$,$,$,$,$,$,$,$),u=e==null||f==null,t=g==null||h==null
if(u&&t)A.O($.be())
if(u){e=new E.cM(0,g.b)
f=new E.cM(0,h.b)}else if(t){w=d.a-1
g=new E.cM(w,e.b)
h=new E.cM(w,f.b)}v.b=e
v.c=f
v.d=g
v.e=h
v.f=Math.min(C.f.a_(e.a),C.f.a_(f.a))
v.r=Math.max(C.f.a_(g.a),C.f.a_(h.a))
v.w=Math.min(C.f.a_(e.b),C.f.a_(g.b))
v.x=Math.max(C.f.a_(f.b),C.f.a_(h.b))
return v},
cjg(d){var w,v,u,t,s,r,q,p=d.b
p===$&&A.d()
w=d.c
w===$&&A.d()
v=d.d
v===$&&A.d()
u=d.e
u===$&&A.d()
t=d.f
t===$&&A.d()
s=d.r
s===$&&A.d()
r=d.w
r===$&&A.d()
q=d.x
q===$&&A.d()
return new B.afF(d.a,p,w,v,u,t,s,r,q)},
d17(d,e){var w,v,u,t,s
if(d==null)return e
if(e==null)return d
w=d.a
v=d.b
v===$&&A.d()
u=d.c
u===$&&A.d()
t=e.d
t===$&&A.d()
s=e.e
s===$&&A.d()
return B.caV(w,v,u,t,s)},
afF:function afF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aC_:function aC_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=-1},
d3o(d,e){var w,v,u,t,s,r,q,p,o=new A.bM(""),n=d[1],m=new B.aKU()
for(w=d.length,v=C.ck,u=2;u<d[0];u=t){switch(n){case 900:u=B.aDj(d,u,o)
break
case 901:case 924:u=B.d33(n,d,v,u,o)
break
case 913:t=u+1
o.a+=A.bT(d[u])
u=t
break
case 902:u=B.aDi(d,u,o)
break
case 927:t=u+1
s=d[u]
if(s<0||s>=900)A.O($.c4())
if($.a5V.a===0)F.bb_()
r=$.a5V.i(0,s)
if(r==null)throw A.j($.c4())
s=r.b
q=$.c9w().i(0,s.toLowerCase())
s=q==null?A.aEl(s):q
if(s==null)s=null
s.toString
u=t
v=s
break
case 926:u+=2
break
case 925:++u
break
case 928:u=B.d3r(d,u,m)
break
case 923:case 922:throw A.j($.c4())
default:u=B.aDj(d,u-1,o)
break}if(u<w){t=u+1
n=d[u]}else throw A.j($.c4())}w=o.a
if(w.length===0&&m.b==null)throw A.j($.c4())
p=F.aDn(null,w.charCodeAt(0)==0?w:w,null,e,-1,-1,0)
p.z=m
return p},
d3r(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
if(e+2>d[0])throw A.j($.c4())
v=J.Gs(2,x.S)
for(u=0;u<2;++u,e=t){t=e+1
v[u]=d[e]}w=B.ckc(v,2)
if(J.aD(w)!==0)try{A.df(w,j)}catch(s){if(x.Y.b(A.H(s)))throw A.j($.c4())
else throw s}r=d.length
q=""
while(!0){if(!(e<d[0]&&e<r&&!J.n(d[e],922)&&!J.n(d[e],923)))break
q+=C.e.ft(J.at(d[e]),3,"0");++e}if(q.length===0)throw A.j($.c4())
f.b=q.charCodeAt(0)==0?q:q
p=J.n(d[e],923)?e+1:-1
for(;e<d[0];)switch(d[e]){case 923:++e
switch(d[e]){case 0:e=B.aDj(d,e+1,new A.bM(""))
break
case 3:e=B.aDj(d,e+1,new A.bM(""))
break
case 4:e=B.aDj(d,e+1,new A.bM(""))
break
case 1:o=new A.bM("")
e=B.aDi(d,e+1,o)
r=o.a
A.df(r.charCodeAt(0)==0?r:r,j)
break
case 2:n=new A.bM("")
e=B.aDi(d,e+1,n)
r=n.a
A.df(r.charCodeAt(0)==0?r:r,j)
break
case 6:m=new A.bM("")
e=B.aDi(d,e+1,m)
r=m.a
A.df(r.charCodeAt(0)==0?r:r,j)
break
case 5:l=new A.bM("")
e=B.aDi(d,e+1,l)
r=l.a
A.df(r.charCodeAt(0)==0?r:r,j)
break
default:throw A.j($.c4())}break
case 922:++e
f.c=!0
break
default:throw A.j($.c4())}if(p!==-1){k=e-p
C.b.cR(d,p,p+(f.c?k-1:k))}return e},
aDj(d,e,f){var w,v,u,t=x.S,s=A.aE((d[0]-e)*2,0,!1,t),r=A.aE((d[0]-e)*2,0,!1,t),q=0,p=!1
while(!0){if(!(e<d[0]&&!p))break
w=e+1
v=d[e]
if(v<900){s[q]=C.h.ag(v,30)
s[q+1]=C.h.a7(v,30)
q+=2
e=w}else switch(v){case 900:u=q+1
s[q]=900
q=u
e=w
break
case 901:case 924:case 902:case 928:case 923:case 922:e=w-1
p=!0
break
case 913:s[q]=913
e=w+1
r[q]=d[w];++q
break
default:e=w}}B.d3f(s,r,q,f)
return e},
d3f(d,e,f,g){var w,v,u,t,s
for(w=D.it,v=D.it,u=0;u<f;){t=d[u]
switch(w.a){case 0:if(t<26)s=65+t
else switch(t){case 26:s=32
break
case 27:w=D.c53
s=0
break
case 28:w=D.c54
s=0
break
case 29:v=w
w=D.EB
s=0
break
case 913:g.a+=A.bT(e[u])
s=0
break
case 900:w=D.it
s=0
break
default:s=0}break
case 1:if(t<26)s=97+t
else switch(t){case 26:s=32
break
case 27:v=w
w=D.m7M
s=0
break
case 28:w=D.c54
s=0
break
case 29:v=w
w=D.EB
s=0
break
case 913:g.a+=A.bT(e[u])
s=0
break
case 900:w=D.it
s=0
break
default:s=0}break
case 2:if(t<25)s=C.e.aR($.cU4().a,t)
else switch(t){case 25:w=D.m7K
s=0
break
case 26:s=32
break
case 27:w=D.c53
s=0
break
case 28:case 900:w=D.it
s=0
break
case 29:v=w
w=D.EB
s=0
break
case 913:g.a+=A.bT(e[u])
s=0
break
default:s=0}break
case 3:if(t<29)s=C.e.aR($.cgG().a,t)
else{switch(t){case 29:case 900:w=D.it
break
case 913:g.a+=A.bT(e[u])
break}s=0}break
case 4:if(t<26){s=65+t
w=v}else switch(t){case 26:w=v
s=32
break
case 900:w=D.it
s=0
break
default:w=v
s=0}break
case 5:if(t<29){s=C.e.aR($.cgG().a,t)
w=v}else{switch(t){case 29:case 900:w=D.it
break
case 913:g.a+=A.bT(e[u])
w=v
break
default:w=v}s=0}break
default:s=0}if(s!==0)g.a+=A.bT(s);++u}},
d33(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=A.a([],x.t)
switch(d){case 901:w=A.aE(6,0,!1,x.S)
v=g+1
u=e[g]
g=v
t=0
s=0
r=!1
while(!0){q=e[0]
if(!(g<q&&!r))break
p=t+1
w[t]=u
s=900*s+u
v=g+1
u=e[g]
switch(u){case 900:case 901:case 902:case 924:case 928:case 923:case 922:g=v-1
t=p
r=!0
break
default:if(p%5===0&&!0){for(o=0;o<6;++o)J.c2(k,C.h.nK(s,8*(5-o)))
t=0
s=0}else t=p
g=v
break}}if(g===q&&u<900){p=t+1
w[t]=u
t=p}for(n=0;n<t;++n)J.c2(k,w[n])
break
case 924:t=0
s=0
r=!1
while(!0){if(!(g<e[0]&&!r))break
v=g+1
m=e[g]
if(m<900){++t
s=900*s+m
g=v}else switch(m){case 900:case 901:case 902:case 924:case 928:case 923:case 922:g=v-1
r=!0
break
default:g=v}if(C.h.a7(t,5)===0&&t>0){for(o=0;o<6;++o)J.c2(k,C.h.nK(s,8*(5-o)))
t=0
s=0}}break}try{h.a+=A.l(f.eA(0,new Uint8Array(A.ed(k))))}catch(l){if(x.Y.b(A.H(l)))throw l
else throw l}return g},
aDi(d,e,f){var w,v,u,t=A.aE(15,0,!1,x.S),s=0,r=!1
while(!0){w=d[0]
if(!(e<w&&!r))break
v=e+1
u=d[e]
if(v===w)r=!0
if(u<900){t[s]=u;++s
e=v}else switch(u){case 900:case 901:case 924:case 928:case 923:case 922:e=v-1
r=!0
break
default:e=v}if((C.h.a7(s,15)===0||u===902||r)&&s>0){f.a+=B.ckc(t,s)
s=0}}return e},
ckc(d,e){var w,v,u=$.LR()
for(w=0;w<e;++w)u=u.a9(0,$.cU6()[e-w-1].aq(0,A.acC(d[w])))
v=u.k(0)
if(v[0]!=="1")throw A.j($.c4())
return C.e.c0(v,1)},
ZZ:function ZZ(d,e){this.a=d
this.b=e},
cki(d,e,f){if(!f.abt(f.e))if(f.abt(d)){f.e=d
e=0}else ++e
return e},
d3H(d,e){if(e==null)return!1
if(e.abt(e.e)&&e.c===d.c){d.e=e.e
return!0}return!1},
be1:function be1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0u:function a0u(d,e){this.a=d
this.b=e},
d3G(d,e){var w,v,u,t,s,r,q,p=d.b
p===$&&A.d()
w=d.c
w===$&&A.d()
v=d.d
v===$&&A.d()
u=d.e
u===$&&A.d()
t=d.f
t===$&&A.d()
s=d.r
s===$&&A.d()
r=d.w
r===$&&A.d()
q=d.x
q===$&&A.d()
return new B.a6N(e,new B.afF(d.a,p,w,v,u,t,s,r,q),A.aE(q-r+1,null,!1,x.w))},
a6N:function a6N(d,e,f){this.c=d
this.a=e
this.b=f},
bhK:function bhK(d){this.a=d},
buR:function buR(d){var _=this
_.d=_.c=_.b=_.a=$
_.e=d},
RQ(d,e){var w=new B.akY(d)
w.ai2(d,e)
return w},
akY:function akY(d){this.a=d
this.b=$},
bx0:function bx0(d,e){this.a=d
this.b=e},
d9v(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.a([],x._),i=B.d3M(d,e,!1)
for(w=i.b,v=w.length,u=x.P,t=i.a,s=x.G,r=x.K,q=0;q<w.length;w.length===v||(0,A.I)(w),++q){p=w[q]
o=p[4]
n=B.d9G(t,o,p[5],p[6],p[7],Math.min(Math.min(B.bx2(p[0],o),C.h.ag(B.bx2(p[6],p[2])*17,18)),Math.min(B.bx2(p[1],p[5]),C.h.ag(B.bx2(p[7],p[3])*17,18))),Math.max(Math.max(B.bx1(p[0],p[4]),C.h.ag(B.bx1(p[6],p[2])*17,18)),Math.max(B.bx1(p[1],p[5]),C.h.ag(B.bx1(p[7],p[3])*17,18))))
Date.now()
m=new E.a30(n.c,n.a,p,D.Fp)
o=n.e
o.toString
l=m.f=A.C(s,r)
l.m(0,H.nE,o)
k=u.a(n.z)
if(k!=null)l.m(0,D.lTA,k)
l.m(0,G.ec,"]L"+n.w)
j.push(m)}return j},
bx1(d,e){if(d==null||e==null)return 0
return C.f.a_(Math.abs(d.a-e.a))},
bx2(d,e){if(d==null||e==null)return 2147483647
return C.f.a_(Math.abs(d.a-e.a))},
a9f:function a9f(){},
aKU:function aKU(){this.b=null
this.c=!1},
Y2(d){var w,v,u
for(w=d.length,v=0,u=0;u<w;++u)v+=d[u]
return v},
d8r(d,e){var w,v,u,t,s=A.by("mid")
for(w=0,v=2786;w<=v;){u=s.b=w+C.f.a1((v-w)/2)
t=d[u]
if(t===e)return u
if(t<e)w=u+1
else v=u-1}return-1},
d9u(){var w,v,u,t,s,r
if($.cKR)return
$.cKR=!0
for(w=0;w<2787;++w){v=D.Ay[w]
u=v&1
for(t=0;t<8;++t,u=r){for(s=0;r=v&1,r===u;){++s
v=v>>>1}$.ch3()[w][8-t-1]=s/17}}},
d9t(d){var w=B.d9q(B.d9s(d))
if(B.cKS(w)===-1)w=-1
if(w!==-1)return w
return B.d9r(d)},
d9s(d){var w,v,u,t,s,r=B.Y2(d),q=A.aE(8,0,!1,x.S)
for(w=r/34,v=0,u=0,t=0;t<17;++t){s=u+d[v]
if(s<=w+t*r/17){++v
u=s}q[v]=q[v]+1}return q},
d9q(d){var w,v,u,t
for(w=0,v=0;v<8;++v)for(u=0;u<d[v];++u){t=C.h.a7(v,2)===0?1:0
w=(w<<1|t)>>>0}return w},
d9r(d){var w,v,u,t,s,r,q,p,o,n,m
B.d9u()
w=B.Y2(d)
v=A.aE(8,0,!1,x.i)
if(w>1)for(u=0;u<8;++u)v[u]=d[u]/w
for(t=17976931348623157e292,s=-1,r=0;q=$.ch3(),r<q.length;++r){p=q[r]
for(o=0,n=0;n<8;++n){m=p[n]-v[n]
o+=m*m
if(o>=t)break}if(o<t){s=D.Ay[r]
t=o}}return s},
d9G(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.caV(a2,a3,a4,a5,a6)
for(w=a5!=null,v=a3!=null,u=a0,t=u,s=t,r=!0;!0;a1=q,r=!1){if(v)s=B.cKV(a2,a1,a3,!0,a7,a8)
if(w)t=B.cKV(a2,a1,a5,!1,a7,a8)
u=B.d9F(s,t)
if(u==null)throw A.j($.be())
q=u.c
if(r)if(q!=null){p=q.w
p===$&&A.d()
o=a1.w
o===$&&A.d()
if(p>=o){p=q.x
p===$&&A.d()
o=a1.x
o===$&&A.d()
o=p>o
p=o}else p=!0}else p=!1
else p=!1
if(!p)break}u.c=a1
n=u.d+1
w=u.b
w[0]=s
w[n]=t
m=s!=null
for(v=x.w,l=1;l<=n;++l){k=m?l:n-l
if(w[k]!=null)continue
j=A.by("detectionResultColumn")
p=k===0
o=p||k===n
i=a1.x
h=a1.w
if(o){o=B.cjg(a1)
i===$&&A.d()
h===$&&A.d()
h=j.b=new B.a6N(p,o,A.aE(i-h+1,a0,!1,v))
p=h}else{p=B.cjg(a1)
i===$&&A.d()
h===$&&A.d()
h=j.b=new B.a0u(p,A.aE(i-h+1,a0,!1,v))
p=h}w[k]=p
p=a1.w
p===$&&A.d()
o=j.a
g=p
f=-1
while(!0){p=a1.x
p===$&&A.d()
if(!(g<=p))break
c$2:{e=B.d9E(u,k,g,m)
if(e>=0){p=a1.r
p===$&&A.d()
p=e>p}else p=!0
if(p){if(f===-1)break c$2
e=f}p=a1.f
p===$&&A.d()
i=a1.r
i===$&&A.d()
d=B.cKU(a2,p,i,m,e,g,a7,a8)
if(d!=null){p=j.b
if(p===j)A.O(A.hN(o))
i=p.b
p=p.a.w
p===$&&A.d()
i[g-p]=d
p=d.b-d.a
a7=Math.min(a7,p)
a8=Math.max(a8,p)
f=e}}++g}}return B.d9y(u)},
d9F(d,e){var w,v,u
if(d==null&&e==null)return null
w=B.d9A(d,e)
if(w==null)return null
v=B.d17(B.cKT(d),B.cKT(e))
u=w.a
return new B.be1(w,A.aE(u+2,null,!1,x.W),v,u)},
cKT(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
if(a6==null)return null
w=a6.aGL()
if(w==null)return null
v=B.d9C(w)
for(u=w.length,t=0,s=0;s<u;++s){r=w[s]
t+=v-r
if(r>0)break}q=a6.b
p=0
while(!0){o=t>0
if(!(o&&q[p]==null))break;--t;++p}for(p=u-1,n=0;p>=0;--p){u=w[p]
n+=v-u
if(u>0)break}p=q.length-1
while(!0){u=n>0
if(!(u&&q[p]==null))break;--n;--p}m=a6.a
l=a6.c
k=m.b
k===$&&A.d()
j=m.c
j===$&&A.d()
i=m.d
i===$&&A.d()
h=m.e
h===$&&A.d()
if(o){if(l)g=k
else g=i
f=C.f.a_(g.b)-t
if(f<0)f=0
e=new E.cM(g.a,f)
if(l){d=i
a0=e}else{d=e
a0=k}}else{d=i
a0=k}if(u){if(l)a1=j
else a1=h
a2=C.f.a_(a1.b)+n
u=m.a.b
if(a2>=u)a2=u-1
a3=new E.cM(a1.a,a2)
if(l){a4=h
a5=a3}else{a4=a3
a5=j}}else{a4=h
a5=j}return B.caV(m.a,a0,a5,d,a4)},
d9C(d){var w,v,u
for(w=d.length,v=-1,u=0;u<w;++u)v=Math.max(v,d[u])
return v},
d9A(d,e){var w,v=null,u=d==null?v:d.QO()
if(u==null)return e==null?v:e.QO()
w=e==null?v:e.QO()
if(w==null)return u
if(u.a!==w.a&&u.b!==w.b&&u.e!==w.e)return v
return u},
cKV(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=B.d3G(e,g)
for(w=f.b,v=m.b,u=m.a,t=f.a,s=0;s<2;++s){r=s===0?1:-1
q=C.f.a_(t)
p=C.f.a_(w)
while(!0){o=e.x
o===$&&A.d()
if(p<=o){o=e.w
o===$&&A.d()
o=p>=o}else o=!1
if(!o)break
n=B.cKU(d,0,d.a,g,q,p,h,i)
if(n!=null){o=u.w
o===$&&A.d()
v[p-o]=n
q=g?n.a:n.b}p+=r}}return m},
d9y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.d9x(d),j=k[0][1],i=j.nJ(),h=d.d,g=d.a,f=g.e
g=g.b
w=h*f-C.h.eW(2,g)
if(i.length===0){if(w<1||w>928)A.O($.be())
j.ag6(w)}else if(i[0]!==w)if(w>=1&&w<=928)j.ag6(w)
v=x.t
u=A.a([],v)
t=A.aE(f*h,0,!1,x.S)
s=A.a([],x.q)
r=A.a([],v)
for(q=0;q<f;++q)for(v=q*h,p=0;p<h;p=o){o=p+1
n=k[q][o].nJ()
m=v+p
l=n.length
if(l===0)u.push(m)
else if(l===1)t[m]=n[0]
else{r.push(m)
s.push(n)}}return B.d9z(g,t,u,r,s)},
d9z(d,e,f,g,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=g.length,h=A.aE(i,0,!1,x.S)
for(w=i-1,v=i===0,u=e.length,t=u<4,s=d+1,r=u===0,q=100;p=q-1,q>0;q=p){for(o=0;o<i;++o)e[g[o]]=a0[o][h[o]]
try{if(r)A.O($.c4())
n=C.h.eW(1,s)
m=f.length
if(m<=(n/2|0)+3)m=n>512
else m=!0
if(m)A.O($.LQ())
$.cV2().a9q(0,e,n,f)
if(t)A.O($.c4())
l=e[0]
if(l>u)A.O($.c4())
if(l===0)if(n<u)e[0]=u-n
else A.O($.c4())
k=B.d3o(e,C.h.k(d))
return k}catch(j){if(!(A.H(j) instanceof E.a00))throw j}if(v)throw A.j($.LQ())
for(o=0;o<i;++o){m=h[o]
if(m<a0[o].length-1){h[o]=m+1
break}else{h[o]=0
if(o===w)throw A.j($.LQ())}}}throw A.j($.LQ())},
d9x(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=d.a.e,e=J.Gs(f,x.f)
for(w=x.S,v=x.p,u=d.d+2,t="Length must be a non-negative integer: "+u,s=0;s<f;++s){if(u<0)A.O(A.aW(t,null))
r=A.a(new Array(u),v)
for(q=0;q<u;++q)r[q]=new B.Tp(A.C(w,w))
e[s]=r}for(w=d.aG8(),v=w.length,p=0,o=0;o<v;++o){n=w[o]
if(n!=null)for(t=n.b,m=t.length,l=0;l<m;++l){k=t[l]
if(k!=null){j=k.e
if(j>=0){if(j>=e.length)continue
i=e[j][p]
h=k.d
i=i.a
g=i.i(0,h)
i.m(0,h,(g==null?0:g)+1)}}}++p}return e},
cKW(d,e){return e>=0&&e<=d.d+1},
d9E(d,e,f,g){var w,v,u,t,s,r,q,p=g?1:-1,o=e-p
if(B.cKW(d,o)){w=d.b[o]
v=w.b
w=w.a.w
w===$&&A.d()
u=v[f-w]}else u=null
if(u!=null)return g?u.b:u.a
w=d.b
u=w[e].aeB(f)
if(u!=null)return g?u.a:u.b
if(B.cKW(d,o))u=w[o].aeB(f)
if(u!=null)return g?u.b:u.a
o=d.d+1
t=0
while(!0){e-=p
if(!(e>=0&&e<=o))break
for(v=w[e].b,s=v.length,r=0;r<s;++r){q=v[r]
if(q!=null){o=g?q.b:q.a
return o+p*t*(q.b-q.a)}}++t}o=d.c
if(g){o=o.f
o===$&&A.d()}else{o=o.r
o===$&&A.d()}return o},
cKU(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o
h=B.d9w(d,e,f,g,h,i)
w=B.d9D(d,e,f,g,h,i)
if(w==null)return null
v=B.Y2(w)
if(g)u=h+v
else{for(t=0;t<4;++t){s=w[t]
r=7-t
w[t]=w[r]
w[r]=s}q=h-v
u=h
h=q}if(!(j-2<=v&&v<=k+2))return null
p=B.d9t(w)
o=B.cKS(p)
if(o===-1)return null
r=B.d9B(p)
return new B.aC_(h,u,C.h.a7(r[0]-r[2]+r[4]-r[6]+9,9),o)},
d9D(d,e,f,g,h,i){var w,v=A.aE(8,0,!1,x.S),u=g?1:-1,t=g,s=h,r=0
while(!0){if(!((g?s<f:s>=e)&&r<8))break
if(d.cV(0,s,i)===t){v[r]=v[r]+1
s+=u}else{++r
t=!t}}if(r!==8)w=s===(g?f:e)&&r===7
else w=!0
if(w)return v
return null},
d9w(d,e,f,g,h,i){var w,v,u=g?-1:1
for(w=h,v=0;v<2;++v){while(!0){if(!((g?w>=e:w<f)&&g===d.cV(0,w,i)))break
if(Math.abs(h-w)>2)return h
w+=u}u=-u
g=!g}return w},
d9B(d){var w,v,u,t=A.aE(8,0,!1,x.S)
for(w=0,v=7;!0;){u=d&1
if(u!==w){--v
if(v<0)break
w=u}t[v]=t[v]+1
d=C.h.al(d,1)}return t},
d3M(d,e,f){var w=d.gpO(),v=B.ckk(!1,w),u=0
while(!0){if(!(v.length===0&&u<3))break
w=new A.afz(w.a,w.b,w.c,new Uint32Array(A.ed(C.dC.e6(w.d))))
if(u!==1)w.bFd()
else w.bFe()
v=B.ckk(!1,w);++u}return new B.bx0(w,v)},
ckk(d,e){var w,v,u,t,s,r,q,p=A.a([],x.X)
for(w=x.Z;v=e.b,0<v;){u=e.a
t=A.aE(8,null,!1,w)
B.ckj(t,B.ckm(e,v,u,0,0,D.lBa),D.eut)
s=t[4]
if(s!=null){r=C.f.a_(s.a)
q=C.f.a_(s.b)}else{q=0
r=0}B.ckj(t,B.ckm(e,v,u,q,r,D.lzB),D.lyE)
if(t[0]==null&&t[3]==null)break
p.push(t)
break}return p},
ckj(d,e,f){var w
for(w=0;w<4;++w)d[f[w]]=e[w]},
ckm(d,e,f,g,h,i){var w,v,u,t,s,r=A.aE(4,null,!1,x.Z),q=A.aE(i.length,0,!1,x.S)
while(!0){if(!(g<e)){w=!1
break}v=B.cbA(d,h,g,f,i,q)
if(v!=null){for(;g>0;v=u){--g
u=B.cbA(d,h,g,f,i,q)
if(u==null){++g
break}}r[0]=new E.cM(v[0],g)
r[1]=new E.cM(v[1],g)
w=!0
break}g+=5}t=g+1
if(w){u=A.a([C.f.a_(r[0].a),C.f.a_(r[1].a)],x.t)
for(s=0;t<e;++t){v=B.cbA(d,u[0],t,f,i,q)
if(v!=null&&Math.abs(u[0]-v[0])<5&&Math.abs(u[1]-v[1])<5){u=v
s=0}else if(s>25)break
else ++s}t-=s+1
r[2]=new E.cM(u[0],t)
r[3]=new E.cM(u[1],t)}if(t-g<10)C.b.iG(r,0,4,null)
return r},
cbA(d,e,f,g,h,i){var w,v,u,t,s,r,q,p
C.b.iG(i,0,i.length,0)
w=e
v=0
while(!0){if(d.cV(0,w,f))if(w>0){u=v+1
t=v<3
v=u}else t=!1
else t=!1
if(!t)break;--w}for(t=h.length-1,s=w,r=0,q=!1;s<g;++s)if(d.cV(0,s,f)!==q)i[r]=i[r]+1
else{if(r===t){if(B.ckn(i,h)<0.42)return A.a([w,s],x.t)
w+=i[0]+i[1]
A.Ji(i,0,i,2,r+1)
p=r-1
i[p]=0
i[r]=0
r=p}else ++r
i[r]=1
q=!q}if(r===t&&B.ckn(i,h)<0.42)return A.a([w,s-1],x.t)
return null},
ckn(d,e){var w,v,u,t,s,r,q,p,o,n,m=17976931348623157e292,l=d.length
for(w=0,v=0,u=0;u<l;++u){w+=d[u]
v+=e[u]}if(w<v)return m
t=w/v
s=0.8*t
for(r=0,q=0;q<l;++q){p=d[q]
o=e[q]*t
n=p>o?p-o:o-p
if(n>s)return m
r+=n}return r/w},
cKS(d){var w=B.d8r(D.Ay,d&262143)
if(w<0)return-1
return C.h.a7(D.lE0[w]-1,929)}},A,C,J,D,E,F,H,G
B=a.updateHolder(c[11],B)
A=c[0]
C=c[2]
J=c[1]
D=c[28]
E=c[18]
F=c[17]
H=c[25]
G=c[26]
B.b7g.prototype={}
B.Tp.prototype={
ag6(d){var w=this.a,v=w.i(0,d)
w.m(0,d,(v==null?0:v)+1)},
nJ(){var w,v,u,t,s=A.a([],x.t)
for(w=this.a,w=w.ghi(w),w=w.gap(w),v=-1;w.t();){u=w.gR(w)
t=u.b
if(t>v){C.b.V(s)
s.push(u.a)
v=t}else if(t===v)s.push(u.a)}return s}}
B.afF.prototype={}
B.aC_.prototype={
abt(d){return d!==-1&&this.c===C.h.a7(d,3)*3},
gj(d){return this.d},
k(d){return""+this.e+"|"+this.d}}
B.ZZ.prototype={
J(){return"_Mode."+this.b}}
B.be1.prototype={
aG8(){var w,v,u=this,t=u.b
u.air(t[0])
u.air(t[u.d+1])
w=928
do{v=u.aST()
if(v>0&&v<w){w=v
continue}else break}while(!0)
return t},
air(d){if(d!=null)x.r.a(d).bk2(this.a)},
aST(){var w,v,u,t,s,r,q,p,o,n=this
n.aSU()
w=n.aSV()+n.aSW()
if(w===0)return 0
for(v=n.d+1,u=n.b,t=1;t<v;++t){s=u[t].b
for(r=s.length,q=0;q<r;++q){p=s[q]
if(p==null)continue
o=p.e
if(!(o!==-1&&p.c===C.h.a7(o,3)*3))n.aSX(t,q,s)}}return w},
aSU(){var w,v,u,t,s,r,q,p,o=this.b,n=o[0]
if(n==null||o[this.d+1]==null)return
w=n.b
n=this.d
v=o[n+1].b
for(u=w.length,t=0;t<u;++t){s=w[t]
if(s!=null){r=v[t]
s=r!=null&&s.e===r.e}else s=!1
if(s)for(q=1;q<=n;++q){s=o[q].b
p=s[t]
if(p==null)continue
r=p.e=w[t].e
if(!(r!==-1&&p.c===C.h.a7(r,3)*3))s[t]=null}}},
aSW(){var w,v,u,t,s,r,q,p,o=this.b,n=this.d+1,m=o[n]
if(m==null)return 0
w=m.b
for(m=w.length,v=0,u=0;u<m;++u){t=w[u]
if(t==null)continue
s=t.e
r=n
q=0
while(!0){if(!(r>0&&q<2))break
p=o[r].b[u]
if(p!=null){q=B.cki(s,q,p)
t=p.e
if(!(t!==-1&&p.c===C.h.a7(t,3)*3))++v}--r}}return v},
aSV(){var w,v,u,t,s,r,q,p,o,n=this.b,m=n[0]
if(m==null)return 0
w=m.b
for(m=w.length,v=this.d+1,u=0,t=0;t<m;++t){s=w[t]
if(s==null)continue
r=s.e
q=0
p=1
while(!0){if(!(p<v&&q<2))break
o=n[p].b[t]
if(o!=null){q=B.cki(r,q,o)
s=o.e
if(!(s!==-1&&o.c===C.h.a7(s,3)*3))++u}++p}}return u},
aSX(d,e,f){var w,v,u,t,s=f[e],r=this.b,q=r[d-1].b
r=r[d+1]
w=r!=null?r.b:q
v=A.aE(14,null,!1,x.w)
v[2]=q[e]
v[3]=w[e]
if(e>0){r=e-1
v[0]=f[r]
v[4]=q[r]
v[5]=w[r]}if(e>1){r=e-2
v[8]=f[r]
v[10]=q[r]
v[11]=w[r]}r=f.length
if(e<r-1){u=e+1
v[1]=f[u]
v[6]=q[u]
v[7]=w[u]}if(e<r-2){r=e+2
v[9]=f[r]
v[12]=q[r]
v[13]=w[r]}for(t=0;t<14;++t)if(B.d3H(s,v[t]))return},
k(d){var w,v,u,t,s,r,q,p=this.b,o=p[0]
for(w=(o==null?p[this.d+1]:o).b.length,v=this.d+2,u=0,t="";u<w;++u){t+="CW "+C.e.DO(C.h.k(u),3)+":"
for(s=0;s<v;++s){r=p[s]
if(r==null){t+="    |   "
continue}q=r.b[u]
if(q==null){t+="    |   "
continue}t+=" "+C.e.DO(C.h.k(q.e),3)+"|"+C.e.DO(C.h.k(q.d),3)}t+="\n"}return t.charCodeAt(0)==0?t:t}}
B.a0u.prototype={
aeB(d){var w,v,u,t,s=this.b,r=this.a.w
r===$&&A.d()
r=d-r
w=s[r]
if(w!=null)return w
for(w=s.length,v=1;v<5;++v){u=r-v
if(u>=0){t=s[u]
if(t!=null)return t}u=r+v
if(u<w){t=s[u]
if(t!=null)return t}}return null},
k(d){var w,v,u,t,s,r,q
for(w=this.b,v=w.length,u=0,t=0,s="";t<v;++t){r=w[t]
if(r==null){q=u+1
s+=C.e.DO(C.h.k(u),3)+":    |   \n"
u=q
continue}q=u+1
s+=C.e.DO(C.h.k(u),3)+": "+C.e.DO(C.h.k(r.e),3)+"|"+C.e.DO(C.h.k(r.d),3)+"\n"
u=q}return s.charCodeAt(0)==0?s:s}}
B.a6N.prototype={
bfe(){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
if(t!=null)t.e=C.h.ag(t.d,30)*3+C.h.ag(t.c,3)}},
bk2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.bfe()
w=f.b
f.apW(w,d)
v=f.c
u=f.a
if(v){t=u.b
t===$&&A.d()
s=t}else{t=u.d
t===$&&A.d()
s=t}if(v){v=u.c
v===$&&A.d()
r=v}else{v=u.e
v===$&&A.d()
r=v}v=C.f.a_(s.b)
u=u.w
u===$&&A.d()
q=v-u
p=C.f.a_(r.b)-u
for(v=d.e,o=q,n=-1,m=1,l=0;o<p;++o){u=w[o]
if(u==null)continue
k=u.e
j=k-n
if(j===0)++l
else if(j===1){m=Math.max(m,l)
n=k
l=1}else if(j<0||k>=v||j>o)w[o]=null
else{i=m>2?(m-2)*j:j
h=i>=o
g=1
while(!0){if(!(g<=i&&!h))break
h=w[o-g]!=null;++g}if(h)w[o]=null
else{n=k
l=1}}}},
aGL(){var w,v,u,t,s,r,q,p=this.QO()
if(p==null)return null
this.aSP(p)
w=p.e
v=A.aE(w,0,!1,x.S)
for(u=this.b,t=u.length,s=0;s<t;++s){r=u[s]
if(r!=null){q=r.e
if(q>=w)continue
v[q]=v[q]+1}}return v},
aSP(d){var w,v,u,t,s,r,q,p,o,n,m,l=this.c,k=this.a
if(l){w=k.b
w===$&&A.d()
v=w}else{w=k.d
w===$&&A.d()
v=w}if(l){l=k.c
l===$&&A.d()
u=l}else{l=k.e
l===$&&A.d()
u=l}l=C.f.a_(v.b)
k=k.w
k===$&&A.d()
t=l-k
s=C.f.a_(u.b)-k
for(l=d.e,k=this.b,r=t,q=-1,p=1,o=0;r<s;++r){w=k[r]
if(w==null)continue
n=w.e=C.h.ag(w.d,30)*3+C.h.ag(w.c,3)
m=n-q
if(m===0)++o
else if(m===1){p=Math.max(p,o)
q=n
o=1}else if(n>=l)k[r]=null
else{q=n
o=1}}},
QO(){var w,v,u,t,s,r,q,p,o,n,m=this.b,l=x.S,k=A.C(l,l),j=new B.Tp(k),i=A.C(l,l),h=new B.Tp(i),g=A.C(l,l),f=new B.Tp(g)
l=A.C(l,l)
w=new B.Tp(l)
for(v=m.length,u=!this.c,t=0;t<v;++t){s=m[t]
if(s==null)continue
r=s.d
q=s.e=C.h.ag(r,30)*3+C.h.ag(s.c,3)
p=C.h.a7(r,30)
switch(C.h.a7(u?q+2:q,3)){case 0:r=p*3+1
o=i.i(0,r)
i.m(0,r,(o==null?0:o)+1)
break
case 1:r=C.h.ag(p,3)
o=l.i(0,r)
l.m(0,r,(o==null?0:o)+1)
r=C.h.a7(p,3)
o=g.i(0,r)
g.m(0,r,(o==null?0:o)+1)
break
case 2:r=p+1
o=k.i(0,r)
k.m(0,r,(o==null?0:o)+1)
break}}if(j.nJ().length===0||h.nJ().length===0||f.nJ().length===0||w.nJ().length===0||j.nJ()[0]<1||h.nJ()[0]+f.nJ()[0]<3||h.nJ()[0]+f.nJ()[0]>90)return null
l=j.nJ()[0]
k=h.nJ()[0]
i=f.nJ()[0]
n=new B.b7g(l,w.nJ()[0],k,i,k+i)
this.apW(m,n)
return n},
apW(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=d.length,v=!this.c,u=e.e,t=e.a,s=e.b,r=e.d,q=e.c,p=0;p<w;++p){o=d[p]
if(o==null)continue
n=C.h.a7(o.d,30)
m=o.e
if(m>u){d[p]=null
continue}switch(C.h.a7(v?m+2:m,3)){case 0:if(n*3+1!==q)d[p]=null
break
case 1:if(C.h.ag(n,3)!==s||C.h.a7(n,3)!==r)d[p]=null
break
case 2:if(n+1!==t)d[p]=null
break}}},
k(d){return"IsLeft: "+this.c+"\n"+this.aLO(0)}}
B.bhK.prototype={
a9q(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.a,a2=B.RQ(a1,a5),a3=A.aE(a6,0,!1,x.S)
for(w=a6,v=!1;w>0;--w){u=a1.a
u===$&&A.d()
t=a2.zw(u[w])
a3[a6-w]=t
if(t!==0)v=!0}if(!v)return 0
u=a1.d
u===$&&A.d()
if(a7!=null)for(s=a7.length,r=a5.length-1,q=x.t,p=u,o=0;o<a7.length;a7.length===s||(0,A.I)(a7),++o){n=a7[o]
u=a1.a
u===$&&A.d()
m=u[r-n]
u=a1.e
l=new B.akY(a1)
l.ai2(a1,A.a([C.h.a7(u-m,u),1],q))
p=p.aAp(l)}k=B.RQ(a1,a3)
j=a0.aYL(a1.MR(a6,1),k,a6)
i=j[0]
h=j[1]
g=a0.aYJ(i)
f=a0.aYK(h,i,g)
for(u=g.length,s=a5.length-1,w=0;w<u;++w){r=g[w]
if(r===0)A.O(A.aW(null,null))
q=a1.b
q===$&&A.d()
e=s-q[r]
if(e<0)throw A.j($.LQ())
r=a5[e]
q=f[w]
d=a1.e
a5[e]=C.h.a7(d+r-q,d)}return u},
aYL(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=d.b
f===$&&A.d()
f=f.length
w=e.b
w===$&&A.d()
if(f-1<w.length-1){v=e
e=d
d=v}f=this.a
w=f.c
w===$&&A.d()
u=f.d
u===$&&A.d()
t=a0/2
s=u
r=w
q=e
p=d
while(!0){w=q.b
w===$&&A.d()
if(!(w.length-1>=t))break
if(J.n(w[0],0))throw A.j($.LQ())
o=f.c
w=q.b
u=w.length-1
u=w[u-u]
if(u===0)A.O(A.aW(null,null))
w=f.a
w===$&&A.d()
n=f.e
m=f.b
m===$&&A.d()
l=w[n-m[u]-1]
k=p
while(!0){w=k.b
w===$&&A.d()
if(!(w.length-1>=q.b.length-1&&!J.n(w[0],0)))break
w=k.b
u=w.length-1
j=u-(q.b.length-1)
i=f.mW(0,w[u-u],l)
o=o.A(0,f.MR(j,i))
k=k.ta(q.abT(j,i))}w=o.aAp(s).ta(r).aAt()
r=s
s=w
p=q
q=k}h=s.Ep(0)
if(h===0)throw A.j($.LQ())
g=f.abg(0,h)
return A.a([s.ha(0,g),q.ha(0,g)],x.V)},
aYJ(d){var w,v,u,t,s,r,q=d.b
q===$&&A.d()
q=q.length
w=A.a([],x.t)
for(v=this.a,u=v.e,t=1;t<u;++t)if(d.zw(t)===0){if(t===0)A.O(A.aW(null,null))
s=v.a
s===$&&A.d()
r=v.b
r===$&&A.d()
w.push(s[u-r[t]-1])}if(w.length!==q-1)throw A.j($.LQ())
return w},
aYK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.b
j===$&&A.d()
w=j.length-1
if(w<1)return A.a([0],x.t)
v=A.aE(w,0,!1,x.S)
for(j=this.a,u=1;u<=w;++u){t=e.b
v[w-u]=j.mW(0,u,t[t.length-1-u])}s=B.RQ(j,v)
r=f.length
q=A.a([],x.t)
for(u=0;u<r;++u){t=f[u]
if(t===0)A.O(A.aW(k,k))
p=j.a
p===$&&A.d()
o=j.e
n=j.b
n===$&&A.d()
m=p[o-n[t]-1]
l=C.h.a7(o-d.zw(m),o)
t=s.zw(m)
if(t===0)A.O(A.aW(k,k))
q.push(j.mW(0,l,j.a[o-j.b[t]-1]))}return q}}
B.buR.prototype={
aRB(d,e){var w,v,u,t=this,s=t.e,r=x.S
t.a=A.aE(s,0,!1,r)
t.b=A.aE(s,0,!1,r)
for(r=t.a,w=1,v=0;v<s;++v){r[v]=w
w=C.h.a7(w*e,s)}for(--s,u=t.b,v=0;v<s;++v)u[r[v]]=v
s=x.t
t.c=B.RQ(t,A.a([0],s))
t.d=B.RQ(t,A.a([1],s))},
MR(d,e){var w,v
if(d<0)throw A.j(A.aW(null,null))
if(e===0){w=this.c
w===$&&A.d()
return w}v=A.aE(d+1,0,!1,x.S)
v[0]=e
return B.RQ(this,v)},
abg(d,e){var w,v
if(e===0)throw A.j(A.aW(null,null))
w=this.a
w===$&&A.d()
v=this.b
v===$&&A.d()
return w[this.e-v[e]-1]},
mW(d,e,f){var w,v
if(e===0||f===0)return 0
w=this.a
w===$&&A.d()
v=this.b
v===$&&A.d()
return w[C.h.a7(v[e]+v[f],this.e-1)]}}
B.akY.prototype={
ai2(d,e){var w,v,u=e.length
if(u===0)throw A.j(A.aW(null,null))
if(u>1&&J.n(e[0],0)){w=1
while(!0){if(!(w<u&&J.n(e[w],0)))break;++w}if(w===u)this.b=A.a([],x.t)
else{u-=w
v=A.aE(u,0,!1,x.S)
this.b=v
A.Ji(v,0,e,w,w+u)}}else this.b=e},
Ep(d){var w=this.b
w===$&&A.d()
return w[w.length-1-d]},
zw(d){var w,v,u,t,s,r,q,p=this
if(d===0)return p.Ep(0)
if(d===1){w=p.b
w===$&&A.d()
v=w.length
u=p.a.e
t=0
s=0
for(;s<v;++s)t=C.h.a7(t+w[s],u)
return t}w=p.b
w===$&&A.d()
t=w[0]
r=w.length
for(w=p.a,v=w.e,q=1;q<r;++q)t=C.h.a7(w.mW(0,d,t)+p.b[q],v)
return t},
A(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a
if(n!==e.a)throw A.j(A.aW(y.a,null))
w=o.b
w===$&&A.d()
if(J.n(w[0],0))return e
w=e.b
w===$&&A.d()
if(J.n(w[0],0))return o
v=o.b
u=e.b
if(!(v.length>u.length)){t=v
v=u
u=t}s=A.aE(v.length,0,!1,x.S)
r=v.length-u.length
A.Ji(s,0,v,0,r)
for(w=v.length,q=n.e,p=r;p<w;++p)s[p]=C.h.a7(u[p-r]+v[p],q)
return B.RQ(n,s)},
ta(d){var w
if(this.a!==d.a)throw A.j(A.aW(y.a,null))
w=d.b
w===$&&A.d()
if(J.n(w[0],0))return this
return this.A(0,d.aAt())},
aAp(d){var w,v,u,t,s,r,q,p,o,n,m=this.a
if(m!==d.a)throw A.j(A.aW(y.a,null))
w=this.b
w===$&&A.d()
if(!J.n(w[0],0)){w=d.b
w===$&&A.d()
w=J.n(w[0],0)}else w=!0
if(w){m=m.c
m===$&&A.d()
return m}w=this.b
v=w.length
u=d.b
u===$&&A.d()
t=u.length
s=A.aE(v+t-1,0,!1,x.S)
for(r=m.e,q=0;q<v;++q){p=w[q]
for(o=0;o<t;++o){n=q+o
s[n]=C.h.a7(s[n]+m.mW(0,p,u[o]),r)}}return B.RQ(m,s)},
aAt(){var w,v,u,t,s=this.b
s===$&&A.d()
w=s.length
v=A.a([],x.t)
for(s=this.a,u=s.e,t=0;t<w;++t)v.push(C.h.a7(u-this.b[t],u))
return B.RQ(s,v)},
ha(d,e){var w,v,u,t,s=this
if(e===0){w=s.a.c
w===$&&A.d()
return w}if(e===1)return s
w=s.b
w===$&&A.d()
v=w.length
u=A.a([],x.t)
for(w=s.a,t=0;t<v;++t)u.push(w.mW(0,s.b[t],e))
return B.RQ(w,u)},
abT(d,e){var w,v,u,t,s=this
if(d<0)throw A.j(A.aW(null,null))
if(e===0){w=s.a.c
w===$&&A.d()
return w}w=s.b
w===$&&A.d()
v=w.length
u=A.aE(v+d,0,!1,x.S)
for(w=s.a,t=0;t<v;++t)u[t]=w.mW(0,s.b[t],e)
return B.RQ(w,u)},
k(d){var w,v,u,t,s=new A.bM(""),r=this.b
r===$&&A.d()
w=r.length-1
for(;w>=0;--w){v=r[r.length-1-w]
if(v!==0){if(v<0){u=s.a+=" - "
v=-v}else{u=s.a
if(u.length>0){u+=" + "
s.a=u}}t=w!==0
if(!t||v!==1)u=s.a=u+v
if(t)if(w===1)s.a=u+"x"
else{u+="x^"
s.a=u
s.a=u+w}}}r=s.a
return r.charCodeAt(0)==0?r:r}}
B.bx0.prototype={}
B.a9f.prototype={
kL(d,e,f){var w=B.d9v(e,f,!1)
if(w.length===0)throw A.j($.be())
return w[0]},
$ihk:1}
B.aKU.prototype={}
var z=a.updateTypes([]);(function aliases(){var w=B.a0u.prototype
w.aLO=w.k})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.Y,[B.b7g,B.Tp,B.afF,B.aC_,B.be1,B.a0u,B.bhK,B.buR,B.akY,B.bx0,B.a9f,B.aKU])
v(B.ZZ,A.ZQ)
v(B.a6N,B.a0u)})()
A.a4U(b.typeUniverse,JSON.parse('{"a6N":{"a0u":[]},"a9f":{"hk":[]}}'))
var y={a:"ModulusPolys do not have same ModulusGF field"}
var x=(function rtii(){var w=A.a0
return{r:w("a6N"),Y:w("H8"),p:w("B<Tp>"),q:w("B<F<D>>"),X:w("B<F<cM?>>"),V:w("B<akY>"),_:w("B<a30>"),t:w("B<D>"),f:w("F<Tp>"),K:w("Y"),G:w("K_"),i:w("a7"),S:w("D"),w:w("aC_?"),W:w("a0u?"),P:w("aKU?"),Z:w("cM?")}})();(function constants(){var w=a.makeConstList
D.Fp=new E.HQ(10,"PDF_417")
D.eut=A.a(w([0,4,1,5]),x.t)
D.lyE=A.a(w([6,2,7,3]),x.t)
D.lzB=A.a(w([7,1,1,3,1,1,1,2,1]),x.t)
D.lBa=A.a(w([8,1,1,1,1,1,1,3]),x.t)
D.Ay=A.a(w([66142,66170,66206,66236,66290,66292,66350,66382,66396,66454,66470,66476,66594,66600,66614,66626,66628,66632,66640,66654,66662,66668,66682,66690,66718,66720,66748,66758,66776,66798,66802,66804,66820,66824,66832,66846,66848,66876,66880,66936,66950,66956,66968,66992,67006,67022,67036,67042,67044,67048,67062,67118,67150,67164,67214,67228,67256,67294,67322,67350,67366,67372,67398,67404,67416,67438,67474,67476,67490,67492,67496,67510,67618,67624,67650,67656,67664,67678,67686,67692,67706,67714,67716,67728,67742,67744,67772,67782,67788,67800,67822,67826,67828,67842,67848,67870,67872,67900,67904,67960,67974,67992,68016,68030,68046,68060,68066,68068,68072,68086,68104,68112,68126,68128,68156,68160,68216,68336,68358,68364,68376,68400,68414,68448,68476,68494,68508,68536,68546,68548,68552,68560,68574,68582,68588,68654,68686,68700,68706,68708,68712,68726,68750,68764,68792,68802,68804,68808,68816,68830,68838,68844,68858,68878,68892,68920,68976,68990,68994,68996,69e3,69008,69022,69024,69052,69062,69068,69080,69102,69106,69108,69142,69158,69164,69190,69208,69230,69254,69260,69272,69296,69310,69326,69340,69386,69394,69396,69410,69416,69430,69442,69444,69448,69456,69470,69478,69484,69554,69556,69666,69672,69698,69704,69712,69726,69754,69762,69764,69776,69790,69792,69820,69830,69836,69848,69870,69874,69876,69890,69918,69920,69948,69952,70008,70022,70040,70064,70078,70094,70108,70114,70116,70120,70134,70152,70174,70176,70264,70384,70412,70448,70462,70496,70524,70542,70556,70584,70594,70600,70608,70622,70630,70636,70664,70672,70686,70688,70716,70720,70776,70896,71136,71180,71192,71216,71230,71264,71292,71360,71416,71452,71480,71536,71550,71554,71556,71560,71568,71582,71584,71612,71622,71628,71640,71662,71726,71732,71758,71772,71778,71780,71784,71798,71822,71836,71864,71874,71880,71888,71902,71910,71916,71930,71950,71964,71992,72048,72062,72066,72068,72080,72094,72096,72124,72134,72140,72152,72174,72178,72180,72206,72220,72248,72304,72318,72416,72444,72456,72464,72478,72480,72508,72512,72568,72588,72600,72624,72638,72654,72668,72674,72676,72680,72694,72726,72742,72748,72774,72780,72792,72814,72838,72856,72880,72894,72910,72924,72930,72932,72936,72950,72966,72972,72984,73008,73022,73056,73084,73102,73116,73144,73156,73160,73168,73182,73190,73196,73210,73226,73234,73236,73250,73252,73256,73270,73282,73284,73296,73310,73318,73324,73346,73348,73352,73360,73374,73376,73404,73414,73420,73432,73454,73498,73518,73522,73524,73550,73564,73570,73572,73576,73590,73800,73822,73858,73860,73872,73886,73888,73916,73944,73970,73972,73992,74014,74016,74044,74048,74104,74118,74136,74160,74174,74210,74212,74216,74230,74244,74256,74270,74272,74360,74480,74502,74508,74544,74558,74592,74620,74638,74652,74680,74690,74696,74704,74726,74732,74782,74784,74812,74992,75232,75288,75326,75360,75388,75456,75512,75576,75632,75646,75650,75652,75664,75678,75680,75708,75718,75724,75736,75758,75808,75836,75840,75896,76016,76256,76736,76824,76848,76862,76896,76924,76992,77048,77296,77340,77368,77424,77438,77536,77564,77572,77576,77584,77600,77628,77632,77688,77702,77708,77720,77744,77758,77774,77788,77870,77902,77916,77922,77928,77966,77980,78008,78018,78024,78032,78046,78060,78074,78094,78136,78192,78206,78210,78212,78224,78238,78240,78268,78278,78284,78296,78322,78324,78350,78364,78448,78462,78560,78588,78600,78622,78624,78652,78656,78712,78726,78744,78768,78782,78798,78812,78818,78820,78824,78838,78862,78876,78904,78960,78974,79072,79100,79296,79352,79368,79376,79390,79392,79420,79424,79480,79600,79628,79640,79664,79678,79712,79740,79772,79800,79810,79812,79816,79824,79838,79846,79852,79894,79910,79916,79942,79948,79960,79982,79988,80006,80024,80048,80062,80078,80092,80098,80100,80104,80134,80140,80176,80190,80224,80252,80270,80284,80312,80328,80336,80350,80358,80364,80378,80390,80396,80408,80432,80446,80480,80508,80576,80632,80654,80668,80696,80752,80766,80776,80784,80798,80800,80828,80844,80856,80878,80882,80884,80914,80916,80930,80932,80936,80950,80962,80968,80976,80990,80998,81004,81026,81028,81040,81054,81056,81084,81094,81100,81112,81134,81154,81156,81160,81168,81182,81184,81212,81216,81272,81286,81292,81304,81328,81342,81358,81372,81380,81384,81398,81434,81454,81458,81460,81486,81500,81506,81508,81512,81526,81550,81564,81592,81602,81604,81608,81616,81630,81638,81644,81702,81708,81722,81734,81740,81752,81774,81778,81780,82050,82078,82080,82108,82180,82184,82192,82206,82208,82236,82240,82296,82316,82328,82352,82366,82402,82404,82408,82440,82448,82462,82464,82492,82496,82552,82672,82694,82700,82712,82736,82750,82784,82812,82830,82882,82884,82888,82896,82918,82924,82952,82960,82974,82976,83004,83008,83064,83184,83424,83468,83480,83504,83518,83552,83580,83648,83704,83740,83768,83824,83838,83842,83844,83848,83856,83872,83900,83910,83916,83928,83950,83984,84e3,84028,84032,84088,84208,84448,84928,85040,85054,85088,85116,85184,85240,85488,85560,85616,85630,85728,85756,85764,85768,85776,85790,85792,85820,85824,85880,85894,85900,85912,85936,85966,85980,86048,86080,86136,86256,86496,86976,88160,88188,88256,88312,88560,89056,89200,89214,89312,89340,89536,89592,89608,89616,89632,89664,89720,89840,89868,89880,89904,89952,89980,89998,90012,90040,90190,90204,90254,90268,90296,90306,90308,90312,90334,90382,90396,90424,90480,90494,90500,90504,90512,90526,90528,90556,90566,90572,90584,90610,90612,90638,90652,90680,90736,90750,90848,90876,90884,90888,90896,90910,90912,90940,90944,91e3,91014,91020,91032,91056,91070,91086,91100,91106,91108,91112,91126,91150,91164,91192,91248,91262,91360,91388,91584,91640,91664,91678,91680,91708,91712,91768,91888,91928,91952,91966,92e3,92028,92046,92060,92088,92098,92100,92104,92112,92126,92134,92140,92188,92216,92272,92384,92412,92608,92664,93168,93200,93214,93216,93244,93248,93304,93424,93664,93720,93744,93758,93792,93820,93888,93944,93980,94008,94064,94078,94084,94088,94096,94110,94112,94140,94150,94156,94168,94246,94252,94278,94284,94296,94318,94342,94348,94360,94384,94398,94414,94428,94440,94470,94476,94488,94512,94526,94560,94588,94606,94620,94648,94658,94660,94664,94672,94686,94694,94700,94714,94726,94732,94744,94768,94782,94816,94844,94912,94968,94990,95004,95032,95088,95102,95112,95120,95134,95136,95164,95180,95192,95214,95218,95220,95244,95256,95280,95294,95328,95356,95424,95480,95728,95758,95772,95800,95856,95870,95968,95996,96008,96016,96030,96032,96060,96064,96120,96152,96176,96190,96220,96226,96228,96232,96290,96292,96296,96310,96322,96324,96328,96336,96350,96358,96364,96386,96388,96392,96400,96414,96416,96444,96454,96460,96472,96494,96498,96500,96514,96516,96520,96528,96542,96544,96572,96576,96632,96646,96652,96664,96688,96702,96718,96732,96738,96740,96744,96758,96772,96776,96784,96798,96800,96828,96832,96888,97008,97030,97036,97048,97072,97086,97120,97148,97166,97180,97208,97220,97224,97232,97246,97254,97260,97326,97330,97332,97358,97372,97378,97380,97384,97398,97422,97436,97464,97474,97476,97480,97488,97502,97510,97516,97550,97564,97592,97648,97666,97668,97672,97680,97694,97696,97724,97734,97740,97752,97774,97830,97836,97850,97862,97868,97880,97902,97906,97908,97926,97932,97944,97968,97998,98012,98018,98020,98024,98038,98618,98674,98676,98838,98854,98874,98892,98904,98926,98930,98932,98968,99006,99042,99044,99048,99062,99166,99194,99246,99286,99350,99366,99372,99386,99398,99416,99438,99442,99444,99462,99504,99518,99534,99548,99554,99556,99560,99574,99590,99596,99608,99632,99646,99680,99708,99726,99740,99768,99778,99780,99784,99792,99806,99814,99820,99834,99858,99860,99874,99880,99894,99906,99920,99934,99962,99970,99972,99976,99984,99998,1e5,100028,100038,100044,100056,100078,100082,100084,100142,100174,100188,100246,100262,100268,100306,100308,100390,100396,100410,100422,100428,100440,100462,100466,100468,100486,100504,100528,100542,100558,100572,100578,100580,100584,100598,100620,100656,100670,100704,100732,100750,100792,100802,100808,100816,100830,100838,100844,100858,100888,100912,100926,100960,100988,101056,101112,101148,101176,101232,101246,101250,101252,101256,101264,101278,101280,101308,101318,101324,101336,101358,101362,101364,101410,101412,101416,101430,101442,101448,101456,101470,101478,101498,101506,101508,101520,101534,101536,101564,101580,101618,101620,101636,101640,101648,101662,101664,101692,101696,101752,101766,101784,101838,101858,101860,101864,101934,101938,101940,101966,101980,101986,101988,101992,102030,102044,102072,102082,102084,102088,102096,102138,102166,102182,102188,102214,102220,102232,102254,102282,102290,102292,102306,102308,102312,102326,102444,102458,102470,102476,102488,102514,102516,102534,102552,102576,102590,102606,102620,102626,102632,102646,102662,102668,102704,102718,102752,102780,102798,102812,102840,102850,102856,102864,102878,102886,102892,102906,102936,102974,103008,103036,103104,103160,103224,103280,103294,103298,103300,103312,103326,103328,103356,103366,103372,103384,103406,103410,103412,103472,103486,103520,103548,103616,103672,103920,103992,104048,104062,104160,104188,104194,104196,104200,104208,104224,104252,104256,104312,104326,104332,104344,104368,104382,104398,104412,104418,104420,104424,104482,104484,104514,104520,104528,104542,104550,104570,104578,104580,104592,104606,104608,104636,104652,104690,104692,104706,104712,104734,104736,104764,104768,104824,104838,104856,104910,104930,104932,104936,104968,104976,104990,104992,105020,105024,105080,105200,105240,105278,105312,105372,105410,105412,105416,105424,105446,105518,105524,105550,105564,105570,105572,105576,105614,105628,105656,105666,105672,105680,105702,105722,105742,105756,105784,105840,105854,105858,105860,105864,105872,105888,105932,105970,105972,106006,106022,106028,106054,106060,106072,106100,106118,106124,106136,106160,106174,106190,106210,106212,106216,106250,106258,106260,106274,106276,106280,106306,106308,106312,106320,106334,106348,106394,106414,106418,106420,106566,106572,106610,106612,106630,106636,106648,106672,106686,106722,106724,106728,106742,106758,106764,106776,106800,106814,106848,106876,106894,106908,106936,106946,106948,106952,106960,106974,106982,106988,107032,107056,107070,107104,107132,107200,107256,107292,107320,107376,107390,107394,107396,107400,107408,107422,107424,107452,107462,107468,107480,107502,107506,107508,107544,107568,107582,107616,107644,107712,107768,108016,108060,108088,108144,108158,108256,108284,108290,108292,108296,108304,108318,108320,108348,108352,108408,108422,108428,108440,108464,108478,108494,108508,108514,108516,108520,108592,108640,108668,108736,108792,109040,109536,109680,109694,109792,109820,110016,110072,110084,110088,110096,110112,110140,110144,110200,110320,110342,110348,110360,110384,110398,110432,110460,110478,110492,110520,110532,110536,110544,110558,110658,110686,110714,110722,110724,110728,110736,110750,110752,110780,110796,110834,110836,110850,110852,110856,110864,110878,110880,110908,110912,110968,110982,111e3,111054,111074,111076,111080,111108,111112,111120,111134,111136,111164,111168,111224,111344,111372,111422,111456,111516,111554,111556,111560,111568,111590,111632,111646,111648,111676,111680,111736,111856,112096,112152,112224,112252,112320,112440,112514,112516,112520,112528,112542,112544,112588,112686,112718,112732,112782,112796,112824,112834,112836,112840,112848,112870,112890,112910,112924,112952,113008,113022,113026,113028,113032,113040,113054,113056,113100,113138,113140,113166,113180,113208,113264,113278,113376,113404,113416,113424,113440,113468,113472,113560,113614,113634,113636,113640,113686,113702,113708,113734,113740,113752,113778,113780,113798,113804,113816,113840,113854,113870,113890,113892,113896,113926,113932,113944,113968,113982,114016,114044,114076,114114,114116,114120,114128,114150,114170,114194,114196,114210,114212,114216,114242,114244,114248,114256,114270,114278,114306,114308,114312,114320,114334,114336,114364,114380,114420,114458,114478,114482,114484,114510,114524,114530,114532,114536,114842,114866,114868,114970,114994,114996,115042,115044,115048,115062,115130,115226,115250,115252,115278,115292,115298,115300,115304,115318,115342,115394,115396,115400,115408,115422,115430,115436,115450,115478,115494,115514,115526,115532,115570,115572,115738,115758,115762,115764,115790,115804,115810,115812,115816,115830,115854,115868,115896,115906,115912,115920,115934,115942,115948,115962,115996,116024,116080,116094,116098,116100,116104,116112,116126,116128,116156,116166,116172,116184,116206,116210,116212,116246,116262,116268,116282,116294,116300,116312,116334,116338,116340,116358,116364,116376,116400,116414,116430,116444,116450,116452,116456,116498,116500,116514,116520,116534,116546,116548,116552,116560,116574,116582,116588,116602,116654,116694,116714,116762,116782,116786,116788,116814,116828,116834,116836,116840,116854,116878,116892,116920,116930,116936,116944,116958,116966,116972,116986,117006,117048,117104,117118,117122,117124,117136,117150,117152,117180,117190,117196,117208,117230,117234,117236,117304,117360,117374,117472,117500,117506,117508,117512,117520,117536,117564,117568,117624,117638,117644,117656,117680,117694,117710,117724,117730,117732,117736,117750,117782,117798,117804,117818,117830,117848,117874,117876,117894,117936,117950,117966,117986,117988,117992,118022,118028,118040,118064,118078,118112,118140,118172,118210,118212,118216,118224,118238,118246,118266,118306,118312,118338,118352,118366,118374,118394,118402,118404,118408,118416,118430,118432,118460,118476,118514,118516,118574,118578,118580,118606,118620,118626,118628,118632,118678,118694,118700,118730,118738,118740,118830,118834,118836,118862,118876,118882,118884,118888,118902,118926,118940,118968,118978,118980,118984,118992,119006,119014,119020,119034,119068,119096,119152,119166,119170,119172,119176,119184,119198,119200,119228,119238,119244,119256,119278,119282,119284,119324,119352,119408,119422,119520,119548,119554,119556,119560,119568,119582,119584,119612,119616,119672,119686,119692,119704,119728,119742,119758,119772,119778,119780,119784,119798,119920,119934,120032,120060,120256,120312,120324,120328,120336,120352,120384,120440,120560,120582,120588,120600,120624,120638,120672,120700,120718,120732,120760,120770,120772,120776,120784,120798,120806,120812,120870,120876,120890,120902,120908,120920,120946,120948,120966,120972,120984,121008,121022,121038,121058,121060,121064,121078,121100,121112,121136,121150,121184,121212,121244,121282,121284,121288,121296,121318,121338,121356,121368,121392,121406,121440,121468,121536,121592,121656,121730,121732,121736,121744,121758,121760,121804,121842,121844,121890,121922,121924,121928,121936,121950,121958,121978,121986,121988,121992,122e3,122014,122016,122044,122060,122098,122100,122116,122120,122128,122142,122144,122172,122176,122232,122246,122264,122318,122338,122340,122344,122414,122418,122420,122446,122460,122466,122468,122472,122510,122524,122552,122562,122564,122568,122576,122598,122618,122646,122662,122668,122694,122700,122712,122738,122740,122762,122770,122772,122786,122788,122792,123018,123026,123028,123042,123044,123048,123062,123098,123146,123154,123156,123170,123172,123176,123190,123202,123204,123208,123216,123238,123244,123258,123290,123314,123316,123402,123410,123412,123426,123428,123432,123446,123458,123464,123472,123486,123494,123500,123514,123522,123524,123528,123536,123552,123580,123590,123596,123608,123630,123634,123636,123674,123698,123700,123740,123746,123748,123752,123834,123914,123922,123924,123938,123944,123958,123970,123976,123984,123998,124006,124012,124026,124034,124036,124048,124062,124064,124092,124102,124108,124120,124142,124146,124148,124162,124164,124168,124176,124190,124192,124220,124224,124280,124294,124300,124312,124336,124350,124366,124380,124386,124388,124392,124406,124442,124462,124466,124468,124494,124508,124514,124520,124558,124572,124600,124610,124612,124616,124624,124646,124666,124694,124710,124716,124730,124742,124748,124760,124786,124788,124818,124820,124834,124836,124840,124854,124946,124948,124962,124964,124968,124982,124994,124996,125e3,125008,125022,125030,125036,125050,125058,125060,125064,125072,125086,125088,125116,125126,125132,125144,125166,125170,125172,125186,125188,125192,125200,125216,125244,125248,125304,125318,125324,125336,125360,125374,125390,125404,125410,125412,125416,125430,125444,125448,125456,125472,125504,125560,125680,125702,125708,125720,125744,125758,125792,125820,125838,125852,125880,125890,125892,125896,125904,125918,125926,125932,125978,125998,126002,126004,126030,126044,126050,126052,126056,126094,126108,126136,126146,126148,126152,126160,126182,126202,126222,126236,126264,126320,126334,126338,126340,126344,126352,126366,126368,126412,126450,126452,126486,126502,126508,126522,126534,126540,126552,126574,126578,126580,126598,126604,126616,126640,126654,126670,126684,126690,126692,126696,126738,126754,126756,126760,126774,126786,126788,126792,126800,126814,126822,126828,126842,126894,126898,126900,126934,127126,127142,127148,127162,127178,127186,127188,127254,127270,127276,127290,127302,127308,127320,127342,127346,127348,127370,127378,127380,127394,127396,127400,127450,127510,127526,127532,127546,127558,127576,127598,127602,127604,127622,127628,127640,127664,127678,127694,127708,127714,127716,127720,127734,127754,127762,127764,127778,127784,127810,127812,127816,127824,127838,127846,127866,127898,127918,127922,127924,128022,128038,128044,128058,128070,128076,128088,128110,128114,128116,128134,128140,128152,128176,128190,128206,128220,128226,128228,128232,128246,128262,128268,128280,128304,128318,128352,128380,128398,128412,128440,128450,128452,128456,128464,128478,128486,128492,128506,128522,128530,128532,128546,128548,128552,128566,128578,128580,128584,128592,128606,128614,128634,128642,128644,128648,128656,128670,128672,128700,128716,128754,128756,128794,128814,128818,128820,128846,128860,128866,128868,128872,128886,128918,128934,128940,128954,128978,128980,129178,129198,129202,129204,129238,129258,129306,129326,129330,129332,129358,129372,129378,129380,129384,129398,129430,129446,129452,129466,129482,129490,129492,129562,129582,129586,129588,129614,129628,129634,129636,129640,129654,129678,129692,129720,129730,129732,129736,129744,129758,129766,129772,129814,129830,129836,129850,129862,129868,129880,129902,129906,129908,129930,129938,129940,129954,129956,129960,129974,130010]),x.t)
D.lE0=A.a(w([2627,1819,2622,2621,1813,1812,2729,2724,2723,2779,2774,2773,902,896,908,868,865,861,859,2511,873,871,1780,835,2493,825,2491,842,837,844,1764,1762,811,810,809,2483,807,2482,806,2480,815,814,813,812,2484,817,816,1745,1744,1742,1746,2655,2637,2635,2626,2625,2623,2628,1820,2752,2739,2737,2728,2727,2725,2730,2785,2783,2778,2777,2775,2780,787,781,747,739,736,2413,754,752,1719,692,689,681,2371,678,2369,700,697,694,703,1688,1686,642,638,2343,631,2341,627,2338,651,646,643,2345,654,652,1652,1650,1647,1654,601,599,2322,596,2321,594,2319,2317,611,610,608,606,2324,603,2323,615,614,612,1617,1616,1614,1612,616,1619,1618,2575,2538,2536,905,901,898,909,2509,2507,2504,870,867,864,860,2512,875,872,1781,2490,2489,2487,2485,1748,836,834,832,830,2494,827,2492,843,841,839,845,1765,1763,2701,2676,2674,2653,2648,2656,2634,2633,2631,2629,1821,2638,2636,2770,2763,2761,2750,2745,2753,2736,2735,2733,2731,1848,2740,2738,2786,2784,591,588,576,569,566,2296,1590,537,534,526,2276,522,2274,545,542,539,548,1572,1570,481,2245,466,2242,462,2239,492,485,482,2249,496,494,1534,1531,1528,1538,413,2196,406,2191,2188,425,419,2202,415,2199,432,430,427,1472,1467,1464,433,1476,1474,368,367,2160,365,2159,362,2157,2155,2152,378,377,375,2166,372,2165,369,2162,383,381,379,2168,1419,1418,1416,1414,385,1411,384,1423,1422,1420,1424,2461,802,2441,2439,790,786,783,794,2409,2406,2403,750,742,738,2414,756,753,1720,2367,2365,2362,2359,1663,693,691,684,2373,680,2370,702,699,696,704,1690,1687,2337,2336,2334,2332,1624,2329,1622,640,637,2344,634,2342,630,2340,650,648,645,2346,655,653,1653,1651,1649,1655,2612,2597,2595,2571,2568,2565,2576,2534,2529,2526,1787,2540,2537,907,904,900,910,2503,2502,2500,2498,1768,2495,1767,2510,2508,2506,869,866,863,2513,876,874,1782,2720,2713,2711,2697,2694,2691,2702,2672,2670,2664,1828,2678,2675,2647,2646,2644,2642,1823,2639,1822,2654,2652,2650,2657,2771,1855,2765,2762,1850,1849,2751,2749,2747,2754,353,2148,344,342,336,2142,332,2140,345,1375,1373,306,2130,299,2128,295,2125,319,314,311,2132,1354,1352,1349,1356,262,257,2101,253,2096,2093,274,273,267,2107,263,2104,280,278,275,1316,1311,1308,1320,1318,2052,202,2050,2044,2040,219,2063,212,2060,208,2055,224,221,2066,1260,1258,1252,231,1248,229,1266,1264,1261,1268,155,1998,153,1996,1994,1991,1988,165,164,2007,162,2006,159,2003,2000,172,171,169,2012,166,2010,1186,1184,1182,1179,175,1176,173,1192,1191,1189,1187,176,1194,1193,2313,2307,2305,592,589,2294,2292,2289,578,572,568,2297,580,1591,2272,2267,2264,1547,538,536,529,2278,525,2275,547,544,541,1574,1571,2237,2235,2229,1493,2225,1489,478,2247,470,2244,465,2241,493,488,484,2250,498,495,1536,1533,1530,1539,2187,2186,2184,2182,1432,2179,1430,2176,1427,414,412,2197,409,2195,405,2193,2190,426,424,421,2203,418,2201,431,429,1473,1471,1469,1466,434,1477,1475,2478,2472,2470,2459,2457,2454,2462,803,2437,2432,2429,1726,2443,2440,792,789,785,2401,2399,2393,1702,2389,1699,2411,2408,2405,745,741,2415,758,755,1721,2358,2357,2355,2353,1661,2350,1660,2347,1657,2368,2366,2364,2361,1666,690,687,2374,683,2372,701,698,705,1691,1689,2619,2617,2610,2608,2605,2613,2593,2588,2585,1803,2599,2596,2563,2561,2555,1797,2551,1795,2573,2570,2567,2577,2525,2524,2522,2520,1786,2517,1785,2514,1783,2535,2533,2531,2528,1788,2541,2539,906,903,911,2721,1844,2715,2712,1838,1836,2699,2696,2693,2703,1827,1826,1824,2673,2671,2669,2666,1829,2679,2677,1858,1857,2772,1854,1853,1851,1856,2766,2764,143,1987,139,1986,135,133,131,1984,128,1983,125,1981,138,137,136,1985,1133,1132,1130,112,110,1974,107,1973,104,1971,1969,122,121,119,117,1977,114,1976,124,1115,1114,1112,1110,1117,1116,84,83,1953,81,1952,78,1950,1948,1945,94,93,91,1959,88,1958,85,1955,99,97,95,1961,1086,1085,1083,1081,1078,100,1090,1089,1087,1091,49,47,1917,44,1915,1913,1910,1907,59,1926,56,1925,53,1922,1919,66,64,1931,61,1929,1042,1040,1038,71,1035,70,1032,68,1048,1047,1045,1043,1050,1049,12,10,1869,1867,1864,1861,21,1880,19,1877,1874,1871,28,1888,25,1886,22,1883,982,980,977,974,32,30,991,989,987,984,34,995,994,992,2151,2150,2147,2146,2144,356,355,354,2149,2139,2138,2136,2134,1359,343,341,338,2143,335,2141,348,347,346,1376,1374,2124,2123,2121,2119,1326,2116,1324,310,308,305,2131,302,2129,298,2127,320,318,316,313,2133,322,321,1355,1353,1351,1357,2092,2091,2089,2087,1276,2084,1274,2081,1271,259,2102,256,2100,252,2098,2095,272,269,2108,266,2106,281,279,277,1317,1315,1313,1310,282,1321,1319,2039,2037,2035,2032,1203,2029,1200,1197,207,2053,205,2051,201,2049,2046,2043,220,218,2064,215,2062,211,2059,228,226,223,2069,1259,1257,1254,232,1251,230,1267,1265,1263,2316,2315,2312,2311,2309,2314,2304,2303,2301,2299,1593,2308,2306,590,2288,2287,2285,2283,1578,2280,1577,2295,2293,2291,579,577,574,571,2298,582,581,1592,2263,2262,2260,2258,1545,2255,1544,2252,1541,2273,2271,2269,2266,1550,535,532,2279,528,2277,546,543,549,1575,1573,2224,2222,2220,1486,2217,1485,2214,1482,1479,2238,2236,2234,2231,1496,2228,1492,480,477,2248,473,2246,469,2243,490,487,2251,497,1537,1535,1532,2477,2476,2474,2479,2469,2468,2466,2464,1730,2473,2471,2453,2452,2450,2448,1729,2445,1728,2460,2458,2456,2463,805,804,2428,2427,2425,2423,1725,2420,1724,2417,1722,2438,2436,2434,2431,1727,2444,2442,793,791,788,795,2388,2386,2384,1697,2381,1696,2378,1694,1692,2402,2400,2398,2395,1703,2392,1701,2412,2410,2407,751,748,744,2416,759,757,1807,2620,2618,1806,1805,2611,2609,2607,2614,1802,1801,1799,2594,2592,2590,2587,1804,2600,2598,1794,1793,1791,1789,2564,2562,2560,2557,1798,2554,1796,2574,2572,2569,2578,1847,1846,2722,1843,1842,1840,1845,2716,2714,1835,1834,1832,1830,1839,1837,2700,2698,2695,2704,1817,1811,1810,897,862,1777,829,826,838,1760,1758,808,2481,1741,1740,1738,1743,2624,1818,2726,2776,782,740,737,1715,686,679,695,1682,1680,639,628,2339,647,644,1645,1643,1640,1648,602,600,597,595,2320,593,2318,609,607,604,1611,1610,1608,1606,613,1615,1613,2328,926,924,892,886,899,857,850,2505,1778,824,823,821,819,2488,818,2486,833,831,828,840,1761,1759,2649,2632,2630,2746,2734,2732,2782,2781,570,567,1587,531,527,523,540,1566,1564,476,467,463,2240,486,483,1524,1521,1518,1529,411,403,2192,399,2189,423,416,1462,1457,1454,428,1468,1465,2210,366,363,2158,360,2156,357,2153,376,373,370,2163,1410,1409,1407,1405,382,1402,380,1417,1415,1412,1421,2175,2174,777,774,771,784,732,725,722,2404,743,1716,676,674,668,2363,665,2360,685,1684,1681,626,624,622,2335,620,2333,617,2330,641,635,649,1646,1644,1642,2566,928,925,2530,2527,894,891,888,2501,2499,2496,858,856,854,851,1779,2692,2668,2665,2645,2643,2640,2651,2768,2759,2757,2744,2743,2741,2748,352,1382,340,337,333,1371,1369,307,300,296,2126,315,312,1347,1342,1350,261,258,250,2097,246,2094,271,268,264,1306,1301,1298,276,1312,1309,2115,203,2048,195,2045,191,2041,213,209,2056,1246,1244,1238,225,1234,222,1256,1253,1249,1262,2080,2079,154,1997,150,1995,147,1992,1989,163,160,2004,156,2001,1175,1174,1172,1170,1167,170,1164,167,1185,1183,1180,1177,174,1190,1188,2025,2024,2022,587,586,564,559,556,2290,573,1588,520,518,512,2268,508,2265,530,1568,1565,461,457,2233,450,2230,446,2226,479,471,489,1526,1523,1520,397,395,2185,392,2183,389,2180,2177,410,2194,402,422,1463,1461,1459,1456,1470,2455,799,2433,2430,779,776,773,2397,2394,2390,734,728,724,746,1717,2356,2354,2351,2348,1658,677,675,673,670,667,688,1685,1683,2606,2589,2586,2559,2556,2552,927,2523,2521,2518,2515,1784,2532,895,893,890,2718,2709,2707,2689,2687,2684,2663,2662,2660,2658,1825,2667,2769,1852,2760,2758,142,141,1139,1138,134,132,129,126,1982,1129,1128,1126,1131,113,111,108,105,1972,101,1970,120,118,115,1109,1108,1106,1104,123,1113,1111,82,79,1951,75,1949,72,1946,92,89,86,1956,1077,1076,1074,1072,98,1069,96,1084,1082,1079,1088,1968,1967,48,45,1916,42,1914,39,1911,1908,60,57,54,1923,50,1920,1031,1030,1028,1026,67,1023,65,1020,62,1041,1039,1036,1033,69,1046,1044,1944,1943,1941,11,9,1868,7,1865,1862,1859,20,1878,16,1875,13,1872,970,968,966,963,29,960,26,23,983,981,978,975,33,971,31,990,988,985,1906,1904,1902,993,351,2145,1383,331,330,328,326,2137,323,2135,339,1372,1370,294,293,291,289,2122,286,2120,283,2117,309,303,317,1348,1346,1344,245,244,242,2090,239,2088,236,2085,2082,260,2099,249,270,1307,1305,1303,1300,1314,189,2038,186,2036,183,2033,2030,2026,206,198,2047,194,216,1247,1245,1243,1240,227,1237,1255,2310,2302,2300,2286,2284,2281,565,563,561,558,575,1589,2261,2259,2256,2253,1542,521,519,517,514,2270,511,533,1569,1567,2223,2221,2218,2215,1483,2211,1480,459,456,453,2232,449,474,491,1527,1525,1522,2475,2467,2465,2451,2449,2446,801,800,2426,2424,2421,2418,1723,2435,780,778,775,2387,2385,2382,2379,1695,2375,1693,2396,735,733,730,727,749,1718,2616,2615,2604,2603,2601,2584,2583,2581,2579,1800,2591,2550,2549,2547,2545,1792,2542,1790,2558,929,2719,1841,2710,2708,1833,1831,2690,2688,2686,1815,1809,1808,1774,1756,1754,1737,1736,1734,1739,1816,1711,1676,1674,633,629,1638,1636,1633,1641,598,1605,1604,1602,1600,605,1609,1607,2327,887,853,1775,822,820,1757,1755,1584,524,1560,1558,468,464,1514,1511,1508,1519,408,404,400,1452,1447,1444,417,1458,1455,2208,364,361,358,2154,1401,1400,1398,1396,374,1393,371,1408,1406,1403,1413,2173,2172,772,726,723,1712,672,669,666,682,1678,1675,625,623,621,618,2331,636,632,1639,1637,1635,920,918,884,880,889,849,848,847,846,2497,855,852,1776,2641,2742,2787,1380,334,1367,1365,301,297,1340,1338,1335,1343,255,251,247,1296,1291,1288,265,1302,1299,2113,204,196,192,2042,1232,1230,1224,214,1220,210,1242,1239,1235,1250,2077,2075,151,148,1993,144,1990,1163,1162,1160,1158,1155,161,1152,157,1173,1171,1168,1165,168,1181,1178,2021,2020,2018,2023,585,560,557,1585,516,509,1562,1559,458,447,2227,472,1516,1513,1510,398,396,393,390,2181,386,2178,407,1453,1451,1449,1446,420,1460,2209,769,764,720,712,2391,729,1713,664,663,661,659,2352,656,2349,671,1679,1677,2553,922,919,2519,2516,885,883,881,2685,2661,2659,2767,2756,2755,140,1137,1136,130,127,1125,1124,1122,1127,109,106,102,1103,1102,1100,1098,116,1107,1105,1980,80,76,73,1947,1068,1067,1065,1063,90,1060,87,1075,1073,1070,1080,1966,1965,46,43,40,1912,36,1909,1019,1018,1016,1014,58,1011,55,1008,51,1029,1027,1024,1021,63,1037,1034,1940,1939,1937,1942,8,1866,4,1863,1,1860,956,954,952,949,946,17,14,969,967,964,961,27,957,24,979,976,972,1901,1900,1898,1896,986,1905,1903,350,349,1381,329,327,324,1368,1366,292,290,287,284,2118,304,1341,1339,1337,1345,243,240,237,2086,233,2083,254,1297,1295,1293,1290,1304,2114,190,187,184,2034,180,2031,177,2027,199,1233,1231,1229,1226,217,1223,1241,2078,2076,584,555,554,552,550,2282,562,1586,507,506,504,502,2257,499,2254,515,1563,1561,445,443,441,2219,438,2216,435,2212,460,454,475,1517,1515,1512,2447,798,797,2422,2419,770,768,766,2383,2380,2376,721,719,717,714,731,1714,2602,2582,2580,2548,2546,2543,923,921,2717,2706,2705,2683,2682,2680,1771,1752,1750,1733,1732,1731,1735,1814,1707,1670,1668,1631,1629,1626,1634,1599,1598,1596,1594,1603,1601,2326,1772,1753,1751,1581,1554,1552,1504,1501,1498,1509,1442,1437,1434,401,1448,1445,2206,1392,1391,1389,1387,1384,359,1399,1397,1394,1404,2171,2170,1708,1672,1669,619,1632,1630,1628,1773,1378,1363,1361,1333,1328,1336,1286,1281,1278,248,1292,1289,2111,1218,1216,1210,197,1206,193,1228,1225,1221,1236,2073,2071,1151,1150,1148,1146,152,1143,149,1140,145,1161,1159,1156,1153,158,1169,1166,2017,2016,2014,2019,1582,510,1556,1553,452,448,1506,1500,394,391,387,1443,1441,1439,1436,1450,2207,765,716,713,1709,662,660,657,1673,1671,916,914,879,878,877,882,1135,1134,1121,1120,1118,1123,1097,1096,1094,1092,103,1101,1099,1979,1059,1058,1056,1054,77,1051,74,1066,1064,1061,1071,1964,1963,1007,1006,1004,1002,999,41,996,37,1017,1015,1012,1009,52,1025,1022,1936,1935,1933,1938,942,940,938,935,932,5,2,955,953,950,947,18,943,15,965,962,958,1895,1894,1892,1890,973,1899,1897,1379,325,1364,1362,288,285,1334,1332,1330,241,238,234,1287,1285,1283,1280,1294,2112,188,185,181,178,2028,1219,1217,1215,1212,200,1209,1227,2074,2072,583,553,551,1583,505,503,500,513,1557,1555,444,442,439,436,2213,455,451,1507,1505,1502,796,763,762,760,767,711,710,708,706,2377,718,715,1710,2544,917,915,2681,1627,1597,1595,2325,1769,1749,1747,1499,1438,1435,2204,1390,1388,1385,1395,2169,2167,1704,1665,1662,1625,1623,1620,1770,1329,1282,1279,2109,1214,1207,1222,2068,2065,1149,1147,1144,1141,146,1157,1154,2013,2011,2008,2015,1579,1549,1546,1495,1487,1433,1431,1428,1425,388,1440,2205,1705,658,1667,1664,1119,1095,1093,1978,1057,1055,1052,1062,1962,1960,1005,1003,1000,997,38,1013,1010,1932,1930,1927,1934,941,939,936,933,6,930,3,951,948,944,1889,1887,1884,1881,959,1893,1891,35,1377,1360,1358,1327,1325,1322,1331,1277,1275,1272,1269,235,1284,2110,1205,1204,1201,1198,182,1195,179,1213,2070,2067,1580,501,1551,1548,440,437,1497,1494,1490,1503,761,709,707,1706,913,912,2198,1386,2164,2161,1621,1766,2103,1208,2058,2054,1145,1142,2005,2002,1999,2009,1488,1429,1426,2200,1698,1659,1656,1975,1053,1957,1954,1001,998,1924,1921,1918,1928,937,934,931,1879,1876,1873,1870,945,1885,1882,1323,1273,1270,2105,1202,1199,1196,1211,2061,2057,1576,1543,1540,1484,1481,1478,1491,1700]),x.t)
D.lTA=new E.K_(8,"PDF417_EXTRA_METADATA")
D.it=new B.ZZ(0,"ALPHA")
D.c53=new B.ZZ(1,"LOWER")
D.c54=new B.ZZ(2,"MIXED")
D.m7K=new B.ZZ(3,"PUNCT")
D.m7M=new B.ZZ(4,"ALPHA_SHIFT")
D.EB=new B.ZZ(5,"PUNCT_SHIFT")})();(function staticFields(){$.cKR=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e9e","cgG",()=>A.aBY(";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'"))
w($,"e9c","cU4",()=>A.aBY("0123456789&\r\t,:#-.$/+%*=^"))
w($,"e9d","cU5",()=>A.acC(900))
w($,"e9f","cU6",()=>{var v,u=J.Gs(16,A.a0("afv"))
for(v=0;v<16;++v)u[v]=$.cU5().acS(v)
return u})
w($,"eb9","cV_",()=>{var v=new B.buR(929)
v.aRB(929,3)
return v})
w($,"ebl","ch3",()=>{var v,u,t=J.Gs(2787,A.a0("F<a7>"))
for(v=x.i,u=0;u<2787;++u)t[u]=A.aE(8,0,!1,v)
return t})
w($,"ebm","cV2",()=>new B.bhK($.cV_()))})()}
$__dart_deferred_initializers__["AvJ2STUh2brYLxqWyFUC6XcBFxI="] = $__dart_deferred_initializers__.current
