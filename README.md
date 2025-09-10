<p align="center">
<img width="237" height="235" alt="logo" src="https://github.com/user-attachments/assets/8d8e06fb-781c-4d61-bd32-fd0b8f51d671" />

  <br/>
    برنامه سازی وب، دانشگاه صنعتی شریف
    <br/>
    ارائه دهنده درس: جناب آقای یحیی پورسلطانی
    <br/>
    نویسندگان: دانیال آذرنیا، محمد فرحان بهرامی، محمدجواد خوشدونی فراهانی
    <br/>
پایه های این کار، بر اساس 
<a href="https://github.com/ssc-public/Web-Workshop/tree/master/P5js" target="_blank">تحقیق</a> 
آقایان سیدعلی طیب، احمدرضا خناری، سیدعلی حسینی بوده است و هدف بهبود تحقیق آن هاست.</p>

<div dir="rtl">

## مقدمه

### [Processing](https://processing.org/) و [P5js](https://p5js.org/) 

کتابخانه Processing پروژه ایست که در سال ۲۰۰۱ توسط دو دانشجو در MIT شروع شد. هدف این پروژه ساخت ابزاری برای طراحان و برنامه‌نویسان بود که به کمک آن بتوانند ایده‌ها و تصاویر ذهنی خود را از طریق برنامه‌نویسی مصور کنند. Processing در ابتدا در زبان برنامه‌نویسی Java نوشته شد. یکی از دلایل انتخاب این زبان، امکان قرار دادن این مصورسازی‌ها در وب (بوسیله applet ها) بود.

اما در این دوره و زمانه، زبان برنامه‌نویسی وب JavaScript است. به همین خاطر در سال ۲۰۱۳، Lavren McCarthy به کمک تیم Processing،پروژه‌ی p5js را شروع کردند.

کتابخانه P5js در واقع یک کتابخانه از توابع نسبتا ساده است که هدف ساخت برنامه‌های خلاقانه در بستر مرورگر را ممکن می‌کند. همچنین با توجه به بهینگی و کمبودن پیچیدگی توابع آن، در برخی دوره‌ها برای تدریس مبانی برنامه‌نویسی نیز از آن بهره برده می‌شود. همچنین در سایت رسمی P5js رفرنس دقیقی از تمام توابع این کتابخانه به همراه مثال‌های مختلف وجود دارد. در این آموزش سعی کرده‌ایم توابع پرکاربرد تر این کتابخانه را بررسی کنیم.

### یک sketch ساده

بد نیست پیش از بررسی توابع این کتابخانه، یک بار ساختار کلی یک کد p5js را مشاهده کنیم. برای اجرای کد P5js تنها کافیست دو فایل p5.min.js و p5.sound.min.js را در فایل index.html خود (به همراه فایل sketch.js که شامل کد p5 شماست)اضافه کنید. همچنین برای شروع می‌توانید از وایرایشگر تحت وب p5 نیز استفاده کنید.
```javascript
function setup {
  createCanvas(400, 400);
}

function draw {
  background(220);
  circle(width / 2, height / 2, 400);
}
```
در مثال بالا، ابتدا یک canvas (پنجره‌ي برنامه‌ی شما) به ابعاد 400x400 ساخته می‌شود. سپس در هر frame بکگراند آن خاکستری می‌شود و یک دایره در نقطه وسط صفحه و به قطر ۴۰۰ رسم می‌شود. در ادامه با تمام توابع استفاده شده در این کد و بسیاری توابع کاربرد دیگر در این کتابخانه آشنا خواهیم شد.


## توابع پایه

### preload، setup، draw

این سه تابع، مراحل کلی شروع و ادامه اجرای برنامه را شکل می‌دهند. این توابع توسط خود p5js فراخوانی می‌شوند.

#### preload
تابع preload مستقیماً قبل از اجرای setup فراخوانی می‌شود و برای مدیریت بارگذاری همزمان فایل‌های خارجی به صورت blocking مورد استفاده قرار می‌گیرند. اگر یک تابع preload تعریف شود، setup منتظر می‌ماند تا اجرای آن به طور کامل تمام شود. هیچ چیز جز تماس‌های load (loadImage، loadJSON، loadFont، loadStrings و غیره) نباید در داخل تابع preload قرار گیرد. اگر بارگذاری asynchronous ترجیح داده شود، می‌توان از تماس‌های load در داخل setup یا هر جای دیگر با استفاده از پارامتر callback استفاده کرد.

#### setup
تابع setup یک بار در زمان شروع برنامه فراخوانی می‌شود. از این تابع برای تعیین ویژگی‌های محیط اولیه نظیر اندازه صفحه و رنگ پس‌زمینه و بارگذاری رسانه‌ها مانند تصاویر و فونت‌ها استفاده می‌شود. تنها یک تابع setup برای هر برنامه وجود دارد و بعد از اجرای اولیه خود دیگر نباید فراخوانی شود.

توجه: متغیرهای declare شده در داخل setup در توابع دیگر قابل دسترسی نیستند.

#### draw
تابع draw مستقیماً پس از setup فراخوانی می‌شود و خطوط کد موجود در داخل خود را به طور مداوم اجرا می‌کند تا برنامه متوقف شود یا تا زمانی که noLoop فراخوانی شود.

