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
        let random_question = Math.floor(Math.random() * question.length);
        let p_matn = question_whrite.innerText = question[random_question];
        let tedad_kaleme = document.querySelector('.clue');
        if(p_matn == question[0]){
            tedad_kaleme.innerText += 5;
        }else if(p_matn == question[1]){
            tedad_kaleme.innerText += 5;
        }else if(p_matn == question[2]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[3]){
            tedad_kaleme.innerText += 7;
        }else if(p_matn == question[4]){
            tedad_kaleme.innerText += 8;
        }else if(p_matn == question[5]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[6]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[7]){
            tedad_kaleme.innerText += 1;
        }else if(p_matn == question[8]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[9]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[10]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[11]){
            tedad_kaleme.innerText += 8;
        }else if(p_matn == question[12]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[13]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[14]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[15]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[16]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[17]){
            tedad_kaleme.innerText += 9;
        }else if(p_matn == question[18]){
            tedad_kaleme.innerText += 3;
        }else if(p_matn == question[19]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[20]){
            tedad_kaleme.innerText += 6;
        }else if(p_matn == question[21]){
            tedad_kaleme.innerText += 5;
        }else if(p_matn == question[22]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[23]){
            tedad_kaleme.innerText += 7;
        }else if(p_matn == question[24]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[25]){
            tedad_kaleme.innerText += 4;
        }else if(p_matn == question[26]){
            tedad_kaleme.innerText += 5;
        }
        hint.addEventListener('click', hinte);
        let num = 0;
        level.innerText = num;
        let game_over = 3;
        mylives.innerText = game_over;
        function True(){
            sahih.innerText = 'درست';
            random_question = Math.floor(Math.random() * question.length);
            p_matn = question_whrite.innerText = question[random_question];
            whrite_word.innerHTML = '';
            num = num+1;
            level.innerText = num;
            hint.style.background = 'green';
            array_word = [];
        }
        function False(){
            whrite_word.innerHTML = '';
            sahih.innerText = 'نادرست';
            game_over--;
            hint.style.background = 'red';
            array_word = [];
            if(game_over == 0){
                window.location.reload();
            }
            mylives.innerText = game_over;
        }
        function hinte(){
            let sa = whrite_word.childNodes[0].nodeValue;
            if(p_matn == question[0]){
                if(sa == 'انسان'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[1]){
                if(sa == 'پنجره'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[2]){
                if(sa == 'قند'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[3]){
                if(sa == 'کلیدبرق'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[4]){
                if(sa == 'کتابخانه'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[5]){
                if(sa == 'نقطه'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[6]){
                if(sa == 'گاز'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[7]){
                if(sa == 'ش'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[8]){
                if(sa == 'خرس'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[9]){
                if(sa == 'جیوه'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[10]){
                if(sa == 'اینه'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[11]){
                if(sa == 'ماکارونی'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[12]){
                if(sa == 'هوا'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[13]){
                if(sa == 'بلال'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[14]){
                if(sa == 'تفنگ'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[15]){
                if(sa == 'خواب'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[16]){
                if(sa == 'گرگ'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[17]){
                if(sa == 'سرماخوردگی'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[18]){
                if(sa == 'اتش'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[19]){
                if(sa == 'سکوت'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[20]){
                if(sa == 'دوچرخه'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[21]){
                if(sa == 'کوتاه'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[22]){
                if(sa == 'حصار'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[23]){
                if(sa == 'ارایشگر'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[24]){
                if(sa == 'درست'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[25]){
                if(sa == 'شلغم'){
                    True();
                }else{
                    False();
                }
            }else if(p_matn == question[26]){
                if(sa == 'الفبا'){
                    True();
                }else{
                    False();
                }
            }
            if(p_matn == question[0]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 5;
            }else if(p_matn == question[1]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 5;
            }else if(p_matn == question[2]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[3]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 7;
            }else if(p_matn == question[4]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 8;
            }else if(p_matn == question[5]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[6]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[7]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 1;
            }else if(p_matn == question[8]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[9]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[10]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[11]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 8;
            }else if(p_matn == question[12]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[13]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[14]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[15]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[16]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[17]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 9;
            }else if(p_matn == question[18]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 3;
            }else if(p_matn == question[19]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[20]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 6;
            }else if(p_matn == question[21]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 5;
            }else if(p_matn == question[22]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[23]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 7;
            }else if(p_matn == question[24]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[25]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 4;
            }else if(p_matn == question[26]){
                tedad_kaleme.innerText = 'تعداد حروف:';
                tedad_kaleme.innerText += 5;
            }
        }
