


function delayScrollAnime() {
    var time = 0.2;//�x�����Ԃ𑝂₷�b���̒l
    var value = time;
    $('.delayScroll').each(function () {
        var parent = this;          //�e�v�f���擾
        var elemPos = $(this).offset().top;//�v�f�̈ʒu�܂ŗ�����
        var scroll = $(window).scrollTop();//�X�N���[���l���擾
        var windowHeight = $(window).height();//��ʂ̍������擾
        var childs = $(this).children();  //�q�v�f���擾

        if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//�w��̈���ɃX�N���[������������܂��e�v�f�ɃN���Xplay���Ȃ����
            $(childs).each(function () {

                if (!$(this).hasClass("fadeUp")) {//�A�j���[�V�����̃N���X�����w�肳��Ă��邩�ǂ������`�F�b�N

                    $(parent).addClass("play"); //�e�v�f�ɃN���X��play��ǉ�
                    $(this).css("animation-delay", value + "s");//�A�j���[�V�����x����CSS animation-delay��ǉ���
                    $(this).addClass("fadeUp");//�A�j���[�V�����̃N���X����ǉ�
                    value = value + time;//delay���Ԃ𑝉�������

                    //�S�Ă̏������I�������play���O��
                    var index = $(childs).index(this);
                    if ((childs.length - 1) == index) {
                        $(parent).removeClass("play");
                    }
                }
            })
        } else {
            $(childs).removeClass("fadeUp");//�A�j���[�V�����̃N���X�����폜
            value = time;//delay�����l�̐��l�ɖ߂�
        }
    })
}

$(document).ready(function () {
    prompt('���O����͂��Ă�������');
    delayScrollAnime();
});

$(function () {
    $('.js_typing_title').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
        prompt('���O����͂��Ă�������');
        delayScrollAnime();
    });
}


// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).scroll(function () {
    prompt('���O����͂��Ă�������');
    delayScrollAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
    prompt('���O����͂��Ă�������');
    delayScrollAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