تعداد اجراهای draw در هر ثانیه با استفاده از تابع frameRate قابل کنترل است. در هر اسکچ، تنها یک تابع draw وجود دارد.

تابع draw همواره باید با استفاده از noLoop، redraw و loop کنترل شود.

### loop، noLoop، isLooping, redraw

توابع loop و noLoop برای فعال و غیرفعال کردن حلقه اجرای draw مورد استفاده قرار می‌گیرند. توابع isLooping نیز وضعیت فعلی حلقه را بررسی می‌کند.

در شرایط noLoop می‌توان از تابع redraw برای اجرای تابع draw در یک زمان خاص (مثل کلیک mouse) استفاده کرد.

### push، pop

توابع push و pop برای ذخیره و بازیابی وضعیت ماتریس تبدیلات، رنگ، و دیگر تنظیمات گرافیکی مورد استفاده قرار می‌گیرند. در بخش تبدیلات کاربرد این تابع را بهتر خواهیم دید.

## اشکال

کتابخانه p5js شامل اشکال رایج مثل circle, triangle, elipse, rect, ... هست، اما در این بخش، موارد سوال برانگیز در رابطه با اشکال در p5 را بررسی می‌کنیم. 
### beginShape, vertex, endShape

#### beginShape
توابع beginShape و endShape امکان ایجاد اشکال پیچیده‌ را فراهم می‌کنند. beginShape شروع به ضبط نقاط یک شکل هندسی می‌کند و endShape این ضبط را متوقف می‌کند. تابع vertex برای مشخص کردن مختصات نقاط برای نقاط، خطوط، مثلث‌ها، چهارضلعی‌ها و چندضلعی‌ها استفاده می‌شود. این تابع به صورت انحصاری در داخل توابع beginShape و endShape استفاده می‌شود.


مثال:

```javascript
function setup {
    createCanvas(100, 100);
    translate(50);
    beginShape;
    vertex(-10, 10);
    vertex(0, 35);
    vertex(10, 10);
    vertex(35, 0);
    vertex(10, -8);
    vertex(0, -35);
    vertex(-10, -8);
    vertex(-35, 0);
    vertex(-10, 10);
    endShape;
}
```

### ellipseMode، rectMode

#### rectMode
تابع rectMode مکانی که مستطیل‌ها و مربع‌ها رسم می‌شوند را تغییر می‌دهد. تابع ellipseMode نیز مکانی که بیضی‌ها، دایره‌ها و قوس‌ها رسم می‌شوند را تغییر می‌دهد.
به طور پیش‌فرض، دو پارامتر اول مختصات x و y نقطه بالا-چپ شکل هستند. پارامترهای بعدی عرض و ارتفاع باکس شکل هستند. این معادل فراخوانی دو تابع مذکور با آرگومان CORNERS است. در زیر بقیه‌ی آرگومان‌های ممکن را بررسی می‌کنیم.

CENTER از دو پارامتر اول به عنوان مختصات x و y مرکز شکل استفاده می‌کند. پارامترهای بعدی عرض و ارتفاع هستند.

RADIUS همچنین از دو پارامتر اول به عنوان مختصات x و y مرکز شکل استفاده می‌کند. پارامترهای بعدی نصف عرض و ارتفاع شکل هستند.

آرگومان ارسالی به این توابع باید با حروف بزرگ (ALL CAPS) نوشته شود زیرا ثابت‌های CENTER، RADIUS، CORNER و CORNERS به این صورت تعریف شده‌اند. 

## DOM

در این بخش از p5js تعداد زیادی توابع برای ساخت المان‌های مختلف وجود دارد که به موارد پرکاربردتر اشاره می‌کنیم:
### createSlider
تابع createSlider یک المان ورودی از نوع اسلایدر `<input></input>` ایجاد می‌کند. اسلایدرهای محدوده‌ای برای سریع انتخاب اعداد از یک محدوده داده شده مفید هستند.

پارامترهای اول و دوم، min و max، اعدادی هستند که حداقل و حداکثر اسلایدر را تعیین می‌کنند.

پارامتر سوم، value، اختیاری است. عددی که مقدار پیش‌فرض اسلایدر را تنظیم می‌کند.

پارامتر چهارم، step، نیز اختیاری است. عددی که فاصله بین هر مقدار در محدوده اسلایدر را تعیین می‌کند. تنظیم step به 0 این امکان را فراهم می‌کند که اسلایدر به صورت صاف از min به max حرکت کند.

### createButton
تابع createButton یک المان دکمه `<button></button>` ایجاد می‌کند.

پارامتر اول، label، یک رشته است که برچسب نمایش داده شده بر روی دکمه را تنظیم می‌کند.

### createInput
تابع createInput یک المان متنی `<input></input>` ایجاد می‌کند. با فراخوانی `myInput.size` می‌توانید طول جعبه متن را تنظیم کنید.

پارامتر اول، value، اختیاری است. یک رشته که مقدار پیش‌فرض ورودی را تنظیم می‌کند. ورودی به طور پیش‌فرض خالی است.

