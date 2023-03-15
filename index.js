        function disableselect(e){return false};
        function reEnable(){return true};
        document.onselectstart = new Function('return false');
        if(window.sidebar){
            document.onmousedown = disableselect();
            document.onclick = reEnable();
        }
        let word = ['ا',' ','ب',' ','پ',' ','ت',' ','ث',' ','ج',' ','چ',' ','ح',' ','خ',' ','د',' ','ذ',' ','ر',' ','ز',' ','ژ',' ','س',' ','ش',' ','ص',' ','ض',' ','ط',' ','ظ',' ','ع',' ','غ',' ','ف',' ','ق',' ','ک',' ','گ',' ','ل',' ','م',' ','ن',' ','و',' ','ه','','ی'];
        let word_whrite = document.querySelector('.stickman');
        for(let i=0; i<word.length; i++){
            let list = document.createElement('sapn');
            list.classList.add('a');
            list.innerText = word[i];
            word_whrite.appendChild(list);
            list.style.padding = '5px';
            list.style.borderRadius = '8px';
        }
        const word_select = document.querySelectorAll('.a');
        const whrite_word = document.querySelector('.fg');
        const mylives = document.querySelector('.mylives');
        let array_word = [];
        for(let j=0; j<word_select.length; j++){
          word_select[j].addEventListener('click', b);
          function b(){
            word_select[j].style.color = 'red';
            let d = word_select[j].childNodes[0].nodeValue;
            whrite_word.innerText += d;
            array_word.push(d);
          }
        }
        const button_delete = document.querySelector('.delete');
        button_delete.addEventListener('click', but_delete);
        function but_delete(){
            whrite_word.innerText = '';
            array_word.pop();
            for(let m=0; m<array_word.length; m++){
                whrite_word.innerText += array_word[m];
            }
        }
        let question = ['ان کیست که در ابتدا چهار پا دارد سپس دو پا و در نهایت سه پا',
        'چه اختراعی به شما اجازه می دهد ان طرف دیوار را نگاه کنید',
        'همراه چای است و همرنگ برف هم طعم عسل استو هم بوی اب',
        'کدام کلید است که هیچ دری را باز نمی کند',
        'کدام خانه بیشترین کتاب ها را دارد',
        'دارا ان را ندارد و ندار ان را دارد',
        'چیزی است که هم در اشپزخانه وجود دارد هم اتومبیل',
        'در گوش و چشم هست ولی در دهان نیست',
        'کدام حیوان را اگر برعکس کنید قرمز می شود',
        'ان کدام شبه فلزی است که اگر وارونه اش کنید نوعی سبزیجات می شود',
        'بدون هیچ علم و دانشی همه چیز را همانگونه که هست اشکار می سازد',
        'نوعی غذای فرنگی که هم خوردنش در ایران رواج دارد و هم در وسطش رود ایرانی قرار گرفته است',
        'دیده و چشیده نمی شود و با دستان هم لمس نمی گردد اما همه جا هست و همه به او نیاز دارند',
        'ان چیست که بدنش زرد است و لباسش سبز و موهایش سفید',
        'ان چیست که از ته پر می شود و از بالا خالی',
        'ان چیست که همه ان را می بینند ولی خدا ان را نمی بیند',
        'کدام حیوان است که از هر سوی که نگاهش کنید ادم را می درد',
        'چه چیزی را می توانید بگیرید اما پرتاب نکیند',
        'من زنده نیستم اما رشد می کنم من ریه ندارم اما به هوا احتیاج دارم ',
        'چه چیزی انقدر شکننده است که گفتن نامش ان را می شکند',
        'ان چیست که دو پا دارد و دو پای دیگر هم قرض می کند و می رود',
        'وقتی دو حرف به ان اضافه می کنید کدام کلمه پنج حرفی کوتاهتر می شود',
        'ان چیست که حول حیات خلوت می چرخد اما حرکت نمی کند',
        'ان کیست که هرچی اصلاح می کند باز نا مرتب است',
        'کلمه ای که همه می توانند ان را درست بنویسند',
        'گیاهی که نصفش لنگ است و نصف دیگرش غصه',
        'یک واژه بگویید که همه حروف در ان باشد',];
        const question_whrite = document.querySelector('.question');
        const sahih = document.querySelector('.sahih');
        const hint = document.querySelector('.hint');
        const level = document.querySelector('.level');
        const level_alert = document.querySelector('.level_alert');
        const javab_alert = document.querySelector('.javab_alert');
        let random_question = Math.floor(Math.random() * question.length);
        let random_question_array = [];
        random_question_array.push(random_question);
        let p_matn = question_whrite.innerText = question[random_question];
        let tedad_kaleme = document.querySelector('.clue');
        let array_number_word = [5,5,3,7,8,4,3,1,3,4,3,8,3,4,4,4,3,9,3,4,6,5,4,7,4,4,5];
        for(let g=0; g<array_number_word.length; g++){
            if(p_matn == question[g]){
                tedad_kaleme.innerText += array_number_word[g];
            }
        }
        function RAndom(){
            random_question = Math.floor(Math.random() * question.length);
            for(let i=0; i<random_question_array.length; i++){
                if(random_question == random_question_array[i]){
                    if(random_question_array.length == 27){
                        Alert_Victory();
                    }else{
                        RAndom();
                    }
                }else{
                    p_matn = question_whrite.innerText = question[random_question];
                    if(random_question_array.length == 27){
                        Alert_Victory();
                    }
                }
            }
        } 
        hint.addEventListener('click', hinte);
        let num = 0;
        level.innerText = num;
        let game_over = 3;
        mylives.innerText = game_over;
        mylives.style.color = 'green';
        level.style.color = 'aqua';
        function Color_item(){
            if(game_over == 2){
                mylives.style.color = 'yellow';
            }else if(game_over == 1){
                mylives.style.color = 'red';
            }
            console.log(num);
            if(num >= 5 && num < 10){
                level.style.color = 'orange';
            }else if(num >= 10 && num < 15){
                level.style.marginLeft = '-33px'
                level.style.color = 'yellow';
            }else if(num >= 15 && num < 20){
                level.style.color = '#007cff';
            }else if(num >= 20 && num < 25){
                level.style.color = 'pink';
            }else if(num >= 25){
                level.style.color = 'green';
            }
        }
        function True(){
            sahih.innerText = 'درست';
            sahih.style.color = 'green';
            RAndom();
            random_question_array.push(random_question);
            whrite_word.innerHTML = '';
            num = num+1;
            level.innerText = num;
            $(".level , .sahih").animate({
                fontSize : '6.6em',
            })
            $(".level , .sahih").animate({
                fontSize : '1.6em',
            })
            sahih.style.marginLeft = '-76px';
            hint.style.background = 'green';
            array_word = [];
            Color_item();
        }
        function False(){
            whrite_word.innerHTML = '';
            sahih.innerText = 'نادرست';
            sahih.style.color = 'red';
            $('.sahih , .absolute').animate({
                fontSize : '6.6em',
            })
            $('.sahih , .absolute').animate({
                fontSize : '1.6em',
            })
            sahih.style.marginLeft = '-76px';
            game_over--;
            hint.style.background = 'red';
            array_word = [];
            if(game_over == 0){
                Alert_Game_Over();
            }
            mylives.innerText = game_over;
            Color_item();
        }
        let word_div = document.querySelector('.word_div');
        let wrapper = document.querySelector('.wrapper');
        let Alert = document.querySelector('.alert');
        let vic_or_ove = document.querySelector('.vic_or_ove');
        let button_alert = document.querySelector('.button_alert');
        function Alert_Game_Over(){
            word_div.style.opacity = '0.1';
            wrapper.style.opacity = '0.1';
            Alert.style.display = 'block';
            level_alert.innerText = num;
            vic_or_ove.innerText = 'Game Over';
            button_alert.addEventListener('click', function(){
                window.location.reload();
            })
        }
        function Alert_Victory(){
            const victor = document.querySelector('.victor');
            word_div.style.opacity = '0.1';
            wrapper.style.opacity = '0.1';
            Alert.style.display = 'block';
            level_alert.innerText = num;
            vic_or_ove.innerText = 'Victory';
            victor.innerText = game_over + ' :فرصت ';
            victor.style.fontSize = '1.6em';
            button_alert.addEventListener('click', function(){
                window.location.reload();
            })
        }
        function hinte(){
            let sa = whrite_word.childNodes[0].nodeValue;
            if(p_matn == question[0]){
                if(sa == 'انسان'){
                    True();
                }else{
                    javab_alert.innerText = 'انسان';
                    False();
                }
            }else if(p_matn == question[1]){
                if(sa == 'پنجره'){
                    True();
                }else{
                    javab_alert.innerText = 'پنجره';
                    False();
                }
            }else if(p_matn == question[2]){
                if(sa == 'قند'){
                    True();
                }else{
                    javab_alert.innerText = 'قند';
                    False();
                }
            }else if(p_matn == question[3]){
                if(sa == 'کلیدبرق'){
                    True();
                }else{
                    javab_alert.innerText = 'کلیدبرق';
                    False();
                }
            }else if(p_matn == question[4]){
                if(sa == 'کتابخانه'){
                    True();
                }else{
                    javab_alert.innerText = 'کتابخانه';
                    False();
                }
            }else if(p_matn == question[5]){
                if(sa == 'نقطه'){
                    True();
                }else{
                    javab_alert.innerText = 'نقطه';
                    False();
                }
            }else if(p_matn == question[6]){
                if(sa == 'گاز'){
                    True();
                }else{
                    javab_alert.innerText = 'گاز';
                    False();
                }
            }else if(p_matn == question[7]){
                if(sa == 'ش'){
                    True();
                }else{
                    javab_alert.innerText = 'ش';
                    False();
                }
            }else if(p_matn == question[8]){
                if(sa == 'خرس'){
                    True();
                }else{
                    javab_alert.innerText = 'خرس';
                    False();
                }
            }else if(p_matn == question[9]){
                if(sa == 'جیوه'){
                    True();
                }else{
                    javab_alert.innerText = 'جیوه';
                    False();
                }
            }else if(p_matn == question[10]){
                if(sa == 'اینه'){
                    True();
                }else{
                    javab_alert.innerText = 'اینه';
                    False();
                }
            }else if(p_matn == question[11]){
                if(sa == 'ماکارونی'){
                    True();
                }else{
                    javab_alert.innerText = 'ماکارونی';
                    False();
                }
            }else if(p_matn == question[12]){
                if(sa == 'هوا'){
                    True();
                }else{
                    javab_alert.innerText = 'هوا';
                    False();
                }
            }else if(p_matn == question[13]){
                if(sa == 'بلال'){
                    True();
                }else{
                    javab_alert.innerText = 'بلال';
                    False();
                }
            }else if(p_matn == question[14]){
                if(sa == 'تفنگ'){
                    True();
                }else{
                    javab_alert.innerText = 'تفنگ';
                    False();
                }
            }else if(p_matn == question[15]){
                if(sa == 'خواب'){
                    True();
                }else{
                    javab_alert.innerText = 'خواب';
                    False();
                }
            }else if(p_matn == question[16]){
                if(sa == 'گرگ'){
                    True();
                }else{
                    javab_alert.innerText = 'گرگ';
                    False();
                }
            }else if(p_matn == question[17]){
                if(sa == 'سرماخوردگی'){
                    True();
                }else{
                    javab_alert.innerText = 'سرماخوردگی';
                    False();
                }
            }else if(p_matn == question[18]){
                if(sa == 'اتش'){
                    True();
                }else{
                    javab_alert.innerText = 'اتش';
                    False();
                }
            }else if(p_matn == question[19]){
                if(sa == 'سکوت'){
                    True();
                }else{
                    javab_alert.innerText = 'سکوت';
                    False();
                }
            }else if(p_matn == question[20]){
                if(sa == 'دوچرخه'){
                    True();
                }else{
                    javab_alert.innerText = 'دوچرخه';
                    False();
                }
            }else if(p_matn == question[21]){
                if(sa == 'کوتاه'){
                    True();
                }else{
                    javab_alert.innerText = 'کوتاه';
                    False();
                }
            }else if(p_matn == question[22]){
                if(sa == 'حصار'){
                    True();
                }else{
                    javab_alert.innerText = 'حصار';
                    False();
                }
            }else if(p_matn == question[23]){
                if(sa == 'ارایشگر'){
                    True();
                }else{
                    javab_alert.innerText = 'ارایشگر';
                    False();
                }
            }else if(p_matn == question[24]){
                if(sa == 'درست'){
                    True();
                }else{
                    javab_alert.innerText = 'درست';
                    False();
                }
            }else if(p_matn == question[25]){
                if(sa == 'شلغم'){
                    True();
                }else{
                    javab_alert.innerText = 'شلغم';
                    False();
                }
            }else if(p_matn == question[26]){
                if(sa == 'الفبا'){
                    True();
                }else{
                    javab_alert.innerText = 'الفبا';
                    False();
                }
            }
            for(let g=0; g<array_number_word.length; g++){
                if(p_matn == question[g]){
                    tedad_kaleme.innerText = 'تعداد حروف:' + array_number_word[g];
                }
            }
        }
