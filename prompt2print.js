
function p2pLegalHTML(page,top){
const owner='ИП Скачкова Ольга Борисовна, ИНН 631503297299, ОГРНИП 318631300027236. Адрес: Самара, ул. Коммунистическая, д. 15, кв. 295.';
const notice='<div class="notice">Форма заказа передаёт имя, телефон, электронную почту и содержание заказа через Tilda. Загруженный покупателем исходник сохраняется в подключённом Яндекс.Диске, а визуальный макет из конструктора перед отправкой заказа сохраняется отдельным изображением в Cloudinary; ссылки на файлы включаются в заявку.</div>';
const contact='<a class="plain-link" href="mailto:olikns@mail.ru">olikns@mail.ru</a>';
const body=page==='consent'?`<h2>Согласие на обработку персональных данных</h2><p>Редакция от 24 сентября 2026 года. Сайт: prompt2print.tilda.ws.</p>${notice}<h3>Кому я даю согласие</h3><p>Я свободно, своей волей и в своём интересе даю согласие оператору: ${owner}</p><h3>Для чего и какие данные</h3><p>Согласие относится к сведениям, которые я указываю в форме: имя, номер телефона, электронная почта, город, адрес или пункт доставки, содержание заказа и комментария, а также персональные данные в добровольно приложенном макете. Цели — рассмотрение обращения, связь со мной, согласование макета, стоимости и доставки, подготовка и исполнение заказа.</p><h3>Какие действия разрешены</h3><p>Сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, блокирование, удаление и уничтожение данных с применением средств автоматизации и без них в пределах указанных целей. При отправке формы указанные сведения передаются оператору для рассмотрения и исполнения заказа.</p><h3>Срок и отзыв</h3><p>Согласие действует до достижения указанных целей или до его отзыва. Отозвать его можно письмом на ${contact} или по почтовому адресу оператора. После отзыва обработка прекращается и данные уничтожаются в предусмотренные законом сроки, если отсутствует иное законное основание для их обработки.</p><h3>Что не входит в согласие</h3><p>Рекламные рассылки, размещение моего фото или макета в публичном портфолио, распространение данных неограниченному кругу лиц и распознавание личности по фотографии этим согласием не разрешаются. Не загружаю паспортные, платёжные, медицинские сведения или чужие персональные данные без законного основания.</p><p>Галочка ставится мной самостоятельно. Ознакомление с условиями возврата оформляется отдельно.</p>`:
`<h2>Политика обработки персональных данных</h2><p>Редакция от 24 сентября 2026 года. Применяется к форме заказа и конструктору на prompt2print.tilda.ws.</p>${notice}<h3>1. Оператор и связь</h3><p>${owner}</p><p>По вопросам персональных данных, уточнения, удаления и отзыва согласия: ${contact}. По вопросам заказа: <a class="plain-link" href="mailto:prompt2print@mail.ru">prompt2print@mail.ru</a>.</p><h3>2. Какие сведения используются</h3><p>В форме предусмотрены имя, телефон, необязательная электронная почта, город, способ и необязательный адрес доставки, состав заказа, комментарий и добровольно приложенные изображения. Конструктор использует выбранное изображение и текст для показа наброска. Загруженные файлы не используются для установления личности.</p><h3>3. Цели и основания</h3><p>Данные предназначены для рассмотрения обращения, связи с покупателем, согласования макета, стоимости и доставки, подготовки и исполнения заказа. Обработка осуществляется при наличии применимого законного основания: согласия, действий по заключению или исполнению договора либо исполнения обязанностей, установленных законом. Отдельная галочка согласия не означает подписку на рекламу.</p><h3>4. Как работает текущая версия</h3><p>До нажатия кнопки отправки сведения формы, выбранные файлы и наброски находятся в памяти открытой страницы. Кнопка проверки создаёт локальный черновик. После нажатия «Отправить заказ на согласование» имя, телефон, электронная почта и текст заказа передаются через подключённую форму Tilda. Если пользователь загрузил исходник через поле Tilda, он сохраняется в подключённом Яндекс.Диске. Для дизайна, созданного в конструкторе, сайт формирует PNG-набросок с выбранным расположением принта и перед отправкой заказа загружает его в Cloudinary, после чего ссылка на изображение добавляется в заявку. Скачанный пользователем PNG хранится на его устройстве до самостоятельного удаления.</p><p>При открытии сайта браузер обращается к инфраструктуре Tilda для загрузки страницы и изображений. Это сопровождается передачей технических сведений, необходимых для соединения, в том числе IP-адреса. Сведения заказа передаются отдельно только после действия пользователя по отправке формы.</p><h3>5. Доступ, передача и хранение</h3><p>Содержание заявки передаётся через инфраструктуру Tilda подключённому оператором получателю электронной почты. Исходные файлы могут храниться в Яндекс.Диске, а визуальные макеты — в Cloudinary для получения ссылки на изображение. Данные не передаются службам доставки или платёжным системам автоматически. Если для исполнения заказа потребуется передача данных службе доставки, объём и способ такой передачи определяются при согласовании заказа.</p><p>Для обращений, которые покупатель самостоятельно направляет оператору по электронной почте или телефону, данные используются в пределах обращения и исполнения заказа. Срок хранения определяется целью обработки и обязательными сроками, установленными законодательством; после их окончания данные подлежат удалению или уничтожению при отсутствии других законных оснований.</p><h3>6. Права пользователя</h3><p>Можно запросить сведения об обработке, уточнение, блокирование или удаление данных, отозвать согласие и обжаловать действия оператора в Роскомнадзор или суд. Для обращения достаточно написать на указанный выше адрес с описанием запроса; не отправляйте лишние идентификационные документы без необходимости.</p><h3>7. Защита и ограничения</h3><p>Не предоставляйте доступ к заполненной странице посторонним. Для удаления локального черновика обновите или закройте страницу. Загруженные к заказу файлы сохраняются в подключённом облачном хранилище оператора. Не указывайте в комментарии сведения, не нужные для заказа, и загружайте только материалы, которые вправе использовать. Оператор применяет необходимые организационные и технические меры защиты в отношении фактически используемых систем.</p>`;
return top(page==='consent'?'Согласие на обработку данных':'Персональные данные','Понятно о данных, которые нужны для твоего заказа.')+`<section class="section"><div class="wrap faq legal-copy">${body}<div class="actions"><a class="btn" href="#order">Вернуться к заказу</a><a class="btn light" href="#${page==='consent'?'privacy':'consent'}">${page==='consent'?'Политика обработки данных':'Отдельный текст согласия'}</a></div></div></section>`;
}