### createFileInput
تابع createFileInput یک المان `<input></input>` از نوع 'file' ایجاد می‌کند. این امکان را به کاربر می‌دهد تا فایل‌های محلی را برای استفاده در یک اسکچ انتخاب کند.

پارامتر اول، callback، یک تابع است که هنگام بارگذاری فایل فراخوانی می‌شود. تابع با یک پارامتر، file (یک شیء p5.File)، باید فراخوانی شود.

پارامتر دوم، multiple، اختیاری است. یک مقدار بولی که اگر به true تنظیم شود، امکان بارگذاری چندین فایل را فراهم می‌کند. در صورت true بودن، callback برای هر فایل یکبار فراخوانی می‌شود.


## رنگ

### p5.Color
در p5.js، p5.Color یک کلاس است که امکان ایجاد و مدیریت رنگ‌ها را فراهم می‌کند. با استفاده از این کلاس، می‌توانید رنگ‌ها را به صورت RGB یا HSB ایجاد کرده و ویژگی‌های مختلف آنها را تغییر دهید.

### استخراج ویژگی‌های رنگ

برای استخراج ویژگی‌های رنگ از یک شیء p5.Color، می‌توانید از متد‌های red، green، blue برای حالت RGB یا hue، saturation، brightness برای حالت HSB استفاده کنید. این متدها به ترتیب مقدار رنگ قرمز، سبز، آبی یا هیو، اشباع و روشنایی را باز می‌گردانند.

```javascript
let c = color(255, 0, 0); // یک رنگ قرمز ایجاد می‌کند
let r = red(c); // بازگرداندن مقدار قرمز
let g = green(c); // بازگرداندن مقدار سبز
let b = blue(c); // بازگرداندن مقدار آبی
```
### lerpColor

تابع lerpColor از دو رنگ و یک عدد میانگین، یک رنگ ترکیبی ایجاد می‌کند. این تابع برای ایجاد انتقال رنگ یا انیمیشن‌های تغییر رنگ مفید است.

```javascript
let c1 = color(255, 0, 0); // رنگ قرمز
let c2 = color(0, 0, 255); // رنگ آبی
let cBlend = lerpColor(c1, c2, 0.5); // ترکیب رنگ قرمز و آبی با میانگین 0.5
```

### colorMode

تابع colorMode امکان تعیین حالت رنگ (RGB یا HSB) و محدوده مقادیر رنگ را فراهم می‌کند.


```javascript
colorMode(RGB, 255); // حالت RGB با محدوده 0 تا 255
colorMode(HSB, 100); // حالت HSB با محدوده 0 تا 100
```

### background, clear

توابع background و clear برای تنظیم رنگ پس‌زمینه صفحه به یک رنگ خاص یا پاکسازی محتوای فعلی استفاده می‌شوند.

```javascript
background(255, 0, 0); // تنظیم رنگ پس‌زمینه به قرمز
clear; // پاکسازی محتوای صفحه
```

### fill, noFill, stroke, noStroke

توابع fill و stroke برای تعیین رنگ پرکردن و حاشیه اشیاء به ترتیب مورد استفاده قرار می‌گیرند. توابع noFill و noStroke برای خاموش کردن پرکردن و حاشیه به ترتیب مورد استفاده می‌شوند.


```javascript
fill(0, 255, 0); // تعیین رنگ پرکردن به سبز
stroke(0, 0, 255); // تعیین رنگ حاشیه به آبی
noFill; // خاموش کردن پرکردن
noStroke; // خاموش کردن حاشیه
```
## تبدیل‌ها

توجه مهم: سیستم مختصات نقاشی در ابتدای هر فراخوانی draw بازنشانی خواهد شد. اگر هر گونه تغییرات (مانند scale، rotate، translate) در داخل draw انجام شود، تأثیرات آنها در ابتدای draw لغو خواهد شد، بنابراین تغییرات در طول زمان ادغام نخواهند شد. از سوی دیگر، استایل‌های اعمال شده (مانند fill، stroke و غیره) در اثر باقی خواهند ماند.


#### rotate
تابع rotate مختصات را به میزان تعیین شده توسط پارامتر angle می‌چرخاند. این تابع با استفاده از push و pop قابل کنترل بیشتر است.

#### scale
تابع scale اندازه مختصات را با گسترش یا تقلیل تغییر می‌دهد. اشیاء همیشه از مبدا نسبت به سیستم مختصات مقیاس می‌شوند. مقادیر مقیاس به عنوان درصدهای اعشاری مشخص می‌شوند. به عنوان مثال، فراخوانی تابع scale(2.0) ابعاد یک شکل را به نسبت 200٪ افزایش می‌دهد.

تبدیل‌ها به هر چیزی که بعد از آن اتفاق می‌افتد اعمال می‌شود و فراخوانی‌های متعاقب به تابع اثر را تجمع می‌دهند. به عنوان مثال، فراخوانی scale(2.0) و سپس scale(1.5) همان scale(3.0) است. این تابع با استفاده از push و pop قابل کنترل بیشتر است.

