var arr = []
//�����l�̐ݒ�
function TypingInit() {
	$('.js_typing').each(function (i) { //js_typing�N���X��S�ď����������Ȃ�
		arr[i] = new ShuffleText(this);//���삳����e�L�X�g��z��Ɋi�[
	});
}
//�X�N���[�������ۂ̃A�j���[�V�����̐ݒ�
function TypingAnime() {
	$(".js_typing").each(function (i) {
		var elemPos = $(this).offset().top - 50;//�v�f���A50px���
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			if (!$(this).hasClass("endAnime")) {//endAnime�̃N���X�����邩�`�F�b�N
				arr[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
				arr[i].duration = 600;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
				$(this).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
			}
		}
	});
}

// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).scroll(function () {
	TypingAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
	TypingInit(); //�����ݒ�
	TypingAnime();/* �A�j���[�V�����p�̊֐����Ă�*/

	if (!$(js_typingh1).hasClass("endAnime")) {//endAnime�̃N���X�����邩�`�F�b�N
		arr[i].start();//�z��œo�^�e�L�X�g�̃A�j���[�V�����������Ȃ�
		arr[i].duration = 13600;//�e�L�X�g���ŏI�ω�����܂ł̎��ԁ��K��l600
		$(js_typingh1).addClass("endAnime");//�P�x�A�j���[�V���������ꍇ��endAnime�N���X��ǉ�
	}
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q

