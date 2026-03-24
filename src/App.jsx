import { useState, useEffect, useRef } from "react";

// ─── RESPONSIVE HOOK ───
function useW(){const[w,setW]=useState(typeof window!=="undefined"?window.innerWidth:800);useEffect(()=>{const h=()=>setW(window.innerWidth);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h);},[]);return w;}

// ─── NOTES ───
const N=[
{id:"b1",title:"Bölüm 1: İş Hukukunun Konusu, Temel İlkeler ve Kaynakları",icon:"⚖️",sections:[
{title:"1.1 İş Hukukunun Konusu",content:`İş hukukunun konusu **"bağımlı çalışma"** ve **"iş sözleşmesi"**dir. İş hukuku, bir iş sözleşmesine dayanarak çalışan işçi ile işveren arasındaki ilişkileri düzenler.`},
{title:"1.2 İş Hukukunun Alt Dalları",items:["**Bireysel İş Hukuku:** İşçi ile işveren arasındaki bireysel iş ilişkisini düzenler.","**Toplu İş Hukuku:** Sendikalar, toplu iş sözleşmeleri, grev ve lokavt konularını kapsar.","**İş Yargılaması Hukuku:** İş uyuşmazlıklarının çözümünü düzenler.","**İş Sağlığı ve Güvenliği Hukuku:** İşyerinde sağlık ve güvenlik tedbirlerini düzenler.","**Sosyal Güvenlik Hukuku:** Sosyal sigorta ve sağlık sigortası konularını kapsar."]},
{title:"1.3 İş Hukukunun Niteliği",items:["**Karma Hukuk:** Özel hukuk ve kamu hukuku özelliklerini bir arada taşıyan \"Sosyal Hukuk\" niteliğindedir.","**Bağımsız:** Diğer hukuk dallarından bağımsız bir hukuk dalıdır.","**Uluslararası:** ILO sözleşmeleri gibi uluslararası kaynakları vardır.","**Nispi Emredici Kurallar:** İş hukukunun kuralları işçi lehine aksi kararlaştırılabilen nispi emredici niteliktedir.","**İşçi Lehine Yorum İlkesi:** Açık bir düzenleme olmadığında veya tereddüt halinde işçi lehine yorum yapılır."]},
{title:"1.4 İş Hukukunun Temel İlkeleri",items:["**İşçinin Korunması:** Kamu ve toplum yararı ile hassas denge gözetilir.","**İşçi Lehine Yorum:** Amaçsal ve anayasal yorum yapılır.","**Sözleşme Özgürlüğünün Sınırlandırılması:** İşçi lehine sınırlamalar vardır.","**İşçinin Kişiliğinin Tanınması:** İş sözleşmesinin konusu insan emeğidir.","**İşçilerin Yönetime Katılmaları**","**Toplu İş Hukuku ve Özerklik İlkesi**","**İşçi Sağlığı ve İş Güvenliği:** İşçinin yaşam hakkı, vücut ve ruh bütünlüğünün işyerinde korunması."]},
{title:"1.5 İş Mevzuatı (Temel Hukuksal Kaynaklar)",items:["T.C. Anayasası (Madde 5, 17, 49 vd.)","Uluslararası Sözleşmeler (ILO Sözleşmeleri)","4857 sayılı İş Kanunu","854 sayılı Deniz İş Kanunu","5953 sayılı Basın İş Kanunu","6098 sayılı Türk Borçlar Kanunu (Madde 393-469)","6356 sayılı Sendikalar ve Toplu İş Sözleşmesi Kanunu","5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu","6331 sayılı İş Sağlığı ve Güvenliği Kanunu","7036 sayılı İş Mahkemeleri Kanunu"]}
]},
{id:"b2",title:"Bölüm 2: Temel Kavramlar ve Uygulama Alanı",icon:"📋",sections:[
{title:"2.1 4857 Sayılı İş Kanununun Amacı ve Kapsamı (Madde 1)",content:`**Amacı:** İşverenler ile bir iş sözleşmesine dayanarak çalıştırılan işçilerin çalışma şartları ve çalışma ortamına ilişkin hak ve sorumluluklarını düzenlemektir.\n\n**Kapsamı:** Madde 4'teki istisnalar dışında kalan bütün işyerlerine, işverenlere, işveren vekillerine ve işçilerine faaliyet konularına bakılmaksızın uygulanır.`},
{title:"2.2 İşçi (Madde 2/I)",content:`Bir iş sözleşmesine dayanarak çalışan **gerçek kişi** "işçi" olarak tanımlanır.`},
{title:"2.2.1 İşçi Benzerleri",content:`**Çırak:** Kural olarak 3308 sayılı Kanun'a tabidir. Meslek ve sanat öğrenmek amacıyla çalışır.\n\n**Stajyer:** Kural olarak İş Kanunu kapsamı dışındadır. Öğrenmiş bulunduğu meslek ve sanatı geliştirmek, uygulama tecrübesi sağlamak amacıyla çalışır.\n\nHer ikisi de 3308 sayılı Mesleki Eğitim Kanunu kapsamında ücret ve İKMH Sigortası haklarına sahiptir.`},
{title:"2.3 İşveren (Madde 2/I)",content:`İşçi çalıştıran **gerçek veya tüzel kişi** yahut tüzel kişiliği olmayan kurum ve kuruluşlardır.`},
{title:"2.3.1 Alt İşveren (Taşeron)",content:`Bir işverenden, işyerinde yürüttüğü mal veya hizmet üretimine ilişkin **yardımcı işlerinde** veya asıl işin bir bölümünde **işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde** iş alan ve bu iş için görevlendirdiği işçilerini sadece bu işyerinde aldığı işte çalıştıran diğer işverendir.\n\n**Müteselsil (Zincirleme) Sorumluluk:** Asıl işveren, alt işverenin işçilerine karşı o işyeri ile ilgili olarak İş Kanunundan, iş sözleşmesinden veya alt işverenin taraf olduğu toplu iş sözleşmesinden doğan yükümlülüklerinden alt işveren ile birlikte sorumludur (Madde 2/6).\n\n**Ceza Sorumluluğu:** Şahsidir (birlikte sorumluluk yoktur).`},
{title:"2.3.2 İşveren Vekili",content:`İşveren adına hareket eden ve işin, işyerinin ve işletmenin yönetiminde görev alan kimsedir. İşveren vekilinin bu sıfatla işçilere karşı işlem ve yükümlülüklerinden **doğrudan işveren sorumludur**. İşveren vekilliği sıfatı, işçilere tanınan hak ve yükümlülükleri ortadan kaldırmaz.`},
{title:"2.4 İş Sözleşmesi (Madde 8/I)",content:`İş sözleşmesi, bir tarafın (işçi) bağımlı olarak iş görmeyi, diğer tarafın (işveren) da ücret ödemeyi üstlenmesinden oluşan sözleşmedir. Kanunda aksi belirtilmedikçe özel bir şekle tabi değildir.\n\n**Unsurları:**\n• İş (Eser veya Vekalet değil)\n• Ücret\n• Bağımlılık`},
{title:"2.5 İşyeri (Madde 2/II ve III)",content:`İşveren tarafından mal veya hizmet üretmek amacıyla **maddî olan ve olmayan unsurlar** ile işçinin birlikte örgütlendiği birime işyeri denir.\n\nİşverenin işyerinde ürettiği mal veya hizmet ile nitelik yönünden bağlılığı bulunan ve aynı yönetim altında örgütlenen yerler (**işyerine bağlı yerler**) ile dinlenme, çocuk emzirme, yemek, uyku, yıkanma, muayene ve bakım, beden ve meslekî eğitim ve avlu gibi diğer **eklentiler** ve **araçlar** da işyerinden sayılır.\n\n**Teknik bağlılık:** Nitelik ve üretim yönünden aynı teknik amaca dönük olması.\n**Hukuki bağlılık:** Ortak bir yönetim altında bulunması.`},
{title:"2.6 İşletme",content:`İktisadi bir amacın gerçekleştirilmesi için bir girişimciye ait bir veya birden fazla işyerinin örgütlenmesinden oluşan bir birimdir. İşyeri teknik amaca, işletme iktisadi (ekonomik) amaca yöneliktir. İşyerinde üretim yapılır, işletmede kâr veya zarar edilir.`},
{title:"2.7 İşyerini Bildirme (Madde 3)",content:`İşyerini kuran, devralan, çalışma konusunu değiştiren veya faaliyetine son veren işveren, işyerinin unvan ve adresini, işçi sayısını, çalışma konusunu ve diğer bilgileri **bir ay içinde bölge müdürlüğüne** bildirmek zorundadır. Alt işveren de asıl işverenden aldığı yazılı alt işverenlik sözleşmesi ile bildirim yapmakla yükümlüdür.`},
{title:"2.8 İşyerinin Devri (Madde 6)",items:["Devir halinde iş sözleşmeleri **bütün hak ve borçları ile birlikte** devralana geçer.","Devralan işveren, hizmet süresi haklarında işçinin **devreden işveren yanında işe başladığı tarihe** göre işlem yapar.","Devirden önce doğmuş borçlardan devreden ve devralan **birlikte sorumludur**. Devreden işverenin sorumluluğu devir tarihinden itibaren **2 yıl** ile sınırlıdır.","Tüzel kişiliğin birleşme/katılma/tür değişikliğiyle sona ermesi halinde birlikte sorumluluk **uygulanmaz**.","Sırf devir nedeniyle fesih **yapılamaz**, devir işçi için haklı fesih nedeni **oluşturmaz**.","İflas dolayısıyla tasfiye sonucu devir halinde bu hükümler **uygulanmaz**."]},
{title:"2.9 Kapsam Dışı Kalan İş ve İş İlişkileri (Madde 4)",items:["Deniz ve hava taşıma işlerinde","50'den az işçi çalıştırılan (50 dahil) tarım ve orman işlerinde","Aile ekonomisi sınırlarındaki tarımla ilgili yapı işlerinde","Aile üyeleri ve 3. dereceye kadar hısımları arasında ev ve el sanatları işlerinde","Ev hizmetlerinde","Çıraklar hakkında","Sporcular hakkında","Rehabilite edilenler hakkında","Esnaf işyerlerinde (3 kişi)"]},
{title:"2.9.1 İstisnaların İstisnaları (Madde 4/2) — İş Kanunu Kapsamında",items:["Kıyı/liman/iskelede yükleme-boşaltma işleri","Havacılığın yer tesislerindeki işler","Tarım sanatları ile tarım aletleri atölye/fabrika işleri","Tarım işletmelerinde yapı işleri","Halka açık park ve bahçe işleri","Deniz İş Kanunu ve tarım işi kapsamında olmayan su ürünleri işleri"]}
]},
{id:"b3",title:"Bölüm 3: İş Sözleşmesi Türleri",icon:"📄",sections:[
{title:"3.1 Hizmet Sözleşmesi (TBK Madde 393-394)",content:`Hizmet sözleşmesi, işçinin işverene **bağımlı olarak** belirli veya belirli olmayan süreyle işgörmeyi ve işverenin de ona **zamana veya yapılan işe göre ücret ödemeyi** üstlendiği sözleşmedir. Kısmi süreli düzenli biçimde yerine getirme üstlenilen sözleşmeler de hizmet sözleşmesidir. Özel bir şekle bağlı değildir.`},
{title:"3.2 İş Sözleşmesi Türleri Sınıflandırması",items:["**Sözleşmenin süresine göre:** Belirsiz Süreli İş Sözleşmesi / Belirli Süreli İş Sözleşmesi","**Haftalık çalışma süresine göre:** Tam süreli iş sözleşmesi / Kısmi süreli iş sözleşmesi","**Sürekli olup olmamasına göre:** Sürekli iş sözleşmeleri / Süreksiz iş sözleşmeleri","**Diğer türler:** Geçici süreli sözleşmeler / Deneme süreli-deneme süresiz iş sözleşmeleri"]},
{title:"3.3 Belirli ve Belirsiz Süreli İş Sözleşmesi (Madde 11)",items:["İş ilişkisinin bir süreye bağlı olarak yapılmadığı halde sözleşme **belirsiz süreli** sayılır.","Belirli süreli işlerde veya belli bir işin tamamlanması veya belirli bir olgunun ortaya çıkması gibi **objektif koşullara bağlı** olarak işveren ile işçi arasında **yazılı şekilde** yapılan iş sözleşmesi belirli süreli iş sözleşmesidir.","Belirli süreli iş sözleşmesi, **esaslı bir neden olmadıkça** birden fazla üst üste (zincirleme) yapılamaz. Aksi halde iş sözleşmesi **başlangıçtan itibaren belirsiz süreli** kabul edilir.","Esaslı nedene dayalı zincirleme iş sözleşmeleri, **belirli süreli olma özelliğini korurlar**."]},
{title:"3.4 Kısmi Süreli ve Tam Süreli İş Sözleşmesi (Madde 13)",content:`İşçinin normal haftalık çalışma süresinin, tam süreli iş sözleşmesiyle çalışan emsal işçiye göre **önemli ölçüde daha az** belirlenmesi durumunda sözleşme kısmi süreli iş sözleşmesidir.\n\nÖlçüt: Tam süreli emsal çalışmanın **2/3'ü** (genel olarak **30 saat**).\n\n• Kısmi süreli işçi, haklı neden olmadıkça tam süreli emsal işçiye göre **farklı işleme tabi tutulamaz**.\n• Ücret ve paraya ilişkin bölünebilir menfaatler, çalışma süresine **orantılı olarak** ödenir.\n• Kısmi↔tam süreli geçiş talepleri işverence **dikkate alınır**.`},
{title:"3.4.1 Kısmi Süreli Çalışma Yaptırma Zorunluluğu (Madde 13/5-6)",content:`Analık izni veya ücretsiz izin sonrası **mecburi ilköğretim çağının başladığı tarihe** kadar ebeveynlerden biri kısmi süreli çalışma talebinde bulunabilir. Bu talep işveren tarafından **karşılanır** ve **geçerli fesih nedeni sayılmaz**. Ebeveynlerden birinin çalışmaması hâlinde, çalışan eş bu talepte **bulunamaz**.`},
{title:"3.5 Çağrı Üzerine Çalışma (Madde 14)",items:["İşçinin yapmayı üstlendiği işle ilgili ihtiyaç duyulması halinde iş görme ediminin yerine getirileceği kararlaştırılan **kısmi süreli bir iş sözleşmesidir**.","Taraflar haftalık çalışma süresini belirlemedikleri takdirde, haftalık çalışma süresi **yirmi saat** kararlaştırılmış sayılır.","Çağrı üzerine çalıştırılmak için belirlenen sürede işçi **çalıştırılsın veya çalıştırılmasın ücrete hak kazanır**.","İşveren çağrıyı, aksi kararlaştırılmadıkça, işçinin çalışacağı zamandan **en az dört gün önce** yapmak zorundadır.","Sözleşmede günlük çalışma süresi kararlaştırılmamış ise, işveren her çağrıda işçiyi günde **en az dört saat üst üste** çalıştırmak zorundadır."]},
{title:"3.6 Uzaktan Çalışma (Madde 14/4-7)",content:`İşçinin, işveren tarafından oluşturulan iş organizasyonu kapsamında iş görme edimini **evinde ya da teknolojik iletişim araçları ile işyeri dışında** yerine getirmesi esasına dayalı ve **yazılı olarak** kurulan iş ilişkisidir.`,items:["Sözleşmede işin tanımı, yapılma şekli, işin süresi ve yeri, ücret ve ücretin ödenmesine ilişkin hususlar, ekipman ve korunması, iletişim ile genel ve özel çalışma şartlarına ilişkin hükümler yer alır.","Uzaktan çalışmada işçiler, esaslı neden olmadıkça salt iş sözleşmesinin niteliğinden ötürü **emsal işçiye göre farklı işleme tabi tutulamaz**.","İşveren, iş sağlığı ve güvenliği önlemleri hususunda çalışanı **bilgilendirmek**, gerekli **eğitimi vermek**, **sağlık gözetimini sağlamak** ve ekipmanla ilgili gerekli iş güvenliği tedbirlerini almakla yükümlüdür."]},
{title:"3.7 Sürekli ve Süreksiz İşlerdeki İş Sözleşmeleri (Madde 10)",content:`**Süreksiz iş:** Nitelikleri bakımından en çok **30 iş günü** süren işler.\n**Sürekli iş:** Bundan fazla devam eden işler (30 iş gününden fazla).\n\nSüreksiz işlerde İş Kanununun bazı maddeleri uygulanmaz; bu konularda **Borçlar Kanunu hükümleri** uygulanır.`},
{title:"3.8 Geçici İş İlişkisi (Madde 7)",content:`Geçici iş ilişkisi, **özel istihdam bürosu aracılığıyla** ya da **holding bünyesi içinde** veya **aynı şirketler topluluğuna** bağlı başka bir işyerinde görevlendirme yapılmak suretiyle kurulabilir.`,items:["**Kurulabilecek haller:** Analık izni/askerlik/sözleşmenin askıda kaldığı haller, mevsimlik tarım işleri, ev hizmetleri, işletmenin günlük işlerinden sayılmayan aralıklı işler, İSG bakımından acil işler veya zorlayıcı nedenler, işletme kapasitesinin öngörülemez artışı, mevsimlik işler hariç dönemsel iş artışları.","**Süre:** En fazla **4 ay** süreyle kurulabilir. Toplam **8 ayı geçmemek** üzere en fazla **2 defa** yenilenebilir.","Belirtilen sürenin sonunda aynı iş için **6 ay geçmedikçe** yeniden geçici işçi çalıştırılamaz.","Toplu işçi çıkarılan işyerlerinde **8 ay** süresince, **kamu kurum ve kuruluşlarında** ve **yer altında maden çıkarılan** işyerlerinde geçici iş ilişkisi **kurulamaz**.","Grev ve lokavtın uygulanması sırasında geçici iş ilişkisiyle işçi **çalıştırılamaz**.","Geçici işçi sayısı, işyerinde çalıştırılan işçi sayısının **dörtte birini** geçemez. 10 ve daha az işçi çalıştırılan işyerlerinde **beş işçiye** kadar kurulabilir."]},
{title:"3.8.1 Geçici İş İlişkisinde İşveren: Özel İstihdam Bürosu",items:["Geçici iş ilişkisi, geçici işçi ile **iş sözleşmesi**, geçici işçi çalıştıran işveren ile **geçici işçi sağlama sözleşmesi** yapmak suretiyle **yazılı olarak** kurulur.","Geçici işçi ile yapılacak iş sözleşmesinde, işçinin ne kadar süre içerisinde işe çağrılmazsa haklı nedenle feshedebileceği belirtilir. Bu süre **üç ayı geçemez**.","Sözleşmede belirtilen sürenin dolmasına rağmen geçici iş ilişkisinin devam etmesi hâlinde, geçici işçi çalıştıran işveren ile işçi arasında **belirsiz süreli iş sözleşmesi** kurulmuş sayılır."]},
{title:"3.8.2 Mesleki Amaçlı Olmayan Geçici İş İlişkisi (Madde 7/son)",content:`İşverenin, devir sırasında **yazılı rızasını** almak suretiyle bir işçisini, holding bünyesi içinde veya aynı şirketler topluluğuna bağlı başka bir işyerinde iş görme edimini yerine getirmek üzere geçici olarak devretmesi. Yazılı olarak **altı ayı geçmemek** üzere kurulabilir ve en fazla **iki defa** yenilenebilir. İşçisini geçici olarak devreden işverenin **ücret ödeme yükümlülüğü devam eder**.`},
{title:"3.9 Deneme Süreli İş Sözleşmesi (Madde 15)",items:["Taraflarca iş sözleşmesine bir deneme kaydı konulduğunda, bunun süresi **en çok iki ay** olabilir.","Ancak deneme süresi **toplu iş sözleşmeleriyle dört aya kadar** uzatılabilir.","Deneme süresi içinde taraflar iş sözleşmesini **bildirim süresine gerek olmaksızın** ve **tazminatsız** feshedebilir.","İşçinin **çalıştığı günler için ücret ve diğer hakları saklıdır**."]},
{title:"3.10 Takım Sözleşmesi (Madde 16)",content:`Birden çok işçinin meydana getirdiği bir takımı temsilen bu işçilerden birinin, **takım kılavuzu** sıfatıyla işverenle yaptığı sözleşmedir.\n\n• Takım sözleşmesinin **yazılı yapılması** gerekir.\n• Sözleşmede her işçinin **kimliği ve alacağı ücret ayrı ayrı** gösterilir.\n• İşe başlamasıyla iş sözleşmesi kurulan işçilere ücretlerini işveren **her birine ayrı ayrı ödemek** zorundadır.\n• Takım kılavuzu için, takıma dahil işçilerin ücretlerinden **kesinti yapılamaz**.`}
]},
{id:"b4",title:"Bölüm 4: İş Sözleşmesinde Tarafların Borçları",icon:"🤝",sections:[
{title:"Tarafların Borçları — Genel Tablo",content:`**İşçinin Borçları:** İş Görme, İşverenin Talimatlarına Uyma, Sadakat (Bağlılık), Rekabet Etmeme\n\n**İşverenin Borçları:** Ücret Ödeme, Eşit İşlem Yapma, İşçiyi Gözetme`},
{title:"4.1.1 Bizzat Çalışma Borcu (TBK Madde 395)",content:`Sözleşmeden veya durumun gereğinden aksi anlaşılmadıkça, işçi yüklendiği işi **bizzat yapmakla** yükümlüdür.`},
{title:"4.1.2 Özen ve Sadakat Borcu (TBK Madde 396)",items:["İşçi, yüklendiği işi **özenle yapmak** ve işverenin haklı menfaatinin korunmasında **sadakatle davranmak** zorundadır.","İşçi, işverene ait makineleri, araç ve gereçleri, teknik sistemleri, tesisleri ve taşıtları **usulüne uygun olarak kullanmak** ve bunlarla birlikte işin görülmesi için kendisine teslim edilmiş olan malzemeye **özen göstermekle** yükümlüdür.","İşçi, hizmet ilişkisi devam ettiği sürece, sadakat borcuna aykırı olarak bir ücret karşılığında **üçüncü kişiye hizmette bulunamaz** ve özellikle kendi işvereni ile **rekabete girişemez**.","İşçi, iş gördüğü sırada öğrendiği, özellikle üretim ve **iş sırları gibi bilgileri**, hizmet ilişkisinin devamı süresince kendi yararına **kullanamaz veya başkalarına açıklayamaz**. İşverenin haklı menfaatinin korunması için gerekli olduğu ölçüde işçi, hizmet ilişkisinin **sona ermesinden sonra da sır saklamakla yükümlüdür**."]},
{title:"4.1.3 Teslim ve Hesap Verme Borcu (TBK Madde 397)",content:`İşçi, üstlendiği işin görülmesi sırasında üçüncü kişiden işveren için aldığı şeyleri ve özellikle paraları **derhâl ona teslim etmek** ve bunlar hakkında hesap vermekle yükümlüdür. İşçi, hizmetin ifasından dolayı elde ettiği şeyleri de derhâl işverene **teslim etmekle** yükümlüdür.`},
{title:"4.1.4 Fazla Çalışma Borcu (TBK Madde 398)",content:`Fazla çalışma, ilgili kanunlarda belirlenen normal çalışma süresinin üzerinde ve **işçinin rızasıyla** yapılan çalışmadır. Ancak, normal süreden daha fazla çalışmayı gerektiren bir işin yerine getirilmesi zorunluluğu doğar, işçi bunu yapabilecek durumda bulunur ve kaçınması dürüstlük kurallarına aykırı olursa, karşılığı verilmek koşuluyla fazla çalışmayı yerine getirmekle yükümlüdür.\n\nİş Kanunu 41/7: Fazla saatlerle çalışmak için **işçinin onayının alınması** gerekir.`},
{title:"4.1.5 Düzenlemelere ve Talimata Uyma Borcu (TBK Madde 399)",content:`İşveren, işin görülmesi ve işçilerin işyerindeki davranışlarıyla ilgili **genel düzenlemeler yapabilir** ve onlara **özel talimat verebilir**. İşçiler, bunlara **dürüstlük kurallarının gerektirdiği ölçüde** uymak zorundadırlar.`},
{title:"4.1.6 Rekabet Etmeme Borcu (TBK Madde 444)",content:`Fiil ehliyetine sahip olan işçi, işverene karşı, sözleşmenin sona ermesinden sonra herhangi bir biçimde onunla **rekabet etmekten** kaçınmayı **yazılı olarak** üstlenebilir.\n\nRekabet yasağı kaydı, ancak hizmet ilişkisi işçiye **müşteri çevresi** veya **üretim sırları** ya da işverenin yaptığı işler hakkında **bilgi edinme imkânı** sağlıyorsa ve aynı zamanda bu bilgilerin kullanılması, işverenin **önemli bir zararına** sebep olacak nitelikteyse geçerlidir.`},
{title:"4.2.1 Ücret Ödeme Borcu (TBK Madde 401 / İK Madde 32)",content:`**TBK Madde 401:** İşveren, işçiye sözleşmede veya toplu iş sözleşmesinde belirlenen; sözleşmede hüküm bulunmayan hâllerde ise, **asgari ücretten az olmamak üzere emsal ücreti** ödemekle yükümlüdür.\n\n**İş Kanunu Madde 32:** Genel anlamda ücret bir kimseye bir iş karşılığında işveren veya üçüncü kişiler tarafından sağlanan ve **para ile ödenen** tutardır.`},
{title:"4.2.2 İş Araç ve Malzemeleri Sağlama (TBK Madde 413)",content:`Aksine anlaşma veya yerel âdet yoksa, işveren işçiye bu iş için gerekli **araçları ve malzemeyi sağlamakla** yükümlüdür. İşçi işverenle anlaşarak kendi araç veya malzemesini işin görülmesine özgülerse, işveren bunun için işçiye **uygun bir karşılık ödemekle** yükümlüdür.`},
{title:"4.2.3 Giderleri Karşılama (TBK Madde 414)",content:`İşveren, işin görülmesinin gerektirdiği **her türlü harcama** ile işçiyi işyeri dışında çalıştırdığı takdirde, geçimi için **zorunlu olan harcamaları** da ödemekle yükümlüdür. Zorunlu harcamaların kısmen veya tamamen işçi tarafından bizzat karşılanmasına ilişkin anlaşmalar **geçersizdir**.`},
{title:"4.2.4 Eşit Davranma İlkesi (İş Kanunu Madde 5)",items:["İş ilişkisinde **dil, ırk, renk, cinsiyet, engellilik, siyasal düşünce, felsefî inanç, din ve mezhep** ve benzeri sebeplere dayalı ayrım yapılamaz.","İşveren, esaslı sebepler olmadıkça tam süreli↔kısmî süreli, belirsiz↔belirli süreli çalışan işçiye **farklı işlem yapamaz**.","İşveren, biyolojik veya işin niteliğine ilişkin sebepler zorunlu kılmadıkça **cinsiyet veya gebelik** nedeniyle doğrudan veya dolaylı farklı işlem yapamaz.","Aynı veya eşit değerde bir iş için **cinsiyet nedeniyle daha düşük ücret** kararlaştırılamaz.","Aykırı davranıldığında işçi, **dört aya kadar ücreti tutarındaki uygun bir tazminattan** başka yoksun bırakıldığı haklarını da talep edebilir.","İspat yükü işçi üzerindedir. Ancak, işçi bir ihlalin varlığı ihtimalini güçlü bir biçimde gösteren bir durumu ortaya koyduğunda, **işveren böyle bir ihlalin mevcut olmadığını ispat** etmekle yükümlü olur."]},
{title:"4.2.5 İşçinin Kişiliğinin Korunması (TBK Madde 417)",items:["İşveren, hizmet ilişkisinde işçinin kişiliğini **korumak ve saygı göstermek** ve işyerinde dürüstlük ilkelerine uygun bir düzeni sağlamakla yükümlüdür.","Özellikle işçilerin **psikolojik ve cinsel tacize uğramamaları** ve bu tür tacizlere uğramış olanların daha fazla zarar görmemeleri için **gerekli önlemleri almakla** yükümlüdür.","İşveren, işyerinde **iş sağlığı ve güvenliğinin sağlanması** için gerekli her türlü önlemi almak, araç ve gereçleri **noksansız bulundurmak** zorundadır; işçiler de iş sağlığı ve güvenliği konusunda alınan her türlü önleme **uymakla** yükümlüdür.","İşverenin aykırı davranışı nedeniyle işçinin **ölümü, vücut bütünlüğünün zedelenmesi veya kişilik haklarının ihlaline** bağlı zararların tazmini, **sözleşmeye aykırılıktan doğan sorumluluk** hükümlerine tabidir."]},
{title:"4.2.6 İş Sağlığı ve Güvenliği (6331 Sayılı Kanun Madde 4)",items:["İşveren, çalışanların işle ilgili **sağlık ve güvenliğini sağlamakla yükümlüdür**.","Mesleki risklerin önlenmesi, **eğitim ve bilgi verilmesi** dâhil her türlü tedbirin alınması, organizasyonun yapılması, gerekli araç ve gereçlerin sağlanması.","**Risk değerlendirmesi** yapar veya yaptırır.","Çalışana görev verirken, çalışanın **sağlık ve güvenlik yönünden işe uygunluğunu** göz önüne alır.","İşyeri dışındaki uzman kişi ve kuruluşlardan hizmet alınması, **işverenin sorumluluklarını ortadan kaldırmaz**.","İş sağlığı ve güvenliği tedbirlerinin maliyetini **çalışanlara yansıtamaz**."]}
]},
{id:"b5",title:"Bölüm 5: Fesih ve Haklı Nedenle Fesih",icon:"🔚",sections:[
{title:"5.1 Feshin Geçerli Sebebe Dayandırılması (Madde 18)",content:`**Otuz veya daha fazla** işçi çalıştıran işyerlerinde en az **altı aylık** kıdemi olan işçinin belirsiz süreli iş sözleşmesini fesheden işveren, **işçinin yeterliliğinden veya davranışlarından** ya da **işletmenin, işyerinin veya işin gereklerinden** kaynaklanan geçerli bir sebebe dayanmak zorundadır.\n\nYer altı işlerinde çalışan işçilerde **kıdem şartı aranmaz**.`},
{title:"5.2 İşverenin Haklı Nedenle Derhal Fesih Hakkı (Madde 25/II)",content:`**Ahlak ve iyi niyet kurallarına uymayan haller ve benzerleri:**`,items:["**a)** İş sözleşmesi yapıldığı sırada esaslı noktalardan biri için gerekli vasıflar kendisinde bulunmadığı halde bunların bulunduğunu ileri sürerek, gerçeğe uygun olmayan bilgiler vererek **işçinin işvereni yanıltması**.","**b)** İşçinin, işveren yahut aile üyelerinden birinin **şeref ve namusuna dokunacak sözler** sarfetmesi veya davranışlarda bulunması, yahut **asılsız ihbar ve isnadlarda** bulunması.","**c)** İşçinin işverenin başka bir işçisine **cinsel tacizde** bulunması.","**d)** İşçinin işverene yahut aile üyelerine yahut başka işçiye **sataşması**, işyerine **sarhoş veya uyuşturucu madde almış** olarak gelmesi ya da işyerinde bu maddeleri kullanması.","**e)** İşçinin, işverenin **güvenini kötüye kullanmak, hırsızlık yapmak, meslek sırlarını ortaya atmak** gibi doğruluk ve bağlılığa uymayan davranışlarda bulunması.","**f)** İşçinin, işyerinde **yedi günden fazla hapisle cezalandırılan** ve cezası ertelenmeyen bir suç işlemesi.","**g)** İşçinin izinsiz veya haklı sebepsiz ardı ardına **iki işgünü** veya bir ay içinde iki defa herhangi bir tatil gününden sonraki iş günü, yahut bir ayda **üç işgünü** işine devam etmemesi.","**h)** İşçinin yapmakla ödevli bulunduğu görevleri kendisine **hatırlatıldığı halde yapmamakta ısrar** etmesi.","**ı)** İşçinin kendi isteği veya savsaması yüzünden **işin güvenliğini tehlikeye düşürmesi**, işyerinin malı olan veya eli altında bulunan eşya ve maddeleri **otuz günlük ücretinin tutarıyla ödeyemeyecek derecede** hasara ve kayba uğratması."]},
{title:"5.3 İşçinin Haklı Nedenle Derhal Fesih Hakkı (Madde 24/II)",content:`**Ahlak ve iyiniyet kurallarına uymayan haller ve benzerleri:**`,items:["**a)** İşveren iş sözleşmesi yapıldığı sırada **yanlış vasıflar veya şartlar göstermek** yahut gerçeğe uygun olmayan bilgiler vermek suretiyle işçiyi yanıltırsa.","**b)** İşveren işçinin veya ailesi üyelerinden birinin **şeref ve namusuna dokunacak şekilde sözler söyler**, davranışlarda bulunursa veya işçiye **cinsel tacizde** bulunursa.","**c)** İşveren işçiye veya ailesi üyelerine karşı **sataşmada bulunur veya gözdağı verirse**, yahut işçiyi veya ailesini **kanuna karşı davranışa özendirir**, kışkırtır veya **hapsi gerektiren bir suç işlerse** yahut **asılsız ağır isnad** veya ithamlarda bulunursa.","**d)** İşçinin diğer bir işçi veya üçüncü kişiler tarafından işyerinde **cinsel tacize uğraması** ve bu durumu işverene bildirmesine rağmen **gerekli önlemler alınmazsa**.","**e)** İşveren tarafından işçinin ücreti kanun hükümleri veya sözleşme şartlarına uygun olarak **hesap edilmez veya ödenmezse**.","**f)** Ücretin parça başına veya iş tutarı üzerinden ödenmesi kararlaştırılıp da işveren tarafından işçiye yapabileceği sayı ve tutardan **az iş verildiği** hallerde, aradaki ücret farkı zaman esasına göre ödenerek **işçinin eksik aldığı ücret karşılanmazsa**, yahut **çalışma şartları uygulanmazsa**."]},
{title:"5.4 Fesih Bildirimine İtiraz ve Usulü (Madde 20)",items:["İş sözleşmesi feshedilen işçi, fesih bildiriminde sebep gösterilmediği veya gösterilen sebebin geçerli bir sebep olmadığı iddiası ile fesih bildiriminin tebliği tarihinden itibaren **bir ay** içinde İş Mahkemeleri Kanunu hükümleri uyarınca **arabulucuya başvurmak zorundadır**.","Arabuluculuk faaliyeti sonunda anlaşmaya varılamaması hâlinde, son tutanağın düzenlendiği tarihten itibaren **iki hafta** içinde iş mahkemesinde dava açılabilir.","**Feshin geçerli bir sebebe dayandığını ispat yükümlülüğü işverene aittir.** İşçi, feshin başka bir sebebe dayandığını iddia ettiği takdirde, bu iddiasını ispatla yükümlüdür.","Dava **ivedilikle** sonuçlandırılır. Mahkemece verilen karar hakkında istinaf yoluna başvurulması hâlinde, bölge adliye mahkemesi **ivedilikle ve kesin olarak** karar verir."]}
]}
];