#### translate
تابع translate مبدا مختصات را به اندازه x, y جابجا می‌کند. تبدیل‌ها تجمعی هستند و بر روی هر چیزی که بعد از آن اتفاق می‌افتد اعمال می‌شوند و فراخوانی‌های متعاقب به تابع اثر را تجمع می‌دهند. به عنوان مثال، فراخوانی translate(50, 0) و سپس translate(20, 0) همان translate(70, 0) است. اگر translate درون draw فراخوانی شود، تبدیل هنگام شروع مجدد حلقه بازنشانی می‌شود. این تابع با استفاده از push و pop قابل کنترل بیشتر است.



## رویداد (Event) ها

### Keyboard

#### keyIsPressed
متغیر سیستمی keyIsPressed درست است اگر هر کلیدی فشرده شده باشد و غلط است اگر هیچ کلیدی فشرده نشده باشد.

#### keyPressed
تابع keyPressed یکبار در هر بار فشرده شدن یک کلید فراخوانی می‌شود. keyCode مربوط به کلیدی که فشرده شده است در متغیر keyCode ذخیره می‌شود. این تابع را خود برنامه‌نویس می‌تواند پیاده کند.

به دلیل چگونگی که سیستم‌های عامل با تکرار کلیدها برخورد می‌کنند، نگه داشتن یک کلید ممکن است باعث چندین فراخوانی keyTyped (و همچنین keyReleased) شود. نرخ تکرار توسط سیستم عامل و تنظیمات هر کامپیوتر تعیین می‌شود.

ممکن است مرورگرها به رویدادهای مختلف کلیدی رفتارهای پیش‌فرض متفاوتی اضافه کرده باشند. برای جلوگیری از هر گونه رفتار پیش‌فرض برای این رویداد، "return false" را به انتهای متد اضافه کنید.

#### keyReleased
تابع keyReleased یکبار در هر بار رها شدن یک کلید فراخوانی می‌شود.

ممکن است مرورگرها به رویدادهای مختلف کلیدی رفتارهای پیش‌فرض متفاوتی اضافه کرده باشند. برای جلوگیری از هر گونه رفتار پیش‌فرض برای این رویداد، "return false" را به انتهای تابع اضافه کنید.

#### keyTyped
تابع keyTyped یکبار در هر بار فشرده شدن یک کلید، به جز کلیدهای عمل مانند Backspace، Delete، Ctrl، Shift و Alt، فراخوانی می‌شود.

ممکن است مرورگرها به رویدادهای مختلف کلیدی رفتارهای پیش‌فرض متفاوتی اضافه کرده باشند. برای جلوگیری از هر گونه رفتار پیش‌فرض برای این رویداد، "return false" را به انتهای تابع اضافه کنید.

#### keyIsDown
تابع keyIsDown بررسی می‌کند که آیا کلید در حال حاضر پایین (فشرده) است یا نه.


### Mouse

#### mousePressed
تابع mousePressed یک بار پس از هر فشار دکمه موس فراخوانی می‌شود.

#### mouseReleased
تابع mouseReleased هر بار که یک دکمه موس رها شده است، فراخوانی می‌شود. اگر هیچ تابع mouseReleased تعریف نشده باشد، تابع touchEnded به جای آن فراخوانی می‌شود.

#### mouseClicked
تابع mouseClicked یک بار پس از فشردن و سپس رها کردن یک دکمه موس فراخوانی می‌شود.




## تصویر

### loadImage, image

تابع loadImage یک تصویر را بارگذاری کرده و یک شیء p5.Image ایجاد می‌کند.
تابع image یک تصویر منبع را روی canvas نمایش می‌دهد.


### tint, noTint

تابع tint تصاویر را با یک رنگ مشخص رنگ می‌کند. noTint هم این تاثیر را حدف می‌کند.


### loadPixels

تابع loadPixels پیکسل‌های تصویر را لود می‌کند و در متغیری داخل p5.Image قرار می‌دهد.


## 🌐 سه‌بعدی‌سازی و WebGL در p5.js

کتابخانه‌ی **p5.js** به طور پیش‌فرض محیط دوبعدی (2D) ارائه می‌دهد، اما با استفاده از حالت **WebGL** می‌توان اشیاء سه‌بعدی را رسم و کنترل کرد.  
**WebGL (Web Graphics Library)** یک API برای رندر گرافیک سه‌بعدی در مرورگر است که به کمک GPU سرعت بالایی دارد.

### فعال‌سازی WebGL
برای فعال کردن محیط سه‌بعدی کافی است در `createCanvas` حالت `"WEBGL"` را فعال کنیم:

```javascript
function setup() {
  createCanvas(600, 400, WEBGL);
}
```
## ⚡ ایجاد محیط سه‌بعدی

- `createCanvas(width, height, WEBGL)` → فعال کردن حالت **WebGL** برای رسم سه‌بعدی.  
- `resizeCanvas(width, height)` → تغییر سایز بوم هنگام تغییر اندازه صفحه.

## 🔷 اشیای سه‌بعدی

- `sphere(r)` → رسم **کره** با شعاع `r`.  
- `box(w, h, d)` → رسم **مکعب** با ابعاد مشخص.  
- `cone(r, h)` → رسم **مخروط**.  
- `torus(r1, r2)` → رسم **دونات** (حلقه‌ی سه‌بعدی).  
- `cylinder(r, h)` → رسم **استوانه** .

## 🎨 نورپردازی و مواد