(()=>{'use strict';
const root=document.getElementById('p2p'),main=root.querySelector('main');

root.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
const products=[
{id:'tshirt',name:'Футболки',single:'Футболка с твоим принтом',desc:'Белая или чёрная. Фото, рисунок или фраза, которую поймут свои.',price:'990 ₽',specs:[['Цвет','Белый / чёрный / другие цвета по согласованию'],['Состав ткани','Белая: 50% хлопок / 50% полиэстер · Чёрная: 100% хлопок'],['Модель','Унисекс'],['Размер','Подберём при согласовании']],text:'Футболка для подарка, поездки, команды или просто для себя. На белых футболках используем сублимацию, на чёрных — DTF. Размер, цвет и размещение рисунка согласуем до печати.'},
{id:'mug',name:'Кружки',single:'Кружка с твоим принтом',desc:'Тёплая история к утреннему кофе. С любимым фото или надписью.',price:'450 ₽',specs:[['Дизайн','Фото, рисунок, надпись'],['Количество','От 1 штуки']],text:'Личное поздравление, семейное фото или шутка, которая улучшает утро. Подготовим макет с учётом формы кружки и покажем его до печати.'},
{id:'bottle',name:'Бутылки',single:'Бутылка с твоим принтом',desc:'Своя бутылка для прогулок, тренировок и маленьких приключений.',price:'550 ₽',specs:[['Объём','600 мл'],['Дизайн','Индивидуальный']],text:'Добавим имя, рисунок или логотип. Размещение принта и доступную основу покажем при согласовании макета.'},
{id:'socks',name:'Носки',single:'Носки с твоим принтом',desc:'Маленький подарок с большим характером. Для тех, у кого всё есть.',price:'390 ₽',specs:[['Цвет','Белый'],['Длина','Средняя'],['Размеры','35–38 / 41–44'],['Принт','На заказ']],text:'Любимая мордочка, короткая фраза или маленький рисунок. Подберём размещение под форму носка и согласуем макет.'},
{id:'sweatshirt',name:'Толстовки',single:'Толстовка с твоим принтом',desc:'Белая или чёрная толстовка с твоим дизайном. Для себя, подарка или команды.',price:'2 900 ₽',specs:[['Цвет','Белый / чёрный'],['Размеры','46–58'],['Печать','Белая — сублимация · Чёрная — DTF'],['Принт','Спереди / сзади / с обеих сторон']],text:'На белых толстовках используем сублимацию, на чёрных — DTF. Можно сделать принт спереди, сзади или с обеих сторон. Размер, цвет и расположение рисунка согласуем до печати.'},
{id:'dtf',name:'DTF-наклейки',single:'DTF-термонаклейка',desc:'Твой рисунок для переноса на одежду. Подготовим макет для печати.',price:'По макету',specs:[['Метод','DTF'],['Максимальный макет','30 × 35 см']],text:'Напечатаем рисунок на плёнке для термопереноса. Стоимость зависит от размера и количества. Проверим тонкие линии и объясним, как перенести принт на вещь.'},
{id:'bag',name:'Шопперы',single:'Шоппер с твоим принтом',desc:'Носи с собой любимую фразу, рисунок или логотип.',price:'По запросу',specs:[['Основа и цвет','Уточняем при заказе'],['Дизайн','Индивидуальный']],text:'Обсудим основу, размер принта и количество. Итоговую стоимость подтвердим после выбора шоппера и согласования макета.'},
{id:'coloring',name:'Раскраска из фото',single:'Персональная раскраска из ваших фотографий',desc:'10 любимых фотографий превратятся в настоящую персональную раскраску.',price:'от 300 ₽',specs:[['Страницы','10 раскрасок А4'],['Обложка','Цветная персональная'],['Печатная версия','400 ₽'],['Электронный PDF','300 ₽'],['Книга + PDF','450 ₽']],text:'Пришли 10 фотографий, а мы превратим каждую в отдельную страницу-раскраску. Можно заказать готовую книжку с цветной обложкой и переплётом, электронный PDF для самостоятельной печати или оба варианта вместе.'}
];
const steps=[['Оставь заказ на сайте','Выбери изделие, количество и опиши свою идею.'],['Согласуем макет','Проверим файл, размер, размещение и стоимость.'],['Оплати заказ','После согласования подтвердим способ оплаты и реквизиты.'],['Получай свою вещь','Напечатаем и отправим выбранной службой доставки.']];
const faq=[['Как заказать напрямую?','Заполни форму на этом сайте: товар, количество, идея и контакты. Сначала согласуем макет и стоимость, затем перейдём к оплате и изготовлению.'],['Можно ли вернуть индивидуальный заказ?','Качественное изделие с индивидуальными свойствами, которым может пользоваться только конкретный покупатель, не подлежит возврату по причине «передумал». Если обнаружился брак или ошибка в исполнении, свяжись с нами. Подробнее — в разделе «Обмен и возврат».'],['Можно заказать одну штуку?','Да. Делаем персональные подарки от одной штуки, а также небольшие тиражи для команд.'],['У меня нет готового макета. Что делать?','Достаточно фотографии, текста или описания идеи. Поможем понять, как это будет смотреться на изделии.'],['Когда нужно оплачивать заказ?','Сначала согласуем макет, изделие и стоимость. Затем подтвердим способ оплаты. Печать начинаем после согласования всех деталей.'],['Сколько занимает изготовление?','Обработка заказа занимает 1–2 рабочих дня. Срок изготовления подтвердим при согласовании макета, а ориентир доставки — 3–5 рабочих дней в зависимости от города и службы.'],['Картинка из конструктора сразу пойдёт в печать?','Нет. Конструктор помогает показать идею. Перед изготовлением мы проверим исходное изображение, размер, расположение и цвет, затем согласуем окончательный макет.'],['Можно сделать принт для команды?','Да. Напиши, какие нужны вещи, сколько штук и к какой дате. Обсудим макет и рассчитаем тираж.']];
function catalog(){return products.map((p,i)=>`<a class="product" href="#product/${p.id}"><span class="num">${String(i+1).padStart(2,'0')} / ТВОЙ ДИЗАЙН</span><h3>${p.name}</h3><p>${p.desc}</p><span class="bottom"><span>${p.price}</span><span class="round" aria-hidden="true">↗</span></span></a>`).join('')}
function renderSteps(){return steps.map((s,i)=>`<article class="step"><span class="count">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}
function renderFaq(){return faq.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}
function top(title,text){return `<section class="page-top"><div class="wrap"><div class="crumb"><a href="#home">Главная</a> / ${title}</div><h1>${title}</h1><p>${text}</p></div></section>`}
function contactCard(){return `<div class="info-box"><h3>Мы на связи</h3><p><a href="tel:+79171040338">+7 (917) 104-03-38</a><br><a href="mailto:prompt2print@mail.ru">prompt2print@mail.ru</a></p><p>Самара, ул. Фрунзе, 14.<br>Перед визитом договорись с нами о времени.</p><div class="actions"><a class="btn" href="#order">Заказать на сайте ↗</a></div><p class="micro">Вопросы по макету, доставке и заказу можно обсудить напрямую с нами.</p></div>`}
let studioDraft=null;
const CLOUDINARY_CLOUD_NAME='phhcih47';
const CLOUDINARY_UPLOAD_PRESET='prompt2print_mockups';
let orderDraft={items:[{product:'tshirt',quantity:1,details:''}],name:'',phone:'',email:'',contactMethod:'Telegram',contactValue:'',city:'',delivery:'Уточнить при согласовании',address:'',comment:'',file:null,cloudFiles:[],mockupLink:'',consent:false,privacyConsent:false};
let cleanStudio=null;
function tshirtDetails(){
const whiteRows=[
['3XS (40)','44','60'],['2XS (42)','45','63,8'],['XS (44)','48','67'],['S (46)','49','68'],
['M (48)','50,5','68'],['L (50)','53','70'],['XL (52)','55','71'],['2XL (54)','57,3','73'],
['3XL (56)','58,5','75'],['4XL (58)','61,5','75,5'],['5XL (60)','62','76,5'],['6XL (62)','64,5','76,5'],
['7XL (64)','66','76,5'],['8XL (66)','69,5','77,5'],['9XL (68)','70,5','78,5'],['10XL (70)','73','80,5']
];
const blackRows=[
['3XS (40)','44','60'],['2XS (42)','45','64'],['XS (44)','48','67'],['S (46)','49','68'],
['M (48)','50','69'],['L (50)','53','70'],['XL (52)','55','71'],['2XL (54)','58','73'],['3XL (56)','59','75']
];
const table=rows=>`<div class="size-table-wrap"><table class="size-table"><thead><tr><th>Размер</th><th>Ширина по пройме, см</th><th>Длина, см</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>`;
return `<div class="tshirt-choice" role="tablist" aria-label="Цвет футболки"><button type="button" class="active" data-shirt-tab="white">Белая футболка</button><button type="button" data-shirt-tab="black">Чёрная футболка</button></div>
<div class="tshirt-panel" data-shirt-panel="white">
<div class="tshirt-facts"><div class="tshirt-fact"><small>Состав</small><b>50% хлопок / 50% полиэстер</b></div><div class="tshirt-fact"><small>Печать</small><b>Сублимация</b></div><div class="tshirt-fact"><small>Максимальный принт</small><b>А4</b></div></div>
<p>Печать возможна спереди, сзади или с обеих сторон. Размер футболки согласуем перед изготовлением.</p>
<h3 style="margin-top:28px">Размерная таблица белой футболки</h3>${table(whiteRows)}
<div class="measure-help"><b>Как измерить:</b> ширину измеряем по линии проймы от края до края, длину от верхней точки плеча до низа изделия. Допустимое отклонение размеров 1–2 см.</div>
</div>
<div class="tshirt-panel" data-shirt-panel="black" hidden>
<div class="tshirt-facts"><div class="tshirt-fact"><small>Состав</small><b>100% хлопок</b></div><div class="tshirt-fact"><small>Печать</small><b>DTF</b></div><div class="tshirt-fact"><small>Максимальный принт</small><b>30 × 30 см</b></div></div>
<p>Печать возможна спереди, сзади или с обеих сторон. Размер футболки согласуем перед изготовлением.</p>
<h3 style="margin-top:28px">Размерная таблица чёрной футболки</h3>${table(blackRows)}
<div class="measure-help"><b>Как измерить:</b> ширину измеряем по линии проймы от края до края, длину от верхней точки плеча до низа изделия. Допустимое отклонение размеров 1–2 см.</div>
</div>
<div class="work-note"><b>Примеры наших работ</b><br>У нас уже есть реальные фотографии белых и чёрных футболок с персональными, корпоративными и фотопринтами. Следующим шагом добавим их сюда галереей, чтобы фотографии можно было потом легко менять и дополнять.</div>`;
}
function sweatshirtDetails(){
const rows=[
['S · 46-176','51','64','13','67'],
['M · 48-182','53','64','13,5','69'],
['L · 50-182','55','64','14','71'],
['XL · 52-182','57','64,5','14,5','71'],
['2XL · 54-188','59','69,5','15','73,5'],
['3XL · 56-188','61','70','15,5','74'],
['4XL · 58-188','62,5','67','16','74']
];
const table=()=>`<div class="size-table-wrap"><table class="size-table">
<thead><tr><th>Размер</th><th>Ширина груди, см</th><th>Длина рукава с манжетом, см</th><th>Ширина плеча, см</th><th>Длина по спинке с поясом, см</th></tr></thead>
<tbody>${rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody>
</table></div>`;

return `<div class="tshirt-choice" role="tablist" aria-label="Цвет толстовки">
<button type="button" class="active" data-shirt-tab="white">Белая толстовка</button>
<button type="button" data-shirt-tab="black">Чёрная толстовка</button>
</div>

<div class="tshirt-panel" data-shirt-panel="white">
<div class="tshirt-facts">
<div class="tshirt-fact"><small>Цвет</small><b>Белый</b></div>
<div class="tshirt-fact"><small>Печать</small><b>Сублимация</b></div>
<div class="tshirt-fact"><small>Максимальный принт</small><b>А4</b></div>
</div>
<p>На белой толстовке используем сублимацию. Печать возможна спереди, сзади или с обеих сторон.</p>
<h3 style="margin-top:28px">Размерная таблица белой толстовки</h3>
${table()}
<div class="measure-help"><b>Допустимое отклонение:</b> 1–2 см. Размер толстовки согласуем перед изготовлением.</div>
</div>

<div class="tshirt-panel" data-shirt-panel="black" hidden>
<div class="tshirt-facts">
<div class="tshirt-fact"><small>Цвет</small><b>Чёрный</b></div>
<div class="tshirt-fact"><small>Печать</small><b>DTF</b></div>
<div class="tshirt-fact"><small>Максимальный принт</small><b>30 × 30 см</b></div>
</div>
<p>На чёрной толстовке используем DTF-печать. Печать возможна спереди, сзади или с обеих сторон.</p>
<h3 style="margin-top:28px">Размерная таблица чёрной толстовки</h3>
${table()}
<div class="measure-help"><b>Допустимое отклонение:</b> 1–2 см. Размер толстовки согласуем перед изготовлением.</div>
</div>`;
}

function initTshirtTabs(){
const buttons=[...root.querySelectorAll('[data-shirt-tab]')],panels=[...root.querySelectorAll('[data-shirt-panel]')];
buttons.forEach(btn=>btn.onclick=()=>{buttons.forEach(b=>b.classList.toggle('active',b===btn));panels.forEach(p=>p.hidden=p.dataset.shirtPanel!==btn.dataset.shirtTab)});
}
function dataUrlToBlob(dataUrl){
const parts=String(dataUrl||'').split(',');
if(parts.length<2)throw new Error('Макет не создан');
const m=parts[0].match(/data:([^;]+);base64/i);
const mime=m?m[1]:'image/png';
const bin=atob(parts[1]),bytes=new Uint8Array(bin.length);
for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
return new Blob([bytes],{type:mime});
}
async function uploadMockupToCloudinary(design,index,total){
if(design.cloudinaryUrl)return design.cloudinaryUrl;
if(!design.preview)throw new Error('Нет изображения макета');
const blob=dataUrlToBlob(design.preview);
const fd=new FormData();
fd.append('file',blob,'prompt2print-mockup-'+(index+1)+'.png');
fd.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
const response=await fetch('https://api.cloudinary.com/v1_1/'+encodeURIComponent(CLOUDINARY_CLOUD_NAME)+'/image/upload',{
method:'POST',
body:fd
});
let data={};
try{data=await response.json()}catch(e){}
if(!response.ok||!data.secure_url){
const message=data&&data.error&&data.error.message?data.error.message:'Cloudinary не принял макет';
throw new Error(message);
}
design.cloudinaryUrl=data.secure_url;
return data.secure_url;
}
async function uploadOrderMockups(){
const designs=orderDraft.items.map(i=>i.design).filter(d=>d&&d.preview);
if(!designs.length)return [];
const urls=[];
for(let i=0;i<designs.length;i++){
const status=root.querySelector('#order-send-status');
if(status)status.textContent='Сохраняем макет покупателя в облаке… '+(i+1)+'/'+designs.length;
urls.push(await uploadMockupToCloudinary(designs[i],i,designs.length));
}
return urls;
}

const TSHIRT_GALLERY=["https://static.tildacdn.com/tild3539-3034-4836-b434-313334626239/_ChatGPT_27__2026__1.png", "https://static.tildacdn.com/tild3033-3232-4332-a161-306132656461/image-01-10-26-12-32.png", "https://static.tildacdn.com/tild3862-3337-4532-b637-386232383964/image-01-10-26-12-32.png", "https://static.tildacdn.com/tild6135-3464-4361-a539-306562616433/image-01-10-26-12-32.png", "https://static.tildacdn.com/tild3537-3238-4262-b133-353166343232/_ChatGPT_29__2026__1.png", "https://static.tildacdn.com/tild6461-3333-4037-a262-643730386632/_ChatGPT_29__2026__1.png", "https://static.tildacdn.com/tild3631-3133-4332-b133-663034386165/_ChatGPT_29__2026__1.png", "https://static.tildacdn.com/tild6235-3932-4030-a263-323732353263/couple_prints_1x1.jpg", "https://static.tildacdn.com/tild6166-3230-4133-a163-353965643065/kids_black_1x1.jpg", "https://static.tildacdn.com/tild3632-3761-4233-a464-316337623739/kids_cat_1x1.jpg"];
const COLORING_GALLERY=["https://static.tildacdn.com/tild6231-6439-4463-b131-333565346531/a3ad88b0-8d7f-4b52-8.png", "https://static.tildacdn.com/tild3063-3239-4433-b332-336633643734/a639893c-fdff-4314-b.png", "https://static.tildacdn.com/tild3962-6333-4536-b362-363364353632/9ed7665a-0d2f-43b0-8.png", "https://static.tildacdn.com/tild6234-6461-4532-a239-646463393136/34eabe1d-78d8-4e43-a.png", "https://static.tildacdn.com/tild3736-6433-4337-b936-336166373764/4ccba56d-e388-4d26-a.png"];

const SWEATSHIRT_GALLERY=["https://static.tildacdn.com/tild3463-3263-4435-b438-646261656163/_ChatGPT_5__2026__16.png", "https://static.tildacdn.com/tild3162-6161-4432-b932-663433633563/_ChatGPT_5__2026__16.png", "https://static.tildacdn.com/tild3566-3066-4665-b533-396232353839/_ChatGPT_5__2026__16.png", "https://static.tildacdn.com/tild6136-3861-4666-b134-306337653566/_ChatGPT_5__2026__16.png", "https://static.tildacdn.com/tild6639-3838-4630-a630-346532303737/_ChatGPT_5__2026__16.png"];
const MUG_GALLERY=["https://static.tildacdn.com/tild6261-3865-4638-b135-313834623638/_ChatGPT_7__2026__20.png", "https://static.tildacdn.com/tild3231-3766-4333-b739-336438316163/_ChatGPT_7__2026__20.png", "https://static.tildacdn.com/tild3134-3964-4266-b135-376364653365/_ChatGPT_7__2026__20.png"];
const BOTTLE_GALLERY=["https://static.tildacdn.com/tild3638-3861-4239-b230-353065616234/_ChatGPT_11__2026__1.png", "https://static.tildacdn.com/tild6437-3230-4663-b066-343433633938/_ChatGPT_11__2026__1.png", "https://static.tildacdn.com/tild3838-6235-4234-b532-323661653537/_ChatGPT_11__2026__1.png"];
function productGalleryCard(prefix,images,altText){
 return `<div class="product-title-card" style="padding:0;background:#fff;display:block">
   <div style="position:relative;background:#fff;border-radius:20px;overflow:hidden">
     <img id="${prefix}-gallery-main" src="${images[0]}" alt="${altText}" style="display:block;width:100%;aspect-ratio:1/1;object-fit:contain;background:#fff">
     <button type="button" id="${prefix}-gallery-prev" aria-label="Предыдущее фото" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.92);font-size:30px;line-height:1;cursor:pointer;box-shadow:0 3px 14px rgba(0,0,0,.12)">‹</button>
     <button type="button" id="${prefix}-gallery-next" aria-label="Следующее фото" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.92);font-size:30px;line-height:1;cursor:pointer;box-shadow:0 3px 14px rgba(0,0,0,.12)">›</button>
   </div>
   <div id="${prefix}-gallery-thumbs" style="display:flex;gap:8px;margin-top:10px;overflow-x:auto;padding:2px 1px 6px;scrollbar-width:thin">
     ${images.map((src,i)=>`<button type="button" data-gallery-index="${i}" aria-label="Фото ${i+1}" style="flex:0 0 23%;padding:0;border:2px solid ${i===0?'#00a8b5':'#e2e8ee'};border-radius:10px;overflow:hidden;background:#fff;cursor:pointer"><img src="${src}" alt="${altText} ${i+1}" style="display:block;width:100%;aspect-ratio:1/1;object-fit:cover"></button>`).join('')}
   </div>
   <p class="micro" style="margin:7px 2px 0">Нажми на фото или листай стрелками</p>
 </div>`;
}

function initProductGallery(prefix,images){
 const image=root.querySelector('#'+prefix+'-gallery-main');
 const strip=root.querySelector('#'+prefix+'-gallery-thumbs');
 if(!image||!strip||!images.length)return;
 const thumbs=[...strip.querySelectorAll('[data-gallery-index]')];
 let index=0;
 const set=n=>{
   index=(n+images.length)%images.length;
   image.src=images[index];
   thumbs.forEach((b,i)=>b.style.borderColor=i===index?'#00a8b5':'#e2e8ee');
   const active=thumbs[index];
   if(active){
     /* На телефоне двигаем только ленту миниатюр.
        scrollIntoView раньше мог прокручивать всю страницу и
        оставлять главное фото наполовину за верхней границей экрана. */
     const target=active.offsetLeft-(strip.clientWidth-active.clientWidth)/2;
     strip.scrollTo({left:Math.max(0,target),behavior:'smooth'});
   }
 };
 thumbs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));
 const prev=root.querySelector('#'+prefix+'-gallery-prev');
 const next=root.querySelector('#'+prefix+'-gallery-next');
 if(prev)prev.addEventListener('click',()=>set(index-1));
 if(next)next.addEventListener('click',()=>set(index+1));
}

function route(){if(cleanStudio){cleanStudio();cleanStudio=null}let page=location.hash.slice(1)||'home';root.querySelector('nav').classList.remove('open');root.querySelector('#menu-toggle').setAttribute('aria-expanded','false');root.querySelectorAll('nav a').forEach(a=>a.setAttribute('aria-current',a.hash===location.hash?'page':'false'));
if(page==='home'){main.innerHTML=root.querySelector('#home-template').innerHTML;main.querySelector('[data-catalog]').innerHTML=catalog();main.querySelector('[data-steps]').innerHTML=renderSteps();main.querySelector('[data-faq]').innerHTML=renderFaq()}
else if(page==='catalog'){main.innerHTML=top('Выбери основу для идеи','Принты под заказ. Каждый макет согласуем до печати.')+`<section class="section"><div class="wrap"><div class="catalog">${catalog()}</div><div class="notice">Итоговая стоимость заказа зависит от выбранного изделия, размера принта, количества и доставки. Подтвердим её до оплаты.</div></div></section>`}
else if(page.startsWith('product/')){const p=products.find(x=>x.id===page.split('/')[1]);if(!p){location.hash='catalog';return}main.innerHTML=top(p.single,'Начнём с твоей идеи. До покупки согласуем макет и все детали.')+`<section class="section"><div class="wrap product-detail">${p.id==='tshirt'
?productGalleryCard('tshirt',TSHIRT_GALLERY,'Футболки с индивидуальным принтом Prompt2Print')
:p.id==='coloring'
?productGalleryCard('coloring',COLORING_GALLERY,'Персональная раскраска из фотографий Prompt2Print')
:p.id==='sweatshirt'
?productGalleryCard('sweatshirt',SWEATSHIRT_GALLERY,'Толстовки с индивидуальным принтом Prompt2Print')
:p.id==='mug'
?productGalleryCard('mug',MUG_GALLERY,'Кружки с индивидуальным принтом Prompt2Print')
:p.id==='bottle'
?productGalleryCard('bottle',BOTTLE_GALLERY,'Бутылки с индивидуальным принтом Prompt2Print')
:`<div class="product-title-card"><div class="eyebrow">Принт под заказ</div><b>Твоя идея.<br>На ${p.id==='mug'?'кружке':p.id==='bottle'?'бутылке':p.id==='socks'?'носках':p.id==='sweatshirt'?'толстовке':p.id==='bag'?'шоппере':'плёнке'}.</b><span>Каждый принт уникален ↗</span></div>`}<div><h2>${p.single}</h2><p class="price">${p.price}</p><p style="color:var(--muted)">${p.text}</p><div class="specs">${p.specs.map(s=>`<div><span>${s[0]}</span>${s[1]}</div>`).join('')}</div>${['tshirt','sweatshirt'].includes(p.id)?`<div class="actions" style="margin:8px 0 26px"><a class="btn" href="#studio/${p.id}">Примерить свой принт ↗</a><a class="btn yellow" href="#order/${p.id}">Заказать на сайте ↗</a></div>`:''}${p.id==='tshirt'?tshirtDetails():p.id==='sweatshirt'?sweatshirtDetails():''}<div class="notice"><b>Заказ на сайте. Макет до печати.</b><br>Уточним основу, размер и стоимость, покажем результат до печати.</div>${!['tshirt','sweatshirt'].includes(p.id)?`<div class="actions">${['bottle','bag'].includes(p.id)?`<a class="btn" href="#studio/${p.id}">Примерить свой принт ↗</a>`:''}<a class="btn yellow" href="#order/${p.id}">Заказать на сайте ↗</a></div>`:''}<p class="micro" style="margin-top:16px">Итоговую стоимость подтвердим после проверки макета и деталей заказа.</p></div></div></section>`;if(p.id==='tshirt'){initProductGallery('tshirt',TSHIRT_GALLERY);initTshirtTabs()}if(p.id==='sweatshirt'){initProductGallery('sweatshirt',SWEATSHIRT_GALLERY);initTshirtTabs()}if(p.id==='coloring')initProductGallery('coloring',COLORING_GALLERY);if(p.id==='mug')initProductGallery('mug',MUG_GALLERY);if(p.id==='bottle')initProductGallery('bottle',BOTTLE_GALLERY)}
else if(page==='how'){main.innerHTML=top('Как заказать','Четыре простых шага. Оплата после согласования макета.')+`<section class="section"><div class="wrap"><div class="steps">${renderSteps()}</div><div class="info-grid" style="margin-top:50px"><div class="info-box"><h3>Что прислать для макета</h3><ul><li>Какой товар нужен и сколько штук.</li><li>Фото или рисунок в исходном качестве.</li><li>Текст без сокращений, если он нужен.</li><li>Цвет, размер изделия и желаемое размещение.</li><li>К какой дате нужен заказ.</li></ul></div><div class="info-box"><h3>Хочешь показать, как задумано?</h3><p>Собери пример в конструкторе: добавь изображение и надпись, подбери положение и прикрепи набросок к заказу.</p><div class="actions"><a class="btn" href="#studio">Открыть конструктор ↗</a></div></div></div></div></section><section class="section soft"><div class="wrap faq">${renderFaq()}</div></section>`}
else if(page==='business'){main.innerHTML=top('Мерч для своей команды','Небольшие тиражи для кафе, фитнес-студий, школ, лагерей, мероприятий и других организаций.')+`<section class="section"><div class="wrap"><div class="business"><div><div class="eyebrow">Общее дело. Свой принт.</div><h2>Не просто логотип.<br>Чувство команды.</h2><p>Подберём изделие и размещение принта под задачу компании. Можно начать с тестового экземпляра, а затем заказать тираж.</p><div class="actions"><a class="btn yellow" href="#order">Рассчитать мой заказ ↗</a></div></div><div class="tags"><span class="tag">Кафе</span><span class="tag">Школы</span><span class="tag">Фитнес</span><span class="tag">Лагеря</span><span class="tag">События</span><span class="tag">Компании</span></div></div>

<div class="notice" style="margin-top:30px"><b>Работаем с ИП и юридическими лицами</b><br>Безналичный расчёт • Договор • УПД • УСН • НДС 5%</div>

<div class="info-grid" style="margin-top:30px">
<div class="info-box"><h3>Документы и оплата</h3><p>Принимаем оплату по безналичному расчёту. Для корпоративных заказов заключаем договор и предоставляем закрывающие документы, включая УПД.</p><p><b>Налоговый режим:</b> УСН.<br><b>НДС:</b> 5%.</p></div>
<div class="info-box"><h3>Для расчёта тиража</h3><ul><li>Вид изделия и количество.</li><li>Цвета и размеры.</li><li>Логотип, текст или идея.</li><li>Желаемые размер и место принта.</li><li>Дата и город получения.</li></ul></div>
<div class="info-box"><h3>Сначала покажем макет</h3><p>Согласуем дизайн и стоимость до запуска. Изготовление тестового экземпляра и срок тиража обсуждаются отдельно.</p><p>Если точного дизайна пока нет, достаточно описать задачу: для кого нужен мерч, сколько изделий и как их будут использовать.</p></div>
<div class="info-box"><h3>Корпоративные заказы</h3><p>Изготавливаем продукцию с индивидуальным дизайном для сотрудников, клиентов, мероприятий, школ, лагерей, кафе, фитнес-студий и других организаций.</p><p>Работаем как с небольшими заказами, так и с тиражами.</p></div>
</div></div></section>`}
else if(page==='delivery'){main.innerHTML=top('Доставка и оплата','От твоей идеи до посылки в руках. Стоимость и детали подтвердим до оплаты.')+`<section class="section"><div class="wrap info-grid"><div class="info-box"><h3>Курьером по Самаре</h3><p>При заказе от 5 000 ₽ доставка по городу бесплатная. Для заказов на меньшую сумму стоимость рассчитывается по тарифам Яндекс Доставки.</p><p>За пределами города согласуем стоимость и срок по адресу получателя.</p></div><div class="info-box"><h3>В удобный пункт выдачи</h3><p>Отправляем через СДЭК, «Озон Посылку» и «ВБ Посылку». Укажи город и удобный пункт: подтвердим доступность и стоимость отправки до оплаты.</p><p class="micro">Заказ оформляется у нас на сайте. Пункты выдачи используются только для получения посылки.</p></div><div class="info-box"><h3>Почтой России</h3><p>Отправляем заказы в регионы России. Стоимость и срок зависят от адреса и рассчитываются по тарифам Почты России.</p></div><div class="info-box"><h3>Когда ждать заказ</h3><p>Обработка занимает 1–2 рабочих дня. Срок изготовления согласуем отдельно после проверки макета.</p><p>Ориентир доставки — 3–5 рабочих дней. Точный срок зависит от направления и выбранной службы. Если подарок нужен к определённой дате, укажи её в комментарии.</p></div><div class="info-box"><h3>Оплата после согласования</h3><p>Сначала согласуем изделие, макет, итоговую стоимость и доставку. После подтверждения заказа можно оплатить банковским переводом по реквизитам.</p><p>Все расчёты в рублях. Оплата картой непосредственно на сайте пока не подключена. Способ оплаты подтвердим после согласования заказа.</p></div><div class="info-box"><h3>Для организаций</h3><p>Для юридических лиц предусмотрен безналичный расчёт при оформлении договора. Напиши реквизиты организации и состав заказа, чтобы мы подготовили документы.</p></div></div><div class="wrap actions"><a href="#order" class="btn">Оформить заказ ↗</a><a href="#returns" class="btn light">Обмен и возврат</a></div></section>`}
else if(page==='returns'){main.innerHTML=top('Обмен и возврат','Каждый принт создаётся по твоей идее. Поэтому внимательно проверяем макет вместе до печати.')+`<section class="section"><div class="wrap faq"><h2>Изделия с индивидуальным дизайном</h2><p style="margin-top:22px">Товар надлежащего качества с индивидуально-определёнными свойствами не подлежит возврату, если он может использоваться исключительно тем покупателем, для которого изготовлен. Это условие предусмотрено пунктом 4 статьи 26.1 Закона РФ «О защите прав потребителей».</p><p style="margin-top:18px">Перед печатью проверь размер и цвет изделия, текст, изображение и расположение принта. Если что-то хочется изменить, сообщи при согласовании макета.</p><div class="notice"><b>Если обнаружился недостаток</b><br>Индивидуальный дизайн не отменяет права покупателя при браке или несоответствии заказа согласованным условиям. Напиши нам, опиши проблему и по возможности приложи фотографии. Рассмотрим обращение и решим вопрос в соответствии с законом.</div><p style="margin-top:22px">Для товаров без таких индивидуальных свойств применяются общие правила дистанционной продажи. Права покупателя сохраняются в полном объёме.</p><div class="actions"><a class="btn" href="mailto:prompt2print@mail.ru">Написать о заказе</a><a class="btn light" href="#contacts">Контакты продавца</a></div></div></section>`}
else if(page==='contacts'){main.innerHTML=top('Мы рядом с твоей идеей','Вопросы о макете, изделиях и доставке решаем напрямую.')+`<section class="section"><div class="wrap info-grid">${contactCard()}<div class="info-box"><h3>Реквизиты продавца</h3><p>ИП Скачкова Ольга Борисовна<br>ИНН 631503297299<br>ОГРНИП 318631300027236</p><p>Юридический и почтовый адрес:<br>Самара, ул. Коммунистическая, д. 15, кв. 295.</p><details><summary>Банковские реквизиты</summary><p>Р/с 40802810754400038153<br>ПОВОЛЖСКИЙ БАНК ПАО СБЕРБАНК<br>БИК 043601607<br>К/с 30101810200000000607</p></details><p class="micro">Назначение платежа и итоговую сумму подтвердим после согласования заказа. Не оплачивай заказ до подтверждения.</p></div></div></section>`}
else if(page==='privacy'||page==='consent'){main.innerHTML=p2pLegalHTML(page,top)}
else if(page==='order'||page.startsWith('order/')){main.innerHTML=top('Твоя идея — в заказ','Выбери изделия и расскажи о принте. Макет, стоимость и доставку согласуем до оплаты.')+orderHTML();initOrder(page.split('/')[1])}
else if(page==='studio'||page==='studio/tshirt'||page==='studio/sweatshirt'){const kind=page==='studio/sweatshirt'?'sweatshirt':'tshirt';main.innerHTML=top('Примерь свой принт','Загрузи картинку, добавь текст и сохрани набросок. Финальный макет проверим вместе перед печатью.')+studioPicker(kind)+studioHTML(kind);initStudio(kind)}
else if(page==='studio/bottle'||page==='studio/bag'){const kind=page.split('/')[1];main.innerHTML=top(kind==='bottle'?'Твоя бутылка. Две стороны идеи.':'Шоппер с твоим принтом','Размести рисунок и текст. Это набросок для согласования; точную область печати уточним перед изготовлением.')+studioPicker(kind)+objectStudioHTML(kind);initObjectStudio(kind)}
else{location.hash='home';return}window.scrollTo(0,0);document.title=(page==='home'?'Твоя идея':'Принты на заказ')+' — Prompt2Print';}
root.querySelector('#menu-toggle').onclick=()=>{const n=root.querySelector('nav');n.classList.toggle('open');root.querySelector('#menu-toggle').setAttribute('aria-expanded',String(n.classList.contains('open')))};
function studioHTML(kind='tshirt'){const sweat=kind==='sweatshirt';return `<section class="section"><div class="wrap"><div class="studio"><div class="canvas-wrap"><canvas id="print-canvas" width="1200" height="1280" aria-label="Предпросмотр ${sweat?'толстовки':'футболки'} с принтом"></canvas><div class="canvas-meta"><span id="garment-side-caption">ПЕРЕД · схематичный макет</span><span id="area-label">Область 21 × 29,7 см</span></div><div class="side-thumbs"><div class="side-thumb active" id="front-thumb">ПЕРЕД<br><span class="micro" id="front-state">редактируется</span></div><div class="side-thumb" id="back-thumb">СПИНА<br><span class="micro" id="back-state">без принта</span></div></div></div><div class="controls"><h3>Твоя идея начинается здесь</h3><div class="garment-side-switch"><button type="button" id="side-front" class="active">ПЕРЕД</button><button type="button" id="side-back">СПИНА</button></div><p class="micro side-hint">Сделай разные принты спереди и сзади. Переключай сторону кнопками, каждая сторона сохраняется отдельно.</p><div class="two"><div class="field"><label for="shirt-color">${sweat?'Толстовка':'Футболка'}</label><select id="shirt-color"><option value="white">Белая</option><option value="black">Чёрная</option></select></div><div class="field"><label for="print-method">Способ печати</label><select id="print-method"><option value="sub">Сублимация · A4</option><option value="dtf">DTF · 30 × 35 см</option></select></div></div><div class="upload"><b style="font-size:14px">Картинка для выбранной стороны</b><p class="micro">PNG, JPG или WebP, до 15 МБ. Сейчас редактируется: <b id="editing-side">ПЕРЕД</b>.</p><input id="art-file" type="file" accept="image/png,image/jpeg,image/webp" aria-label="Загрузить рисунок"><p class="micro" id="art-file-name"></p><button type="button" id="remove-art" class="plain-link" style="background:none;border:0;margin-top:10px" hidden>Убрать картинку с этой стороны</button><div id="upload-error" class="error" role="alert"></div></div><div id="art-controls" hidden><div class="field"><label class="label-line" for="art-width">Ширина рисунка <output id="width-val">14 см</output></label><input id="art-width" type="range" min="2" max="21" step=".1" value="14"></div><div class="two"><div class="field"><label for="art-x">Влево / вправо</label><input id="art-x" type="range" min="0" max="100" value="50"></div><div class="field"><label for="art-y">Выше / ниже</label><input id="art-y" type="range" min="0" max="100" value="20"></div></div><p class="micro" id="quality"></p></div><hr><div class="field"><label for="print-text">Текст на выбранной стороне</label><input id="print-text" type="text" maxlength="55" placeholder="Например: Твоя идея"></div><div class="two"><div class="field"><label for="text-size">Размер текста</label><input id="text-size" type="range" min="12" max="70" value="38"></div><div class="field"><label for="text-y">Положение текста</label><input id="text-y" type="range" min="0" max="100" value="50"></div></div><div class="two"><div class="field"><label for="font-select">Шрифт</label><select id="font-select"><option value="Arial">Простой</option><option value="Georgia">Классический</option><option value="Courier New">Печатная машинка</option><option value="Montserrat">Современный</option><option value="Comfortaa">Мягкий</option><option value="Oswald">Узкий</option><option value="Playfair Display">Элегантный</option><option value="Russo One">Мощный</option><option value="Caveat">От руки</option><option value="Marck Script">Рукописный</option><option value="Neucha">Творческий</option><option value="Yeseva One">Декоративный</option><option value="Rubik Mono One">Плакатный</option><option value="Bad Script">Каллиграфический</option></select></div><div class="field"><label for="text-color">Цвет текста</label><input id="text-color" type="color" value="#008b9c" style="width:100%;height:43px;border:1px solid #becbd6;border-radius:7px;background:white"></div></div><p class="micro">Пунктир показывает область печати и не печатается. Пустая сторона останется без принта.</p><div class="control-btns"><button type="button" class="btn yellow" id="add-to-order">Добавить обе стороны к заказу ↗</button><button type="button" class="btn" id="save-preview">Скачать набросок обеих сторон</button><button type="button" class="btn light" id="save-print">Скачать принт выбранной стороны</button><button type="button" class="btn light" id="reset-design">Сбросить выбранную сторону</button></div><div id="save-status" class="status" role="status" aria-live="polite"></div></div></div><div class="notice"><b>Перед и спина сохраняются отдельно.</b> Можно сделать принт только спереди, только сзади или с обеих сторон. Перед печатью мы всё равно покажем и согласуем финальный макет.</div><div class="actions"><a href="#order" class="btn">Открыть заказ ↗</a><a href="#catalog" class="btn light">Вернуться в каталог</a></div></div></section>`}
function initStudio(kind='tshirt'){
const $=id=>root.querySelector('#'+id),canvas=$('print-canvas'),ctx=canvas.getContext('2d');
let active='front',loadSerial=0;
const sides={
front:{img:null,file:null,url:null,width:14,x:50,y:20,text:'Твоя идея',textSize:38,textY:85,font:'Arial',color:'#008b9c'},
back:{img:null,file:null,url:null,width:14,x:50,y:20,text:'',textSize:38,textY:50,font:'Arial',color:'#008b9c'}
};
function side(){return sides[active]}
function dims(){return $('print-method').value==='sub'?{w:21,h:29.7}:{w:30,h:35}}
function has(s){return Boolean(s.img||s.text.trim())}
function limits(s){let d=dims(),max=d.w;if(s.img)max=Math.min(d.w,d.h*s.img.width/s.img.height);return {d,max}}
function layoutFor(s,c=ctx){
const lm=limits(s),d=lm.d,area={x:canvas.width/2-d.w*13/2,y:330,w:d.w*13,h:d.h*13};
const width=Math.min(Number(s.width),lm.max);let art=null;
if(s.img){const w=width*13,h=w*s.img.height/s.img.width;art={x:(area.w-w)*Number(s.x)/100,y:(area.h-h)*Number(s.y)/100,w,h}}
let fontSize=Number(s.textSize);c.font='700 '+fontSize+'px "'+s.font+'"';const tw=c.measureText(s.text).width;let fs=tw>area.w-8?fontSize*(area.w-8)/Math.max(tw,1):fontSize;
return {d,area,art,text:s.text,fs,ty:fs/2+4+(area.h-fs-8)*Number(s.textY)/100,width};
}
function drawDesign(c,lay,s,scale=1){
c.save();c.scale(scale,scale);c.beginPath();c.rect(0,0,lay.area.w,lay.area.h);c.clip();
if(s.img&&lay.art)c.drawImage(s.img,lay.art.x,lay.art.y,lay.art.w,lay.art.h);
c.fillStyle=s.color;c.font='700 '+lay.fs+'px "'+s.font+'"';c.textAlign='center';c.textBaseline='middle';c.fillText(lay.text,lay.area.w/2,lay.ty);c.restore();
}
function drawGarment(target,s,which){
const c=target.getContext('2d'),lay=layoutFor(s,c),black=$('shirt-color').value==='black',sweat=kind==='sweatshirt';
c.clearRect(0,0,target.width,target.height);c.fillStyle='#edf5f4';c.fillRect(0,0,target.width,target.height);
c.save();c.shadowColor='#203f5020';c.shadowBlur=30;c.shadowOffsetY=18;c.beginPath();
if(sweat){c.moveTo(420,160);c.lineTo(270,215);c.lineTo(105,365);c.lineTo(42,850);c.lineTo(175,875);c.lineTo(300,500);c.lineTo(340,470);c.lineTo(340,1090);c.quadraticCurveTo(600,1120,860,1090);c.lineTo(860,470);c.lineTo(900,500);c.lineTo(1025,875);c.lineTo(1158,850);c.lineTo(1095,365);c.lineTo(930,215);c.lineTo(780,160);c.quadraticCurveTo(600,245,420,160)}
else{c.moveTo(420,160);c.lineTo(235,232);c.lineTo(120,435);c.lineTo(292,530);c.lineTo(340,450);c.lineTo(340,1100);c.quadraticCurveTo(600,1132,860,1100);c.lineTo(860,450);c.lineTo(908,530);c.lineTo(1080,435);c.lineTo(965,232);c.lineTo(780,160);c.quadraticCurveTo(600,252,420,160)}
c.closePath();c.fillStyle=black?'#262d34':'#fff';c.fill();c.shadowColor='transparent';c.strokeStyle=black?'#121d25':'#d6dfe4';c.lineWidth=3;c.stroke();
c.beginPath();c.moveTo(420,161);c.quadraticCurveTo(600,which==='front'?291:215,780,161);c.strokeStyle=black?'#46515c':'#dce5eb';c.lineWidth=11;c.stroke();
if(sweat&&which==='back'){c.beginPath();c.moveTo(430,185);c.quadraticCurveTo(600,310,770,185);c.strokeStyle=black?'#46515c':'#d0dbe0';c.lineWidth=5;c.stroke()}
c.beginPath();c.moveTo(365,1074);c.quadraticCurveTo(600,1100,835,1074);c.lineWidth=2;c.stroke();c.restore();
c.save();c.translate(lay.area.x,lay.area.y);drawDesign(c,lay,s,1);c.setLineDash([10,8]);c.strokeStyle=black?'#8ca7bd':'#83a9c6';c.lineWidth=2;c.strokeRect(0,0,lay.area.w,lay.area.h);c.restore();
c.fillStyle=black?'#eaf3f3':'#153b40';c.font='700 30px Arial';c.textAlign='center';c.fillText(which==='front'?'ПЕРЕД':'СПИНА',600,285);
return lay;
}
function saveUI(){
const s=side();s.width=+$('art-width').value;s.x=+$('art-x').value;s.y=+$('art-y').value;s.text=$('print-text').value;s.textSize=+$('text-size').value;s.textY=+$('text-y').value;s.font=$('font-select').value;s.color=$('text-color').value;
}
function loadUI(){
const s=side(),lm=limits(s);$('art-width').max=lm.max.toFixed(2);$('art-width').value=Math.min(s.width,lm.max);$('art-x').value=s.x;$('art-y').value=s.y;$('print-text').value=s.text;$('text-size').value=s.textSize;$('text-y').value=s.textY;$('font-select').value=s.font;$('text-color').value=s.color;$('art-file').value='';$('art-controls').hidden=!s.img;$('remove-art').hidden=!s.img;$('art-file-name').textContent=s.file?'Выбрано: '+s.file.name:'';$('editing-side').textContent=active==='front'?'ПЕРЕД':'СПИНА';$('upload-error').textContent='';render();
}
function render(){
saveUI();const s=side(),lay=drawGarment(canvas,s,active),lm=limits(s);if(s.width>lm.max){s.width=lm.max;$('art-width').value=lm.max}
$('area-label').textContent='Область '+lay.d.w+' × '+String(lay.d.h).replace('.',',')+' см';$('width-val').textContent=(+$('art-width').value).toLocaleString('ru-RU')+' см';
$('garment-side-caption').textContent=(active==='front'?'ПЕРЕД':'СПИНА')+' · схематичный макет';
$('side-front').className=active==='front'?'active':'';$('side-back').className=active==='back'?'active':'';
$('front-thumb').className='side-thumb'+(active==='front'?' active':'');$('back-thumb').className='side-thumb'+(active==='back'?' active':'');
$('front-state').textContent=active==='front'?'редактируется':(has(sides.front)?'принт добавлен':'без принта');$('back-state').textContent=active==='back'?'редактируется':(has(sides.back)?'принт добавлен':'без принта');
if(s.img){const dpi=Math.round(s.img.width/(Math.max(1,s.width)/2.54));$('quality').textContent='Исходник '+s.img.width+' × '+s.img.height+' px · около '+dpi+' dpi при этой ширине'+(dpi<150?'. Лучше прислать изображение крупнее.':'. Окончательную пригодность проверим перед печатью.')}else $('quality').textContent='';
const blank=!has(sides.front)&&!has(sides.back);$('save-preview').disabled=blank;$('add-to-order').disabled=blank;$('save-print').disabled=!has(s);
}
['shirt-color','print-method'].forEach(id=>$(id).addEventListener('input',()=>{if(id==='shirt-color'&&$('shirt-color').value==='black')$('print-method').value='dtf';if(id==='print-method'&&$('print-method').value==='sub')$('shirt-color').value='white';$('save-status').textContent='';render()}));
['art-width','art-x','art-y','print-text','text-size','text-y','font-select','text-color'].forEach(id=>$(id).addEventListener('input',()=>{$('save-status').textContent='';render()}));
function switchSide(next){saveUI();active=next;loadUI()}
$('side-front').onclick=()=>switchSide('front');$('side-back').onclick=()=>switchSide('back');$('front-thumb').onclick=()=>switchSide('front');$('back-thumb').onclick=()=>switchSide('back');
$('art-file').addEventListener('change',()=>{const file=$('art-file').files[0];if(!file)return;const target=active,serial=++loadSerial;$('upload-error').textContent='';if(!['image/png','image/jpeg','image/webp'].includes(file.type)){ $('upload-error').textContent='Выбери PNG, JPG или WebP.';return}if(file.size>15*1024*1024){$('upload-error').textContent='Файл больше 15 МБ.';return}const url=URL.createObjectURL(file),im=new Image();im.onload=()=>{if(serial!==loadSerial){URL.revokeObjectURL(url);return}const s=sides[target];if(s.url)URL.revokeObjectURL(s.url);s.url=url;s.img=im;s.file=file;s.width=Math.min(14,dims().w);s.y=20;if(!s.text.trim())s.textY=85;if(active===target)loadUI();else render()};im.onerror=()=>{URL.revokeObjectURL(url);if(serial===loadSerial)$('upload-error').textContent='Не удалось прочитать файл.'};im.src=url});
$('remove-art').onclick=()=>{const s=side();loadSerial++;if(s.url)URL.revokeObjectURL(s.url);s.url=null;s.img=null;s.file=null;$('art-file').value='';loadUI()};
$('reset-design').onclick=()=>{const s=side();loadSerial++;if(s.url)URL.revokeObjectURL(s.url);const keepFront=active==='front';sides[active]={img:null,file:null,url:null,width:14,x:50,y:20,text:keepFront?'Твоя идея':'',textSize:38,textY:keepFront?85:50,font:'Arial',color:'#008b9c'};$('save-status').textContent='Эта сторона сброшена.';loadUI()};
function download(c,name){$('save-status').textContent='Подготавливаю PNG…';c.toBlob(blob=>{if(!blob){$('save-status').textContent='Не удалось создать файл.';return}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);$('save-status').textContent='Файл подготовлен.'},'image/png')}
function composite(){saveUI();const out=document.createElement('canvas');out.width=2400;out.height=1370;const c=out.getContext('2d');c.fillStyle='#edf5f4';c.fillRect(0,0,out.width,out.height);['front','back'].forEach((which,i)=>{const part=document.createElement('canvas');part.width=1200;part.height=1280;drawGarment(part,sides[which],which);c.drawImage(part,i*1200,0)});c.fillStyle='#506c70';c.font='24px Arial';c.textAlign='center';c.fillText('Prompt2Print · ПЕРЕД',600,1330);c.fillText('Prompt2Print · СПИНА',1800,1330);return out}
$('add-to-order').onclick=()=>{saveUI();
const isSweat=kind==='sweatshirt',front=has(sides.front),back=has(sides.back),where=front&&back?'перед + спина':front?'перед':'спина';
const comp=composite();
studioDraft={
product:kind,
preview:comp.toDataURL('image/png'),
originals:[sides.front.file,sides.back.file].filter(Boolean),
description:(isSweat?(($('shirt-color').value==='black'?'Чёрная':'Белая')+' толстовка'):(($('shirt-color').value==='black'?'Чёрная':'Белая')+' футболка'))+'; способ печати: '+($('print-method').value==='dtf'?'DTF':'сублимация')+'; печать: '+where+'; '+['front','back'].map(k=>{
const s=sides[k];
return (k==='front'?'перед':'спина')+': '+(has(s)?[
s.file?'файл '+s.file.name+'; ширина '+Number(s.width).toLocaleString('ru-RU')+' см; по горизонтали '+Math.round(Number(s.x))+'%; по вертикали '+Math.round(Number(s.y))+'%':'',
s.text?'текст «'+s.text+'»; положение текста '+Math.round(Number(s.textY))+'%':''
].filter(Boolean).join('; '):'без печати')
}).join('; ')
};
const first=[sides.front.file,sides.back.file].find(Boolean);if(first)orderDraft.file=first;
location.hash='order/'+kind;
};
$('save-preview').onclick=()=>download(composite(),'Prompt2Print-'+kind+'-front-back.png');
$('save-print').onclick=()=>{saveUI();const s=side(),lay=layoutFor(s),out=document.createElement('canvas');out.width=Math.round(lay.d.w/2.54*300);out.height=Math.round(lay.d.h/2.54*300);drawDesign(out.getContext('2d'),lay,s,out.width/lay.area.w);download(out,'Prompt2Print-'+kind+'-'+active+'-print.png')};
loadUI();cleanStudio=()=>{loadSerial++;Object.values(sides).forEach(s=>{if(s.url)URL.revokeObjectURL(s.url)})};
}
function orderHTML(){return `<section class="section"><div class="wrap order-grid"><form id="order-form" class="controls order-form"><div class="notice" style="margin-top:0;margin-bottom:26px"><b>Оформи заявку на заказ.</b> Сначала проверь детали, затем отправь заказ нам на согласование. Оплата только после подтверждения макета и итоговой стоимости.</div><fieldset><legend>1. Что будем печатать?</legend><div id="order-items"></div><button type="button" id="add-order-item" class="btn light">+ Ещё одно изделие</button></fieldset><fieldset><legend>2. Твой дизайн</legend><div class="field"><label for="order-comment">Что хочется напечатать?</label><textarea id="order-comment" rows="4" maxlength="2000" placeholder="Текст, идея, расположение рисунка, дата, к которой нужен заказ…"></textarea></div><div class="field"><label>Исходная картинка или готовый макет</label><button type="button" id="cloud-upload-btn" class="btn light">Загрузить файл на Яндекс.Диск</button><p class="micro" id="cloud-upload-hint">PNG, JPG, WebP или PDF. Файл загрузится на Яндекс.Диск и придёт вместе с заявкой. Положение принта из конструктора передаётся в заказе отдельными параметрами.</p><p id="order-file-name" class="micro"></p><p id="cloud-upload-status" class="status" role="status" aria-live="polite"></p><div id="cloud-upload-list" class="micro"></div><div id="order-file-error" class="error" role="alert"></div></div><div id="attached-design" hidden><p class="notice">Набросок из конструктора сохранён в заказе. Исходник загрузи кнопкой выше. Размер и положение принта также сохранятся в данных заказа.</p><button type="button" id="remove-design" class="btn light" style="margin-top:12px">Убрать набросок</button></div></fieldset><fieldset><legend>3. Как с тобой связаться?</legend><div class="field"><label for="order-name">Имя *</label><input id="order-name" type="text" autocomplete="name" maxlength="120" required></div><div class="two"><div class="field"><label for="order-phone">Телефон *</label><input id="order-phone" type="tel" autocomplete="tel" inputmode="tel" maxlength="30" required></div><div class="field"><label for="order-email">Электронная почта *</label><input id="order-email" type="email" autocomplete="email" maxlength="200" required></div></div><div class="two"><div class="field"><label for="order-contactMethod">Куда удобнее написать? *</label><select id="order-contactMethod" required><option value="Telegram">Telegram</option><option value="WhatsApp">WhatsApp</option><option value="MAX">MAX</option><option value="Позвонить">Позвонить по телефону</option></select></div><div class="field" id="contact-value-wrap"><label for="order-contactValue" id="contact-value-label">Telegram: @username или номер *</label><input id="order-contactValue" type="text" maxlength="120" placeholder="@username или номер телефона" required><p class="micro" id="contact-value-help">Если Telegram привязан к номеру выше, можно просто повторить этот номер.</p></div></div></fieldset><fieldset><legend>4. Куда доставить?</legend><div class="field"><label for="order-city">Город *</label><input id="order-city" type="text" autocomplete="address-level2" maxlength="120" required></div><div class="field"><label for="order-delivery">Способ доставки</label><select id="order-delivery"><option>Уточнить при согласовании</option><option>Курьер по Самаре</option><option>СДЭК — пункт выдачи</option><option>Озон Посылка — пункт выдачи</option><option>ВБ Посылка — пункт выдачи</option><option>Почта России</option><option>Доставка за пределы Самары — по расчёту</option></select></div><div class="field"><label for="order-address">Адрес или удобный пункт выдачи</label><input id="order-address" type="text" maxlength="400" placeholder="Можно уточнить при согласовании"></div><p class="micro">Стоимость доставки и доступность выбранного пункта подтвердим до оплаты. <a class="plain-link" href="#delivery">Подробнее о доставке</a></p></fieldset><label class="order-check"><input type="checkbox" id="order-consent" required><span>Я ознакомился с <a class="plain-link" href="#returns">условиями возврата индивидуальных изделий</a>.</span></label><label class="order-check"><input type="checkbox" id="order-privacy-consent" required><span>Я даю <a class="plain-link" href="#consent">согласие на обработку моих персональных данных</a> для рассмотрения и исполнения заказа.</span></label><p class="micro" style="margin-bottom:20px">О том, какие данные используются и как отозвать согласие: <a class="plain-link" href="#privacy">политика обработки персональных данных</a>. Согласие не включает рекламные рассылки.</p><button type="submit" class="btn">Проверить заказ ↗</button><section id="order-review" hidden style="margin-top:30px" aria-labelledby="review-title"><h3 id="review-title" tabindex="-1">Проверь детали</h3><div class="review-copy" id="order-review-copy" style="margin-top:18px"></div><div class="notice" id="order-send-note" role="status">Если всё верно, отправь заказ. Перед отправкой сайт сохранит чёткий макет отдельной картинкой и добавит ссылку в письмо.</div><button type="button" id="send-order" class="btn" style="margin-top:20px">Отправить заказ на согласование ↗</button><p id="order-send-status" class="status" role="status" aria-live="polite"></p></section></form><aside class="order-summary"><div class="eyebrow">Сначала макет, потом печать</div><h3>Сделаем вещь твоей</h3><p>Проверим изображение, уточним размер и покажем макет. Затем подтвердим стоимость и способ оплаты.</p><div id="order-design-list"></div><img id="order-design-preview" alt="Твой набросок из конструктора" hidden><p><b>Стоимость пока не фиксируем.</b><br>Она зависит от основы, размера принта, количества и доставки.</p><p>Заказ от 5 000 ₽ доставим по Самаре бесплатно.</p><p><a class="plain-link" href="#delivery">Доставка и оплата</a></p><p>Есть вопрос?<br><a href="tel:+79171040338">+7 (917) 104-03-38</a><br><a href="mailto:prompt2print@mail.ru">prompt2print@mail.ru</a></p></aside></div></section>`}
function coloringFields(i,item){return `<div class="notice" style="margin:0 0 17px"><b>Персональная раскраска из 10 фотографий</b><br>После заявки мы свяжемся с тобой и получим 10 исходных фото. Загрузку всех фотографий прямо на сайте подключим отдельно.</div><div class="field"><label for="item-coloring-format-${i}">Какой вариант нужен? *</label><select id="item-coloring-format-${i}" required><option value="Печатная книга — 400 ₽">Печатная книга — 400 ₽</option><option value="Электронный PDF — 300 ₽">Электронный PDF — 300 ₽</option><option value="Печатная книга + PDF — 450 ₽">Печатная книга + PDF — 450 ₽</option></select></div><div class="field"><label for="item-coloring-title-${i}">Название на обложке</label><input id="item-coloring-title-${i}" type="text" maxlength="120" placeholder="Например: Приключения Маши"></div><p class="micro" style="margin:-8px 0 17px">10 фотографий → 10 страниц А4. Для печатной версии сделаем цветную персональную обложку и переплёт.</p>`}
function initOrder(productId){
const $=id=>root.querySelector('#'+id),form=$('order-form');

/* Если покупатель пришёл в заказ из карточки конкретного товара,
   этот товар всегда становится первым и выбранным по умолчанию. */
if(products.some(p=>p.id===productId)){
 const isBlankItem=item=>item &&
   !item.details &&
   !item.size &&
   !item.otherSize &&
   !item.design &&
   !item.coloringTitle &&
   !item.coloringFormat &&
   (!item.quantity || Number(item.quantity)===1);

 const existingIndex=orderDraft.items.findIndex(i=>i.product===productId);

 if(existingIndex>0){
   const chosen=orderDraft.items.splice(existingIndex,1)[0];
   orderDraft.items.unshift(chosen);
 }else if(existingIndex<0){
   const fresh={product:productId,quantity:1,details:''};
   if(orderDraft.items.length===1&&isBlankItem(orderDraft.items[0])){
     orderDraft.items[0]=fresh;
   }else{
     orderDraft.items.unshift(fresh);
   }
 }
}

if(studioDraft){const item=orderDraft.items.find(i=>i.product===studioDraft.product);if(item)item.design=studioDraft;if(studioDraft.originals&&studioDraft.originals[0]&&!orderDraft.file)orderDraft.file=studioDraft.originals[0];studioDraft=null;}
const fields=['name','phone','email','contactMethod','contactValue','city','delivery','address','comment'];
fields.forEach(k=>{$('order-'+k).value=orderDraft[k]});$('order-consent').checked=orderDraft.consent;$('order-privacy-consent').checked=orderDraft.privacyConsent;
function saveFields(){fields.forEach(k=>orderDraft[k]=$('order-'+k).value);orderDraft.consent=$('order-consent').checked;orderDraft.privacyConsent=$('order-privacy-consent').checked;$('order-review').hidden=true}
form.addEventListener('input',saveFields);form.addEventListener('change',saveFields);
function syncContactMethod(){
const method=$('order-contactMethod').value,wrap=$('contact-value-wrap'),input=$('order-contactValue'),label=$('contact-value-label'),help=$('contact-value-help');
const call=method==='Позвонить';
wrap.hidden=call;input.disabled=call;input.required=!call;
if(call){input.value='';orderDraft.contactValue='';return}
if(method==='Telegram'){label.textContent='Telegram: @username или номер *';input.placeholder='@username или номер телефона';help.textContent='Если Telegram привязан к номеру выше, можно просто повторить этот номер.'}
else if(method==='WhatsApp'){label.textContent='Номер WhatsApp *';input.placeholder='+7 999 123-45-67';help.textContent='Если WhatsApp на номере выше, можно просто повторить этот номер.'}
else {label.textContent='Номер или контакт в MAX *';input.placeholder='Номер телефона или контакт MAX';help.textContent='Укажи данные, по которым тебя можно найти в MAX.'}
}
$('order-contactMethod').addEventListener('change',()=>{syncContactMethod();saveFields()});syncContactMethod();
function renderItems(){
$('order-items').innerHTML=orderDraft.items.map((item,i)=>`<div class="order-item"><div class="order-item-head"><b>Изделие ${i+1}</b><button type="button" class="plain-link" data-remove="${i}" style="border:0;background:none" ${orderDraft.items.length===1?'disabled':''}>Убрать</button></div><div class="two"><div class="field"><label for="item-product-${i}">Товар</label><select id="item-product-${i}">${products.map(p=>`<option value="${p.id}">${p.single}</option>`).join('')}</select></div><div class="field"><label for="item-qty-${i}">Количество *</label><input id="item-qty-${i}" type="number" min="1" max="999" step="1" required></div></div>${['tshirt','sweatshirt'].includes(item.product)?sizeFields(i):''}${item.product==='coloring'?coloringFields(i,item):''}<div class="field"><label for="item-details-${i}">${item.product==='coloring'?'Пожелания к раскраске и обложке':'Цвет и пожелания'}</label><input id="item-details-${i}" type="text" maxlength="300" placeholder="${item.product==='coloring'?'Например: подарок дочке, нежная обложка, надпись «Лето 2026»':'Например: белая футболка, размер 48'}"></div></div>`).join('');
orderDraft.items.forEach((item,i)=>{
$('item-product-'+i).value=item.product;$('item-qty-'+i).value=item.quantity;$('item-details-'+i).value=item.details;
$('item-product-'+i).onchange=e=>{item.product=e.target.value;item.design=null;renderItems();showDesign()};
if(['tshirt','sweatshirt'].includes(item.product)){ $('item-size-'+i).value=item.size||'';$('item-other-'+i).value=item.otherSize||'';const syncSize=()=>{const other=$('item-size-'+i).value==='other';$('other-wrap-'+i).hidden=!other;$('item-other-'+i).required=other;$('item-other-'+i).disabled=!other;};syncSize();$('item-size-'+i).onchange=e=>{item.size=e.target.value;syncSize()};$('item-other-'+i).oninput=e=>{item.otherSize=e.target.value}; }
if(item.product==='coloring'){const fmt=$('item-coloring-format-'+i),title=$('item-coloring-title-'+i);fmt.value=item.coloringFormat||'Печатная книга — 400 ₽';title.value=item.coloringTitle||'';item.coloringFormat=fmt.value;fmt.onchange=e=>{item.coloringFormat=e.target.value};title.oninput=e=>{item.coloringTitle=e.target.value};}
$('item-qty-'+i).oninput=e=>{item.quantity=e.target.value};
$('item-details-'+i).oninput=e=>{item.details=e.target.value};
});
root.querySelectorAll('[data-remove]').forEach(btn=>btn.onclick=()=>{orderDraft.items.splice(Number(btn.dataset.remove),1);renderItems();showDesign();$('order-review').hidden=true});
$('add-order-item').disabled=orderDraft.items.length>=20;
}
$('add-order-item').onclick=()=>{orderDraft.items.push({product:'tshirt',quantity:1,details:''});renderItems();$('order-review').hidden=true};
function showDesign(){
const designs=orderDraft.items.filter(i=>i.design);
$('attached-design').hidden=!designs.length;$('order-design-preview').hidden=true;
const list=$('order-design-list');list.replaceChildren();
designs.forEach(item=>{const fig=document.createElement('figure'),im=document.createElement('img'),caption=document.createElement('figcaption');im.src=item.design.preview;im.alt='Набросок: '+products.find(p=>p.id===item.product).single;im.style.width='100%';caption.textContent=item.design.description;fig.append(im,caption);list.append(fig)});
}
$('remove-design').onclick=()=>{orderDraft.items.forEach(i=>i.design=null);showDesign();$('order-review').hidden=true};
function showFile(){
$('order-file-name').textContent=orderDraft.file?'Файл из конструктора: '+orderDraft.file.name+'. Нажми кнопку выше и выбери этот же файл, чтобы он загрузился в Яндекс.Диск.':'Если исходник уже готов, загрузи его кнопкой выше. Если файла пока нет, достаточно описать идею.';
}
function uploadedValues(receiver){
if(!receiver||!receiver.uploadGroup)return [];
return [...receiver.uploadGroup.querySelectorAll('input[name]')].map(x=>(x.value||'').trim()).filter(Boolean);
}
function uploadedRows(receiver){
if(!receiver||!receiver.uploadGroup)return [];
const rows=[...receiver.uploadGroup.querySelectorAll('.t-upwidget-container__data_table_row,.t-upwidget-container__data_table')];
return rows.map(x=>(x.textContent||'').trim()).filter(Boolean);
}
function updateCloudState(receiver){
const values=uploadedValues(receiver),rows=uploadedRows(receiver);
orderDraft.cloudFiles=values.slice();
if(values.length){
$('cloud-upload-status').textContent='Готово: файл загружен в Яндекс.Диск и будет отправлен вместе с заявкой.';
$('cloud-upload-list').textContent=rows.length?rows.join(' · '):('Загружено файлов: '+values.length);
$('cloud-upload-btn').textContent='Добавить / заменить файл';
$('order-file-error').textContent='';
}else{
$('cloud-upload-list').textContent='';
$('cloud-upload-btn').textContent='Загрузить файл на Яндекс.Диск';
}
}
function prepareCloudUploader(){
const receiver=findTildaReceiver();
if(!receiver||!receiver.widget){
$('cloud-upload-status').textContent='Поле загрузки Tilda пока не найдено. Обнови опубликованную страницу через несколько секунд.';
return;
}
updateCloudState(receiver);
if(!receiver.widget.dataset.p2pBound){
receiver.widget.dataset.p2pBound='1';
receiver.widget.addEventListener('uwFileUploaded',()=>setTimeout(()=>updateCloudState(receiver),200));
receiver.widget.addEventListener('uwFileRemoved',()=>setTimeout(()=>updateCloudState(receiver),100));
new MutationObserver(()=>updateCloudState(receiver)).observe(receiver.widget,{childList:true,subtree:true,attributes:true,attributeFilter:['value']});
}
$('cloud-upload-btn').onclick=()=>{
const r=findTildaReceiver();
if(!r||!r.widget){$('cloud-upload-status').textContent='Не удалось открыть загрузчик. Обнови страницу и попробуй ещё раз.';return}
const button=r.widget.querySelector('.t-upwidget-container__button,.t-upwidget-container__button-indiv');
if(!button){$('cloud-upload-status').textContent='Загрузчик Tilda ещё запускается. Подожди пару секунд и нажми снова.';return}
$('cloud-upload-status').textContent='Выбери файл. После выбора дождись сообщения «Готово».';
button.click();
};
}
setTimeout(prepareCloudUploader,500);
setTimeout(prepareCloudUploader,1800);
function buildOrderText(){
orderDraft.items.forEach((item,i)=>{if(item.product==='tshirt'){const sel=$('item-size-'+i);if(sel){item.size=sel.value;const other=$('item-other-'+i);item.otherSize=other?other.value:'';}}});
const lines=orderDraft.items.map((item,i)=>{const p=products.find(p=>p.id===item.product),size=item.product==='tshirt'?(item.size==='other'?(item.otherSize||'не указан'):(item.size||'не указан')):'';return `${i+1}. ${p.single} — ${item.quantity} шт.${item.product==='tshirt'?'\n   Размер: '+size:''}${item.product==='coloring'?'\n   Вариант: '+(item.coloringFormat||'Печатная книга — 400 ₽'):''}${item.product==='coloring'&&item.coloringTitle?'\n   Название на обложке: '+item.coloringTitle:''}${item.product==='coloring'?'\n   Фотографии: нужно получить 10 исходных фото при согласовании':''}${item.details?'\n   '+item.details:''}${item.design?'\n   Макет: '+item.design.description:''}`});
lines.push('\nСогласие на обработку данных: дано; редакция '+CONSENT_VERSION+'.');
if(orderDraft.file)lines.push('\nИсходник из конструктора: '+orderDraft.file.name);
if(orderDraft.cloudFiles&&orderDraft.cloudFiles.length)lines.push('Исходник загружен в Яндекс.Диск через форму Tilda: да');
if(orderDraft.mockupLink)lines.push('\nМакет покупателя (открыть изображение):\n'+orderDraft.mockupLink);
if(orderDraft.comment)lines.push('\nИдея: '+orderDraft.comment);
lines.push('\nИмя: '+orderDraft.name,'Телефон: '+orderDraft.phone,'Почта: '+orderDraft.email,'Предпочтительный способ связи: '+orderDraft.contactMethod);if(orderDraft.contactMethod!=='Позвонить')lines.push('Контакт для связи: '+orderDraft.contactValue);lines.push('Город: '+orderDraft.city,'Доставка: '+orderDraft.delivery);
if(orderDraft.address)lines.push('Адрес / пункт: '+orderDraft.address);
lines.push('\nИтоговую стоимость и макет согласуем до оплаты.');
return lines.join('\n');
}
function findTildaReceiver(){
const details=document.querySelector('textarea[name="order_details"]');
if(!details)return null;
const tform=details.closest('form');if(!tform)return null;
const uploadGroup=tform.querySelector('.t-input-group_uw');
const widget=uploadGroup&&(uploadGroup.querySelector('.t-upwidget-container')||uploadGroup.querySelector('[role="upwidget-uploader"]'));
return {form:tform,details,uploadGroup,widget};
}
function setNativeValue(el,value){if(!el)return;el.value=value;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));}
function waitForTildaResult(receiver){return new Promise(resolve=>{let ticks=0;const timer=setInterval(()=>{ticks++;const box=receiver.form.closest('.r')||receiver.form.parentElement;const success=box&&box.querySelector('.js-successbox');const error=box&&box.querySelector('.js-errorbox');const shown=el=>el&&getComputedStyle(el).display!=='none'&&getComputedStyle(el).visibility!=='hidden'&&el.offsetHeight>0;if(shown(success)){clearInterval(timer);resolve('success')}else if(shown(error)){clearInterval(timer);resolve('error')}else if(ticks>=24){clearInterval(timer);resolve('unknown')}},500)})}
form.addEventListener('submit',e=>{
e.preventDefault();saveFields();
if(orderDraft.phone.replace(/\D/g,'').length<10){$('order-phone').setCustomValidity('Укажи телефон с кодом города или оператора.');form.reportValidity();return}
if(!form.reportValidity())return;
const text=buildOrderText();$('order-review-copy').textContent=text;$('order-review').hidden=false;$('order-send-status').textContent='';$('send-order').disabled=false;$('review-title').focus();$('order-review').scrollIntoView({block:'start',behavior:'smooth'});
});
$('send-order').onclick=async()=>{
const status=$('order-send-status'),sendBtn=$('send-order');
status.textContent='Проверяем заказ…';
try{
saveFields();
if(!form.reportValidity()){status.textContent='Проверь обязательные поля выше.';return}
const receiver=findTildaReceiver();
if(!receiver){status.textContent='Не удалось найти техническую форму отправки Tilda. Обнови страницу и попробуй ещё раз.';return}
let uploaded=uploadedValues(receiver);
if(orderDraft.file&&!uploaded.length){
status.textContent='Сначала загрузи исходную картинку на Яндекс.Диск кнопкой «Загрузить файл на Яндекс.Диск» выше.';
$('cloud-upload-status').textContent='Нужно загрузить исходник, который использован в конструкторе.';
$('cloud-upload-btn').focus();return
}
orderDraft.cloudFiles=uploaded.slice();
sendBtn.disabled=true;
status.textContent='Сохраняем визуальный макет…';
try{
const mockupUrls=await uploadOrderMockups();
orderDraft.mockupLink=mockupUrls.map((u,i)=>mockupUrls.length>1?((i+1)+'. '+u):u).join('\n');
if(orderDraft.items.some(i=>i.design&&i.design.preview)&&!mockupUrls.length)throw new Error('Cloudinary не вернул ссылку на макет');
}catch(err){
console.error('Prompt2Print Cloudinary upload:',err);
sendBtn.disabled=false;
status.textContent='Не удалось сохранить визуальный макет: '+(err&&err.message?err.message:'неизвестная ошибка')+'. Заказ пока не отправлен.';
return
}
const email=receiver.form.querySelector('input[type="email"],input[name="email"],input[name="Email"]');
const phone=receiver.form.querySelector('input[type="tel"],input[name="phone"],input[name="Phone"]');
const name=receiver.form.querySelector('input[name="name"],input[name="Name"],input[data-tilda-rule="name"]')||[...receiver.form.querySelectorAll('input[type="text"]')].find(x=>x.type!=='hidden');
setNativeValue(email,orderDraft.email);
setNativeValue(phone,orderDraft.phone);
setNativeValue(name,orderDraft.name);
setNativeValue(receiver.details,buildOrderText());
const submit=receiver.form.querySelector('button[type="submit"],input[type="submit"],.t-submit');
if(!submit){sendBtn.disabled=false;status.textContent='Не найдена кнопка технической формы Tilda.';return}
status.textContent='Макет сохранён. Отправляем заказ…';
submit.click();
const result=await waitForTildaResult(receiver);
if(result==='error'){sendBtn.disabled=false;status.textContent='Tilda не приняла отправку. Проверь поля и попробуй ещё раз.';return}
$('order-send-note').innerHTML='<b>Заказ отправлен.</b> Исходник сохранён на Яндекс.Диске, а визуальный макет сохранён отдельной картинкой в Cloudinary. Ссылка на него передана вместе с заказом.';
status.textContent=result==='success'?'Готово. Заявка передана Prompt2Print.':'Заявка отправлена. Если в течение рабочего дня мы не свяжемся, позвони или напиши нам.';
sendBtn.hidden=true;
}catch(err){
console.error('Prompt2Print send order:',err);
sendBtn.disabled=false;
status.textContent='Ошибка отправки: '+(err&&err.message?err.message:'неизвестная ошибка');
}
};
renderItems();showDesign();showFile();
}
const CONSENT_VERSION='2026-09-24';
function sizeFields(i){return `<div class="two"><div class="field"><label for="item-size-${i}">Размер футболки *</label><select id="item-size-${i}" required><option value="">Выбери размер</option>${Array.from({length:16},(_,n)=>40+n*2).map(n=>`<option value="${n}">${n}</option>`).join('')}<option value="other">Другой</option></select></div><div class="field" id="other-wrap-${i}" hidden><label for="item-other-${i}">Укажи свой размер или рост *</label><input id="item-other-${i}" type="text" maxlength="80" placeholder="Например: детский, рост 128 см" disabled></div></div>`}
function studioPicker(kind){return `<div class="wrap actions" aria-label="Выбор изделия в конструкторе">${[['tshirt','Футболка'],['sweatshirt','Толстовка'],['bottle','Бутылка'],['bag','Шоппер']].map(([id,name])=>`<a class="btn ${id===kind?'':'light'}" href="#studio/${id}" ${id===kind?'aria-current="page"':''}>${name}</a>`).join('')}</div>`}
const objectDesigns={};
function newSide(){return {text:'',color:'#008b9c',font:'Arial',size:42,y:60,x:50,artY:30,width:70,img:null,file:null}}
function objectStudioHTML(kind){return `<section class="section"><div class="wrap"><div class="studio"><div class="canvas-wrap"><canvas id="object-canvas" width="900" height="1050" aria-label="Набросок изделия с принтом"></canvas><div class="canvas-meta"><span id="side-caption"></span><span>Схема · без точного масштаба</span></div><div class="two"><figure style="margin:0"><canvas id="thumb-one" width="300" height="350" aria-label="Набросок стороны 1"></canvas><figcaption class="micro">Сторона 1</figcaption></figure><figure style="margin:0"><canvas id="thumb-two" width="300" height="350" aria-label="Набросок стороны 2"></canvas><figcaption class="micro">Сторона 2</figcaption></figure></div></div><div class="controls"><h3>${kind==='bottle'?'Бутылка с двух сторон':'Твой шоппер'}</h3><div class="two"><button class="btn" id="side-one" type="button" aria-pressed="true">Сторона 1</button><button class="btn light" id="side-two" type="button" aria-pressed="false">Сторона 2</button></div><p class="micro" style="margin-top:12px">${kind==='bottle'?'Это противоположные стороны бутылки. На каждой может быть свой рисунок или текст. Для кругового принта напиши пожелание в заказе.':'Можно оформить одну или обе стороны шоппера. Стоимость печати с двух сторон подтвердим при согласовании.'} Пустая сторона останется без печати.</p><div class="upload"><label for="object-file"><b>Картинка для выбранной стороны</b></label><input id="object-file" type="file" accept="image/png,image/jpeg,image/webp"><p class="micro" id="object-file-name">PNG, JPG или WebP, до 15 МБ.</p><button class="plain-link" id="object-remove" type="button" style="border:0;background:none" hidden>Убрать картинку</button><p class="error" id="object-error" role="alert"></p></div><div id="object-art-controls" hidden><div class="field"><label for="object-width">Размер картинки в области: <output id="object-width-value"></output></label><input id="object-width" type="range" min="5" max="100" value="70"></div><div class="two"><div class="field"><label for="object-x">Влево / вправо</label><input id="object-x" type="range" min="0" max="100" value="50"></div><div class="field"><label for="object-art-y">Выше / ниже</label><input id="object-art-y" type="range" min="0" max="100" value="30"></div></div></div><div class="field"><label for="object-text">Текст выбранной стороны</label><input id="object-text" type="text" maxlength="55" placeholder="Твоя идея"></div><div class="two"><div class="field"><label for="object-size">Размер текста</label><input id="object-size" type="range" min="16" max="90" value="42"></div><div class="field"><label for="object-y">Положение текста</label><input id="object-y" type="range" min="0" max="100" value="60"></div></div><div class="two"><div class="field"><label for="object-font">Шрифт</label><select id="object-font"><option value="Arial">Простой</option><option value="Georgia">Классический</option><option value="Courier New">Печатная машинка</option></select></div><div class="field"><label for="object-color">Цвет текста</label><input id="object-color" type="color" value="#008b9c" style="width:100%;height:43px"></div></div><button class="btn light" id="copy-side" type="button">Скопировать на другую сторону</button><p class="micro" style="margin-top:10px">Копирование заменит дизайн другой стороны. Если она уже заполнена, попросим подтверждение.</p><div class="control-btns"><button class="btn yellow" id="object-order" type="button">Добавить обе стороны к заказу ↗</button><button class="btn" id="object-download" type="button">Скачать обе стороны</button><button class="btn light" id="object-clear" type="button">Очистить эту сторону</button></div><p class="status" id="object-status" role="status" aria-live="polite"></p></div></div><div class="notice">Набросок показывает идею размещения. Размеры в сантиметрах, отступы, доступную область нанесения и стоимость печати с двух сторон согласуем отдельно. Пунктир не печатается. Макет для производства подготовим после проверки.</div></div></section>`}
function initObjectStudio(kind){
const $=id=>root.querySelector('#'+id),state=objectDesigns[kind]||(objectDesigns[kind]={active:0,sides:[newSide(),newSide()]}),canvas=$('object-canvas');
let alive=true;const serial=[0,0];
const fieldMap={text:'object-text',color:'object-color',font:'object-font',size:'object-size',y:'object-y',x:'object-x',artY:'object-art-y',width:'object-width'};
function has(side){return Boolean(side.img||side.text.trim())}
function draw(target,side,index){const c=target.getContext('2d');c.clearRect(0,0,target.width,target.height);c.save();c.scale(target.width/900,target.height/1050);c.fillStyle='#edf5f4';c.fillRect(0,0,900,1050);c.lineWidth=5;c.strokeStyle='#cedcdd';
let a;
if(kind==='bottle'){
const g=c.createLinearGradient(275,0,625,0);g.addColorStop(0,'#d4e2e3');g.addColorStop(.2,'#fff');g.addColorStop(.65,'#fff');g.addColorStop(1,'#d7e4e5');
c.beginPath();c.moveTo(355,235);c.quadraticCurveTo(280,260,280,350);c.lineTo(280,870);c.quadraticCurveTo(280,930,450,935);c.quadraticCurveTo(620,930,620,870);c.lineTo(620,350);c.quadraticCurveTo(620,260,545,235);c.closePath();c.fillStyle=g;c.fill();c.stroke();
c.fillStyle='#273e43';c.fillRect(354,170,192,76);c.fillStyle='#436067';c.fillRect(365,152,170,28);a={x:315,y:355,w:270,h:440};
}else{
c.beginPath();c.moveTo(345,330);c.lineTo(345,235);c.bezierCurveTo(345,92,555,92,555,235);c.lineTo(555,330);c.lineWidth=32;c.strokeStyle='#d9caae';c.stroke();c.lineWidth=5;c.strokeStyle='#c4b798';c.fillStyle='#f5edda';c.beginPath();c.moveTo(195,310);c.lineTo(705,310);c.lineTo(740,905);c.quadraticCurveTo(450,950,160,905);c.closePath();c.fill();c.stroke();a={x:265,y:420,w:370,h:380};
}
c.save();c.beginPath();c.rect(a.x,a.y,a.w,a.h);c.clip();
if(side.img){const scale=Math.min(a.w/side.img.width,a.h/side.img.height)*Number(side.width)/100,w=side.img.width*scale,h=side.img.height*scale;c.drawImage(side.img,a.x+(a.w-w)*Number(side.x)/100,a.y+(a.h-h)*Number(side.artY)/100,w,h)}
c.font='700 '+side.size+'px "'+side.font+'"';const tw=c.measureText(side.text).width,fs=Math.min(Number(side.size),Number(side.size)*(a.w-12)/Math.max(tw,1));c.font='700 '+fs+'px "'+side.font+'"';c.fillStyle=side.color;c.textAlign='center';c.textBaseline='middle';c.fillText(side.text,a.x+a.w/2,a.y+fs/2+5+(a.h-fs-10)*Number(side.y)/100);c.restore();
c.setLineDash([10,8]);c.strokeStyle='#72a6aa';c.lineWidth=2;c.strokeRect(a.x,a.y,a.w,a.h);c.setLineDash([]);c.fillStyle='#506c70';c.font='24px Arial';c.textAlign='center';c.fillText('Сторона '+(index+1)+(has(side)?'':' · без печати'),450,1005);c.restore();
}
function render(){draw(canvas,state.sides[state.active],state.active);draw($('thumb-one'),state.sides[0],0);draw($('thumb-two'),state.sides[1],1);$('side-caption').textContent='Редактируется сторона '+(state.active+1);['side-one','side-two'].forEach((id,i)=>{$(id).setAttribute('aria-pressed',String(i===state.active));$(id).className='btn'+(i===state.active?'':' light')});const side=state.sides[state.active];$('object-art-controls').hidden=!side.img;$('object-remove').hidden=!side.img;$('object-width-value').textContent=side.width+'%';$('object-file-name').textContent=side.file?side.file.name:'PNG, JPG или WebP, до 15 МБ.';const blank=!state.sides.some(has);$('object-order').disabled=blank;$('object-download').disabled=blank;}
function load(){const side=state.sides[state.active];Object.entries(fieldMap).forEach(([key,id])=>$(id).value=side[key]);$('object-file').value='';$('object-error').textContent='';render()}
Object.entries(fieldMap).forEach(([key,id])=>$(id).oninput=()=>{state.sides[state.active][key]=$(id).value;render()});
$('side-one').onclick=()=>{state.active=0;load()};$('side-two').onclick=()=>{state.active=1;load()};
$('copy-side').onclick=()=>{const target=1-state.active;if(has(state.sides[target])&&!confirm('Заменить дизайн другой стороны?'))return;serial[target]++;state.sides[target]={...state.sides[state.active]};render();$('object-status').textContent='Дизайн скопирован. Теперь стороны можно менять независимо.'};
$('object-clear').onclick=()=>{serial[state.active]++;state.sides[state.active]=newSide();load()};
$('object-remove').onclick=()=>{serial[state.active]++;state.sides[state.active].img=null;state.sides[state.active].file=null;load()};
$('object-file').onchange=()=>{const file=$('object-file').files[0];if(!file)return;const index=state.active,n=++serial[index];$('object-error').textContent='';if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>15*1024*1024){$('object-error').textContent='Выбери PNG, JPG или WebP до 15 МБ.';return}const url=URL.createObjectURL(file),im=new Image();im.onload=()=>{URL.revokeObjectURL(url);if(!alive||n!==serial[index])return;Object.assign(state.sides[index],{img:im,file});if(state.active===index)load();else render()};im.onerror=()=>{URL.revokeObjectURL(url);if(alive&&n===serial[index])$('object-error').textContent='Не удалось прочитать изображение.'};im.src=url;};
function composite(){const out=document.createElement('canvas');out.width=1800;out.height=1150;const c=out.getContext('2d');c.fillStyle='#edf5f4';c.fillRect(0,0,1800,1150);state.sides.forEach((side,i)=>{const part=document.createElement('canvas');part.width=900;part.height=1050;draw(part,side,i);c.drawImage(part,i*900,0)});c.fillStyle='#355b60';c.font='26px Arial';c.textAlign='center';c.fillText('Prompt2Print · '+(kind==='bottle'?'Бутылка':'Шоппер')+' · Набросок для согласования, без точного масштаба',900,1100);return out;}
$('object-order').onclick=()=>{studioDraft={product:kind,preview:composite().toDataURL('image/png'),sides:state.sides.map(side=>({...side})),originals:state.sides.map(side=>side.file).filter(Boolean),description:(kind==='bottle'?'Бутылка':'Шоппер')+'; '+state.sides.map((side,i)=>'сторона '+(i+1)+': '+(has(side)?[side.file?'файл '+side.file.name:'',side.text?'текст «'+side.text+'»':''].filter(Boolean).join(', '):'без печати')).join('; ')+'; размеры согласовать'};location.hash='order/'+kind;};
$('object-download').onclick=()=>{const out=composite();out.toBlob(blob=>{if(!blob){$('object-status').textContent='Не удалось создать PNG.';return}const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='Prompt2Print-'+kind+'-both-sides.png';link.textContent='Открыть PNG обеих сторон';link.className='plain-link';$('object-status').replaceChildren(link);link.click();setTimeout(()=>URL.revokeObjectURL(url),120000)},'image/png');};
cleanStudio=()=>{alive=false;};load();
}
function hideTechnicalTildaForm(){
 const details=document.querySelector('textarea[name="order_details"]');
 if(!details)return;
 const block=details.closest('.r')||details.closest('form');
 if(block){
  block.style.position='fixed';
  block.style.left='0';
  block.style.top='0';
  block.style.width='1px';
  block.style.height='1px';
  block.style.minWidth='0';
  block.style.minHeight='0';
  block.style.margin='0';
  block.style.padding='0';
  block.style.overflow='hidden';
  block.style.opacity='0';
  block.style.clipPath='inset(50%)';
  block.style.zIndex='-1';
  block.setAttribute('aria-hidden','true');
 }
}
window.addEventListener('load',()=>setTimeout(hideTechnicalTildaForm,500));setTimeout(hideTechnicalTildaForm,1000);
window.addEventListener('hashchange',route);route();
})();


(function(){
function makeFontPreview(){
const select = document.querySelector('#object-font');
if(!select || document.querySelector('.font-preview-list')) return;
const list = document.createElement('div');
list.className = 'font-preview-list';
Array.from(select.options).forEach(function(option){
const btn = document.createElement('button');
btn.type = 'button';
btn.className = 'font-preview-btn';
btn.textContent = option.textContent;
btn.style.fontFamily = option.value;
if(option.value === select.value){
btn.classList.add('active');
}
btn.onclick = function(){
select.value = option.value;
select.dispatchEvent(new Event('input',{bubbles:true}));
select.dispatchEvent(new Event('change',{bubbles:true}));
list.querySelectorAll('.font-preview-btn').forEach(function(x){
x.classList.remove('active');
});
btn.classList.add('active');
};
list.appendChild(btn);
});
select.insertAdjacentElement('afterend',list);
select.style.display = 'none';
}
makeFontPreview();
const observer = new MutationObserver(function(){
makeFontPreview();
});
observer.observe(document.body,{
childList:true,
subtree:true
});
})();


(function(){
if(window.__P2P_HELP_WIDGET__)return;window.__P2P_HELP_WIDGET__=1;
var TELEGRAM='olikns';
var names={tshirt:'футболку',sweatshirt:'толстовку',mug:'кружку',bottle:'бутылку 600 мл',coloring:'раскраску из фото',bag:'шоппер',socks:'носки',dtf:'DTF-термонаклейку'};
function cur(){var m=(location.hash||'').match(/#(?:product|studio|order)\/([^/?#]+)/);return m&&names[m[1]]?names[m[1]]:'изделие с индивидуальным принтом'}
function msg(){return'Здравствуйте! Я на сайте Prompt2Print и хочу заказать '+cur()+'. Не хочу собирать макет в конструкторе. Поможете сделать макет вместе?'}
var o=document.getElementById('p2p-help-open'),mo=document.getElementById('p2p-help-modal'),ba=document.getElementById('p2p-help-backdrop'),cl=document.getElementById('p2p-help-close'),pb=document.getElementById('p2p-help-product'),tg=document.getElementById('p2p-help-tg'),mx=document.getElementById('p2p-help-max'),st=document.getElementById('p2p-help-status');
if(!o)return;
function refresh(){pb.innerHTML='Сейчас интересует: <b>'+cur()+'</b>';tg.href='https://t.me/'+TELEGRAM}
function copy(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity=0;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove();return Promise.resolve()}
o.onclick=function(){refresh();mo.hidden=false;ba.hidden=false};cl.onclick=ba.onclick=function(){mo.hidden=true;ba.hidden=true};
tg.onclick=function(){copy(msg()).then(function(){st.textContent='Готовое сообщение скопировано. Вставь его в Telegram.'})};
mx.onclick=function(){copy(msg()+'\\nТелефон Prompt2Print: +7 (917) 104-03-38');st.textContent='Сообщение и номер скопированы. Открываю MAX.';setTimeout(function(){window.open('https://max.ru/','_blank','noopener')},100)};
window.addEventListener('hashchange',refresh);refresh();
})();