// ─── QUIZ ───
const Q=[
{q:"İş hukukunun konusu nedir?",o:["Bağımsız çalışma","Bağımlı çalışma","Gönüllü çalışma","Kamu görevlileri"],a:1},
{q:"İş hukuku kurallarının niteliği nedir?",o:["Mutlak emredici","Nispi emredici (işçi lehine)","Yedek hukuk kuralı","Tamamlayıcı"],a:1},
{q:"4857 sayılı İş Kanununun amacı?",o:["Sadece işveren haklarını korumak","İşçilerin çalışma şartları ve ortamını düzenlemek","Yalnızca ücret belirlemek","Sadece iş güvenliği"],a:1},
{q:"İş sözleşmesinin temel unsurları?",o:["İş, ücret, bağımlılık","İş, kâr, sermaye","Ücret, eşitlik, özgürlük","Bağımlılık, özgürlük, sermaye"],a:0},
{q:"Hangisi iş sözleşmesi türü DEĞİLDİR?",o:["Belirli süreli","Belirsiz süreli","Eser sözleşmesi","Kısmi süreli"],a:2},
{q:"İşçi kimdir?",o:["İşveren adına hareket eden","İş sözleşmesine dayanarak çalışan gerçek kişi","Tüzel kişi olarak çalışan","Bağımsız çalışan"],a:1},
{q:"Alt işveren-asıl işveren sorumluluk türü?",o:["Sınırlı","Bireysel","Müteselsil (zincirleme)","Orantılı"],a:2},
{q:"İşveren vekili hakkında hangisi YANLIŞTIR?",o:["İşveren adına hareket eder","İşverenin sorumluluğu kalkar","Vekil için de işveren sorumlulukları geçerli","İşçi haklarını kaldırmaz"],a:1},
{q:"İşyeri kavramı hakkında hangisi DOĞRUDUR?",o:["Sadece üretim yeri","Eklentiler dahil değil","Bağlı yerler, eklentiler, araçlarla bütündür","Sadece bina"],a:2},
{q:"Süreksiz iş nedir?",o:["En çok 30 iş günü süren","60 iş günü süren","3 aydan kısa","Mevsimlik"],a:0},
{q:"Belirli süreli sözleşme için ne şarttır?",o:["Sözlü yeterli","Objektif koşul + yazılı","İşverenin tek taraflı kararı","Süresiz sözleşme"],a:1},
{q:"Esaslı nedensiz zincirleme belirli süreli sözleşme yapılırsa?",o:["Geçersiz","Başlangıçtan itibaren belirsiz süreli","Ceza ödenir","Hiçbir şey"],a:1},
{q:"Kısmi süreli iş sözleşmesi ölçütü?",o:["Emsal çalışmanın 1/2'si","Emsal çalışmanın 2/3'ü (30 saat)","Haftada 20 saat","Haftada 40 saat"],a:1},
{q:"Çağrı üzerine çalışmada süre belirlenmezse haftalık kaç saat?",o:["10","15","20","30"],a:2},
{q:"Çağrı en az kaç gün önce yapılmalı?",o:["1","2","4","7"],a:2},
{q:"Deneme süresi en çok ne kadar?",o:["1 ay","2 ay","3 ay","6 ay"],a:1},
{q:"Deneme süresi TİS ile en çok ne kadar uzar?",o:["3 aya","4 aya","6 aya","1 yıla"],a:1},
{q:"Deneme süresinde fesih için ne gerekir?",o:["Bildirim ve tazminat","Sadece bildirim","Hiçbiri gerekmez","Mahkeme kararı"],a:2},
{q:"Uzaktan çalışma nasıl kurulur?",o:["Sözlü","Yazılı olarak","Sadece ofiste","Ekipman şartı yok"],a:1},
{q:"Takım sözleşmesi hakkında hangisi DOĞRU?",o:["Sözlü yapılabilir","Kılavuz için ücretlerden kesinti yapılamaz","Ücretler topluca ödenir","Her işçiye ayrı sözleşme gerekli"],a:1},
{q:"Geçici iş ilişkisi hangisi yoluyla KURULAMAZ?",o:["Özel istihdam bürosu","Holding bünyesi","Şirketler topluluğu","İşçinin kendi kararıyla"],a:3},
{q:"Geçici iş sözleşmesi en fazla kaç ay?",o:["2","4","6","12"],a:1},
{q:"Aynı iş için yeniden geçici işçi kaç ay sonra?",o:["3","4","6","12"],a:2},
{q:"Hangisi İş Kanunu kapsamı DIŞINDA?",o:["Fabrika işçisi","Ev hizmetleri","İnşaat işçisi","Market kasiyeri"],a:1},
{q:"Hangisi istisnanın istisnası DEĞİL?",o:["Liman yükleme-boşaltma","Havacılık yer tesisleri","Deniz taşıma işleri","Tarım işletmesi yapı işleri"],a:2},
{q:"Bizzat çalışma borcu hangi madde?",o:["TBK 393","TBK 395","TBK 396","TBK 399"],a:1},
{q:"Özen/sadakat borcu kapsamında hangisi YANLIŞ?",o:["İşi özenle yapmak","Meslek sırlarını açıklayabilir","Rekabete giremez","Araçları uygun kullanmalı"],a:1},
{q:"Fazla çalışma için ne gerekir? (İK 41/7)",o:["İşverenin tek taraflı kararı","İşçinin onayı","Mahkeme kararı","Sendikal onay"],a:1},
{q:"Rekabet yasağı kaydı ne zaman geçerli?",o:["Her durumda","Müşteri çevresi/üretim sırları bilgisi varsa","Sadece yöneticiler için","1 yıldan kısa süreliyse"],a:1},
{q:"Ücret ödeme borcu hakkında hangisi DOĞRU?",o:["Asgari ücretten az ödenebilir","Emsal ücret asgari ücretten az olabilir","Hüküm yoksa asgari ücretten az olmamak üzere emsal ücret","Sadece nakit ödenmeli"],a:2},
{q:"Eşit davranma ihlalinde işçi ne talep eder?",o:["1 aylık ücret","4 aya kadar ücret tazminatı + yoksun kalınan haklar","6 aylık ücret","12 aylık ücret"],a:1},
{q:"TBK 417 kapsamında ne var?",o:["Psikolojik/cinsel tacize karşı önlem","Kişisel hediye","Özel hayata karışmama","Tatil hakları"],a:0},
{q:"İSG tedbirleri maliyeti kime ait?",o:["İşçiye","İşverene","Devlete","Paylaşılır"],a:1},
{q:"Geçerli fesih kaç işçili işyerlerinde?",o:["10+","20+","30+","50+"],a:2},
{q:"Geçerli fesih için en az kıdem?",o:["3 ay","6 ay","1 yıl","2 yıl"],a:1},
{q:"Yer altı işlerinde kıdem şartı aranır mı?",o:["Evet 6 ay","Evet 1 yıl","Hayır aranmaz","Evet 3 ay"],a:2},
{q:"Arabulucuya başvuru süresi?",o:["1 hafta","2 hafta","1 ay","2 ay"],a:2},
{q:"Arabuluculuk sonrası dava açma süresi?",o:["1 hafta","2 hafta","1 ay","2 ay"],a:1},
{q:"Geçerli fesih ispat yükü kimde?",o:["İşçi","İşveren","Arabulucu","Mahkeme"],a:1},
{q:"İşverenin haklı fesih hakkı hangi madde?",o:["Md. 18","Md. 20","Md. 24","Md. 25"],a:3},
{q:"İşçinin haklı fesih hakkı hangi madde?",o:["Md. 18","Md. 20","Md. 24","Md. 25"],a:2},
{q:"İzinsiz ardı ardına kaç işgünü gelmeme haklı fesih?",o:["1","2","3","5"],a:1},
{q:"Bir ayda kaç işgünü devamsızlık haklı fesih?",o:["2","3","5","7"],a:1},
{q:"1 yıl+ iş sözleşmeleri için ne gerekir?",o:["Sözlü yeterli","Yazılı zorunlu","Noter tasdiki","Resmî Gazete ilanı"],a:1},
{q:"Yazılı sözleşme yoksa işveren ne kadar sürede belge vermeli?",o:["1 ay","2 ay","3 ay","6 ay"],a:1},
{q:"İşyeri devrinde devreden sorumluluk süresi?",o:["1 yıl","2 yıl","3 yıl","5 yıl"],a:1},
{q:"Hangisi işçinin haklı fesih hakkına örnek DEĞİL?",o:["Ücret ödenmemesi","Cinsel tacize rağmen önlem alınmaması","İşçinin işe geç kalması","İşverenin yanıltması"],a:2},
{q:"Çağrı üzerine çalışmada günlük minimum kaç saat?",o:["2","3","4","6"],a:2},
{q:"Geçici işçi kaç ay çağrılmazsa haklı fesih?",o:["1","2","3","6"],a:2},
{q:"Toplu işçi çıkarılan yerlerde geçici iş yasağı kaç ay?",o:["3","6","8","12"],a:2},
];