- `ambientLight(r, g, b)` → نور محیطی که کل صحنه را روشن می‌کند.  
- `pointLight(r, g, b, x, y, z)` → نور نقطه‌ای در موقعیت مشخص.  
- `directionalLight(r, g, b, x, y, z)` → نور جهت‌دار .  
- `emissiveMaterial(r, g, b)` → ماده‌ی خودتابان.  
- `specularMaterial(r, g, b)` → ماده‌ی بازتابنده‌ی نور .  
- `shininess(value)` → میزان درخشندگی سطح اشیا.

## 🔄 چرخش و حرکت

- `rotateX(angle)` → چرخش حول محور X.  
- `rotateY(angle)` → چرخش حول محور Y.  
- `rotateZ(angle)` → چرخش حول محور Z.  
- `translate(x, y, z)` → جابه‌جایی اشیا در فضای سه‌بعدی.

## 🪐 کنترل دوربین

- `orbitControl()` → امکان چرخش و بزرگنمایی/کوچکنمایی با ماوس یا لمس صفحه.

این توابع بخش کوچکی از توابع 3 بعدی سازی هستند. در ادامه با استفاده از این توابع چند مثال میزنیم.
## مثال ها


این مثال بخشی از مثال سایت p5 برداشته شده و از شکل های ساده هندسی استفاده شده است. در نهایت ما یک شی دیگر اضافه کرده ایم تا نشان دهیم هرشکلی را به صورت 3 بعدی پیاده سازی کرد:
```javascript
function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  normalMaterial();

  describe(
    'Eight 3D shapes: a plane, box, cylinder, cone, torus, sphere, ellipsoid, and a custom 3D shape (replacing astronaut). Each shape is rotating in all directions.'
  );
}

function draw() {
  background(250);

  // Plane
  push();
  translate(-250, -100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();

  // Box
  push();
  translate(-75, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();

  // Cylinder
  push();
  translate(100, -100, 0);
  rotateWithFrameCount();
  cylinder(70, 70);
  pop();

  // Cone
  push();
  translate(275, -100, 0);
  rotateWithFrameCount();
  cone(50, 70);
  pop();

  // Torus
  push();
  translate(-250, 100, 0);
  rotateWithFrameCount();
  torus(50, 20);
  pop();

  // Sphere
  push();
  translate(-75, 100, 0);
  rotateWithFrameCount();
  stroke(0);
  sphere(50);
  pop();

  // Ellipsoid
  push();
  translate(100, 100, 0);
  rotateWithFrameCount();
  ellipsoid(20, 40, 40);
  pop();

  // Custom 3D shape (replacing astronaut)
  push();
  translate(275, 100, 0);
  rotateWithFrameCount();
  rotateZ(45);
  customShape();
  pop();
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}

function customShape() {
  beginShape();
  for (let i = 0; i < 360; i += 10) {
    let x = 40 * cos(i) + 20 * cos(3*i);
    let y = 40 * sin(i) + 20 * sin(3*i);
    let z = 20 * sin(5*i);
    vertex(x, y, z);
  }
  endShape(CLOSE);
}


```
مثال زیر مثال ساده دیگری برای نشان دادن کاربرد توابع orbitControl و rotate در جهت های مختلف هندسی است:
```javascript
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2); 
  noFill();
  stroke(32, 8, 64);
  
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a dense sphere of dark purple cubes on a light pink background.'
  );
}

function draw() {
  background(250, 180, 200);
  orbitControl();

  for (let zAngle = 0; zAngle <= 180; zAngle += 15) {
    for (let xAngle = 0; xAngle < 360; xAngle += 15) {
      push();
      rotateZ(zAngle);
      rotateX(xAngle);
      translate(0, 400, 0);
      box(15); 
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

```
در نهایت با استفاده از ابزار های هوش مصنوعی با استفاده از توابعی که بالاتر تعریف کردیم، منظومه شمسی را به صورت 3 بعدی شبیه سازی کردیم. این بخش به صورت کامل تر در ویدئو نشان داده خواهد شد. تصویر آن:

<img width="1907" height="831" alt="Screenshot (295)" src="https://github.com/user-attachments/assets/6d57ed60-58a6-430a-b8a9-a61f8fd24274" />

</div>

<div dir="rtl" align="right">

## 🧠 نقش p5.js در شبیه‌سازی مفاهیم علمی
این کتابخانه، برای شبیه سازی مفاهیم فیزیکی و ریاضی استفاده میشود و بسیار قدرتمند است و ما شبیه ساز هایی اماده کردیم برای که با استفاده از این کتابخانه کد های انرا اماده کردیم، ما پنج تا شبیه ساز اماده کردیم، اولی شبیه ساز جاذبه و پرتاب است که میتوانیم تاثیر سرعت اولیه و جاذبه را روی توپ ببینیم. در شبیه سازی بعدی ما میخواهیم که تبدیل انرژی جنبشی و پتانسیل اونگ را با ضریب میرایی ببینیم و درقسمت بعدی شبیه سازی امواج دریا را پیاده سازی میکنیم با توابع سینسوسی، در شبیه سازی بعدی انتشار ذرات را با طول عمر و حرکت در هوا با مقاومت هوا شبیه سازی میکند. و در شبیه سازی اخر هم درخت فرکتال را رسم کردیم.
## 🎯 ۱. مدل‌سازی فیزیک واقع‌گرایانه
- امکان پیاده‌سازی دقیق معادلات حرکت، نیروها و برهمکنش‌های فیزیکی را فراهم می‌آورد
- حلقه draw() با نرخ فریم ثابت، شبیه‌سازی پویا و روانی ایجاد می‌کند

## 📊 ۲. تجسم مفاهیم انتزاعی ریاضی
- ترسیم نمودارها و اشکال پیچیده ریاضی با توابع ساده
- نمایش بصری توابع سینوسی، معادلات دیفرانسیل و ساختارهای فراکتالی
- تبدیل مفاهیم انتزاعی به تصاویر قابل درک و تعاملی

## 🔬 ۳. یادگیری تعاملی و آزمایشگاه مجازی
- کاربران می‌توانند پارامترها را تغییر داده و نتایج را بلافاصله مشاهده کنند
- ایجاد محیطی امن برای آزمایش بدون نیاز به تجهیزات فیزیکی
- امکان بررسی سناریوهای مختلف با تغییر شرایط اولیه

## 📈 ４. جمع‌آوری و نمایش داده‌ها
- نمایش همزمان پدیده فیزیکی و داده‌های عددی مربوطه
- نمودارهای بلادرنگ برای نمایش روابط بین متغیرها
- امکان بررسی کمی و کیفی پدیده‌ها به صورت همزمان

</div>
## 🎨 راه‌اندازی و ساخت بوم (Canvas)
- در ابتدای پروژه کتابخانه **p5.js** به صورت CDN در فایل HTML بارگذاری می‌شود:  

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
```

- سپس در تابع `setup()` بوم اصلی ساخته می‌شود:

```javascript
function setup() {
  canvas = createCanvas(800, 500);
  canvas.parent('canvas-container'); // اتصال به بخش مشخصی از HTML
}
```

- این بوم پایه‌ی اصلی برای رسم اشکال، انیمیشن و محاسبات فیزیکی است.

---

## 🌀 چرخه‌ی ترسیم (Loop)

- در p5.js تابع `draw()` مثل یک حلقه بی‌نهایت در هر فریم اجرا می‌شود.  
- در این پروژه از `switch` استفاده شده تا بسته به دکمه‌ی انتخابی، شبیه‌سازی مربوطه نمایش داده شود:  

```javascript
function draw() {
  background(20, 30, 50); // پس‌زمینه
  switch(currentDemo) {
    case 'gravity': drawGravityDemo(); break;
    case 'pendulum': drawPendulumDemo(); break;
    case 'waves': drawWavesDemo(); break;
    case 'particles': drawParticlesDemo(); break;
    case 'fractal': drawFractalDemo(); break;
  }
}
```

---

## 🌍 شبیه‌سازی جاذبه و پرتابه

- برای حرکت پرتابه‌ها از **بردارها (p5.Vector)** استفاده شده است:  

```javascript
function drawGravityDemo() {
            // رسم زمین
            stroke(100, 255, 100);
            strokeWeight(3);
            line(0, height - 30, width, height - 30);
            
            // رسم خط هدایت
            if(isDragging) {
                stroke(255, 100, 100, 150);
                strokeWeight(2);
                line(mouseStartX, mouseStartY, mouseX, mouseY);
                
                // نمایش سرعت اولیه
                let vel = createVector(mouseX - mouseStartX, mouseY - mouseStartY);
                vel.mult(0.3);
                stats.initialVelocity = vel.mag().toFixed(1);
                stats.launchAngle = (-atan2(vel.y, vel.x) * 180 / PI).toFixed(0);
                
                // نمایش پیش‌بینی مسیر
                stroke(255, 255, 0, 100);
                strokeWeight(1);
                noFill();
                beginShape();
                for(let t = 0; t < 100; t += 2) {
                    let x = mouseStartX + vel.x * t;
                    let y = mouseStartY + vel.y * t + 0.5 * gravity.y * t * t;
                    if(y > height - 30 || x > width) break;
                    vertex(x, y);
                }
                endShape();
            }
            
            // به‌روزرسانی پرتابه‌ها
            for(let i = projectiles.length - 1; i >= 0; i--) {
                let p = projectiles[i];
                
                p.velocity.add(gravity);
                p.position.add(p.velocity);
                
                // اضافه کردن به مسیر
                p.trail.push(p.position.copy());
                if(p.trail.length > 30) {
                    p.trail.splice(0, 1);
                }
                
                // رسم مسیر
                stroke(255, 150 + sin(frameCount * 0.1) * 50, 100, 200);
                strokeWeight(2);
                for(let j = 1; j < p.trail.length; j++) {
                    let alpha = map(j, 0, p.trail.length, 0, 255);
                    stroke(255, 100, 50, alpha);
                    line(p.trail[j-1].x, p.trail[j-1].y, p.trail[j].x, p.trail[j].y);
                }
                
                // رسم پرتابه
                fill(255, 200 + sin(frameCount * 0.2 + i) * 55, 100);
                noStroke();
                ellipse(p.position.x, p.position.y, p.size, p.size);
                
                // حذف پرتابه
                if(p.position.y > height - 30 || p.position.x > width) {
                    stats.range = p.position.x;
                    projectiles.splice(i, 1);
                }
            }
        }