// ─── PAST EXAMS ───
const E1=[
{q:"Yıllık Ücretli İzin Yönetmeliği iş hukukunun kaynaklarından hangisi arasında yer alır?",o:["Özel kaynaklar","Yasama kaynakları","Yürütme kaynakları","Uluslararası kaynaklar","Yargı kaynakları"],a:2},
{q:"Birinci Dünya Savaşı sonrasındaki ------- ile BM bünyesinde kurulan ILO sözleşmeleri ile iş hukuku bugünkü biçimini almaya başlamıştır.",o:["Lozan Anlaşması","Maastricht Anlaşması","Kuzey Atlantik Anlaşması","Versaille Barış Anlaşması","BM Anlaşması"],a:3},
{q:"Hava taşıma işlerinde çalışanlara hangi kanunun hizmet sözleşmesi hükümleri uygulanır?",o:["6102 Türk Ticaret K.","4857 İş K.","6098 Türk Borçlar K.","6356 Sendikalar ve TİS K.","854 Deniz İş K."],a:2},
{q:"I.Deniz taşıma II.Tarım aletleri atölye/fabrika III.Aile ekonomisi tarım yapı IV.Havacılık yer tesisleri V.Ev hizmetleri temizlik — Hangilerinde 4857 uygulanır?",o:["I ve III","I ve V","II ve IV","II ve V","I, II ve III"],a:2},
{q:"Yer altı maden işçilerine ödenecek miktar asgari ücretin ------- az olamaz.",o:["1/2'sinden","2/3'ünden","2 katından","3 katından","4 katından"],a:2},
{q:"------- gros tonilatodan düşük gemilerde çalışanlara TBK hizmet sözleşmesi hükümleri uygulanır.",o:["100","150","200","225","250"],a:0},
{q:"Çıraklar haftada en az kaç saat eğitim görmek zorundadır?",o:["2","3","5","7","8"],a:4},
{q:"Hangisi işyerinin maddi olmayan unsurlarındandır?",o:["Makine","Arazi","Hammadde","Alet ve edevat","Deneyim"],a:4},
{q:"Çıraklar ile ilgili hangisi doğrudur?",o:["3308 sayılı Kanun çerçevesinde düzenlenmiştir","İşçi niteliği taşır","TİS'den yararlanabilir","Sendikaya üye olabilir","İşveren mutlaka ücret ödemek zorundadır"],a:0},
{q:"Stajyerler ile ilgili hangisi doğrudur?",o:["Ücret ödenirse işçi sayılır","Ekonomik değer yaratmak üzere bulunur","İş mevzuatı kapsamındadır","Mesleğin teorik bilgisine sahip oldukları için çıraklardan ayrılır","6331 İSG K. kapsamı dışındadır"],a:3},
{q:"Asıl işveren alt işveren ile ilgili hangisi yanlıştır?",o:["Asıl işveren için işi verenin işveren olması gerekir","Yardımcı işlerin alt işverene verilmesi sınırlanmıştır","Alt işveren işçileri asıl işverene ait işyerinde çalışırsa asıl-alt ilişkisi vardır","Alt işveren için işi alan kişinin işçi çalıştırması gerekir","Alt işveren yardımcı işlerde iş alan kişidir"],a:1},
{q:"Zorunlu ilköğretim çağını tamamlamış çocukların çalışma saatleri günde 7/haftada 35; sanat-kültür-reklamda günde --- haftada --- fazla olamaz.",o:["5/30","7/35","7/40","7,5/45","8/40"],a:0},
{q:"İş sözleşmesi yapma yasakları ile ilgili hangisi yanlıştır?",o:["Kural olarak 15 yaş altı çalıştırma yasak","18 yaşını doldurmuş kadınlar gece postalarında çalıştırılamaz","18 yaş altı çocuk/genç işçilerin sanayi işlerinde gece çalıştırılması yasak","14 yaş altı çocuklar sanat/kültür/reklamda yazılı sözleşmeyle çalıştırılabilir","Yabancıların çalışması izne bağlıdır"],a:1},
{q:"I.Süreksiz iş sözl. II.Takım sözl. III.Deniz İş K. gemi adamları sözl. — Hangileri yazılı yapılması zorunlu?",o:["Yalnız I","Yalnız II","I ve II","II ve III","I, II ve III"],a:3},
{q:"Deneme süresi TİS ile en çok kaç aya uzatılabilir?",o:["1","2","3","4","6"],a:3},
{q:"Hangisinde özel istihdam bürosu ile geçici iş ilişkisi kurulamaz?",o:["Ev hizmetlerinde","İşçinin resmi bayram nedeniyle gitmediği günlerde","Analık nedeniyle kısmi süreli çalışma hallerinde","Mevsimlik tarım işlerinde","İSG bakımından acil işlerde"],a:1},
{q:"I.Asgari ücret altında ücret kararlaştırılamaz II.Temel ücret ayni ödenemez III.Ücret zamanaşımı 10 yıl IV.Ücret en geç haftada bir V.Ücret/prim/ikramiye Türk parasıyla VI.Sözleşme sona erince tam ödeme — Hangileri doğru?",o:["I, II, V ve VI","I, III, IV ve V","I, IV, V ve VI","II, III, IV ve V","III, IV, V ve VI"],a:0},
{q:"İşçinin rekabet etmeme borcu hangisinin kapsamındadır?",o:["Düzenlemelere uyma","Eşit davranma","Teslim ve hesap verme","İSG tedbirleri","Sadakat borcu"],a:4},
{q:"Üretilen mal/yapılan iş miktarına göre hesaplanan ücret?",o:["Zamana göre","Parça başı","Yüzde usulü","Aracılık ücreti","Komisyon"],a:1},
{q:"Yılbaşı, evlenme gibi özel nedenlerle verilen ek ücrete ne denir?",o:["Götürü ücret","Aracılık ücreti","Yüzde usulü","Bahşiş","İkramiye"],a:4},
];
const E2=[
{q:"Bağımlı çalışanlar grubu içinde iş sözleşmesiyle çalışan işçi-işveren ilişkilerinin düzenlendiği hukuk dalı?",o:["Mali Hukuk","Medeni Hukuk","Ticaret Hukuku","Vergi Hukuku","İş Hukuku"],a:4},
{q:"Sanayi devrimi öncesi toplumlarla ilgili hangisi doğrudur?",o:["Tarıma dayalı ekonomi ve zanaatkâr tipi çalışma yaygın","Hızlı kentleşme","İşçi sınıfı ortaya çıkmış","Buharın keşfi ile fabrika üretimi yapısal değişim","Kırsaldan sanayi bölgelerine göç"],a:0},
{q:"100 gros tonilatodan düşük gemilerde çalışan gemi adamları hangi kanuna tabi?",o:["Deniz İş K.","İş K.","Medeni K.","Türk Borçlar K.","Sendikalar ve TİS K."],a:3},
{q:"Hangisi iş hukukunun uluslararası kaynakları arasında yer almaz?",o:["İki taraflı anlaşmalar","Avrupa Konseyi sözleşmeleri","ILO sözleşmeleri","Toplu iş sözleşmesi","BM belgeleri"],a:3},
{q:"4857 İş K. kapsamı ile ilgili hangisi yanlıştır?",o:["Ev hizmetleri kapsam dışı","Karadan gemiye yükleme-boşaltma İK'ya tabi","Aile ekonomisi tarım yapı işleri İK kapsamı içindedir","Hava taşıma işleri kapsam dışı","Profesyonel sporcular kapsam dışı"],a:2},
{q:"İşveren ile ilgili hangisi yanlıştır?",o:["İş K.'na göre işçi çalıştıran kişi/kuruluş","Özel/kamu tüzel kişileri işveren olabilir","Yönetim hakkı sahibi ve hukuki sorumluluk taşır","İş kazası ölüm/yaralanmasında gerçek kişi işverenin ceza sorumluluğu yoktur","Gerçek kişi işveren sözleşme tarafı ve yönetim hakkı kullanan"],a:3},
{q:"Çırak tanımı hangi kanunda?",o:["274 Sendikalar K.","4447 İşsizlik Sigortası K.","4721 Medeni K.","3308 Mesleki Eğitim K.","6102 Ticaret K."],a:3},
{q:"İşyeri devrinde devreden işverenin sorumluluğu kaç yıl?",o:["2","3","5","10","15"],a:0},
{q:"Stajyerler ile ilgili hangisi yanlıştır?",o:["İSG K. kapsamı dışındadır","Ekonomik değer yaratmadığı için işçiden ayrılır","İş sözleşmesi olmadan iş mevzuatı dışında","Mesleki eğitim gören öğrencilere asgari ücretin belirli yüzdelerinden az ücret ödenemez","Mesleğin uygulamasını öğrenmek üzere işyerinde bulunur"],a:0},
{q:"Hangisi işyerinin maddi unsurlarından biri değildir?",o:["Edavat","Makine","Deneyim","Bina","Alet"],a:2},
{q:"Şekil koşuluna sahip olmayan iş sözleşmeleri hangisinde doğru verilmiştir?",o:["Basın İş K./Deniz İş K. sözleşmesi","Belirli 1 yıl+ sözleşme/Takım sözleşmesi","Çağrı üzerine çalışma/Uzaktan çalışma","Takım sözleşmesi/14 yaş altı sanat faaliyetleri sözleşmesi","Belirli 1 yıldan az/Belirsiz süreli sözleşmeler"],a:4},
{q:"İşçinin iş görme edimini evinde veya teknolojik araçlarla işyeri dışında yerine getirmesi esasına dayalı yazılı iş ilişkisi?",o:["Tam süreli","Uzaktan çalışma","Sürekli iş sözleşmesi","Mevsimlik","Takım sözleşmesi"],a:1},
{q:"İş K. Md. 10'a göre süreksiz iş en çok kaç işgünü?",o:["30","45","60","90","120"],a:0},
{q:"Zorunlu ilköğretimi tamamlamış çocuklar: günde 7/haftada 35; sanat-kültür-reklamda günde --- haftada ---",o:["2/10","5/30","5/35","7/35","8/35"],a:1},
{q:"Askeri/kanuni ödev sonrası işe almayan işveren kaç aylık ücret tazminatı öder?",o:["2","3","4","5","6"],a:1},
{q:"\"İşçinin görevleri hatırlatıldığı halde yapmamakta ısrar\" hangi maddeye göre derhal fesih?",o:["19","20","21","24","25"],a:4},
{q:"Ücret alacaklarında zamanaşımı süresi kaç yıl?",o:["2","3","5","8","10"],a:2},
{q:"İşçinin işverenin menfaatlerini korumama hangi borca aykırılık?",o:["Düzenlemelere Uyma","Sadakat","İşgörme","Eşit Davranma","Teslim ve Hesap Verme"],a:1},
{q:"İşçinin başarılı çalışmasının ödüllendirilmesi amacıyla ödenen ücret eki?",o:["Götürü ücret","İşin sonucunda pay alma","Yüzde usulü","Aracılık ücreti","Prim"],a:4},
{q:"Her ödemede işçiye verilen imzalı ücret hesap belgesi?",o:["İşyeri bildirgesi","İbraname","Ücret hesap pusulası","Çalışma belgesi","Bonservis"],a:2},
{q:"Esaslı çalışma koşulu değişikliği işçinin ------- işgünü içinde yazılı kabulü ile gerçekleşir.",o:["6","8","10","15","30"],a:0},
{q:"5510 sayılı Kanun hangisidir?",o:["İş K.","İSG K.","İşsizlik Sigortası K.","Sosyal Sigortalar ve GSS K.","Sendikalar ve TİS K."],a:3},
{q:"Ev hizmetlerinde çalışan bahçıvanlar hangi Kanuna tabi?",o:["Sendikalar ve TİS K.","Türk Borçlar K.","Medeni K.","Ticaret K.","Tatil-i Eşgal K."],a:1},
{q:"Gazete, dergi, haber/fotoğraf ajanslarında çalışanlar hangi kanun?",o:["Medeni K.","Ticaret K.","Basın İş K.","Deniz İş K.","İş K."],a:2},
{q:"3308 sayılı Mesleki Eğitim K. hangisini kapsar?",o:["Ücretsiz aile işçileri","Memur","Bağımsız çalışanlar","Çıraklar","Alt işveren"],a:3},
{q:"Hangisi işyerinin maddi olmayan unsurlarından?",o:["Hammadde","Alet ve edevat","Müşteri çevresi","Makine","Arazi"],a:2},
];
const E3=[
{q:"Aşağıdakilerden hangisi eklentiler arasında yer almamaktadır?",o:["Otopark","Avlu","Garaj","Muayene odası","Vinç"],a:4},
{q:"\"İşveren tarafından mal veya hizmet üretmek amacıyla maddî olan ve olmayan unsurlarla işçinin sürekli biçimde örgütlendiği birime\" ne ad verilmektedir?",o:["İşletme","Fabrika","Örgüt","Organizasyon","İşyeri"],a:4},
{q:"İşveren adına hareket eden ve işin, işyerinin ve işletmenin yönetiminde görev alan kişilere ne ad verilir?",o:["Taşeron","Alt işveren","İşveren vekili","Müteahhit","İşçi"],a:2},
{q:"Aşağıdakilerden hangisi işveren vekili değildir?",o:["Postabaşı","Alt işveren","Formen","Genel müdür","Fabrika müdürü"],a:1},
{q:"Okul öncesi çocuklar ile okula devam eden çocukların eğitim saatleri dışında olmak üzere günde en fazla kaç saattir?",o:["2","3","4","5","10"],a:0},
{q:"İşçinin, işveren tarafından oluşturulan iş organizasyonu kapsamında işgörme edimini evinde ya da teknolojik iletişim araçlarıyla işyeri dışında yerine getirmesi esasına dayalı ve yazılı olarak kurulan iş ilişkisi?",o:["Tam süreli iş sözleşmesi","Uzaktan çalışma","Takım sözleşmesi","Mevsimlik iş sözleşmesi","Sürekli iş sözleşmesi"],a:1},
{q:"Birden çok işçinin meydana getirdiği bir takımı temsilen bu işçilerden birinin, takım kılavuzu sıfatıyla işverenle yaptığı sözleşmeye ne denir?",o:["Geçici iş ilişkisi","Uzaktan çalışma","Takım sözleşmesi","Deneme süreli iş sözleşmesi","Tam süreli iş sözleşmesi"],a:2},
{q:"Yer altında ve su altında yapılacak işlerde kaç yaşını doldurmamış erkeklerin çalıştırılması yasaktır?",o:["18","19","21","23","25"],a:0},
{q:"İş Kanunu'nun 71. maddesine göre çocukların çalışma saatleri günde ------- ve haftada ------- saatten fazla olamaz.",o:["7 - 35","7,5 - 45","8 - 40","10 - 42,5","11 - 45"],a:0},
{q:"İşyerinde hizmet edilen müşterilerin hesap pusulalarına belirli bir yüzdenin eklenmesi suretiyle üçüncü kişiler tarafından ödenmesi söz konusu olan ücret türü?",o:["Aracılık ücreti","Götürü ücret","Komisyon ücreti","Zamana göre ücret","Yüzde usulü ücret"],a:4},
{q:"İşçinin iş görme borcunun karşılığını işverenin ------- borcu oluşturmaktadır.",o:["Düzenlemelere ve talimatlara uyma","Ücret ödeme","Sadakat","Fazla çalışma","Teslim ve hesap verme"],a:1},
{q:"Ücret alacaklarında zamanaşımı süresi kaç yıldır?",o:["5","8","10","15","20"],a:0},
{q:"İşçinin kendi isteği veya savsaması yüzünden işin güvenliğini tehlikeye düşürmesi, işyerinin malı olan veya eli altında bulunan eşya ve maddeleri ------- günlük ücretin tutarıyla ödeyemeyecek derecede hasara uğratması halinde işveren haklı nedenle feshedebilir.",o:["15","20","25","30","40"],a:3},
{q:"Ücretin çalışılan zaman dilimi esas alınarak belirlenmesi durumunda aşağıdaki ücret türlerinden hangisi söz konusudur?",o:["Götürü ücret","Aracılık ücreti","Yüzde usulü ücret","Zamana göre ücret","Akort ücret"],a:3},
{q:"Türkiye'de yayımlanan gazete, dergi ve sürekli yayınlarda haber ve fotoğraf ajanslarında çalışanlar hangi kanuna tabidir?",o:["Deniz İş Kanunu","İş Kanunu","Basın İş Kanunu","Medeni Kanun","Ticaret Kanunu"],a:2},
{q:"100 gros tonilatodan daha düşük gemilerde çalışan gemi adamları hangi kanuna tabidir?",o:["İş Kanunu","Sendikalar ve TİS Kanunu","Türk Borçlar Kanunu","Medeni Kanun","Deniz İş Kanunu"],a:2},
{q:"Aynı konuyu düzenleyen birden çok hukuk kuralının bulunması halinde işçinin lehine olan düzenlemenin öncelikle uygulanması ilkesi?",o:["Sözleşme serbestisinin sınırlanması","Bağımlılık ilkesi","Kendi kendine yardım ilkesi","Yararlılık ilkesi","Esneklik ilkesi"],a:3},
{q:"I. Denizlerde çalışan su ürünleri üreticileri  II. Evlerde ev hizmetlerinde çalışanlar  III. Profesyonel sporcular — Hangileri 4857 sayılı İş Kanunu'nun uygulama alanında yer alır?",o:["Yalnız I","Yalnız III","I ve II","II ve III","I, II ve III"],a:0},
{q:"Aşağıdakilerden hangisi işyerinin maddi olmayan unsurlarından biridir?",o:["Alet ve edevat","Hammadde","Arazi","Müşteri çevresi","Makine"],a:3},
{q:"İş Kanunu kapsamındaki bir işyerinin devri halinde, devreden işverenin sorumluluğu devir tarihinden itibaren kaç yıl süreyle sınırlanmıştır?",o:["2","3","5","10","15"],a:0},
];
const E4=[
{q:"I. Yönetim hakkının sahibidir  II. Hukuki, idari ve cezai sorumlulukların muhatabıdır  III. Şirket, dernek, vakıf gibi özel hukuk tüzel kişileri işveren olamaz — İşveren ile ilgili hangileri doğrudur?",o:["Yalnız II","Yalnız III","I ve II","I, II ve IV","I, II ve III"],a:2},
{q:"İş Kanunu kapsamına giren bir işyerini devralan işveren, işyerini bir ay içinde aşağıdakilerden hangisine bildirmekle yükümlüdür?",o:["Kültür ve Turizm Bakanlığı","Sağlık Bakanlığı","Valilik","Çalışma ve İş Kurumu İl Müdürlüğü","Hazine ve Maliye Bakanlığı"],a:3},
{q:"Aşağıdakilerden hangisi 4857 sayılı İş Kanunu'nun kapsamı dışında bırakılmıştır?",o:["Tarım aletleri atölye ve fabrikaları","Havacılığın bütün yer tesisleri","Halkın faydalanmasına açık park ve bahçe işleri","Antrenörler","Aile ekonomisi sınırları içinde kalan tarımla ilgili her çeşit yapı işleri"],a:4},
{q:"Aşağıdakilerden hangisi işyerinin kapsamında yer almaz?",o:["İşyerine bağlı yerler","Araçlar","Eklentiler","İşverenin ikâmet ettiği yer","İşin yapıldığı yer"],a:3},
{q:"İş sözleşmesini diğer iş görme borcu doğuran sözleşmelerden ayırt eden en önemli unsur hangisidir?",o:["İşçi yararına yorum","İş görme","Süreklilik","Ücret","Bağımlılık"],a:4},
{q:"Aşağıdakilerden hangisi iş hukukunun uluslararası kaynaklarından biridir?",o:["İç yönetmelik","İş sözleşmesi","Avrupa Konseyi Sözleşmeleri","İşyeri uygulaması","Toplu iş sözleşmesi"],a:2},
{q:"\"Asgari Ücret Yönetmeliği\" iş hukukunun aşağıdaki kaynaklarından hangisi arasında yer alır?",o:["Uluslararası kaynaklar","Yürütme kaynakları","Yargı kaynakları","Özel kaynaklar","Yasama kaynakları"],a:1},
{q:"Aşağıdakilerden hangisi bireysel iş hukukunun konuları arasında yer almaz?",o:["İş sözleşmesinin fesih yoluyla sona erdirilmesi","İşverenin ücret ödeme borcu","İşçinin sadakat borcu","İşçinin yıllık ücretli izin hakkı","Toplu iş uyuşmazlıkları"],a:4},
{q:"Stajyerler ekonomik bir değer yaratmak üzere işyerinde bulunmadığından işçiden, mesleğin teorik bilgisine sahip oldukları için de ------- ayrılmaktadır.",o:["işveren vekillerinden","çıraklardan","işverenlerden","taşeronlardan","müteahhitlerden"],a:1},
{q:"I. TİS'den yararlanabilirler  II. İşçi niteliği taşırlar  III. 6331 İSG Kanunu güvencesi altında  IV. Haftada 8 saat eğitim — Çıraklar ile ilgili hangileri doğrudur?",o:["I ve II","II ve III","III ve IV","I, II ve IV","II, III ve IV"],a:2},
{q:"Aşağıdakilerden hangisi işverenin borçları arasında yer almaz?",o:["Sadakat","Eşit davranma","İşçinin kişiliğinin korunması","Ücret ödeme","İş sağlığı ve güvenliğinin sağlanması"],a:0},
{q:"Bir işyerinde bilgisayar donanımının kurulması için işe alınan işçiyle yapılan sözleşme aşağıdakilerden hangisine bir örnektir?",o:["Süreksiz iş sözleşmesi","Belirli süreli iş sözleşmesi","Sürekli iş sözleşmesi","Tam süreli iş sözleşmesi","Belirsiz süreli iş sözleşmesi"],a:1},
{q:"Bir işyerinde 39 saat tam süreli çalışma yapılıyorsa, kaç saatin altındaki çalışmalar kısmi süreli çalışma sayılmaktadır?",o:["26","30","34","36","38"],a:0},
{q:"İşçinin üstün bir çaba göstererek nitelik ve nicelik olarak başarılı çalışmasının ödüllendirilmesi amacıyla ödenen ücret eki?",o:["İşin sonucunda pay alma","Prim","Aracılık ücreti","Götürü ücret","Yüzde usulü ücret"],a:1},
{q:"İşçinin bir makineyi tamir etmesi sonucu kendisine ödenecek ücretin türü?",o:["Götürü ücret","Aracılık ücreti","Yüzde usulü ücret","Zamana göre ücret","Akort ücret"],a:0},
{q:"50 ve daha fazla çalışanın bulunduğu ve ------- aydan fazla süren sürekli işlerin yapıldığı işyerlerinde İSG kurulu oluşturulur.",o:["2","3","4","5","6"],a:4},
{q:"İş Kanunu'nun 30. maddesine göre işverenler, 50+ işçi çalıştırdıkları özel sektör işyerlerinde %3 engelli, kamu işyerlerinde ise %------- engelli ve %------- eski hükümlü işçiyi çalıştırmakla yükümlüdür.",o:["2 - 4","3 - 1","4 - 2","4 - 3","5 - 3"],a:2},
{q:"I. Süreksiz iş sözleşmesi  II. Takım sözleşmesi  III. Deniz İş Kanunu gereğince gemi adamlarıyla yapılan sözleşme — Hangileri yazılı yapılması zorunlu?",o:["Yalnız I","Yalnız II","I ve II","II ve III","I, II ve III"],a:3},
{q:"Çağrı üzerine çalışmada sözleşmede günlük çalışma süresi kararlaştırılmamışsa, işveren her çağrıda işçiyi günde en az kaç saat üst üste çalıştırmak zorundadır?",o:["4","5","6","7","8"],a:0},
{q:"İş sözleşmesi devam ederken rakip bir işte de çalışan işçi, iş sözleşmesinden doğan hangi borcuna aykırı davranmış olur?",o:["İşin bizzat yerine getirilmesi","Düzenlemelere ve talimatlara uyma","Teslim ve hesap verme","Sadakat","Eşit davranma"],a:3},
];
const FC=[
// BÖLÜM 1
{f:"İş hukukunun konusu nedir?",b:"\"Bağımlı çalışma\" ve \"iş sözleşmesi\""},
{f:"İş hukuku kuralları hangi niteliktedir?",b:"Nispi emredici — işçi lehine aksi kararlaştırılabilir"},
{f:"İşçi lehine yorum ilkesi ne zaman uygulanır?",b:"Açık bir düzenleme olmadığında veya tereddüt halinde"},
{f:"İş hukuku hangi hukuk türüdür?",b:"Karma (Sosyal) Hukuk — Özel hukuk + Kamu hukuku"},
{f:"İş hukukunun 5 alt dalını say.",b:"1) Bireysel İş Hukuku  2) Toplu İş Hukuku  3) İş Yargılaması  4) İSG Hukuku  5) Sosyal Güvenlik Hukuku"},
{f:"Bireysel iş hukuku temel kanunları?",b:"4857 İş Kanunu, 854 Deniz İş Kanunu, 5953 Basın İş Kanunu, 6098 TBK (Md. 393-469)"},
// BÖLÜM 2
{f:"İşçi kimdir? (Md. 2/I)",b:"Bir iş sözleşmesine dayanarak çalışan gerçek kişi"},
{f:"İşveren kimdir? (Md. 2/I)",b:"İşçi çalıştıran gerçek veya tüzel kişi yahut tüzel kişiliği olmayan kurum ve kuruluşlar"},
{f:"Çırak hangi kanuna tabidir?",b:"3308 sayılı Mesleki Eğitim Kanunu — meslek ve sanat öğrenmek amacıyla çalışır"},
{f:"Stajyer İş Kanunu kapsamında mıdır?",b:"Hayır, kural olarak İş Kanunu kapsamı dışındadır — mesleki tecrübe amacıyla çalışır"},
{f:"Alt işveren (taşeron) nedir?",b:"Asıl işverenden yardımcı veya uzmanlık gerektiren işlerde iş alan, işçilerini sadece o işyerinde çalıştıran diğer işveren"},
{f:"Asıl işveren - alt işveren sorumluluk türü?",b:"Müteselsil (zincirleme) sorumluluk (Md. 2/6). Ceza sorumluluğu ise şahsidir."},
{f:"İşveren vekili kimdir?",b:"İşveren adına hareket eden, işin/işyerinin/işletmenin yönetiminde görev alan kimse. İşlemlerinden doğrudan işveren sorumludur."},
{f:"İş sözleşmesinin 3 unsuru?",b:"İş (eser/vekalet değil) + Ücret + Bağımlılık"},
{f:"İşyeri nedir? (Md. 2/II)",b:"İşveren tarafından mal veya hizmet üretmek amacıyla maddî olan ve olmayan unsurlar ile işçinin birlikte örgütlendiği birim"},
{f:"İşyerinden sayılan eklentiler nelerdir?",b:"Dinlenme, çocuk emzirme, yemek, uyku, yıkanma, muayene ve bakım, meslekî eğitim, avlu gibi yerler ve araçlar"},
{f:"Teknik bağlılık ne demek?",b:"İşyerinin nitelik ve üretim yönünden aynı teknik amaca dönük olması"},
{f:"İşletme ile işyeri arasındaki fark?",b:"İşyeri teknik amaca, işletme iktisadi (ekonomik) amaca yöneliktir. İşyerinde üretim yapılır, işletmede kâr veya zarar edilir."},
{f:"İşyerini bildirme süresi? (Md. 3)",b:"Bir ay içinde bölge müdürlüğüne"},
{f:"İşyeri devrinde iş sözleşmeleri ne olur? (Md. 6)",b:"Bütün hak ve borçları ile birlikte devralana geçer"},
{f:"Devreden işverenin sorumluluk süresi?",b:"Devir tarihinden itibaren 2 yıl ile sınırlı"},
{f:"İflas tasfiyesi sonucu devir halinde Md. 6 uygulanır mı?",b:"Hayır, uygulanmaz"},
{f:"4857 İş Kanunu kapsamı dışında kalan 3 örnek say.",b:"1) Deniz ve hava taşıma işleri  2) Ev hizmetleri  3) Sporcular"},
{f:"İstisnaların istisnası: Havacılık yer tesisleri İş Kanunu kapsamında mı?",b:"Evet — Md. 4/2 uyarınca İş Kanunu kapsamındadır"},
// BÖLÜM 3
{f:"Hizmet sözleşmesi nedir? (TBK 393)",b:"İşçinin işverene bağımlı olarak belirli/belirsiz süreyle işgörmeyi, işverenin zamana veya yapılan işe göre ücret ödemeyi üstlendiği sözleşme"},
{f:"Belirli süreli sözleşme için 2 şart?",b:"1) Objektif koşullara bağlı olmalı  2) Yazılı şekilde yapılmalı"},
{f:"Esaslı nedensiz zincirleme belirli süreli sözleşme yapılırsa?",b:"Başlangıçtan itibaren belirsiz süreli kabul edilir"},
{f:"Kısmi süreli sözleşme ölçütü?",b:"Tam süreli emsal çalışmanın 2/3'ü — genel olarak haftalık 30 saat"},
{f:"Analık izni sonrası kısmi süreli çalışma talebi?",b:"İşveren karşılamak zorundadır, geçerli fesih nedeni sayılmaz"},
{f:"Çağrı üzerine çalışmada süre belirlenmezse?",b:"Haftalık 20 saat kararlaştırılmış sayılır"},
{f:"İşveren çağrıyı en az kaç gün önce yapmalı?",b:"En az 4 gün önce"},
{f:"Çağrı üzerine çalışmada günlük minimum süre?",b:"Her çağrıda en az 4 saat üst üste"},
{f:"Uzaktan çalışma nasıl kurulur?",b:"Yazılı olarak — sözleşmede iş tanımı, süre, yer, ücret, ekipman, iletişim yer almalı"},
{f:"Süreksiz iş nedir? (Md. 10)",b:"Nitelikleri bakımından en çok 30 iş günü süren işler"},
{f:"Geçici iş ilişkisi süresi? (Md. 7)",b:"En fazla 4 ay, toplam 8 ayı geçmemek üzere en fazla 2 defa yenilenebilir"},
{f:"Geçici işçi kaç ay çağrılmazsa haklı fesih?",b:"3 ay — bu süre sözleşmede belirtilir ve 3 ayı geçemez"},
{f:"Mesleki amaçlı olmayan geçici iş ilişkisi süresi?",b:"Yazılı olarak 6 ayı geçmemek üzere, en fazla 2 defa yenilenebilir"},
{f:"Deneme süresi ne kadardır? (Md. 15)",b:"En çok 2 ay — TİS ile 4 aya kadar uzatılabilir"},
{f:"Takım sözleşmesi nedir? (Md. 16)",b:"Birden çok işçiyi temsilen takım kılavuzu sıfatıyla işverenle yapılan yazılı sözleşme. Ücretler ayrı ayrı ödenir, kılavuz için kesinti yapılamaz."},
// BÖLÜM 4
{f:"İşçinin bizzat çalışma borcu? (TBK 395)",b:"İşçi yüklendiği işi bizzat yapmakla yükümlüdür (aksi anlaşılmadıkça)"},
{f:"Sadakat borcu kapsamında işçi ne yapamaz? (TBK 396)",b:"Üçüncü kişiye ücretli hizmet veremez, işverenle rekabete giremez, iş sırlarını açıklayamaz"},
{f:"Fazla çalışma için ne gerekir? (İK 41/7)",b:"İşçinin onayının alınması gerekir"},
{f:"Rekabet yasağı kaydı ne zaman geçerlidir? (TBK 444)",b:"Müşteri çevresi/üretim sırları bilgisi varsa VE bu bilgilerin kullanımı işverene önemli zarar verecekse"},
{f:"İşveren ücret ödeme borcu? (TBK 401)",b:"Sözleşme/TİS'de belirlenen; hüküm yoksa asgari ücretten az olmamak üzere emsal ücret"},
{f:"Eşit davranma ilkesi ihlalinde tazminat? (İK Md. 5)",b:"4 aya kadar ücret tutarında tazminat + yoksun bırakıldığı haklar"},
{f:"İSG tedbirlerinin maliyetini kim karşılar? (6331 Md. 4)",b:"İşveren — çalışanlara yansıtamaz"},
// BÖLÜM 5
{f:"Geçerli fesih koşulları? (Md. 18)",b:"30+ işçili işyeri, en az 6 ay kıdem, belirsiz süreli sözleşme. Yer altı işlerinde kıdem şartı aranmaz."},
{f:"İşverenin haklı fesih hakkında devamsızlık kuralı? (Md. 25/II-g)",b:"Ardı ardına 2 işgünü veya bir ayda 3 işgünü devamsızlık"},
{f:"İşçi fesih bildirimine nasıl itiraz eder? (Md. 20)",b:"Tebliğden itibaren 1 ay içinde arabulucuya başvuru → anlaşma olmazsa 2 hafta içinde dava"},
{f:"Geçerli fesihte ispat yükü kimde?",b:"İşverene aittir. İşçi başka sebep iddia ediyorsa kendisi ispatlar."},
];