```

<div dir="rtl">

مسیر حرکت پرتابه با استفاده از فرمول‌های فیزیک محاسبه و نمایش داده می‌شود:

سرعت: v = v₀ + gt

مکان: s = v₀t + ½gt²

قابلیت پیش‌بینی مسیر قبل از پرتاب با رسم خطوط نقطه‌ای زرد وجود دارد.

تعداد پرتابه‌ها، زاویه و برد نیز به‌صورت زنده محاسبه می‌شوند.

</div>



## ⚖️ شبیه‌سازی آونگ

- معادلات دینامیکی آونگ ساده به‌صورت زیر پیاده‌سازی شده است:  

```javascript
function drawPendulumDemo() {
            for(let p of pendulums) {
                // محاسبه نیروها
                let gravity = 0.4;
                let angularAcc = (-gravity / p.length) * sin(p.angle);
                
                p.angularVel += angularAcc;
                p.angularVel *= 0.999; // میرایی بسیار کم برای حفظ انرژی
                p.angle += p.angularVel;
                
                // موقعیت وزنه
                let bobX = p.x + p.length * sin(p.angle);
                let bobY = p.y + p.length * cos(p.angle);
                
                // رسم ریسمان
                stroke(200, 200, 200);
                strokeWeight(2);
                line(p.x, p.y, bobX, bobY);
                
                // رسم مسیر (قوس دایره)
                stroke(p.color[0], p.color[1], p.color[2], 50);
                strokeWeight(1);
                noFill();
                let startAngle = -PI/3;
                let endAngle = PI/3;
                arc(p.x, p.y, p.length * 2, p.length * 2, startAngle, endAngle);
                
                // نقطه تکیه
                fill(100);
                noStroke();
                ellipse(p.x, p.y, 8, 8);
                
                // وزنه
                fill(p.color[0], p.color[1], p.color[2]);
                ellipse(bobX, bobY, 20, 20);
                
                // محاسبه انرژی‌ها (فیزیک صحیح)
                let mass = 1; // جرم واحد
                let g = 0.4;  // شتاب جاذبه
                
                // انرژی جنبشی: KE = 0.5 * m * (L * ω)²
                let linearVelocity = abs(p.angularVel * p.length);
                let ke = 0.5 * mass * linearVelocity * linearVelocity;
                
                // انرژی پتانسیل: PE = mgh = mg * L * (1 - cos(θ))
                let height = p.length * (1 - cos(p.angle));
                let pe = mass * g * height;
                
                // انرژی کل
                let totalEnergy = ke + pe;
                
                // نمایش انرژی‌ها
                fill(255);
                textAlign(CENTER);
                textSize(11);
                text(`KE: ${ke.toFixed(2)}`, p.x, p.y + p.length + 30);
                text(`PE: ${pe.toFixed(2)}`, p.x, p.y + p.length + 45);
                text(`Total: ${totalEnergy.toFixed(2)}`, p.x, p.y + p.length + 60);
                
                // نمایش نوار انرژی
                let barWidth = 60;
                let barHeight = 8;
                let barY = p.y + p.length + 75;
                
                // نوار کل انرژی (زمینه)
                fill(50);
                rect(p.x - barWidth/2, barY, barWidth, barHeight);
                
                if(totalEnergy > 0) {
                    // نوار انرژی جنبشی (قرمز)
                    fill(255, 100, 100);
                    let keWidth = (ke / totalEnergy) * barWidth;
                    rect(p.x - barWidth/2, barY, keWidth, barHeight);
                    
                    // نوار انرژی پتانسیل (آبی)
                    fill(100, 100, 255);
                    let peWidth = (pe / totalEnergy) * barWidth;
                    rect(p.x - barWidth/2 + keWidth, barY, peWidth, barHeight);
                }
                
                // قاب نوار
                noFill();
                stroke(255);
                rect(p.x - barWidth/2, barY, barWidth, barHeight);
            }
            
            // اطلاعات بقای انرژی
            fill(255);
            textAlign(LEFT);
            textSize(14);
            text('⚖️ قانون بقای انرژی: KE + PE = ثابت', 20, 30);
            text('🔴 قرمز: انرژی جنبشی (KE)', 20, 50);
            text('🔵 آبی: انرژی پتانسیل (PE)', 20, 70);
            text('کلیک نزدیک آونگ برای اختلال', 20, 90);
        }
```
<div dir="rtl">

 انرژی‌ها نیز محاسبه و نمایش داده می‌شوند:  
   انرژی جنبشی (KE): `0.5 * m * (L * ω)²`  
   انرژی پتانسیل (PE): `m * g * h`  
   مجموع انرژی (قانون بقای انرژی): ثابت  

 در صفحه نوارهای رنگی قرمز و آبی نشان‌دهنده نسبت انرژی جنبشی و پتانسیل هستند.  


</div>
## 🌊 شبیه‌سازی امواج

- امواج با استفاده از توابع سینوسی رسم شده‌اند:  

```javascript
function drawWavesDemo() {
            // گرادیانت پس‌زمینه
            for(let i = 0; i <= height; i++) {
                let alpha = map(i, 0, height, 0, 1);
                let c = lerpColor(color(50, 100, 200), color(20, 50, 100), alpha);
                stroke(c);
                line(0, i, width, i);
            }
            
            // رسم امواج
            for(let w = 0; w < waves.length; w++) {
                let wave = waves[w];
                
                fill(255, 255, 255, 100 - w * 20);
                noStroke();
                
                beginShape();
                vertex(0, height);
                
                for(let x = 0; x <= width; x += 3) {
                    let y = height/2 + wave.amplitude * sin(x * wave.frequency + wave.phase + frameCount * wave.speed);
                    vertex(x, y);
                }
                
                vertex(width, height);
                endShape(CLOSE);
                
                wave.phase += wave.speed;
            }
            
            // نمایش معادله موج
            fill(255);
            textAlign(LEFT);
            textSize(14);
            text('معادله موج: y = A × sin(fx + φ + t)', 20, 30);
            text(`A: دامنه، f: فرکانس، φ: فاز، t: زمان`, 20, 50);
        }
```

- برای طبیعی‌تر شدن، چند لایه موج با دامنه و سرعت‌های متفاوت روی هم ترسیم شده‌اند.  
- در بخش بالای صفحه فرمول کلی موج نیز نمایش داده می‌شود:  

```
y = A × sin(fx + φ + t)
```

---

## ✨ شبیه‌سازی سیستم ذرات

- ذرات به صورت تصادفی تولید می‌شوند:  

```javascript
function drawParticlesDemo() {
            // تولید ذرات جدید
            if(frameCount % 3 == 0) {
                particles.push({
                    x: width/2 + random(-20, 20),
                    y: height - 50,
                    vx: random(-3, 3),
                    vy: random(-8, -3),
                    life: 255,
                    size: random(3, 8),
                    color: [random(200, 255), random(100, 200), random(50, 150)]
                });
            }
            
            // به‌روزرسانی ذرات
            for(let i = particles.length - 1; i >= 0; i--) {
                let p = particles[i];
                
                // فیزیک
                p.vy += 0.1; // جاذبه
                p.vx *= 0.99; // مقاومت هوا
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 3;
                
                // رسم
                let alpha = map(p.life, 0, 255, 0, 255);
                fill(p.color[0], p.color[1], p.color[2], alpha);
                noStroke();
                ellipse(p.x, p.y, p.size, p.size);
                
                // حذف ذرات مرده
                if(p.life <= 0 || p.y > height) {
                    particles.splice(i, 1);
                }
            }
            
            // نمایش منبع
            fill(255, 200, 0);
            ellipse(width/2, height - 50, 15, 15);
        }
```



- پس از پایان عمر (`life <= 0`) ذره حذف می‌شود.  

---

## 🌳 شبیه‌سازی فراکتال بازگشتی

- الگوریتم بازگشتی برای ترسیم درخت فراکتال به‌کار رفته است:  

```javascript
function drawFractalDemo() {
            translate(width/2, height - 50);
            stroke(100, 255, 100);
            strokeWeight(2);
            
            angle = map(mouseX, 0, width, 0, PI/2);
            
            branch(80);
            
            // اطلاعات
            fill(255);
            textAlign(LEFT);
            text(`زاویه: ${(angle * 180 / PI).toFixed(1)}°`, -width/2 + 20, -height + 80);
            text('حرکت ماوس برای تغییر زاویه', -width/2 + 20, -height + 100);
        }

        function branch(len) {
            line(0, 0, 0, -len);
            translate(0, -len);
            
            if(len > 4) {
                push();
                rotate(angle);
                branch(len * 0.67);
                pop();
                
                push();
                rotate(-angle);
                branch(len * 0.67);
                pop();
            }
        }
```

- زاویه `angle` با حرکت ماوس تغییر می‌کند و باعث تغییر شکل درخت می‌شود.  

---

## 🖱️ تعامل با کاربر

 **mousePressed()** → شروع پرتاب توپ یا ایجاد اختلال در آونگ‌ها  
 **mouseReleased()** → ثبت پرتابه جدید و آغاز حرکت آن  
 **حرکت ماوس** → تغییر زاویه شاخه‌ها در فراکتال  

مثال:  

```javascript
function mouseReleased() {
  if(currentDemo === 'gravity' && isDragging) {
    let velocity = createVector(mouseX - mouseStartX, mouseY - mouseStartY);
    velocity.mult(0.3);
    projectiles.push({
      position: createVector(mouseStartX, mouseStartY),
      velocity: velocity.copy(),
      size: 12
    });
    stats.projectileCount++;
    isDragging = false;
  }
}
```

---

<div dir="rtl">

## 📊 نمایش داده‌ها و آمار

بخش آماری پروژه شامل:

- ▪️ تعداد پرتابه‌ها  
- ▪️ سرعت اولیه  
- ▪️ زاویه پرتاب  
- ▪️ برد پرتابه  

این مقادیر در هر فریم به‌روز شده و به‌صورت زنده نمایش داده می‌شوند.  

</div>

---


## منابع

[رفرنس p5js](https://p5js.org/reference/#/p5)

[کانال The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)




</div>