// ─── UTILS ───
function md(t){const p=[];t.split('\n').forEach((l,i)=>{if(i>0)p.push(<br key={`br${i}`}/>);const r=/\*\*(.*?)\*\*/g;let la=0,m,lp=[],k=0;while((m=r.exec(l))!==null){if(m.index>la)lp.push(<span key={`t${i}${k++}`}>{l.slice(la,m.index)}</span>);lp.push(<strong key={`b${i}${k++}`} style={{color:"var(--ac)"}}>{m[1]}</strong>);la=r.lastIndex;}if(la<l.length)lp.push(<span key={`t${i}${k++}`}>{l.slice(la)}</span>);p.push(...lp);});return p;}
const L=["A","B","C","D","E"];

// ─── QUIZ COMPONENT ───
function Quiz({ questions, accent = "var(--ac2)", gradStart = "var(--ac2)", gradEnd = "#7c3aed", label = "Sınav" }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const pick = (qi, oi) => {
    if (answers[qi] !== undefined) return;
    setAnswers(prev => ({ ...prev, [qi]: oi }));
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([qi, oi]) => oi === questions[Number(qi)].a).length;

  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div>
      {/* Header */}
      <div style={{ position: "sticky", top: 52, zIndex: 10, background: "var(--bg)", paddingBottom: 8, paddingTop: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ flex: 1, height: 5, background: "var(--sf2)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ width: `${(answeredCount / questions.length) * 100}%`, height: "100%", borderRadius: 3, background: `linear-gradient(90deg,${gradStart},${gradEnd})`, transition: "width .3s" }} />
          </div>
          <span style={{ fontSize: 11, color: "var(--tx2)", fontWeight: 600, whiteSpace: "nowrap" }}>{answeredCount}/{questions.length}</span>
        </div>
        <div style={{ display: "flex", gap: 10, padding: "7px 10px", background: "var(--sf)", borderRadius: 8, fontSize: 12, color: "var(--tx2)", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10 }}>
            <span>✅ {correctCount}</span>
            <span>❌ {answeredCount - correctCount}</span>
          </div>
          {answeredCount > 0 && (
            <button onClick={reset} style={{ background: "none", border: "none", color: "var(--tx2)", cursor: "pointer", fontFamily: "inherit", fontSize: 11, padding: "2px 6px", WebkitTapHighlightColor: "transparent" }}>↺ Sıfırla</button>
          )}
        </div>
      </div>

      {/* Questions */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
        {questions.map((q, qi) => {
          const picked = answers[qi];
          const revealed = picked !== undefined;
          return (
            <div key={qi} style={{ background: "var(--sf)", border: `1px solid ${revealed ? (picked === q.a ? "var(--gn)" : "var(--rd)") : "var(--bd)"}`, borderRadius: 12, padding: "14px 12px", transition: "border-color .3s" }}>
              <p style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.45, margin: "0 0 10px", wordBreak: "break-word" }}>
                <span style={{ color: accent, marginRight: 5 }}>{qi + 1}.</span>{q.q}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {q.o.map((o, oi) => {
                  let bg = "var(--sf2)", bc = "var(--bd)", tc = "var(--tx)";
                  if (revealed) {
                    if (oi === q.a) { bg = "rgba(74,222,128,.12)"; bc = "var(--gn)"; tc = "var(--gn)"; }
                    else if (oi === picked) { bg = "rgba(248,113,113,.12)"; bc = "var(--rd)"; tc = "var(--rd)"; }
                  }
                  return (
                    <button key={oi} onClick={() => pick(qi, oi)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 8, border: `2px solid ${bc}`, background: bg, color: tc, cursor: revealed ? "default" : "pointer", textAlign: "left", fontFamily: "inherit", fontSize: 12.5, fontWeight: 500, minHeight: 40, WebkitTapHighlightColor: "transparent", transition: "all .2s" }}>
                      <span style={{ width: 22, height: 22, minWidth: 22, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", background: revealed && oi === q.a ? "var(--gn)" : revealed && oi === picked ? "var(--rd)" : "var(--bd)", color: revealed && (oi === q.a || oi === picked) ? "#fff" : "var(--tx2)", fontSize: 10, fontWeight: 700 }}>{L[oi]}</span>
                      <span style={{ flex: 1 }}>{o}</span>
                    </button>
                  );
                })}
              </div>
              {revealed && (
                <div style={{ marginTop: 8, fontSize: 11, fontWeight: 600, color: picked === q.a ? "var(--gn)" : "var(--rd)" }}>
                  {picked === q.a ? "✓ Doğru!" : `✗ Yanlış — Doğru cevap: ${L[q.a]}`}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Result summary at bottom */}
      {answeredCount === questions.length && (
        <div style={{ textAlign: "center", marginTop: 20, padding: "20px 16px", background: "var(--sf)", borderRadius: 12, border: "1px solid var(--bd)" }}>
          <span style={{ fontSize: 40 }}>{correctCount >= questions.length * .8 ? "🏆" : correctCount >= questions.length * .5 ? "👍" : "📚"}</span>
          <p style={{ fontSize: 28, fontWeight: 800, margin: "8px 0", color: correctCount >= questions.length * .8 ? "var(--gn)" : correctCount >= questions.length * .5 ? "var(--gd)" : "var(--rd)" }}>{correctCount}/{questions.length}</p>
          <p style={{ color: "var(--tx2)", fontSize: 13, marginBottom: 14 }}>%{Math.round(correctCount / questions.length * 100)} başarı</p>
          <button onClick={reset} style={{ padding: "12px 32px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${gradStart},${gradEnd})`, color: "#fff", cursor: "pointer", fontFamily: "inherit", fontSize: 14, fontWeight: 700 }}>Tekrar Dene</button>
        </div>
      )}
    </div>
  );
}

// ─── APP ───
export default function App(){
  const w=useW();const mob=w<640;
  const[tab,setTab]=useState("notes");
  const[bol,setBol]=useState("b1");
  const[sb,setSb]=useState(false);
  const[examSet,setExamSet]=useState("pick");
  const[fcI,setFcI]=useState(0);
  const[fcF,setFcF]=useState(false);
  const ref=useRef(null);
  useEffect(()=>{if(ref.current)ref.current.scrollTop=0;},[bol,tab,fcI,examSet]);
  useEffect(()=>{setSb(false);},[tab]);

  const bd=N.find(b=>b.id===bol);
  const tabs=[["notes","📖","Ders Notu"],["quiz","✏️","Sorular"],["past","📝","Çıkmış"],["flash","🃏","Kartlar"]];

  const css={"--bg":"#0f1117","--sf":"#1a1d27","--sf2":"#232736","--bd":"#2d3248","--tx":"#e2e4eb","--tx2":"#9ca0b0","--ac":"#6c9fff","--ac2":"#4f7de8","--gn":"#4ade80","--rd":"#f87171","--gd":"#fbbf24"};

  return(
  <div style={{minHeight:"100vh",fontFamily:"'Segoe UI',system-ui,-apple-system,sans-serif",background:"var(--bg)",color:"var(--tx)",display:"flex",flexDirection:"column",...css,paddingBottom:mob?64:0,WebkitTextSizeAdjust:"100%"}}>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet"/>

    {/* ─── HEADER ─── */}
    <header style={{background:"linear-gradient(135deg,#141728,#1e2340)",borderBottom:"1px solid var(--bd)",padding:mob?"10px 12px":"10px 16px",display:"flex",alignItems:"center",gap:10,position:"sticky",top:0,zIndex:100}}>
      {tab==="notes"&&<button onClick={()=>setSb(!sb)} style={{background:"none",border:"none",color:"var(--tx)",fontSize:20,cursor:"pointer",padding:6,minWidth:36,minHeight:36,display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"}}>☰</button>}
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:mob?16:18,fontWeight:800,margin:0,background:"linear-gradient(135deg,#6c9fff,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",flex:1,whiteSpace:"nowrap"}}>HBY230 İş Hukuku</h1>
      {!mob&&<div style={{display:"flex",gap:2,background:"var(--sf)",borderRadius:8,padding:2}}>
        {tabs.map(([k,,l])=>(<button key={k} onClick={()=>setTab(k)} style={{padding:"7px 14px",borderRadius:6,border:"none",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit",background:tab===k?"var(--ac2)":"transparent",color:tab===k?"#fff":"var(--tx2)",transition:"all .15s",WebkitTapHighlightColor:"transparent"}}>{l}</button>))}
      </div>}
    </header>

    {/* ─── BODY ─── */}
    <div style={{display:"flex",flex:1,overflow:"hidden",position:"relative"}}>

      {/* Sidebar overlay on mobile */}
      {tab==="notes"&&sb&&(<>
        <div onClick={()=>setSb(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:90}}/>
        <aside style={{position:mob?"fixed":"relative",top:0,left:0,bottom:0,width:mob?280:240,minWidth:mob?280:240,background:"var(--sf)",borderRight:"1px solid var(--bd)",overflowY:"auto",padding:"12px 8px",zIndex:91,paddingTop:mob?16:12}}>
          <p style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--tx2)",margin:"0 8px 10px"}}>Bölümler</p>
          {N.map(b=>(<button key={b.id} onClick={()=>{setBol(b.id);setSb(false);}} style={{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"10px 10px",borderRadius:8,border:"none",cursor:"pointer",marginBottom:3,textAlign:"left",fontFamily:"inherit",background:bol===b.id?"rgba(108,159,255,.15)":"transparent",color:bol===b.id?"var(--ac)":"var(--tx2)",fontSize:13,fontWeight:bol===b.id?700:400,minHeight:44,WebkitTapHighlightColor:"transparent"}}><span style={{fontSize:18}}>{b.icon}</span><span style={{lineHeight:1.3}}>{b.title}</span></button>))}
        </aside>
      </>)}

      {/* Main */}
      <main ref={ref} style={{flex:1,overflowY:"auto",padding:mob?"16px 12px 24px":"20px 16px 40px",maxWidth:800,margin:"0 auto",width:"100%"}}>

        {/* NOTES */}
        {tab==="notes"&&bd&&(<div>
          <div style={{marginBottom:20}}><span style={{fontSize:mob?28:32}}>{bd.icon}</span><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:mob?19:22,fontWeight:800,margin:"4px 0 0",lineHeight:1.25}}>{bd.title}</h2></div>
          {bd.sections.map((s,i)=>(<div key={i} style={{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,padding:mob?"14px 12px":"16px 18px",marginBottom:10}}>
            <h3 style={{fontSize:mob?13:14,fontWeight:700,margin:"0 0 8px",color:"var(--ac)",lineHeight:1.3}}>{s.title}</h3>
            {s.content&&<p style={{fontSize:mob?12.5:13,lineHeight:1.7,margin:"0 0 4px"}}>{md(s.content)}</p>}
            {s.items&&<ul style={{margin:0,paddingLeft:14,listStyle:"none"}}>{s.items.map((it,j)=>(<li key={j} style={{fontSize:mob?12.5:13,lineHeight:1.6,padding:"2px 0",position:"relative",paddingLeft:12}}><span style={{position:"absolute",left:0,top:8,width:5,height:5,borderRadius:"50%",background:"var(--ac)",opacity:.5}}/>{md(it)}</li>))}</ul>}
          </div>))}
          <div style={{display:"flex",justifyContent:"space-between",marginTop:16,gap:8}}>
            {N.findIndex(b=>b.id===bol)>0?<button onClick={()=>setBol(N[N.findIndex(b=>b.id===bol)-1].id)} style={{padding:"10px 16px",borderRadius:8,border:"1px solid var(--bd)",background:"var(--sf)",color:"var(--tx)",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,minHeight:44,flex:1}}>← Önceki</button>:<div style={{flex:1}}/>}
            {N.findIndex(b=>b.id===bol)<N.length-1?<button onClick={()=>setBol(N[N.findIndex(b=>b.id===bol)+1].id)} style={{padding:"10px 16px",borderRadius:8,border:"none",background:"var(--ac2)",color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,minHeight:44,flex:1}}>Sonraki →</button>:<div style={{flex:1}}/>}
          </div>
        </div>)}

        {/* QUIZ */}
        {tab==="quiz"&&<Quiz questions={Q} label="Sınav Soruları" accent="var(--ac2)" gradStart="var(--ac2)" gradEnd="#7c3aed"/>}

        {/* PAST EXAMS */}
        {tab==="past"&&examSet==="pick"&&(<div style={{textAlign:"center",paddingTop:36}}>
          <span style={{fontSize:44}}>📝</span>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:800,margin:"10px 0 4px"}}>Çıkmış Sorular</h2>
          <p style={{color:"var(--tx2)",fontSize:13,marginBottom:24}}>Geçmiş sınav sorularını çöz</p>
          <div style={{display:"flex",flexDirection:"column",gap:10,alignItems:"center"}}>
            {[["e1","Çıkmış Sınav 1 (20 Soru)"],["e2","Çıkmış Sınav 2 (26 Soru)"],["e3","Çıkmış Sınav 3 (20 Soru)"],["e4","Çıkmış Sınav 4 (20 Soru)"]].map(([k,l]) => (
              <button key={k} onClick={()=>setExamSet(k)} style={{padding:"14px 24px",borderRadius:10,border:"1px solid var(--bd)",background:"var(--sf)",color:"var(--tx)",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,width:"100%",maxWidth:280,minHeight:48,WebkitTapHighlightColor:"transparent"}}>{l}</button>
            ))}
          </div>
        </div>)}
        {tab==="past"&&examSet==="e1"&&<div><button onClick={()=>setExamSet("pick")} style={{background:"none",border:"none",color:"var(--tx2)",cursor:"pointer",fontSize:12,marginBottom:8,padding:"4px 0",fontFamily:"inherit"}}>← Sınav Seçimine Dön</button><Quiz key="exam1" questions={E1} label="Çıkmış Sınav 1" accent="#f59e0b" gradStart="#f59e0b" gradEnd="#ef4444"/></div>}
        {tab==="past"&&examSet==="e2"&&<div><button onClick={()=>setExamSet("pick")} style={{background:"none",border:"none",color:"var(--tx2)",cursor:"pointer",fontSize:12,marginBottom:8,padding:"4px 0",fontFamily:"inherit"}}>← Sınav Seçimine Dön</button><Quiz key="exam2" questions={E2} label="Çıkmış Sınav 2" accent="#f59e0b" gradStart="#f59e0b" gradEnd="#ef4444"/></div>}
        {tab==="past"&&examSet==="e3"&&<div><button onClick={()=>setExamSet("pick")} style={{background:"none",border:"none",color:"var(--tx2)",cursor:"pointer",fontSize:12,marginBottom:8,padding:"4px 0",fontFamily:"inherit"}}>← Sınav Seçimine Dön</button><Quiz key="exam3" questions={E3} label="Çıkmış Sınav 3" accent="#f59e0b" gradStart="#f59e0b" gradEnd="#ef4444"/></div>}
        {tab==="past"&&examSet==="e4"&&<div><button onClick={()=>setExamSet("pick")} style={{background:"none",border:"none",color:"var(--tx2)",cursor:"pointer",fontSize:12,marginBottom:8,padding:"4px 0",fontFamily:"inherit"}}>← Sınav Seçimine Dön</button><Quiz key="exam4" questions={E4} label="Çıkmış Sınav 4" accent="#f59e0b" gradStart="#f59e0b" gradEnd="#ef4444"/></div>}

        {/* FLASHCARDS */}
        {tab==="flash"&&(<div style={{paddingTop:12}}>
          <div style={{textAlign:"center",marginBottom:16}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:mob?19:22,fontWeight:800,margin:"0 0 4px"}}>🃏 Akıl Kartları</h2>
            <p style={{color:"var(--tx2)",fontSize:12}}>{fcI+1} / {FC.length}</p>
          </div>
          <div onClick={()=>setFcF(!fcF)} style={{
            background:fcF?"linear-gradient(135deg,#1e3a5f,#1a2744)":"var(--sf)",
            border:`1px solid ${fcF?"var(--ac)":"var(--bd)"}`,
            borderRadius:16,padding:mob?"32px 18px":"40px 28px",minHeight:mob?180:200,
            display:"flex",alignItems:"center",justifyContent:"center",
            cursor:"pointer",transition:"all .3s",textAlign:"center",
            boxShadow:fcF?"0 0 30px rgba(108,159,255,.15)":"none",
            WebkitTapHighlightColor:"transparent",userSelect:"none"
          }}>
            <div>
              <p style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:fcF?"var(--ac)":"var(--tx2)",marginBottom:10}}>{fcF?"CEVAP":"SORU"}</p>
              <p style={{fontSize:mob?15:17,fontWeight:fcF?700:500,lineHeight:1.5,color:fcF?"var(--ac)":"var(--tx)",margin:0}}>{fcF?FC[fcI].b:FC[fcI].f}</p>
              {!fcF&&<p style={{fontSize:11,color:"var(--tx2)",marginTop:14}}>Cevabı görmek için dokun</p>}
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:16,gap:8}}>
            <button onClick={()=>{setFcI(Math.max(0,fcI-1));setFcF(false);}} disabled={fcI===0} style={{padding:"10px 14px",borderRadius:8,border:"1px solid var(--bd)",background:"var(--sf)",color:fcI===0?"var(--bd)":"var(--tx)",cursor:fcI===0?"default":"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,minHeight:44,flex:1,WebkitTapHighlightColor:"transparent"}}>← Önceki</button>
            <button onClick={()=>{setFcI(Math.floor(Math.random()*FC.length));setFcF(false);}} style={{padding:"10px 14px",borderRadius:8,border:"none",background:"var(--sf2)",color:"var(--tx2)",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,minHeight:44,WebkitTapHighlightColor:"transparent"}}>🔀</button>
            <button onClick={()=>{setFcI(Math.min(FC.length-1,fcI+1));setFcF(false);}} disabled={fcI===FC.length-1} style={{padding:"10px 14px",borderRadius:8,border:"none",background:"var(--ac2)",color:fcI===FC.length-1?"rgba(255,255,255,.3)":"#fff",cursor:fcI===FC.length-1?"default":"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,minHeight:44,flex:1,WebkitTapHighlightColor:"transparent"}}>Sonraki →</button>
          </div>
          <div style={{display:"flex",gap:3,justifyContent:"center",marginTop:14,flexWrap:"wrap"}}>
            {FC.map((_,i)=>(<div key={i} onClick={()=>{setFcI(i);setFcF(false);}} style={{width:mob?6:8,height:mob?6:8,borderRadius:"50%",background:i===fcI?"var(--ac)":"var(--bd)",cursor:"pointer",transition:"all .2s"}}/>))}
          </div>
        </div>)}

      </main>
    </div>

    {/* ─── MOBILE BOTTOM NAV ─── */}
    {mob&&(<nav style={{position:"fixed",bottom:0,left:0,right:0,background:"var(--sf)",borderTop:"1px solid var(--bd)",display:"flex",zIndex:100,paddingBottom:"env(safe-area-inset-bottom)"}}>
      {tabs.map(([k,ic,l])=>(<button key={k} onClick={()=>{setTab(k);if(k==="past")setExamSet("pick");}} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"8px 4px",border:"none",background:"transparent",color:tab===k?"var(--ac)":"var(--tx2)",cursor:"pointer",fontFamily:"inherit",fontSize:10,fontWeight:tab===k?700:500,WebkitTapHighlightColor:"transparent",minHeight:52}}>
        <span style={{fontSize:18}}>{ic}</span>
        <span>{l}</span>
      </button>))}
    </nav>)}
  </div>);
}
